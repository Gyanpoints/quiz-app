// Chemistry – Alcohols, Phenols & Ethers
// 358 questions (from Chemistry MCQ Quiz.xlsx)

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
    question: `Lucas reagent produces cloudiness immediately with:`,
    options: [
      `π-butanol`,
      `Isopropanol`,
      `π-propanol`,
      `Tertiary butanol`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Tertiary butanol`
  }
];
