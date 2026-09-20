// class10-ch01
// 20 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `Which of the following is a double displacement reaction?`,
    question_hi: `निम्नलिखित में से कौन-सा द्वि-विस्थापन अभिक्रिया है?`,
    options: [
      `Zn+CuSO4→ZnSO4+Cu`,
      `CaO+H2O→Ca(OH)2`,
      `Na2SO4+BaCl2→BaSO4+2NaCl`,
      `CH4+2O2→CO2+2H2O`,
    ],
    options_hi: [
      `Zn+CuSO4→ZnSO4+Cu`,
      `CaO+H2O→Ca(OH)2`,
      `Na2SO4+BaCl2→BaSO4+2NaCl`,
      `CH4+2O2→CO2+2H2O`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Na2SO4+BaCl2→BaSO4+2NaCl`,
    solution_hi: `सही उत्तर: Na2SO4+BaCl2→BaSO4+2NaCl`,
    difficulty: 2
  },
  {
    question: `The brown gas evolved when lead nitrate is heated is:`,
    question_hi: `लेड नाइट्रेट को गर्म करने पर निकलने वाली भूरे रंग की गैस है:`,
    options: [
      `Oxygen`,
      `Nitrogen dioxide`,
      `Nitric oxide`,
      `Ammonia`,
    ],
    options_hi: [
      `Oxygen`,
      `Nitrogen dioxide`,
      `Nitric oxide`,
      `Ammonia`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nitrogen dioxide`,
    solution_hi: `सही उत्तर: Nitrogen dioxide`,
    difficulty: 2
  },
  {
    question: `Rancidity can be prevented by:`,
    question_hi: `वसा की विकृति (रैनसिडिटी) को रोका जा सकता है:`,
    options: [
      `Oxidation`,
      `Adding nitrogen gas`,
      `Adding oxygen`,
      `Heating`,
    ],
    options_hi: [
      `Oxidation`,
      `Adding nitrogen gas`,
      `Adding oxygen`,
      `Heating`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Adding nitrogen gas`,
    solution_hi: `सही उत्तर: Adding nitrogen gas`,
    difficulty: 2
  },
  {
    question: `Which is oxidized in the reaction: (CuO+H2→Cu+H2O)?`,
    question_hi: `प्रतिक्रिया में कौन सा ऑक्सीकरण किया जाता है: (CuO+H2→Cu+H2O)?`,
    options: [
      `CuO`,
      `H₂`,
      `Cu`,
      `H₂O`,
    ],
    options_hi: [
      `CuO`,
      `HΩ`,
      `Cu`,
      `HΩO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) H₂`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `Respiration is an example of:`,
    question_hi: `श्वसन एक उदाहरण है:`,
    options: [
      `Endothermic reaction`,
      `Exothermic reaction`,
      `Photochemical reaction`,
      `Displacement reaction`,
    ],
    options_hi: [
      `Endothermic reaction`,
      `Exothermic reaction`,
      `Photochemical reaction`,
      `Displacement reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Exothermic reaction`,
    solution_hi: `सही उत्तर: Exothermic reaction`,
    difficulty: 2
  },
  {
    question: `The reaction (Fe2O3+2Al→Al2O3+2Fe) is an example of:`,
    question_hi: `प्रतिक्रिया (Fe2O3 +2Al→ Al2O3 +2Fe) इसका एक उदाहरण है:`,
    options: [
      `Combination`,
      `Decomposition`,
      `Displacement`,
      `Double displacement`,
    ],
    options_hi: [
      `Combination`,
      `Decomposition`,
      `Displacement`,
      `Double displacement`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Displacement`,
    solution_hi: `सही उत्तर: (c) विस्थापन`,
    difficulty: 2
  },
  {
    question: `Which gas is evolved when zinc reacts with dilute sulphuric acid?`,
    question_hi: `जब जस्ता पतला सल्फ्यूरिक एसिड के साथ प्रतिक्रिया करता है तो कौन सी गैस विकसित होती है?`,
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
    solution_hi: `सही उत्तर: (c) हाइड्रोजन`,
    difficulty: 2
  },
  {
    question: `The reaction used in black and white photography is:`,
    question_hi: `ब्लैक एंड व्हाइट फ़ोटोग्राफ़ी में इस्तेमाल की जाने वाली प्रतिक्रिया है:`,
    options: [
      `(2AgCl→{sunlight}2Ag+Cl2)`,
      `(2AgBr→{sunlight}2Ag+Br2)`,
      `(AgNNO3 + NaCl→AgCl +NaNO3)`,
      `(CaCO3→{Δ}CaO+CO2)`,
    ],
    options_hi: [
      `(2AgCl→{sunlight}2Ag+Cl2)`,
      `(2AgBr→{sunlight}2Ag+Br2)`,
      `(AgNNO3 + NaCl→AgCl +NaNO3)`,
      `(CaCO3→{Δ}CaO+CO2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (2AgBr→{sunlight}2Ag+Br2)`,
    solution_hi: `सही उत्तर: (b) (2AgBr→{sunlight}2Ag+Br2)`,
    difficulty: 2
  },
  {
    question: `Which of the following is a precipitation reaction?`,
    question_hi: `निम्नलिखित में से कौन वर्षा अभिक्रिया है?`,
    options: [
      `(NaOH+HCl→NaCl+H2O)`,
      `(BaCl2+Na2SO4→BaSO4+2NaCl)`,
      `(Zn+H2SO4→ZnSO4+H2)`,
      `(CaO+H2O→Ca(OH)2)`,
    ],
    options_hi: [
      `(NaOH+HCL→NaCl+H2O)`,
      `(BaCl2+Na2SO4→BaSO4+2NaCl)`,
      `(Zn+H2SO4→ZnSO4+H2)`,
      `(CaO+H2O→Ca(OH)2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (BaCl2+Na2SO4→BaSO4+2NaCl)`,
    solution_hi: `सही उत्तर: (b) (BaCl2+Na2SO4→BaSO4+2NaCl)`,
    difficulty: 2
  },
  {
    question: `The substance that gets oxidized in a redox reaction is called:`,
    question_hi: `वह पदार्थ जो रेडॉक्स प्रतिक्रिया में ऑक्सीकरण हो जाता है, उसे कहा जाता है:`,
    options: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Catalyst`,
      `Inhibitor`,
    ],
    options_hi: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Catalyst`,
      `Inhibitor`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reducing agent`,
    solution_hi: `सही उत्तर: (b) एजेंट को कम करना`,
    difficulty: 2
  },
  {
    question: `Electrolysis of water is a:`,
    question_hi: `पानी का इलेक्ट्रोलिसिस है:`,
    options: [
      `Combination reaction`,
      `Decomposition reaction`,
      `Displacement reaction`,
      `Neutralization reaction`,
    ],
    options_hi: [
      `Combination reaction`,
      `Decomposition reaction`,
      `Displacement reaction`,
      `Neutralization reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Decomposition reaction`,
    solution_hi: `सही उत्तर: (b) अपघटन अभिक्रिया`,
    difficulty: 2
  },
  {
    question: `Corrosion of iron is:`,
    question_hi: `लोहे का क्षरण है:`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Neutralization`,
      `Precipitation`,
    ],
    options_hi: [
      `Oxidation`,
      `Reduction`,
      `Neutralization`,
      `Precipitation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Oxidation`,
    solution_hi: `सही उत्तर: (a) ऑक्सीकरण`,
    difficulty: 2
  },
  {
    question: `Which is not a physical change?`,
    question_hi: `कौन सा भौतिक परिवर्तन नहीं है?`,
    options: [
      `Melting of ice`,
      `Dissolving salt in water`,
      `Burning of paper`,
      `Boiling of water`,
    ],
    options_hi: [
      `Melting of ice`,
      `Dissolving salt in water`,
      `Burning of paper`,
      `Boiling of water`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Burning of paper`,
    solution_hi: `सही उत्तर: (c) कागज जलाना`,
    difficulty: 2
  },
  {
    question: `The reaction (CaCO3→{Δ}CaO+CO2) is:`,
    question_hi: `अभिक्रिया (CaCO3→{Δ}CaO+CO2) है:`,
    options: [
      `Thermal decomposition`,
      `Electrolytic decomposition`,
      `Photodecomposition`,
      `Displacement`,
    ],
    options_hi: [
      `Thermal decomposition`,
      `Electrolytic decomposition`,
      `Photodecomposition`,
      `Displacement`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thermal decomposition`,
    solution_hi: `सही उत्तर: (a) तापीय अपघटन`,
    difficulty: 2
  },
  {
    question: `In the reaction (MnO2+4HCl→MnCl2+Cl2+2H2O), HCl acts as:`,
    question_hi: `प्रतिक्रिया में (MnO2 +4HClMnCl2→+Cl2 +2H2O), HCl इस प्रकार कार्य करता है:`,
    options: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Both (a) and (b)`,
      `Neither`,
    ],
    options_hi: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Both (a) and (b)`,
      `Neither`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both (a) and (b)`,
    solution_hi: `सही उत्तर: (c) दोनों (a) और (b)`,
    difficulty: 2
  },
  {
    question: `Which metal does not react with cold water?`,
    question_hi: `कौन सी धातु ठंडे पानी से प्रतिक्रिया नहीं करती है?`,
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
    solution_hi: `सही उत्तर: (d) आयरन`,
    difficulty: 2
  },
  {
    question: `The colour of ferrous sulphate crystals is:`,
    question_hi: `फेरस सल्फेट क्रिस्टल का रंग है:`,
    options: [
      `Blue`,
      `Green`,
      `White`,
      `Brown`,
    ],
    options_hi: [
      `Blue`,
      `Green`,
      `White`,
      `Brown`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Green`,
    solution_hi: `सही उत्तर: (b) हरा`,
    difficulty: 2
  },
  {
    question: `When CO₂ is passed through lime water, it turns milky due to formation of:`,
    question_hi: `जब COΩ चूने के पानी से होकर गुजरता है, तो यह दूधिया हो जाता है:`,
    options: [
      `CaCO₃`,
      `Ca(OH)₂`,
      `Ca(HCO₃)₂`,
      `CaO`,
    ],
    options_hi: [
      `CaCO`,
      `Ca(OH )Ω`,
      `सीए(एचसीओ(HCO))`,
      `CaO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CaCO₃`,
    solution_hi: `सही उत्तर: (a)CaCO`,
    difficulty: 2
  },
  {
    question: `Which is a balanced equation?`,
    question_hi: `एक संतुलित समीकरण क्या है?`,
    options: [
      `(H2+O2→H2O)`,
      `(2H2+O2→2H2O)`,
      `(H2+2O2→H2O)`,
      `(2H2+2O2→2H2O)`,
    ],
    options_hi: [
      `(H2+O2→H2O)`,
      `(2H2 +O2→2H2O)`,
      `(H2+2O2→H2O)`,
      `(2H2+2O2→2H2O)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (2H2+O2→2H2O)`,
    solution_hi: `सही उत्तर: (b) (2H2 +O2→2H2O)`,
    difficulty: 2
  },
  {
    question: `The reaction between an acid and a base is called:`,
    question_hi: `एसिड और बेस के बीच की प्रतिक्रिया को कहा जाता है:`,
    options: [
      `Combustion`,
      `Neutralization`,
      `Oxidation`,
      `Reduction`,
    ],
    options_hi: [
      `Combustion`,
      `Neutralization`,
      `Oxidation`,
      `Reduction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neutralization`,
    solution_hi: `सही उत्तर: (b) तटस्थता`,
    difficulty: 2
  }
];
