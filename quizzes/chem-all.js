// Chemistry – All Topics
// 964 questions

const QUESTIONS = [
  {
    question: `The number of isomeric alcohols of formula C₄H₁₀O is:`,
    options: [
      `2`,
      `4`,
      `7`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 4`
  },
  {
    question: `What amount of bromine will be required to convert 2 g of phenol into 2,4,6-tribromo phenol?`,
    options: [
      `4`,
      `6`,
      `10.22`,
      `20.44`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 10.22`
  },
  {
    question: `91. How many elements are included in IA group?`,
    options: [
      `4`,
      `5`,
      `6`,
      `7`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 6`
  },
  {
    question: `How many isomers of C₅H₁₁OH will be primary alcohols?`,
    options: [
      `5`,
      `4`,
      `2`,
      `3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 3`
  },
  {
    question: `127. The atomic numbers of four elements are given below. Which is an alkaline earth metal?`,
    options: [
      `10`,
      `20`,
      `30`,
      `40`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 20`
  },
  {
    question: `The characteristic group of secondary alcohol is:`,
    options: [
      `-CH₂OH`,
      `>CHOH`,
      `>COH`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: >CHOH`
  },
  {
    question: `Picric acid is a stronger acid than acetic acid and benzoic acid. It contains`,
    options: [
      `-SO₃H group`,
      `Two -COOH groups`,
      `Three -NO₂ groups`,
      `-CHO group`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Three -NO₂ groups`
  },
  {
    question: `In which case, methyl tert-butyl ether is formed?`,
    options: [
      `(C₂H₅)₃CONa + CH₃Cl`,
      `(CH₃)₃CONa + CH₃Cl`,
      `(CH₃)₂CONa + C₂H₅Cl`,
      `(CH₃)₂CHONa + CH₃Cl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (CH₃)₃CONa + CH₃Cl`
  },
  {
    question: `Which of the following does not react with sodium metal?`,
    options: [
      `(CH₃)₂O`,
      `CH₃CH₂OH`,
      `CH₃COOH`,
      `C₆H₅OH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (CH₃)₂O`
  },
  {
    question: `Carbinol is the trivial name for:`,
    options: [
      `(CH₃)₃COH`,
      `C₂H₅OH`,
      `CH₃OH`,
      `CH₃CH₂CHOHCH₃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `The compound that will react most readily with NaOH to form methanol is:`,
    options: [
      `(CH₃)₄N⁺I⁻`,
      `CH₃OCH₃`,
      `(CH₃)₃S⁺I⁻`,
      `(CH₃)₃C·Cl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (CH₃)₄N⁺I⁻`
  },
  {
    question: `Formic acid is obtained when:`,
    options: [
      `(CH₃COO)₂Ca is heated with conc. H₂SO₄`,
      `Calcium formate is heated with calcium acetate`,
      `Glycerol is heated with oxalic acid`,
      `Acetaldehyde is oxidized with K₂Cr₂O₇ and conc. H₂SO₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Glycerol is heated with oxalic acid`
  },
  {
    question: `246. Pick out the statement (s) which is (are) not true about the diagonal relationship of Li and Mg. (i) Polarising powers of \\(\\mathrm{Li}^{+}\\) and \\(\\mathrm{Mg}^{2 + }\\) are almost same. (ii) L like Li, Mg decomposes water very fast. (iii) LiCl and \\(\\mathrm{MgCl}_{2}\\) are deliquescent. (iv) Like Li, Mg does not form solid bicarbonates.`,
    options: [
      `(i) and (ii)`,
      `(ii) and (iii)`,
      `Only (ii)`,
      `Only (i)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Only (ii)`
  },
  {
    question: `General formula of primary alcohol is:`,
    options: [
      `⟶COH`,
      `⟶CHOH`,
      `⟶CH₂OH`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: ⟶CH₂OH`
  },
  {
    question: `23 g of sodium react with CH₃OH to give:`,
    options: [
      `1 mole of O₂`,
      `1/2 mole of H₂`,
      `1 mole of H₂`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 1/2 mole of H₂`
  },
  {
    question: `The compound which reacts fastest with Lucas reagent at room temperature is`,
    options: [
      `1-butanol`,
      `2-butanol`,
      `2-methylpropanol`,
      `2-methylpropan-2-ol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 2-methylpropan-2-ol`
  },
  {
    question: `1-chlorobutane on reaction with alcoholic KOH gives:`,
    options: [
      `1-butene`,
      `1-butanol`,
      `2-butene`,
      `2-butanol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1-butene`
  },
  {
    question: `The dehydration of butane-1-ol gives`,
    options: [
      `1-butene as the main product`,
      `2-butene as the main product`,
      `Equal amounts of 1-butene and 2-butene`,
      `2-methyl propene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 2-butene as the main product`
  },
  {
    question: `The alcohol that produces turbidity immediately with ZnCl₂/conc. HCl at room temperature`,
    options: [
      `1-hydroxy butane`,
      `2-hydroxy butane`,
      `2-hydroxy-2-methyl propane`,
      `1-hydroxy-2-methyl propane`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-hydroxy-2-methyl propane`
  },
  {
    question: `The IUPAC name of CH₃OCH(CH₃)₂ is:`,
    options: [
      `1-methoxy propane`,
      `3-methoxy propane`,
      `Methyl-isopropylether`,
      `2-methoxy propane`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 2-methoxy propane`
  },
  {
    question: `Cumene process is the most important commercial method for the manufacture of phenol. Cumene is`,
    options: [
      `1-methyl ethyl benzene`,
      `Ethyl benzene`,
      `Vinyl benzene`,
      `Propyl benzene`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1-methyl ethyl benzene`
  },
  {
    question: `Which of the following undergoes dehydration most readily?`,
    options: [
      `1-phenyl-1-butanol`,
      `1-phenyl-2-butanol`,
      `2-phenyl-2-butanol`,
      `2-phenyl-1-butanol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-phenyl-2-butanol`
  },
  {
    question: `In the reaction, A → K₂Cr₂O₇ → acetone → Oxidation → acetic acid, A is`,
    options: [
      `1-propanol`,
      `2-butanol`,
      `2-propanol`,
      `Ethanol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-propanol`
  },
  {
    question: `A mixture of 1-chloropropane and 2-chloropropane when treated with alcoholic KOH, it gives:`,
    options: [
      `1-propene`,
      `2-propene`,
      `Isopropylene`,
      `A mixture of 1-propene and 2-propene`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1-propene`
  },
  {
    question: `Match list I with List II: List I (Types of ore): 1. Oxide ore, 2. Sulphide ore, 3. Sulphate ore, 4. Halide ore. List II (example): A. Feldspar, B. Barytes, C. Fluorspar, D. Galena, E. Corundum`,
    options: [
      `1-A, 2-E, 3-B, 4-C`,
      `1-B, 2-D, 3-C, 4-A`,
      `1-B, 2-D, 3-E, 4-A`,
      `1-E, 2-D, 3-B, 4-C`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 1-E, 2-D, 3-B, 4-C`
  },
  {
    question: `The correct order of boiling point for primary (1°), secondary (2°) and tertiary (3°) alcohols is`,
    options: [
      `1° > 2° > 3°`,
      `3° > 2° > 1°`,
      `2° > 1° > 3°`,
      `2° > 3° > 1°`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1° > 2° > 3°`
  },
  {
    question: `In the reaction involving C-OH bond, in alcohols the order of reactivity is:`,
    options: [
      `1° > 2° > 3°`,
      `3° > 2° > 1°`,
      `2° > 3° > 1°`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 3° > 2° > 1°`
  },
  {
    question: `The decreasing order of boiling points of 1°,2°,3° alcohol is:`,
    options: [
      `1° > 2° > 3°`,
      `3° > 2° > 1°`,
      `2° > 1° > 3°`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1° > 2° > 3°`
  },
  {
    question: `An aldehyde on treatment with Zn/HCl yields:`,
    options: [
      `1° alcohol`,
      `2° alcohol`,
      `3° alcohol`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1° alcohol`
  },
  {
    question: `On oxidation, an alcohol gives an aldehyde having the same number of carbon atoms as that of alcohol. The alcohol is:`,
    options: [
      `1° alcohol`,
      `2° alcohol`,
      `3° alcohol`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 1° alcohol`
  },
  {
    question: `In the fermentation of sugar molasses, the percentage of ethanol formed is:`,
    options: [
      `10 %`,
      `40 %`,
      `95 %`,
      `70 %`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 10 %`
  },
  {
    question: `If the boiling point of ethanol (molecular weight = 46) is 78°C, what is the boiling point of diethyl ether? (molecular weight = 74)`,
    options: [
      `100°C`,
      `78°C`,
      `86°C`,
      `34°C`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 34°C`
  },
  {
    question: `2 mole of ethanol are burnt. The amount of CO₂ obtained will be:`,
    options: [
      `132 g`,
      `44 g`,
      `176 g`,
      `88 g`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 176 g`
  },
  {
    question: `The temperature of the slag zone in the metallurgy of iron using blast furnace is`,
    options: [
      `1200-1500°C`,
      `1500-1600°C`,
      `400-700°C`,
      `800-1000°C`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 800-1000°C`
  },
  {
    question: `The value of C-O-C angle in ether molecule is:`,
    options: [
      `180°`,
      `150°`,
      `90°`,
      `110°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 110°`
  },
  {
    question: `HOH₂C·CH₂OH on heating with periodic acid gives:`,
    options: [
      `2 C=O`,
      `2 CO₂`,
      `2 HCOOH`,
      `CH₂OH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 2 C=O`
  },
  {
    question: `The IUPAC name of the compound, CH3COCH - CHCOOH (with Br and Cl substituents) is:`,
    options: [
      `2-bromo-3-chloro-4-oxopentanoic acid`,
      `3-chloro-2-bromo-4-oxopentanoic acid`,
      `4-carboxybromo-3-chloro-2-butanone`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 2-bromo-3-chloro-4-oxopentanoic acid`
  },
  {
    question: `2-propanol + NaBr → CH₃ X. What is X?`,
    options: [
      `2-bromopropane`,
      `Propane`,
      `Propene`,
      `Propane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 2-bromopropane`
  },
  {
    question: `From amongst the following alcohols the one that would react fastest with conc. HCl and anhydrous ZnCl₂ is`,
    options: [
      `2-butanol`,
      `2-methyl propan-2-ol`,
      `2-methylpropanol`,
      `1 butanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 2-methyl propan-2-ol`
  },
  {
    question: `For the sequence of reaction, A → C₂H₅MgI → B → H₂O/H⁺ → tert-pentyl alcohol. The compound A in the sequence is`,
    options: [
      `2-butanone`,
      `Acetaldehyde`,
      `Acetone`,
      `Propanal`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Acetone`
  },
  {
    question: `Dehydrogenation of 2-butanol gives:`,
    options: [
      `2-butene`,
      `Butanone`,
      `Butyraldehyde`,
      `1-butene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Butanone`
  },
  {
    question: `On treating a mixture of two alkyl halides with sodium metal in dry ether, 2-methyl propane was obtained. The alkyl halides are`,
    options: [
      `2-chloropropane and chloromethane`,
      `2-chloropropane and chloroethane`,
      `Chloromethane and chloroethane`,
      `Chloromethane and 1-chloropropane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 2-chloropropane and chloromethane`
  },
  {
    question: `When glycerol is treated with excess of HI, it produces:`,
    options: [
      `2-iodopropane`,
      `Allyl iodide`,
      `Propene`,
      `Glycerol tri-iodide`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 2-iodopropane`
  },
  {
    question: `The dehydration of 2-methyl butanol with conc. H₂SO₄ gives`,
    options: [
      `2-methyl butane as major product`,
      `Pentene`,
      `2-methyl but-2-ene as major product`,
      `2-methyl pent-2-ene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-methyl but-2-ene as major product`
  },
  {
    question: `The IUPAC name of the compound, (CH3)2CHCH2CH2Br is:`,
    options: [
      `2-methyl-3-bromopropane`,
      `1-bromopentane`,
      `2-methyl-4-bromobutane`,
      `1-bromo-3-methylbutane`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 1-bromo-3-methylbutane`
  },
  {
    question: `Iodoform test is not given by`,
    options: [
      `2-pentanone`,
      `Ethanol`,
      `Ethanal`,
      `3-pentanone`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 3-pentanone`
  },
  {
    question: `Which of the following compound is oxidised to prepare methyl ethyl ketone?`,
    options: [
      `2-propanol`,
      `1-butanol`,
      `2-butanol`,
      `Tert-butyl alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-butanol`
  },
  {
    question: `Glycerol has:`,
    options: [
      `3 primary alcoholic groups`,
      `3 secondary alcoholic groups`,
      `1 primary alcoholic group and 2 secondary alcoholic groups`,
      `2 primary alcoholic groups and 1 secondary alcoholic group`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 2 primary alcoholic groups and 1 secondary alcoholic group`
  },
  {
    question: `The correct order of solubility of 1°,2° and 3° alcohol in water is:`,
    options: [
      `3° > 2° > 1°`,
      `1° > 2° > 3°`,
      `3° > 1° > 2°`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 1° > 2° > 3°`
  },
  {
    question: `21. When one mole of bleaching powder is completely decomposed in presence of \\(\\mathrm{CO_2}\\) then the mass of chlorine gas that is liberated will be:`,
    options: [
      `35.45 g`,
      `70.90 g`,
      `17.72 g`,
      `88.60 g`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 70.90 g`
  },
  {
    question: `Which represents calcination?`,
    options: [
      `2Ag + 2HCl + [O] → 2AgCl + H2O`,
      `2Zn + O2 → 2ZnO`,
      `2ZnS + 3O2 → 2ZnO + 2SO2`,
      `MgCO3 → MgO + CO2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: MgCO3 → MgO + CO2`
  },
  {
    question: `Hydroboration oxidation of 4-methyl octene would give`,
    options: [
      `4-methyl octanol`,
      `2-methyl decane`,
      `4-methyl heptanol`,
      `4-methyl-2-octanone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 4-methyl octanol`
  },
  {
    question: `Power alcohol is a mixture of petrol and alcohol in the ratio:`,
    options: [
      `4:1`,
      `1:4`,
      `2:1`,
      `1:2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 4:1`
  },
  {
    question: `Proof spirit contains about:`,
    options: [
      `48% alcohol by weight`,
      `10% alcohol by weight`,
      `5% alcohol by weight`,
      `90% alcohol by weight`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: 48% alcohol by weight`
  },
  {
    question: `226. Sodium carbonate contains:`,
    options: [
      `5 molecules of crystalline water`,
      `10 molecules of crystalline water`,
      `3 molecules of crystalline water`,
      `No molecule of crystalline water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 10 molecules of crystalline water`
  },
  {
    question: `In Goldschmidt aluminothermic process, thermite mixture contains:`,
    options: [
      `3 parts Fe2O3 and 2 parts Al`,
      `3 parts Al2O3 and 4 parts Al`,
      `1 part Fe2O3 and 3 parts Al`,
      `3 parts Fe2O3 and 1 part Al`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: 3 parts Fe2O3 and 1 part Al`
  },
  {
    question: `Rectified spirit contains:`,
    options: [
      `75.0% alcohol`,
      `85.5% alcohol`,
      `95.6% alcohol`,
      `100.0% alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 95.6% alcohol`
  },
  {
    question: `The final step for the extraction of copper from copper pyrite in Bessemer converter involves the reaction`,
    options: [
      `Cu2S + 2Cu2O → 6Cu + SO2`,
      `4Cu2O + FeS → 8Cu + FeSO4`,
      `2Cu2O + FeS → 4Cu + Fe + SO2`,
      `Cu2S + 2FeO → 2Cu + 2FeCO + SO2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu2S + 2Cu2O → 6Cu + SO2`
  },
  {
    question: `An organic compound dissolved in dry benzene evolved hydrogen on treatment with sodium. It is:`,
    options: [
      `A ketone`,
      `An aldehyde`,
      `A tertiary amine`,
      `An alcohol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: An alcohol`
  },
  {
    question: `The first oxidation product of primary alcohol is:`,
    options: [
      `A ketone`,
      `An ester`,
      `An aldehyde`,
      `A hydrocarbon`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: An aldehyde`
  },
  {
    question: `Which is known as blister copper?`,
    options: [
      `Pure copper`,
      `98% copper`,
      `Ore of copper`,
      `Alloy of copper`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 98% copper`
  },
  {
    question: `The cleavage of an aryl-alkyl ether with hydrogen halide will give:`,
    options: [
      `A molecule each of an alkyl halide and water`,
      `A molecule each of an aryl halide and water`,
      `A molecule each of an alkyl halide, aryl halide and water`,
      `A molecule each of phenol and an alkyl halide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: A molecule each of phenol and an alkyl halide`
  },
  {
    question: `Dehydrohalogenation in haloalkanes produces:`,
    options: [
      `A single bond`,
      `A double bond`,
      `A triple bond`,
      `Fragmentation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: A double bond`
  },
  {
    question: `The explosive nitroglycerine is:`,
    options: [
      `A soap`,
      `A salt`,
      `An ester`,
      `A complex compound`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: An ester`
  },
  {
    question: `Pig iron is manufactured by:`,
    options: [
      `An electric furnace`,
      `A blast furnace`,
      `An open hearth furnace`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: A blast furnace`
  },
  {
    question: `Decreasing order of boiling points of n-pentanol (A), n-pentane (B), 3-pentanol (C) and 2,2-dimethyl propanol (D) is:`,
    options: [
      `A,C,D,B`,
      `B,D,C,A`,
      `C,A,D,B`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: A,C,D,B`
  },
  {
    question: `Which statement is correct?`,
    options: [
      `All minerals are ores`,
      `A mineral cannot be an ore`,
      `An ore cannot be a mineral`,
      `All ores are minerals`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All ores are minerals`
  },
  {
    question: `Metals are good conductors of electricity because they contain`,
    options: [
      `Ionic bonds`,
      `A network structure`,
      `Very few valence electrons`,
      `Free electrons`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Free electrons`
  },
  {
    question: `When ethyl alcohol vapours mixed with air, are passed over heated platinized asbestos, the compound formed is:`,
    options: [
      `Acetaldehyde`,
      `Diethyl ether`,
      `Acetone`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Acetaldehyde`
  },
  {
    question: `An alloy is:`,
    options: [
      `Intermetallic compound`,
      `A solid substance containing two or more elements`,
      `A solid which contains one non-metal`,
      `A solid which contains more than one non-metal`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: A solid substance containing two or more elements`
  },
  {
    question: `Match the extraction process listed in column I with metals listed in column II. Column I (A) Self reduction (B) Carbon reduction (C) Complex formation and displacement by metal (D) Decomposition of iodide. Column II (P) Lead (Q) Silver (R) Copper (S) Boron`,
    options: [
      `A-P,R; B-R,Q; C-P; D-S,Q`,
      `A-P,R; B-P,R; C-Q; D-S`,
      `A-P,R; B-S; C-P; D-P,Q`,
      `A-P,Q; B-R,P; C-Q; D-S`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: A-P,R; B-P,R; C-Q; D-S`
  },
  {
    question: `Froth floatation process for the concentration of ores is a practical application of:`,
    options: [
      `Adsorption`,
      `Absorption`,
      `Coagulation`,
      `Sedimentation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Adsorption`
  },
  {
    question: `Which one of the following compound reacts with chlorobenzene to produce DDT?`,
    options: [
      `Acetaldehyde`,
      `Nitrobenzene`,
      `m-chloroacetaldehyde`,
      `Trichloroacetaldehyde`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Trichloroacetaldehyde`
  },
  {
    question: `Which of the following compounds is resistant to nucleophilic attack by hydroxyl ions?`,
    options: [
      `Acetamide`,
      `Methyl acetate`,
      `Diethyl ether`,
      `Acetonitrile`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Diethyl ether`
  },
  {
    question: `Diethyl ether on reaction with CO in specific conditions forms:`,
    options: [
      `Acetic acid`,
      `Carbon dioxide`,
      `Ethyl propanoate`,
      `Acetyl chloride`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ethyl propanoate`
  },
  {
    question: `An example of a compound with functional group —O— is:`,
    options: [
      `Acetic acid`,
      `Methyl alcohol`,
      `Diethyl ether`,
      `Acetone`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Diethyl ether`
  },
  {
    question: `The salt which is least likely to be found in minerals is:`,
    options: [
      `Sulphate`,
      `Acetate`,
      `Chloride`,
      `Sulphide`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Acetate`
  },
  {
    question: `Tertiary alcohol is obtained when Grignard reagent reacts with:`,
    options: [
      `Acetone`,
      `Butanone`,
      `Propanone`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `When isopropyl alcohol vapours are passed over heated copper it gives:`,
    options: [
      `Acetone`,
      `Ethyl alcohol`,
      `Methyl alcohol`,
      `Acetaldehyde`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Acetone`
  },
  {
    question: `Dunstan's test is used for identification of`,
    options: [
      `Acetone`,
      `Ethanol`,
      `Glycerol`,
      `Glycol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Glycerol`
  },
  {
    question: `Diacetone alcohol is obtained by the reaction of:`,
    options: [
      `Acetone and ethanol`,
      `Acetone and conc. H₂SO₄`,
      `Acetone and Ba(OH)₂`,
      `Acetone and Al(OH)₃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Acetone and Ba(OH)₂`
  },
  {
    question: `When iodoform is heated with silver powder it forms:`,
    options: [
      `Acetylene`,
      `Ethylene`,
      `Methane`,
      `Ethane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Acetylene`
  },
  {
    question: `CaO act as ... flux`,
    options: [
      `Neutral`,
      `Acidic`,
      `Basic`,
      `Both (a) and (b)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Basic`
  },
  {
    question: `The best reagent to convert pent-3-en-2-ol into pent-3-en-2-one is:`,
    options: [
      `Acidic KMnO₄`,
      `Alkaline K₂Cr₂O₇`,
      `Chromium anhydride in glacial acetic acid`,
      `Pyridinium chlorochromate`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Pyridinium chlorochromate`
  },
  {
    question: `Glycol on oxidation with...gives oxalic acid.`,
    options: [
      `Acidic KMnO₄`,
      `Acidic K₂Cr₂O₇`,
      `Nitric acid`,
      `HIO₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Nitric acid`
  },
  {
    question: `Granulated zinc is obtained by:`,
    options: [
      `Suddenly cooling molten zinc`,
      `Adding molten zinc to water`,
      `Heating zinc to 100–150°C`,
      `Dropping molten zinc drop by drop`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Adding molten zinc to water`
  },
  {
    question: `Ethylene glycol gives oxalic acid on oxidation with`,
    options: [
      `Acidified K₂Cr₂O₇`,
      `Acidified KMnO₄`,
      `Alkaline KMnO₄`,
      `Periodic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Alkaline KMnO₄`
  },
  {
    question: `Alloy is an example of:`,
    options: [
      `Ge`,
      `Aerosol`,
      `Solid sol`,
      `Emulsion`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Solid sol`
  },
  {
    question: `The metal extracted by leaching with cyanide is:`,
    options: [
      `Mg`,
      `Ag`,
      `Cu`,
      `Na`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ag`
  },
  {
    question: `Carbon monoxide reduction process is used for the extraction of:`,
    options: [
      `Cu`,
      `Ag`,
      `Na`,
      `K`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu`
  },
  {
    question: `Of the following, which cannot be obtained by electrolysis of the aqueous solution of their salts?`,
    options: [
      `Cu`,
      `Ag`,
      `Mg and Al`,
      `Cr`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg and Al`
  },
  {
    question: `Which metal can be purified by distillation?`,
    options: [
      `Cu`,
      `Ag`,
      `Fe`,
      `Hg`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Hg`
  },
  {
    question: `On heating glycerol with conc. H₂SO₄, a compound is obtained which has bad odour. The compound is:`,
    options: [
      `Acrolein`,
      `Formic acid`,
      `Allyl alcohol`,
      `Methyl isocyanate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Acrolein`
  },
  {
    question: `An essential constituent of amalgam is:`,
    options: [
      `Au`,
      `Ag`,
      `Al`,
      `Hg`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Hg`
  },
  {
    question: `An alkyl halide may be converted into an alcohol by:`,
    options: [
      `Addition`,
      `Substitution`,
      `Dehydrohalogenation`,
      `Elimination`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Substitution`
  },
  {
    question: `In the extraction of lead from its ore galena, an important element recovered is:`,
    options: [
      `Au`,
      `Ag`,
      `Cr`,
      `C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ag`
  },
  {
    question: `During the process of electrolytic refining of copper, some metals present as impurity settle as 'anode mud'. These are`,
    options: [
      `Fe and Ni`,
      `Ag and Au`,
      `Pb and Zn`,
      `Se and Ag`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ag and Au`
  },
  {
    question: `Cinnabar is:`,
    options: [
      `CuS`,
      `Ag2S`,
      `ZnS`,
      `HgS`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: HgS`
  },
  {
    question: `Which of the following does not contains silicon?`,
    options: [
      `Kaoline`,
      `Agate`,
      `Ruby`,
      `Quartz`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ruby`
  },
  {
    question: `Which of the following statements regarding the metallurgy of magnesium using electrolytic method is not correct?`,
    options: [
      `Electrolyte is magnesium chloride containing a little of NaCl and NaF`,
      `Air tight iron pot acts as a cathode`,
      `Electrolysis is done in the atmosphere of coal gas`,
      `Molten magnesium is heavier than the electrolyte`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Molten magnesium is heavier than the electrolyte`
  },
  {
    question: `Which of the following metals cannot be extracted by carbon reduction process?`,
    options: [
      `Zn`,
      `Al`,
      `Hg`,
      `Pb`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Al`
  },
  {
    question: `Hydrometallurgy is useful in the extraction of:`,
    options: [
      `Sn`,
      `Al`,
      `Hg`,
      `Ag`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ag`
  },
  {
    question: `Which metal can be found in native state?`,
    options: [
      `Na`,
      `Al`,
      `Ca`,
      `Fe`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Fe`
  },
  {
    question: `The pyrolysite ore contains:`,
    options: [
      `Fe`,
      `Al`,
      `Mn`,
      `Cu`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mn`
  },
  {
    question: `Kiesserite is an ore of:`,
    options: [
      `Cu`,
      `Al`,
      `Mg`,
      `Fe`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg`
  },
  {
    question: `Which metal is extracted by electrolytic reduction method?`,
    options: [
      `Cu`,
      `Al`,
      `Ag`,
      `Fe`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Al`
  },
  {
    question: `A common metal used as reductant for the extraction of metals from their oxides is:`,
    options: [
      `Cr`,
      `Al`,
      `Co`,
      `Fe`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Al`
  },
  {
    question: `Smelting is the reduction of oxide to metal by:`,
    options: [
      `C`,
      `Al`,
      `H`,
      `Electric current`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C`
  },
  {
    question: `In the thermite process the reducing agent is:`,
    options: [
      `C`,
      `Al`,
      `Na`,
      `Mg`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Al`
  },
  {
    question: `Which metal is used as a reducing agent in smelting?`,
    options: [
      `C`,
      `Al`,
      `Zn`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C`
  },
  {
    question: `Thermite is a mixture of`,
    options: [
      `Fe powder and Al2O3`,
      `Al powder and Fe2O3`,
      `Cu powder and Fe2O3`,
      `Zn powder and Cr2O3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Al powder and Fe2O3`
  },
  {
    question: `Thermite process is used in reduction of`,
    options: [
      `Cr2O3`,
      `Al2O3`,
      `pbo2`,
      `CuO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cr2O3`
  },
  {
    question: `The organic compound present in tincture of iodine is:`,
    options: [
      `Alcohol`,
      `CCl₄`,
      `Acetone`,
      `CS₂`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Alcohol`
  },
  {
    question: `In the following sequence the product (C) is: CH₃CHO → H₂ → (A) → Na → (B) → CH₃I → (C)`,
    options: [
      `Alcohol`,
      `Ether`,
      `Alkane`,
      `Ketone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ether`
  },
  {
    question: `Diaspore is:`,
    options: [
      `Al2O3·H2O`,
      `Al2O3·2H2O`,
      `Al2O3`,
      `Al2O3·3H2O`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Al2O3·H2O`
  },
  {
    question: `190. Potassium is kept in`,
    options: [
      `Alcohol`,
      `Kerosene`,
      `Liquid ammonia`,
      `Water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Kerosene`
  },
  {
    question: `A neutral compound gives colour with ceric ammonium nitrate. It suggests that the compound has:`,
    options: [
      `Alcohol gp.`,
      `Aldehyde gp.`,
      `Ether gp.`,
      `Ketone gp.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Alcohol gp.`
  },
  {
    question: `In esterification of an acid, the other reagent is:`,
    options: [
      `Aldehyde`,
      `Alcohol`,
      `Amine`,
      `Water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Alcohol`
  },
  {
    question: `Lucas test is associated with`,
    options: [
      `Aldehydes`,
      `Phenols`,
      `Carboxylic acids`,
      `Alcohols`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Alcohols`
  },
  {
    question: `In the Lucas test of alcohols, appearance of cloudiness is due to the formation of`,
    options: [
      `Aldehydes`,
      `Ketones`,
      `Acid chlorides`,
      `Alkyl chlorides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Alkyl chlorides`
  },
  {
    question: `Primary and secondary alcohols on action of reduced copper give:`,
    options: [
      `Aldehydes and ketones respectively`,
      `Ketones and aldehydes respectively`,
      `Only aldehydes`,
      `Only ketones`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Aldehydes and ketones respectively`
  },
  {
    question: `245. The most homogeneous family in periodic table is of:`,
    options: [
      `Alkali metals`,
      `Alkaline earth metals`,
      `Volatile metals`,
      `Coinage metals`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Alkali metals`
  },
  {
    question: `Intermolecular dehydration of alcohols gives:`,
    options: [
      `Alkenes`,
      `Ketones`,
      `Alkynes`,
      `Ethers`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ethers`
  },
  {
    question: `When phenolic ether is heated with HI, it yields`,
    options: [
      `Alkyl halide + aryl halide + water`,
      `Alkyl halide + phenol`,
      `Alcohol + aryl halide`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Alkyl halide + phenol`
  },
  {
    question: `Lucas reagent is used to distinguish among primary, secondary and tertiary:`,
    options: [
      `Alkyl halides`,
      `Alcohols`,
      `Aliphatic amines`,
      `Aromatic amines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Alcohols`
  },
  {
    question: `The cleavage of an aryl-alkyl ether with cold HI gives`,
    options: [
      `Alkyl iodide and water`,
      `Aryl iodide and water`,
      `Alkyl iodide, aryl iodide and water`,
      `Phenol and alkyl iodine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Phenol and alkyl iodine`
  },
  {
    question: `Which of the following statements is not correct?`,
    options: [
      `All alcohols are miscible with water`,
      `Only lower alcohols are miscible with water`,
      `Solubility of alcohols decreases with increase in molecular weight`,
      `Higher alcohols are insoluble in water`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: All alcohols are miscible with water`
  },
  {
    question: `Which one of the following is correct?`,
    options: [
      `All minerals are ores`,
      `All ores cannot be a mineral`,
      `A mineral cannot be an ore`,
      `All ores are minerals`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All ores are minerals`
  },
  {
    question: `The phenomenon in which white transparent crystal changes into white powder is known as:`,
    options: [
      `Sublimation`,
      `Allotropy`,
      `Efflorescence`,
      `deliquescence`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Efflorescence`
  },
  {
    question: `Silicon is the main constituent of:`,
    options: [
      `Rocks`,
      `Alloys`,
      `Animals`,
      `Plants`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Rocks`
  },
  {
    question: `Aluminium is extracted by the electrolysis of:`,
    options: [
      `Bauxite`,
      `Alumina`,
      `Molten cryolite`,
      `Alumina mixed with cryolite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Alumina mixed with cryolite`
  },
  {
    question: `Specific gravity of slag is:`,
    options: [
      `Always higher than molten metal`,
      `Always less than molten metal`,
      `Same as that of molten metal`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Always less than molten metal`
  },
  {
    question: `At 530K glycerol reacts with oxalic acid to produce`,
    options: [
      `Allyl alcohol`,
      `Formic acid`,
      `Glyceraldehyde`,
      `Formaldehyde`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Allyl alcohol`
  },
  {
    question: `Extraction of silver from its ore or involving NaCN, air and an active metal is known as:`,
    options: [
      `Pattinson's method`,
      `Amalgamation method`,
      `Mc Arthur-Forest method`,
      `Parke's method`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mc Arthur-Forest method`
  },
  {
    question: `140. A piece of magnesium ribbon was heated to redness in an atmosphere of \\(\\mathrm{N}_2\\) and then treated with \\(\\mathrm{H}_2\\mathrm{O}\\) the gas evolved is:`,
    options: [
      `Ammonia`,
      `Hydrogen`,
      `Nitrogen`,
      `Oxygen`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ammonia`
  },
  {
    question: `Oxygen containing organic compound upon oxidation forms a carboxylic acid as the only organic product with its molecular mass higher by 14 units. The organic compound is`,
    options: [
      `An aldehyde`,
      `A primary alcohol`,
      `A secondary alcohol`,
      `A ketone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: A primary alcohol`
  },
  {
    question: `When a metal is to be extracted from its ore, if the gangue associated with the ore is silica, then`,
    options: [
      `A basic flux is needed`,
      `An acidic flux is needed`,
      `Both basic and acidic flux are needed`,
      `Neither of them is needed`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: A basic flux is needed`
  },
  {
    question: `158. A metal carbonate is sparingly soluble in water and evolves \\(\\mathrm{CO}_{2}\\) on heating. The metal is:`,
    options: [
      `An alkali metal`,
      `A noble metal`,
      `An alkaline earth metal`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: An alkaline earth metal`
  },
  {
    question: `In Williamson's synthesis`,
    options: [
      `An alkyl halide is treated with sodium alkoxide`,
      `An alkyl halide is treated with sodium`,
      `An alcohol is heated with conc. H₂SO₄ at 130°C`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: An alkyl halide is treated with sodium alkoxide`
  },
  {
    question: `Lucas reagent is`,
    options: [
      `Anhydrous AlCl₃ with concentrated HCl`,
      `Anhydrous ZnCl₂ and concentrated H₂SO₄`,
      `Anhydrous ZnCl₂ and concentrated HCl`,
      `Anhydrous CaCl₂ and concentrated HCl`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Anhydrous ZnCl₂ and concentrated HCl`
  },
  {
    question: `In the commercial electrochemical process for aluminium extraction, electrolyte used is:`,
    options: [
      `Al(OH)3 in NaOH solution`,
      `An aqueous solution of Al2(SO4)3`,
      `A molten mixture of Al2O3 and Na3AlF6`,
      `A molten mixture of Al2O3 and Al(OH)3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: A molten mixture of Al2O3 and Na3AlF6`
  },
  {
    question: `Phenyl magnesium bromide reacts with methanol to give a mixture of:`,
    options: [
      `Anisole and Mg(OH)Br`,
      `Benzene and Mg(OMe)Br`,
      `Toluene and Mg(OH)Br`,
      `Phenol and Mg(Me)Br`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Benzene and Mg(OMe)Br`
  },
  {
    question: `143. Water glass is:`,
    options: [
      `Another name for sodium silicate`,
      `A special form of glass to store water only`,
      `Hydrated form of glass`,
      `Hydrated silica`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Another name for sodium silicate`
  },
  {
    question: `83. Milk of magnesia is used as`,
    options: [
      `Antichlor`,
      `Antacid`,
      `Antiseptic`,
      `Food preservative`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Antacid`
  },
  {
    question: `Which of the following reagents may be used to distinguish between phenol and benzoic acid?`,
    options: [
      `Aqueous NaOH`,
      `Tollen's reagent`,
      `Molisch reagent`,
      `Neutral FeCl₃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Neutral FeCl₃`
  },
  {
    question: `256. Halides of alkaline earth metals form hydrates such as \\(\\mathrm{MgCl}_2\\cdot 6\\mathrm{H}_2\\mathrm{O}\\) \\(\\mathrm{CaCl}_2\\cdot 6\\mathrm{H}_2\\mathrm{O}\\) \\(\\mathrm{BaCl}_2\\cdot 2\\mathrm{H}_2\\mathrm{O}\\) and \\(\\mathrm{SrCl}_2\\cdot 2\\mathrm{H}_2\\mathrm{O}\\) . This shows that halides of group 2 elements:`,
    options: [
      `Are hygroscopic in nature`,
      `Act as dehydrating agent`,
      `Can absorb moisture from air`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of the above`
  },
  {
    question: `Which is not a mineral of aluminium?`,
    options: [
      `Corundum`,
      `Anhydrite`,
      `Diaspore`,
      `Bauxite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Anhydrite`
  },
  {
    question: `Hexachloroethane is also called`,
    options: [
      `Artificial sweetner`,
      `Artificial camphor`,
      `Artificial polymer`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Artificial camphor`
  },
  {
    question: `58. One of the important use of quicklime is:`,
    options: [
      `As a purgative`,
      `In bleaching silk`,
      `In drying gases and alcohol`,
      `In dyeing cotton`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: In drying gases and alcohol`
  },
  {
    question: `220. Sodium thiosulphate is used in photography`,
    options: [
      `As AgBr grain is reduced to non-metallic silver`,
      `To convert metallic silver into silver salt`,
      `To remove reduced silver`,
      `To remove undecomposed AgBr in the form of \\(\\mathrm{Na_3[Ag(S_2O_3)_2]}\\) (a complex salt)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: To remove undecomposed AgBr in the form of \\(\\mathrm{Na_3[Ag(S_2O_3)_2]}\\) (a complex salt)`
  },
  {
    question: `Methyl bromide is not used:`,
    options: [
      `As an insecticide`,
      `As disinfectant`,
      `For dyeing clothes`,
      `As disinfectant for young fruit trees`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: For dyeing clothes`
  },
  {
    question: `Alkyd resins, made of glycerol are used:`,
    options: [
      `As substitute for white chalk`,
      `Instead of alkanes`,
      `For paints and coatings`,
      `For making alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: For paints and coatings`
  },
  {
    question: `The phenomenon of removing layers of basic oxides from metals before electroplating is called:`,
    options: [
      `Galvanising`,
      `Anodising`,
      `Pickling`,
      `Poling`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pickling`
  },
  {
    question: `The electrolytic method of reduction is employed for the preparation of metals that`,
    options: [
      `Are strongly electropositive`,
      `Are weakly electropositive`,
      `Are moderately electropositive`,
      `From oxides`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Are strongly electropositive`
  },
  {
    question: `The incorrect statement is:`,
    options: [
      `Calamine and siderite are carbonates`,
      `Argentite and cuprites are oxides`,
      `Zinc blende and iron pyrites are sulphides`,
      `Malachite and azurite are ores of Cu`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Argentite and cuprites are oxides`
  },
  {
    question: `Which of the following is a metal?`,
    options: [
      `P`,
      `As`,
      `Bi`,
      `Sb`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Bi`
  },
  {
    question: `Which metal occurs in free state?`,
    options: [
      `Ag`,
      `Au`,
      `Pt`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Leaching process is used to get:`,
    options: [
      `Ag`,
      `Au`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Gold when dissolved in aqua-regia gives:`,
    options: [
      `Auric chloride`,
      `Aurous chloride`,
      `Chloroauric acid`,
      `Tempering`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Chloroauric acid`
  },
  {
    question: `12. Celestine is an ore of:`,
    options: [
      `Ba`,
      `Ca`,
      `Sr`,
      `Mg`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sr`
  },
  {
    question: `105. Lithopone is`,
    options: [
      `BaO + ZnSO4`,
      `BaS + ZnSO4`,
      `ZnS + BaSO4`,
      `ZnO + BaSO4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: ZnS + BaSO4`
  },
  {
    question: `68. The compound which is not soluble in dil. HCl is:`,
    options: [
      `BaSO4`,
      `MnS`,
      `ZnS`,
      `BaCO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: BaSO4`
  },
  {
    question: `Blanc five is:`,
    options: [
      `BaSO4`,
      `BaCl2`,
      `BaCO3`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: BaSO4`
  },
  {
    question: `Which process is not used in purification of bauxite?`,
    options: [
      `Hall's method`,
      `Baeyer's method`,
      `Serpek's method`,
      `Frankland's method`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Frankland's method`
  },
  {
    question: `Which process is used for the purification of Al metal?`,
    options: [
      `Hoop's process`,
      `Baeyer's process`,
      `Serpek's process`,
      `Hall's process`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Hoop's process`
  },
  {
    question: `2. A metal \\(M\\) readily forms its sulphate \\(\\mathrm{MSO}_4\\) which is water soluble. It forms its oxide \\(\\mathrm{MO}\\) which becomes inert on heating. It forms its insoluble hydroxide \\(\\mathrm{M(OH)}_2\\) which is soluble in NaOH solution. Then, \\(M\\) is`,
    options: [
      `Be`,
      `Ba`,
      `Ca`,
      `Mg`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Be`
  },
  {
    question: `55. Melting point is highest for:`,
    options: [
      `Be`,
      `Mg`,
      `Sr`,
      `Ca`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Be`
  },
  {
    question: `214. Which alkaline earth metal forms peroxide on burning in air?`,
    options: [
      `Be`,
      `Ca`,
      `Sr`,
      `Ba`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ba`
  },
  {
    question: `218. A metal \\(M\\) forms water soluble \\(MSO_4\\) and inert \\(MO.MO\\) in aqueous solution forms insoluble \\(M(OH)_2\\) soluble in NaOH. Metal \\(M\\) is`,
    options: [
      `Be`,
      `Mg`,
      `Ca`,
      `Si`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Be`
  },
  {
    question: `163. Select the incorrect statement`,
    options: [
      `Be can form complexes due to its very small size`,
      `Mg cannot form complexes`,
      `Mg burns in air releasing dazzling light rich in UV rays`,
      `\\(\\mathrm{CaCl}_{2}\\cdot 6\\mathrm{H}_{2}\\mathrm{O}\\) when mixed with ice gives freezing mixture`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Mg cannot form complexes`
  },
  {
    question: `88. Which of the following hydroxides is amphoteric in nature?`,
    options: [
      `Be(OH)2`,
      `Mg(OH)2`,
      `Ca(OH)2`,
      `Ba(OH)2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Be(OH)2`
  },
  {
    question: `81. Beryllium shows diagonal relationship with aluminium. Which of the following similarity is incorrect?`,
    options: [
      `Be2C like AlC3 yields methane on hydrolysis`,
      `Be like Al is rendered passive by HNO3`,
      `Be(OH)2 like Al(OH)3 is basic`,
      `Be forms beryllates and Al forms aluminates`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Be(OH)2 like Al(OH)3 is basic`
  },
  {
    question: `Lapis-Lazuli' is a blue coloured precious stone. It is mineral of the class`,
    options: [
      `Sodium alumino silicate`,
      `Basic copper carbonate`,
      `Zinc cobalt`,
      `Prussian blue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Sodium alumino silicate`
  },
  {
    question: `Primary, secondary and tertiary alcohols can be distinguished by performing`,
    options: [
      `Beilstein's test`,
      `Victor Meyer's test`,
      `Fehling's solution test`,
      `Hofmann's test`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Victor Meyer's test`
  },
  {
    question: `Flux is used to remove`,
    options: [
      `Acidic impurities`,
      `Basic impurities`,
      `All impurities from ores`,
      `From ores`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: From ores`
  },
  {
    question: `An example of an oxide is`,
    options: [
      `Zinc blende`,
      `Bauxite`,
      `Feldspar`,
      `Malachite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Bauxite`
  },
  {
    question: `An ore of potassium is`,
    options: [
      `Cryolite`,
      `Bauxite`,
      `Carnallite`,
      `Dolomite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Carnallite`
  },
  {
    question: `Barytes, an ore is:`,
    options: [
      `BeSO4`,
      `BeCl2`,
      `BaSO4`,
      `BaCl2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: BaSO4`
  },
  {
    question: `199. Sodium metal cannot be stored under:`,
    options: [
      `Benzene`,
      `Kerosene`,
      `Alcohol`,
      `Toluene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Alcohol`
  },
  {
    question: `The major product obtained on interaction of phenol with sodium hydroxide and carbon dioxide is`,
    options: [
      `Benzoic acid`,
      `Salicylaldehyde`,
      `Salicylic acid`,
      `Phthalic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Salicylic acid`
  },
  {
    question: `94. Which is not true in respect of beryllium chemistry?`,
    options: [
      `Beryllium is amphoteric`,
      `It forms unusual carbide Be2C`,
      `Be(OH)2 is basic`,
      `Beryllium halides are electron deficient`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Be(OH)2 is basic`
  },
  {
    question: `56. On dissolving moderate amount of sodium metal in liquid \\(\\mathrm{NH}_3\\) at low temperature, which one of the following does not occur?`,
    options: [
      `Blue coloured solution is obtained`,
      `\\(\\mathrm{Na}^+\\) ions are formed in solution`,
      `Liquid ammonia becomes good conductor of electricity`,
      `Liquid \\(\\mathrm{NH}_3\\) remains diamagnetic`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Liquid \\(\\mathrm{NH}_3\\) remains diamagnetic`
  },
  {
    question: `230. The substance used as pigment in paint is`,
    options: [
      `Borax`,
      `Alumina`,
      `Lithopone`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Lithopone`
  },
  {
    question: `Beryl is an important ore of:`,
    options: [
      `Boron`,
      `Beryllium`,
      `Lead`,
      `Lithium`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Beryllium`
  },
  {
    question: `Miscipickel is the ore of:`,
    options: [
      `Sb`,
      `Bi`,
      `P`,
      `As`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: As`
  },
  {
    question: `C₂H₅OH and C₆H₅OH can be distinguished by`,
    options: [
      `Br₂ + H₂O`,
      `FeCl₃`,
      `I₂ + NaOH`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Both (b) and (c)`
  },
  {
    question: `Phenol → X → forms a tribromo derivative. X is`,
    options: [
      `Bromine in benzene`,
      `Bromine in water`,
      `Potassium bromide solution`,
      `Bromine in carbon tetrachloride at 0°C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Bromine in water`
  },
  {
    question: `Cyclohexanol on reaction with PBr₃ in presence of pyridine gives`,
    options: [
      `Bromocyclohexane`,
      `Bromocyclohexane`,
      `1-bromocyclohexanol`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Bromocyclohexane`
  },
  {
    question: `Alcohols may behave as:`,
    options: [
      `Bronsted acid`,
      `Lewis base`,
      `Neutral`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `1-chlorobutane on reaction with alcoholic potash gives`,
    options: [
      `but-1-ene`,
      `butan-1-ol`,
      `but-2-ene`,
      `butan-2-ol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: but-1-ene`
  },
  {
    question: `The compound which gives turbidity immediately with Lucas reagent at room temperature is`,
    options: [
      `Butan-1-ol`,
      `Butan-2-ol`,
      `2-methyl propan-2-ol`,
      `2-methyl propan-1-ol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2-methyl propan-2-ol`
  },
  {
    question: `Reaction of tertiary butyl alcohol with hot Cu at 350°C produces`,
    options: [
      `Butanol`,
      `Butanal`,
      `2-butene`,
      `Methylpropene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Methylpropene`
  },
  {
    question: `An alcohol produced during the manufacture of soap is:`,
    options: [
      `Butanol`,
      `Glycerol`,
      `Ethanol`,
      `Ethylene glycol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Glycerol`
  },
  {
    question: `Fluorobenzene (C6H5F) can be synthesised in the laboratory`,
    options: [
      `By heating phenol with HF and KF`,
      `From aniline by diazotisation followed by heating the diazonium salt with HBF4`,
      `By direct fluorination of benzene with F2 gas`,
      `By reacting bromobenzene with NaF solution`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: From aniline by diazotisation followed by heating the diazonium salt with HBF4`
  },
  {
    question: `Methanol and ethanol can be distinguished by the following:`,
    options: [
      `By reaction with metallic sodium`,
      `By reaction with caustic soda`,
      `By heating with iodine and washing soda`,
      `By heating with zinc and inorganic mineral acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: By heating with iodine and washing soda`
  },
  {
    question: `80. The non-metal which is not affected by NaOH:`,
    options: [
      `C`,
      `Si`,
      `P`,
      `S`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C`
  },
  {
    question: `Chile salt petre is an ore of`,
    options: [
      `Magnesium`,
      `Bromine`,
      `Sodium`,
      `Iodine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium`
  },
  {
    question: `Strong reducing agent converts CHCl3 into:`,
    options: [
      `C2H2`,
      `C2H6`,
      `C2H4`,
      `CH4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH4`
  },
  {
    question: `The reaction of ethanol with H₂SO₄ does not give:`,
    options: [
      `C₂H₄`,
      `C₂H₅OC₂H₅`,
      `C₂H₂`,
      `C₂H₅HSO₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₂`
  },
  {
    question: `An organic compound A containing C, H and O has a pleasant odour with boiling point of 78°C. On boiling A with concentrated H₂SO₄, a colourless gas is produced which decolourises bromine water and alkaline KMnO₄. The organic liquid A is`,
    options: [
      `C₂H₅Cl`,
      `C₂H₅COOCH₃`,
      `C₂H₅OH`,
      `C₂H₆`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `Ethyl chloride reacts with sodium ethoxide to form a compound A. Which of the following reactions also yields A?`,
    options: [
      `C₂H₅Cl, KOH (alc.), Δ`,
      `2C₂H₅OH, conc. H₂SO₄, 140°C`,
      `C₂H₅Cl, Mg(dry ether)`,
      `C₂H₂, dil H₂SO₄, HgSO₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 2C₂H₅OH, conc. H₂SO₄, 140°C`
  },
  {
    question: `Diethyl ether may be regarded as anhydride of:`,
    options: [
      `C₂H₅COOH`,
      `C₂H₅OH`,
      `C₂H₅CHO`,
      `C₂H₅COOC₂H₅`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `The product obtained by heating diethyl ether with HI is`,
    options: [
      `C₂H₅I`,
      `C₂H₅OH`,
      `C₂H₅OH + C₂H₅I`,
      `C₂H₅-C₂H₅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OH + C₂H₅I`
  },
  {
    question: `Ethyl chloride on heating with AgCN forms a compound X. The functional isomer of X is`,
    options: [
      `C2H5NC`,
      `C2H5NH2`,
      `C2H5CN`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C2H5CN`
  },
  {
    question: `An organic compound X' on treatment with pyridinium chloro chromate in dichloromethane gives compound Y'. Compound Y reacts with I₂ and alkali to form triiodomethane. The compound X' is`,
    options: [
      `C₂H₅OH`,
      `CH₃CHO`,
      `CH₃COCH₃`,
      `CH₃COOH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `Which of the following is used as antiseptic?`,
    options: [
      `C₂H₅OH`,
      `Iodoform`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Which of the following is least soluble in water?`,
    options: [
      `C₂H₅OH`,
      `C₃H₇OH`,
      `C₄H₉OH`,
      `C₅H₁₁OH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C₅H₁₁OH`
  },
  {
    question: `Which of the following compounds when heated with CO at 150°C and 500 atm pressure in presence of BF₃ forms ethyl propionate?`,
    options: [
      `C₂H₅OH`,
      `CH₃OCH₃`,
      `C₂H₅OC₂H₅`,
      `CH₃OC₂H₅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OC₂H₅`
  },
  {
    question: `Complete combustion of ether gives:`,
    options: [
      `C₂H₅OH`,
      `CO₂ and H₂O`,
      `C₂H₄`,
      `C₂H₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CO₂ and H₂O`
  },
  {
    question: `An organic compound A reacts with PCl₅ to give B. The compound B with sodium metal gives n-butane. Thus, A and B are:`,
    options: [
      `C₂H₅OH and C₂H₅Cl`,
      `C₂H₅Cl and C₂H₅ONa`,
      `C₃H₇OH and CH₃CH₂CH₂OCl`,
      `C₄H₉OH and C₄H₉OCl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C₂H₅OH and C₂H₅Cl`
  },
  {
    question: `C₂H₅OH cannot be dried by anhydrous CaCl₂, because:`,
    options: [
      `C₂H₅OH is soluble in water`,
      `Explosion takes place`,
      `C₂H₅OH reacts with CaCl₂`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OH reacts with CaCl₂`
  },
  {
    question: `Ethyl alcohol reacts with HCl but not with HCN because:`,
    options: [
      `C₂H₅OH is weak base and HCN is weak base`,
      `C₂H₅OH is strong acid and HCN is weak acid`,
      `HCl is strong acid and C₂H₅OH is weak base`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: HCl is strong acid and C₂H₅OH is weak base`
  },
  {
    question: `When compound X is oxidised by acidified potassium dichromate, compound Y is formed. Compound Y on reduction with LiAlH₄ gives X. X and Y respectively are`,
    options: [
      `C₂H₅OH, CH₃COOH`,
      `CH₃COCH₃, CH₃COOH`,
      `C₂H₅OH, CH₃COCH₃`,
      `CH₃CHO, CH₃COCH₃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C₂H₅OH, CH₃COOH`
  },
  {
    question: `Action of nitrous acid on ethyl amine gives:`,
    options: [
      `C₂H₆`,
      `C₂H₅OH`,
      `NH₃`,
      `Nitromethane`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `In the reaction, C₂H₅OH → Cu, 300°C (vapour). The molecular formula of X is`,
    options: [
      `C₄H₆O`,
      `C₄H₁₀O`,
      `C₂H₄O`,
      `C₂H₆`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₄O`
  },
  {
    question: `Which compound is capable of strong hydrogen bonding?`,
    options: [
      `C₄H₉OH`,
      `C₃H₇OH`,
      `C₂H₅OH`,
      `C₅H₁₁OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `On treatment with a concentrated solution of zinc chloride in concentrated HCl at room temperature, an alcohol immediately gives an oily product. The alcohol can be`,
    options: [
      `C₆H₅CH₂OH`,
      `CH₃CHOHCH₃`,
      `(CH₃)₃COH`,
      `Any of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (CH₃)₃COH`
  },
  {
    question: `Most readily hydrolysed halides is:`,
    options: [
      `C6H5Cl`,
      `(C6H5)2CHCl`,
      `C6H5CH2Cl`,
      `(C6H5)3CCl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (C6H5)3CCl`
  },
  {
    question: `The products formed in the following reaction, C₆H₅O-O-CH₃ + HI → Heat → are`,
    options: [
      `C₆H₅OH and CH₃I`,
      `C₆H₅I and CH₃OH`,
      `C₆H₅CH₃ and HOI`,
      `C₆H₆ and CH₃OH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: C₆H₅OH and CH₃I`
  },
  {
    question: `In which of the following reactions the product is an ether?`,
    options: [
      `C₆H₆ + CH₃COCl / anhydrous AlCl₃`,
      `C₂H₅Cl + aq.KOH`,
      `C₆H₆ + C₆H₅COCl / anhydrous AlCl₃`,
      `C₂H₅Cl + C₂H₅ONa`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C₂H₅Cl + C₂H₅ONa`
  },
  {
    question: `96. On strong heating CaO and C, the products formed are:`,
    options: [
      `Ca and CO`,
      `CaC2 and CO`,
      `Ca(OH)2`,
      `CaC2 and CO2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CaC2 and CO`
  },
  {
    question: `Methanol cannot be dried with anhydrous CaCl₂ because`,
    options: [
      `CaCl₂ dissolves in it`,
      `It is not good dehydrating agent`,
      `It forms a solid CaCl₂.4CH₃OH`,
      `It reacts with CH₃OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: It forms a solid CaCl₂.4CH₃OH`
  },
  {
    question: `183. Slaked lime is:`,
    options: [
      `CaCO3`,
      `CaO`,
      `Ca(OH)2`,
      `Ca(C2O4)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ca(OH)2`
  },
  {
    question: `The most abundant metal in the earth crust is:`,
    options: [
      `Na`,
      `Ca`,
      `Al`,
      `Fe`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Al`
  },
  {
    question: `The metal that is extracted from sea water is:`,
    options: [
      `Na`,
      `Ca`,
      `Mg`,
      `Sn`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg`
  },
  {
    question: `Colemanite is`,
    options: [
      `Ca[B3O4(OH)2]·2H2O`,
      `Ca2B6O11·5H2O`,
      `Ca(OH)2`,
      `Na2B4O7·2H2O`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ca2B6O11·5H2O`
  },
  {
    question: `Thomas slag is`,
    options: [
      `Ca3(PO4)2.2H2O`,
      `Ca3(PO4)2.CaSiO3`,
      `MgSiO3`,
      `CaSiO3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ca3(PO4)2.CaSiO3`
  },
  {
    question: `Corundum is`,
    options: [
      `Cu2Cl2`,
      `CaCl2`,
      `SrO2`,
      `Al2O3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Al2O3`
  },
  {
    question: `One of the fertilizer is:`,
    options: [
      `CaC2`,
      `CaCO3`,
      `CaCN2`,
      `CaSO4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CaCN2`
  },
  {
    question: `130. At high temperature nitrogen combines with \\(\\mathrm{CaC_2}\\) to give:`,
    options: [
      `Calcium cyanide`,
      `Calcium cyanamide`,
      `Calcium carbonate`,
      `Calcium nitride`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Calcium cyanamide`
  },
  {
    question: `Which of the following is not an ore?`,
    options: [
      `Malachite`,
      `Calamine`,
      `Satellite`,
      `Cerussite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Satellite`
  },
  {
    question: `Heating of ores with flux to remove non-fusible mass is called:`,
    options: [
      `Smelting`,
      `Calcination`,
      `Roasting`,
      `Cupeation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Smelting`
  },
  {
    question: `225. The compound insoluble in acetic acid is:`,
    options: [
      `Calcium oxide`,
      `Calcium carbonate`,
      `Calcium hydroxide`,
      `Calcium oxalate`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Calcium oxalate`
  },
  {
    question: `The process in which ore is heated in air below its melting point is known as:`,
    options: [
      `Roasting`,
      `Calcination`,
      `Reduction`,
      `Distillation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Heating of carbonate ores to remove carbon is called as:`,
    options: [
      `Roasting`,
      `Calcination`,
      `Smelting`,
      `Fluxing`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Calcination`
  },
  {
    question: `Thomas slag is:`,
    options: [
      `Calcium silicate`,
      `Calcium phosphate`,
      `Tricalcium phosphate and calcium silicate`,
      `Calcium ammonium phosphate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Tricalcium phosphate and calcium silicate`
  },
  {
    question: `282. Calcium cyanide reacts with steam to form ammonia and:`,
    options: [
      `CaO`,
      `Ca(HCO3)2`,
      `CaCO3`,
      `Ca(OH)2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CaCO3`
  },
  {
    question: `Refractory materials are used for the construction of furnaces because they:`,
    options: [
      `Are light in weight`,
      `Can stand with high temperature`,
      `Are leak proof`,
      `Do not require to be replaced`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Can stand with high temperature`
  },
  {
    question: `Phenol on reaction with CHCl₃ and NaOH give benzaldehyde. Intermediate of this reaction is`,
    options: [
      `Carbocation`,
      `Carbanion`,
      `Radical`,
      `Carbene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Carbene`
  },
  {
    question: `The cheap and high melting point compound used in furnace lining is:`,
    options: [
      `PbO`,
      `CaO`,
      `HgO`,
      `ZnO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CaO`
  },
  {
    question: `Which is not a basic flux?`,
    options: [
      `CaCO3`,
      `CaO`,
      `SiO2`,
      `MgO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: SiO2`
  },
  {
    question: `Tin is extracted from tin stone by heating it in a furnace with:`,
    options: [
      `CaCO3`,
      `CaO`,
      `Steam`,
      `Coal`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Coal`
  },
  {
    question: `In blast furnace, iron oxide is reduced by`,
    options: [
      `Silica`,
      `Carbon`,
      `Limestone`,
      `CO`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CO`
  },
  {
    question: `92. Which category of salts of alkaline earth metals is not found in solid state, but found in solution state?`,
    options: [
      `Carbonates`,
      `Bicarbonates`,
      `Hydroxides`,
      `Sulphates`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Bicarbonates`
  },
  {
    question: `In the extraction of copper from its sulphide ore, the metal is finally obtained by the reduction of cuprous oxide with:`,
    options: [
      `Iron sulphide (FeS)`,
      `Carbon monoxide (CO)`,
      `Copper(I) sulphide (Cu2S)`,
      `Sulphur dioxide (SO2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Copper(I) sulphide (Cu2S)`
  },
  {
    question: `To obtain chromium from chromic oxide (Cr2O3), the method used is:`,
    options: [
      `Carbon reduction`,
      `Carbon monoxide reduction`,
      `Alumino thermic process`,
      `Electrolytic reduction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Alumino thermic process`
  },
  {
    question: `Salicylaldehyde is obtained when phenol is heated with CHCl₃ and aqueous NaOH. This reaction is known by which name?`,
    options: [
      `Carbyl amine reaction`,
      `Hofmann's reaction`,
      `Reimer-Tiemann reaction`,
      `Kolbe-Schmidt reaction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Reimer-Tiemann reaction`
  },
  {
    question: `Gold is extracted using:`,
    options: [
      `Amalgamation process`,
      `Carbon reduction process`,
      `Oxidation process`,
      `Electrolytic process`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Amalgamation process`
  },
  {
    question: `176. Which of the following is not an ore of magnesium?`,
    options: [
      `Carnallite`,
      `Dolomite`,
      `Calamine`,
      `Sea water`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Calamine`
  },
  {
    question: `265. An ore of potassium is:`,
    options: [
      `Carnallite`,
      `Cryolite`,
      `Bauxite`,
      `Dolomite`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Carnallite`
  },
  {
    question: `178. Iceland spar is:`,
    options: [
      `CaSiO4`,
      `CaCO3`,
      `CaF2`,
      `NaAIF6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CaCO3`
  },
  {
    question: `101. Gypsum, CaSO4. 2H2O on heating to about 120℃ forms a compound which has the chemical composition represented by`,
    options: [
      `CaSO4. H2O`,
      `2CaSO4. 3H2O`,
      `2CaSO4. H2O`,
      `CaSO4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2CaSO4. H2O`
  },
  {
    question: `Passivity of iron is due to the formation of thin film of...on its surface.`,
    options: [
      `Oxide`,
      `Carbonate`,
      `Nitride`,
      `Hydroxide`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Oxide`
  },
  {
    question: `65. Manufacture of NaOH is done by:`,
    options: [
      `Castner- Kellner process`,
      `Solvay process`,
      `Brine process`,
      `Mond's process`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Castner- Kellner process`
  },
  {
    question: `Sodium phenoxide reacts with CO₂ at 400K and 4.7 atm pressure to give`,
    options: [
      `Catechol`,
      `Salicylaldehyde`,
      `Sodium salicylate`,
      `Benzoic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium salicylate`
  },
  {
    question: `261. If NaOH is added to an aqueous solution of \\(\\mathrm{Zn}^{2 + }\\) ions, a white precipitate appears and on adding excess NaOH, the precipitate dissolves. In this solution zinc exists in the:`,
    options: [
      `Cationic part`,
      `Anionic part`,
      `Both in cationic and anionic parts`,
      `There is no zinc left in the solution`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Anionic part`
  },
  {
    question: `122. Causticisation process is used for the preparation of:`,
    options: [
      `Caustic soda`,
      `Caustic potash`,
      `Baryta`,
      `Slaked lime`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Caustic soda`
  },
  {
    question: `Which of the following is stable compound?`,
    options: [
      `CCl₃CH(OH)₂`,
      `CH₂=CHOH`,
      `CH₃-CH(OH)₂`,
      `HC(OH)₃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CCl₃CH(OH)₂`
  },
  {
    question: `CHCl3 reacts with conc. HNO3 to give`,
    options: [
      `CCl3NO2`,
      `CH3NO2`,
      `CH3CN`,
      `CH3CH2NO2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CCl3NO2`
  },
  {
    question: `Chlorination of CS2 gives:`,
    options: [
      `CCl4`,
      `CS2Cl2`,
      `CH4`,
      `CHCl3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CCl4`
  },
  {
    question: `Which is used as a general anaesthetic in place of diethyl ether?`,
    options: [
      `CF3-CHClBr`,
      `CF3-CHCl2`,
      `CF3-CHBr2`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CF3-CHClBr`
  },
  {
    question: `Which ore can be best concentrated by froth floatation process?`,
    options: [
      `Malachite`,
      `Cassiterite`,
      `Galena`,
      `Magnetite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Galena`
  },
  {
    question: `Which alcohol cannot be oxidized by MnO₂?`,
    options: [
      `CH₂=CH-CH₂CH₂OH`,
      `CH₃-CH=CH-CH₂OH`,
      `ΦCH₂OH`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₂=CH-CH₂CH₂OH`
  },
  {
    question: `The formula for vinyl alcohol is:`,
    options: [
      `CH₂=CHCH₂OH`,
      `C₆H₅CHOHCH₃`,
      `CH₂=COHCH₃`,
      `CH₂=CHOH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₂=CHOH`
  },
  {
    question: `Which one of the following ores is best concentrated by forth-flotation method?`,
    options: [
      `Magnetite`,
      `Cassiterite`,
      `Galena`,
      `Malachite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Galena`
  },
  {
    question: `Which is not an ore of lead?`,
    options: [
      `Galena`,
      `Cassiterite`,
      `Anglesite`,
      `Cerussite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cassiterite`
  },
  {
    question: `Glyoxal is:`,
    options: [
      `CH₂OH - CHO`,
      `CH₂ = OH`,
      `CHO - CHO`,
      `CH₂ = CHCHO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CHO - CHO`
  },
  {
    question: `The formula for allyl alcohol is:`,
    options: [
      `CH₃-CH=CHCl`,
      `CH₂=CHCH₂OH`,
      `CH₂ClCH₂CH₃`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₂=CHCH₂OH`
  },
  {
    question: `CH₃-CH₂-O-CH₂-CH₃ reacts with hot and excess HI, then formed product is`,
    options: [
      `CH₃-CH₂-I and CH₃CH₂OH`,
      `CH₃-CH₂-OH`,
      `CH₃-CH₂-I`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃-CH₂-I`
  },
  {
    question: `C-O-C angle would be maximum in`,
    options: [
      `CH₃-O-CH₃`,
      `CH₃-O-C₂H₅`,
      `C₂H₅-O-C₂H₅`,
      `(CH₃)₂CH-O-CH(CH₃)₂`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (CH₃)₂CH-O-CH(CH₃)₂`
  },
  {
    question: `1-phenyl ethanol can be prepared from benzaldehyde by the action of:`,
    options: [
      `CH₃Br`,
      `CH₃Br and AlBr₃`,
      `CH₃I, Mg and HOH`,
      `C₂H₅I and Mg`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃I, Mg and HOH`
  },
  {
    question: `Which of the following reactions can be used for the preparation of tert-butylmethyl ether?`,
    options: [
      `CH₃Br + (CH₃)₃CO⁻Na⁺ →`,
      `(CH₃)₃CCl + CH₃O⁻Na⁺ →`,
      `(CH₃)₃OH + CH₃Cl →`,
      `(CH₃)₃CCl + CH₃OH →`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₃Br + (CH₃)₃CO⁻Na⁺ →`
  },
  {
    question: `The order of polarity of CH3I, CH3Br and CH3Cl molecules follows the order:`,
    options: [
      `CH3Br > CH3Cl > CH3I`,
      `CH3I > CH3Br > CH3Cl`,
      `CH3Cl > CH3Br > CH3I`,
      `CH3Cl > CH3I > CH3Br`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH3Cl > CH3Br > CH3I`
  },
  {
    question: `Among the following the one that gives positive iodoform test upon reaction with I2 and NaOH is`,
    options: [
      `CH3CH2CH(OH)CH2CH3`,
      `C6H5 CH2 CH2OH`,
      `H3C −CH −CH2OH | CH3`,
      `PhCHOHCH3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: PhCHOHCH3`
  },
  {
    question: `Among the alkenes which one produces tertiary butyl alcohol on acid hydration?`,
    options: [
      `CH₃CH₂CH=CH₂`,
      `CH₃CH=CH-CH₃`,
      `(CH₃)₂C=CH₂`,
      `CH₃-CH=CH₂`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (CH₃)₂C=CH₂`
  },
  {
    question: `An alcohol on oxidation is found to give CH₃COOH and CH₃CH₂COOH. The alcohol is:`,
    options: [
      `CH₃CH₂CH₂OH`,
      `(CH₃)₂C(OH)CH₂CH₃`,
      `CH₃(CH₂)₂CHOH`,
      `CH₃CH(OH)CH₂CH₂CH₃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₃CH(OH)CH₂CH₂CH₃`
  },
  {
    question: `An organic compound C₃H₆O neither gives precipitate with semicarbazide nor reacts with sodium. It could be`,
    options: [
      `CH₃CH₂CHO`,
      `CH₃COCH₃`,
      `CH₂=CHCH₂OH`,
      `CH₂=CHOCH₃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₂=CHOCH₃`
  },
  {
    question: `Which will not form yellow precipitate on heating with an alkaline solution of iodine?`,
    options: [
      `CH₃CH₂CHOHCH₃`,
      `CH₃CH₂CHOHCH₃`,
      `CH₃CH₂OH`,
      `CH₃OH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `X + KCN -> CH3CN ->[2H2/Ni] CH3CH2NH2, What is (X)`,
    options: [
      `CH3CH2Cl`,
      `CH3Cl`,
      `CH3CH2CH2Cl`,
      `(CH3)2CHCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH3Cl`
  },
  {
    question: `Acetic anhydride reacts with diethyl ether in the presence of anhydrous AlCl₃ to give`,
    options: [
      `CH₃CH₂COOH`,
      `CH₃CH₂COOCH₂CH₃`,
      `CH₃COOCH₃`,
      `CH₃COOC₂H₅`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₃COOC₂H₅`
  },
  {
    question: `CH₃COOH reacts rapidly with:`,
    options: [
      `CH₃CH₂OH`,
      `(CH₃)₂CHOH`,
      `(CH₃)₃COOH`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₃CH₂OH`
  },
  {
    question: `Which of the following alcohols cannot be oxidized by potassium dichromate in the presence of sulphuric acid?`,
    options: [
      `CH₃CH₂OH`,
      `C₆H₅OH`,
      `C₆H₅CHOHCH₃`,
      `(CH₃)₃COH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (CH₃)₃COH`
  },
  {
    question: `The reaction of ethanol with concentrated H₂SO₄ at room temperature gives`,
    options: [
      `CH₃CH₂OH₂⁺HSO₄⁻`,
      `CH₃CH₂OSO₂OH`,
      `CH₃CH₂OCH₂CH₃`,
      `H₂C=CH₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃CH₂OSO₂OH`
  },
  {
    question: `Which forms most stable hydrate?`,
    options: [
      `CH₃CHO`,
      `C₆H₅CHO`,
      `CCl₃CHO`,
      `CH₃COCH₃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CCl₃CHO`
  },
  {
    question: `The end product of the following sequence is: CH₃Br → KCN(alc.) → (A) → H₃O⁺ → (B) → LiAlH₄ → (C)`,
    options: [
      `CH₃CHO`,
      `CH₃CH₂OH`,
      `CH₃COCH₃`,
      `CH₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃CH₂OH`
  },
  {
    question: `HBr reacts with CH₂=CH-OCH₃ under anhydrous conditions at room temperature to give:`,
    options: [
      `CH₃CHO and CH₃Br`,
      `BrCH₂CHO and CH₃OH`,
      `BrCH₂-CH₂-OCH₃`,
      `H₃C-CHBr-OCH₃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: H₃C-CHBr-OCH₃`
  },
  {
    question: `The compound which does not react with sodium is:`,
    options: [
      `CH₃CHOHCH₃`,
      `CH₃-O-CH₃`,
      `CH₃COOH`,
      `C₂H₅OH`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃-O-CH₃`
  },
  {
    question: `Which will not form a yellow precipitate on heating with an alkaline solution of iodine?`,
    options: [
      `CH₃CHOHCH₃`,
      `CH₃CH₂CHOHCH₃`,
      `CH₃OH`,
      `CH₃CH₂OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `Chlorine is most reactive towards NaOH in:`,
    options: [
      `CH3Cl`,
      `CH2=CHCl`,
      `C6H5Cl`,
      `C6H5CH2Cl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C6H5CH2Cl`
  },
  {
    question: `Which of the following compounds is not formed in iodoform reaction of acetone?`,
    options: [
      `CH3COCH2I`,
      `ICH2COCH2I`,
      `CH3COCH2`,
      `CH3COCl3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: ICH2COCH2I`
  },
  {
    question: `A fruity smell is obtained by the reaction of ethanol with`,
    options: [
      `CH₃COCH₃`,
      `PCl₅`,
      `CH₃COOH`,
      `CH₃CHO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃COOH`
  },
  {
    question: `Methyl alcohol on oxidation with acidified K₂Cr₂O₇ gives:`,
    options: [
      `CH₃COCH₃`,
      `CH₃CHO`,
      `HCOOH`,
      `CH₃COOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: HCOOH`
  },
  {
    question: `Which compound on reaction with ethyl magnesium bromide and water will form 2-methyl-2-butanol?`,
    options: [
      `CH3COCH3`,
      `CH3COOCH3`,
      `CH3CH2CHO`,
      `C2H5COCH3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH3COCH3`
  },
  {
    question: `When ethyl alcohol is heated with conc. H₂SO₄, the product obtained is`,
    options: [
      `CH₃COOC₂H₅`,
      `C₂H₂`,
      `C₂H₆`,
      `C₂H₄`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C₂H₄`
  },
  {
    question: `At higher temperature, iodoform reaction is given by:`,
    options: [
      `CH3COOCH3`,
      `CH3COOC2H5`,
      `C6H5COOCH3`,
      `CH3COOC6H5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH3COOC2H5`
  },
  {
    question: `Acetone on reduction gives:`,
    options: [
      `CH₃COOH`,
      `CH₃CHO`,
      `C₂H₅OH`,
      `(CH₃)₂CHOH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (CH₃)₂CHOH`
  },
  {
    question: `A mixture of sodium acetate and sodalime is heated and the product treated with excess of chlorine in presence of bright sunlight. The product is:`,
    options: [
      `CH3COOH`,
      `CH2BrCOOH`,
      `CCl4`,
      `CH3Cl`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CCl4`
  },
  {
    question: `Which of the following do not form Grignard reagent?`,
    options: [
      `CH3F`,
      `CH3Cl`,
      `CH3Br`,
      `CH3I`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH3F`
  },
  {
    question: `Which of the following is the best method for making isopropylmethyl ether?`,
    options: [
      `CH₃I + (CH₃)₂CHOH →`,
      `CH₃I + (CH₃)₂CHO⁻ →`,
      `(CH₃)₂CHI + CH₃O⁻ →`,
      `(CH₃)₂CHCl + CH₃OH →`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃I + (CH₃)₂CHO⁻ →`
  },
  {
    question: `The order of reactivities of methyl halides in the formation of Grignard reagent is`,
    options: [
      `CH3I > CH3Br > CH3Cl`,
      `CH3Cl > CH3Br > CH3I`,
      `CH3Br > CH3Cl > CH3I`,
      `CH3Br > CH3I > CH3Cl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH3I > CH3Br > CH3Cl`
  },
  {
    question: `The reaction of CH₃OC₂H₅ with HI gives:`,
    options: [
      `CH₃I only`,
      `C₂H₅OH only`,
      `CH₃I + C₂H₅OH`,
      `C₂H₅I + CH₃OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃I + C₂H₅OH`
  },
  {
    question: `Which of the following combinations can be used to synthesise ethanol?`,
    options: [
      `CH₃MgI and CH₃COCH₃`,
      `CH₃MgI and C₂H₅OH`,
      `CH₃MgI and CH₃COOC₂H₅`,
      `CH₃MgI and HCHO`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₃MgI and HCHO`
  },
  {
    question: `The starting material for the preparation of CH₃I in one step reaction is:`,
    options: [
      `CH₃OH`,
      `C₂H₅OH`,
      `CH₃CHO`,
      `CH₃COCH₃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `In Lucas test an alcohol reacts immediately and gives insoluble chloride. The alcohol is`,
    options: [
      `CH₃OH`,
      `CH₃CH₂OH`,
      `(CH₃)₂CHOH`,
      `(CH₃)₃COH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (CH₃)₃COH`
  },
  {
    question: `The alcohol manufactured from water gas is`,
    options: [
      `CH₃OH`,
      `C₂H₅OH`,
      `CH₃CH₂COOH`,
      `(CH₃)₂CHOH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `Wood spirit is:`,
    options: [
      `CH₃OH`,
      `C₂H₅OH`,
      `CH₃CH₂CH₂OH`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `An unknown compound 'D' first oxidised to aldehyde and then acetic acid by a dilute solution of K₂Cr₂O₇ and H₂SO₄. The compound 'D' is`,
    options: [
      `CH₃OH`,
      `C₂H₅OH`,
      `CH₃CH₂COOH`,
      `CH₃CH₂CHO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `Which could not be obtained from wood?`,
    options: [
      `CH₃OH`,
      `C₂H₅OH`,
      `Wood tar`,
      `Wood charcoal`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `Tert-butyl methyl ether on heating with anhydrous HI in ether gives`,
    options: [
      `CH₃OH + (CH₃)₃Cl`,
      `CH₃I + (CH₃)₃COH`,
      `CH₃I + (CH₃)₃Cl`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃I + (CH₃)₃COH`
  },
  {
    question: `Which of the following compounds is most acidic?`,
    options: [
      `CH₄`,
      `C₂H₆`,
      `CH≡CH`,
      `C₂H₅OH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `Product formed when HCHO is heated with KOH (aq):`,
    options: [
      `CH₄`,
      `CH₃CHO`,
      `CH₃OH`,
      `C₂H₂`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃OH`
  },
  {
    question: `Which compound will have highest boiling point?`,
    options: [
      `CH₄`,
      `CH₃OH`,
      `C₂H₅OH`,
      `HCHO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C₂H₅OH`
  },
  {
    question: `257. The process associated with sodium carbonate manufacture is known as ....process.`,
    options: [
      `Chamber`,
      `Haber`,
      `Leblanc`,
      `Castner`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Leblanc`
  },
  {
    question: `Titanium containing mineral found in our country is`,
    options: [
      `Bauxite`,
      `Chalcopyrites`,
      `Elmanite`,
      `dolomite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Elmanite`
  },
  {
    question: `Which of the following is used as anaesthetic?`,
    options: [
      `CHCl₃`,
      `C₂H₅OH`,
      `C₂H₅OC₂H₅`,
      `CHCl₃ and C₂H₅OC₂H₅`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CHCl₃ and C₂H₅OC₂H₅`
  },
  {
    question: `Which of the following reacts with water?`,
    options: [
      `CHCl₃`,
      `CCl₄`,
      `CCl₃CHO`,
      `CH₂ClCH₂Cl`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CCl₃CHO`
  },
  {
    question: `Which ore contain both iron and copper?`,
    options: [
      `Cuprite`,
      `Chalocate`,
      `Chalcopyrite`,
      `malachite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Chalcopyrite`
  },
  {
    question: `Ethyl ortho formate is formed by heating ... with sodium ethoxide.`,
    options: [
      `CHCl3`,
      `C2H5OH`,
      `HCOOH`,
      `CH3CHO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CHCl3`
  },
  {
    question: `Molecular formula of chloropicrin is`,
    options: [
      `CHCl3NO2`,
      `CCl3NO3`,
      `CCl2NO2`,
      `CCl3NO2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CCl3NO2`
  },
  {
    question: `What is formed when glycerol reacts with excess of HI?`,
    options: [
      `CHI₃`,
      `CH₃CH₂CH₂I`,
      `CH₃CHICH₃`,
      `CH₂I-CHOH-CH₂OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃CHICH₃`
  },
  {
    question: `Alcohol is not used in making:`,
    options: [
      `Chloral`,
      `Chloroform`,
      `Benzene`,
      `Acetaldehyde`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Benzene`
  },
  {
    question: `A and B are two allotropes of an element. One gram of A will differ from one gram of B in:`,
    options: [
      `Oxidation number`,
      `Chemical composition`,
      `Total number of atoms`,
      `Atomic arrangement`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Atomic arrangement`
  },
  {
    question: `In the reaction sequence (image) Compound 'X' is`,
    options: [
      `Chlorobenzene`,
      `Benzene`,
      `Toluene`,
      `Biphenyl methane`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Benzene`
  },
  {
    question: `Which one of the following pairs is the strongest pesticide?`,
    options: [
      `Chloroform and benzene hexachloride`,
      `DDT and 666`,
      `666 and ether`,
      `isocyanides and alcohol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: DDT and 666`
  },
  {
    question: `Chloroform on reaction with conc. HNO3 gives an insecticide and war gas known as:`,
    options: [
      `Chloropicrin`,
      `Nitromethane`,
      `Picric acid`,
      `Acetylene`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Chloropicrin`
  },
  {
    question: `Nickel is purified by thermal decomposition of its:`,
    options: [
      `Hydride`,
      `Chloride`,
      `Azide`,
      `Carbonyl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Carbonyl`
  },
  {
    question: `49. When KCl is heated with conc. \\(\\mathrm{H_2SO_4}\\) and solid \\(\\mathrm{K_2Cr_2O_7}\\) , we get:`,
    options: [
      `Chromyl chloride`,
      `Chromous chloride`,
      `Chromic chloride`,
      `Chromic oxide`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Chromyl chloride`
  },
  {
    question: `Apatite is an ore of`,
    options: [
      `Fluorine`,
      `Chlorine`,
      `Bromine`,
      `iodine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fluorine`
  },
  {
    question: `The ore that is concentrated by forth flotation process is`,
    options: [
      `Zincite`,
      `Cinnabar`,
      `Bauxite`,
      `malachite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cinnabar`
  },
  {
    question: `The general molecular formula, which represents the homologous series of alkanols is:`,
    options: [
      `CₙH₂ₙ₊₁O`,
      `CₙH₂ₙ₊₂O`,
      `CₙH₂ₙO₂`,
      `CₙH₂ₙO`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CₙH₂ₙ₊₂O`
  },
  {
    question: `60. On heating washing soda, we get:`,
    options: [
      `CO`,
      `\\(\\mathrm{CO} + \\mathrm{CO}_2\\)`,
      `\\(\\mathrm{CO}_2\\)`,
      `\\(\\mathrm{H}_2\\mathrm{O}(\\nu)\\)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: \\(\\mathrm{H}_2\\mathrm{O}(\\nu)\\)`
  },
  {
    question: `Alcoholic fermentation by starch or sugar is brought about by:`,
    options: [
      `CO₂`,
      `Sodium bicarbonate`,
      `Yeast`,
      `Enzymes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Yeast`
  },
  {
    question: `Extraction of Ag from commercial lead is possible by:`,
    options: [
      `Parke's process`,
      `Clarke's process`,
      `Pattinson's process`,
      `Electrolytic process`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Parke's process`
  },
  {
    question: `Carbon tetrachloride reacts with steam at 500°C to give:`,
    options: [
      `COCl2`,
      `CHCl3`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: COCl2`
  },
  {
    question: `The chemical formula of 'tear gas' is`,
    options: [
      `COCl2`,
      `CO2`,
      `Cl2`,
      `CCl3NO2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CCl3NO2`
  },
  {
    question: `Lubricant used in watch is:`,
    options: [
      `Coconut oil`,
      `Pine oil`,
      `Animal oil`,
      `Glycerol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Glycerol`
  },
  {
    question: `Orford process is used in extraction of:`,
    options: [
      `Pt`,
      `Co`,
      `Fe`,
      `Ni`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ni`
  },
  {
    question: `Lucas reagent is a mixture of:`,
    options: [
      `Conc. HCl + anhydrous ZnCl₂`,
      `Conc. HCl + hydrous ZnCl₂`,
      `Conc. HNO₃ + hydrous ZnCl₂`,
      `Conc. HNO₃ + anhydrous ZnCl₂`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Conc. HCl + anhydrous ZnCl₂`
  },
  {
    question: `The best method to prepare cyclohexene from cyclohexanol is by using`,
    options: [
      `Conc. HCl + ZnCl₂`,
      `Conc. H₃PO₄`,
      `HBr`,
      `Conc. HCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Conc. H₃PO₄`
  },
  {
    question: `Lucas reagent is`,
    options: [
      `Conc. HCl and anhydrous ZnCl₂`,
      `Conc. HNO₃ and hydrous ZnCl₂`,
      `Conc. HCl and hydrous ZnCl₂`,
      `Conc. HNO₃ and anhydrous ZnCl₂`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Conc. HCl and anhydrous ZnCl₂`
  },
  {
    question: `Ethers are made free from peroxide linkage on distilling impure sample with:`,
    options: [
      `Conc. HNO₃`,
      `Conc. H₂SO₄`,
      `Conc. HCl`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Conc. H₂SO₄`
  },
  {
    question: `Chloroform gives a trichloro derivative of an alcohol on reaction with`,
    options: [
      `conc. nitric acid`,
      `aq. alkali`,
      `acetone and alkali`,
      `a primary amine and an alkali`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: acetone and alkali`
  },
  {
    question: `Which element occurs in free state in nature?`,
    options: [
      `Fe`,
      `Co`,
      `Pt`,
      `Ni`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pt`
  },
  {
    question: `Pentalandite is an ore of:`,
    options: [
      `Fe`,
      `Co`,
      `Cu`,
      `Ni`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ni`
  },
  {
    question: `General formula for alcohols is:`,
    options: [
      `COOH`,
      `CHOH`,
      `-CH₂OH`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `The substance added in water in the forth floatation process is`,
    options: [
      `Pine oil`,
      `Coconut oil`,
      `Soap powder`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Pine oil`
  },
  {
    question: `Boron is found in form of:`,
    options: [
      `Borax`,
      `Colemanite`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `When ethylene glycol is heated with a mixture of concentrated HNO₃ and concentrated H₂SO₄, it produces`,
    options: [
      `COOH-COOH`,
      `CO₂ + H₂`,
      `CH₂ONO₂-CH₂ONO₂`,
      `CH₂ONO₂-CH₂OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₂ONO₂-CH₂ONO₂`
  },
  {
    question: `The sand stone in some iron ores is removed by:`,
    options: [
      `Carbon filters`,
      `Compressed air`,
      `Lime stone`,
      `Sulphuric acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Lime stone`
  },
  {
    question: `Iron is made inactive or passive by:`,
    options: [
      `H3PO4`,
      `Conc. HNO3`,
      `Conc. H2SO4`,
      `Dil. HNO3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Conc. HNO3`
  },
  {
    question: `Leaching is a process of:`,
    options: [
      `Reduction`,
      `Concentration`,
      `Refining`,
      `Oxidation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Concentration`
  },
  {
    question: `250. Which of the following will liberate hydrogen by its reaction with hydrochloric acid?`,
    options: [
      `Copper`,
      `Phosphorus`,
      `Mercury`,
      `Magnesium`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Magnesium`
  },
  {
    question: `167. In the extraction of sodium by Down’s process, cathode and anode are respectively`,
    options: [
      `Copper and nickel`,
      `Copper and chromium`,
      `Nickel and chromium`,
      `Iron and graphite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Iron and graphite`
  },
  {
    question: `In the formation of Al2O3 large amount of heat is evolved. This property is used in:`,
    options: [
      `Deoxidation`,
      `Confectionary`,
      `Indoor photography`,
      `Thermite welding`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Thermite welding`
  },
  {
    question: `Softening of lead means:`,
    options: [
      `Conversion of lead into PbO`,
      `Conversion of lead into Pb3O4`,
      `Removal of metallic impurities from lead`,
      `Washing lead with HNO3 followed by dilute alkali solution`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Removal of metallic impurities from lead`
  },
  {
    question: `Anisole is the product obtained from phenol by the reaction known as`,
    options: [
      `Coupling`,
      `Etherification`,
      `Oxidation`,
      `Esterification`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Etherification`
  },
  {
    question: `In electro-refining of metal the impure metal is made the anode and a strip of pure metal, the cathode, during the electrolysis of an aqueous solution of a complex metal salt. This method cannot be used for refining of:`,
    options: [
      `Silver`,
      `Copper`,
      `Aluminium`,
      `Sodium`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Sodium`
  },
  {
    question: `Which of the elements listed below shows allotropic forms?`,
    options: [
      `Iodine`,
      `Copper`,
      `Sulphur`,
      `Silver`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sulphur`
  },
  {
    question: `Sulphide ores of metals are usually concentrated by froth floatation process. Which one of the following sulphide ores offers an exception and is concentrated by leaching?`,
    options: [
      `Galena`,
      `Copper pyrite`,
      `Sphalerite`,
      `Argentine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Argentine`
  },
  {
    question: `Which of the following mineral does not contain Al?`,
    options: [
      `Fluorspar`,
      `Cryolite`,
      `Mica`,
      `Feldspar`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fluorspar`
  },
  {
    question: `Which of the following ore is used for industrial extraction of aluminium in India?`,
    options: [
      `Corundum`,
      `Cryolite`,
      `Bauxite`,
      `Kaolin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Bauxite`
  },
  {
    question: `188. The only element which is radioactive among alkali metals is:`,
    options: [
      `Cs`,
      `Fr`,
      `Rb`,
      `Li`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Fr`
  },
  {
    question: `Liquid crystals are best used in:`,
    options: [
      `Colour TV`,
      `Crystallization`,
      `Extraction`,
      `e/m determination`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Colour TV`
  },
  {
    question: `Sapphire is a mineral of:`,
    options: [
      `Zn`,
      `Cu`,
      `Hg`,
      `Al`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Al`
  },
  {
    question: `Oxidation method is used for refining of:`,
    options: [
      `Pb`,
      `Cu`,
      `Hg`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Which of the following metal is sometimes found native in nature?`,
    options: [
      `Mg`,
      `Cu`,
      `Al`,
      `Fe`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cu`
  },
  {
    question: `Which metal is not silver white?`,
    options: [
      `Fe`,
      `Cu`,
      `Ni`,
      `Cr`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cu`
  },
  {
    question: `Stainless steel has iron and`,
    options: [
      `Cr`,
      `Cu`,
      `Co`,
      `Zn`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cr`
  },
  {
    question: `Cyanide process is used in the extraction of`,
    options: [
      `Au`,
      `Cu`,
      `Ag`,
      `Both (a) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Both (a) and (c)`
  },
  {
    question: `Which metal is sometimes found in native state?`,
    options: [
      `Al`,
      `Cu`,
      `Fe`,
      `Mg`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Fe`
  },
  {
    question: `On heating a mixture of Cu2O and Cu2S, we get:`,
    options: [
      `Cu + SO2`,
      `Cu + SO3`,
      `CuO + CuS`,
      `Cu2SO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu + SO2`
  },
  {
    question: `Bronze is a mixture of`,
    options: [
      `Pb+Sn`,
      `Cu+Sn`,
      `Cu+Zn`,
      `Pb+Zn`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cu+Sn`
  },
  {
    question: `During besemersitation of copper, the reaction taking place in the besemmer convertor is:`,
    options: [
      `Cu2S + 2Cu2O → 6Cu + SO2`,
      `Cu2O + FeS → Cu2S + FeO`,
      `FeO + SiO2 → FeSiO3`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu2S + 2Cu2O → 6Cu + SO2`
  },
  {
    question: `Matte contains mainly`,
    options: [
      `Cu2S and FeS`,
      `Cu2S`,
      `CuS and Fe2S3`,
      `Fe`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu2S and FeS`
  },
  {
    question: `The least stable oxide at room temperature is:`,
    options: [
      `ZnO`,
      `CuO`,
      `Sb2O3`,
      `Ag2O`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ag2O`
  },
  {
    question: `Heating mixture of Cu2O and Cu2S will give`,
    options: [
      `Cu2SO3`,
      `CuO + CuS`,
      `Cu + SO3`,
      `Cu + SO2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cu + SO2`
  },
  {
    question: `Glycol condenses with ketones to give:`,
    options: [
      `Cyclic acetals`,
      `Cyclic ketals`,
      `Acetaldehyde`,
      `Oxalic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cyclic ketals`
  },
  {
    question: `Ethylene oxide when treated with Grignard reagent yields:`,
    options: [
      `Cyclopropyl alcohol`,
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Primary alcohol`
  },
  {
    question: `29. Gypsum is added to clinker during cement manufacture to:`,
    options: [
      `Decrease the rate of setting of cement`,
      `Make the cement impervious`,
      `Bind the particles of calcium silicate`,
      `To facilitate the formation of colloidal gel`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Decrease the rate of setting of cement`
  },
  {
    question: `The compound CH₃CH₂CH₂Br is converted into CH₃CH₂CH₂OH by:`,
    options: [
      `Dehydration`,
      `Hydrogenation`,
      `Elimination`,
      `Substitution`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Substitution`
  },
  {
    question: `Formation of diethyl ether from ethanol is based on a`,
    options: [
      `Dehydration reaction`,
      `Dehydrogenation reaction`,
      `Hydrogenation reaction`,
      `Homolytic fission reaction`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Dehydration reaction`
  },
  {
    question: `Which of the following is a carbonate ore?`,
    options: [
      `Pyrolusite`,
      `Diaspore`,
      `Cassiterite`,
      `Malachite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Malachite`
  },
  {
    question: `A diazonium chloride reacts with ΦOH to give an azodye. The reaction is called`,
    options: [
      `Diazotisation`,
      `Condensation`,
      `Coupling`,
      `Reduction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Coupling`
  },
  {
    question: `45. Which component of cement sets at the slowest rate?`,
    options: [
      `Dicalcium silicate`,
      `Tricalcium silicate`,
      `Tricalcium aluminate`,
      `Tetracalcium alumino ferrite`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Dicalcium silicate`
  },
  {
    question: `75. Which of the compounds of cement sets at the slowest rate?`,
    options: [
      `Dicalcium silicate`,
      `Tricalcium silicate`,
      `Tricalcium aluminate`,
      `Tetracalcium aluminoferrate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Dicalcium silicate`
  },
  {
    question: `Williamson's synthesis is used to prepare`,
    options: [
      `Diethyl ether`,
      `Acetone`,
      `PVC`,
      `Bakelite`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Diethyl ether`
  },
  {
    question: `Ether on reacting with P₂S₅ form`,
    options: [
      `Diethyl sulphide`,
      `Thioalcohol`,
      `Thioether`,
      `Thioaldehyde`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Thioether`
  },
  {
    question: `An element A dissolves both in acid and alkali. It is an example of:`,
    options: [
      `Allotropic nature of A`,
      `Dimorphic nature of A`,
      `Amorphous nature of A`,
      `Amphoteric nature of A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Amphoteric nature of A`
  },
  {
    question: `An ether is more volatile than an alcohol having the same molecular formula. This is due to`,
    options: [
      `Dipolar character of ethers`,
      `Alcohols having resonance structures`,
      `Intermolecular hydrogen bonding in ethers`,
      `Intermolecular hydrogen bonding in alcohols`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Intermolecular hydrogen bonding in alcohols`
  },
  {
    question: `Acetic acid is obtained from ethyl alcohol by the process of:`,
    options: [
      `Distillation`,
      `Reduction`,
      `Fermentation`,
      `Dehydration`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Fermentation`
  },
  {
    question: `From gold amalgam, gold may be recovered by:`,
    options: [
      `Addition of Zn metal`,
      `Distillation`,
      `Roasting`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Roasting`
  },
  {
    question: `The substance not likely to contain CaCO3 is:`,
    options: [
      `Sea shells`,
      `Dolomite`,
      `Marble statue`,
      `Calcined gypsum`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Calcined gypsum`
  },
  {
    question: `Which contains both Ca and Mg^2+`,
    options: [
      `Lime stone`,
      `Dolomite`,
      `Chalk`,
      `Felspar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Dolomite`
  },
  {
    question: `Which is not an ore of magnesium?`,
    options: [
      `Carnallite`,
      `Dolomite`,
      `Gypsum`,
      `Magnesite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Gypsum`
  },
  {
    question: `41. Bleaching powder is obtained by the interaction of chlorine and`,
    options: [
      `Dry calcium oxide`,
      `Dry slaked lime`,
      `conc. solution of \\(\\mathrm{Ca(OH)_2}\\)`,
      `dilute solution of \\(\\mathrm{Ca(OH)_2}\\)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Dry slaked lime`
  },
  {
    question: `27. Shine at freshly cut sodium is because of`,
    options: [
      `Due to oscillation of free electrons`,
      `Due to weak metallic bonding`,
      `Due to by absorption of light in crystal lattice`,
      `Due to presence of free valency at the surface`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Due to oscillation of free electrons`
  },
  {
    question: `In electrofining of copper, some gold is deposited as`,
    options: [
      `Cathode`,
      `Electrode`,
      `Cathode mud`,
      `Anode mud`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Anode mud`
  },
  {
    question: `After partial roasting, the sulphide of copper is reduced by:`,
    options: [
      `Cyanide process`,
      `Electrolysis`,
      `Reduction with carbon`,
      `Self reduction`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Self reduction`
  },
  {
    question: `90. Sodium carbonate is:`,
    options: [
      `Efflorescent`,
      `Deliquescent`,
      `Hygroscopic`,
      `Oxidant`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Efflorescent`
  },
  {
    question: `Wolframite ore is separated from tin stone ore by the process of`,
    options: [
      `Calcination`,
      `Electromagnetic`,
      `Roasting`,
      `Smelting`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Electromagnetic`
  },
  {
    question: `Bauxite ore is concentrated by`,
    options: [
      `Froth floatation`,
      `Electromagnetic separation`,
      `Chemical method`,
      `Gravity separation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Chemical method`
  },
  {
    question: `Which is statement is incorrect?`,
    options: [
      `Galena is an ore of Pb`,
      `Electrostatic separation is used for lead sulphide`,
      `Ore is heated strongly, above its melting point in roasting`,
      `Silica acts as acidic flux`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ore is heated strongly, above its melting point in roasting`
  },
  {
    question: `40. Which property increases in magnitude as the atomic number of alkali metals increases?`,
    options: [
      `Electronegativity`,
      `First ionization energy`,
      `Ionic radius`,
      `Melting point`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ionic radius`
  },
  {
    question: `Which does not contain aluminium?`,
    options: [
      `Bauxite`,
      `Emery`,
      `Rutile`,
      `Corundum`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Rutile`
  },
  {
    question: `142. Identify the correct statement:`,
    options: [
      `Elemental sodium can be prepared and isolated by electrolysing an aqueous solution of sodium chloride`,
      `Elemental sodium is a strong oxidising agent`,
      `Elemental sodium is insoluble in ammonia`,
      `Elemental sodium is easily oxidised`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Elemental sodium is easily oxidised`
  },
  {
    question: `The given reaction is an example of, C2H5Br + KCN(aq.) -> C2H5CN + KBr:`,
    options: [
      `Elimination`,
      `Nucleophilic substitution`,
      `Electrophilic substitution`,
      `Redox change`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Nucleophilic substitution`
  },
  {
    question: `Saponification means hydrolysis of an ester with:`,
    options: [
      `Enzyme`,
      `CH₃COOH`,
      `H₂SO₄`,
      `NaOH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: NaOH`
  },
  {
    question: `Which of the following statement is incorrect?`,
    options: [
      `Enzymes are in colloidal state`,
      `Enzymes are catalyst`,
      `Enzymes can catalyse any reaction`,
      `Urease is an enzyme`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Enzymes can catalyse any reaction`
  },
  {
    question: `Elimination of HBr from 2-bromobutane results in the formation of:`,
    options: [
      `Equimolar mixture of 1- and 2- butene`,
      `Predominantly 2-butene`,
      `Predominantly 1- butene`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Predominantly 2-butene`
  },
  {
    question: `In the presence of an acid catalyst, two alcohol molecules will undergo dehydration to give:`,
    options: [
      `Ester`,
      `Anhydride`,
      `Ether`,
      `Unsaturated hydrocarbon`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ether`
  },
  {
    question: `Which one has highest boiling point?`,
    options: [
      `Ethane`,
      `Butane`,
      `Butan-1-ol`,
      `Pentane`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Butan-1-ol`
  },
  {
    question: `Ethylene dichloride can be prepared by the reaction of HCl and :`,
    options: [
      `Ethane`,
      `Ethylene`,
      `Acetylene`,
      `Ethylene glycol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ethylene glycol`
  },
  {
    question: `Denatured alcohol is`,
    options: [
      `Ethanol + methanol`,
      `Rectified spirit + methanol + naphtha`,
      `Undistilled ethanol`,
      `Rectified spirit`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ethanol + methanol`
  },
  {
    question: `The correct order of the solubility of different alcohols in water is`,
    options: [
      `Ethanol > n-propanol > n-butyl alcohol`,
      `n-propyl alcohol > ethyl alcohol > n-butyl alcohol`,
      `ethyl alcohol > n-butyl alcohol > n-propyl alcohol`,
      `n-butyl alcohol > n-propyl alcohol > ethyl alcohol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ethanol > n-propanol > n-butyl alcohol`
  },
  {
    question: `Ethanol is more soluble in water but ether is less soluble because:`,
    options: [
      `Ethanol forms strong hydrogen bonds in water whereas ether forms weaker hydrogen bonding`,
      `Ether is more volatile than ethanol`,
      `The molecular weight of ether is more than that of ethanol`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ethanol forms strong hydrogen bonds in water whereas ether forms weaker hydrogen bonding`
  },
  {
    question: `Increasing order of acid strength among tert-butanol, isopropanol and ethanol is:`,
    options: [
      `Ethanol, isopropanol, tert-butanol`,
      `tert-butanol, isopropanol, ethanol`,
      `Isopropanol, tert-butanol, ethanol`,
      `tert-butanol, ethanol, isopropanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: tert-butanol, isopropanol, ethanol`
  },
  {
    question: `Sodium ethoxide and ethyl chloride on heating will give:`,
    options: [
      `Ether`,
      `Ethyl alcohol`,
      `Acetaldehyde`,
      `Acetic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ether`
  },
  {
    question: `Which of the following is an anaesthetic?`,
    options: [
      `Ether`,
      `Thiobarbutates`,
      `Trichloromethane`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `The boiling point of ethyl alcohol is much higher than that of dimethyl ether and C₂H₅SH, though both have the same molecular weight. The reason for this is:`,
    options: [
      `Ether is insoluble in water`,
      `Methyl groups are attached to oxygen in ether`,
      `Dipole moment of ethyl alcohol is less`,
      `Ethyl alcohol shows hydrogen bonding`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ethyl alcohol shows hydrogen bonding`
  },
  {
    question: `Etherets are`,
    options: [
      `Ethers`,
      `Solutions in ether`,
      `Complexes of ethers with Lewis acid`,
      `Complexes of ethers with Lewis base`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Complexes of ethers with Lewis acid`
  },
  {
    question: `Which one of the following compounds will not react with CH₃MgBr?`,
    options: [
      `Ethyl acetate`,
      `Acetone`,
      `Dimethyl ether`,
      `Ethanol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Dimethyl ether`
  },
  {
    question: `An alcohol on alk. KMnO₄ oxidation gives first acetone and on further oxidation acetic acid. It is:`,
    options: [
      `Ethyl alcohol`,
      `Isopropyl alcohol`,
      `Primary alcohol`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Isopropyl alcohol`
  },
  {
    question: `Which of the following will not respond to iodoform test?`,
    options: [
      `Ethyl alcohol`,
      `Propanol-2`,
      `Propanol-1`,
      `Ethanal`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Propanol-1`
  },
  {
    question: `Which of the following reactions gives a dialkyl oxonium salt?`,
    options: [
      `Ethyl alcohol + sodium metal`,
      `Diethyl ether + hydrochloric acid`,
      `Tertiary amine + alkyl halide`,
      `Nitromethane + sodium metal`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Diethyl ether + hydrochloric acid`
  },
  {
    question: `Chlorine reacts with ethanol to give:`,
    options: [
      `Ethyl chloride`,
      `Chloroform`,
      `Acetaldehyde`,
      `Chloral`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Chloral`
  },
  {
    question: `When diethyl ether is heated with an excess of PCl₅, it yields`,
    options: [
      `Ethyl chloride`,
      `Diethyl ether peroxide`,
      `Ethanoyl chloride`,
      `Perchlorodiethyl ether`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ethyl chloride`
  },
  {
    question: `20% aqueous solution of sodium chloride containing ethyl alcohol on electrolysis gives:`,
    options: [
      `Ethyl chloride`,
      `Chloral`,
      `Acetaldehyde`,
      `Chloroform`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Chloroform`
  },
  {
    question: `Non-sticking frying pans are coated with:`,
    options: [
      `Ethylene`,
      `Styrene`,
      `Tetrafluoroethylene (Teflon)`,
      `Chlorofluoro methane`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Tetrafluoroethylene (Teflon)`
  },
  {
    question: `Glycol is prepared industrially by the following reactions:`,
    options: [
      `Ethylene → Ethylene chlorohydrin → Glycol`,
      `Ethylene → Ethylene oxide → Glycol`,
      `Both (a) and (b)`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Glycol reacts with PCl₃ and gives ethylene dichloride. What will be the product, if it reacts with P + I₂?`,
    options: [
      `Ethylene iodide`,
      `Ethylene iodohydrin`,
      `Ethylene`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ethylene`
  },
  {
    question: `Fermentation is:`,
    options: [
      `Exothermic`,
      `Endothermic`,
      `Reversible`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Exothermic`
  },
  {
    question: `Which of the following metal is thrown as anode mud during electrolytic refining of copper?`,
    options: [
      `Zn`,
      `Fe`,
      `Ag`,
      `Ni`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ag`
  },
  {
    question: `Which among the following has highest electrical conductivity?`,
    options: [
      `Zn`,
      `Fe`,
      `Ag`,
      `Cu`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ag`
  },
  {
    question: `Which element is found in human body?`,
    options: [
      `Pb`,
      `Fe`,
      `Cd`,
      `Al`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Fe`
  },
  {
    question: `The matte is impure substance obtained during extraction of:`,
    options: [
      `Cu`,
      `Fe`,
      `Pb`,
      `Al`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu`
  },
  {
    question: `Blast furnace is used in the metallurgy of:`,
    options: [
      `Al`,
      `Fe`,
      `Gold`,
      `Ag`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Fe`
  },
  {
    question: `Which pair of elements can form alloy?`,
    options: [
      `Zn and Pb`,
      `Fe and Hg`,
      `Fe and C`,
      `C and Pt`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Fe and C`
  },
  {
    question: `The chief impurity present in red bauxite is`,
    options: [
      `SiO2`,
      `Fe2O3`,
      `K2SO4`,
      `NaF`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Fe2O3`
  },
  {
    question: `Formula of magnetite is`,
    options: [
      `Fe2O4`,
      `Fe2O3`,
      `FeS2`,
      `FeCO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fe2O4`
  },
  {
    question: `Which of the following processes involves the roasting process?`,
    options: [
      `ZnCO3 → ZnO + CO2`,
      `Fe2O3 + 3C → 2Fe + 3CO`,
      `2PbS + 3O2 → 2PbO + 2SO2`,
      `Al2O3.2H2O → Al2O3 + 2H2O`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: 2PbS + 3O2 → 2PbO + 2SO2`
  },
  {
    question: `Nobel's oil is:`,
    options: [
      `Fire extinguisher`,
      `Insecticide`,
      `Explosive`,
      `Detergent`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Explosive`
  },
  {
    question: `The reaction, CH₃COOH + HOCH₂H₅ → Dry → CH₃COOC₂H₅ + H₂O is called:`,
    options: [
      `Fischer-Speier esterification`,
      `Clemmensen condensation`,
      `Claisen condensation`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fischer-Speier esterification`
  },
  {
    question: `Gold is found usually near mineral.`,
    options: [
      `Mica`,
      `Felspar`,
      `Quartz`,
      `Galena`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Quartz`
  },
  {
    question: `Slag coming out at the bottom of a blast furnace during extraction of iron from its ores, is used in making:`,
    options: [
      `Roads`,
      `Fertilizers`,
      `Plastics`,
      `Glass moulds`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Roads`
  },
  {
    question: `Cassiterite is concentrated by`,
    options: [
      `Liquation`,
      `Floatation`,
      `Electromagnetic separation`,
      `Levigation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Electromagnetic separation`
  },
  {
    question: `Impurities physically associated with minerals are:`,
    options: [
      `Slag`,
      `Flux`,
      `Alloy`,
      `Matrix`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Matrix`
  },
  {
    question: `Heating of pyrite ores in air to remove Sulphur is known as:`,
    options: [
      `Calcination`,
      `Fluxing`,
      `Smelting`,
      `Roasting`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Poling process is used:`,
    options: [
      `For the removal of Cu2O from Cu`,
      `For the removal of Al2O3 from Al`,
      `For the removal of Fe2O3 from Fe`,
      `In all of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: For the removal of Cu2O from Cu`
  },
  {
    question: `Tonics usually contain small amount of:`,
    options: [
      `Formalin`,
      `Vinegar`,
      `Alcohol`,
      `Ether`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Alcohol`
  },
  {
    question: `Which of the property given below is not associated with glycerol?`,
    options: [
      `Formation of water and CO₂ on reduction`,
      `Formation of tartronic acid on oxidation`,
      `Formation of acrolein on dehydration`,
      `Formation of allyl iodide with PI₃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Formation of water and CO₂ on reduction`
  },
  {
    question: `Glycerol on treatment with oxalic acid at 110°C forms:`,
    options: [
      `Formic acid`,
      `CO₂ and CO`,
      `Allyl alcohol`,
      `Glycol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Formic acid`
  },
  {
    question: `Absolute alcohol is prepared from rectified spirit by:`,
    options: [
      `Fractional distillation`,
      `Steam distillation`,
      `Azeotropic distillation`,
      `Vacuum distillation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Azeotropic distillation`
  },
  {
    question: `Phenol on heating with CCl₄ and aqueous KOH gives salicylic acid. This reaction is`,
    options: [
      `Friedel-Craft reaction`,
      `Diels-Alder reaction`,
      `Reimer-Tiemann reaction`,
      `Wittig reaction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Reimer-Tiemann reaction`
  },
  {
    question: `Reaction of alkyl halides with aromatic compounds in presence of anhy. AlCl3 is known as`,
    options: [
      `Friedel-Craft's reaction`,
      `Hofmann degradation`,
      `Kolbe's synthesis`,
      `Beckmann rearrangement`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Friedel-Craft's reaction`
  },
  {
    question: `Benzoylation of phenol in alkaline medium is known as`,
    options: [
      `Friedel-Crafts reaction`,
      `Wurtz-Fittig reaction`,
      `Schotten-Baumann reaction`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Schotten-Baumann reaction`
  },
  {
    question: `Chlorobenzene → Reaction → Phenol → Y → Salicylaldehyde. X and Y reactions are respectively...`,
    options: [
      `Fries rearrangement and Kolbe-Schmidt`,
      `Cumene and Reimer-Tiemann`,
      `Dow and Reimer-Tiemann`,
      `Dow and Friedel-Craft`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Dow and Reimer-Tiemann`
  },
  {
    question: `Propyl iodide and isopropyl iodide are:`,
    options: [
      `Functional isomers`,
      `Chain isomers`,
      `Metamers`,
      `Position isomers`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Position isomers`
  },
  {
    question: `119. Which of the following process is used in the extractive metallurgy of magnesium?`,
    options: [
      `Fused salt electrolysis`,
      `Self reduction`,
      `Aqueous solution electrolysis`,
      `Thermic reduction`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fused salt electrolysis`
  },
  {
    question: `Sulphide ores are generally concentrated by`,
    options: [
      `Hand picking`,
      `Forth floatation process`,
      `Gravity separation`,
      `Magnetic separation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Forth floatation process`
  },
  {
    question: `Copper pyrites is concentrated by`,
    options: [
      `Gravity method`,
      `Forth floatation process`,
      `Electromagnetic method`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Forth floatation process`
  },
  {
    question: `An ore of tin containing FeCrO4 is concentrated by:`,
    options: [
      `Magnetic separation`,
      `Froth floatation`,
      `Electrostatic method`,
      `Gravity separation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Magnetic separation`
  },
  {
    question: `The prospective fuel 'gashol' is a mixture of:`,
    options: [
      `Gaseous hydrocarbons and heavy water`,
      `Petrol and phenol`,
      `Petrol and ethanol`,
      `Radioactive substances`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Petrol and ethanol`
  },
  {
    question: `Silver obtained by argentiferous lead is purified by:`,
    options: [
      `Distillation`,
      `Froth floatation`,
      `Cupeellation`,
      `Reacting with KCN`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Cupeellation`
  },
  {
    question: `97. For which one of the following minerals, the composition given is incorrect?`,
    options: [
      `Glauber’s salt –Na2SO4 .10H2O`,
      `Borax – Na2B4O7 .7H2O`,
      `Carnallite – KCl . MgCl2 .6H2O`,
      `Soda ash – Na2CO3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Borax – Na2B4O7 .7H2O`
  },
  {
    question: `Glycerol on oxidation with Fenton's reagent produces:`,
    options: [
      `Glyceraldehyde`,
      `Dihydroxy acetone`,
      `Tartonic acid`,
      `Glyceraldehyde and dihydroxy acetone`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Glyceraldehyde and dihydroxy acetone`
  },
  {
    question: `Mild oxidation of glycerol with H₂O₂/FeSO₄ gives`,
    options: [
      `Glyceraldehyde`,
      `Dihydroxy acetone`,
      `Both (a) and (b)`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Glycerol on oxidation with conc. HNO₃ mainly yields:`,
    options: [
      `Glyceric acid`,
      `Tartronic acid`,
      `Mesoxalic acid`,
      `Both (a) and (b)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Glycerol on oxidation with bismuth nitrate mainly gives:`,
    options: [
      `Glyceric acid`,
      `Tartronic acid`,
      `Mesoxalic acid`,
      `Oxalic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mesoxalic acid`
  },
  {
    question: `Which one of the following alcohol is used as an antifreeze reagent for making explosives?`,
    options: [
      `Glycerol`,
      `Glycol`,
      `Ethanol`,
      `Phenol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Glycerol`
  },
  {
    question: `The smelting of iron in a blast furnace involves all the steps except:`,
    options: [
      `Reduction`,
      `Fusion`,
      `Decomposition`,
      `Sublimation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Decomposition`
  },
  {
    question: `When glycerol is treated with a mixture of excess of conc. HNO₃ and H₂SO₄, the compound formed is:`,
    options: [
      `Glycerol mononitrate`,
      `Glycerol dinitrate`,
      `Glycerol trinitrate`,
      `Acrolein`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Glycerol trinitrate`
  },
  {
    question: `Which of the following is not cleaved by HIO₄?`,
    options: [
      `Glycerol, Glycol, Propan-1,3-diol, Methoxy-2-propanol`,
      `A, B, C, D`,
      `A, B`,
      `C, D`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C, D`
  },
  {
    question: `Which of the following pairs of metals is purified by van Arkel method?`,
    options: [
      `Ni and Fe`,
      `Ga and In`,
      `Zr and Ti`,
      `Ag and Au`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Zr and Ti`
  },
  {
    question: `The correct statement is:`,
    options: [
      `Dolomite is the ore of zinc`,
      `Galena is the ore of mercury`,
      `Pyrolusite is the ore of iron`,
      `Cassiterite is the ore of tin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cassiterite is the ore of tin`
  },
  {
    question: `In the metallurgy of iron, when CaCO3 is added to blast furnace, calcium ion appears as`,
    options: [
      `Slag`,
      `Gange`,
      `CaO`,
      `Metallic Ca`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Slag`
  },
  {
    question: `Which statement is correct?`,
    options: [
      `Slag are carefully choosen to combine with the slag present in the ore to produce easily fusible gangue to carry away the impurities`,
      `Ganges are carefully choosen to combine with the slag present in the ore to produce easily fusible flux to carry away the impurities`,
      `Ganges are carefully choosen to combine with flux present in the ore to produce easily fusible slag to carry away the impurities`,
      `Fluxes are carefully choosen to combine with the gangue present in the ore to produce easily fusible slag to carry away the impurities`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Fluxes are carefully choosen to combine with the gangue present in the ore to produce easily fusible slag to carry away the impurities`
  },
  {
    question: `36. When sodium is heated in flame it gives:`,
    options: [
      `Golden yellow colour`,
      `Crimson red colour`,
      `Brick red colour`,
      `Violet colour`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Golden yellow colour`
  },
  {
    question: `219. Alkali metals are characterised by:`,
    options: [
      `Good conductors of heat and electricity`,
      `High melting points`,
      `Low oxidation potentials`,
      `High ionisation potentials`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Good conductors of heat and electricity`
  },
  {
    question: `Denatured spirit is mainly used as a:`,
    options: [
      `Good fuel`,
      `Drug`,
      `Solvent in preparing varnishes`,
      `Material in the preparation of oil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Solvent in preparing varnishes`
  },
  {
    question: `In the metallurgy of iron, when lime stone is added to the blast furnace, the calcium ions are removed as:`,
    options: [
      `Slag`,
      `Gangue`,
      `Metallic Ca`,
      `CaCO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Slag`
  },
  {
    question: `Which is not an ore of nickel?`,
    options: [
      `Nickel glance`,
      `Garnerite`,
      `Haemattite`,
      `Pentlandite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Haemattite`
  },
  {
    question: `Which element is purified by Zone refining?`,
    options: [
      `Ge`,
      `Ge and Si`,
      `Si`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ge and Si`
  },
  {
    question: `74. Which of the following is known as dead burnt plaster?`,
    options: [
      `Gypsum`,
      `Plaster of Paris`,
      `Anhydrite`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Anhydrite`
  },
  {
    question: `Esterification of alcohols involves:`,
    options: [
      `H of alcohol and OH of acid`,
      `OH of alcohol and H of acid`,
      `OH of alcohol and OH of acid`,
      `H of alcohol and H of acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: H of alcohol and OH of acid`
  },
  {
    question: `106. Sodium is heated in air at 300℃ to form 𝑋. 𝑋 absorbs CO2 and forms Na2CO3 and Y? Which of the following is Y?`,
    options: [
      `H2`,
      `O2`,
      `H2O2`,
      `O3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: O2`
  },
  {
    question: `An ore of tin containing FeCrO4 is concentrated by`,
    options: [
      `Electrostatic method`,
      `Gravity separation`,
      `Magnetic separation`,
      `Forth floatation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Magnetic separation`
  },
  {
    question: `The method of zone refining of metals is based on the principle of`,
    options: [
      `Greater noble character of the solid metal than that of the impurity`,
      `Greater solubility of the impurity in the molten state then in the solid`,
      `Greater mobility of the pure metal than that of impurity`,
      `Higher malting point of the impurity that of the pure metal`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Greater solubility of the impurity in the molten state then in the solid`
  },
  {
    question: `Which one can differentiate between C₂H₅OH and CH₃OH?`,
    options: [
      `H₂O`,
      `Na₂CO₃ + I₂`,
      `NH₃`,
      `HCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Na₂CO₃ + I₂`
  },
  {
    question: `When pyrolysite is fused with KOH in presence of air, the fused mass becomes:`,
    options: [
      `Pink`,
      `Green`,
      `Red`,
      `Black`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Pink`
  },
  {
    question: `Fenton's reagent is:`,
    options: [
      `H₂O + FeSO₄`,
      `H₂O₂ + FeSO₄`,
      `H₂O₂ + ZnSO₄`,
      `NaOH + FeSO₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: H₂O₂ + FeSO₄`
  },
  {
    question: `The acidic character of 1°,2°,3° alcohols, H₂O and RC≡CH is of the order`,
    options: [
      `H₂O > 1° > 2° > 3° > RC≡CH`,
      `RC≡CH > 3° > 2° > 1° > H₂O`,
      `1° > 2° > 3° > H₂O > RC≡CH`,
      `3° > 2° > 1° > H₂O > RC≡CH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: H₂O > 1° > 2° > 3° > RC≡CH`
  },
  {
    question: `Propan-1-ol can be prepared from propane by`,
    options: [
      `H₂O/H₂SO₄`,
      `Hg(OAc)₂H₂O followed by NaBH₄`,
      `B₂H₆ followed by H₂O₂`,
      `CH₃CO₂H/H₂SO₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: B₂H₆ followed by H₂O₂`
  },
  {
    question: `Which of the following can work as dehydrating agent for alcohols?`,
    options: [
      `H₂SO₄`,
      `Al₂O₃`,
      `H₃PO₄`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Preparation of alkyl halides in laboratory is least preferred by:`,
    options: [
      `Halide exchange`,
      `Direct halogenation of alkanes`,
      `Treatment of alcohols`,
      `Addition of hydrogen halides to alkenes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Direct halogenation of alkanes`
  },
  {
    question: `Ferric oxide in blast furnace is reduced by:`,
    options: [
      `C`,
      `H2`,
      `CO`,
      `CO2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CO`
  },
  {
    question: `A liquid was mixed with ethanol and a drop of concentrated H₂SO₄ was added. A compound with a fruity smell was formed. The liquid was:`,
    options: [
      `HCHO`,
      `CH₃COCH₃`,
      `CH₃COOH`,
      `CH₃OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃COOH`
  },
  {
    question: `To prepare 2-propanol from CH₃MgI, the other chemical required is:`,
    options: [
      `HCHO`,
      `CH₃CHO`,
      `C₂H₅OH`,
      `CO₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CH₃CHO`
  },
  {
    question: `Primary alcohols can be obtained from the reaction of the RMgX with:`,
    options: [
      `HCHO`,
      `H₂O`,
      `CO₂`,
      `CH₃CHO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: HCHO`
  },
  {
    question: `Ethyl alcohol can be prepared from Grignard reagent by the reaction of`,
    options: [
      `HCHO`,
      `R₂CO`,
      `RCN`,
      `RCOCl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: HCHO`
  },
  {
    question: `Wileme is`,
    options: [
      `Zn2SiO4`,
      `H2PtCl6`,
      `ZnO`,
      `ZnOFe2O3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Zn2SiO4`
  },
  {
    question: `The ore concentrated by electromagnetic separation is:`,
    options: [
      `Wolframite`,
      `Haematite`,
      `Casseterite`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Radium is obtained from:`,
    options: [
      `Pitch blende`,
      `Haematite`,
      `Monazite`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Pitch blende`
  },
  {
    question: `Methylene chloride on hydrolysis yields:`,
    options: [
      `HCHO`,
      `CH3CHO`,
      `CHCl3`,
      `CH3COCl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: HCHO`
  },
  {
    question: `Alcohol (CH₃)₂CHCH₂OH cannot be obtained by`,
    options: [
      `HCHO + (CH₃)₂CHCH₂MgX`,
      `CH₂-CH₂ + (CH₃)₂CHMgX`,
      `(CH₃)₂CHCH₂CH₂MgX + O₂ air`,
      `(CH₃)₂CHCHO + CH₃MgX`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (CH₃)₂CHCHO + CH₃MgX`
  },
  {
    question: `197. A mixture of \\(\\mathrm{Al(OH)}_{3}\\) and \\(\\mathrm{Fe(OH)}_{3}\\) can be separated easily by treating it with:`,
    options: [
      `HCl`,
      `\\(\\mathrm{NH}_{4}\\mathrm{OH}\\)`,
      `\\(\\mathrm{HNO}_{3}\\)`,
      `\\(\\mathrm{NaOH}\\)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: \\(\\mathrm{NaOH}\\)`
  },
  {
    question: `The action of halogen acids on an ether, has the following order of reactivity:`,
    options: [
      `HCl > HBr > HI`,
      `HI > HCl > HBr`,
      `HI > HBr > HCl`,
      `HCl > HI > HBr`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: HI > HBr > HCl`
  },
  {
    question: `Order of reactivity of halogen acids towards an alcohol is`,
    options: [
      `HCl > HBr > HI`,
      `HBr > HI > HCl`,
      `HI > HBr > HCl`,
      `HI > HCl > HBr`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: HI > HBr > HCl`
  },
  {
    question: `Which reagent is useful in increasing the carbon chain of an alkyl halide?`,
    options: [
      `HCN`,
      `KCN`,
      `NH4CN`,
      `AgCN`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: KCN`
  },
  {
    question: `Carbolic acid is`,
    options: [
      `HCOOH`,
      `CH₃COOH`,
      `C₆H₅COOH`,
      `C₆H₅OH`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: C₆H₅OH`
  },
  {
    question: `5. Electric cookers have a coating of ....that protects them against fire.`,
    options: [
      `Heavy lead`,
      `Magnesium oxide`,
      `Zinc oxide`,
      `Sodium sulphate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Magnesium oxide`
  },
  {
    question: `Cinnabar is an ore of`,
    options: [
      `Pb`,
      `Hg`,
      `Cu`,
      `Zn`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Hg`
  },
  {
    question: `198. Gypsum on heating at \\(120 - 230^{\\circ}C\\) gives:`,
    options: [
      `Hemihydrate`,
      `Monohydrate`,
      `Dehydrates`,
      `Anhydrous salt`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Hemihydrate`
  },
  {
    question: `The metal obtained by self reduction process is:`,
    options: [
      `Cu`,
      `Hg`,
      `Pb`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `102. Which of the following hydrogen compounds is most ionic?`,
    options: [
      `HF`,
      `CsH`,
      `HI`,
      `LiH`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CsH`
  },
  {
    question: `The correct order of reactivity of hydrogen halides with ethyl alcohol is`,
    options: [
      `HF > HCl > HBr > HI`,
      `HCl > HBr > HF > HI`,
      `HBr > HCl > HI > HF`,
      `HI > HBr > HCl > HF`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: HI > HBr > HCl > HF`
  },
  {
    question: `Metals occur in the native form because of their:`,
    options: [
      `High electronegativity`,
      `High reactivity`,
      `Low reactivity`,
      `Low density`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Low reactivity`
  },
  {
    question: `Metal occur in the native from because of their`,
    options: [
      `High electronegativity`,
      `High reactivity`,
      `Low reactivity`,
      `Low density`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Low reactivity`
  },
  {
    question: `276. The main reason for using a mercury electrolytic cell in NaOHmanufacture is that:`,
    options: [
      `Hg is toxic`,
      `\\(\\mathrm{Na}^+\\) is discharged at cathode`,
      `Hg has a high vapour pressure`,
      `Hg is a good conductor of electricity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: \\(\\mathrm{Na}^+\\) is discharged at cathode`
  },
  {
    question: `For the reaction, C2H5OH + HX -> C2H5X (with ZnX2), the order of reactivity is:`,
    options: [
      `HI > HCl > HBr`,
      `HI > HBr > HCl`,
      `HCl > HBr > HI`,
      `HBr > HI > HCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: HI > HBr > HCl`
  },
  {
    question: `The electrolytic reduction technique is used in the extraction of:`,
    options: [
      `Highly electronegative elements`,
      `Highly electropositive elements`,
      `Metalloids`,
      `Transition metals`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Highly electropositive elements`
  },
  {
    question: `28. Ionic compound \\(\\mathrm{BaSO_4}\\) is insoluble in water due to`,
    options: [
      `High lattice energy`,
      `Low lattice energy`,
      `Low hydration energy`,
      `Both (a) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Both (a) and (c)`
  },
  {
    question: `42. Ca, Sr and Ba dissolve in liquid ammonia giving a...`,
    options: [
      `Highly conducting`,
      `Highly reducing`,
      `Paramagnetic`,
      `All are correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All are correct`
  },
  {
    question: `The process of concentrating silver ore is based on its solubility in:`,
    options: [
      `HCl`,
      `HNO3`,
      `KCN`,
      `NaOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: KCN`
  },
  {
    question: `Vinyl carbinol is:`,
    options: [
      `HOH₂C-CH=CH₂`,
      `CH₃C(OH)=CH₂`,
      `CH₃-CH=CH-OH`,
      `CH₃CH₂OH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: HOH₂C-CH=CH₂`
  },
  {
    question: `Magnetic separation is used for increasing concentration of the following`,
    options: [
      `Calcite`,
      `Horn silver`,
      `Magnesite`,
      `Haematite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Haematite`
  },
  {
    question: `Which one of the following ores is a chloride?`,
    options: [
      `Bauxite`,
      `Horn silver`,
      `Zincite`,
      `Felspar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Horn silver`
  },
  {
    question: `11. Initial setting of cement is mainly due to`,
    options: [
      `Hydration and gel formation`,
      `Dehydration and gel formation`,
      `Hydration and hydrolysis`,
      `Dehydration and oxidation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Hydration and gel formation`
  },
  {
    question: `In the modern blast furnaces, the charge consists of a mixture of`,
    options: [
      `Iron pyrites + bituminous coal`,
      `Hydrated iron oxides + dolomite + coke`,
      `Calcined iron oxides + limestone + coke`,
      `Calcined iron oxides + lime + anthracite coal`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Calcined iron oxides + limestone + coke`
  },
  {
    question: `Acidity of phenol is due to`,
    options: [
      `Hydrogen bonding`,
      `Phenolic group`,
      `Benzene ring`,
      `Resonance stabilisation of its anion`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Resonance stabilisation of its anion`
  },
  {
    question: `The second most common element on the earth is:`,
    options: [
      `Silicon`,
      `Hydrogen`,
      `Nitrogen`,
      `Oxygen`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Silicon`
  },
  {
    question: `High purity copper metal is obtained by:`,
    options: [
      `Carbon reduction`,
      `Hydrogen reduction`,
      `Electrolytic reduction`,
      `Thermite process`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Electrolytic reduction`
  },
  {
    question: `If methanol vapour is passed over heated copper at 300°C, it forms formaldehyde by:`,
    options: [
      `Hydrogenation`,
      `Dehydrogenation`,
      `Dehydration`,
      `Oxidation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Dehydrogenation`
  },
  {
    question: `Which process does not occur during formation of CHCl3 from C2H5OH and bleaching powder?`,
    options: [
      `Hydrolysis`,
      `Oxidation`,
      `Elimination`,
      `Chlorination`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Elimination`
  },
  {
    question: `Arrange the following in order of decreasing acidic strength: p-nitrophenol (I), p-cresol (II), m-cresol (III), phenol (IV)`,
    options: [
      `I > II > III > IV`,
      `IV > III > II > I`,
      `I > III > II > IV`,
      `III > II > I > IV`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: I > II > III > IV`
  },
  {
    question: `Dehydration of the following in increasing order is`,
    options: [
      `I<II<III<IV`,
      `II<III<IV<I`,
      `I<II<III<IV`,
      `I<IV<II<III`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: I<II<III<IV`
  },
  {
    question: `Spelter is:`,
    options: [
      `Impure zinc`,
      `Impure iron`,
      `Pure zinc`,
      `Impure Al`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Impure zinc`
  },
  {
    question: `When the sample of Cu with Zn impurity is to be purified by electrolysis, the appropriate electrodes are: Cathode Anode`,
    options: [
      `Pure Zn / Pure Cu`,
      `Impure sample / Pure Cu`,
      `Impure Zn / Impure sample`,
      `Pure Cu / Impure sample`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Pure Cu / Impure sample`
  },
  {
    question: `221. In which of the following, sodium carbonate is not used?`,
    options: [
      `In soap making`,
      `In paper making`,
      `In tyre making`,
      `In baking of bread`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: In tyre making`
  },
  {
    question: `168. Which of the following statements is false regarding saline hydrides?`,
    options: [
      `In the molten state they conduct electricity`,
      `They dissolve in water giving off hydrogen`,
      `They are used as reducing agents`,
      `They are covalent in nature`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: They are covalent in nature`
  },
  {
    question: `Which is incorrect as the uses of lime stone in industries are concerned?`,
    options: [
      `For making cement`,
      `In the extraction of Sn from its ore`,
      `In the extraction of Fe from its ore`,
      `In the manufacture of glass`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: In the extraction of Sn from its ore`
  },
  {
    question: `79. The solubility in water of sulphates down the Be group is Be > Mg > Ca > Sr > Ba. This is due to:`,
    options: [
      `Increase in m. p.`,
      `High ionisation energy`,
      `Higher co-ordination number`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Higher co-ordination number`
  },
  {
    question: `Electrolytic reduction of alumina to aluminium by Hall-Heroult process is carried out`,
    options: [
      `In the presence of NaCl`,
      `In the presence of fluorite`,
      `In the presence of cryolite which forms a melt with lower melting point`,
      `In the presence of cryolite which forms a melt with high melting point`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: In the presence of cryolite which forms a melt with lower melting point`
  },
  {
    question: `Alloy formation gives rise to:`,
    options: [
      `Decrease in corrosion`,
      `Increase in hardness`,
      `Decrease in conductivity`,
      `All are correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All are correct`
  },
  {
    question: `Chloroform on reaction with acetone yields:`,
    options: [
      `Insecticide`,
      `Hypnotic agent`,
      `Analgesic`,
      `Isocyanide`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Hypnotic agent`
  },
  {
    question: `In fermentation by zymase, alcohol and CO₂ are obtained from`,
    options: [
      `Invert sugar`,
      `Glucose`,
      `Fructose`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Glucose`
  },
  {
    question: `204. Hypo is used in:`,
    options: [
      `Iodimetric titrations`,
      `Iodometric titrations`,
      `Photography`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `149. Chile saltpetre is the ore of:`,
    options: [
      `Iodine`,
      `Bromine`,
      `Sodium`,
      `Magnesium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium`
  },
  {
    question: `In metallurgy, flux is a substance used to convert`,
    options: [
      `Soluble impurities to insoluble impurities`,
      `Infusible impurities to fusible material`,
      `Fusible impurities to infusible impurities`,
      `Mineral into silicate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Infusible impurities to fusible material`
  },
  {
    question: `175. Which of the following is not correct?`,
    options: [
      `Iodine oxidises sodium thiosulphate to sodium tetrathionate.`,
      `Sodium thiosulphate is soluble in water.`,
      `Ozone is used to identify the presence of unsaturation in alkenes.`,
      `Sodium thiosulphate reacts with iodine to form sodium sulphate.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Sodium thiosulphate reacts with iodine to form sodium sulphate.`
  },
  {
    question: `Phenol gives characteristic colouration with`,
    options: [
      `Iodine solution`,
      `Bromine water`,
      `Aqueous FeCl₃ solution`,
      `Ammonium hydroxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Aqueous FeCl₃ solution`
  },
  {
    question: `Iodoform gives a precipitate with AgNO3 on heating but chloroform does not because:`,
    options: [
      `Iodoform is ionic`,
      `Chloroform is covalent`,
      `C-I bond in iodoform is weak and C-Cl bond in chloroform is strong`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: C-I bond in iodoform is weak and C-Cl bond in chloroform is strong`
  },
  {
    question: `One of the following metals forms a volatile compound and this property is taken advantage for its extraction. This metals is`,
    options: [
      `Cobalt`,
      `Iron`,
      `Tungsten`,
      `Nickel`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Nickel`
  },
  {
    question: `Roasting is used in the extraction of:`,
    options: [
      `Galena`,
      `Iron pyrite`,
      `Copper glance`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `195. Lithium iodide is:`,
    options: [
      `Ionic`,
      `Covalent`,
      `Partially covalent`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Covalent`
  },
  {
    question: `The existence of two or more crystalline forms of the same substance is called:`,
    options: [
      `Polymorphism`,
      `Isomerism`,
      `Homologues`,
      `Isomorphism`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Polymorphism`
  },
  {
    question: `Two compounds having the same crystal structures and analogous formulae, are called:`,
    options: [
      `Isomorphous`,
      `Isotopes`,
      `Isomers`,
      `Isobars`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Isomorphous`
  },
  {
    question: `Furnaces are lined with calcium oxide because:`,
    options: [
      `It gives off oxygen on heating`,
      `It gives light on heating`,
      `It is refractory and basic`,
      `It is not affected by acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: It is refractory and basic`
  },
  {
    question: `Reaction of t-butyl bromide with sodium methoxide produces:`,
    options: [
      `Isobutane`,
      `Isobutylene`,
      `Sodium t-butoxide`,
      `t-butyl methyl ether`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Isobutylene`
  },
  {
    question: `Alcoholic beverages contain`,
    options: [
      `Isopropyl alcohol`,
      `n-propyl alcohol`,
      `Ethyl alcohol`,
      `Methyl alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ethyl alcohol`
  },
  {
    question: `Which of the following will not give iodoform test?`,
    options: [
      `Isopropyl alcohol`,
      `Ethanol`,
      `Ethanal`,
      `Benzyl alcohol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Benzyl alcohol`
  },
  {
    question: `Which of the following is primary halide?`,
    options: [
      `Isopropyl halide`,
      `Sec-butyl halide`,
      `Tert-butyl halide`,
      `Neo-pentyl halide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Neo-pentyl halide`
  },
  {
    question: `71. Sodium is manufactured by the electrolysis of a fused mixture of sodium and calcium chlorides in a steel cell using a graphite anode and an iron cathode. Calcium is not liberated since:`,
    options: [
      `It belongs to a higher group in the periodic table`,
      `It combines with the liberated chlorine to form calcium chloride again`,
      `Its discharge potential under these conditions is higher than that of sodium`,
      `It is more readily fusible than sodium chloride`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Its discharge potential under these conditions is higher than that of sodium`
  },
  {
    question: `192. Common table salt becomes moist and does not pour easily in rainy season because:`,
    options: [
      `It contains magnesium chloride`,
      `It contains magnesium carbonate`,
      `It melts slightly in rainy season`,
      `Sodium chloride is hygroscopic`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: It contains magnesium chloride`
  },
  {
    question: `Electric furnaces are lined with magnesia because:`,
    options: [
      `It is not affected by acids`,
      `It liberates oxygen on heating`,
      `It melts at very high temperature`,
      `It has no effect of electricity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: It melts at very high temperature`
  },
  {
    question: `Which of the following statements is incorrect regarding benzyl chloride?`,
    options: [
      `It gives white precipitate with alcoholic AgNO3`,
      `It is an aromatic compound with substitution in the side chain`,
      `It undergoes nucleophilic substitution reaction`,
      `It is less reactive than vinyl chloride`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: It is less reactive than vinyl chloride`
  },
  {
    question: `73. Which of the following statements is correct for \\(\\mathrm{CsBr}_3\\) ?`,
    options: [
      `It is a covalent compound`,
      `It contains \\(\\mathrm{Cs}^{2 + }\\) and \\(\\mathrm{Br}^{-}\\) ions`,
      `It contains \\(\\mathrm{Cs}^+\\) \\(\\mathrm{Br}^{-}\\) and \\(\\mathrm{Br}_2\\) lattice molecules`,
      `It contains \\(\\mathrm{Cs}^+\\) and \\(\\mathrm{Br}_3\\) ions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: It contains \\(\\mathrm{Cs}^+\\) and \\(\\mathrm{Br}_3\\) ions`
  },
  {
    question: `Before introducing FeO in blast furnace, it is converted to Fe2O3 by roasting so that:`,
    options: [
      `It may not be removed as slag with silica`,
      `It may not evaporate in the furnace`,
      `Presence of it may increase the m. p. of charge`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: It may not be removed as slag with silica`
  },
  {
    question: `Glycerol is highly viscous. It is due to the fact that:`,
    options: [
      `It is highly polar`,
      `It forms extensive H-bonding`,
      `It shows intramolecular H-bonding`,
      `It has high b.p.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: It forms extensive H-bonding`
  },
  {
    question: `Chloroform is kept in dark coloured bottles because:`,
    options: [
      `It is inflammable`,
      `It gives a peroxide`,
      `It undergoes rapid chlorination`,
      `It is oxidized to poisonous phosgene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: It is oxidized to poisonous phosgene`
  },
  {
    question: `Which of the following statements about benzyl chloride is incorrect?`,
    options: [
      `It is less reactive than alkyl halides`,
      `It can be oxidized to benzaldehyde by boiling with copper nitrate solution`,
      `It is a lachrymatory liquid and answers Beilstein's test`,
      `It gives a white precipitate with alcoholic silver nitrate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: It is less reactive than alkyl halides`
  },
  {
    question: `The luster of a metal is due to`,
    options: [
      `Its high polishing`,
      `Its high density`,
      `Its chemical inertness`,
      `Presence of free electrons`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Presence of free electrons`
  },
  {
    question: `59. Which out of the following statements is not correct for anhydrous calcium chloride?`,
    options: [
      `It is prepared by heating hydrated calcium chloride above 533 K`,
      `It is used for drying alcohols and \\(\\mathrm{NH}_3\\)`,
      `It is used as a dehydrating agent to control snow and ice on highway and pavements`,
      `When mixed in concrete, it gives quicker initial setting and improves its strength`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: It is used for drying alcohols and \\(\\mathrm{NH}_3\\)`
  },
  {
    question: `Metal which can be extracted from all the three dolomite, magnesite and caramellite is`,
    options: [
      `Na`,
      `K`,
      `Mg`,
      `Ca`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg`
  },
  {
    question: `Electrolysis of fused carnalite gives:`,
    options: [
      `Mg`,
      `K`,
      `K and CO2`,
      `K, Mg and Cl2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: K, Mg and Cl2`
  },
  {
    question: `Chile saltpetre is the ore of:`,
    options: [
      `Mg`,
      `K`,
      `Na`,
      `Ca`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Na`
  },
  {
    question: `240. Potash alum is used in purification of water because:`,
    options: [
      `It kills the micro-organisms`,
      `It precipitates the colloidal matter`,
      `It removes the hardness of water`,
      `It catalyses the removal of impurities`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: It precipitates the colloidal matter`
  },
  {
    question: `Carbon reduction is used for the extraction of:`,
    options: [
      `Fe`,
      `K`,
      `Al`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fe`
  },
  {
    question: `169. Among the alkali metals caesium is the most reactive because`,
    options: [
      `Its incomplete shell is nearest to the nucleus.`,
      `It has a single electrons in the valence shell.`,
      `It is the heaviest alkali metal.`,
      `The outermost electron is more loosely bound than the outermost electron of the other alkali metals.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: The outermost electron is more loosely bound than the outermost electron of the other alkali metals.`
  },
  {
    question: `The antiseptic character of iodoform is due to:`,
    options: [
      `Its poisonous nature`,
      `Unpleasant smell`,
      `Liberation of free iodine`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Liberation of free iodine`
  },
  {
    question: `67. Strongest reducing agent among the following is:`,
    options: [
      `K`,
      `Na`,
      `Al`,
      `Mg`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: K`
  },
  {
    question: `Formula for agate is`,
    options: [
      `Na2SiO3`,
      `K2O.SiO2.Al2O2`,
      `SiO2`,
      `CaF2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: SiO2`
  },
  {
    question: `100. Which of the statements is not true?`,
    options: [
      `K2Cr2O7 solution in acidic medium is orange`,
      `K2Cr2O7 solution becomes yellow on increasing the pH beyond 7`,
      `On passing 𝐻2𝑆 through acidified K2Cr2O7 solution, a milky colour is observed`,
      `Na2Cr2O7 is perferred over K2Cr2O7 in volumetric analysis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Na2Cr2O7 is perferred over K2Cr2O7 in volumetric analysis`
  },
  {
    question: `Main ore of aluminium is:`,
    options: [
      `Cryolite`,
      `Kaolin`,
      `Bauxite`,
      `Felspar`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Bauxite`
  },
  {
    question: `104. The salt added to table salt to make it flow freely in rainy season is:`,
    options: [
      `KCl`,
      `NH4Cl`,
      `Ca3(PO4)2`,
      `NaHCO3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ca3(PO4)2`
  },
  {
    question: `Ether in contact with air for a long time form peroxides. The presence of peroxide in either can be tested by adding Fe²⁺ ion and then adding`,
    options: [
      `KCN`,
      `SnCl₂`,
      `HgCl₂`,
      `KCNS`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: KCNS`
  },
  {
    question: `268. In curing cement plasters water is sprinkled from time to time. This helps in`,
    options: [
      `Keeping it cool`,
      `Developing interlocking needle-like crystals of hydrated silicates`,
      `Hydrating sand and gravel mixed with cement`,
      `Converting sand into silicic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Developing interlocking needle-like crystals of hydrated silicates`
  },
  {
    question: `When MnO2 is fused with KOH, a coloured compound is formed, the compound and its colour is:`,
    options: [
      `K2MnO4, purple green`,
      `KMnO4, purple`,
      `Mn2O3, brown`,
      `Mn3O4, black`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: K2MnO4, purple green`
  },
  {
    question: `Indian saltpetre is:`,
    options: [
      `KNO2`,
      `KNO3`,
      `NaCl`,
      `Na2CO3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: KNO3`
  },
  {
    question: `The reaction given below is called: C₂H₅OH + SOCl₂ ⟶ C₂H₅Cl + SO₂ + HCl`,
    options: [
      `Kharash effect`,
      `Wurtz reaction`,
      `Darzen's reaction`,
      `Hunsdicker reaction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Darzen's reaction`
  },
  {
    question: `Purity of ether before using it as anaesthetic agent is tested by:`,
    options: [
      `KI + starch`,
      `CuSO₄`,
      `H₂SO₄`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: KI + starch`
  },
  {
    question: `Which reagent is more effective to convert but-2-enol to but-2-enol?`,
    options: [
      `KMnO₄`,
      `NaBH₄`,
      `H₂/Pt`,
      `K₂Cr₂O₇/H₂SO₄`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: NaBH₄`
  },
  {
    question: `Which reagent will convert propionic acid to propanol-1?`,
    options: [
      `KMnO₄`,
      `LiAlH₄`,
      `Cr₂O₃`,
      `MnO₂`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: LiAlH₄`
  },
  {
    question: `37. Among the following, which has minimum solubility in water?`,
    options: [
      `KOH`,
      `CsOH`,
      `LiOH`,
      `RbOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: LiOH`
  },
  {
    question: `Vicinal and geminal dihalides can be distinguished by:`,
    options: [
      `KOH(aq.)`,
      `KOH(alc.)`,
      `Zn dust`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: KOH(aq.)`
  },
  {
    question: `Phenol can be converted to σ-hydroxybenzaldehyde by`,
    options: [
      `Kolbe's reaction`,
      `Reimer-Tiemann reaction`,
      `Wurtz reaction`,
      `Cannizaro reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Reimer-Tiemann reaction`
  },
  {
    question: `Structure of diethyl ether can be confirmed by:`,
    options: [
      `Kolbe's synthesis`,
      `Frankland's synthesis`,
      `Wurtz's synthesis`,
      `Williamson's synthesis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Williamson's synthesis`
  },
  {
    question: `The reaction, C₂H₅ONa + C₂H₅I → C₂H₅OC₂H₅ + NaI is known as`,
    options: [
      `Kolbe's synthesis`,
      `Wurtz's synthesis`,
      `Williamson's synthesis`,
      `Grignard's synthesis`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Williamson's synthesis`
  },
  {
    question: `Which is not employed for refining of metal?`,
    options: [
      `Poling`,
      `Leaching`,
      `Electrolysis`,
      `Liquation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Leaching`
  },
  {
    question: `Widespread deaths due to liquor poisoning occurs due to presence of:`,
    options: [
      `Lead compounds in liquor`,
      `Methyl alcohol in liquor`,
      `Ethyl alcohol in liquor`,
      `Carbonic acid in liquor`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Methyl alcohol in liquor`
  },
  {
    question: `Diethyl ether may behave as:`,
    options: [
      `Lewis acid`,
      `Lewis base`,
      `Oxidising agent`,
      `Reducing agent`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Lewis base`
  },
  {
    question: `Ethers are very good solvent for which type of compounds?`,
    options: [
      `Lewis base`,
      `Acids`,
      `Lewis acid`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Lewis acid`
  },
  {
    question: `24. The outermost electron is most loosely held in:`,
    options: [
      `Li`,
      `Na`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cs`
  },
  {
    question: `51. The highest oxidation potential stands for:`,
    options: [
      `Li`,
      `Be`,
      `Ba`,
      `Ra`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li`
  },
  {
    question: `69. Which alkali metal is most metallic in character?`,
    options: [
      `Li`,
      `Na`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cs`
  },
  {
    question: `76. The alkali metal that reacts with nitrogen directly to form nitride is`,
    options: [
      `Li`,
      `K`,
      `Na`,
      `Rb`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li`
  },
  {
    question: `129. The ashes of plants contain alkali metals, \\(90\\%\\) of which is:`,
    options: [
      `Li`,
      `K`,
      `Na`,
      `Rb`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: K`
  },
  {
    question: `191. Which one of the alkali metals, forms only, the normal oxide, \\(\\mathrm{M}_{2}\\mathrm{O}\\) on heating in air?`,
    options: [
      `Li`,
      `Na`,
      `Rb`,
      `K`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li`
  },
  {
    question: `200. Which ion has closed shell electronic configuration?`,
    options: [
      `Li`,
      `\\(\\mathrm{Li^{+}}\\)`,
      `\\(\\mathrm{Li}^{2 + }\\)`,
      `\\(\\mathrm{Li}^{-}\\)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: \\(\\mathrm{Li^{+}}\\)`
  },
  {
    question: `229. Which of the following reacts with water with high rate?`,
    options: [
      `Li`,
      `Rb`,
      `Na`,
      `K`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Rb`
  },
  {
    question: `253. Magnesium has polarising power closer to that of:`,
    options: [
      `Li`,
      `Na`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li`
  },
  {
    question: `271. Which element of IA group is most abundantly found in combined state?`,
    options: [
      `Li`,
      `Na`,
      `Cs`,
      `K`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Na`
  },
  {
    question: `Load stone is one ore of`,
    options: [
      `Iron`,
      `Lead`,
      `Silicon`,
      `Tin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Iron`
  },
  {
    question: `Electrometallurgical process (electrolysis of fused salt) is employed to extract:`,
    options: [
      `Iron`,
      `Lead`,
      `Sodium`,
      `Silver`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium`
  },
  {
    question: `86. The ion having maximum value of hydration energy is:`,
    options: [
      `Li+`,
      `Na+`,
      `K+`,
      `Cs+`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li+`
  },
  {
    question: `123. Which of the following alkali metal ion in aqueous solution is the best conductor of electricity?`,
    options: [
      `Li+`,
      `Na+`,
      `Cs+`,
      `K+`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Cs+`
  },
  {
    question: `132. A solid is a compound of group 1 element and it gives a bright red colour in the flame test. The solid is`,
    options: [
      `LiBr`,
      `CsCl`,
      `KCl`,
      `NaCl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: LiBr`
  },
  {
    question: `234. Alkali metal chloride soluble in pyridine is:`,
    options: [
      `LiCl`,
      `CsCl`,
      `NaCl`,
      `KCl`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: LiCl`
  },
  {
    question: `98. The stability of the following alkali metal chlorides follows the order:`,
    options: [
      `LiCl > KCl > NaCl > CsCl`,
      `CsCl > KCl > NaCl > LiCl`,
      `NaCl > KCl > LiCl > CsCl`,
      `KCl > CsCl > NaCl > LiCl`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: KCl > CsCl > NaCl > LiCl`
  },
  {
    question: `When copper pyrites is roasted in excess if air, a mixture of CuO + FeO is formed. FeO is present as impurities. This can be removed as slag during reduction of CuO. The flux added to from slag is`,
    options: [
      `SiO2 which is an acid flux`,
      `Lime stone, which is a basic flux`,
      `SiO2 which is basic flux`,
      `CaO, which is basic flux`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: SiO2 which is an acid flux`
  },
  {
    question: `Correct statement is`,
    options: [
      `van-Arkel method is used for extraction of Zr`,
      `Limestone is acidic flux`,
      `Dolomite is an ore of Al`,
      `Willemite is carbonate ore`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: van-Arkel method is used for extraction of Zr`
  },
  {
    question: `165. From which mineral Ra is obtained?`,
    options: [
      `Limestone`,
      `Rutile`,
      `Pitch blende`,
      `Haematite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pitch blende`
  },
  {
    question: `99. The solubility of alkali metal hydroxide is`,
    options: [
      `LiOH < KOH < NaOH < RbOH < CsOH`,
      `LiOH < NaOH < KOH < RbOH < CsOH`,
      `CsOH < RbOH < KOH < NaOH < LiOH`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: LiOH < NaOH < KOH < RbOH < CsOH`
  },
  {
    question: `Which is not an iron ore?`,
    options: [
      `Haemite`,
      `Limonite`,
      `Cassiterite`,
      `Magnetite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Cassiterite`
  },
  {
    question: `17. An alloy of \\(\\mathrm{Na} + \\mathrm{K}\\) is:`,
    options: [
      `Liquid at room temperature`,
      `Used in specially designed thermometers`,
      `Both (a) and (b)`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Both (a) and (b)`
  },
  {
    question: `Which of the following ores does not represent the ores of iron?`,
    options: [
      `Cassiterite`,
      `Limonite`,
      `Haematite`,
      `Magnetite`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cassiterite`
  },
  {
    question: `The method of concentrating the ore which makes use of the difference in density between ore and impurities is called`,
    options: [
      `Leaching`,
      `Liquation`,
      `Levigation`,
      `Magnetic separation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Levigation`
  },
  {
    question: `4. The element which on burning in air gives peroxide is`,
    options: [
      `Lithium`,
      `Sodium`,
      `Rubidium`,
      `Caesium`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Sodium`
  },
  {
    question: `212. Which statement is false for alkali metals?`,
    options: [
      `Lithium is the strongest reducing agent`,
      `Sodium is amphoteric in nature`,
      `\\(\\mathrm{Li}^{+}\\) is exceptionally small`,
      `All alkali metals give blue solution in liquid ammonia`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Sodium is amphoteric in nature`
  },
  {
    question: `Enzymes are:`,
    options: [
      `Living organisms`,
      `Dead organisms`,
      `Complex nitrogenous substances produced from living cells`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Complex nitrogenous substances produced from living cells`
  },
  {
    question: `The factor adversely affecting the process of fermentation is:`,
    options: [
      `Low concentration of sugar`,
      `High concentration of sugars`,
      `Presence of ammonium salts`,
      `Presence of air`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: High concentration of sugars`
  },
  {
    question: `39. Sodium chloride imparts a golden yellow colour to the Bunsen flame. This can be interpreted due to:`,
    options: [
      `Low ionization potential of sodium`,
      `Photosensitivity of sodium`,
      `Sublimation of metallic sodium to give yellow vapour`,
      `Emission of excess of energy absorbed as a radiation in the visible region`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Emission of excess of energy absorbed as a radiation in the visible region`
  },
  {
    question: `222. Alkaline earth metals are not found free in nature because of their:`,
    options: [
      `Low melting point`,
      `High boiling point`,
      `Thermal instability`,
      `Great chemical activity`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Great chemical activity`
  },
  {
    question: `279. In the Down's cell KCl is added in NaCl to:`,
    options: [
      `Lower its m.p.`,
      `Dissolve more of NaCl`,
      `Increase conductivity`,
      `Increase the dissociation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Lower its m.p.`
  },
  {
    question: `272. Alkaline earth metal compounds are less soluble in water than corresponding alkali metal compounds because former have:`,
    options: [
      `Lower lattice energy`,
      `Higher I.P.`,
      `Higher covalent character`,
      `Lower covalent character`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Higher covalent character`
  },
  {
    question: `The region in which metals are found in earth is called:`,
    options: [
      `Atomophil`,
      `Lithophil`,
      `Calcophil`,
      `Sidrophil`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Lithophil`
  },
  {
    question: `206. Magnesium form \\(\\mathrm{Mg}^{2 + }\\) and not \\(\\mathrm{Mg}^{+}\\) because:`,
    options: [
      `Magnesium (II) carbonate is insoluble in water`,
      `Generally higher oxidation states are preferred by metals`,
      `Ionic radius of \\(\\mathrm{Mg(II)}\\) is smaller than of \\(\\mathrm{Mg(I)}\\)`,
      `Hydration energy of divalent magnesium ion is higher`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Hydration energy of divalent magnesium ion is higher`
  },
  {
    question: `166. Metals belonging to the same group in the periodic table are:`,
    options: [
      `Magnesium and sodium`,
      `Magnesium and copper`,
      `Magnesium and barium`,
      `Magnesium and potassium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Magnesium and barium`
  },
  {
    question: `108. Sodium bicarbonate solution on adding to magnesium sulphate solution forms:`,
    options: [
      `Magnesium bicarbonate`,
      `Magnesium hydroxide`,
      `Basic magnesium carbonate`,
      `Magnesium carbonate`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Magnesium carbonate`
  },
  {
    question: `Chloride ore among the following is:`,
    options: [
      `Malachite`,
      `Magnesite`,
      `Magnetite`,
      `Rock salt`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Rock salt`
  },
  {
    question: `Cryolite`,
    options: [
      `Sodium borofuride`,
      `Magnesium silicate`,
      `Aluminium`,
      `Sodium aluminium fluoride`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Sodium aluminium fluoride`
  },
  {
    question: `Iron ore are dressed by:`,
    options: [
      `Froth floatation process`,
      `Magnetic separation`,
      `Hand picking`,
      `All of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Magnetic separation`
  },
  {
    question: `Which one of the following is a mineral of iron?`,
    options: [
      `Pyrolusite`,
      `Magnetite`,
      `Malachite`,
      `Cassiterite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Magnetite`
  },
  {
    question: `Which of the following is not ore?`,
    options: [
      `Zinc blende`,
      `Malachite`,
      `Bauxite`,
      `Pig iron`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Pig iron`
  },
  {
    question: `An important ore of iron is`,
    options: [
      `Pyrites`,
      `Malachite`,
      `haematite`,
      `Siderite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: haematite`
  },
  {
    question: `Copper can be extracted from`,
    options: [
      `Dolomite`,
      `Malachite`,
      `Galena`,
      `Kupfer nickel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Malachite`
  },
  {
    question: `Sulphide ore is:`,
    options: [
      `Copper pyrites`,
      `Malachite`,
      `Carnallite`,
      `Magnetite`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Copper pyrites`
  },
  {
    question: `The mineral of copper is:`,
    options: [
      `Azurite`,
      `Malachite`,
      `Copper pyrites`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Among the following statements, the incorrect one is`,
    options: [
      `Calamine and siderite are carbonates`,
      `Malachite and azurite are ores of copper`,
      `Argentite and cuprite are oxides`,
      `Zinc blende and pyrites are sulphides`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Argentite and cuprite are oxides`
  },
  {
    question: `An enzyme which brings about the conversion of starch into maltose is known as:`,
    options: [
      `Maltase`,
      `Zymase`,
      `Invertase`,
      `Diastase`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Diastase`
  },
  {
    question: `The enzymes which are used to convert starch into ethyl alcohol are`,
    options: [
      `Maltase, diastase`,
      `Diastase, maltase, zymase`,
      `Invertase, zymase`,
      `Invertase, diastase, maltase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Diastase, maltase, zymase`
  },
  {
    question: `78. Elements of group 1 and group VI in the periodic table have one thing common. That is with the increasing atomic number, the:`,
    options: [
      `Maximum valency increases`,
      `Reactivity increases`,
      `Atomic radius increases`,
      `Oxidizing power increases`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Atomic radius increases`
  },
  {
    question: `2-chlorobutane obtained by chlorination of butane, will be:`,
    options: [
      `meso-form`,
      `Racemic form`,
      `d-form`,
      `l-form`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Racemic form`
  },
  {
    question: `Metal alkoxides contain:`,
    options: [
      `Metal-carbon bond`,
      `Metal-oxygen bond`,
      `Metal-methyl bond`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Metal-oxygen bond`
  },
  {
    question: `Which process is used for the extraction of metals from their sulphide ores?`,
    options: [
      `Electrolysis`,
      `Metal displacement`,
      `Smelting`,
      `Roasting`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Which one of the following gases is liberated when ethyl alcohol is heated with methyl magnesium iodide?`,
    options: [
      `Methane`,
      `Ethane`,
      `Carbon dioxide`,
      `Propane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Methane`
  },
  {
    question: `Methyl alcohol reacts with phosphorus trichloride to form:`,
    options: [
      `Methane`,
      `Methyl chloride`,
      `Acetyl chloride`,
      `Dimethyl ether`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Methyl chloride`
  },
  {
    question: `Which of the following is a gas?`,
    options: [
      `Methane thiol`,
      `Ethane thiol`,
      `Isobutyl thiol`,
      `Propyl thiol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Methane thiol`
  },
  {
    question: `Which of the following alcohols is made by fermentation?`,
    options: [
      `Methanol`,
      `Ethanol`,
      `Glycerol`,
      `Propanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ethanol`
  },
  {
    question: `Ethyl propanoate on reduction with LiAlH₄ yields:`,
    options: [
      `Methanol`,
      `Ethanol and propanol`,
      `Propane`,
      `Mixture of ethanol and methanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ethanol and propanol`
  },
  {
    question: `Which alcohol is most acidic?`,
    options: [
      `Methanol`,
      `Ethanol`,
      `Isopropyl alcohol`,
      `t-butyl alcohol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Methanol`
  },
  {
    question: `Ethyl alcohol is denatured by:`,
    options: [
      `Methanol and formic acid`,
      `KCN`,
      `CH₃OH and C₆H₆`,
      `CH₃OH and pyridine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CH₃OH and pyridine`
  },
  {
    question: `Methylated spirit is:`,
    options: [
      `Methanol containing some pyridine`,
      `Ethanol containing some methanol`,
      `Pure methanol`,
      `95% methanol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ethanol containing some methanol`
  },
  {
    question: `For the preparation tert-butylmethyl ether by Williamson's method the correct choice of reagents is:`,
    options: [
      `Methoxide and tert-butylbromide`,
      `Methanol and 2-bromobutane`,
      `2-butanol and methylbromide`,
      `Tert-butoxide and methylbromide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Tert-butoxide and methylbromide`
  },
  {
    question: `When acetyl chloride is reduced with LiAlH₄, the product formed is:`,
    options: [
      `Methyl alcohol`,
      `Ethyl alcohol`,
      `Acetaldehyde`,
      `Acetone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ethyl alcohol`
  },
  {
    question: `Which of the following ketones will not respond to iodoform test?`,
    options: [
      `Methyl isopropyl ketone`,
      `Ethyl isopropyl ketone`,
      `Dimethyl ketone`,
      `2-hexanone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ethyl isopropyl ketone`
  },
  {
    question: `138. The most reactive element among the following is:`,
    options: [
      `Mg`,
      `Ca`,
      `Sr`,
      `Ba`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ba`
  },
  {
    question: `Ore pitch blend is main source of`,
    options: [
      `Th`,
      `Mg`,
      `Ge`,
      `Ce`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Th`
  },
  {
    question: `The lightest metal is:`,
    options: [
      `Li`,
      `Mg`,
      `Ca`,
      `Na`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Li`
  },
  {
    question: `Blood haemoglobin contains:`,
    options: [
      `Al`,
      `Mg`,
      `Cu`,
      `Fe`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Fe`
  },
  {
    question: `63. Which of the following is incorrect?`,
    options: [
      `Mg burns in air releasing dazzling light rich in UV rays`,
      `\\(\\mathrm{CaCl}_2\\cdot 6\\mathrm{H}_2\\mathrm{O}\\) when mixed with ice gives, freezing mixture`,
      `Mg cannot form complexes`,
      `Be can form complexes due to its very small size`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg cannot form complexes`
  },
  {
    question: `The ore magnetite is:`,
    options: [
      `MgCO3·CaCO3`,
      `MgCl2·KCl·6H2O`,
      `MgSO4·7H2O`,
      `MgCO3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: MgCO3`
  },
  {
    question: `179. Which will react with acid and alkalies both 𝑖. 𝑒., (amphoteric)`,
    options: [
      `MgO`,
      `CaO`,
      `BaO`,
      `BeO`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: BeO`
  },
  {
    question: `Calamine is`,
    options: [
      `CaCO3`,
      `MgCO3`,
      `ZnCO3`,
      `CaCO3 + CaO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: ZnCO3`
  },
  {
    question: `Lepidolite, a lithium ore, also contains:`,
    options: [
      `Ru`,
      `MgSO4`,
      `Na`,
      `Cs`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Na`
  },
  {
    question: `The chemical composition of carnalite is:`,
    options: [
      `KCl·MgCl2·6H2O`,
      `MgSO4·7H2O`,
      `MgCO3·7H2O`,
      `MgCO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: KCl·MgCl2·6H2O`
  },
  {
    question: `Acid catalysed hydration of alkenes except ethene leads to the formation of`,
    options: [
      `Mixture of secondary and tertiary alcohols`,
      `Mixture of primary and secondary alcohols`,
      `Secondary or tertiary alcohol`,
      `Primary alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Secondary or tertiary alcohol`
  },
  {
    question: `Which is the salt of an organic acid?`,
    options: [
      `Rochelle salt`,
      `Microcosmic salt`,
      `Mohr's salt`,
      `Glauber's salt`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Rochelle salt`
  },
  {
    question: `The b.p. of alcohols are...than corresponding thiols.`,
    options: [
      `More`,
      `Less`,
      `Same`,
      `Either of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: More`
  },
  {
    question: `The SN1 reactivity of ethyl chloride is:`,
    options: [
      `More or less equal to that of benzyl chloride`,
      `Less than that of benzyl chloride`,
      `More or less equal to that of chlorobenzene`,
      `Less than that of chlorobenzene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Less than that of benzyl chloride`
  },
  {
    question: `Naturally occurring substances from which a metal can be profitably (or economically) extracted are called`,
    options: [
      `Ores`,
      `Mineral`,
      `Salts`,
      `Gangue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ores`
  },
  {
    question: `In the electrolysis of alumina, cryolite is added to:`,
    options: [
      `Lower the melting point of alumina and to increase the electrical conductivity`,
      `Minimise the anode effect`,
      `Remove impurities from alumina`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Lower the melting point of alumina and to increase the electrical conductivity`
  },
  {
    question: `Cassiterite is an ore of`,
    options: [
      `Sb`,
      `Mn`,
      `Sn`,
      `Ni`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sn`
  },
  {
    question: `Which of the following does not answer iodoform test?`,
    options: [
      `n-butyl alcohol`,
      `Acetophenone`,
      `Acetaldehyde`,
      `Ethylmethyl ketone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: n-butyl alcohol`
  },
  {
    question: `Wulfenite (a yellow-red mineral) having waxy lustre occur in lead ores, is an important source of:`,
    options: [
      `Sulphur`,
      `Molybdenum`,
      `Helium`,
      `Lead`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Molybdenum`
  },
  {
    question: `116. Which alkali metal is frequently used in solar cells?`,
    options: [
      `Na`,
      `Li`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cs`
  },
  {
    question: `117. Which gives apple green colour in fireworks?`,
    options: [
      `Na`,
      `K`,
      `Ba`,
      `Ca`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ba`
  },
  {
    question: `120. In the replacement reaction ... The reaction will be most favourable if \\(M\\) happens to be:`,
    options: [
      `Na`,
      `K`,
      `Rb`,
      `Li`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Rb`
  },
  {
    question: `172. Chlorophyll contains:`,
    options: [
      `Na`,
      `K`,
      `Mg`,
      `Mn`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mg`
  },
  {
    question: `The following equation represents a method of purification of nickel by, Ni + 2CO →(320K) Ni(CO)4 →(420K) Ni + 4CO. This method is:`,
    options: [
      `Cuplation`,
      `Mond's process`,
      `Van Arkel method`,
      `Zone refining`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Mond's process`
  },
  {
    question: `Smelting is done in:`,
    options: [
      `Blast furnace`,
      `Muffle furnace`,
      `Open hearth furnace`,
      `Electric furnace`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Blast furnace`
  },
  {
    question: `The process of calcination and roasting are carried out in:`,
    options: [
      `Blast furnace`,
      `Muffle furnace`,
      `Reverberatory furnace`,
      `Open hearth furnace`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Reverberatory furnace`
  },
  {
    question: `In Serpek's process, by product obtained in the purification of bauxite is:`,
    options: [
      `Al2O3`,
      `N2`,
      `NH3`,
      `None`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: NH3`
  },
  {
    question: `103. Which sequence of reactions shows correct chemical relation between sodium and its compounds?`,
    options: [
      `Na + O2 →Na2O → NaCl → Na2CO3 → Na`,
      `Na → Na2O → NaOH → Na2CO3 → Na`,
      `Na + H2O ⟶NaOH → NaCl → Na2CO3 → Na`,
      `Na + H2O ⟶NaOH → Na2CO3 → NaCl → Na (molten electrolysis)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Na + H2O ⟶NaOH → Na2CO3 → NaCl → Na (molten electrolysis)`
  },
  {
    question: `174. Which of the following pairs of substances would give same gaseous product in reaction with water?`,
    options: [
      `Na and Na2O2`,
      `Ca and CaH2`,
      `Ca and CaO`,
      `Ba and BaO2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ca and CaH2`
  },
  {
    question: `For drying ether sodium metal can be used, but it cannot be used for drying ethyl alcohol because:`,
    options: [
      `Na is very reactive`,
      `Ether reacts easily with Na`,
      `Ethyl alcohol reacts with sodium metal`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Ethyl alcohol reacts with sodium metal`
  },
  {
    question: `Lepidolite is an ore of:`,
    options: [
      `K`,
      `Na`,
      `Li`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `The cyanide process is used for obtaining`,
    options: [
      `Cu`,
      `Na`,
      `Zn`,
      `Ag`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ag`
  },
  {
    question: `107. When Na reacts with liquid NH3 the following substance is formed`,
    options: [
      `Na(NH3)𝑥]−`,
      `[𝑒(NH3)𝑦]−`,
      `NaNH2`,
      `Na𝑥(NH3)𝑦`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: [𝑒(NH3)𝑦]−`
  },
  {
    question: `170. Soda ash is chemically:`,
    options: [
      `Na2CO3. H2O`,
      `NaOH`,
      `NaHCO3`,
      `Na2CO3 (anhydrous)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Na2CO3 (anhydrous)`
  },
  {
    question: `173. Oxygen can be obtained by heating:`,
    options: [
      `Na2O`,
      `Fe2O3`,
      `Fe3O4`,
      `BaO2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: BaO2`
  },
  {
    question: `In the Hall's process for extraction of Al, the ore is fused with:`,
    options: [
      `NaHCO3`,
      `Na2CO3`,
      `NaF`,
      `Na3AlF6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Na2CO3`
  },
  {
    question: `Alcoholic fermentation of sugar gives 3% glycerol. The yield can be increased to 25% if fermentation is made in presence of:`,
    options: [
      `Na₂SO₄`,
      `Na₃PO₄`,
      `Na₂S`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Na₂S`
  },
  {
    question: `Which substance can be used for drying gases?`,
    options: [
      `CaCO3`,
      `Na2CO3`,
      `CaHCO3`,
      `CaO`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CaO`
  },
  {
    question: `177. The chloride that can be extracted with ether:`,
    options: [
      `NaCl`,
      `LiCl`,
      `BaCl2`,
      `CaCl2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: LiCl`
  },
  {
    question: `262. Out of following which compound is used for preservation of wood?`,
    options: [
      `NaCl`,
      `\\(\\mathrm{HgCl}_2\\)`,
      `\\(\\mathrm{ZnCl}_2\\)`,
      `\\(\\mathrm{CaCl}_2\\)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: \\(\\mathrm{CaCl}_2\\)`
  },
  {
    question: `Ethyl alcohol gives ethyl chloride on treatment with:`,
    options: [
      `NaCl`,
      `SOCl2`,
      `Cl2`,
      `KCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: SOCl2`
  },
  {
    question: `Bauxite ore is made up of Al2O3 + SiO2 + TiO2 + Fe2O3. This ore is treated with conc NaOH solution at 500 K and 35 bar pressure for few hours and filtered when hot. In the filtrate, the species present are`,
    options: [
      `NaAl(OH)4 only`,
      `Na2Ti(OH)6 only`,
      `NaAl(OH)4 and Na2SiO3 both`,
      `Na2SiO3 only`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: NaAl(OH)4 only`
  },
  {
    question: `The cryolite is:`,
    options: [
      `Al2O3`,
      `Na3AlF6`,
      `KAlSi3O8`,
      `Al3O2(OH)2O`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Na3AlF6`
  },
  {
    question: `180. Fire extinguishers contain H2SO4 and:`,
    options: [
      `NaHCO3 and Na2CO3`,
      `NaHCO3 solution`,
      `Na2CO3`,
      `CaCO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: NaHCO3 and Na2CO3`
  },
  {
    question: `To distinguish between salicylic acid and phenol one can use`,
    options: [
      `NaHCO₃ solution`,
      `5% NaOH solution`,
      `Neutral FeCl₃`,
      `Bromine water`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: NaHCO₃ solution`
  },
  {
    question: `To dissolve argentite ore which of the following is used?`,
    options: [
      `Na[Ag(CN)2`,
      `NaCN`,
      `NaCl`,
      `HCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: NaCN`
  },
  {
    question: `In order to convert aniline into chlorobenzene the reagent used is`,
    options: [
      `NaNO2/HCl + CuCl`,
      `Cl2/CCl4`,
      `Cl2/AlCl3`,
      `CuCl2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: NaNO2/HCl + CuCl`
  },
  {
    question: `Diethyl ether is decomposed on heating with:`,
    options: [
      `NaOH`,
      `Water`,
      `KMnO₄`,
      `HI`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: HI`
  },
  {
    question: `Sodium ethoxide is obtained by the reaction of ethyl alcohol with:`,
    options: [
      `NaOH`,
      `Na`,
      `NaCl`,
      `NaHCO₃`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Na`
  },
  {
    question: `In froth floatation process many chemicals (frother, collector, activator and depressant) are used. Which is called a frother?`,
    options: [
      `CuSO4`,
      `NaCN + alkali`,
      `Pine oil`,
      `Potassium xanthate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pine oil`
  },
  {
    question: `232. Soda lime is`,
    options: [
      `NaOH`,
      `NaOH and CaO`,
      `CaO`,
      `\\(\\mathrm{Na_2CO_3}\\)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: NaOH and CaO`
  },
  {
    question: `247. Which is most basic in character?`,
    options: [
      `NaOH`,
      `KOH`,
      `RbOH`,
      `LiOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: RbOH`
  },
  {
    question: `269. Which decomposes on heating?`,
    options: [
      `NaOH`,
      `KOH`,
      `LiOH`,
      `CaOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: LiOH`
  },
  {
    question: `89. Black ash is:`,
    options: [
      `NaOH + CaS`,
      `NaHCO3 + CoS`,
      `Na2CO3 + CaS`,
      `Na2CO3 + CoS`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Na2CO3 + CaS`
  },
  {
    question: `181. The raw materials in Solvay process are:`,
    options: [
      `NaOH, CaO and NH3`,
      `Na2CO3, CaCO3 and NH3`,
      `Na2SO4, CaCO3 and NH3`,
      `NaCl, NH3, CaCO3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: NaCl, NH3, CaCO3`
  },
  {
    question: `A mixture of alcohol and ether is called:`,
    options: [
      `Natalite`,
      `Power alcohol`,
      `Peroxide`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Natalite`
  },
  {
    question: `The reaction of neo-pentyl alcohol with concentrated HCl gives`,
    options: [
      `neo-pentyl chloride`,
      `2-chloro-2-methylbutane`,
      `2-methyl-2-butene`,
      `A mixture of neo-pentyl chloride and 2-methyl-2-butene`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: 2-chloro-2-methylbutane`
  },
  {
    question: `From methyl alcohol we get:`,
    options: [
      `Neoprene rubber`,
      `Perspex rubber`,
      `Bakelite a hard plastic`,
      `Sponge rubber`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Perspex rubber`
  },
  {
    question: `Which of the following substances can be used for drying gases?`,
    options: [
      `CaO`,
      `NaHCO3`,
      `CaCO3`,
      `Na2CO3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: CaO`
  },
  {
    question: `Chlorobenzene gives aniline with`,
    options: [
      `NH3/Cu2O`,
      `NH3/H2SO4`,
      `NaNH2`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: NH3/Cu2O`
  },
  {
    question: `CO is used in the metallurgy of:`,
    options: [
      `Cu`,
      `Ni`,
      `Cr`,
      `Pt`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ni`
  },
  {
    question: `Anglesite is an ore of:`,
    options: [
      `Cd`,
      `Ni`,
      `Sb`,
      `Pb`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Pb`
  },
  {
    question: `Primary, secondary and tertiary alcohols are distinguished from one another by`,
    options: [
      `Ninhydrin test`,
      `Tollen's reagent`,
      `Lucas test`,
      `Wittig reaction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Lucas test`
  },
  {
    question: `CO on passing over heated nickel gives:`,
    options: [
      `NiCO3`,
      `Ni(CO)4`,
      `CO2 + H2`,
      `CO + H2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ni(CO)4`
  },
  {
    question: `16. Which substance gives a different flame colouration from the others?`,
    options: [
      `Nitre`,
      `Caustic potash`,
      `Potassium chloride`,
      `Table salt`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Table salt`
  },
  {
    question: `125. The action of dilute \\(\\mathrm{HNO}_3\\) on magnesium gives:`,
    options: [
      `NO`,
      `\\(\\mathrm{H}_2\\)`,
      `\\(\\mathrm{NO}_2\\)`,
      `\\(\\mathrm{NH}_4\\mathrm{NO}_3\\)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: \\(\\mathrm{H}_2\\)`
  },
  {
    question: `van-Arker method of purification of metals involves converting the metal to a`,
    options: [
      `Volatile stable compound`,
      `Non-volatile stable compound`,
      `Volatile unstable compound`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Volatile stable compound`
  },
  {
    question: `Aluminothermic process is used for the extraction of metals, whose oxides are:`,
    options: [
      `Fusible`,
      `Not easily reduced by carbon`,
      `Not easily reduced by hydrogen`,
      `Strongly basic`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Not easily reduced by carbon`
  },
  {
    question: `In blast furnace, the cup and cone arrangement is used:`,
    options: [
      `To escape the gases during charging`,
      `Not to allow the escape of the gases`,
      `To heat the charge with the gases`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: To heat the charge with the gases`
  },
  {
    question: `Phenol is soluble in water because`,
    options: [
      `Of weak hydrogen bonding between phenol and water molecules`,
      `Of intermolecular hydrogen bonding between phenol molecules`,
      `It has a higher boiling point than that of water`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Of weak hydrogen bonding between phenol and water molecules`
  },
  {
    question: `In which of the following bond angles on sp³-hybridized are not contracted due to lone pair of electron?`,
    options: [
      `OF₂`,
      `H₂O`,
      `CH₃OCH₃`,
      `CH₃OH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃OCH₃`
  },
  {
    question: `For one mole of glycerol, how many mole of acetyl chloride are required for complete acetylation?`,
    options: [
      `One`,
      `Two`,
      `Three`,
      `Four`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Three`
  },
  {
    question: `Number of monochloro derivatives obtained when neo-pentane is chlorinated, is`,
    options: [
      `One`,
      `Two`,
      `Three`,
      `Four`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: One`
  },
  {
    question: `182. One mole of magnesium nitride on the reaction with an excess of water gives`,
    options: [
      `One mole of NH3`,
      `Two moles of NH3`,
      `One mole of HNO3`,
      `Two moles of HNO3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Two moles of NH3`
  },
  {
    question: `A compound with molecular formula C₄H₁₀O₃ is converted by the action of acetyl chloride to a compound with molecular weight 190. The original compound has:`,
    options: [
      `One OH group`,
      `Two OH groups`,
      `Three OH groups`,
      `No OH group`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Two OH groups`
  },
  {
    question: `Which set of elements is called chalcogens?`,
    options: [
      `Cl, Br, I`,
      `O, S, Se`,
      `N, P, As`,
      `C, Si, Ge`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: O, S, Se`
  },
  {
    question: `Choose the incorrect statement`,
    options: [
      `Ordinary ethyl alcohol is known as rectified spirit`,
      `The alcohol sold in the market for polishing etc, is known as methylated spirit`,
      `Absolute alcohol is 100% ethanol`,
      `Power alcohol is 100% ethanol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Power alcohol is 100% ethanol`
  },
  {
    question: `Ethylene glycol on oxidation with per-iodic acid gives:`,
    options: [
      `Oxalic acid`,
      `Glyoxal`,
      `Formaldehyde`,
      `Glycollic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Formaldehyde`
  },
  {
    question: `Glycerol is oxidised by bismuth nitrate to produce`,
    options: [
      `Oxalic acid`,
      `Mesooxalic acid`,
      `Glyceric acid`,
      `Glyoxalic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Mesooxalic acid`
  },
  {
    question: `Ethylene reacts with 1% cold alkaline KMnO₄ to give:`,
    options: [
      `Oxalic acid`,
      `Acetone`,
      `Formaldehyde`,
      `Glycol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Glycol`
  },
  {
    question: `Which of the following factors is of no significance for roasting sulphide ores to the oxides and not subjecting the sulphide ores to carbon reduction directly?`,
    options: [
      `Option A missing`,
      `Option B missing`,
      `Option C missing`,
      `Option D missing`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Option C missing`
  },
  {
    question: `The mass of carbon anode consumed (giving only carbon dioxide) in the production of 270 kg of aluminium metal from bauxite by the hall process is (Atomic mass of Al = 27)`,
    options: [
      `Option A missing`,
      `Option B missing`,
      `Option C missing`,
      `Option D missing`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Option D missing`
  },
  {
    question: `When wine is put in air it becomes sour due to:`,
    options: [
      `Oxidation of C₂H₅OH into CH₃COOH`,
      `Bacteria`,
      `Virus`,
      `Formic acid formation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Oxidation of C₂H₅OH into CH₃COOH`
  },
  {
    question: `Chalcogens are:`,
    options: [
      `Hydrocarbons`,
      `Ore forming elements`,
      `Oxide forming elements`,
      `Those having ability to catenate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Ore forming elements`
  },
  {
    question: `When lime stone is heated, carbon dioxide is given off. This operation in metallurgy is known as:`,
    options: [
      `Smelting`,
      `Ore-dressing`,
      `Calcination`,
      `Roasting`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Calcination`
  },
  {
    question: `1-propanol and 2-propanol can be distinguished by`,
    options: [
      `Oxidation with alkaline KMnO₄ followed by reaction with Fehling solution`,
      `Oxidation with acidic dichromate followed by reaction with Fehling solution`,
      `Oxidation by heating with copper followed by reaction with Fehling solution`,
      `Oxidation with concentrated H₂SO₄ followed by reaction with Fehling solution`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Oxidation by heating with copper followed by reaction with Fehling solution`
  },
  {
    question: `186. Setting of plaster of Paris involves`,
    options: [
      `Oxidation with atmospheric oxygen`,
      `Combination with atmospheric \\(\\mathrm{CO}_{2}\\)`,
      `Dehydration`,
      `Hydration to yield another hydrate`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Hydration to yield another hydrate`
  },
  {
    question: `Some time explosion occurs while distilling ethers. It is due to the presence of`,
    options: [
      `Oxide`,
      `Ketones`,
      `Aldehyde`,
      `Peroxides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Peroxides`
  },
  {
    question: `Ethers are not distilled to dryness for fear of explosion. This is due to formation of:`,
    options: [
      `Oxides`,
      `Alcohol`,
      `Ketones`,
      `Peroxides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Peroxides`
  },
  {
    question: `Ethers are quite stable towards:`,
    options: [
      `Oxidizing agents`,
      `Reducing agents`,
      `Na metal`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `64. When sodium chloride solution is electrolysed, the gas that is liberated at the cathode is`,
    options: [
      `Oxygen`,
      `Chlorine`,
      `Hydrogen`,
      `Air`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Hydrogen`
  },
  {
    question: `There are four alcohols P,Q,R and S which have 3, 2, 1 and zero alpha hydrogen atom(s). Which one of the following will not respond to Viktor-Meyer's test?`,
    options: [
      `P`,
      `Q`,
      `R`,
      `S`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: S`
  },
  {
    question: `Plumbo-solvency refers to:`,
    options: [
      `Oxidation of lead to lead oxide`,
      `Oxidation of lead to red lead`,
      `Dissolution of lead in water containing air`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Dissolution of lead in water containing air`
  },
  {
    question: `The commonly used dehydrating agent in the preparation of an ester is:`,
    options: [
      `P₂O₅`,
      `Anhydride CaCl₂`,
      `Anhydride AlCl₃`,
      `Conc. H₂SO₄`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Conc. H₂SO₄`
  },
  {
    question: `Diethyl ether finds its use in medicine as:`,
    options: [
      `Pain killer`,
      `Hypnotic`,
      `Antiseptic`,
      `Anaesthetic`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Anaesthetic`
  },
  {
    question: `In Williamson's synthesis ethoxy ethane is prepared by`,
    options: [
      `Passing ethanol over heated alumina`,
      `Heating sodium ethoxide with ethyl bromide`,
      `Treating ethyl alcohol with excess of H₂SO₄ at 430-440 K`,
      `Heating ethanol with dry Ag₂O`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Heating sodium ethoxide with ethyl bromide`
  },
  {
    question: `Scientific aspect of fermentation was first studied by:`,
    options: [
      `Pasteur`,
      `Brot`,
      `Buchner`,
      `Liebig`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Buchner`
  },
  {
    question: `In alumino-thermic process, aluminium is used as`,
    options: [
      `Reducing agent`,
      `Oxidizing agent`,
      `Solder`,
      `Flux`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Reducing agent`
  },
  {
    question: `Native silver metal forms a water soluble complex with a dilute aqueous solution of NaCN in the presence of`,
    options: [
      `Nitrogen`,
      `Oxygen`,
      `Carbon dioxide`,
      `argon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Oxygen`
  },
  {
    question: `Ethyl alcohol reacts with following to form a compound of fruity smell:`,
    options: [
      `PCl₅`,
      `K₂Cr₂O₇ + H₂SO₄`,
      `CH₃COOH`,
      `CH₃COCH₃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CH₃COOH`
  },
  {
    question: `Galena is an ore of:`,
    options: [
      `Zn`,
      `Pb`,
      `Sn`,
      `Ca`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Pb`
  },
  {
    question: `Mercury is transported in mental containers made up of:`,
    options: [
      `Fe`,
      `Pb`,
      `Zn`,
      `Sn`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Fe`
  },
  {
    question: `Among the following groups of oxides, the group containing oxides that cannot be reduced by carbon to give the respective metals is`,
    options: [
      `Cu2O, K2O`,
      `PbO, Fe3O4`,
      `Fe2O3, ZnO`,
      `CaO, K2O`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: CaO, K2O`
  },
  {
    question: `Which is not a mineral?`,
    options: [
      `Mica`,
      `Peat`,
      `Quartz`,
      `Felspar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Peat`
  },
  {
    question: `Which of the following ore is not concentrated by forth floatation process?`,
    options: [
      `Pyrolusite`,
      `Pentlandite`,
      `Zinc blende`,
      `Copper pyrites`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Pyrolusite`
  },
  {
    question: `Ethyl chloride is converted into diethyl ether by`,
    options: [
      `Perkins reaction`,
      `Grignard reagent`,
      `Wurtz reaction`,
      `Williamson's synthesis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Williamson's synthesis`
  },
  {
    question: `Ethyl alcohol is industrially prepared from the ethylene by:`,
    options: [
      `Permanganate oxidation`,
      `Catalytic reduction`,
      `Absorbing in sulphuric acid followed by hydrolysis`,
      `Fermentation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Absorbing in sulphuric acid followed by hydrolysis`
  },
  {
    question: `Phenol on treatment with diethyl sulphate in presence of NaOH gives`,
    options: [
      `Phenetole`,
      `Anisole`,
      `Diphenyl ether`,
      `Diethyl ether`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phenetole`
  },
  {
    question: `Cyclohexanol is a:`,
    options: [
      `Phenol`,
      `Primary alcohol`,
      `Sec. alcohol`,
      `tert. Alcohol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sec. alcohol`
  },
  {
    question: `The products obtained when anisole is heated in a sealed tube with HI are`,
    options: [
      `Phenol + CH₃I`,
      `Iodobenzene + CH₃OH`,
      `C₆H₅I + CH₃OH`,
      `CH₃OH + CH₃I`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phenol + CH₃I`
  },
  {
    question: `On boiling with concentrated hydrobromic acid, phenyl ethyl ether yields`,
    options: [
      `Phenol and ethane`,
      `Phenol and ethyl bromide`,
      `Bromobenzene and ethanol`,
      `Bromobenzene and ethane`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Phenol and ethyl bromide`
  },
  {
    question: `Which is not correct?`,
    options: [
      `Phenol is more acidic than acetic acid.`,
      `Ethanol is less acidic than phenol.`,
      `Ethanol has higher boiling point than ethane.`,
      `Ethane is non-linear molecule.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phenol is more acidic than acetic acid.`
  },
  {
    question: `Phenol is more acidic than alcohol because`,
    options: [
      `Phenol is more soluble in polar solvents`,
      `Alcohol does not lose hydrogen atom`,
      `Phenoxide ion is stabilised by resonance`,
      `Phenoxide ion doesn't exhibit resonance`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Phenoxide ion is stabilised by resonance`
  },
  {
    question: `Methylphenyl ether can be obtained by reacting`,
    options: [
      `Phenolate ions and methyl iodide`,
      `Methoxide ions and bromobenzene`,
      `Methanol and phenol`,
      `Bromobenzene and methyl bromide`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phenolate ions and methyl iodide`
  },
  {
    question: `Phenol is heated with phthalic anhydride in presence of conc H₂SO₄. The product gives pink colour with alkali. The product is`,
    options: [
      `Phenolphthalein`,
      `Bakelite`,
      `Salicylic acid`,
      `Fluorescein`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phenolphthalein`
  },
  {
    question: `6. Limestone is not used in which of the following manufacturing processes?`,
    options: [
      `Phosphorus from phosphorite`,
      `Ordinary (soda lime) glass`,
      `Iron from haematite`,
      `Solvay process of sodium carbonate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phosphorus from phosphorite`
  },
  {
    question: `The -OH group of an alcohol or the -COOH group of a carboxylic acid can be replaced by -Cl using`,
    options: [
      `Phosphorus pentachloride`,
      `Hypochlorous acid`,
      `Chlorine`,
      `Hydrochloric acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Phosphorus pentachloride`
  },
  {
    question: `Which method of purification is represented by the following equation? Ti(s) + 2I2(g) →(523K) TiI4(g) →(1700K) Ti(s) + 2I2(g)`,
    options: [
      `Cupeation`,
      `Poling`,
      `Van Arkel`,
      `Zone refining`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Van Arkel`
  },
  {
    question: `Which metal is a liquid at room temperature?`,
    options: [
      `Mercury`,
      `Potassium`,
      `Sodium`,
      `Titanium`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Mercury`
  },
  {
    question: `Crystalline metal can be transformed into metallic glass by:`,
    options: [
      `Alloying`,
      `Pressing into thin plates`,
      `Slow cooling of molten metal`,
      `Very rapid cooling of a spray of the molten metal`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Very rapid cooling of a spray of the molten metal`
  },
  {
    question: `Which process is used for beneficiation of ores?`,
    options: [
      `Process of removal of impurities`,
      `Process of heating ore at high temperature`,
      `Extraction of metal from ore`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Process of removal of impurities`
  },
  {
    question: `Isopropyl alcohol and n-propyl alcohol are:`,
    options: [
      `Position isomers`,
      `Chain isomers`,
      `Functional isomers`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Position isomers`
  },
  {
    question: `The following substance can be used as a raw material for obtaining alcohol:`,
    options: [
      `Potatoes`,
      `Molasses`,
      `Maize`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Vapours of an alcohol were passed over hot reduced copper. It gave an olefin. The alcohol is:`,
    options: [
      `Primary`,
      `Secondary`,
      `Tertiary`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Tertiary`
  },
  {
    question: `Under drastic conditions all the alcohols can be oxidized to carboxylic acids but the following alcohols give carboxylic acids having same number of carbon atoms:`,
    options: [
      `Primary`,
      `Secondary`,
      `Tertiary`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Primary`
  },
  {
    question: `The correct order of melting and boiling points of the primary (1°), secondary (2°) and tertiary (3°) alkyl halides is:`,
    options: [
      `primary > secondary > tertiary`,
      `tertiary > secondary > primary`,
      `secondary > tertiary > primary`,
      `tertiary > primary > secondary`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: primary > secondary > tertiary`
  },
  {
    question: `Ketone upon treatment with Grignard reagent gives`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
      `Aldehyde`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Tertiary alcohol`
  },
  {
    question: `When CH₃MgI is made to react with acetone and the addition product formed is hydrolysed, we get:`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
      `Aldehyde`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Tertiary alcohol`
  },
  {
    question: `Butan-2-ol is:`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Secondary alcohol`
  },
  {
    question: `A compound X with molecular formula C₃H₈O can be oxidised to a compound Y with the molecular formula C₃H₆O₂. X is most likely to be:`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Aldehyde`,
      `Ketone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Primary alcohol`
  },
  {
    question: `The compound on dehydrogenation gives a ketone. The original compound is`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
      `Carboxylic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Secondary alcohol`
  },
  {
    question: `On reduction with LiAlH₄, a ketone yields:`,
    options: [
      `Primary alcohol`,
      `Secondary alcohol`,
      `Tertiary alcohol`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Secondary alcohol`
  },
  {
    question: `131. Superphosphate of lime is a mixture of:`,
    options: [
      `Primary calcium phosphate and Epsom`,
      `Primary magnesium phosphate and Epsom`,
      `Primary magnesium phosphate and gypsum`,
      `Primary calcium phosphate and gypsum`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Primary calcium phosphate and gypsum`
  },
  {
    question: `One mole of an organic compound A with the formula C₃H₈O reacts completely with two moles of HI to form X and Y. When Y is boiled with aqueous alkali it forms Z. Z answers the iodoform test. The compound A is`,
    options: [
      `Propan-2-ol`,
      `Propan-1-ol`,
      `Ethoxyethane`,
      `Methoxyethane`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Methoxyethane`
  },
  {
    question: `Oxidation of 2-propanol by K₂Cr₂O₇ and dilute H₂SO₄ leads to the formation of:`,
    options: [
      `Propanal`,
      `Propanoic acid`,
      `Methanoic acid`,
      `Propanone`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Propanone`
  },
  {
    question: `Sperrylite is:`,
    options: [
      `AgCl`,
      `PtAs2`,
      `Fe2O3`,
      `SnO2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: PtAs2`
  },
  {
    question: `For which pair iodoform test cannot be used as distinction test?`,
    options: [
      `Propanol-1 and propanol-2`,
      `Butanol-2 and 2-methyl propan-2-ol`,
      `Butanol-1 and butanol-2`,
      `Pentanol-1 and pentanol-3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Pentanol-1 and pentanol-3`
  },
  {
    question: `Pig iron is converted into steel by decreasing the amount of carbon contained in it, in a:`,
    options: [
      `Blast furnace`,
      `Pyrite burner`,
      `Bessemer converter`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Bessemer converter`
  },
  {
    question: `Which of the following is the heaviest metal?`,
    options: [
      `U`,
      `Ra`,
      `Pb`,
      `Hg`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: U`
  },
  {
    question: `Dollucite is an ore of:`,
    options: [
      `Li`,
      `Rb`,
      `K`,
      `Cs`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Cs`
  },
  {
    question: `1,3-dibromopropane reacts with metallic zinc to form:`,
    options: [
      `Propene`,
      `Cyclopropane`,
      `Propane`,
      `Hexane`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Cyclopropane`
  },
  {
    question: `Butane nitrile may be prepared by heating:`,
    options: [
      `Propyl alcohol with KCN`,
      `Butyl alcohol with KCN`,
      `Butyl chloride with KCN`,
      `Propyl chloride with KCN`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Propyl chloride with KCN`
  },
  {
    question: `The compound B formed in the following sequence of reactions, CH₃CH₂CH₂OH → PCl₅ → A → Alc.NaOH → B will be:`,
    options: [
      `Propyne`,
      `Propene`,
      `Propanal`,
      `Propane`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Propene`
  },
  {
    question: `The enzyme pepsin hydrolyses:`,
    options: [
      `Proteins to amino acids`,
      `Fats to fatty acids`,
      `Glucose to ethyl alcohol`,
      `Polysaccharides to monosaccharides`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Proteins to amino acids`
  },
  {
    question: `Polymer of chloroethylene is:`,
    options: [
      `PVC`,
      `Teflon`,
      `Nylon`,
      `Terylene`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: PVC`
  },
  {
    question: `Presence of small impurity usually makes a metal quite hard because the impurities:`,
    options: [
      `Change the lattice structure of metals`,
      `Reduce the number of slide planes`,
      `Reduce the number of mobile electrons`,
      `Reduce the crystal symmetry`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Reduce the number of slide planes`
  },
  {
    question: `Which is used for the extraction of cadmium from cadmium sulphide?`,
    options: [
      `Roasting`,
      `Reduction`,
      `Oxidation`,
      `Electrolysis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Reduction`
  },
  {
    question: `Main function of roasting is`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Slag formation`,
      `To remove volatile substance`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: To remove volatile substance`
  },
  {
    question: `Zinc is obtained on large scale by:`,
    options: [
      `Electrolysis of ZnCl2`,
      `Reduction of ZnO`,
      `Precipitation with Ag`,
      `All are correct`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Reduction of ZnO`
  },
  {
    question: `Iron is obtained on large scale from Fe2O3 by:`,
    options: [
      `Reduction with CO`,
      `Reduction with Al`,
      `Calcination`,
      `Passing H2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Reduction with CO`
  },
  {
    question: `In blast furnace, the highest temperature is in`,
    options: [
      `Fusion zone`,
      `Reduction zone`,
      `Combustion zone`,
      `Slag zone`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Combustion zone`
  },
  {
    question: `The general formula of ether is:`,
    options: [
      `R—CHO`,
      `R—CO—R'`,
      `R—O—R'`,
      `R—COOR'`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: R—O—R'`
  },
  {
    question: `The alkyl halides that can be made by free radical halogenation of alkanes are`,
    options: [
      `RCl and RBr but not RF or RI`,
      `RF, RCl and RBr but not RI`,
      `RF, RCl, RBr, RI`,
      `RF, RCl and RI but not RBr`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: RCl and RBr but not RF or RI`
  },
  {
    question: `The process of removal of gangue particles from ores is known as:`,
    options: [
      `Concentration`,
      `Refining`,
      `Smelting`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Concentration`
  },
  {
    question: `Which of the following methods cannot be used for the preparation of an ester?`,
    options: [
      `RCOOH + R'OH + OH⁻`,
      `RCOCl + R'OH + Pyridine`,
      `RCOOH + R'OH + H⁺`,
      `(RCO)₂O + R'OH + Pyridine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: RCOOH + R'OH + OH⁻`
  },
  {
    question: `The furnace which provides the highest temperature is:`,
    options: [
      `Blast furnace`,
      `Reverberatory furnace`,
      `Electrical furnace`,
      `Muffle furnace`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Electrical furnace`
  },
  {
    question: `The process of heating the ore strongly in excess of air so that the volatile impurities are removed and the ore is changed to oxide is known as`,
    options: [
      `Leaching`,
      `Roasting`,
      `Calcinations`,
      `Froth floatation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Which one of the following is not true for the hydrolysis of t-butyl bromide with aqueous NaOH?`,
    options: [
      `Reaction occurs through the SN1 mechanism`,
      `The intermediate formed is a carbocation`,
      `Rate of the reaction doubles when the concentration of alkali is doubled`,
      `Rate of the reaction doubles when the concentration of t-butyl bromide is doubled`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Rate of the reaction doubles when the concentration of alkali is doubled`
  },
  {
    question: `Heating of ore in presence of air to remove impurity of sulphur is called:`,
    options: [
      `Calcination`,
      `Roasting`,
      `Smelting`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Blister copper is obtained by:`,
    options: [
      `Bessemerisation`,
      `Roasting`,
      `Poling`,
      `Refining`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Bessemerisation`
  },
  {
    question: `On reacting with neutral ferric chloride, phenol gives`,
    options: [
      `Red colour`,
      `Blue colour`,
      `Violet colour`,
      `Green colour`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Violet colour`
  },
  {
    question: `Diethyl ether absorbs oxygen to form:`,
    options: [
      `Red coloured sweet smelling compound`,
      `Acetic acid`,
      `Ether suboxide`,
      `Ether peroxide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Ether peroxide`
  },
  {
    question: `203. Sodium thiosulphate, \\(\\mathrm{Na}_{2}\\mathrm{S}_{2}\\mathrm{O}_{3}\\cdot 5\\mathrm{H}_{2}\\mathrm{O}\\) is used in photography to:`,
    options: [
      `Reduce the silver bromide grains to metallic silver`,
      `Convert the metallic silver to silver salt`,
      `Remove undecomposed \\(\\mathrm{AgBr}\\) as soluble silver thiosulphate complex`,
      `Remove reduced silver`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Remove undecomposed \\(\\mathrm{AgBr}\\) as soluble silver thiosulphate complex`
  },
  {
    question: `The process of Zinc-plating on iron sheet is known as`,
    options: [
      `Annealing`,
      `Roasting`,
      `Galvanization`,
      `smelting`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Galvanization`
  },
  {
    question: `Extraction for zinc from zinc blende is achieved by`,
    options: [
      `Electrolytic reduction`,
      `Roasting following by reduction with carbon`,
      `Roasting followed by reduction with another metal`,
      `Roasting followed by self-reduction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Roasting following by reduction with carbon`
  },
  {
    question: `Metallurgy is the process of:`,
    options: [
      `Concentrating the ore`,
      `Roasting the ore`,
      `Extracting the metal from the ore`,
      `Adding carbon to the ore in blast furnace`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Extracting the metal from the ore`
  },
  {
    question: `87. Magnesium metal is prepared by:`,
    options: [
      `Reduction of MgO by coke`,
      `Electrolysis of aqueous solution of Mg(NO3)2`,
      `Displacement of Mg by iron from magnesium sulphate solution`,
      `Electrolysis of molten magnesium chloride`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Electrolysis of molten magnesium chloride`
  },
  {
    question: `Which of the following is insoluble in alcohol?`,
    options: [
      `Resins and varnishes`,
      `Soaps and varnishes`,
      `Rubbers and plastics`,
      `Dyes and drugs`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Rubbers and plastics`
  },
  {
    question: `Aryl halides are less reactive towards electrophiles than alkyl halides due to:`,
    options: [
      `Resonance`,
      `Stability of carbonium ions`,
      `High boiling point`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Resonance`
  },
  {
    question: `8. If \\(\\mathrm{CO}_2\\) is passed in excess into lime water, the milkiness first formed disappears due to:`,
    options: [
      `Reversal of original reaction`,
      `Formation of volatile calcium derivative`,
      `Formation of soluble calcium bicarbonate`,
      `Formation of soluble magnesium hydroxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Formation of soluble calcium bicarbonate`
  },
  {
    question: `In India thorium deposits are found mainly in the forms of:`,
    options: [
      `Lignite`,
      `Rutile`,
      `Monazite`,
      `None`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Monazite`
  },
  {
    question: `In Wurtz reaction of alkyl halides with sodium, the reactivity order of these halides is:`,
    options: [
      `RI > RBr > RCl`,
      `RCl > RBr > RI`,
      `RBr > RI > RCl`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: RI > RBr > RCl`
  },
  {
    question: `Which consists of only one element?`,
    options: [
      `Marble`,
      `Sand`,
      `Diamond`,
      `Glass`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Diamond`
  },
  {
    question: `Ethanol reacts with thionyl chloride to give ethyl chloride and:`,
    options: [
      `S, SO₂`,
      `SO₂, HCl`,
      `Cl₂, SO₃`,
      `SO₃, HCl`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: SO₂, HCl`
  },
  {
    question: `By heating phenol with chloroform in alkali, it is converted into`,
    options: [
      `Salicylic acid`,
      `Salicylaldehyde`,
      `Anisole`,
      `Phenyl benzoate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Salicylaldehyde`
  },
  {
    question: `Which of the following compound would not evolve CO₂ when treated with NaHCO₃ solution?`,
    options: [
      `Salicylic acid`,
      `Phenol`,
      `Benzoic acid`,
      `4-nitrobenzoic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Phenol`
  },
  {
    question: `Ether fire can be extinguished by:`,
    options: [
      `Sand`,
      `Pyrene`,
      `CO₂`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Forth flotation process for the concentration of the ores is an illustration of the practical application of`,
    options: [
      `Adsorption`,
      `Sedimentation`,
      `Coagulation`,
      `Absorption`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Adsorption`
  },
  {
    question: `Pb and Sn are extracted from their chief ore by`,
    options: [
      `Electrolysis and self reduction`,
      `Self reduction and electrolysis`,
      `Carbon reduction and self reduction`,
      `Self reduction and carbon reduction`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Self reduction and carbon reduction`
  },
  {
    question: `By which process Pb and Sn are extracted respectively?`,
    options: [
      `Carbon reduction—self reduction`,
      `Self reduction—carbon reduction`,
      `Electrolytic reduction—cyanide process`,
      `Cyanide process—electrolytic reduction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Self reduction—carbon reduction`
  },
  {
    question: `Catalytic dehydrogenation of a primary alcohol gives a`,
    options: [
      `Secondary alcohol`,
      `Aldehyde`,
      `Ketone`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Aldehyde`
  },
  {
    question: `Grignard reagent reacts with HCHO to produce`,
    options: [
      `Secondary alcohol`,
      `Anhydride`,
      `Acid`,
      `Primary alcohol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Primary alcohol`
  },
  {
    question: `Following method is not used for extraction of Al`,
    options: [
      `Van Arkel`,
      `Serpeck`,
      `Baeyer`,
      `Hall-Heroult`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Van Arkel`
  },
  {
    question: `In the metallurgy of zinc, the zinc dust obtained from roasting and reduction of zinc sulphide contains some ZnO. It is removed by:`,
    options: [
      `Absorbance of ultraviolet light and reemission of white light`,
      `Shock cooling by contact with a shower of molten lead`,
      `X-ray method`,
      `Smelting`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Shock cooling by contact with a shower of molten lead`
  },
  {
    question: `The most abundant element in the earth crust is:`,
    options: [
      `O`,
      `Si`,
      `H`,
      `C`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: O`
  },
  {
    question: `Which one is an ore of sodium?`,
    options: [
      `Sylvine`,
      `Siderite`,
      `Spodumene`,
      `Soda ash`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Soda ash`
  },
  {
    question: `Which is not a silver ore?`,
    options: [
      `Argentite`,
      `Siderite`,
      `Horn silver`,
      `Ruby silver`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Siderite`
  },
  {
    question: `The lining in blast furnace are made up of:`,
    options: [
      `Graphite`,
      `Silica`,
      `Fireclay bricks`,
      `CaCO3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Fireclay bricks`
  },
  {
    question: `The inner lining of a blast furnace is made up of:`,
    options: [
      `Graphite bricks`,
      `Silica bricks`,
      `Fire clay bricks`,
      `Basic bricks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Fire clay bricks`
  },
  {
    question: `The grey cast iron contains:`,
    options: [
      `Iron carbide`,
      `Silicon carbide`,
      `Silicon dioxide`,
      `Graphite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Graphite`
  },
  {
    question: `Argentite is a mineral of`,
    options: [
      `Gold`,
      `Silver`,
      `Copper`,
      `Platinum`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Silver`
  },
  {
    question: `Cupeation process is used in the metallurgy of:`,
    options: [
      `Copper`,
      `Silver`,
      `Lead`,
      `Iron`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Silver`
  },
  {
    question: `The slag obtained during the extraction of copper from copper pyrites is composed of`,
    options: [
      `Cu2S`,
      `SiO2`,
      `CuSiO3`,
      `FeSiO3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: FeSiO3`
  },
  {
    question: `Which substance is used as basic refractory material in furnace?`,
    options: [
      `Al2O3`,
      `SiO2`,
      `CaO`,
      `Fe2O3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: CaO`
  },
  {
    question: `In the manufacture of iron from haematite, lime stone is added to act as:`,
    options: [
      `Flux`,
      `Slag`,
      `A reducing agent`,
      `An oxidising agent`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Flux`
  },
  {
    question: `207. Which on mixing with water gives a hissing sound and becomes very hard?`,
    options: [
      `Slaked lime`,
      `Quick lime`,
      `Limestone`,
      `Superphosphate of lime`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Quick lime`
  },
  {
    question: `A substance which reacts with gangue to form fusible material is called`,
    options: [
      `Flux`,
      `Slag`,
      `Catalyst`,
      `Ore`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Flux`
  },
  {
    question: `The non-fusible impurities of ores are removed by adding:`,
    options: [
      `Flux`,
      `Slag`,
      `Gange`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Flux`
  },
  {
    question: `46. Scarlet flame colour of Bunsen flame is characteristic of:`,
    options: [
      `Sn`,
      `K`,
      `Sb`,
      `Sr`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Sr`
  },
  {
    question: `The process of converting hydrated alumina into anhydrous alumina is called:`,
    options: [
      `Roasting`,
      `Smelting`,
      `Dressing`,
      `Calcination`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Calcination`
  },
  {
    question: `The reaction 2ZnS + 3O2 → 2ZnO + 2SO2 in the metallurgical process of zinc is called`,
    options: [
      `Roasting`,
      `Smelting`,
      `Cuellation`,
      `Calcinations`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Roasting`
  },
  {
    question: `Which reagent can distinguish C₂H₅OH and ΦOH?`,
    options: [
      `SOCl₂`,
      `CH₃COCl`,
      `(CH₃CO)₂O`,
      `CH₃COOH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: SOCl₂`
  },
  {
    question: `Liquation is used to purify:`,
    options: [
      `Hg`,
      `Sn`,
      `Bi`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `Phenol can be distinguished from ethanol by the following reagents except`,
    options: [
      `Sodium`,
      `NaOH/I₂`,
      `Neutral FeCl₃`,
      `Br₂/H₂O`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Sodium`
  },
  {
    question: `The metal used in storage batteries is:`,
    options: [
      `Cu`,
      `Sn`,
      `Pb`,
      `Ni`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pb`
  },
  {
    question: `Alloys of which metal are light and strong and are used in the manufacture of aeroplanes?`,
    options: [
      `Cr`,
      `Sn`,
      `Fe`,
      `Mg`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Mg`
  },
  {
    question: `61. Sodium forms \\(\\mathrm{Na}^+\\) and not \\(\\mathrm{Na}^{2 + }\\) because:`,
    options: [
      `Sodium contains only one electron in outermost shell`,
      `First ionization potential is small and the difference in first and second ionization potentials is very large`,
      `Radius of \\(\\mathrm{Na}^+\\) is much smaller than of \\(\\mathrm{Na}^+\\)`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Sodium contains only one electron in outermost shell`
  },
  {
    question: `In Wurtz reaction alkyl halide reacts with`,
    options: [
      `Sodium in ether`,
      `Sodium in dry ether`,
      `Sodium only`,
      `Alkyl halide in ether`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Sodium in dry ether`
  },
  {
    question: `Which of the following reactions does not yield an ether?`,
    options: [
      `Sodium methoxide reacts with dimethyl sulphate`,
      `Sodium ethoxide reacts with ethyl bromide`,
      `Sodium ethoxide reacts with bromocyclopropane`,
      `Ethanol reacts with CH₂N₂ in presence of HBF₄`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium ethoxide reacts with bromocyclopropane`
  },
  {
    question: `248. On strong heating sodium bicarbonate changes into`,
    options: [
      `Sodium monoxide`,
      `Sodium hydroxide`,
      `Sodium carbonate`,
      `Sodium peroxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Sodium carbonate`
  },
  {
    question: `Alcohols of low molecular weight are:`,
    options: [
      `Soluble in water`,
      `Soluble in water on heating`,
      `Insoluble in all solvents`,
      `Soluble in all solvents`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Soluble in water`
  },
  {
    question: `The most malleable metal is:`,
    options: [
      `Silver`,
      `sodium`,
      `Gold`,
      `Platinum`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Gold`
  },
  {
    question: `A metal which is refined by poling is`,
    options: [
      `Silver`,
      `Sodium`,
      `Blister copper`,
      `Zinc`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Blister copper`
  },
  {
    question: `Ethyl alcohol is also known as:`,
    options: [
      `Spirit of wine`,
      `Methyl carbinol`,
      `Grain alcohol`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of these`
  },
  {
    question: `171. Which of the following ions, will have maximum hydration energy?`,
    options: [
      `Sr2+`,
      `Ba2+`,
      `Ca2+`,
      `Mg2+`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Mg2+`
  },
  {
    question: `In metallurgical process, the flux used for removing acidic impurities is:`,
    options: [
      `Silica`,
      `Sodium chloride`,
      `Lime stone`,
      `Sodium carbonate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Lime stone`
  },
  {
    question: `The process of extraction of sodium on a commercial scale by the electrolysis of fused sodium chloride is called:`,
    options: [
      `Down's process`,
      `Solvay process`,
      `Nelson process`,
      `Castner process`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Down's process`
  },
  {
    question: `Froth floatation process is based on:`,
    options: [
      `Wetting properties of ore particles`,
      `Specific gravity of ore particles`,
      `Magnetic properties or ore particles`,
      `Electrical properties of ore particles`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Wetting properties of ore particles`
  },
  {
    question: `Alcohols are neutral in character whereas thio-alcohols are ....in character.`,
    options: [
      `Strongly acidic`,
      `Weakly acidic`,
      `Basic`,
      `Neutral`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Weakly acidic`
  },
  {
    question: `Saccharification is the process of conversion of:`,
    options: [
      `Sugar solution into alcohol`,
      `Alcohol into starch`,
      `Starch into alcohol`,
      `Starch into sugar`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Starch into sugar`
  },
  {
    question: `Antimony occurs mainly in form of:`,
    options: [
      `Sulphide`,
      `Stibnite`,
      `Realgar`,
      `Fluorop`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Stibnite`
  },
  {
    question: `93. \\(K_2CS_3\\) can be called as potassium:`,
    options: [
      `Sulphocyanide`,
      `Thiocarbide`,
      `Thiocarbonate`,
      `Thiocyanate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Thiocarbonate`
  },
  {
    question: `Zinc metal is refined by:`,
    options: [
      `Crystallisation`,
      `Sublimation`,
      `Heating`,
      `Distillation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Distillation`
  },
  {
    question: `The salt which is least likely to be found in minerals is:`,
    options: [
      `Chloride`,
      `Sulphate`,
      `Sulphide`,
      `Nitrate`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Nitrate`
  },
  {
    question: `Roasting is generally carried out in case of:`,
    options: [
      `Oxide ores`,
      `Sulphide ores`,
      `Silicate ores`,
      `Carbonate ores`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Sulphide ores`
  },
  {
    question: `Glycerol on oxidation with dil. HNO₃ gives:`,
    options: [
      `Tartronic acid`,
      `Mesoxalic acid`,
      `Oxalic acid`,
      `Glyceric acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Glyceric acid`
  },
  {
    question: `The correct order of the ease with which primary, secondary and tertiary alcohols can be dehydrated using concentrated H₂SO₄ is:`,
    options: [
      `Tertiary > secondary > primary`,
      `Primary > secondary > tertiary`,
      `Secondary > tertiary > primary`,
      `Secondary > primary > tertiary`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Tertiary > secondary > primary`
  },
  {
    question: `Which one of the following will most readily be dehydrated in acidic condition?`,
    options: [
      `Tertiary alcohol`,
      `Secondary alcohol`,
      `Primary alcohol`,
      `Methanol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Tertiary alcohol`
  },
  {
    question: `Which element occurs freely in nature?`,
    options: [
      `Iodine`,
      `Sulphur`,
      `Phosphorus`,
      `Magnesium`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Sulphur`
  },
  {
    question: `In the metallurgical extraction of zinc from ZnO, the reducing agent used is?`,
    options: [
      `Nitric oxide`,
      `Sulphur dioxide`,
      `Carbon monoxide`,
      `Carbon dioxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Carbon monoxide`
  },
  {
    question: `Coating of zinc on iron objects is commonly known as:`,
    options: [
      `Electroplating`,
      `Surface coating`,
      `Galvanising`,
      `Sheardising`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Galvanising`
  },
  {
    question: `185. \\(\\mathrm{H}_{2}\\mathrm{O}\\) is dipolar whereas \\(\\mathrm{BeF}_{2}\\) is not. It is because:`,
    options: [
      `The electronegativity of F is greater than O`,
      `\\(\\mathrm{H}_{2}\\mathrm{O}\\) involves H-bonding whereas \\(\\mathrm{BeF}_{2}\\) is discrete molecule`,
      `\\(\\mathrm{H}_{2}\\mathrm{O}\\) is linear and \\(\\mathrm{BeF}_{2}\\) is angular`,
      `\\(\\mathrm{H}_{2}\\mathrm{O}\\) is angular and \\(\\mathrm{BeF}_{2}\\) is linear`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: \\(\\mathrm{H}_{2}\\mathrm{O}\\) is angular and \\(\\mathrm{BeF}_{2}\\) is linear`
  },
  {
    question: `The greater the ionic character of the carbon metal bond:`,
    options: [
      `The more reactive is the organometallic compound`,
      `The less reactive is the organometallic compound`,
      `Both are correct`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: The more reactive is the organometallic compound`
  },
  {
    question: `164. Acidified solution of sodium thiosulphate is unstable because in thiosulphate:`,
    options: [
      `The sulphur atoms are at unstable oxidation state of +2`,
      `The two sulphur atoms are in different oxidation states of +5 and -1`,
      `The S—S bond are unstable bonds`,
      `Thio compounds contain sulphur in zero oxidation state`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: The two sulphur atoms are in different oxidation states of +5 and -1`
  },
  {
    question: `Which element is present in pitch blende?`,
    options: [
      `U`,
      `Th`,
      `Ra`,
      `None`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: U`
  },
  {
    question: `Absolute ethanol cannot be obtained by simple fractionation of a solution of ethanol and water because:`,
    options: [
      `Their boiling points are very near`,
      `Ethanol remains dissolved in water`,
      `They form a constant boiling mixture`,
      `Ethanol molecules are solvated`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: They form a constant boiling mixture`
  },
  {
    question: `77. Alkali metals are powerful reducing agents because:`,
    options: [
      `These are metals`,
      `These are monovalent`,
      `Their ionic radii is large`,
      `Of low ionisation enthalpy`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Of low ionisation enthalpy`
  },
  {
    question: `In the reverberatory furnace:`,
    options: [
      `The flames do not come in contact with the charge`,
      `The flames come in contact with the charge`,
      `Only hot gases come in contact with the charge`,
      `The flames are not there at all`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Only hot gases come in contact with the charge`
  },
  {
    question: `Alkyl halides are less soluble in water because`,
    options: [
      `they ionise in water`,
      `they do not form H-bonds with water`,
      `they are highly viscous`,
      `they have very strong C-X bond`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: they do not form H-bonds with water`
  },
  {
    question: `When an ether is treated with P₂S₅ we get:`,
    options: [
      `Thio-alcohol`,
      `Thio-ester`,
      `Thio-ether`,
      `Thio-aldehyde`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Thio-ether`
  },
  {
    question: `Which of the following are known as mercaptans?`,
    options: [
      `Thio-alcohols`,
      `Thio-ethers`,
      `Thio-aldehydes`,
      `Thio-acids`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Thio-alcohols`
  },
  {
    question: `The forth-flotation process is based upon`,
    options: [
      `The difference in the specific gravity of ore and gangue particles`,
      `The magnetic properties of gangue and ore`,
      `Preferential wetting of gangue particles by oil`,
      `The solubility of ore particles in suitable reagent`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: The solubility of ore particles in suitable reagent`
  },
  {
    question: `The function of ZnCl₂ in Lucas test for alcohols is`,
    options: [
      `To act as acid catalyst and react with HCl to form H₂ZnCl₄`,
      `To act as base catalyst and react with NaOH to form Na₂Zn(OH)₄`,
      `To act as amphoteric catalyst`,
      `To act as neutral catalyst`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: To act as acid catalyst and react with HCl to form H₂ZnCl₄`
  },
  {
    question: `During alcoholic fermentation inorganic salts like ammonium sulphate or ammonium phosphate are added:`,
    options: [
      `To decrease the freezing point of solution`,
      `Which act as food for ferment cells`,
      `Which prevent the growth of undesirable bacteria`,
      `Which produce desirable enzymes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Which act as food for ferment cells`
  },
  {
    question: `244. The function of sand in mortar is:`,
    options: [
      `To decrease the hardness`,
      `To make the mass compact`,
      `To decrease the plasticity of the mass`,
      `To prevent the excess shrinkage because of which cracks may result`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: To prevent the excess shrinkage because of which cracks may result`
  },
  {
    question: `All ores are minerals, while all minerals are not ores because`,
    options: [
      `Minerals are complex compounds`,
      `The minerals are obtained from mines`,
      `The metal cannot be extracted economically from all the minerals`,
      `All of the above are correct`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: The metal cannot be extracted economically from all the minerals`
  },
  {
    question: `Forth floatation method is successful in separating impurities from ores because`,
    options: [
      `The pure ore is soluble in water containing additives like pine oil, cresylic acid etc`,
      `The pure ore is lighter than water containing additives like pine oil, cresylic acid, etc`,
      `The impurities are soluble in water containing additives like pine oil, cresylic acid, etc`,
      `The pure ore is not easily wetted by water as by pine oil, cresylic acid, etc`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: The pure ore is not easily wetted by water as by pine oil, cresylic acid, etc`
  },
  {
    question: `An important characteristic property of metals is:`,
    options: [
      `Their hardness`,
      `Their ability to conduct electricity`,
      `To form oxides`,
      `The stability of their compounds`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Their ability to conduct electricity`
  },
  {
    question: `Alkaline earth metals are not found free in nature because of:`,
    options: [
      `Their high b.`,
      `Their low b.`,
      `Thermal instability`,
      `Their great chemical activity`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Their great chemical activity`
  },
  {
    question: `Refractory materials are generally used in furnaces because`,
    options: [
      `They can withstand high temperature`,
      `They are chemically inert`,
      `They do not require replacement`,
      `They possess great structural strength`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: They can withstand high temperature`
  },
  {
    question: `Platinum, palladium, indium, etc., are called noble metals because:`,
    options: [
      `Alfred nobel discovered them`,
      `They are inert towards many common reagents`,
      `They are shining, lustrous and pleasing to look at`,
      `They are found in native state`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: They are inert towards many common reagents`
  },
  {
    question: `Mond's process is used for the purification of`,
    options: [
      `Ni`,
      `Ti`,
      `Zr`,
      `Hg`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ni`
  },
  {
    question: `In order to refine blister copper, it is melted in a furnace and is stirred with green logs of wood. The purpose is`,
    options: [
      `To expel the dissolved gases in blister copper`,
      `To bring the impurities to surface and oxidize them`,
      `To increase the carbon content of copper`,
      `To reduce the metallic oxide impurities with hydrocarbon gases liberated from the wood`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: To reduce the metallic oxide impurities with hydrocarbon gases liberated from the wood`
  },
  {
    question: `Propan-2-ol on reacting with Cl₂ produces:`,
    options: [
      `Trichloroethanol`,
      `Trichloroacetone`,
      `Acetone`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Trichloroacetone`
  },
  {
    question: `Purpose of smelting of an ore is`,
    options: [
      `To oxidize it`,
      `To remove vaporisation impurities`,
      `To reduce it`,
      `To obtain an alloy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: To reduce it`
  },
  {
    question: `Which of the following reacts fastest with a mixture of anhydrous ZnCl₂ and conc. HCl?`,
    options: [
      `Trimethyl carbinol`,
      `Ethanol`,
      `Propanol`,
      `Methanol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Trimethyl carbinol`
  },
  {
    question: `An aqueous solution of ethyl alcohol:`,
    options: [
      `Turns blue litmus red`,
      `Turns red litmus blue`,
      `Does not affect the litmus colour`,
      `Decolourises litmus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Does not affect the litmus colour`
  },
  {
    question: `72. One mole of magnesium nitride on the reaction with excess water gives:`,
    options: [
      `Two mole of nitric acid`,
      `One mole of nitric acid`,
      `Two mole of ammonia`,
      `One mole of ammonia`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Two mole of ammonia`
  },
  {
    question: `Absolute alcohol is prepared by`,
    options: [
      `Vacuum distillation`,
      `Azeotropic distillation`,
      `Steam distillation`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Azeotropic distillation`
  },
  {
    question: `Which radioactive element is more abundant in India?`,
    options: [
      `Thorium`,
      `Uranium`,
      `Radium`,
      `Radon`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Thorium`
  },
  {
    question: `The density of glycerol is higher than propanol due to`,
    options: [
      `Van der Waals' attraction`,
      `Hydrogen bonding`,
      `Ionic bonding`,
      `More number of covalent bonds`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Hydrogen bonding`
  },
  {
    question: `Calcination and roasting are:`,
    options: [
      `Different names of the same operation`,
      `Used for the purification of metals`,
      `Usually carried out in reverberatory furnace`,
      `Employed for the concentration of the ore`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Usually carried out in reverberatory furnace`
  },
  {
    question: `Oxygen atom of ether is:`,
    options: [
      `Very active`,
      `Replaceable`,
      `Active`,
      `Comparatively inert`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Comparatively inert`
  },
  {
    question: `The main constituent of steel in India are:`,
    options: [
      `Ni and Mg`,
      `V and Co`,
      `Al and Zn`,
      `Mn and Cr`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Mn and Cr`
  },
  {
    question: `PVC plastics are produced by the polymerization of:`,
    options: [
      `Vinyl acetate`,
      `Allyl chloride`,
      `Vinyl chloride`,
      `Ethene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Vinyl chloride`
  },
  {
    question: `Which halide does not get hydrolysed by sodium hydroxide?`,
    options: [
      `Vinyl chloride`,
      `Methyl Chloride`,
      `Ethyl chloride`,
      `Isopropyl chloride`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Vinyl chloride`
  },
  {
    question: `Which process represents the change, Ti + 2I2 → TiI4 → Ti + 2I2?`,
    options: [
      `Cupeulation`,
      `Van Arkel`,
      `Poling`,
      `Zone refining`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Van Arkel`
  },
  {
    question: `Diethyl ether is soluble in:`,
    options: [
      `Water`,
      `Dilute HCl`,
      `Conc. H₂SO₄`,
      `Conc. KOH`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Conc. H₂SO₄`
  },
  {
    question: `1,2-dibromoethane is added to prevent deposition of lead metal in :`,
    options: [
      `Water pipes`,
      `Petrol engines`,
      `Electric heaters`,
      `Metal working lathe machines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Petrol engines`
  },
  {
    question: `153. Sodium carbonate on heating gives:`,
    options: [
      `Water vapours`,
      `Carbon dioxide`,
      `Carbon dioxide + water vapour`,
      `None of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: None of the above`
  },
  {
    question: `85. Alkaline earth metals are denser than alkali metals, because metallic bonding in alkaline earth's metal is`,
    options: [
      `Weaker`,
      `Stronger`,
      `Volatile`,
      `Not present`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Stronger`
  },
  {
    question: `Wolframite ore contains:`,
    options: [
      `Zn`,
      `W`,
      `Hf`,
      `Au`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: W`
  },
  {
    question: `Which is not essential for rusting?`,
    options: [
      `Oxygen`,
      `Water`,
      `Carbon dioxide`,
      `Iron`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Carbon dioxide`
  },
  {
    question: `Acetic acid and methanol are obtained on a large scale by destructive distillation of:`,
    options: [
      `Wood`,
      `Coal`,
      `Turpentine oil`,
      `CH₃COOH`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Wood`
  },
  {
    question: `Which are explosives?`,
    options: [
      `Wood pulp (dynamite)`,
      `Cellulose nitrate (blasting gelatin)`,
      `Gun cotton or cellulose nitrate and Vaseline (cordite)`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: All of the above`
  },
  {
    question: `Anisole can be prepared by the action of methyl iodide on sodium phenate. The reaction is called`,
    options: [
      `Wurtz's reaction`,
      `Williamson's reaction`,
      `Fitting's reaction`,
      `Etard's reaction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Williamson's reaction`
  },
  {
    question: `Grignard reagent is prepared by the reaction between:`,
    options: [
      `Zinc and alkyl halide`,
      `Magnesium and alkyl halide`,
      `Magnesium and alkane`,
      `Magnesium and aromatic hydrocarbon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Magnesium and alkyl halide`
  },
  {
    question: `Which of the following is correct?`,
    options: [
      `Tin stone is magnetic in nature`,
      `Wolframite is non-magnetic in nature`,
      `Wolframite is FeWO4`,
      `Cassiterite and rutile are sulphides ore`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Wolframite is FeWO4`
  },
  {
    question: `Purest form of iron is`,
    options: [
      `Pig iron`,
      `Wrought iron`,
      `Cast iron`,
      `Steel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Wrought iron`
  },
  {
    question: `From which form of iron, other forms of iron can be produced?`,
    options: [
      `Cast iron`,
      `Wrought iron`,
      `Pig iron`,
      `Steel`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Pig iron`
  },
  {
    question: `Which metal liberates H2 with dil. nitric acid?`,
    options: [
      `Zn`,
      `Cu`,
      `Mn`,
      `Hg`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Mn`
  },
  {
    question: `Which of the following statement is incorrect?`,
    options: [
      `Silver glance mainly contains silver sulphide`,
      `Zinc blende mainly contains zinc chloride`,
      `Gold is found in native state`,
      `Copper pyrites also contains Fe2S3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Zinc blende mainly contains zinc chloride`
  },
  {
    question: `Carnallite is a mineral of`,
    options: [
      `Na`,
      `Zn`,
      `Cd`,
      `Mg`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Mg`
  },
  {
    question: `Calamine is an ore of:`,
    options: [
      `Hg`,
      `Zn`,
      `Cd`,
      `Ca`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Zn`
  },
  {
    question: `Most of the plants contain:`,
    options: [
      `Fe`,
      `Zn`,
      `Na`,
      `K`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: K`
  },
  {
    question: `Auto-reduction process is used in the extraction of`,
    options: [
      `Cu and Hg`,
      `Zn and Hg`,
      `Cu and Al`,
      `Option D missing`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Cu and Hg`
  },
  {
    question: `Zinc blende (an ore) is:`,
    options: [
      `ZnO`,
      `ZnCO3`,
      `ZnS`,
      `Zn2OCl2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: ZnS`
  },
  {
    question: `Gallium arsenide is purified by`,
    options: [
      `van-Arkel method`,
      `Zone-refining method`,
      `Electrolytic method`,
      `Liquation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Zone-refining method`
  },
  {
    question: `H2S does not produce metallic sulphide with`,
    options: [
      `ZnCl2`,
      `COCl2`,
      `CuCl2`,
      `CdCl2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: COCl2`
  },
  {
    question: `Rutile is an ore of:`,
    options: [
      `Ti`,
      `Zr`,
      `Mn`,
      `V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Ti`
  },
  {
    question: `The formula of zinc phosphite is:`,
    options: [
      `ZnHPO3`,
      `Zn(PO4)3`,
      `Zn2(PO4)3`,
      `Zn3(PO3)2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: ZnHPO3`
  },
  {
    question: `Iodine is formed when potassium iodide reacts with a solution of`,
    options: [
      `ZnSO4`,
      `CuSO4`,
      `(NH4)2SO4`,
      `Na2SO4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: CuSO4`
  },
  {
    question: `The enzyme which can catalyse the conversion of glucose to ethanol is:`,
    options: [
      `Zymase`,
      `Diastase`,
      `Maltase`,
      `Invertase`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: Zymase`
  },
  {
    question: `Germinated Barley (an enzyme) is a source of enzyme:`,
    options: [
      `Zymase`,
      `Diastase`,
      `Maltase`,
      `Invertase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Diastase`
  },
  {
    question: `S-S bond is present in`,
    options: [
      `α-(SO3)n`,
      `γ-(S3O9)`,
      `H2S2O3`,
      `H2S2O8`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: H2S2O3`
  },
  {
    question: `A helium atom on losing an electron becomes:`,
    options: [
      `α-particle`,
      `Hydrogen atom`,
      `Positively charged helium ion`,
      `Negatively charged helium ion`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: Positively charged helium ion`
  },
  {
    question: `Which of the following statements about the advantages of roasting of sulphide ore before reduction is not true?`,
    options: [
      `ΔGf of the sulphide is greater than CS2 and H2S`,
      `ΔGf is negative for roasting of sulphide ore to oxide`,
      `Roasting of the sulphide to oxide is thermodynamically feasible`,
      `Carbon and hydrogen are suitable reducing agents for metal sulphides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Carbon and hydrogen are suitable reducing agents for metal sulphides`
  },
  {
    question: `Lucas reagent produces cloudiness immediately with:`,
    options: [
      `π-butanol`,
      `Isopropanol`,
      `π-propanol`,
      `Tertiary butanol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Tertiary butanol`
  },
  {
    question: `The atomicity of phosphorus is χ and the P-P-P bond angle in the molecule is Y. What are χ and Y?`,
    options: [
      `χ=4, Y=90°`,
      `χ=4, Y=60°`,
      `χ=3, Y=120°`,
      `χ=2, Y=180°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: χ=4, Y=60°`
  }
];
