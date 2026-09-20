// Class 10 Science – Chapter 16: SUSTAINABLE MANAGEMENT OF NATURAL RESOURCES
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `Sustainable development means:`,
    options: [
      `Development that meets present needs without compromising future generations`,
      `Rapid industrialization`,
      `Maximum resource exploitation`,
      `Urbanization`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Development that meets present needs without compromising future generations`
  },
  {
    question: `The Chipko Movement started in:`,
    options: [
      `Rajasthan`,
      `Uttarakhand`,
      `Tamil Nadu`,
      `Gujarat`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Uttarakhand`
  },
  {
    question: `The "Three R’s" stand for:`,
    options: [
      `Reduce, Reuse, Recycle`,
      `Read, Write, Recite`,
      `Rain, River, Reservoir`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Reduce, Reuse, Recycle`
  },
  {
    question: `The Ganga Action Plan was launched in:`,
    options: [
      `1980`,
      `1985`,
      `1990`,
      `1995`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1985`
  },
  {
    question: `Traditional water harvesting system in Rajasthan is:`,
    options: [
      `Kulhs`,
      `Eris`,
      `Khadins`,
      `Bamboo drip irrigation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Khadins`
  },
  {
    question: `The dam opposed in the Narmada Bachao Andolan is:`,
    options: [
      `Bhakra Nangal Dam`,
      `Sardar Sarovar Dam`,
      `Hirakud Dam`,
      `Tehri Dam`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Sardar Sarovar Dam`
  },
  {
    question: `Afforestation means:`,
    options: [
      `Cutting trees`,
      `Planting trees in deforested areas`,
      `Grazing animals`,
      `Mining`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Planting trees in deforested areas`
  },
  {
    question: `The Wildlife Protection Act was enacted in:`,
    options: [
      `1970`,
      `1972`,
      `1980`,
      `1985`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1972`
  },
  {
    question: `Which of the following is a stakeholder in forest management?`,
    options: [
      `Local communities`,
      `Industrialists`,
      `Forest department`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The main aim of water harvesting is:`,
    options: [
      `To generate electricity`,
      `To recharge groundwater`,
      `To promote tourism`,
      `To build dams`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To recharge groundwater`
  },
  {
    question: `The traditional water harvesting system in Himachal Pradesh is:`,
    options: [
      `Khadins`,
      `Kulhs`,
      `Eris`,
      `Surangams`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Kulhs`
  },
  {
    question: `The main cause of groundwater depletion is:`,
    options: [
      `Rainwater harvesting`,
      `Overuse of groundwater`,
      `Afforestation`,
      `Building check dams`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Overuse of groundwater`
  },
  {
    question: `Which movement is associated with Amrita Devi Bishnoi?`,
    options: [
      `Chipko Movement`,
      `Narmada Bachao Andolan`,
      `Sacrifice for Khejri trees`,
      `Silent Valley Movement`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sacrifice for Khejri trees`
  },
  {
    question: `The main objective of the National Water Policy is:`,
    options: [
      `To promote dam construction`,
      `To encourage rainwater harvesting`,
      `To increase industrial use of water`,
      `To export water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To encourage rainwater harvesting`
  },
  {
    question: `Small check dams are better than large dams because:`,
    options: [
      `They displace more people`,
      `They are costlier`,
      `They cause more ecological damage`,
      `They recharge groundwater locally`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) They recharge groundwater locally`
  },
  {
    question: `The main reason for equitable distribution of resources is:`,
    options: [
      `To benefit only the rich`,
      `To ensure social justice`,
      `To increase pollution`,
      `To promote deforestation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To ensure social justice`
  },
  {
    question: `The main aim of the Arabari forest project was:`,
    options: [
      `To cut all trees`,
      `To involve local people in forest protection`,
      `To build a dam`,
      `To mine minerals`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To involve local people in forest protection`
  },
  {
    question: `The main problem with large dams is:`,
    options: [
      `Low cost`,
      `Displacement of people`,
      `Easy construction`,
      `No ecological impact`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Displacement of people`
  },
  {
    question: `The main benefit of rainwater harvesting is:`,
    options: [
      `Increases flood`,
      `Recharges groundwater`,
      `Causes soil erosion`,
      `Reduces crop yield`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Recharges groundwater`
  },
  {
    question: `The main principle of sustainable management is:`,
    options: [
      `Exploit resources rapidly`,
      `Conserve resources for future generations`,
      `Ignore environmental impact`,
      `Promote deforestation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Conserve resources for future generations`
  }
];
