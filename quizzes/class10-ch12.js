// Class 10 Science – Chapter 12: ELECTRICITY
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The SI unit of electric current is:`,
    options: [
      `Volt`,
      `Ampere`,
      `Ohm`,
      `Joule`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ampere`
  },
  {
    question: `The resistance of an ideal ammeter is:`,
    options: [
      `Infinite`,
      `Zero`,
      `1 Ω`,
      `10 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Zero`
  },
  {
    question: `Ohm’s law is valid for:`,
    options: [
      `All conductors`,
      `Metallic conductors at constant temperature`,
      `Electrolytes`,
      `Gases`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Metallic conductors at constant temperature`
  },
  {
    question: `The resistivity of a material depends on:`,
    options: [
      `Length`,
      `Area of cross-section`,
      `Nature of material`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Nature of material`
  },
  {
    question: `When resistors are connected in parallel, the total resistance:`,
    options: [
      `Increases`,
      `Decreases`,
      `Remains same`,
      `Becomes zero`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Decreases`
  },
  {
    question: `The unit of electric power is:`,
    options: [
      `Volt`,
      `Ampere`,
      `Watt`,
      `Ohm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Watt`
  },
  {
    question: `The heat produced in a resistor is given by:`,
    options: [
      `(H=VIt)`,
      `(H=I2Rt)`,
      `(H=V2Rt)`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The direction of conventional current is:`,
    options: [
      `From negative to positive terminal`,
      `From positive to negative terminal`,
      `Opposite to electron flow`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c)`
  },
  {
    question: `The resistance of a conductor is directly proportional to:`,
    options: [
      `Length`,
      `Area of cross-section`,
      `Resistivity`,
      `Both (a) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (a) and (c)`
  },
  {
    question: `A 100 W bulb and a 60 W bulb (same voltage) are connected in parallel. Which has higher resistance?`,
    options: [
      `100 W`,
      `60 W`,
      `Both same`,
      `Cannot say`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60 W`
  },
  {
    question: `The commercial unit of electrical energy is:`,
    options: [
      `Joule`,
      `Watt`,
      `Kilowatt-hour`,
      `Volt`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Kilowatt-hour`
  },
  {
    question: `The equivalent resistance of two 4 Ω resistors in parallel is:`,
    options: [
      `8 Ω`,
      `4 Ω`,
      `2 Ω`,
      `1 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 Ω`
  },
  {
    question: `The instrument used to measure potential difference is:`,
    options: [
      `Ammeter`,
      `Galvanometer`,
      `Voltmeter`,
      `Rheostat`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Voltmeter`
  },
  {
    question: `The resistance of a wire is doubled when its length is doubled. What happens to its area?`,
    options: [
      `Doubled`,
      `Halved`,
      `Remains same`,
      `Quadrupled`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Remains same`
  },
  {
    question: `The power dissipated in a resistor is given by:`,
    options: [
      `(P=VI)`,
      `(P=I2R)`,
      `(P=V2R)`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The resistivity of copper is:`,
    options: [
      `Higher than rubber`,
      `Lower than rubber`,
      `Same as rubber`,
      `Zero`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lower than rubber`
  },
  {
    question: `In a series combination of resistors, the current is:`,
    options: [
      `Same through each resistor`,
      `Different through each resistor`,
      `Zero`,
      `Maximum in first resistor`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Same through each resistor`
  },
  {
    question: `The charge on an electron is:`,
    options: [
      `(+1.6×10−19 C)`,
      `(−1.6×10−19 C)`,
      `(+1.6×1019 C)`,
      `(−1.6×1019 C)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (−1.6×10−19 C)`
  },
  {
    question: `The number of electrons in 1 coulomb of charge is:`,
    options: [
      `(6.25×1018)`,
      `(1.6×10−19)`,
      `(6.25×10−18)`,
      `(1.6×1019)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (6.25×1018)`
  },
  {
    question: `The fuse wire is made of:`,
    options: [
      `Copper`,
      `Aluminium`,
      `Tin-lead alloy`,
      `Iron`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Tin-lead alloy`
  }
];
