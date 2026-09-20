// class10-ch02
// 20 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `Which of the following is a strong acid?`,
    question_hi: `निम्नलिखित में से कौन एक मजबूत अम्ल है?`,
    options: [
      `Acetic acid`,
      `Citric acid`,
      `Hydrochloric acid`,
      `Carbonic acid`,
    ],
    options_hi: [
      `Acetic acid`,
      `Citric acid`,
      `Hydrochloric acid`,
      `Carbonic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrochloric acid`,
    solution_hi: `सही उत्तर: (c) हाइड्रोक्लोरिक एसिड`,
    difficulty: 2
  },
  {
    question: `The pH of a neutral solution is:`,
    question_hi: `एक तटस्थ घोल का pH है:`,
    options: [
      `0`,
      `7`,
      `14`,
      `10`,
    ],
    options_hi: [
      `0`,
      `7`,
      `14`,
      `10`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `Tooth enamel starts corroding when pH in mouth is below:`,
    question_hi: `मुंह में पीएच नीचे होने पर दाँत का तामचीनी खराब होना शुरू हो जाता है:`,
    options: [
      `7`,
      `6`,
      `5.5`,
      `4`,
    ],
    options_hi: [
      `7`,
      `6`,
      `5.5`,
      `4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5.5`,
    solution_hi: `सही उत्तर: (c) 5.5`,
    difficulty: 2
  },
  {
    question: `Which gas is evolved when sodium carbonate reacts with dilute HCl?`,
    question_hi: `जब सोडियम कार्बोनेट पतला HCl के साथ प्रतिक्रिया करता है तो कौन सी गैस विकसित होती है?`,
    options: [
      `Hydrogen`,
      `Oxygen`,
      `Carbon dioxide`,
      `Chlorine`,
    ],
    options_hi: [
      `Hydrogen`,
      `Oxygen`,
      `Carbon dioxide`,
      `Chlorine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carbon dioxide`,
    solution_hi: `सही उत्तर: (c) कार्बन डाइऑक्साइड`,
    difficulty: 2
  },
  {
    question: `The common name of NaHCO₃ is:`,
    question_hi: `NaHCO का सामान्य नाम है:`,
    options: [
      `Washing soda`,
      `Baking soda`,
      `Bleaching powder`,
      `Gypsum`,
    ],
    options_hi: [
      `Washing soda`,
      `Baking soda`,
      `Bleaching powder`,
      `Gypsum`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Baking soda`,
    solution_hi: `सही उत्तर: (b) बेकिंग सोडा`,
    difficulty: 2
  },
  {
    question: `Which salt is used for removing permanent hardness of water?`,
    question_hi: `पानी की स्थायी कठोरता को दूर करने के लिए किस नमक का उपयोग किया जाता है?`,
    options: [
      `NaHCO₃`,
      `Na₂CO₃`,
      `CaSO₄`,
      `MgCl₂`,
    ],
    options_hi: [
      `NaHCO`,
      `NaΩCO̶`,
      `CaSO`,
      `MgClΩ`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Na₂CO₃`,
    solution_hi: `सही उत्तर: (b) Na Ω COΩ`,
    difficulty: 2
  },
  {
    question: `The chemical formula of washing soda is:`,
    question_hi: `वॉशिंग सोडा का रासायनिक सूत्र है:`,
    options: [
      `NaHCO₃`,
      `Na₂CO₃`,
      `Na₂CO₃·10H₂O`,
      `CaOCl₂`,
    ],
    options_hi: [
      `NaHCO`,
      `NaΩCO̶`,
      `Na % CO%·10H % O`,
      `CaOClΩ`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Na₂CO₃·10H₂O`,
    solution_hi: `सही उत्तर: (c)NaΩO· 10HΩO`,
    difficulty: 2
  },
  {
    question: `Which of the following is a base but not an alkali?`,
    question_hi: `निम्नलिखित में से कौन एक आधार है लेकिन क्षार नहीं है?`,
    options: [
      `NaOH`,
      `KOH`,
      `Cu(OH)₂`,
      `NH₄OH`,
    ],
    options_hi: [
      `NaOH`,
      `KOH`,
      `Cu(OH )Ω`,
      `NHOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cu(OH)₂`,
    solution_hi: `सही उत्तर: (c) Cu(OH )Ω`,
    difficulty: 2
  },
  {
    question: `The pH of gastric juice is approximately:`,
    question_hi: `गैस्ट्रिक जूस का पीएच लगभग है:`,
    options: [
      `1.5`,
      `7`,
      `10`,
      `14`,
    ],
    options_hi: [
      `1.5`,
      `7`,
      `10`,
      `14`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.5`,
    solution_hi: `सही उत्तर: (a) 1.5`,
    difficulty: 2
  },
  {
    question: `Which indicator gives pink colour in basic solution?`,
    question_hi: `कौन सा संकेतक मूल घोल में गुलाबी रंग देता है?`,
    options: [
      `Methyl orange`,
      `Phenolphthalein`,
      `Blue litmus`,
      `Red litmus`,
    ],
    options_hi: [
      `Methyl orange`,
      `Phenolphthalein`,
      `Blue litmus`,
      `Red litmus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Phenolphthalein`,
    solution_hi: `सही उत्तर: (b) फेनोल्फथेलिन`,
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
  },
  {
    question: `Bleaching powder is prepared by reacting chlorine with:`,
    question_hi: `क्लोरीन के साथ प्रतिक्रिया करके ब्लीचिंग पाउडर तैयार किया जाता है:`,
    options: [
      `Dry slaked lime`,
      `Quicklime`,
      `Limestone`,
      `Water`,
    ],
    options_hi: [
      `Dry slaked lime`,
      `Quicklime`,
      `Limestone`,
      `Water`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Dry slaked lime`,
    solution_hi: `सही उत्तर: (a) सूखा स्लेक्ड चूना`,
    difficulty: 2
  },
  {
    question: `Which of the following is used as an antacid?`,
    question_hi: `निम्नलिखित में से किसका उपयोग एंटासिड के रूप में किया जाता है?`,
    options: [
      `NaOH`,
      `Mg(OH)₂`,
      `HCl`,
      `H₂SO₄`,
    ],
    options_hi: [
      `NaOH`,
      `Mg(OH )Ω`,
      `HCl`,
      `H˚SO̶`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mg(OH)₂`,
    solution_hi: `सही उत्तर: (b) Mg(OH)!`,
    difficulty: 2
  },
  {
    question: `The pH of rainwater is about:`,
    question_hi: `वर्षा जल का pH लगभग है:`,
    options: [
      `7`,
      `5.6`,
      `4`,
      `8`,
    ],
    options_hi: [
      `7`,
      `5.6`,
      `4`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5.6`,
    solution_hi: `सही उत्तर: (b) 5.6`,
    difficulty: 2
  },
  {
    question: `Which salt is used in fire extinguishers?`,
    question_hi: `अग्निशामक यंत्रों में किस नमक का उपयोग किया जाता है?`,
    options: [
      `NaCl`,
      `NaHCO₃`,
      `Na₂CO₃`,
      `CaSO₄`,
    ],
    options_hi: [
      `NaCl`,
      `NaHCO`,
      `NaΩCO̶`,
      `CaSO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) NaHCO₃`,
    solution_hi: `सही उत्तर: (b)NaHCO`,
    difficulty: 2
  },
  {
    question: `The chemical formula of plaster of Paris is:`,
    question_hi: `प्लास्टर ऑफ पेरिस का रासायनिक सूत्र है:`,
    options: [
      `CaSO₄`,
      `CaSO₄·2H₂O`,
      `CaSO₄·½H₂O`,
      `CaO`,
    ],
    options_hi: [
      `CaSO`,
      `CaSO·2HΩO`,
      `CaSO·½HΩO`,
      `CaO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CaSO₄·½H₂O`,
    solution_hi: `सही उत्तर: (c)CaSO·½H Ω O`,
    difficulty: 2
  },
  {
    question: `Which of the following is acidic in nature?`,
    question_hi: `निम्नलिखित में से कौन अम्लीय प्रकृति का है?`,
    options: [
      `Human blood`,
      `Lime water`,
      `Vinegar`,
      `Soap solution`,
    ],
    options_hi: [
      `Human blood`,
      `Lime water`,
      `Vinegar`,
      `Soap solution`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vinegar`,
    solution_hi: `सही उत्तर: (ग) सिरका`,
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
    question: `Which of the following is a neutral salt?`,
    question_hi: `निम्नलिखित में से कौन सा एक तटस्थ नमक है?`,
    options: [
      `NH₄Cl`,
      `Na₂CO₃`,
      `CH₃COONa`,
      `NaCl`,
    ],
    options_hi: [
      `एनएच (NH)`,
      `NaΩCO̶`,
      `CHእCOONA`,
      `NaCl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) NaCl`,
    solution_hi: `सही उत्तर: (d) NaCl`,
    difficulty: 2
  },
  {
    question: `The pH of a solution that turns red litmus blue is:`,
    question_hi: `लाल लिटमस को नीला करने वाले घोल का pH है:`,
    options: [
      `2`,
      `5`,
      `7`,
      `10`,
    ],
    options_hi: [
      `2`,
      `5`,
      `7`,
      `10`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10`,
    solution_hi: `सही उत्तर: (d) 10`,
    difficulty: 2
  }
];
