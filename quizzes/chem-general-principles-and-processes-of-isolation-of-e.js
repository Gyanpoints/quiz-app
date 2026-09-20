// Chemistry – General Principles and Processes of Isolation of Elements
// 357 questions (from Chemistry MCQ Quiz.xlsx)

const QUESTIONS = [
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
    question: `Which of the following statements about the advantages of roasting of sulphide ore before reduction is not true?`,
    options: [
      `ΔGf of the sulphide is greater than CS2 and H2S`,
      `ΔGf is negative for roasting of sulphide ore to oxide`,
      `Roasting of the sulphide to oxide is thermodynamically feasible`,
      `Carbon and hydrogen are suitable reducing agents for metal sulphides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: Carbon and hydrogen are suitable reducing agents for metal sulphides`
  }
];
