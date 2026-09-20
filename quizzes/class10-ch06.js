// Class 10 Science – Chapter 6: LIFE PROCESSES
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The site of photosynthesis in plants is:`,
    options: [
      `Mitochondria`,
      `Chloroplast`,
      `Nucleus`,
      `Ribosome`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Chloroplast`
  },
  {
    question: `The enzyme present in saliva is:`,
    options: [
      `Pepsin`,
      `Trypsin`,
      `Amylase`,
      `Lipase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Amylase`
  },
  {
    question: `The respiratory pigment in human blood is:`,
    options: [
      `Chlorophyll`,
      `Haemoglobin`,
      `Myoglobin`,
      `Keratin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Haemoglobin`
  },
  {
    question: `The number of chambers in the human heart is:`,
    options: [
      `2`,
      `3`,
      `4`,
      `5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `The functional unit of the kidney is:`,
    options: [
      `Neuron`,
      `Nephron`,
      `Alveolus`,
      `Villi`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nephron`
  },
  {
    question: `Which of the following is an autotroph?`,
    options: [
      `Human`,
      `Mushroom`,
      `Green plant`,
      `Amoeba`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Green plant`
  },
  {
    question: `The breakdown of pyruvate to CO₂ and H₂O occurs in:`,
    options: [
      `Cytoplasm`,
      `Mitochondria`,
      `Chloroplast`,
      `Nucleus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mitochondria`
  },
  {
    question: `The mode of nutrition in fungi is:`,
    options: [
      `Autotrophic`,
      `Holozoic`,
      `Saprophytic`,
      `Parasitic`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Saprophytic`
  },
  {
    question: `The part of the alimentary canal where complete digestion occurs is:`,
    options: [
      `Stomach`,
      `Small intestine`,
      `Large intestine`,
      `Mouth`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Small intestine`
  },
  {
    question: `The xylem in plants is responsible for transport of:`,
    options: [
      `Food`,
      `Water and minerals`,
      `Oxygen`,
      `Carbon dioxide`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Water and minerals`
  },
  {
    question: `The phloem in plants transports:`,
    options: [
      `Water`,
      `Minerals`,
      `Food (sucrose)`,
      `Oxygen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Food (sucrose)`
  },
  {
    question: `The opening and closing of stomata is regulated by:`,
    options: [
      `Guard cells`,
      `Epidermal cells`,
      `Mesophyll cells`,
      `Xylem`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Guard cells`
  },
  {
    question: `The enzyme that digests proteins in the stomach is:`,
    options: [
      `Amylase`,
      `Pepsin`,
      `Trypsin`,
      `Lipase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pepsin`
  },
  {
    question: `The largest gland in the human body is:`,
    options: [
      `Pancreas`,
      `Liver`,
      `Thyroid`,
      `Pituitary`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Liver`
  },
  {
    question: `The process of removal of nitrogenous waste in humans is called:`,
    options: [
      `Respiration`,
      `Excretion`,
      `Transpiration`,
      `Digestion`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Excretion`
  },
  {
    question: `The energy currency of the cell is:`,
    options: [
      `DNA`,
      `RNA`,
      `ATP`,
      `NADPH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) ATP`
  },
  {
    question: `The mode of nutrition in Cuscuta is:`,
    options: [
      `Autotrophic`,
      `Saprophytic`,
      `Parasitic`,
      `Holozoic`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Parasitic`
  },
  {
    question: `The part of the heart that receives oxygenated blood from lungs is:`,
    options: [
      `Right atrium`,
      `Left atrium`,
      `Right ventricle`,
      `Left ventricle`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Left atrium`
  },
  {
    question: `The process by which plants lose water vapour is:`,
    options: [
      `Respiration`,
      `Transpiration`,
      `Photosynthesis`,
      `Guttation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Transpiration`
  },
  {
    question: `The enzyme that digests fats is:`,
    options: [
      `Amylase`,
      `Pepsin`,
      `Trypsin`,
      `Lipase`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Lipase`
  }
];
