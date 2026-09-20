# Gyanpoints Quiz App

Fully functional quiz platform for **https://gyanpoints.com/**

## Features

- Multiple quizzes (Class 10 GyanPoints, NEET, Chemistry, Maths, etc.)
- **Adaptive difficulty** (Easy / Medium / Hard)
- **Spaced repetition** (SM-2 style reviews)
- MathJax LaTeX rendering
- LocalStorage progress + skill level
- Timer, review marks, results, print
- Mobile responsive + dark mode
- WordPress embed / shortcode

## Adaptive difficulty

| Badge | Level |
|-------|--------|
| Green | Easy |
| Orange | Medium |
| Hard | Hard |

- Skill (1–3) uses an **Elo-style** update from each answer
- Correct on hard → bigger gain; wrong on easy → bigger drop
- Next question is drawn from the pool matching your skill
- Due **spaced-repetition** items get priority (~35% of the time)

### Spaced repetition

- Each answer updates ease, interval, and due date (SM-2 inspired)
- Failed cards return in minutes/days; strong cards space out
- Stats on the results screen: due / learning / mastered
- Stored in `localStorage` per quiz (`quiz-srs-{id}`)

## How to run

### Static / FTP (WordPress)

See **`wordpress/README-WORDPRESS.md`**

```
https://gyanpoints.com/quiz/index.html
https://gyanpoints.com/quiz/quiz.html?id=udaan-physics&adaptive=1
```

### Local

Open `index.html` in a browser (or `python3 -m http.server 8080`).

## Modes

- **Normal** – original question order  
- **Adaptive** – difficulty + SRS (`&adaptive=1`)

## Optional difficulty in data

```js
{
  question: "...",
  options: ["A","B","C","D"],
  correct_option_id: 1,
  difficulty: 1, // 1 Easy · 2 Medium · 3 Hard
  solution: "..."
}
```

If omitted, difficulty is estimated automatically.

## WordPress shortcode

```
[gyanpoints_quiz]
[gyanpoints_quiz id="udaan-chem" adaptive="1"]
```

See `wordpress/shortcode.php`.


## Docs

- `docs/MATHJAX_DEVANAGARI.md` — MathJax + Hindi fonts
- `docs/TRANSLATION_APIS.md` — Bulk EN→HI translation APIs
- `wordpress/README-WORDPRESS.md` — Install on gyanpoints.com
