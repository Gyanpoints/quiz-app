// Class 10 Science – Chapter 14: SOURCES OF ENERGY
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `Which of the following is a renewable source of energy?`,
    options: [
      `Coal`,
      `Petroleum`,
      `Solar energy`,
      `Natural gas`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Solar energy`
  },
  {
    question: `The main constituent of biogas is:`,
    options: [
      `Hydrogen`,
      `Methane`,
      `Carbon dioxide`,
      `Oxygen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Methane`
  },
  {
    question: `The ultimate source of energy for fossil fuels is:`,
    options: [
      `Earth’s core`,
      `Sun`,
      `Moon`,
      `Wind`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Sun`
  },
  {
    question: `The device that converts solar energy into electricity is:`,
    options: [
      `Solar cooker`,
      `Solar cell`,
      `Solar water heater`,
      `Biogas plant`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Solar cell`
  },
  {
    question: `The minimum wind speed required for a wind turbine is:`,
    options: [
      `5 km/h`,
      `10 km/h`,
      `15 km/h`,
      `20 km/h`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15 km/h`
  },
  {
    question: `Which element is used as fuel in nuclear reactors?`,
    options: [
      `Hydrogen`,
      `Uranium`,
      `Carbon`,
      `Oxygen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Uranium`
  },
  {
    question: `The disadvantage of nuclear energy is:`,
    options: [
      `Low cost`,
      `Radioactive waste`,
      `High efficiency`,
      `Renewable`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Radioactive waste`
  },
  {
    question: `Charcoal is better than wood as a fuel because:`,
    options: [
      `It burns without smoke`,
      `It has lower calorific value`,
      `It is cheaper`,
      `It is renewable`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) It burns without smoke`
  },
  {
    question: `The energy source used in thermal power plants is:`,
    options: [
      `Water`,
      `Wind`,
      `Coal`,
      `Sun`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Coal`
  },
  {
    question: `The main cause of acid rain is:`,
    options: [
      `CO₂`,
      `SO₂ and NO₂`,
      `CH₄`,
      `O₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) SO₂ and NO₂`
  },
  {
    question: `Which gas is produced during anaerobic degradation of biomass?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Methane`,
      `Carbon monoxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Methane`
  },
  {
    question: `The material used for making solar cells is:`,
    options: [
      `Silicon`,
      `Copper`,
      `Aluminium`,
      `Iron`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Silicon`
  },
  {
    question: `The energy source that is not ultimately derived from the Sun is:`,
    options: [
      `Wind energy`,
      `Biomass`,
      `Geothermal energy`,
      `Hydropower`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Geothermal energy`
  },
  {
    question: `The process used to generate electricity in a hydro power plant is:`,
    options: [
      `Burning of coal`,
      `Nuclear fission`,
      `Rotation of turbine by water`,
      `Photovoltaic effect`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Rotation of turbine by water`
  },
  {
    question: `The full form of OTEC is:`,
    options: [
      `Ocean Thermal Energy Converter`,
      `Ocean Thermal Energy Conversion`,
      `Ocean Tidal Energy Conversion`,
      `Ocean Thermal Electric Cell`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ocean Thermal Energy Conversion`
  },
  {
    question: `The minimum temperature difference required for OTEC is:`,
    options: [
      `10°C`,
      `20°C`,
      `30°C`,
      `40°C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20°C`
  },
  {
    question: `Which of the following is a non-renewable source?`,
    options: [
      `Solar`,
      `Wind`,
      `Nuclear`,
      `Biomass`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Nuclear`
  },
  {
    question: `The calorific value of a fuel is expressed in:`,
    options: [
      `kJ/kg`,
      `J/kg`,
      `kcal/kg`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The main component of natural gas is:`,
    options: [
      `Methane`,
      `Ethane`,
      `Propane`,
      `Butane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Methane`
  },
  {
    question: `Hydrogen is not commonly used as a domestic fuel because:`,
    options: [
      `It is non-polluting`,
      `It has high calorific value`,
      `It is highly explosive`,
      `It is cheap`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) It is highly explosive`
  }
];
