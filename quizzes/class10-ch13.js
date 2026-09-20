// Class 10 Science – Chapter 13: MAGNETIC EFFECTS OF ELECTRIC CURRENT
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The SI unit of magnetic field is:`,
    options: [
      `Weber`,
      `Tesla`,
      `Gauss`,
      `Oersted`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Tesla`
  },
  {
    question: `The direction of magnetic field around a straight current-carrying conductor is given by:`,
    options: [
      `Fleming’s Left-Hand Rule`,
      `Fleming’s Right-Hand Rule`,
      `Right-Hand Thumb Rule`,
      `Maxwell’s Corkscrew Rule`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Right-Hand Thumb Rule`
  },
  {
    question: `The frequency of AC in India is:`,
    options: [
      `60 Hz`,
      `50 Hz`,
      `40 Hz`,
      `30 Hz`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 50 Hz`
  },
  {
    question: `The device that converts mechanical energy into electrical energy is:`,
    options: [
      `Electric motor`,
      `Generator`,
      `Transformer`,
      `Battery`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Generator`
  },
  {
    question: `The colour of the earth wire in domestic circuits is:`,
    options: [
      `Red`,
      `Black`,
      `Green`,
      `Blue`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Green`
  },
  {
    question: `Fleming’s Left-Hand Rule is used for:`,
    options: [
      `Generators`,
      `Motors`,
      `Transformers`,
      `Induction coils`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Motors`
  },
  {
    question: `The magnetic field inside a solenoid is:`,
    options: [
      `Zero`,
      `Non-uniform`,
      `Uniform`,
      `Circular`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Uniform`
  },
  {
    question: `The principle of an electric motor is:`,
    options: [
      `Electromagnetic induction`,
      `Heating effect of current`,
      `Force on current-carrying conductor in magnetic field`,
      `Magnetic effect of current`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Force on current-carrying conductor in magnetic field`
  },
  {
    question: `The function of split rings in an electric motor is to:`,
    options: [
      `Increase current`,
      `Reverse direction of current`,
      `Reduce friction`,
      `Support the coil`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reverse direction of current`
  },
  {
    question: `The phenomenon of electromagnetic induction was discovered by:`,
    options: [
      `Oersted`,
      `Faraday`,
      `Fleming`,
      `Ampere`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Faraday`
  },
  {
    question: `The magnetic field lines around a bar magnet:`,
    options: [
      `Intersect at poles`,
      `Are closed curves`,
      `Start from south pole`,
      `Are parallel straight lines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Are closed curves`
  },
  {
    question: `The direction of induced current is given by:`,
    options: [
      `Fleming’s Left-Hand Rule`,
      `Fleming’s Right-Hand Rule`,
      `Right-Hand Thumb Rule`,
      `Ampere’s Rule`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fleming’s Right-Hand Rule`
  },
  {
    question: `The live wire in domestic circuits is of colour:`,
    options: [
      `Red`,
      `Black`,
      `Green`,
      `Blue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Red`
  },
  {
    question: `The neutral wire in domestic circuits is of colour:`,
    options: [
      `Red`,
      `Black`,
      `Green`,
      `Blue`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Black`
  },
  {
    question: `The device used to protect circuits from short circuiting is:`,
    options: [
      `Ammeter`,
      `Voltmeter`,
      `Fuse`,
      `Galvanometer`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fuse`
  },
  {
    question: `The magnetic field produced by a circular loop is:`,
    options: [
      `Uniform`,
      `Strongest at centre`,
      `Zero at centre`,
      `Weakest at centre`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Strongest at centre`
  },
  {
    question: `The shape of magnetic field lines around a straight conductor is:`,
    options: [
      `Straight lines`,
      `Concentric circles`,
      `Parabolas`,
      `Ellipses`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Concentric circles`
  },
  {
    question: `The magnetic field due to a solenoid is similar to that of:`,
    options: [
      `Straight wire`,
      `Circular loop`,
      `Bar magnet`,
      `Horse-shoe magnet`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Bar magnet`
  },
  {
    question: `The current that changes direction periodically is:`,
    options: [
      `DC`,
      `AC`,
      `Pulsating DC`,
      `Steady current`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) AC`
  },
  {
    question: `The voltage supplied to homes in India is:`,
    options: [
      `110 V`,
      `220 V`,
      `240 V`,
      `120 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 220 V`
  }
];
