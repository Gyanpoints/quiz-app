// Class 10 Science – Chapter 7: CONTROL AND COORDINATION
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The structural and functional unit of the nervous system is:`,
    options: [
      `Neuron`,
      `Nephron`,
      `Alveolus`,
      `Villi`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Neuron`
  },
  {
    question: `The part of the brain that controls posture and balance is:`,
    options: [
      `Cerebrum`,
      `Cerebellum`,
      `Medulla`,
      `Pons`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cerebellum`
  },
  {
    question: `The gap between two neurons is called:`,
    options: [
      `Synapse`,
      `Axon`,
      `Dendrite`,
      `Cyton`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Synapse`
  },
  {
    question: `Which hormone regulates blood sugar levels?`,
    options: [
      `Thyroxine`,
      `Insulin`,
      `Adrenaline`,
      `Growth hormone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Insulin`
  },
  {
    question: `The plant hormone that promotes cell division is:`,
    options: [
      `Auxin`,
      `Gibberellin`,
      `Cytokinin`,
      `Abscisic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cytokinin`
  },
  {
    question: `The reflex action is controlled by:`,
    options: [
      `Brain`,
      `Spinal cord`,
      `Heart`,
      `Lungs`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Spinal cord`
  },
  {
    question: `The hormone secreted by the thyroid gland is:`,
    options: [
      `Insulin`,
      `Thyroxine`,
      `Adrenaline`,
      `Testosterone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Thyroxine`
  },
  {
    question: `The movement of a plant part in response to light is called:`,
    options: [
      `Geotropism`,
      `Phototropism`,
      `Hydrotropism`,
      `Chemotropism`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Phototropism`
  },
  {
    question: `The hormone that prepares the body for emergency situations is:`,
    options: [
      `Insulin`,
      `Thyroxine`,
      `Adrenaline`,
      `Estrogen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Adrenaline`
  },
  {
    question: `The part of the brain responsible for thinking is:`,
    options: [
      `Cerebrum`,
      `Cerebellum`,
      `Medulla`,
      `Pons`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cerebrum`
  },
  {
    question: `The plant hormone that inhibits growth is:`,
    options: [
      `Auxin`,
      `Gibberellin`,
      `Cytokinin`,
      `Abscisic acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Abscisic acid`
  },
  {
    question: `The movement of roots towards water is called:`,
    options: [
      `Phototropism`,
      `Geotropism`,
      `Hydrotropism`,
      `Thigmotropism`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrotropism`
  },
  {
    question: `The hormone that regulates metabolism of carbohydrates, proteins, and fats is:`,
    options: [
      `Insulin`,
      `Thyroxine`,
      `Adrenaline`,
      `Growth hormone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Thyroxine`
  },
  {
    question: `The part of the neuron that carries impulses away from the cell body is:`,
    options: [
      `Dendrite`,
      `Axon`,
      `Cyton`,
      `Synapse`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Axon`
  },
  {
    question: `The hormone secreted by pancreas is:`,
    options: [
      `Thyroxine`,
      `Insulin`,
      `Adrenaline`,
      `Testosterone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Insulin`
  },
  {
    question: `The growth of pollen tube towards ovule is an example of:`,
    options: [
      `Phototropism`,
      `Geotropism`,
      `Chemotropism`,
      `Hydrotropism`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Chemotropism`
  },
  {
    question: `The part of the brain that controls involuntary actions like blood pressure is:`,
    options: [
      `Cerebrum`,
      `Cerebellum`,
      `Medulla`,
      `Pons`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Medulla`
  },
  {
    question: `The hormone that promotes growth in plants is:`,
    options: [
      `Auxin`,
      `Gibberellin`,
      `Both (a) and (b)`,
      `Abscisic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both (a) and (b)`
  },
  {
    question: `The nervous system of humans is divided into:`,
    options: [
      `CNS and PNS`,
      `Brain and spinal cord`,
      `Autonomic and voluntary`,
      `Sympathetic and parasympathetic`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CNS and PNS`
  },
  {
    question: `The hormone that controls the sleep-wake cycle is:`,
    options: [
      `Insulin`,
      `Melatonin`,
      `Adrenaline`,
      `Thyroxine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Melatonin`
  }
];
