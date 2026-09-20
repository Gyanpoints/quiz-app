// reasoning
// 4 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `A boy started from point P. He travelled 2 km North, turned right and travelled 3 km, again turned right and travelled 5 km. From there he took a left and travelled 7 km. He again turned left and travelled 3 km and reached point Q. What is the minimum distance between P and Q?`,
    question_hi: `एक लड़का बिंदु P से चलना शुरू करता है। वह 2 किमी उत्तर जाता है, दाईं ओर मुड़कर 3 किमी, फिर दाईं ओर 5 किमी। फिर बाईं ओर 7 किमी, फिर बाईं ओर 3 किमी और Q पहुँचता है। P और Q के बीच न्यूनतम दूरी?`,
    options: [
      `5 km`,
      `6 km`,
      `7 km`,
      `8 km`,
    ],
    options_hi: [
      `5 km`,
      `6 km`,
      `7 km`,
      `8 km`,
    ],
    correct_option_id: 0,
    solution: `After drawing the path, the net displacement is 5 km.`,
    solution_hi: `After drawing the path, the net displacement is 5 km.`,
    difficulty: 2
  },
  {
    question: `If in a certain code, "APPLE" is written as "ELPPA", how is "ORANGE" written?`,
    question_hi: `यदि एक निश्चित कोड में "APPLE" को "ELPPA" लिखा जाता है, तो "ORANGE" कैसे लिखा जाएगा?`,
    options: [
      `EGNARO`,
      `EGNRAO`,
      `ENARGO`,
      `EGARNO`,
    ],
    options_hi: [
      `EGNARO`,
      `EGNRAO`,
      `ENARGO`,
      `EGARNO`,
    ],
    correct_option_id: 0,
    solution: `The word is simply reversed. ORANGE → EGNARO.`,
    solution_hi: `शब्द को उलट दिया गया है। नारंगी → EGNARO।`,
    difficulty: 2
  },
  {
    question: `Find the odd one out: 3, 5, 11, 14, 17, 21`,
    question_hi: `विषम संख्या ज्ञात करें: 3, 5, 11, 14, 17, 21`,
    options: [
      `11`,
      `14`,
      `17`,
      `21`,
    ],
    options_hi: [
      `11`,
      `14`,
      `17`,
      `21`,
    ],
    correct_option_id: 1,
    solution: `All numbers except 14 are prime numbers. 14 is the odd one out.`,
    solution_hi: `All numbers except 14 are prime numbers. 14 is the odd one out.`,
    difficulty: 2
  },
  {
    question: `Complete the series: 2, 6, 12, 20, 30, ?`,
    question_hi: `श्रृंखला पूरी करें: 2, 6, 12, 20, 30, ?`,
    options: [
      `40`,
      `42`,
      `44`,
      `46`,
    ],
    options_hi: [
      `40`,
      `42`,
      `44`,
      `46`,
    ],
    correct_option_id: 1,
    solution: `Pattern: n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.`,
    solution_hi: `पैटर्न: n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42।`,
    difficulty: 2
  }
];
