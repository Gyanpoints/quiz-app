// Chemistry – S-Block Elements
// 159 questions (from Chemistry MCQ Quiz.xlsx)

const QUESTIONS = [
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
  }
];
