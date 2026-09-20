// ============================================================
//  QUIZ APP – MAIN LOGIC
//  Features: Multi-quiz, Local Storage progress, Timer sounds
// ============================================================

class SoundManager {
    constructor() {
        this.enabled = localStorage.getItem('quiz-sound') !== '0';
        this.ctx = null;
    }

    ensureCtx() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    // Soft tick (last 60 seconds)
    playTick() {
        if (!this.enabled) return;
        this.ensureCtx();
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.frequency.value = 880;
        o.type = 'sine';
        g.gain.setValueAtTime(0.08, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
        o.start(); o.stop(this.ctx.currentTime + 0.08);
    }

    // Warning beep (5 min & 1 min left)
    playWarning() {
        if (!this.enabled) return;
        this.ensureCtx();
        const now = this.ctx.currentTime;
        [0, 0.18].forEach(delay => {
            const o = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            o.connect(g); g.connect(this.ctx.destination);
            o.frequency.value = 660;
            o.type = 'triangle';
            g.gain.setValueAtTime(0.15, now + delay);
            g.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.15);
            o.start(now + delay); o.stop(now + delay + 0.15);
        });
    }

    // Time up / submit sound
    playTimeUp() {
        if (!this.enabled) return;
        this.ensureCtx();
        const now = this.ctx.currentTime;
        [523, 392, 330].forEach((freq, i) => {
            const o = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            o.connect(g); g.connect(this.ctx.destination);
            o.frequency.value = freq;
            o.type = 'sine';
            const t = now + i * 0.22;
            g.gain.setValueAtTime(0.18, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            o.start(t); o.stop(t + 0.3);
        });
    }

    // Correct answer (optional soft chime)
    playCorrect() {
        if (!this.enabled) return;
        this.ensureCtx();
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.connect(g); g.connect(this.ctx.destination);
        o.frequency.value = 740;
        o.type = 'sine';
        g.gain.setValueAtTime(0.1, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
        o.start(); o.stop(this.ctx.currentTime + 0.2);
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('quiz-sound', this.enabled ? '1' : '0');
        return this.enabled;
    }
}


class TestApp {
    constructor(questions, meta) {
        this.qs = questions || [];
        this.meta = meta || {};
        this.quizId = meta.id || 'default';
        this.storageKey = `quiz-progress-${this.quizId}`;

        this.curQ = 0;
        this.ans = new Array(this.qs.length).fill(null);
        this.reviewed = new Array(this.qs.length).fill(false);
        this.startT = Date.now();
        this.timeLeft = (this.meta.duration || 90) * 60;
        this.timeSpent = new Array(this.qs.length).fill(0);
        this.lastQTime = this.startT;
        this.sub = false;
        this.eng = true;
        this.darkMode = localStorage.getItem('quiz-dark') === '1';
        this.timer = null;
        this.sounds = new SoundManager();
        this._warned5 = false;
        this._warned1 = false;

        // Adaptive difficulty
        const params = new URLSearchParams(location.search);
        this.adaptive = params.get('adaptive') === '1' || this.meta.adaptive === true
            || localStorage.getItem('quiz-adaptive') === '1';
        this.ability = 2; // 1=easy, 2=medium, 3=hard (current skill estimate)
        this.recentResults = []; // last N correct/wrong
        this.assignDifficulties();
        if (this.adaptive) this.buildAdaptiveOrder();

        if (this.darkMode) document.body.classList.add('dark-mode');

        this.initEls();
        this.tryRestoreProgress();
        this.init();
        this.setupBeforeUnload();
    }

    // ========== DIFFICULTY + ADAPTIVE + SPACED REPETITION ==========

    /** Assign difficulty 1=Easy, 2=Medium, 3=Hard */
    assignDifficulties() {
        this.qs.forEach((q, i) => {
            if (q.difficulty === 1 || q.difficulty === 2 || q.difficulty === 3) return;
            if (typeof q.difficulty === 'string') {
                const m = { easy: 1, medium: 2, hard: 3, e: 1, m: 2, h: 3 };
                const k = q.difficulty.toLowerCase().trim();
                if (m[k]) { q.difficulty = m[k]; return; }
            }
            q.difficulty = this.estimateDifficulty(q, i);
        });
        // Balance pools if heavily skewed
        this.rebalanceDifficulties();
    }

    estimateDifficulty(q, i) {
        const text = ((q.question || '') + ' ' + (q.options || []).join(' ')).toLowerCase();
        let score = 0;
        // Length
        if (text.length > 320) score += 2;
        else if (text.length > 160) score += 1;
        // Math / technical markers
        if (/\\frac|\\int|\\sum|\\sqrt|matrix|derivative|theorem|∫|∑|√/.test(text)) score += 2;
        if (/assert|reason|which of the following is incorrect|not true|except/.test(text)) score += 1;
        if (/calculate|find the value|prove|coefficient|expansion/.test(text)) score += 1;
        // Simple factual
        if (text.length < 90 && !/\\frac|calculate/.test(text)) score -= 1;
        // Spread by index so pools aren't empty
        if (score <= 0) return (i % 4 === 0) ? 2 : 1;
        if (score >= 3) return 3;
        return 2;
    }

    rebalanceDifficulties() {
        const counts = { 1: 0, 2: 0, 3: 0 };
        this.qs.forEach(q => counts[q.difficulty]++);
        const n = this.qs.length;
        if (n < 6) return;
        // If one bucket empty, move some mediums
        if (counts[1] === 0 || counts[3] === 0) {
            const med = this.qs.map((q, i) => ({ q, i })).filter(x => x.q.difficulty === 2);
            med.forEach((x, k) => {
                if (counts[1] === 0 && k % 3 === 0) { x.q.difficulty = 1; counts[1]++; }
                if (counts[3] === 0 && k % 3 === 1) { x.q.difficulty = 3; counts[3]++; }
            });
        }
    }

    buildAdaptiveOrder() {
        this.order = [];
        this.used = new Set();
        this.pools = { 1: [], 2: [], 3: [] };
        this.qs.forEach((q, i) => this.pools[q.difficulty || 2].push(i));
        // Shuffle each pool
        [1, 2, 3].forEach(d => {
            const a = this.pools[d];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
        });
        // Prefer due SRS items first if any
        const due = this.getDueReviewIndices();
        let first = null;
        if (due.length) first = due[0];
        else first = this.pools[2][0] ?? this.pools[1][0] ?? this.pools[3][0] ?? 0;
        this.order = [first];
        this.used.add(first);
        this.adaptivePath = true;
        this.curQ = 0;
        // Load prior ability for this quiz
        const ab = this.loadAbility();
        if (ab) this.ability = ab;
    }

    realIndex(logicalIdx) {
        if (this.adaptive && this.order) {
            if (logicalIdx < this.order.length) return this.order[logicalIdx];
            return null;
        }
        return logicalIdx;
    }

    /**
     * Adaptive pick: target difficulty ≈ ability,
     * with exploration and preference for SRS-due items.
     */
    pickNextAdaptive() {
        const due = this.getDueReviewIndices().filter(i => !this.used.has(i));
        if (due.length && Math.random() < 0.35) {
            const idx = due[0];
            this.used.add(idx);
            this.order.push(idx);
            return idx;
        }

        const target = Math.round(this.ability);
        // Soft probabilities toward target
        const prefer = [];
        [target, target + 1, target - 1, 2, 1, 3].forEach(d => {
            if (d >= 1 && d <= 3 && !prefer.includes(d)) prefer.push(d);
        });

        for (const d of prefer) {
            const pool = (this.pools[d] || []).filter(i => !this.used.has(i));
            if (!pool.length) continue;
            // Prefer items with lower success rate historically (harder for user)
            const ranked = pool.map(i => ({
                i,
                srs: this.getSrsItem(i),
                rand: Math.random()
            })).sort((a, b) => {
                const ea = a.srs ? a.srs.ease : 2.5;
                const eb = b.srs ? b.srs.ease : 2.5;
                return ea - eb || a.rand - b.rand;
            });
            const idx = ranked[0].i;
            this.used.add(idx);
            this.order.push(idx);
            return idx;
        }

        for (let i = 0; i < this.qs.length; i++) {
            if (!this.used.has(i)) {
                this.used.add(i);
                this.order.push(i);
                return i;
            }
        }
        return null;
    }

    /**
     * Elo-style ability update (1–3 scale).
     * Correct on hard → bigger gain; wrong on easy → bigger drop.
     */
    updateAbility(wasCorrect, questionDifficulty) {
        const d = questionDifficulty || 2;
        this.recentResults.push(wasCorrect ? 1 : 0);
        if (this.recentResults.length > 8) this.recentResults.shift();

        // Expected score given ability vs difficulty
        const expected = 1 / (1 + Math.pow(10, (d - this.ability) / 1.5));
        const actual = wasCorrect ? 1 : 0;
        const K = 0.55;
        this.ability = this.ability + K * (actual - expected);
        this.ability = Math.max(1, Math.min(3, this.ability));
        this.saveAbility();
    }

    difficultyLabel(d) {
        d = Math.round(Number(d) || 2);
        return d <= 1 ? 'Easy' : d === 2 ? 'Medium' : 'Hard';
    }

    difficultyColor(d) {
        d = Math.round(Number(d) || 2);
        return d <= 1 ? '#10B981' : d === 2 ? '#F59E0B' : '#EF4444';
    }

    // ----- Spaced Repetition (SM-2 inspired) -----
    srsKey() {
        return `quiz-srs-${this.quizId}`;
    }

    abilityKey() {
        return `quiz-ability-${this.quizId}`;
    }

    loadAbility() {
        try {
            const v = parseFloat(localStorage.getItem(this.abilityKey()));
            return isNaN(v) ? null : Math.max(1, Math.min(3, v));
        } catch { return null; }
    }

    saveAbility() {
        try { localStorage.setItem(this.abilityKey(), String(this.ability)); } catch {}
    }

    loadSrs() {
        try {
            const raw = localStorage.getItem(this.srsKey());
            return raw ? JSON.parse(raw) : {};
        } catch { return {}; }
    }

    saveSrs(map) {
        try { localStorage.setItem(this.srsKey(), JSON.stringify(map)); } catch {}
    }

    getSrsItem(realIdx) {
        const map = this.loadSrs();
        return map[String(realIdx)] || null;
    }

    /**
     * Update SRS after answering.
     * quality: 0 fail, 1 hard-correct, 2 good, 3 easy (we map from correct + time)
     */
    updateSrs(realIdx, wasCorrect, timeSec) {
        const map = this.loadSrs();
        const key = String(realIdx);
        let item = map[key] || {
            ease: 2.5,
            interval: 0,
            reps: 0,
            due: Date.now(),
            lapses: 0,
            correct: 0,
            wrong: 0
        };

        if (wasCorrect) item.correct++;
        else item.wrong++;

        // Quality 0–5 SM-2 style
        let q = 0;
        if (!wasCorrect) q = 1;
        else if (timeSec > 60) q = 3;
        else if (timeSec > 25) q = 4;
        else q = 5;

        if (q < 3) {
            item.reps = 0;
            item.interval = 0.01; // ~15 min retry
            item.lapses++;
            item.ease = Math.max(1.3, item.ease - 0.2);
        } else {
            if (item.reps === 0) item.interval = 1; // 1 day
            else if (item.reps === 1) item.interval = 3;
            else item.interval = Math.round(item.interval * item.ease);
            item.reps++;
            item.ease = Math.max(1.3, item.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
        }
        item.due = Date.now() + item.interval * 24 * 60 * 60 * 1000;
        item.last = Date.now();
        map[key] = item;
        this.saveSrs(map);
    }

    getDueReviewIndices() {
        const map = this.loadSrs();
        const now = Date.now();
        const due = [];
        Object.keys(map).forEach(k => {
            const idx = parseInt(k, 10);
            if (isNaN(idx) || idx < 0 || idx >= this.qs.length) return;
            if ((map[k].due || 0) <= now) due.push(idx);
        });
        // Weak items first (low ease)
        due.sort((a, b) => (map[String(a)].ease || 2.5) - (map[String(b)].ease || 2.5));
        return due;
    }

    getSrsStats() {
        const map = this.loadSrs();
        let due = 0, learning = 0, mature = 0;
        const now = Date.now();
        Object.values(map).forEach(it => {
            if ((it.due || 0) <= now) due++;
            else if ((it.reps || 0) < 3) learning++;
            else mature++;
        });
        return { due, learning, mature, total: Object.keys(map).length };
    }

    // ---------- Local Storage ----------
    saveProgress() {
        if (this.sub) {
            localStorage.removeItem(this.storageKey);
            return;
        }
        const data = {
            curQ: this.curQ,
            ans: this.ans,
            reviewed: this.reviewed,
            timeLeft: this.timeLeft,
            timeSpent: this.timeSpent,
            startT: this.startT,
            eng: this.eng,
            adaptive: this.adaptive,
            ability: this.ability,
            order: this.order || null,
            used: this.used ? [...this.used] : null,
            recentResults: this.recentResults || [],
            savedAt: Date.now()
        };
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (e) { /* quota exceeded – ignore */ }
    }

    loadProgress() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            return null;
        }
    }

    clearProgress() {
        localStorage.removeItem(this.storageKey);
    }

    tryRestoreProgress() {
        const data = this.loadProgress();
        if (!data) return;

        // If saved more than 24 hours ago, discard
        if (Date.now() - (data.savedAt || 0) > 24 * 60 * 60 * 1000) {
            this.clearProgress();
            return;
        }

        // Ask user
        const answered = (data.ans || []).filter(a => a !== null).length;
        const mins = Math.floor((data.timeLeft || 0) / 60);
        const secs = (data.timeLeft || 0) % 60;
        const msg = `You have a saved progress for this quiz.\n\n` +
                    `Answered: ${answered}/${this.qs.length}\n` +
                    `Time left: ${mins}m ${secs}s\n\n` +
                    `Resume where you left off?`;

        if (confirm(msg)) {
            this.curQ = Math.min(data.curQ || 0, this.qs.length - 1);
            this.ans = data.ans || this.ans;
            this.reviewed = data.reviewed || this.reviewed;
            this.timeLeft = data.timeLeft ?? this.timeLeft;
            this.timeSpent = data.timeSpent || this.timeSpent;
            this.startT = data.startT || this.startT;
            this.eng = data.eng !== false;
            if (this.adaptive && data.order) {
                this.order = data.order;
                this.used = new Set(data.used || data.order);
                this.ability = data.ability || 2;
                this.recentResults = data.recentResults || [];
                // rebuild pools excluding used
                this.pools = { 1: [], 2: [], 3: [] };
                this.qs.forEach((q, i) => {
                    if (!this.used.has(i)) this.pools[q.difficulty || 2].push(i);
                });
            }
            // Make arrays correct length if question count changed
            while (this.ans.length < this.qs.length) this.ans.push(null);
            while (this.reviewed.length < this.qs.length) this.reviewed.push(false);
            while (this.timeSpent.length < this.qs.length) this.timeSpent.push(0);
            this.ans = this.ans.slice(0, this.qs.length);
            this.reviewed = this.reviewed.slice(0, this.qs.length);
            this.timeSpent = this.timeSpent.slice(0, this.qs.length);
        } else {
            this.clearProgress();
        }
    }

    setupBeforeUnload() {
        window.addEventListener('beforeunload', (e) => {
            if (!this.sub) {
                this.saveProgress();
                e.preventDefault();
                e.returnValue = '';
            }
        });
        // Also save periodically
        setInterval(() => {
            if (!this.sub) this.saveProgress();
        }, 15000);
    }

    initEls() {
        this.els = {
            qInfo: document.getElementById('qInfo'),
            progTxt: document.getElementById('progTxt'),
            ansCnt: document.getElementById('ansCnt'),
            timer: document.getElementById('timer'),
            qTxt: document.getElementById('qTxt'),
            compSec: document.getElementById('compSec'),
            compCont: document.getElementById('compCont'),
            opts: document.getElementById('opts'),
            sol: document.getElementById('sol'),
            solCont: document.getElementById('solCont'),
            solInfo: document.getElementById('solInfo'),
            qGrid: document.getElementById('qGrid'),
            desktopQGrid: document.getElementById('desktopQGrid'),
            panel: document.getElementById('panel'),
            modalOver: document.getElementById('modalOver'),
            scoreDisp: document.getElementById('scoreDisp'),
            corrStat: document.getElementById('corrStat'),
            incStat: document.getElementById('incStat'),
            unaStat: document.getElementById('unaStat'),
            timeStat: document.getElementById('timeStat'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            reviewBtn: document.getElementById('reviewBtn'),
            subBtn: document.getElementById('subBtn'),
            menuBtn: document.getElementById('menuBtn'),
            panelClose: document.getElementById('panelClose'),
            closeModal: document.getElementById('closeModal'),
            revBtn: document.getElementById('revBtn'),
            engBtn: document.getElementById('engBtn'),
            hinBtn: document.getElementById('hinBtn'),
            themeToggle: document.getElementById('themeToggle'),
            soundToggle: document.getElementById('soundToggle'),
            printBtn: document.getElementById('printBtn'),
            quizTitle: document.getElementById('quizTitle'),
            loading: document.getElementById('loading')
        };
    }

    init() {
        if (this.els.quizTitle && this.meta.title) {
            this.els.quizTitle.textContent = this.meta.title;
            document.title = this.meta.title + ' – Gyanpoints';
        }
        this.createGrid();
        this.setupEvents();
        this.loadQ(this.curQ);
        this.startTimer();
        this.updateAnsCnt();
        this.updateThemeIcon();
        this.updateSoundIcon();
        this.applyLanguage();
        if (this.els.loading) this.els.loading.classList.add('hidden');
    }

    setupEvents() {
        this.els.prevBtn.addEventListener('click', () => this.nav(-1));
        this.els.nextBtn.addEventListener('click', () => {
            if (this.els.nextBtn.dataset.mode === 'submit') this.confirmSub();
            else this.nav(1);
        });
        this.els.reviewBtn.addEventListener('click', () => this.toggleReview());
        this.els.subBtn.addEventListener('click', () => this.confirmSub());
        this.els.menuBtn.addEventListener('click', () => this.togglePanel());
        this.els.panelClose.addEventListener('click', () => this.closePanel());
        this.els.closeModal.addEventListener('click', () => this.closeModal());
        this.els.revBtn.addEventListener('click', () => this.review());
        this.els.engBtn.addEventListener('click', () => this.setLang(true));
        this.els.hinBtn.addEventListener('click', () => this.setLang(false));
        this.els.themeToggle.addEventListener('click', () => this.toggleTheme());
        if (this.els.soundToggle) {
            this.els.soundToggle.addEventListener('click', () => {
                this.sounds.toggle();
                this.updateSoundIcon();
            });
        }
        this.els.printBtn.addEventListener('click', () => this.printTest());
    }

    // ---------- Timer + Sounds ----------
    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            // Warning sounds
            if (this.timeLeft === 300 && !this._warned5) {   // 5 minutes
                this._warned5 = true;
                this.sounds.playWarning();
            }
            if (this.timeLeft === 60 && !this._warned1) {    // 1 minute
                this._warned1 = true;
                this.sounds.playWarning();
            }
            // Tick every second in last 30 seconds
            if (this.timeLeft > 0 && this.timeLeft <= 30) {
                this.sounds.playTick();
            }

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.sounds.playTimeUp();
                this.subTest();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
    }

    updateTimerDisplay() {
        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        this.els.timer.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if (this.timeLeft <= 60) this.els.timer.style.color = 'var(--d)';
        else if (this.timeLeft <= 300) this.els.timer.style.color = 'var(--w)';
        else this.els.timer.style.color = '';
    }

    // ---------- Question loading ----------
    loadQ(idx) {
        const now = Date.now();
        if (this.lastQTime) this.timeSpent[this.curQ] += (now - this.lastQTime) / 1000;
        this.lastQTime = now;
        this.curQ = idx;

        const real = this.adaptive ? this.realIndex(idx) : idx;
        if (real === null || real === undefined) return;
        const q = this.qs[real];
        if (!q) return;

        const total = this.qs.length;
        this.els.qInfo.textContent = `Q${idx+1}/${total}`;
        this.els.progTxt.textContent = `${idx+1} of ${total}`;

        // Difficulty badge
        this.updateDiffBadge(q);

        if (q.comprehension) {
            this.els.compSec.style.display = 'block';
            this.els.compCont.innerHTML = this.processHtml(q.comprehension);
        } else {
            this.els.compSec.style.display = 'none';
            this.els.compCont.innerHTML = '';
        }

        this.els.qTxt.innerHTML = this.processHtml(this.qText(q));
        this.loadOpts(q, real);

        if (this.sub) this.showSolution(q, real);
        else this.els.sol.style.display = 'none';

        this.updateNav();
        this.updateGrid();
        this.updateReviewButton();
        this.applyLanguage();
        this.saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.typesetMath();
    }

    updateDiffBadge(q) {
        let badge = document.getElementById('diffBadge');
        if (!badge) {
            badge = document.createElement('span');
            badge.id = 'diffBadge';
            badge.className = 'diff-badge';
            const host = this.els.qInfo?.parentElement || document.querySelector('.hdr-l');
            if (host) host.appendChild(badge);
        }
        if (!this.adaptive) {
            badge.style.display = 'none';
            return;
        }
        const d = q.difficulty || 2;
        badge.style.display = 'inline-flex';
        badge.textContent = this.difficultyLabel(d);
        badge.style.background = this.difficultyColor(d);
        const srs = this.getSrsStats();
        badge.title = (this.adaptive
            ? `Adaptive · Your level: ${this.difficultyLabel(this.ability)} (${this.ability.toFixed(1)})`
            : 'Question difficulty') + ` · Reviews due: ${srs.due}`;
    }

    typesetMath() {
        const run = () => {
            if (!window.MathJax || !window.MathJax.typesetPromise) return;
            const els = [this.els.qTxt, this.els.opts, this.els.solCont, this.els.compCont].filter(Boolean);
            window.MathJax.typesetClear && window.MathJax.typesetClear(els);
            window.MathJax.typesetPromise(els).catch(() => {});
        };
        if (window.MathJax && window.MathJax.typesetPromise) run();
        else document.addEventListener('mathjax-ready', run, { once: true });
        // fallback retry (CDN load delay)
        setTimeout(run, 400);
        setTimeout(run, 1200);
    }

    loadOpts(q, qIdx) {
        this.els.opts.innerHTML = '';
        const letters = ['A','B','C','D','E','F'];
        const opts = this.qOptions(q);
        opts.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'opt';
            if (this.sub) {
                if (i === q.correct_option_id) div.classList.add('correct');
                if (this.ans[qIdx] === i && i !== q.correct_option_id) div.classList.add('wrong');
            } else if (this.ans[qIdx] === i) {
                div.classList.add('selected');
            }
            div.innerHTML = `<div class="opt-ltr">${letters[i]}</div><div class="opt-txt">${this.processHtml(opt)}</div>`;
            if (!this.sub) div.addEventListener('click', () => this.selOpt(qIdx, i));
            this.els.opts.appendChild(div);
        });
    }

    selOpt(qIdx, optIdx) {
        // qIdx is real question index
        this.ans[qIdx] = optIdx;
        this.loadOpts(this.qs[qIdx], qIdx);
        if (!this.sub) {
            const q = this.qs[qIdx];
            const correct = optIdx === q.correct_option_id;
            const spent = (Date.now() - this.lastQTime) / 1000;
            // Always update spaced repetition
            this.updateSrs(qIdx, correct, spent);
            if (this.adaptive) {
                this.updateAbility(correct, q.difficulty || 2);
                this.updateDiffBadge(q); // refresh title with ability
            }
        }
        this.updateAnsCnt();
        this.updateGrid();
        this.saveProgress();
        this.typesetMath();
    }

    showSolution(q, idx) {
        this.els.sol.style.display = 'block';
        const user = this.ans[idx];
        const correct = q.correct_option_id;
        const letters = ['A','B','C','D','E','F'];
        let info = '';
        if (user === null) info = '<span style="color:var(--txtL)">Not attempted</span>';
        else if (user === correct) info = '<span style="color:var(--s)"><i class="fas fa-check-circle"></i> Correct</span>';
        else info = `<span style="color:var(--d)"><i class="fas fa-times-circle"></i> Incorrect (Yours: ${letters[user]})</span>`;
        info += ` &nbsp;|&nbsp; Answer: <b>${letters[correct]}</b>`;
        const t = Math.round(this.timeSpent[idx] || 0);
        const m = Math.floor(t/60), s = t%60;
        info += ` &nbsp;|&nbsp; ${m > 0 ? m+'m ' : ''}${s}s`;
        this.els.solInfo.innerHTML = info;
        this.els.solCont.innerHTML = this.processHtml(this.qSolution(q));
    }

    nav(dir) {
        if (dir > 0 && this.adaptive && !this.sub) {
            // Ensure next question is picked adaptively
            if (this.curQ + 1 >= this.order.length) {
                const nextReal = this.pickNextAdaptive();
                if (nextReal === null) {
                    // all done
                    this.confirmSub();
                    return;
                }
            }
            const next = this.curQ + 1;
            if (next < this.order.length) this.loadQ(next);
            return;
        }
        if (dir < 0 && this.adaptive) {
            const next = this.curQ - 1;
            if (next >= 0) this.loadQ(next);
            return;
        }
        const next = this.curQ + dir;
        if (next >= 0 && next < this.qs.length) this.loadQ(next);
    }


    updateNav() {
        const isFirst = this.curQ === 0;
        const isLast = this.adaptive
            ? (this.used && this.used.size >= this.qs.length && this.curQ >= this.order.length - 1)
            : (this.curQ === this.qs.length - 1);

        this.els.prevBtn.disabled = isFirst;
        this.els.nextBtn.disabled = false;
        this.els.nextBtn.style.display = 'inline-flex';
        this.els.nextBtn.style.visibility = 'visible';
        this.els.nextBtn.style.opacity = '1';

        // On last question, label becomes Submit
        if (isLast && !this.sub) {
            this.els.nextBtn.innerHTML = '<span class="nav-label">Submit </span><i class="fas fa-check"></i>';
            this.els.nextBtn.dataset.mode = 'submit';
            this.els.nextBtn.setAttribute('aria-label', 'Submit');
        } else {
            this.els.nextBtn.innerHTML = '<span class="nav-label">Next </span><i class="fas fa-chevron-right"></i>';
            this.els.nextBtn.dataset.mode = 'next';
            this.els.nextBtn.setAttribute('aria-label', 'Next');
        }
        // Force visible every time
        this.els.nextBtn.style.cssText += ';display:inline-flex!important;visibility:visible!important;opacity:1!important;';
    }

    toggleReview() {
        this.reviewed[this.curQ] = !this.reviewed[this.curQ];
        this.updateReviewButton();
        this.updateGrid();
        this.saveProgress();
    }

    updateReviewButton() {
        if (this.reviewed[this.curQ]) {
            this.els.reviewBtn.classList.add('active');
            this.els.reviewBtn.innerHTML = '<i class="fas fa-flag"></i> <span class="nav-label">Marked</span>';
        } else {
            this.els.reviewBtn.classList.remove('active');
            this.els.reviewBtn.innerHTML = '<i class="fas fa-flag"></i> <span class="nav-label">Review</span>';
        }
    }

    createGrid() {
        const make = (i) => {
            const c = document.createElement('div');
            c.className = 'q-num';
            c.textContent = i + 1;
            c.addEventListener('click', () => this.goToQ(i));
            return c;
        };
        this.els.qGrid.innerHTML = '';
        this.els.desktopQGrid.innerHTML = '';
        this.qs.forEach((_, i) => {
            this.els.qGrid.appendChild(make(i));
            this.els.desktopQGrid.appendChild(make(i));
        });
        this.updateGrid();
    }

    goToQ(idx) {
        this.closePanel();
        if (this.adaptive) {
            // Can only jump to already revealed positions in order
            if (idx < this.order.length) this.loadQ(idx);
            return;
        }
        this.loadQ(idx);
    }

    updateGrid() {
        const upd = (grid) => {
            if (!grid) return;
            grid.querySelectorAll('.q-num').forEach((cell, i) => {
                cell.className = 'q-num';
                if (i === this.curQ) cell.classList.add('current');
                const real = this.adaptive ? (this.order && this.order[i]) : i;
                if (real === undefined || real === null) {
                    cell.classList.add('locked');
                    return;
                }
                if (this.sub) {
                    if (this.ans[real] === null) cell.classList.add('unattempted');
                    else if (this.ans[real] === this.qs[real].correct_option_id) cell.classList.add('ans');
                    else cell.classList.add('wrong');
                } else {
                    if (this.ans[real] !== null) cell.classList.add('ans');
                    if (this.reviewed[real]) cell.classList.add('review');
                }
            });
        };
        upd(this.els.qGrid);
        upd(this.els.desktopQGrid);
    }

    updateAnsCnt() {
        this.els.ansCnt.textContent = this.ans.filter(a => a !== null).length;
    }

    togglePanel() { this.els.panel.classList.toggle('open'); }
    closePanel() { this.els.panel.classList.remove('open'); }

    setLang(eng) {
        this.eng = eng;
        if (this.els.engBtn) this.els.engBtn.classList.toggle('active', eng);
        if (this.els.hinBtn) this.els.hinBtn.classList.toggle('active', !eng);
        // Reload current question so bilingual fields apply
        this.loadQ(this.curQ);
        this.saveProgress();
    }

    /** Pick English or Hindi text for a question field */
    qText(q) {
        if (!this.eng && q.question_hi) return q.question_hi;
        return q.question || '';
    }

    qOptions(q) {
        if (!this.eng && Array.isArray(q.options_hi) && q.options_hi.length === (q.options || []).length) {
            return q.options_hi;
        }
        return q.options || [];
    }

    qSolution(q) {
        if (!this.eng && q.solution_hi) return q.solution_hi;
        return q.solution || 'No solution provided.';
    }

    applyLanguage() {
        document.querySelectorAll('.eqt').forEach(el => el.style.display = this.eng ? '' : 'none');
        document.querySelectorAll('.hqt').forEach(el => el.style.display = this.eng ? 'none' : '');
        if (this.els.engBtn) {
            this.els.engBtn.classList.toggle('active', this.eng);
            this.els.engBtn.setAttribute('aria-pressed', this.eng ? 'true' : 'false');
        }
        if (this.els.hinBtn) {
            this.els.hinBtn.classList.toggle('active', !this.eng);
            this.els.hinBtn.setAttribute('aria-pressed', this.eng ? 'false' : 'true');
        }
        document.body.classList.toggle('lang-hi', !this.eng);
        document.body.classList.toggle('lang-en', this.eng);
        // Hide any old hint element
        const hint = document.getElementById('langHint');
        if (hint) hint.style.display = 'none';
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
        localStorage.setItem('quiz-dark', this.darkMode ? '1' : '0');
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        this.els.themeToggle.innerHTML = this.darkMode
            ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    updateSoundIcon() {
        if (!this.els.soundToggle) return;
        this.els.soundToggle.innerHTML = this.sounds.enabled
            ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
        this.els.soundToggle.title = this.sounds.enabled ? 'Sound ON' : 'Sound OFF';
    }

    confirmSub() {
        const left = this.ans.filter(a => a === null).length;
        const msg = left > 0
            ? `You have ${left} unanswered question(s). Submit anyway?`
            : 'Are you sure you want to submit?';
        if (confirm(msg)) this.subTest();
    }

    subTest() {
        this.sub = true;
        this.stopTimer();
        this.timeSpent[this.curQ] += (Date.now() - this.lastQTime) / 1000;
        this.clearProgress();          // clear saved progress after submit
        this.sounds.playTimeUp();
        this.showResults();
        this.loadQ(this.curQ);
        this.updateGrid();
        this.els.printBtn.style.display = 'flex';
        this.els.subBtn.style.display = 'none';
    }

    calcResults() {
        let correct = 0, incorrect = 0, unattempted = 0;
        this.qs.forEach((q, i) => {
            if (this.ans[i] === null) unattempted++;
            else if (this.ans[i] === q.correct_option_id) correct++;
            else incorrect++;
        });
        const minutes = Math.round((Date.now() - this.startT) / 60000);
        return { correct, incorrect, unattempted, minutes, total: this.qs.length };
    }

    showResults() {
        const r = this.calcResults();
        this.els.scoreDisp.textContent = `${r.correct}/${r.total}`;
        this.els.corrStat.textContent = r.correct;
        this.els.incStat.textContent = r.incorrect;
        this.els.unaStat.textContent = r.unattempted;
        this.els.timeStat.textContent = r.minutes;
        // Ability + SRS summary
        let extra = document.getElementById('adaptSrsSummary');
        if (!extra && this.els.modalOver) {
            extra = document.createElement('div');
            extra.id = 'adaptSrsSummary';
            extra.className = 'adapt-srs-summary';
            const result = this.els.modalOver.querySelector('.result');
            if (result) result.appendChild(extra);
        }
        if (extra) {
            const srs = this.getSrsStats();
            extra.innerHTML = `
              <div class="srs-line"><strong>Skill level:</strong> ${this.difficultyLabel(this.ability)} (${this.ability.toFixed(2)} / 3)</div>
              <div class="srs-line"><strong>Spaced repetition:</strong> ${srs.due} due · ${srs.learning} learning · ${srs.mature} mastered</div>
              <p class="srs-hint">Come back later — due questions will appear first in Adaptive mode.</p>`;
        }
        this.els.modalOver.classList.add('show');
    }

    closeModal() { this.els.modalOver.classList.remove('show'); }

    review() {
        this.closeModal();
        for (let i = 0; i < this.qs.length; i++) {
            if (this.ans[i] === null || this.ans[i] !== this.qs[i].correct_option_id) {
                this.loadQ(i); return;
            }
        }
        this.loadQ(0);
    }

    processHtml(html) {
        if (!html) return '';
        // Only convert plain text IF it has no existing LaTeX delimiters
        html = this.toLatex(String(html));
        const temp = document.createElement('div');
        temp.innerHTML = html;
        temp.querySelectorAll('table').forEach(table => {
            const wrap = document.createElement('div');
            wrap.className = 'table-container';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        });
        return temp.innerHTML;
    }

    /**
     * Safe plain-text → LaTeX. Never double-process.
     * Skips if already contains $ or \( 
     */
    toLatex(text) {
        if (!text) return '';
        // Already has LaTeX delimiters — leave alone
        if (/\$|\\\(|\\\[|\\begin\{/.test(text)) return text;

        let s = text;

        // Unicode superscripts / subscripts
        const supMap = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-'};
        s = s.replace(/([A-Za-z0-9])([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)/g, (_, base, sup) => {
            const latex = [...sup].map(c => supMap[c] || c).join('');
            return '$' + base + '^{' + latex + '}$';
        });
        const subMap = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
        s = s.replace(/([A-Za-z])([₀₁₂₃₄₅₆₇₈₉]+)/g, (_, base, sub) => {
            const latex = [...sub].map(c => subMap[c] || c).join('');
            return '$' + base + '_{' + latex + '}$';
        });

        // Resistance: 2Ω
        s = s.replace(/(\d+(?:\.\d+)?)\s*Ω/g, (_, n) => '$' + n + '\\,\\Omega$');

        // Simple chem formulas: H2O, CO2, H2SO4, Na2CO3 (ASCII digits)
        s = s.replace(/\b([A-Z][a-z]?)(\d+)(?![0-9a-zA-Z])/g, (m, el, n) => {
            const ok = ['H','C','N','O','S','P','F','B','I','K','V','W','Y',
                'Cl','Br','Fe','Cu','Zn','Na','Ca','Mg','Al','Ag','Pb','Mn','Ba','Li','Be','Ne','He','Ar','Si','Ni','Co','Cr','Ti','Sr','Sn'];
            if (ok.includes(el)) return '$\\mathrm{' + el + '}_{' + n + '}$';
            return m;
        });
        // Multi-part like H2SO4 already partially converted; chain H_{2}SO4 → H_{2}SO_{4}
        s = s.replace(/\$\\mathrm\{([A-Za-z]+)\}_\{(\d+)\}\$([A-Z][a-z]?)(\d+)/g,
            (_, a, n, b, m) => '$\\mathrm{' + a + '}_{' + n + '}' + b + '_{' + m + '}$');

        // x^2 ASCII caret
        s = s.replace(/([A-Za-z0-9])\^(\d+)/g, '$$$1^{$2}$$');

        return s;
    }


    printTest() {
        const r = this.calcResults();
        const letters = ['A','B','C','D','E','F'];
        let html = '';
        this.qs.forEach((q, i) => {
            const user = this.ans[i];
            let status = 'Unattempted';
            if (user !== null) status = user === q.correct_option_id ? 'Correct' : 'Incorrect';
            const cleanQ = (q.question || '').replace(/<span class="hqt"[^>]*>[\s\S]*?<\/span>/gi, '');
            html += `<div style="margin-bottom:22px;page-break-inside:avoid">
                <h3>Q${i+1} (${status})</h3>
                <div>${cleanQ}</div>
                <ul>${q.options.map((o, oi) => {
                    const clean = (o||'').replace(/<span class="hqt"[^>]*>[\s\S]*?<\/span>/gi, '');
                    const mark = oi === q.correct_option_id ? ' ✓' : (oi === user ? ' ✗' : '');
                    return `<li>${letters[oi]}. ${clean}${mark}</li>`;
                }).join('')}</ul>
                ${q.solution ? `<div><b>Solution:</b> ${q.solution}</div>` : ''}
            </div>`;
        });
        const w = window.open('', '_blank');
        w.document.write(`<!DOCTYPE html><html><head><title>Result</title>
            <style>body{font-family:system-ui;padding:20px;line-height:1.5}h2{color:#4F46E5}</style>
            </head><body>
            <h2>${this.meta.title || 'Quiz'} – Result</h2>
            <p><b>Score:</b> ${r.correct}/${r.total} &nbsp;|&nbsp;
               Correct: ${r.correct} &nbsp; Incorrect: ${r.incorrect} &nbsp;
               Unattempted: ${r.unattempted} &nbsp; Time: ${r.minutes} min</p>
            <hr>${html}
            <script>setTimeout(()=>window.print(),400)<\/script>
            </body></html>`);
        w.document.close();
    }
}

// ---------- Boot ----------
(function () {
    const params = new URLSearchParams(window.location.search);
    const quizId = params.get('id');

    if (!quizId) {
        window.location.href = 'index.html';
        return;
    }

    const meta = (typeof QUIZ_LIST !== 'undefined')
        ? QUIZ_LIST.find(q => q.id === quizId)
        : null;

    if (!meta) {
        document.body.innerHTML = '<div style="padding:40px;text-align:center"><h2>Quiz not found</h2><a href="index.html">Go Home</a></div>';
        return;
    }

    const script = document.createElement('script');
    script.src = meta.questionsFile;
    script.onload = () => {
        if (typeof QUESTIONS === 'undefined' || !QUESTIONS.length) {
            document.body.innerHTML = '<div style="padding:40px;text-align:center"><h2>No questions in this quiz</h2><a href="index.html">Go Home</a></div>';
            return;
        }
        new TestApp(QUESTIONS, meta);
    };
    script.onerror = () => {
        document.body.innerHTML = `<div style="padding:40px;text-align:center"><h2>Failed to load quiz file</h2><p>${meta.questionsFile}</p><a href="index.html">Go Home</a></div>`;
    };
    document.head.appendChild(script);
})();
