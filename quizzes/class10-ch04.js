// class10-ch04
// 20 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `The property of carbon to form long chains is called:`,
    question_hi: `The property of carbon to form long chains is called:`,
    options: [
      `Tetravalency`,
      `Catenation`,
      `Isomerism`,
      `Allotropy`,
    ],
    options_hi: [
      `Tetravalency`,
      `Catenation`,
      `Isomerism`,
      `Allotropy`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Catenation`,
    solution_hi: `Correct answer: (b) Catenation`,
    difficulty: 2
  },
  {
    question: `The functional group in CH₃COOH is:`,
    question_hi: `The functional group in CH₃COOH is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    options_hi: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carboxylic acid`,
    solution_hi: `Correct answer: (c) Carboxylic acid`,
    difficulty: 2
  },
  {
    question: `The general formula of alkanes is:`,
    question_hi: `The general formula of alkanes is:`,
    options: [
      `CₙH₂ₙ`,
      `CₙH₂ₙ₊₂`,
      `CₙH₂ₙ₋₂`,
      `CₙH₂ₙ₊₁`,
    ],
    options_hi: [
      `CₙH₂ₙ`,
      `CₙH₂ₙ₊₂`,
      `CₙH₂ₙ₋₂`,
      `CₙH₂ₙ₊₁`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) CₙH₂ₙ₊₂`,
    solution_hi: `Correct answer: (b) CₙH₂ₙ₊₂`,
    difficulty: 2
  },
  {
    question: `Which of the following is a saturated hydrocarbon?`,
    question_hi: `Which of the following is a saturated hydrocarbon?`,
    options: [
      `Ethene`,
      `Ethyne`,
      `Ethane`,
      `Benzene`,
    ],
    options_hi: [
      `Ethene`,
      `Ethyne`,
      `Ethane`,
      `Benzene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ethane`,
    solution_hi: `Correct answer: (c) Ethane`,
    difficulty: 2
  },
  {
    question: `The IUPAC name of CH₃CH₂CHO is:`,
    question_hi: `The IUPAC name of CH₃CH₂CHO is:`,
    options: [
      `Propanal`,
      `Propanone`,
      `Ethanal`,
      `Butanal`,
    ],
    options_hi: [
      `Propanal`,
      `Propanone`,
      `Ethanal`,
      `Butanal`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Propanal`,
    solution_hi: `Correct answer: (a) Propanal`,
    difficulty: 2
  },
  {
    question: `The number of structural isomers of pentane is:`,
    question_hi: `The number of structural isomers of pentane is:`,
    options: [
      `2`,
      `3`,
      `4`,
      `5`,
    ],
    options_hi: [
      `2`,
      `3`,
      `4`,
      `5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3`,
    solution_hi: `Correct answer: (b) 3`,
    difficulty: 2
  },
  {
    question: `The functional group in CH₃COCH₃ is:`,
    question_hi: `The functional group in CH₃COCH₃ is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    options_hi: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ketone`,
    solution_hi: `Correct answer: (b) Ketone`,
    difficulty: 2
  },
  {
    question: `Which of the following is an unsaturated hydrocarbon?`,
    question_hi: `Which of the following is an unsaturated hydrocarbon?`,
    options: [
      `Methane`,
      `Ethane`,
      `Propane`,
      `Ethene`,
    ],
    options_hi: [
      `Methane`,
      `Ethane`,
      `Propane`,
      `Ethene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ethene`,
    solution_hi: `सही उत्तर: (d) एथीनी`,
    difficulty: 2
  },
  {
    question: `The reaction CH₂=CH₂ + H₂ → CH₃–CH₃ is called:`,
    question_hi: `अभिक्रिया CH Ω =CH Ω + H Ω CH ά - → CHΩ कोकहा जाता है:`,
    options: [
      `Substitution`,
      `Addition`,
      `Oxidation`,
      `Esterification`,
    ],
    options_hi: [
      `Substitution`,
      `Addition`,
      `Oxidation`,
      `Esterification`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Addition`,
    solution_hi: `सही उत्तर: (b) जोड़`,
    difficulty: 2
  },
  {
    question: `The functional group in CH₃CH₂OH is:`,
    question_hi: `CH: CH: OH में कार्यात्मक समूह है:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    options_hi: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Alcohol`,
    solution_hi: `सही उत्तर: (d) अल्कोहल`,
    difficulty: 2
  },
  {
    question: `The IUPAC name of CH₃–CH₂–CH₂–OH is:`,
    question_hi: `CH (CH) का IUPAC नाम - CH (CH) - CH (CH) - OH (OH) है:`,
    options: [
      `Ethanol`,
      `Propanol`,
      `Butanol`,
      `Methanol`,
    ],
    options_hi: [
      `Ethanol`,
      `Propanol`,
      `Butanol`,
      `Methanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Propanol`,
    solution_hi: `सही उत्तर: (b) प्रोपेनॉल`,
    difficulty: 2
  },
  {
    question: `Which catalyst is used in hydrogenation of oils?`,
    question_hi: `तेलों के हाइड्रोजनीकरण में किस उत्प्रेरक का उपयोग किया जाता है?`,
    options: [
      `Pt`,
      `Pd`,
      `Ni`,
      `Fe`,
    ],
    options_hi: [
      `Pt`,
      `Pd`,
      `Ni`,
      `Fe`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ni`,
    solution_hi: `सही उत्तर: (c)`,
    difficulty: 2
  },
  {
    question: `The molecular formula of benzene is:`,
    question_hi: `बेंजीन का आणविक सूत्र है:`,
    options: [
      `C₆H₆`,
      `C₆H₁₂`,
      `C₆H₁₄`,
      `C₆H₁₀`,
    ],
    options_hi: [
      `सी+एच+`,
      `C:H:`,
      `सी ++ एच ++ (C ++H+)`,
      `सी ++ एच ++ (C ++H+)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) C₆H₆`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `The reaction CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O is:`,
    question_hi: `अभिक्रिया COOH +COOH CH CHCHCH → CH OH CHCOOCH CHCH + HO है:`,
    options: [
      `Saponification`,
      `Esterification`,
      `Hydrogenation`,
      `Oxidation`,
    ],
    options_hi: [
      `Saponification`,
      `Esterification`,
      `Hydrogenation`,
      `Oxidation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Esterification`,
    solution_hi: `सही उत्तर: (b) एस्टरिफिकेशन`,
    difficulty: 2
  },
  {
    question: `The functional group in soaps is:`,
    question_hi: `साबुन में कार्यात्मक समूह है:`,
    options: [
      `–COOH`,
      `–COONa`,
      `–OH`,
      `–CHO`,
    ],
    options_hi: [
      `- COOH`,
      `- COONA`,
      `आपने दोपहर के भोजन के लिए क्या किया`,
      `चो.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –COONa`,
    solution_hi: `सही उत्तर: (b) - COONa`,
    difficulty: 2
  },
  {
    question: `Which of the following is a homologous series?`,
    question_hi: `निम्नलिखित में से कौन एक समरूप श्रृंखला है?`,
    options: [
      `CH₄, C₂H₆, C₃H₈`,
      `CH₄, C₂H₄, C₃H₆`,
      `CH₄, C₂H₂, C₃H₄`,
      `C₂H₆, C₂H₄, C₂H₂`,
    ],
    options_hi: [
      `सीएच, सी, एच, सी, एच`,
      `सीएच, सी, एच, सी, एच`,
      `सीएच (CH), सी (C) एच (H), सी (C)एच (H)`,
      `C, H, C, H, C, H,`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CH₄, C₂H₆, C₃H₈`,
    solution_hi: `सही उत्तर: (a) सीएच (CH), सी (C) एच (H), सी (C) एच (H)`,
    difficulty: 2
  },
  {
    question: `The IUPAC name of HCOOH is:`,
    question_hi: `HCOOH का IUPAC नाम है:`,
    options: [
      `Methanoic acid`,
      `Ethanoic acid`,
      `Propanoic acid`,
      `Butanoic acid`,
    ],
    options_hi: [
      `Methanoic acid`,
      `Ethanoic acid`,
      `Propanoic acid`,
      `Butanoic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Methanoic acid`,
    solution_hi: `सही उत्तर: (a) मेथेनॉइक एसिड`,
    difficulty: 2
  },
  {
    question: `The number of covalent bonds in ethane (C₂H₆) is:`,
    question_hi: `इथेन में सहसंयोजक बांडों की संख्या (C ΩH) है:`,
    options: [
      `6`,
      `7`,
      `8`,
      `9`,
    ],
    options_hi: [
      `6`,
      `7`,
      `8`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `The reaction used to convert vegetable oil to vanaspati ghee is:`,
    question_hi: `The reaction used to convert vegetable oil to vanaspati ghee is:`,
    options: [
      `Oxidation`,
      `Hydrogenation`,
      `Substitution`,
      `Esterification`,
    ],
    options_hi: [
      `Oxidation`,
      `Hydrogenation`,
      `Substitution`,
      `Esterification`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hydrogenation`,
    solution_hi: `Correct answer: (b) Hydrogenation`,
    difficulty: 2
  },
  {
    question: `The functional group in formaldehyde is:`,
    question_hi: `The functional group in formaldehyde is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    options_hi: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aldehyde`,
    solution_hi: `Correct answer: (a) Aldehyde`,
    difficulty: 2
  }
];
