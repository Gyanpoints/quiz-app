// class10-ch03
// 20 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `Which metal is liquid at room temperature?`,
    question_hi: `Which metal is liquid at room temperature?`,
    options: [
      `Sodium`,
      `Iron`,
      `Mercury`,
      `Copper`,
    ],
    options_hi: [
      `Sodium`,
      `Iron`,
      `Mercury`,
      `Copper`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mercury`,
    solution_hi: `Correct answer: (c) Mercury`,
    difficulty: 2
  },
  {
    question: `Which non-metal is lustrous?`,
    question_hi: `Which non-metal is lustrous?`,
    options: [
      `Sulphur`,
      `Phosphorus`,
      `Iodine`,
      `Carbon`,
    ],
    options_hi: [
      `Sulphur`,
      `Phosphorus`,
      `Iodine`,
      `Carbon`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Iodine`,
    solution_hi: `Correct answer: (c) Iodine`,
    difficulty: 2
  },
  {
    question: `The most reactive metal is:`,
    question_hi: `The most reactive metal is:`,
    options: [
      `Iron`,
      `Copper`,
      `Potassium`,
      `Silver`,
    ],
    options_hi: [
      `Iron`,
      `Copper`,
      `Potassium`,
      `Silver`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Potassium`,
    solution_hi: `Correct answer: (c) Potassium`,
    difficulty: 2
  },
  {
    question: `12) 4. Which metal is stored in kerosene?`,
    question_hi: `12) 4. Which metal is stored in kerosene?`,
    options: [
      `Iron`,
      `Sodium`,
      `Aluminium`,
      `Zinc`,
    ],
    options_hi: [
      `Iron`,
      `Sodium`,
      `Aluminium`,
      `Zinc`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Sodium`,
    solution_hi: `Correct answer: (b) Sodium`,
    difficulty: 2
  },
  {
    question: `The metal that forms amphoteric oxide is:`,
    question_hi: `The metal that forms amphoteric oxide is:`,
    options: [
      `Na`,
      `Ca`,
      `Al`,
      `Cu`,
    ],
    options_hi: [
      `Na`,
      `Ca`,
      `Al`,
      `Cu`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Al`,
    solution_hi: `Correct answer: (c) Al`,
    difficulty: 2
  },
  {
    question: `Which gas is evolved when metals react with acids?`,
    question_hi: `Which gas is evolved when metals react with acids?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Hydrogen`,
      `Carbon dioxide`,
    ],
    options_hi: [
      `Oxygen`,
      `Nitrogen`,
      `Hydrogen`,
      `Carbon dioxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen`,
    solution_hi: `Correct answer: (c) Hydrogen`,
    difficulty: 2
  },
  {
    question: `3) 7. The metal used for galvanization is:`,
    question_hi: `3) 7. The metal used for galvanization is:`,
    options: [
      `Chromium`,
      `Zinc`,
      `Tin`,
      `Nickel`,
    ],
    options_hi: [
      `Chromium`,
      `Zinc`,
      `Tin`,
      `Nickel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Zinc`,
    solution_hi: `Correct answer: (b) Zinc`,
    difficulty: 2
  },
  {
    question: `Which non-metal is essential for life?`,
    question_hi: `Which non-metal is essential for life?`,
    options: [
      `Sulphur`,
      `Oxygen`,
      `Phosphorus`,
      `Chlorine`,
    ],
    options_hi: [
      `Sulphur`,
      `Oxygen`,
      `Phosphorus`,
      `Chlorine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxygen`,
    solution_hi: `Correct answer: (b) Oxygen`,
    difficulty: 2
  },
  {
    question: `The metal that does not react with cold water is:`,
    question_hi: `The metal that does not react with cold water is:`,
    options: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    options_hi: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron`,
    solution_hi: `Correct answer: (d) Iron`,
    difficulty: 2
  },
  {
    question: `4) 10. The chemical formula of rust is:`,
    question_hi: `4) 10. The chemical formula of rust is:`,
    options: [
      `FeO`,
      `Fe₂O₃`,
      `Fe₃O₄`,
      `Fe₂O₃·xH₂O`,
    ],
    options_hi: [
      `FeO`,
      `Fe₂O₃`,
      `Fe₃O₄`,
      `Fe₂O₃·xH₂O`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fe₂O₃·xH₂O`,
    solution_hi: `Correct answer: (d) Fe₂O₃·xH₂O`,
    difficulty: 2
  },
  {
    question: `Which metal is the best conductor of heat?`,
    question_hi: `Which metal is the best conductor of heat?`,
    options: [
      `Lead`,
      `Silver`,
      `Mercury`,
      `Copper`,
    ],
    options_hi: [
      `Lead`,
      `Silver`,
      `Mercury`,
      `Copper`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Silver`,
    solution_hi: `Correct answer: (b) Silver`,
    difficulty: 2
  },
  {
    question: `The metal used in thermometers is:`,
    question_hi: `The metal used in thermometers is:`,
    options: [
      `Iron`,
      `Aluminium`,
      `Mercury`,
      `Zinc`,
    ],
    options_hi: [
      `Iron`,
      `Aluminium`,
      `Mercury`,
      `Zinc`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mercury`,
    solution_hi: `Correct answer: (c) Mercury`,
    difficulty: 2
  },
  {
    question: `Which oxide is acidic?`,
    question_hi: `Which oxide is acidic?`,
    options: [
      `Na₂O`,
      `CaO`,
      `CO₂`,
      `MgO`,
    ],
    options_hi: [
      `Na₂O`,
      `CaO`,
      `CO₂`,
      `MgO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CO₂`,
    solution_hi: `Correct answer: (c) CO₂`,
    difficulty: 2
  },
  {
    question: `The metal that reacts with steam but not with cold water is:`,
    question_hi: `The metal that reacts with steam but not with cold water is:`,
    options: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    options_hi: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron`,
    solution_hi: `Correct answer: (d) Iron`,
    difficulty: 2
  },
  {
    question: `4) 15. Which alloy contains mercury?`,
    question_hi: `4) 15. Which alloy contains mercury?`,
    options: [
      `Brass`,
      `Bronze`,
      `Amalgam`,
      `Steel`,
    ],
    options_hi: [
      `Brass`,
      `Bronze`,
      `Amalgam`,
      `Steel`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Amalgam`,
    solution_hi: `Correct answer: (c) Amalgam`,
    difficulty: 2
  },
  {
    question: `The metal used for making aircraft bodies is:`,
    question_hi: `The metal used for making aircraft bodies is:`,
    options: [
      `Iron`,
      `Copper`,
      `Aluminium`,
      `Zinc`,
    ],
    options_hi: [
      `Iron`,
      `Copper`,
      `Aluminium`,
      `Zinc`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Aluminium`,
    solution_hi: `Correct answer: (c) Aluminium`,
    difficulty: 2
  },
  {
    question: `Which non-metal is used in fertilizers?`,
    question_hi: `Which non-metal is used in fertilizers?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Sulphur`,
      `Phosphorus`,
    ],
    options_hi: [
      `Oxygen`,
      `Nitrogen`,
      `Sulphur`,
      `Phosphorus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nitrogen`,
    solution_hi: `Correct answer: (b) Nitrogen`,
    difficulty: 2
  },
  {
    question: `The metal that displaces copper from CuSO₄ solution is:`,
    question_hi: `The metal that displaces copper from CuSO₄ solution is:`,
    options: [
      `Ag`,
      `Au`,
      `Zn`,
      `Pt`,
    ],
    options_hi: [
      `Ag`,
      `Au`,
      `Zn`,
      `Pt`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zn`,
    solution_hi: `Correct answer: (c) Zn`,
    difficulty: 2
  },
  {
    question: `12) 19. The property of metals by which they can be drawn into wires is called:`,
    question_hi: `12) 19. The property of metals by which they can be drawn into wires is called:`,
    options: [
      `Malleability`,
      `Ductility`,
      `Sonority`,
      `Conductivity`,
    ],
    options_hi: [
      `Malleability`,
      `Ductility`,
      `Sonority`,
      `Conductivity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ductility`,
    solution_hi: `Correct answer: (b) Ductility`,
    difficulty: 2
  },
  {
    question: `Which metal is used for making cooking utensils?`,
    question_hi: `Which metal is used for making cooking utensils?`,
    options: [
      `Lead`,
      `Mercury`,
      `Aluminium`,
      `Sodium`,
    ],
    options_hi: [
      `Lead`,
      `Mercury`,
      `Aluminium`,
      `Sodium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Aluminium`,
    solution_hi: `Correct answer: (c) Aluminium`,
    difficulty: 2
  }
];
