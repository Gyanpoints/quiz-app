// Class 10 Science – All Chapters MCQs
// 320 questions

const QUESTIONS = [
  {
    question: `Which of the following is a double displacement reaction?`,
    options: [
      `Zn+CuSO4→ZnSO4+Cu`,
      `CaO+H2O→Ca(OH)2`,
      `Na2SO4+BaCl2→BaSO4+2NaCl`,
      `CH4+2O2→CO2+2H2O`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Na2SO4+BaCl2→BaSO4+2NaCl`
  },
  {
    question: `The brown gas evolved when lead nitrate is heated is:`,
    options: [
      `Oxygen`,
      `Nitrogen dioxide`,
      `Nitric oxide`,
      `Ammonia`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nitrogen dioxide`
  },
  {
    question: `Rancidity can be prevented by:`,
    options: [
      `Oxidation`,
      `Adding nitrogen gas`,
      `Adding oxygen`,
      `Heating`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Adding nitrogen gas`
  },
  {
    question: `Which is oxidized in the reaction: (CuO+H2→Cu+H2O)?`,
    options: [
      `CuO`,
      `H₂`,
      `Cu`,
      `H₂O`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) H₂`
  },
  {
    question: `Respiration is an example of:`,
    options: [
      `Endothermic reaction`,
      `Exothermic reaction`,
      `Photochemical reaction`,
      `Displacement reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Exothermic reaction`
  },
  {
    question: `The reaction (Fe2O3+2Al→Al2O3+2Fe) is an example of:`,
    options: [
      `Combination`,
      `Decomposition`,
      `Displacement`,
      `Double displacement`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Displacement`
  },
  {
    question: `Which gas is evolved when zinc reacts with dilute sulphuric acid?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Hydrogen`,
      `Carbon dioxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen`
  },
  {
    question: `The reaction used in black and white photography is:`,
    options: [
      `(2AgCl→{sunlight}2Ag+Cl2)`,
      `(2AgBr→{sunlight}2Ag+Br2)`,
      `(AgNNO3 + NaCl→AgCl +NaNO3)`,
      `(CaCO3→{Δ}CaO+CO2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (2AgBr→{sunlight}2Ag+Br2)`
  },
  {
    question: `Which of the following is a precipitation reaction?`,
    options: [
      `(NaOH+HCl→NaCl+H2O)`,
      `(BaCl2+Na2SO4→BaSO4+2NaCl)`,
      `(Zn+H2SO4→ZnSO4+H2)`,
      `(CaO+H2O→Ca(OH)2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (BaCl2+Na2SO4→BaSO4+2NaCl)`
  },
  {
    question: `The substance that gets oxidized in a redox reaction is called:`,
    options: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Catalyst`,
      `Inhibitor`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reducing agent`
  },
  {
    question: `Electrolysis of water is a:`,
    options: [
      `Combination reaction`,
      `Decomposition reaction`,
      `Displacement reaction`,
      `Neutralization reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Decomposition reaction`
  },
  {
    question: `Corrosion of iron is:`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Neutralization`,
      `Precipitation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Oxidation`
  },
  {
    question: `Which is not a physical change?`,
    options: [
      `Melting of ice`,
      `Dissolving salt in water`,
      `Burning of paper`,
      `Boiling of water`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Burning of paper`
  },
  {
    question: `The reaction (CaCO3→{Δ}CaO+CO2) is:`,
    options: [
      `Thermal decomposition`,
      `Electrolytic decomposition`,
      `Photodecomposition`,
      `Displacement`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thermal decomposition`
  },
  {
    question: `In the reaction (MnO2+4HCl→MnCl2+Cl2+2H2O), HCl acts as:`,
    options: [
      `Oxidizing agent`,
      `Reducing agent`,
      `Both (a) and (b)`,
      `Neither`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both (a) and (b)`
  },
  {
    question: `Which metal does not react with cold water?`,
    options: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron`
  },
  {
    question: `The colour of ferrous sulphate crystals is:`,
    options: [
      `Blue`,
      `Green`,
      `White`,
      `Brown`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Green`
  },
  {
    question: `When CO₂ is passed through lime water, it turns milky due to formation of:`,
    options: [
      `CaCO₃`,
      `Ca(OH)₂`,
      `Ca(HCO₃)₂`,
      `CaO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CaCO₃`
  },
  {
    question: `Which is a balanced equation?`,
    options: [
      `(H2+O2→H2O)`,
      `(2H2+O2→2H2O)`,
      `(H2+2O2→H2O)`,
      `(2H2+2O2→2H2O)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (2H2+O2→2H2O)`
  },
  {
    question: `The reaction between an acid and a base is called:`,
    options: [
      `Combustion`,
      `Neutralization`,
      `Oxidation`,
      `Reduction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neutralization`
  },
  {
    question: `Which of the following is a strong acid?`,
    options: [
      `Acetic acid`,
      `Citric acid`,
      `Hydrochloric acid`,
      `Carbonic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrochloric acid`
  },
  {
    question: `The pH of a neutral solution is:`,
    options: [
      `0`,
      `7`,
      `14`,
      `10`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`
  },
  {
    question: `Tooth enamel starts corroding when pH in mouth is below:`,
    options: [
      `7`,
      `6`,
      `5.5`,
      `4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5.5`
  },
  {
    question: `Which gas is evolved when sodium carbonate reacts with dilute HCl?`,
    options: [
      `Hydrogen`,
      `Oxygen`,
      `Carbon dioxide`,
      `Chlorine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carbon dioxide`
  },
  {
    question: `The common name of NaHCO₃ is:`,
    options: [
      `Washing soda`,
      `Baking soda`,
      `Bleaching powder`,
      `Gypsum`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Baking soda`
  },
  {
    question: `Which salt is used for removing permanent hardness of water?`,
    options: [
      `NaHCO₃`,
      `Na₂CO₃`,
      `CaSO₄`,
      `MgCl₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Na₂CO₃`
  },
  {
    question: `The chemical formula of washing soda is:`,
    options: [
      `NaHCO₃`,
      `Na₂CO₃`,
      `Na₂CO₃·10H₂O`,
      `CaOCl₂`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Na₂CO₃·10H₂O`
  },
  {
    question: `Which of the following is a base but not an alkali?`,
    options: [
      `NaOH`,
      `KOH`,
      `Cu(OH)₂`,
      `NH₄OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cu(OH)₂`
  },
  {
    question: `The pH of gastric juice is approximately:`,
    options: [
      `1.5`,
      `7`,
      `10`,
      `14`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.5`
  },
  {
    question: `Which indicator gives pink colour in basic solution?`,
    options: [
      `Methyl orange`,
      `Phenolphthalein`,
      `Blue litmus`,
      `Red litmus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Phenolphthalein`
  },
  {
    question: `The reaction between an acid and a base is called:`,
    options: [
      `Combustion`,
      `Neutralization`,
      `Oxidation`,
      `Reduction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neutralization`
  },
  {
    question: `Bleaching powder is prepared by reacting chlorine with:`,
    options: [
      `Dry slaked lime`,
      `Quicklime`,
      `Limestone`,
      `Water`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Dry slaked lime`
  },
  {
    question: `Which of the following is used as an antacid?`,
    options: [
      `NaOH`,
      `Mg(OH)₂`,
      `HCl`,
      `H₂SO₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mg(OH)₂`
  },
  {
    question: `The pH of rainwater is about:`,
    options: [
      `7`,
      `5.6`,
      `4`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5.6`
  },
  {
    question: `Which salt is used in fire extinguishers?`,
    options: [
      `NaCl`,
      `NaHCO₃`,
      `Na₂CO₃`,
      `CaSO₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) NaHCO₃`
  },
  {
    question: `The chemical formula of plaster of Paris is:`,
    options: [
      `CaSO₄`,
      `CaSO₄·2H₂O`,
      `CaSO₄·½H₂O`,
      `CaO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CaSO₄·½H₂O`
  },
  {
    question: `Which of the following is acidic in nature?`,
    options: [
      `Human blood`,
      `Lime water`,
      `Vinegar`,
      `Soap solution`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vinegar`
  },
  {
    question: `When CO₂ is passed through lime water, it turns milky due to formation of:`,
    options: [
      `CaCO₃`,
      `Ca(OH)₂`,
      `Ca(HCO₃)₂`,
      `CaO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CaCO₃`
  },
  {
    question: `Which of the following is a neutral salt?`,
    options: [
      `NH₄Cl`,
      `Na₂CO₃`,
      `CH₃COONa`,
      `NaCl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) NaCl`
  },
  {
    question: `The pH of a solution that turns red litmus blue is:`,
    options: [
      `2`,
      `5`,
      `7`,
      `10`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10`
  },
  {
    question: `Which metal is liquid at room temperature?`,
    options: [
      `Sodium`,
      `Iron`,
      `Mercury`,
      `Copper`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mercury`
  },
  {
    question: `Which non-metal is lustrous?`,
    options: [
      `Sulphur`,
      `Phosphorus`,
      `Iodine`,
      `Carbon`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Iodine`
  },
  {
    question: `The most reactive metal is:`,
    options: [
      `Iron`,
      `Copper`,
      `Potassium`,
      `Silver`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Potassium`
  },
  {
    question: `12) 4. Which metal is stored in kerosene?`,
    options: [
      `Iron`,
      `Sodium`,
      `Aluminium`,
      `Zinc`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Sodium`
  },
  {
    question: `The metal that forms amphoteric oxide is:`,
    options: [
      `Na`,
      `Ca`,
      `Al`,
      `Cu`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Al`
  },
  {
    question: `Which gas is evolved when metals react with acids?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Hydrogen`,
      `Carbon dioxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen`
  },
  {
    question: `3) 7. The metal used for galvanization is:`,
    options: [
      `Chromium`,
      `Zinc`,
      `Tin`,
      `Nickel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Zinc`
  },
  {
    question: `Which non-metal is essential for life?`,
    options: [
      `Sulphur`,
      `Oxygen`,
      `Phosphorus`,
      `Chlorine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxygen`
  },
  {
    question: `The metal that does not react with cold water is:`,
    options: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron`
  },
  {
    question: `4) 10. The chemical formula of rust is:`,
    options: [
      `FeO`,
      `Fe₂O₃`,
      `Fe₃O₄`,
      `Fe₂O₃·xH₂O`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fe₂O₃·xH₂O`
  },
  {
    question: `Which metal is the best conductor of heat?`,
    options: [
      `Lead`,
      `Silver`,
      `Mercury`,
      `Copper`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Silver`
  },
  {
    question: `The metal used in thermometers is:`,
    options: [
      `Iron`,
      `Aluminium`,
      `Mercury`,
      `Zinc`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mercury`
  },
  {
    question: `Which oxide is acidic?`,
    options: [
      `Na₂O`,
      `CaO`,
      `CO₂`,
      `MgO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CO₂`
  },
  {
    question: `The metal that reacts with steam but not with cold water is:`,
    options: [
      `Sodium`,
      `Potassium`,
      `Calcium`,
      `Iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron`
  },
  {
    question: `4) 15. Which alloy contains mercury?`,
    options: [
      `Brass`,
      `Bronze`,
      `Amalgam`,
      `Steel`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Amalgam`
  },
  {
    question: `The metal used for making aircraft bodies is:`,
    options: [
      `Iron`,
      `Copper`,
      `Aluminium`,
      `Zinc`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Aluminium`
  },
  {
    question: `Which non-metal is used in fertilizers?`,
    options: [
      `Oxygen`,
      `Nitrogen`,
      `Sulphur`,
      `Phosphorus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nitrogen`
  },
  {
    question: `The metal that displaces copper from CuSO₄ solution is:`,
    options: [
      `Ag`,
      `Au`,
      `Zn`,
      `Pt`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zn`
  },
  {
    question: `12) 19. The property of metals by which they can be drawn into wires is called:`,
    options: [
      `Malleability`,
      `Ductility`,
      `Sonority`,
      `Conductivity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ductility`
  },
  {
    question: `Which metal is used for making cooking utensils?`,
    options: [
      `Lead`,
      `Mercury`,
      `Aluminium`,
      `Sodium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Aluminium`
  },
  {
    question: `The property of carbon to form long chains is called:`,
    options: [
      `Tetravalency`,
      `Catenation`,
      `Isomerism`,
      `Allotropy`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Catenation`
  },
  {
    question: `The functional group in CH₃COOH is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carboxylic acid`
  },
  {
    question: `The general formula of alkanes is:`,
    options: [
      `CₙH₂ₙ`,
      `CₙH₂ₙ₊₂`,
      `CₙH₂ₙ₋₂`,
      `CₙH₂ₙ₊₁`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) CₙH₂ₙ₊₂`
  },
  {
    question: `Which of the following is a saturated hydrocarbon?`,
    options: [
      `Ethene`,
      `Ethyne`,
      `Ethane`,
      `Benzene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ethane`
  },
  {
    question: `The IUPAC name of CH₃CH₂CHO is:`,
    options: [
      `Propanal`,
      `Propanone`,
      `Ethanal`,
      `Butanal`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Propanal`
  },
  {
    question: `The number of structural isomers of pentane is:`,
    options: [
      `2`,
      `3`,
      `4`,
      `5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3`
  },
  {
    question: `The functional group in CH₃COCH₃ is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ketone`
  },
  {
    question: `Which of the following is an unsaturated hydrocarbon?`,
    options: [
      `Methane`,
      `Ethane`,
      `Propane`,
      `Ethene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ethene`
  },
  {
    question: `The reaction CH₂=CH₂ + H₂ → CH₃–CH₃ is called:`,
    options: [
      `Substitution`,
      `Addition`,
      `Oxidation`,
      `Esterification`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Addition`
  },
  {
    question: `The functional group in CH₃CH₂OH is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Alcohol`
  },
  {
    question: `The IUPAC name of CH₃–CH₂–CH₂–OH is:`,
    options: [
      `Ethanol`,
      `Propanol`,
      `Butanol`,
      `Methanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Propanol`
  },
  {
    question: `Which catalyst is used in hydrogenation of oils?`,
    options: [
      `Pt`,
      `Pd`,
      `Ni`,
      `Fe`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ni`
  },
  {
    question: `The molecular formula of benzene is:`,
    options: [
      `C₆H₆`,
      `C₆H₁₂`,
      `C₆H₁₄`,
      `C₆H₁₀`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) C₆H₆`
  },
  {
    question: `The reaction CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O is:`,
    options: [
      `Saponification`,
      `Esterification`,
      `Hydrogenation`,
      `Oxidation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Esterification`
  },
  {
    question: `The functional group in soaps is:`,
    options: [
      `–COOH`,
      `–COONa`,
      `–OH`,
      `–CHO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –COONa`
  },
  {
    question: `Which of the following is a homologous series?`,
    options: [
      `CH₄, C₂H₆, C₃H₈`,
      `CH₄, C₂H₄, C₃H₆`,
      `CH₄, C₂H₂, C₃H₄`,
      `C₂H₆, C₂H₄, C₂H₂`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CH₄, C₂H₆, C₃H₈`
  },
  {
    question: `The IUPAC name of HCOOH is:`,
    options: [
      `Methanoic acid`,
      `Ethanoic acid`,
      `Propanoic acid`,
      `Butanoic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Methanoic acid`
  },
  {
    question: `The number of covalent bonds in ethane (C₂H₆) is:`,
    options: [
      `6`,
      `7`,
      `8`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`
  },
  {
    question: `The reaction used to convert vegetable oil to vanaspati ghee is:`,
    options: [
      `Oxidation`,
      `Hydrogenation`,
      `Substitution`,
      `Esterification`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hydrogenation`
  },
  {
    question: `The functional group in formaldehyde is:`,
    options: [
      `Aldehyde`,
      `Ketone`,
      `Carboxylic acid`,
      `Alcohol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aldehyde`
  },
  {
    question: `The basis of modern periodic table is:`,
    options: [
      `Atomic mass`,
      `Atomic number`,
      `Valency`,
      `Reactivity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Atomic number`
  },
  {
    question: `The number of periods in the modern periodic table is:`,
    options: [
      `7`,
      `8`,
      `9`,
      `18`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7`
  },
  {
    question: `The number of groups in the modern periodic table is:`,
    options: [
      `7`,
      `8`,
      `18`,
      `9`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 18`
  },
  {
    question: `An element with atomic number 19 belongs to:`,
    options: [
      `Group 1, Period 4`,
      `Group 2, Period 4`,
      `Group 1, Period 3`,
      `Group 17, Period 3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Group 1, Period 4`
  },
  {
    question: `Which element has the largest atomic size in period 2?`,
    options: [
      `Li`,
      `Be`,
      `B`,
      `F`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Li`
  },
  {
    question: `The valency of elements in group 1 is:`,
    options: [
      `1`,
      `2`,
      `3`,
      `0`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1`
  },
  {
    question: `Noble gases belong to group:`,
    options: [
      `1`,
      `2`,
      `17`,
      `18`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 18`
  },
  {
    question: `The element with electronic configuration 2,8,7 is:`,
    options: [
      `Sodium`,
      `Chlorine`,
      `Argon`,
      `Sulphur`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Chlorine`
  },
  {
    question: `Which property decreases along a period?`,
    options: [
      `Atomic size`,
      `Metallic character`,
      `Electronegativity`,
      `Both (a) and (b)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (a) and (b)`
  },
  {
    question: `Mendeleev’s periodic table was based on:`,
    options: [
      `Atomic number`,
      `Atomic mass`,
      `Valency`,
      `Density`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Atomic mass`
  },
  {
    question: `The element predicted by Mendeleev as Eka- aluminium is:`,
    options: [
      `Germanium`,
      `Gallium`,
      `Scandium`,
      `Silicon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Gallium`
  },
  {
    question: `Which of the following has the highest electronegativity?`,
    options: [
      `F`,
      `Cl`,
      `Br`,
      `I`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) F`
  },
  {
    question: `The number of valence electrons in group 17 elements is:`,
    options: [
      `1`,
      `2`,
      `7`,
      `8`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7`
  },
  {
    question: `An element with atomic number 12 belongs to:`,
    options: [
      `Group 2, Period 3`,
      `Group 3, Period 2`,
      `Group 12, Period 3`,
      `Group 2, Period 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Group 2, Period 3`
  },
  {
    question: `Which is a metalloid?`,
    options: [
      `Sodium`,
      `Silicon`,
      `Chlorine`,
      `Argon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Silicon`
  },
  {
    question: `The element with the smallest atomic size in group 1 is:`,
    options: [
      `Li`,
      `Na`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Li`
  },
  {
    question: `The modern periodic law was proposed by:`,
    options: [
      `Mendeleev`,
      `Newlands`,
      `Moseley`,
      `Dobereiner`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Moseley`
  },
  {
    question: `Which element has zero valency?`,
    options: [
      `Na`,
      `Mg`,
      `Al`,
      `Ar`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ar`
  },
  {
    question: `The number of elements in the 2nd period is:`,
    options: [
      `2`,
      `8`,
      `18`,
      `32`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8`
  },
  {
    question: `Which property increases down a group?`,
    options: [
      `Atomic size`,
      `Metallic character`,
      `Electronegativity`,
      `Both (a) and (b)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (a) and (b)`
  },
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
  },
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
  },
  {
    question: `The process by which new individuals are produced is called:`,
    options: [
      `Respiration`,
      `Reproduction`,
      `Digestion`,
      `Excretion`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reproduction`
  },
  {
    question: `Binary fission is seen in:`,
    options: [
      `Amoeba`,
      `Yeast`,
      `Hydra`,
      `Planaria`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amoeba`
  },
  {
    question: `The male gamete in flowering plants is present in:`,
    options: [
      `Ovule`,
      `Pollen grain`,
      `Stigma`,
      `Ovary`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pollen grain`
  },
  {
    question: `The female reproductive part of a flower is:`,
    options: [
      `Stamen`,
      `Petal`,
      `Pistil`,
      `Sepal`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pistil`
  },
  {
    question: `The process of fusion of male and female gametes is called:`,
    options: [
      `Fission`,
      `Budding`,
      `Fertilization`,
      `Regeneration`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fertilization`
  },
  {
    question: `Vegetative propagation is seen in:`,
    options: [
      `Potato`,
      `Mango`,
      `Wheat`,
      `Rice`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Potato`
  },
  {
    question: `The hormone that regulates male reproductive organs is:`,
    options: [
      `Estrogen`,
      `Progesterone`,
      `Testosterone`,
      `Insulin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Testosterone`
  },
  {
    question: `The site of fertilization in humans is:`,
    options: [
      `Uterus`,
      `Ovary`,
      `Fallopian tube`,
      `Vagina`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fallopian tube`
  },
  {
    question: `The number of chromosomes in human gametes is:`,
    options: [
      `46`,
      `23`,
      `22`,
      `44`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 23`
  },
  {
    question: `The process by which a new organism develops from a bud is called:`,
    options: [
      `Fission`,
      `Budding`,
      `Fragmentation`,
      `Spore formation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Budding`
  },
  {
    question: `The male reproductive organ in humans is:`,
    options: [
      `Ovary`,
      `Uterus`,
      `Testis`,
      `Fallopian tube`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Testis`
  },
  {
    question: `The female gamete in humans is:`,
    options: [
      `Sperm`,
      `Ovum`,
      `Zygote`,
      `Embryo`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ovum`
  },
  {
    question: `The structure that provides nutrition to the embryo is:`,
    options: [
      `Uterus`,
      `Placenta`,
      `Ovary`,
      `Fallopian tube`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Placenta`
  },
  {
    question: `The method of asexual reproduction in yeast is:`,
    options: [
      `Binary fission`,
      `Budding`,
      `Fragmentation`,
      `Spore formation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Budding`
  },
  {
    question: `The process of DNA copying is essential for:`,
    options: [
      `Respiration`,
      `Reproduction`,
      `Digestion`,
      `Excretion`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reproduction`
  },
  {
    question: `The part of the flower that develops into fruit is:`,
    options: [
      `Ovule`,
      `Ovary`,
      `Stigma`,
      `Style`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ovary`
  },
  {
    question: `The number of chromosomes in human somatic cells is:`,
    options: [
      `23`,
      `46`,
      `22`,
      `44`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 46`
  },
  {
    question: `The method of contraception that blocks sperm entry is:`,
    options: [
      `Tubectomy`,
      `Vasectomy`,
      `Condom`,
      `Oral pills`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Condom`
  },
  {
    question: `The process by which an organism regrows lost parts is:`,
    options: [
      `Fission`,
      `Budding`,
      `Regeneration`,
      `Fragmentation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Regeneration`
  },
  {
    question: `The hormone that regulates female reproductive organs is:`,
    options: [
      `Testosterone`,
      `Estrogen`,
      `Adrenaline`,
      `Insulin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Estrogen`
  },
  {
    question: `The father of genetics is:`,
    options: [
      `Darwin`,
      `Mendel`,
      `Lamarck`,
      `Morgan`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mendel`
  },
  {
    question: `The genetic material in most organisms is:`,
    options: [
      `RNA`,
      `Protein`,
      `DNA`,
      `Carbohydrate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DNA`
  },
  {
    question: `The number of chromosomes in human somatic cells is:`,
    options: [
      `23`,
      `46`,
      `22`,
      `44`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 46`
  },
  {
    question: `Mendel conducted his experiments on:`,
    options: [
      `Maize`,
      `Pea plant`,
      `Drosophila`,
      `Neurospora`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pea plant`
  },
  {
    question: `The sex chromosomes in human males are:`,
    options: [
      `XX`,
      `XY`,
      `YY`,
      `XO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) XY`
  },
  {
    question: `Which of the following is a recessive trait in pea plants?`,
    options: [
      `Tall height`,
      `Round seeds`,
      `Green seeds`,
      `Violet flowers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Green seeds`
  },
  {
    question: `The theory of natural selection was proposed by:`,
    options: [
      `Mendel`,
      `Darwin`,
      `Lamarck`,
      `Hugo de Vries`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Darwin`
  },
  {
    question: `Homologous organs have:`,
    options: [
      `Same structure, different function`,
      `Different structure, same function`,
      `Same structure and function`,
      `No similarity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Same structure, different function`
  },
  {
    question: `Analogous organs have:`,
    options: [
      `Same structure, different function`,
      `Different structure, same function`,
      `Same structure and function`,
      `No similarity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Different structure, same function`
  },
  {
    question: `The fossil of Archaeopteryx shows link between:`,
    options: [
      `Reptiles and birds`,
      `Fish and amphibians`,
      `Amphibians and reptiles`,
      `Birds and mammals`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Reptiles and birds`
  },
  {
    question: `The process by which new species are formed is called:`,
    options: [
      `Heredity`,
      `Evolution`,
      `Speciation`,
      `Mutation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Speciation`
  },
  {
    question: `Which of the following is an acquired trait?`,
    options: [
      `Eye colour`,
      `Blood group`,
      `Body size due to nutrition`,
      `Skin colour`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Body size due to nutrition`
  },
  {
    question: `The genetic constitution of an organism is called:`,
    options: [
      `Phenotype`,
      `Genotype`,
      `Allele`,
      `Gene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Genotype`
  },
  {
    question: `The physical appearance of an organism is called:`,
    options: [
      `Genotype`,
      `Phenotype`,
      `Allele`,
      `Gene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Phenotype`
  },
  {
    question: `The sex of a child is determined by:`,
    options: [
      `Mother`,
      `Father`,
      `Both parents`,
      `Environment`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Father`
  },
  {
    question: `Which of the following is a vestigial organ in humans?`,
    options: [
      `Heart`,
      `Appendix`,
      `Liver`,
      `Kidney`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Appendix`
  },
  {
    question: `The forelimbs of a human, bat, and whale are examples of:`,
    options: [
      `Analogous organs`,
      `Homologous organs`,
      `Vestigial organs`,
      `None`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Homologous organs`
  },
  {
    question: `The wings of a bird and an insect are examples of:`,
    options: [
      `Homologous organs`,
      `Analogous organs`,
      `Vestigial organs`,
      `None`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Analogous organs`
  },
  {
    question: `The variation that is passed to next generation is due to:`,
    options: [
      `Acquired traits`,
      `Inherited traits`,
      `Environmental factors`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Inherited traits`
  },
  {
    question: `The scientist who proposed the theory of inheritance of acquired characters is:`,
    options: [
      `Darwin`,
      `Mendel`,
      `Lamarck`,
      `Morgan`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lamarck`
  },
  {
    question: `The image formed by a plane mirror is:`,
    options: [
      `Real and inverted`,
      `Virtual and erect`,
      `Real and erect`,
      `Virtual and inverted`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual and erect`
  },
  {
    question: `The focal length of a concave mirror is:`,
    options: [
      `Positive`,
      `Negative`,
      `Zero`,
      `Infinite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Negative`
  },
  {
    question: `A convex mirror always forms:`,
    options: [
      `Real image`,
      `Virtual image`,
      `Inverted image`,
      `Magnified image`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual image`
  },
  {
    question: `The refractive index of glass with respect to air is 1.5. The speed of light in glass is:`,
    options: [
      `(2×108 m/s)`,
      `(3×108 m/s)`,
      `(1.5×108 m/s)`,
      `(4.5×108 m/s)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (2×108 m/s)`
  },
  {
    question: `The power of a lens of focal length +25 cm is:`,
    options: [
      `+4 D`,
      `–4 D`,
      `+0.25 D`,
      `–0.25 D`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) +4 D`
  },
  {
    question: `When light travels from air to glass, it bends:`,
    options: [
      `Away from normal`,
      `Towards normal`,
      `Does not bend`,
      `Perpendicular to surface`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Towards normal`
  },
  {
    question: `The mirror used as rear-view mirror in vehicles is:`,
    options: [
      `Concave`,
      `Convex`,
      `Plane`,
      `Parabolic`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Convex`
  },
  {
    question: `The SI unit of power of a lens is:`,
    options: [
      `Metre`,
      `Dioptre`,
      `Watt`,
      `Joule`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Dioptre`
  },
  {
    question: `The image formed by a concave mirror when object is at infinity is:`,
    options: [
      `At F, real, inverted, highly diminished`,
      `At C, real, inverted, same size`,
      `Between F and C, real, inverted, magnified`,
      `Behind mirror, virtual, erect, magnified`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) At F, real, inverted, highly diminished`
  },
  {
    question: `The refractive index of water is 4/3. The critical angle for water-air interface is approximately:`,
    options: [
      `45°`,
      `49°`,
      `60°`,
      `90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 49°`
  },
  {
    question: `A lens that converges light rays is:`,
    options: [
      `Concave lens`,
      `Convex lens`,
      `Plane lens`,
      `Biconcave lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Convex lens`
  },
  {
    question: `The magnification produced by a plane mirror is:`,
    options: [
      `+1`,
      `–1`,
      `0`,
      `∞`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) +1`
  },
  {
    question: `The focal length of a plane mirror is:`,
    options: [
      `Zero`,
      `Infinite`,
      `Equal to radius of curvature`,
      `Negative`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Infinite`
  },
  {
    question: `When object is placed between F and P of a concave mirror, the image is:`,
    options: [
      `Real, inverted, magnified`,
      `Virtual, erect, magnified`,
      `Real, inverted, diminished`,
      `Virtual, erect, diminished`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual, erect, magnified`
  },
  {
    question: `The speed of light is maximum in:`,
    options: [
      `Glass`,
      `Water`,
      `Air`,
      `Diamond`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Air`
  },
  {
    question: `The lens used to correct myopia is:`,
    options: [
      `Convex`,
      `Concave`,
      `Bifocal`,
      `Cylindrical`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Concave`
  },
  {
    question: `The relation between radius of curvature (R) and focal length (f) is:`,
    options: [
      `(R=f)`,
      `(R=2f)`,
      `(f=2R)`,
      `(R=f/2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (R=2f)`
  },
  {
    question: `The phenomenon of splitting of white light into its constituent colours is called:`,
    options: [
      `Refraction`,
      `Reflection`,
      `Dispersion`,
      `Scattering`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dispersion`
  },
  {
    question: `The absolute refractive index of a medium is always:`,
    options: [
      `Less than 1`,
      `Equal to 1`,
      `Greater than 1`,
      `Zero`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Greater than 1`
  },
  {
    question: `The mirror formula is:`,
    options: [
      `1 𝑓 = 1 𝑣 + 1 𝑣`,
      `(f=v+u)`,
      `1 𝑓 = 1 𝑣 − 1 𝑣`,
      `(f=vu)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝑓 = 1 𝑣 + 1 𝑣`
  },
  {
    question: `The least distance of distinct vision for a normal human eye is:`,
    options: [
      `25 cm`,
      `25 m`,
      `2.5 cm`,
      `Infinity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25 cm`
  },
  {
    question: `The part of the eye that controls the size of the pupil is:`,
    options: [
      `Cornea`,
      `Iris`,
      `Retina`,
      `Lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Iris`
  },
  {
    question: `Myopia is corrected by using:`,
    options: [
      `Convex lens`,
      `Concave lens`,
      `Bifocal lens`,
      `Cylindrical lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Concave lens`
  },
  {
    question: `The sky appears blue due to:`,
    options: [
      `Reflection`,
      `Refraction`,
      `Scattering`,
      `Dispersion`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Scattering`
  },
  {
    question: `The defect of vision in which a person cannot see nearby objects clearly is:`,
    options: [
      `Myopia`,
      `Hypermetropia`,
      `Presbyopia`,
      `Astigmatism`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hypermetropia`
  },
  {
    question: `The colour of light that deviates the least in a prism is:`,
    options: [
      `Violet`,
      `Red`,
      `Green`,
      `Blue`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Red`
  },
  {
    question: `The focal length of the eye lens is adjusted by:`,
    options: [
      `Cornea`,
      `Iris`,
      `Ciliary muscles`,
      `Retina`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ciliary muscles`
  },
  {
    question: `Stars twinkle due to:`,
    options: [
      `Atmospheric refraction`,
      `Dispersion`,
      `Scattering`,
      `Reflection`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Atmospheric refraction`
  },
  {
    question: `The power of accommodation of a normal eye is about:`,
    options: [
      `1 D`,
      `2 D`,
      `4 D`,
      `6 D`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 D`
  },
  {
    question: `The Sun appears reddish at sunrise due to:`,
    options: [
      `Scattering of light`,
      `Refraction of light`,
      `Dispersion of light`,
      `Reflection of light`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Scattering of light`
  },
  {
    question: `The image formed on the retina is:`,
    options: [
      `Real and erect`,
      `Virtual and erect`,
      `Real and inverted`,
      `Virtual and inverted`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Real and inverted`
  },
  {
    question: `The range of vision for a normal eye is:`,
    options: [
      `0 to 25 cm`,
      `25 cm to infinity`,
      `0 to infinity`,
      `10 cm to 100 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 25 cm to infinity`
  },
  {
    question: `The defect corrected by bifocal lenses is:`,
    options: [
      `Myopia`,
      `Hypermetropia`,
      `Presbyopia`,
      `Astigmatism`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Presbyopia`
  },
  {
    question: `The phenomenon of splitting of white light into seven colours is called:`,
    options: [
      `Scattering`,
      `Refraction`,
      `Dispersion`,
      `Reflection`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dispersion`
  },
  {
    question: `The colour that scatters the most is:`,
    options: [
      `Red`,
      `Blue`,
      `Green`,
      `Yellow`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Blue`
  },
  {
    question: `Planets do not twinkle because:`,
    options: [
      `They are closer`,
      `They are point sources`,
      `They are extended sources`,
      `They emit their own light`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) They are extended sources`
  },
  {
    question: `The far point of a myopic eye is:`,
    options: [
      `Infinity`,
      `Less than infinity`,
      `25 cm`,
      `Zero`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Less than infinity`
  },
  {
    question: `The near point of a hypermetropic eye is:`,
    options: [
      `25 cm`,
      `More than 25 cm`,
      `Less than 25 cm`,
      `Infinity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) More than 25 cm`
  },
  {
    question: `The Tyndall effect is due to:`,
    options: [
      `Reflection of light`,
      `Scattering of light by colloidal particles`,
      `Refraction of light`,
      `Dispersion of light`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Scattering of light by colloidal particles`
  },
  {
    question: `The time difference between actual sunset and apparent sunset is about:`,
    options: [
      `1 minute`,
      `2 minutes`,
      `5 minutes`,
      `10 minutes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 minutes`
  },
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
  },
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
  },
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
  },
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
  },
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
