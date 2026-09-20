// Chemistry – Haloalkanes Haloarenes
// 83 questions (from Chemistry MCQ Quiz.xlsx)

const QUESTIONS = [
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
    question: `Grignard reagent is prepared by the reaction between:`,
    options: [
      `Zinc and alkyl halide`,
      `Magnesium and alkyl halide`,
      `Magnesium and alkane`,
      `Magnesium and aromatic hydrocarbon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: Magnesium and alkyl halide`
  }
];
