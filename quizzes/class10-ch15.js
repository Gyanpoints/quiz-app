// Class 10 Science – Chapter 15: OUR ENVIRONMENT
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The term "ecosystem" was coined by:`,
    options: [
      `Darwin`,
      `Tansley`,
      `Mendel`,
      `Lamarck`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Tansley`
  },
  {
    question: `Which of the following is a biodegradable waste?`,
    options: [
      `Plastic`,
      `Glass`,
      `Paper`,
      `DDT`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Paper`
  },
  {
    question: `The gas that shields Earth from UV radiation is:`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Ozone`,
      `Carbon dioxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ozone`
  },
  {
    question: `The full form of CFC is:`,
    options: [
      `Chlorofluorocarbon`,
      `Carbon fluorochloride`,
      `Chloroform carbon`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Chlorofluorocarbon`
  },
  {
    question: `The trophic level with maximum energy is:`,
    options: [
      `Producers`,
      `Primary consumers`,
      `Secondary consumers`,
      `Tertiary consumers`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Producers`
  },
  {
    question: `The 10% law of energy transfer was proposed by:`,
    options: [
      `Darwin`,
      `Lindeman`,
      `Tansley`,
      `Mendel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lindeman`
  },
  {
    question: `Which organism is a decomposer?`,
    options: [
      `Grass`,
      `Rabbit`,
      `Fungi`,
      `Eagle`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fungi`
  },
  {
    question: `Biomagnification is highest in:`,
    options: [
      `Producers`,
      `Primary consumers`,
      `Secondary consumers`,
      `Tertiary consumers`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tertiary consumers`
  },
  {
    question: `The ozone layer is present in:`,
    options: [
      `Troposphere`,
      `Stratosphere`,
      `Mesosphere`,
      `Thermosphere`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Stratosphere`
  },
  {
    question: `The main cause of ozone depletion is:`,
    options: [
      `CO₂`,
      `SO₂`,
      `CFCs`,
      `CH₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CFCs`
  },
  {
    question: `Which is an abiotic component of an ecosystem?`,
    options: [
      `Plants`,
      `Animals`,
      `Sunlight`,
      `Bacteria`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sunlight`
  },
  {
    question: `The flow of energy in an ecosystem is:`,
    options: [
      `Cyclic`,
      `Unidirectional`,
      `Bidirectional`,
      `Multidirectional`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Unidirectional`
  },
  {
    question: `The nutrient flow in an ecosystem is:`,
    options: [
      `Unidirectional`,
      `Cyclic`,
      `Linear`,
      `Random`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cyclic`
  },
  {
    question: `Which of the following is a non-biodegradable waste?`,
    options: [
      `Vegetable peels`,
      `Paper`,
      `Plastic`,
      `Cotton cloth`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Plastic`
  },
  {
    question: `The Montreal Protocol was signed in:`,
    options: [
      `1985`,
      `1987`,
      `1990`,
      `1992`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1987`
  },
  {
    question: `The first trophic level in a food chain is occupied by:`,
    options: [
      `Herbivores`,
      `Carnivores`,
      `Producers`,
      `Decomposers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Producers`
  },
  {
    question: `The concentration of DDT is highest in:`,
    options: [
      `Water`,
      `Phytoplankton`,
      `Small fish`,
      `Fish-eating birds`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fish-eating birds`
  },
  {
    question: `Which of the following is a producer?`,
    options: [
      `Grasshopper`,
      `Frog`,
      `Grass`,
      `Snake`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Grass`
  },
  {
    question: `The energy available at producer level is 10,000 J. How much is available to primary consumers?`,
    options: [
      `1000 J`,
      `100 J`,
      `10 J`,
      `1 J`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1000 J`
  },
  {
    question: `The main aim of the Ganga Action Plan was:`,
    options: [
      `To generate electricity`,
      `To reduce pollution in river Ganga`,
      `To promote tourism`,
      `To build dams`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To reduce pollution in river Ganga`
  }
];
