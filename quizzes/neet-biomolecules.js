// NEET: Biomolecules
// 629 MCQs

const QUESTIONS = [
  {
    question: `Identify the correct statement regarding enzymes`,
    options: [
      `Enzymes are specific biological catalysts that can normally function at very high temperatures (`,
      `Enzymes are normally heterogeneous catalysts that are very specific in their action`,
      `Enzymes are specific biological catalysts that cannot be poisoned`,
      `Enzymes are specific biological catalysts that possess well defined active sites`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Enzymes are specific biological catalysts that possess well defined active sites`
  },
  {
    question: `Which statement is not correct for an enzyme?`,
    options: [
      `It acts as a biocatalyst`,
      `Its aqueous solution is colloidal`,
      `It can catalyse any chemical reaction`,
      `Its catalytic efficiency is temperature dependent`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) It can catalyse any chemical reaction`
  },
  {
    question: `The vector for genetic code is called`,
    options: [
      `Messenger RNA`,
      `Transfer RNA`,
      `Ribosomal RNA`,
      `Viral DNA`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Transfer RNA`
  },
  {
    question: `Vitamin A is also known as:`,
    options: [
      `Xerophythol`,
      `Thiamine`,
      `Riboflavin`,
      `Pyridoxine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Xerophythol`
  },
  {
    question: `Fructose is prepared commercially by…a polysaccharide which occurs in dahlia tubers and Jerusalem arthichokes.`,
    options: [
      `Inulin`,
      `Cellulose`,
      `Lactose`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `Sugars are characterized by the preparation of osazone derivatives. Which sugar have identical osazones?`,
    options: [
      `Glucose and lactose`,
      `Glucose and fructose`,
      `Glucose and arabinose`,
      `Glucose and maltose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose and fructose`
  },
  {
    question: `Which one of the following is an example of a non-reducing sugar?`,
    options: [
      `Sucrose`,
      `Lactose`,
      `Maltose`,
      `Cellobiose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sucrose`
  },
  {
    question: `Which one of the following compounds is not a vitamin?`,
    options: [
      `Ascorbic acid`,
      `Thiamine`,
      `Testosterone`,
      `Riboflavin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Testosterone`
  },
  {
    question: `The presence or absence of hydroxyl group on which carbon atom of sugar differentiates RNA and DNA?`,
    options: [
      `1st`,
      `2nd`,
      `3rd`,
      `4th`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2nd`
  },
  {
    question: `Turpentine oil is obtained from:`,
    options: [
      `Oak tree`,
      `Pine tree`,
      `Birch tree`,
      `Lemon tree`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pine tree`
  },
  {
    question: `Protein gives blue colour with`,
    options: [
      `Benedict reagent`,
      `Iodine solution`,
      `Ninhydrin`,
      `Biurete`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ninhydrin`
  },
  {
    question: `The red colouring matter of blood which transport oxygen contains an element in a system of rings. The element is:`,
    options: [
      `Iron`,
      `Magnesium`,
      `Cobalt`,
      `Calcium`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Iron`
  },
  {
    question: `Proteins are`,
    options: [
      `Polypeptides with low molecular weights`,
      `Polypeptides with high molecular weights`,
      `Polymers of amides`,
      `Polymers of secondary amines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Polypeptides with high molecular weights`
  },
  {
    question: `A chemical substance acts as the currency of energy metabolism in a cell. It is:`,
    options: [
      `Adenosine triphosphate`,
      `Adenosine diphosphate P a g e | 2`,
      `Adenosine monophosphate`,
      `Glucose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Adenosine triphosphate`
  },
  {
    question: `Artificial sweetner used in soft drinks is:`,
    options: [
      `Glucose`,
      `Fructose`,
      `Cellulose`,
      `Asparatame`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Asparatame`
  },
  {
    question: `DNA multiplication is called`,
    options: [
      `Translation`,
      `Transduction`,
      `Transcription`,
      `Replication`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Replication`
  },
  {
    question: `Which of the following is the first member of monosaccharides?`,
    options: [
      `CH2OH —C— CH2OH`,
      `CH2OH—CHOH —CHO`,
      `CH2OH —CHOH— CHOH— CHO`,
      `CH2OH —CHOH —C —CH2OH`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) CH2OH—CHOH —CHO`
  },
  {
    question: `Which is not a reducing sugar?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Mannose`,
      `Sucrose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sucrose`
  },
  {
    question: `Fats and oils are formed from:`,
    options: [
      `Glycerol and long chain unsaturated acids only`,
      `Glycerol and long chain saturated acids only`,
      `Glycerol and long chain saturated and unsaturated acids`,
      `Ethylene glycol and long chain saturated and unsaturated acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glycerol and long chain saturated and unsaturated acids`
  },
  {
    question: `A solution of D-glucose in water rotates the plane of polarized light`,
    options: [
      `To the left`,
      `To the right`,
      `To either side`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To the right`
  },
  {
    question: `Ordinary soaps are defined as:`,
    options: [
      `Al salts of higher fatty acids`,
      `Na salts of lower fatty acids`,
      `Na salts of higher fatty acids`,
      `Mg salts of lower fatty acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Na salts of higher fatty acids`
  },
  {
    question: `Cellulose is a linear polymer of:`,
    options: [
      `α-glucose`,
      `β-glucose`,
      `α-fructose`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) β-glucose`
  },
  {
    question: `Cofactors (non-proteinic prosthetic groups) used to bond conjugated proteins are:`,
    options: [
      `Carbohydrates`,
      `Phosphoric acid`,
      `Iron pigments`,
      `All are correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All are correct`
  },
  {
    question: `Genetic code determines`,
    options: [
      `Sequence of amino acids in a peptide chain`,
      `Sequence of variable amino acids in a protein chain`,
      `Structure of human cells`,
      `Morphology of traits`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sequence of amino acids in a peptide chain`
  },
  {
    question: `Acetone may be obtained from starch by the action of :`,
    options: [
      `Acid`,
      `Bacteria`,
      `Oxidizing agent`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Bacteria`
  },
  {
    question: `Fat on hydrolysis gives which alcohol?`,
    options: [
      `Glycerol`,
      `Propanol`,
      `Butanol`,
      `Ethanol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glycerol`
  },
  {
    question: `Which one of the following sets of monosaccharides forms sucrose?`,
    options: [
      `β-D-Glucopyranose and α-D-fructofuranose`,
      `α-D-Glucopyranose and β-D-fructopyranose`,
      `α-D-Galactopyranose and α-D-Glucopyranose`,
      `α-D-Glucopyranose and β-D-fructofuranose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) α-D-Glucopyranose and β-D-fructofuranose`
  },
  {
    question: `Simple proteins bonded with a non-proteinic prosthetic group (acting as cofactor) are called:`,
    options: [
      `Simple proteins`,
      `Conjugated proteins`,
      `Proteonic proteins`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Conjugated proteins`
  },
  {
    question: `Glucose is hydrolysed by zymase into`,
    options: [
      `Amino acids`,
      `Alcohol`,
      `Aromatic acids`,
      `Dicarboxylic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Alcohol`
  },
  {
    question: `A carbohydrate is treated with naphthol and conc. H2SO4. What colour will be formed at the junction of two liquids?`,
    options: [
      `Blood-red`,
      `Violet`,
      `Brown`,
      `Orange P a g e | 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Violet`
  },
  {
    question: `Which of the following test is not used for testing of proteins?`,
    options: [
      `Millon’s test`,
      `Molish’s test`,
      `Biuret test`,
      `Ninhydrin test`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Molish’s test`
  },
  {
    question: `In biological systems, the RNA molecules direct the synthesis of specific proteins which are characteristics of each kinds of organism. This process is known as`,
    options: [
      `Transcription`,
      `Mutation`,
      `Replication`,
      `Translation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Translation`
  },
  {
    question: `Galactose is converted into glucose in`,
    options: [
      `Mouth`,
      `Stomach`,
      `Liver`,
      `Intenstine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Liver`
  },
  {
    question: `A sequence of how many nucleotides in messenger RNA makes a codon for an amino acid?`,
    options: [
      `Three`,
      `Four`,
      `One`,
      `Two`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Three`
  },
  {
    question: `The segment of DNA which acts as the instrumental manual for the synthesis of the protein is:`,
    options: [
      `Nucleoside`,
      `Nucleotide`,
      `Ribose`,
      `Gene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Gene`
  },
  {
    question: `Which vitamin contains N?`,
    options: [
      `Vitamin A`,
      `Vitamin C`,
      `Vitamin B`,
      `Vitamin D`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vitamin B`
  },
  {
    question: `All protein are`,
    options: [
      `Simple`,
      `Biocatalysts`,
      `Useful`,
      `Polymers`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Polymers`
  },
  {
    question: `Iodine test is shown by`,
    options: [
      `Glucose`,
      `Starch`,
      `Glycogen`,
      `Polypeptide`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Starch`
  },
  {
    question: `Glucose reacts with acetic anhydride to form:`,
    options: [
      `Monoacetate`,
      `Tetra acetate`,
      `Penta acetate`,
      `Hexa acetate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Penta acetate`
  },
  {
    question: `Fats and oils belong to the class of:`,
    options: [
      `Alcohols`,
      `Acids`,
      `Esters`,
      `Hydrocarbons`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Esters`
  },
  {
    question: `The function of DNA is:`,
    options: [
      `To synthesize RNA`,
      `To synthesize the necessary proteins`,
      `To carry the hereditary characteristics from generation to generation`,
      `All are correct`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) To synthesize RNA`
  },
  {
    question: `The enzyme present in saliva is:`,
    options: [
      `Pepsin`,
      `Peptidase`,
      `Lipase`,
      `Ptyalin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ptyalin`
  },
  {
    question: `On heating with conc. sucrose gives:`,
    options: [
      `and`,
      `and`,
      `and`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `DNA has deoxyribose, base and the third compound is:`,
    options: [
      `Phosphoric acid`,
      `Ribose`,
      `Adenine`,
      `Thymine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Phosphoric acid`
  },
  {
    question: `To which of the following classes of organic compounds soap belongs?`,
    options: [
      `Esters`,
      `Amines`,
      `Salts of organic acids`,
      `Aldehydes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Salts of organic acids`
  },
  {
    question: `An organic compound consumes 4 moles of periodic acid to form following compounds, per mole of the starting compounds HCHO, 3HCOOH and CHOCOOH. The organic compound is`,
    options: [
      `Glucose`,
      `Fructose`,
      `Gluconic acid`,
      `Sorbitol`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Gluconic acid`
  },
  {
    question: `Which does not contain carbohydrate?`,
    options: [
      `Cellulose`,
      `Wax`,
      `Starch`,
      `Wheat flour`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Wax`
  },
  {
    question: `Waxes are esters of`,
    options: [
      `Glycerol`,
      `Long chain alcohols`,
      `Glycerol and fatty acid`,
      `Long chain alcohols and long chain acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Long chain alcohols and long chain acids`
  },
  {
    question: `Nucleic acids are:`,
    options: [
      `Polymers of nucleotides`,
      `Polymers of nucleosides`,
      `Polymers of purine bases through phosphate ester bonds`,
      `Phosphate ester bonds`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Polymers of nucleotides`
  },
  {
    question: `Lactose has the same molecular formula as:`,
    options: [
      `Glucose`,
      `Maltose`,
      `Sucrose`,
      `Lactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Maltose`
  },
  {
    question: `Which is an amino acid?`,
    options: [
      `Glycine`,
      `Valine`,
      `Lysine`,
      `All of these P a g e | 4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these P a g e | 4`
  },
  {
    question: `Glycogen on hydrolysis gives:`,
    options: [
      `Starch`,
      `Amylopectin`,
      `Amylose`,
      `Glucose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glucose`
  },
  {
    question: `An enzyme is formed by chemically bonding together`,
    options: [
      `Lipases`,
      `Amino acids`,
      `Carbohydrates`,
      `Vitamins of complex group`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Amino acids`
  },
  {
    question: `Glucose with excess of phenyl hydrazine forms:`,
    options: [
      `Fructosazone`,
      `Glucose phenyl hydrazone`,
      `Glucosazone`,
      `Phenyl hydrazone of glucosazone`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucosazone`
  },
  {
    question: `Animal starch is the name given for:`,
    options: [
      `Glycogens`,
      `Lactogens`,
      `Cellulose`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glycogens`
  },
  {
    question: `Fructose or ketohexose contains:`,
    options: [
      `5 ─ groups`,
      `3 secondary alcoholic groups`,
      `2 primary alcoholic gps. And one keto gp.`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `A mixture of amylose and amylopectin is called`,
    options: [
      `Lactose`,
      `Starch`,
      `Cellulose`,
      `Sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Starch`
  },
  {
    question: `Protein can be most easily removed by:`,
    options: [
      `Alkanes`,
      `Alkenes`,
      `Alkynes`,
      `Benzene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Benzene`
  },
  {
    question: `Dextrins are used in:`,
    options: [
      `Making adhesive`,
      `Confectionary`,
      `Sizing paper`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Aqueous solution of carbohydrate with 2 drops of alcoholic solution of α-naphthol and gives a ring at the junction. The colour of the ring is:`,
    options: [
      `Yellow`,
      `Green`,
      `Violet`,
      `Red`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Violet`
  },
  {
    question: `Which one is absent in protein?`,
    options: [
      `C`,
      `N`,
      `S`,
      `P`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P`
  },
  {
    question: `The energy change produced by the combustion of foods is called the ‘calorific value’. The best calorific value is given by:`,
    options: [
      `Proteins`,
      `Fats`,
      `Carbohydrates`,
      `Vitamins`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fats`
  },
  {
    question: `Which of the following is not a classification of proteins?`,
    options: [
      `Enzymes`,
      `Antibiotics`,
      `Antigens`,
      `Hormones`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibiotics`
  },
  {
    question: `Monosaccharides usually contain:`,
    options: [
      `3 to 8 carbon atoms`,
      `5 to 8 carbon atoms`,
      `2 to 10 carbon atoms`,
      `6 to 10 carbon atoms`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3 to 8 carbon atoms`
  },
  {
    question: `In aqueous solution glucose remains as`,
    options: [
      `Only in open chain form`,
      `Only in pyranose form`,
      `Only in furanose forms`,
      `In all three forms in equilibrium`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) In all three forms in equilibrium`
  },
  {
    question: `Glucose forms many derivatives. The derivative which will help to prove the furanose structure is:`,
    options: [
      `Osazone`,
      `Benzoyl`,
      `Acetyl`,
      `Isopropylidene`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Isopropylidene`
  },
  {
    question: `An example of a sulphur containing amino acid is`,
    options: [
      `Lysine`,
      `Serine`,
      `Cysteine`,
      `Tyrosine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cysteine`
  },
  {
    question: `What happens when drying oils are exposed to light and moist air?`,
    options: [
      `Polymerization`,
      `Fermentation`,
      `Hardening`,
      `Isomerization`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hardening`
  },
  {
    question: `Which one is not a protein?`,
    options: [
      `Actin`,
      `Collagen`,
      `Albumin`,
      `Haematin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Haematin`
  },
  {
    question: `Which of the following hormones helps in the conversion of glucose into glycogen in the body? P a g e | 5`,
    options: [
      `Insulin`,
      `Cortisone`,
      `Thyroxin`,
      `Oxytocin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Insulin`
  },
  {
    question: `Formation of amylene oxide ring in glucose is an indication that ring in glucose is at:`,
    options: [
      `and`,
      `and`,
      `and`,
      `and`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) and`
  },
  {
    question: `Oils are:`,
    options: [
      `Phospholipids`,
      `Liquid fats`,
      `Steroids`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Liquid fats`
  },
  {
    question: `Glucose contains in addition to aldehyde group`,
    options: [
      `One secondary OH and four primary OH group`,
      `One primary OH and four secondary OH group`,
      `Two primary OH and three secondary OH group`,
      `Three primary OH and two secondary OH group`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) One primary OH and four secondary OH group`
  },
  {
    question: `The total number of C-atoms in β-D fructofuranose are:`,
    options: [
      `6`,
      `5`,
      `4`,
      `7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6`
  },
  {
    question: `Bleeding gums are caused by deficiency of:`,
    options: [
      `Thiamine`,
      `Ascorbic acid`,
      `Folic acid`,
      `Vitamin E`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ascorbic acid`
  },
  {
    question: `Which is false`,
    options: [
      `Glucose is a disaccharide`,
      `Starch is a polysaccharide`,
      `Glucose and fructose are not anomers`,
      `Invert sugar consists of glucose and fructose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose is a disaccharide`
  },
  {
    question: `Vitamin B6 is known as`,
    options: [
      `Pyridoxin`,
      `Thiamine`,
      `Tocopherol`,
      `Riboflavin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pyridoxin`
  },
  {
    question: `Which is insoluble in water?`,
    options: [
      `Glucose`,
      `Cellulose`,
      `Fructose`,
      `Sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cellulose`
  },
  {
    question: `The antibodies necessary to protect new born babies from infection are derived from:`,
    options: [
      `ow’s milk`,
      `Pasteurised milk`,
      `Mother’s milk`,
      `Honey`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mother’s milk`
  },
  {
    question: `The element present in traces in insulin is:`,
    options: [
      `Iron`,
      `Cobalt`,
      `Zinc`,
      `Magnesium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zinc`
  },
  {
    question: `Adenosine is an example of:`,
    options: [
      `Nucleotide`,
      `Nucleoside`,
      `Purine base`,
      `Pyrimidine base`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nucleoside`
  },
  {
    question: `Which of the following statements is incorrect?`,
    options: [
      `Two polynucleotide chains pointing in opposite directions are coiled to form a double helix`,
      `Both helixes are right handed`,
      `The helixes have ten nucleotides in each turn`,
      `The two chains are not complementary to each other`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The two chains are not complementary to each other`
  },
  {
    question: `The chemical messengers produced in ductless glands are:`,
    options: [
      `Vitamins`,
      `lipids`,
      `Antibiotics`,
      `Hormones`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Hormones`
  },
  {
    question: `The tripeptide hormone present in most living cells is`,
    options: [
      `Glutathione`,
      `Glutamine`,
      `Oxytocin`,
      `Ptyalin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glutathione`
  },
  {
    question: `The chemical change in DNA molecule that could lead to synthesis of protein with an altered amino acid sequence is called`,
    options: [
      `Replication`,
      `Lipid formation`,
      `Cellular membrane`,
      `Mutation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mutation`
  },
  {
    question: `Calciferol is`,
    options: [
      `Vitamin`,
      `Antibiotic`,
      `Hormone`,
      `Antipyretic`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Vitamin`
  },
  {
    question: `Keratin, a structural protein is present in:`,
    options: [
      `Hair`,
      `Skin`,
      `Wool`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The letter ‘D’ in carbohydrates represents:`,
    options: [
      `Its direct synthesis`,
      `Its dextrorotation`,
      `Its mutarotation`,
      `Its configuration`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Its configuration`
  },
  {
    question: `The reason for double helical structure of DNA is operation of`,
    options: [
      `an der Waals’ forces`,
      `Dipole –dipole interaction`,
      `Hydrogen bonding`,
      `Electrostatic attractions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen bonding`
  },
  {
    question: `The two functional group present in a typical carbohydrate are`,
    options: [
      `—OH and — COOH`,
      `—CHO and —COOH`,
      `C= O and —OH`,
      `—OH and —CHO`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) C= O and —OH`
  },
  {
    question: `The compound, which give a positive ninhydrin test and a negative enedict’s solution test is P a g e | 6`,
    options: [
      `A monosaccharide`,
      `A disaccharide`,
      `A lipid`,
      `A protein`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A protein`
  },
  {
    question: `The change in the optical rotation of freshly prepared solution of glucose is known as`,
    options: [
      `Tautomerism`,
      `Racemization`,
      `Specific rotation`,
      `Mutarotation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mutarotation`
  },
  {
    question: `Water insoluble component of starch is`,
    options: [
      `Amylopectin`,
      `Amylose`,
      `Cellulose`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amylopectin`
  },
  {
    question: `Which one of the given proteins transports oxygen in the blood stream?`,
    options: [
      `Myoglobin`,
      `Insulin`,
      `Albumin`,
      `Haemoglobin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Haemoglobin`
  },
  {
    question: `Oxygen, necessary for life on earth was formed in atmosphere as a result of:`,
    options: [
      `Eradication of ozone`,
      `Photosynthesis`,
      `Electric discharge on water`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Photosynthesis`
  },
  {
    question: `Which of the following is ketohexose?`,
    options: [
      `Glucose`,
      `Sucrose`,
      `Fructose`,
      `Ribose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fructose`
  },
  {
    question: `Which of the following enzymes hydrolysis starch to glucose?`,
    options: [
      `Amylase`,
      `Invertase`,
      `Lactase`,
      `Maltase`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amylase`
  },
  {
    question: `Which one is a phospholipid?`,
    options: [
      `Lecithin`,
      `Cephalin`,
      `Kephalin`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Hydrolysis of fats and oils yield:`,
    options: [
      `Dihydride alcohol`,
      `Trihydric alcohol`,
      `Esters`,
      `Unsaturated acids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Trihydric alcohol`
  },
  {
    question: `RNA contains`,
    options: [
      `Ribose sugar and thymine`,
      `Ribose sugar and uracil`,
      `Deoxyribose sugar and uracil`,
      `Deoxyribose sugar and thymine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ribose sugar and uracil`
  },
  {
    question: `Starch is changed into disaccharides in presence of:`,
    options: [
      `Diastase`,
      `Maltase`,
      `Lactase`,
      `zymase`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Diastase`
  },
  {
    question: `Cane sugar on hydrolysis yields:`,
    options: [
      `Glucose and maltose`,
      `Glucose and lactose`,
      `Glucose and fructose`,
      `Only glucose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose and fructose`
  },
  {
    question: `The colour of the precipitate formed when a reducing sugar is heated with Fehling’s solution is:`,
    options: [
      `Brown`,
      `Red`,
      `Blue`,
      `Green`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Red`
  },
  {
    question: `Invert sugar is:`,
    options: [
      `Chemically inactive form of sugar`,
      `Equimolecular mixture of glucose and fructose`,
      `Mixture of glucose and sucrose`,
      `A variety of cane sugar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Equimolecular mixture of glucose and fructose`
  },
  {
    question: `Consider the following reagents I. r water II. Tollen’s reagesnt III. Fehling’s solution Which can be used to make distinction between an aldose and a ketose?`,
    options: [
      `I, II and III`,
      `II and III`,
      `I only`,
      `II only P a g e | 7`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I only`
  },
  {
    question: `Which one of the following vitamins contains a metal atom?`,
    options: [
      `Riboflavin`,
      `Vitamin`,
      `Vitamin A`,
      `Vitamin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vitamin`
  },
  {
    question: `Which is used for making rayon (artificial silk)?`,
    options: [
      `Starch`,
      `Cellulose`,
      `Terephthalic acid`,
      `Adipic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cellulose`
  },
  {
    question: `Which carbohydrates is as important as steel and is employed in manufacture of many articles in daily use as well as most abundant in nature?`,
    options: [
      `Cellulose`,
      `Glucose`,
      `Starch`,
      `Sucrose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cellulose`
  },
  {
    question: `Glucose gives silver mirror with ammoniacal silver nitrate because it has`,
    options: [
      `Aldehyde group`,
      `Ester group`,
      `Ketone group`,
      `Alcoholic silver nitrate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aldehyde group`
  },
  {
    question: `Aleurone grains are`,
    options: [
      `Starch`,
      `Glycogen`,
      `Lipid`,
      `Protein`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Protein`
  },
  {
    question: `The number of disulphide linkage present in insulin are`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `Which are not the essential constituents of balanced diet?`,
    options: [
      `Carbohydrates`,
      `Fats`,
      `Proteins`,
      `Hormones`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Hormones`
  },
  {
    question: `Starch can be used as an indicator for the detection of the traces of:`,
    options: [
      `Glucose in aqueous solution`,
      `Proteins in blood`,
      `Iodine in aqueous solution`,
      `Urea in blood`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Iodine in aqueous solution`
  },
  {
    question: `The number of milligram of KOH required to neutralise l g of the oil or fat is called:`,
    options: [
      `Saponification value`,
      `Iodine value`,
      `Acetyl value`,
      `Acid value`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Saponification value`
  },
  {
    question: `The destruction of the biological nature and activity of proteins by heat or chemical agent is called:`,
    options: [
      `Dehydration`,
      `Denaturation`,
      `Denitrogenation`,
      `Deamination`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Denaturation`
  },
  {
    question: `Glucose and mannose are`,
    options: [
      `Epimers`,
      `Anomers`,
      `Ketohexoses`,
      `Disaccharides`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Epimers`
  },
  {
    question: `The hormone thyroxine:`,
    options: [
      `Is secreted by pancreas`,
      `Is secreted by thyroid`,
      `Decreases blood sugar`,
      `Does not stimulate metabolism`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is secreted by thyroid`
  },
  {
    question: `Although D-galactose rotates plane-polarised light, its oxidation product, galactaric acid, due to does not. It is due to`,
    options: [
      `Galactaric acid is racemic mixture of D- and L- isomer`,
      `Galactaric acid is a compound`,
      `Both are correct`,
      `None of the above is correct`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Galactaric acid is a compound`
  },
  {
    question: `Glucose molecule reacts with ‘ ’ number of molecules of phenyl hydrazine to yield osazone. The value of ‘ ’ is`,
    options: [
      `Four`,
      `One`,
      `Two`,
      `Three`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Three`
  },
  {
    question: `Diabetes is detected using ………. for testing urine of patients.`,
    options: [
      `Fehling ‘s solution`,
      `Tollen’s regent`,
      `enedict’s solution`,
      `aeyer’s reagent`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) enedict’s solution`
  },
  {
    question: `A nanopeptide contains ……. peptide linkages.`,
    options: [
      `10`,
      `8`,
      `9`,
      `18`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8`
  },
  {
    question: `The pH value of a solution in which a polar amino acid does not migrate under the influence of electric field is called: P a g e | 8`,
    options: [
      `Isoelectronic point`,
      `Isoelectric point`,
      `Neutralization point`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Isoelectric point`
  },
  {
    question: `Cellophane is made from:`,
    options: [
      `Cellulose`,
      `Phenol`,
      `Gum`,
      `Petroleum`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cellulose`
  },
  {
    question: `The letter ‘D’ in D-glucose signifies`,
    options: [
      `Configuration at all chiral carbons`,
      `Dextrorotatory`,
      `That it is a monosaccharide`,
      `Configuration at a particular chiral carbon`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Configuration at a particular chiral carbon`
  },
  {
    question: `The number of asymmetric carbon atoms in fructose are:`,
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
    question: `Which of the following compounds can be detected by Molisch’s test?`,
    options: [
      `Sugars`,
      `Amines`,
      `Primary alcohols`,
      `Nitro compounds`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sugars`
  },
  {
    question: `Vitamin which is believed to cure common cold is:`,
    options: [
      `A`,
      `C`,
      `K`,
      `E`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) C`
  },
  {
    question: `The store house for all biological information is:`,
    options: [
      `RNA`,
      `-RNA`,
      `DNA`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DNA`
  },
  {
    question: `Which of the following compounds is known as the antisterility factor?`,
    options: [
      `tocopherol`,
      `Retinol`,
      `Calciferol`,
      `Pyridoxine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) tocopherol`
  },
  {
    question: `Which amino acid has imidazole ring?`,
    options: [
      `Alanine`,
      `Leucine`,
      `Tyrosine`,
      `Histidine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Histidine`
  },
  {
    question: `DNA molecule consists of units of:`,
    options: [
      `Base-sugar`,
      `Base-sugar-phosphate`,
      `Base-phosphate`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Base-sugar-phosphate`
  },
  {
    question: `On fermentation, glucose yields`,
    options: [
      `Ethanol`,
      `Ethanal`,
      `Acetic acid`,
      `Fructose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ethanol`
  },
  {
    question: `In DNA, the complementary bases are,`,
    options: [
      `Adenine and thymine; guanine and cytocine`,
      `Uracil and adenine; cytocine and guanine`,
      `Adenine and guanine; thymine and cytocine`,
      `Adenine and thymine; guanine and uracil`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Adenine and thymine; guanine and cytocine`
  },
  {
    question: `Iodised salt prevents ……..`,
    options: [
      `TB`,
      `Anaemia`,
      `Goiter`,
      `Beri-beri`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Goiter`
  },
  {
    question: `Nucleotide pairs present in one turn of DNA helix`,
    options: [
      `4`,
      `10`,
      `8`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10`
  },
  {
    question: `Which of the following is not an amino acid?`,
    options: [
      `Glycine`,
      `Alanine`,
      `Histidine`,
      `Benzidine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Benzidine`
  },
  {
    question: `Proteins mainly contain:`,
    options: [
      `C, H, O and N`,
      `Only C and H`,
      `C, H and O`,
      `N and H`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) C, H, O and N`
  },
  {
    question: `The two forms of D-glucopyranose obtained from the solution of D-glucose are called`,
    options: [
      `Isomer`,
      `Anomer`,
      `Epimer`,
      `Enantiomer`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anomer`
  },
  {
    question: `Raffinose is`,
    options: [
      `Trisaccharide`,
      `Disaccharide`,
      `Monosaccharide`,
      `Polysaccharide`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Trisaccharide`
  },
  {
    question: `A saturated fatty acid found in oils and fats is:`,
    options: [
      `Palmitic acid`,
      `Linolenic acid`,
      `Oleic acid`,
      `Linoleic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Palmitic acid`
  },
  {
    question: `The enzyme that hydrolyses casein of milk into par casein is:`,
    options: [
      `Renoline`,
      `Rennin`,
      `Replication`,
      `Renil`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Rennin`
  },
  {
    question: `Which of the following is a fat soluble vitamin?`,
    options: [
      `Vitamin A`,
      `Riboflavin`,
      `Pyridoxine`,
      `Thiamine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Vitamin A`
  },
  {
    question: `The enzyme pepsin hydrolyses`,
    options: [
      `Proteins to amino acids`,
      `Fats to fatty acids`,
      `Glucose to ethyl alcohol`,
      `Poloysaccharides to monosaccharides P a g e | 9`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Proteins to amino acids`
  },
  {
    question: `Hydrolysis of fats and oils in the body produces:`,
    options: [
      `A fatty acid`,
      `Carbon dioxide`,
      `A lipase`,
      `An ester`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A fatty acid`
  },
  {
    question: `Deoxyribonucleic acid (DNA) is a polymer of units called:`,
    options: [
      `Sugars`,
      `Ribose`,
      `Amino acids`,
      `Nucleotides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Nucleotides`
  },
  {
    question: `Scurvy is caused due to deficiency of :`,
    options: [
      `Vitamin`,
      `Vitamin`,
      `Ascorbic acid`,
      `Glutamic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ascorbic acid`
  },
  {
    question: `Glycogen and amylopectin have:`,
    options: [
      `Same structure`,
      `Similar structure but differ in branching of glucose chain`,
      `Similar structure but differ in their solubility in water`,
      `Same structure but they are stored in different parts of the body`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Similar structure but differ in branching of glucose chain`
  },
  {
    question: `Lactose on hydrolysis yields:`,
    options: [
      `Two glucose molecules`,
      `Two galactose molecules`,
      `A galactose and fructose molecule`,
      `A galactose and a glucose molecule`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A galactose and a glucose molecule`
  },
  {
    question: `Glycogen is:`,
    options: [
      `Monosaccharide`,
      `Disaccharide`,
      `Trisaccharide`,
      `Polysaccharide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Polysaccharide`
  },
  {
    question: `Ribose sugar is a component of:`,
    options: [
      `DNA`,
      `RNA`,
      `Glucose`,
      `Wax`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) RNA`
  },
  {
    question: `Which one of the following is a non-steroidal hormone?`,
    options: [
      `Estradiol`,
      `Prostaglandin`,
      `Progesterone`,
      `Estrone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Prostaglandin`
  },
  {
    question: `It is best to carry out reactions with sugars in neutral or acid medium not in alkaline medium. This is because in alkaline medium sugar undergoes one of the following changes:`,
    options: [
      `Decomposition`,
      `Inversion`,
      `Rearrangement`,
      `Racemization`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Rearrangement`
  },
  {
    question: `Which is not characteristic of soap?`,
    options: [
      `They are colourless when pure`,
      `They are lighter than water`,
      `They are immiscible with organic solvents`,
      `They form emulsions with water`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) They are immiscible with organic solvents`
  },
  {
    question: `Give the pOH range for the isoelectric point of the amphoteric ion of an amino acid`,
    options: [
      `5.5 to 6.3`,
      `2.5 to 5.0`,
      `7.7 to 8.5`,
      `9.0 to 10.7`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7.7 to 8.5`
  },
  {
    question: `Wool-wax contains:`,
    options: [
      `Fatty acid ester`,
      `Paraffin wax`,
      `Cholesterol ester`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cholesterol ester`
  },
  {
    question: `Which one is the complimentary base of adenine in one strand to that in the other strand of DNA?`,
    options: [
      `Cytosine`,
      `Guanine`,
      `Uracil`,
      `Thymine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thymine`
  },
  {
    question: `The helical structure of protein is stabilized by`,
    options: [
      `Dipeptide bonds`,
      `Hydrogen bonds`,
      `Ether bonds`,
      `Peptide bonds`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hydrogen bonds`
  },
  {
    question: `The sweetest carbohydrate is`,
    options: [
      `Sucrose`,
      `Glucose`,
      `Fructose`,
      `Lactose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fructose`
  },
  {
    question: `Cane sugar is made of:`,
    options: [
      `5 membered glucose ring and 5 membered fructose ring`,
      `6 membered glucose ring and 6 membered fructose ring`,
      `6 membered glucose ring and 5 membered fructose ring`,
      `6 membered glucose ring and 6 membered fructose ring`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6 membered glucose ring and 5 membered fructose ring`
  },
  {
    question: `Casein contained in milk as a`,
    options: [
      `Carbohydrate`,
      `Lipid`,
      `Protein`,
      `Important molecule P a g e | 10`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Protein`
  },
  {
    question: `Which of the following statement (s) is/are true? (i) All amino acids contain one chiral centre (ii) Some amino acids contain one, while some contain more chiral centre or even no chiral centre (iii) All amino acids in protein have L-configuration (iv) All amino acids found in proteins have amino group`,
    options: [
      `(ii), (iii)and (iv)`,
      `(ii) and (iii)`,
      `(i), (iii) and (iv)`,
      `(i) and (iv)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (ii) and (iii)`
  },
  {
    question: `Which is not a member of vitamin B complex group?`,
    options: [
      `Retinol`,
      `Thiamine`,
      `Riboflavin`,
      `Pyridoxine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Retinol`
  },
  {
    question: `How many hydrogen bonds are present between pair of thymine and adenine in DNA?`,
    options: [
      `1-hydrogen bond`,
      `2- hydrogen bond`,
      `3-hydrogen bond`,
      `No bonds occur`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2- hydrogen bond`
  },
  {
    question: `The term LABS abbreviates as:`,
    options: [
      `Laboratory`,
      `Lauryl acidic benzene sulphate`,
      `Linear alkyl benzene sulphonate`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Linear alkyl benzene sulphonate`
  },
  {
    question: `Glucose cannot be classified as:`,
    options: [
      `A hexose`,
      `A carbohydrate`,
      `An oligosaccharide`,
      `An aldose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) An oligosaccharide`
  },
  {
    question: `The organic compounds of high physiological importance which are essential in small amounts for the well being of all human beings are:`,
    options: [
      `Proteins`,
      `Vitamins`,
      `Mineral salts`,
      `Enzymes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vitamins`
  },
  {
    question: `Protein is an important constituent of our diet. It functions mainly as:`,
    options: [
      `A sources of energy`,
      `Construction material`,
      `Shock absorber`,
      `Reserve food`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Construction material`
  },
  {
    question: `Which statement about ribose is incorrect?`,
    options: [
      `A polyhydroxy compound`,
      `An aldehyde sugar`,
      `Has six carbon atoms`,
      `Exhibits optical activity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Has six carbon atoms`
  },
  {
    question: `During hydrogenation of oils higher melting point ‘vegetable ghee’ is formed because:`,
    options: [
      `Hydrogen is dissolved in the oil`,
      `Hydrogen combines with oxygen of the oil`,
      `Esters of unsaturated fatty acids are reduced to those of saturated acids`,
      `Hydrogen drives off the impurities from the oil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Esters of unsaturated fatty acids are reduced to those of saturated acids`
  },
  {
    question: `Phospholipids are esters of glycerol with`,
    options: [
      `One carboxylic acid residue and two phosphate groups`,
      `Three phosphate groups`,
      `Three carboxylic acid residues`,
      `Two carboxylic acid residues and one phosphate groups`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Two carboxylic acid residues and one phosphate groups`
  },
  {
    question: `The structure of RNA molecule consists of:`,
    options: [
      `Double helix`,
      `Single helix`,
      `Single strand`,
      `Branched chain`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Single helix`
  },
  {
    question: `One mole of glucose on respiration produces:`,
    options: [
      `36 mole of ATP`,
      `34 mole of ATP`,
      `40 mole of ATP`,
      `38 mole of ATP`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 38 mole of ATP`
  },
  {
    question: `Number of possible isomers of glucose is:`,
    options: [
      `10`,
      `14`,
      `16`,
      `20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 16`
  },
  {
    question: `When glucose reacts with bromine water, the major product is:`,
    options: [
      `Gluconic acid`,
      `Saccharic acid`,
      `Sorbitol`,
      `Galactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Gluconic acid`
  },
  {
    question: `Starch is made up of:`,
    options: [
      `Glucose and fructose`,
      `Amylose and amylopectin`,
      `Amylose and glycogen`,
      `Amylopectin and glycogen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Amylose and amylopectin`
  },
  {
    question: `Glucose gives many reactions of aldehyde because: P a g e | 11`,
    options: [
      `It is hydrolysed to acetaldehyde`,
      `It is a polyhydroxy ketone`,
      `It is a cyclic aldehyde`,
      `It is a hemiacetal in equilibrium with its aldehyde form in solution`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) It is a hemiacetal in equilibrium with its aldehyde form in solution`
  },
  {
    question: `Which of the following is not an essential amino acid for man?`,
    options: [
      `Tyrosine`,
      `Leucine`,
      `Lysine`,
      `Valine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Tyrosine`
  },
  {
    question: `Which is not essential oil?`,
    options: [
      `Turpentine oil`,
      `Clove oil`,
      `Paraffin oil`,
      `Khus oil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Paraffin oil`
  },
  {
    question: `Which of the following is laevorotatory?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Sucrose`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fructose`
  },
  {
    question: `The number of asymmetric carbon atoms in the glucose molecule is:`,
    options: [
      `1`,
      `2`,
      `4`,
      `6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `Which of the following exists as Zwitter ion?`,
    options: [
      `p-aminophenol`,
      `Salicylic acid`,
      `Sulphanilic acid`,
      `Ethanolamine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sulphanilic acid`
  },
  {
    question: `Glucose is hydrolysed by zymase into:`,
    options: [
      `Dicarboxylic acid`,
      `Alcohol`,
      `Amino acids`,
      `Aromatic acids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Alcohol`
  },
  {
    question: `Which statement about protein is wrong?`,
    options: [
      `Proteins occur in all living cells`,
      `Proteins invariably contain N, O, C and H`,
      `Proteins are synthesized by plant kingdom only`,
      `Proteins are also synthesized in laboratory`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Proteins are also synthesized in laboratory`
  },
  {
    question: `Which of the following compound shows aromatic properties?`,
    options: [
      `Valine`,
      `Leucine`,
      `Serine`,
      `Tyrosine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tyrosine`
  },
  {
    question: `Bees wax is:`,
    options: [
      `Tripalmitin`,
      `Cetyl palmitate`,
      `Myricyl palmitate`,
      `Myricyl ceorate`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Myricyl palmitate`
  },
  {
    question: `Which of the following is a protein?`,
    options: [
      `Pepsin`,
      `Adrenaline`,
      `ATP`,
      `Glutamine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pepsin`
  },
  {
    question: `Which vitamin is closely involved in the formation of collagen-a protein present in connective tissues and bones?`,
    options: [
      `Riboflavin`,
      `Ascorbic acid`,
      `Niacin`,
      `Cyanocobalamine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ascorbic acid`
  },
  {
    question: `Raffinose on hydrolysis forms:`,
    options: [
      `Glucose`,
      `Fructose`,
      `Galactose`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Nucleic acid is a polymer of`,
    options: [
      `Nucleotides`,
      `amino acids`,
      `Nucleosides`,
      `Glucose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nucleotides`
  },
  {
    question: `Linseed oil is:`,
    options: [
      `Used in soap formation`,
      `Drying oil`,
      `Acts as carrier for paints`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Glucose and cane sugar can be distinguished by:`,
    options: [
      `Fehling’s solution`,
      `aeyer’s reagent`,
      `Molisch test`,
      `Iodine solution`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fehling’s solution`
  },
  {
    question: `Spermaceti is commonly used in:`,
    options: [
      `Fermentation of cane sugar`,
      `Preparation of acetic acid`,
      `Birth control`,
      `Cosmetics and soaps`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cosmetics and soaps`
  },
  {
    question: `Metal lauryl sulphate acts as:`,
    options: [
      `Soap`,
      `Disinfectant`,
      `Antiseptic`,
      `Detergent`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Detergent`
  },
  {
    question: `The process used in conversion of triolein to tristearin is`,
    options: [
      `Hrdrolysis`,
      `Hydration`,
      `Hydrogenation`,
      `Dehydrogenation P a g e | 12`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogenation`
  },
  {
    question: `When glucose reacts with bromine water the main product is`,
    options: [
      `Gluconic acid`,
      `Glyceraldehyde`,
      `Sorbitol`,
      `Saccharic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Gluconic acid`
  },
  {
    question: `Which of the following carbohydrates is synthesized by nature on the largest scale?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Lactose`,
      `Cellulose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cellulose`
  },
  {
    question: `The main structural feature of protein is`,
    options: [
      `Ester linkage`,
      `Ether linkage`,
      `Peptide linkage`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Peptide linkage`
  },
  {
    question: `Which of the following hormones contains iodine?`,
    options: [
      `Thyroxine`,
      `Insulin`,
      `Testosterone`,
      `Adrenaline`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thyroxine`
  },
  {
    question: `The following carbohydrate is`,
    options: [
      `A ketohexose`,
      `An aldohexose`,
      `An furanose`,
      `An pyranose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) An pyranose`
  },
  {
    question: `Which molecule possess the general formula of carbohydrates, but is not a carbohydrate?`,
    options: [
      `Glyceraldehyde`,
      `Arabinose`,
      `Acetic acid`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Acetic acid`
  },
  {
    question: `Deficiency of vitamin E causes:`,
    options: [
      `Sterility`,
      `Rickets`,
      `Beri-beri`,
      `Scurvy`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sterility`
  },
  {
    question: `Which is polysaccharide?`,
    options: [
      `Nylon`,
      `Polyethene`,
      `Glucose`,
      `Cellulose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cellulose`
  },
  {
    question: `anger’s method is used to identify`,
    options: [
      `C–terminal amino acid`,
      `N–terminal amino acid`,
      `Side chain`,
      `Molecular weight of protein`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Molecular weight of protein`
  },
  {
    question: `The carbon chain in fructose is identified by converting it into:`,
    options: [
      `α-methyl hexane`,
      `cyclohexane`,
      `-hexane`,
      `α-methyl caproic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) -hexane`
  },
  {
    question: `Progesterone is secreted by ……..`,
    options: [
      `Thyroid`,
      `Ovaries`,
      `Adrenal`,
      `Testes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ovaries`
  },
  {
    question: `Which of the following is a heterocyclic amino acid?`,
    options: [
      `Glycine`,
      `Alanine`,
      `Phenylalanine`,
      `Tryptophan`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tryptophan`
  },
  {
    question: `Which one is not a constituent of nucleic acid?`,
    options: [
      `Uracil`,
      `Guanidine`,
      `Phosphoric acid`,
      `Ribose sugar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Guanidine`
  },
  {
    question: `Which is used to identify glucose?`,
    options: [
      `Neutral ferric chloride`,
      `l alc.`,
      `Ammoniacal Ag P a g e | 13`,
      `a`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ammoniacal Ag P a g e | 13`
  },
  {
    question: `Which of the following is non-reducing sugar?`,
    options: [
      `Ribose`,
      `Lactose`,
      `Sucrose`,
      `Maltose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sucrose`
  },
  {
    question: `Hexoses and pentoses are`,
    options: [
      `Disaccharides`,
      `Monosaccharides`,
      `Polysaccharides`,
      `Oligosaccharides`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Monosaccharides`
  },
  {
    question: `The sugar present in honey is:`,
    options: [
      `Sucrose`,
      `Glucose`,
      `Fructose`,
      `Maltose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fructose`
  },
  {
    question: `Which one of the following is not a protein?`,
    options: [
      `Wool`,
      `Nail`,
      `Hair`,
      `DNA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) DNA`
  },
  {
    question: `The deficiency of vitamin causes`,
    options: [
      `Beri-bei`,
      `dermatitis`,
      `Scurvy`,
      `rickets`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Beri-bei`
  },
  {
    question: `The following carbohydrate is:`,
    options: [
      `A ketohexose`,
      `An aldohexose`,
      `An α-furanose`,
      `An α-pyranose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) An aldohexose`
  },
  {
    question: `The ultimate products of oxidation of most of hydrogen and carbon in food-stuffs are:`,
    options: [
      `alone`,
      `alone`,
      `and`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) and`
  },
  {
    question: `The sources of fats and oils are:`,
    options: [
      `Milk`,
      `Butter`,
      `Cheese`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The lye is:`,
    options: [
      `10% solution of NaOH`,
      `10% solution of KOH`,
      `10% solution of NaCl`,
      `10% solution of a`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10% solution of NaOH`
  },
  {
    question: `The two forms of D-glucopyranose obtained from the solution of D-glucose are called`,
    options: [
      `Isomer`,
      `Anomer`,
      `Epimer`,
      `Enantiomer`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anomer`
  },
  {
    question: `Glucose and fructose are:`,
    options: [
      `Chain isomers`,
      `Position isomers`,
      `Functional isomers`,
      `Optical isomers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Functional isomers`
  },
  {
    question: `Initiation of polypeptide chain is through`,
    options: [
      `Lysine`,
      `Glycine`,
      `Lencine`,
      `Methionine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Methionine`
  },
  {
    question: `Nucleic acids contain:`,
    options: [
      `4 purine bases`,
      `4 pyrimidine bases`,
      `2 purine bases and 3 pyrimidine bases`,
      `4 pyrimidine bases and one purine base`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 purine bases and 3 pyrimidine bases`
  },
  {
    question: `Antibiotic inhibiting translation in eukaryotes is`,
    options: [
      `Tetracyclin`,
      `Penicillin`,
      `Puromycin`,
      `Chloromycetin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Puromycin`
  },
  {
    question: `The term anomers of glucose refers to`,
    options: [
      `Isomers of glucose that differ in configurations at carbons one and four (C-1 and C-4)`,
      `A mixture of (D)-glucose and (L)-glucose`,
      `Enantiomers of glucose`,
      `Isomers of glucose that differ in configuration at carbon one (C-1)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Isomers of glucose that differ in configuration at carbon one (C-1)`
  },
  {
    question: `Sucrose is made up of:`,
    options: [
      `Glucopyranose and fructopyranose`,
      `A glucopyranose and a fructofuranose`,
      `A glycofuranose and a fructofuranose P a g e | 14`,
      `A glucofuranose and fructopyranose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A glucopyranose and a fructofuranose`
  },
  {
    question: `Fats, on alkaline hydrolysis, gives`,
    options: [
      `Oils`,
      `Soaps`,
      `Detergents`,
      `Glycol+ acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Soaps`
  },
  {
    question: `Lipids are`,
    options: [
      `Nucleic acids occurring in plants`,
      `Proteins occurring in animals`,
      `Carbohydrates occurring in plants`,
      `Fats of natural origin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fats of natural origin`
  },
  {
    question: `Which one of the following statements is correct?`,
    options: [
      `All amino acids are optically active.`,
      `All amino acids except glycine are optically active.`,
      `All amino acids except glutamic acid are optically active.`,
      `All amino acids except lysine are optically active.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) All amino acids except glycine are optically active.`
  },
  {
    question: `Vitamin D is also known as:`,
    options: [
      `Growth vitamin`,
      `Ascorbic acid`,
      `Reproductive vitamin`,
      `Sunshine vitamin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sunshine vitamin`
  },
  {
    question: `Which one of the following statement is not true reagarding (+) Lactose?`,
    options: [
      `(+) Lactose, contains 8-OH groups`,
      `On hydrolysis (+) Lactose gives equal amount of D(+) glucose and D(+) galactose`,
      `Lactose is a β-glycoside formed by the union of a molecule of D(+) glucose and a molecule of D(+) galactose`,
      `(+) Lactose is a reducing sugar and does not exhibit mutarotation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (+) Lactose is a reducing sugar and does not exhibit mutarotation`
  },
  {
    question: `The amino acid which doesn’t give purple colour in the ninhydrin test is`,
    options: [
      `Proline`,
      `Glycine`,
      `Lysine`,
      `Aspartic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Proline`
  },
  {
    question: `How can you say that glucose is cyclic compound?`,
    options: [
      `Glucose undergoes Tollen’s reaction`,
      `Glucose reacts with phenyl hydrazine`,
      `Glucose fails to react with sodium hydrogen sulphite`,
      `Glucose reacts with nitric acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose fails to react with sodium hydrogen sulphite`
  },
  {
    question: `An unsaturated acid found in natural oils and fats is:`,
    options: [
      `Palmitic acid`,
      `Myristic acid`,
      `Linoleic acid`,
      `Lauric acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Linoleic acid`
  },
  {
    question: `Which of the following elements is responsible for oxidation of water to in biological processes?`,
    options: [
      `Fe`,
      `Mn`,
      `Cu`,
      `Mo`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fe`
  },
  {
    question: `A tripeptide is composed equally of L-valine, L-tryosine and L-alanine (one molecule of each). How many isomeric tripeptide of this kind may exist?`,
    options: [
      `3`,
      `4`,
      `6`,
      `8`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6`
  },
  {
    question: `Which of the following is an example of conjugated protein?`,
    options: [
      `Albumin`,
      `Globulin`,
      `Glutelin`,
      `Glycoprotein`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycoprotein`
  },
  {
    question: `Which of the following is used in our body as a fuel for muscles and nerves and to build and repair body tissue?`,
    options: [
      `Cane sugar`,
      `Fructose`,
      `Proteins`,
      `Glucose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Proteins`
  },
  {
    question: `Pick out the one which doesn’t belong to the family?`,
    options: [
      `Pepsin`,
      `Cellulose`,
      `Ptyalin`,
      `Lipase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cellulose`
  },
  {
    question: `ellulose starch and glycogen are the polysaccharides having……..monosaccharide unit:`,
    options: [
      `Glucose`,
      `Ribose`,
      `Fructose`,
      `Pentose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Which one is a test for proteins?`,
    options: [
      `Beilstein test`,
      `Biuret test`,
      `enedict’s test`,
      `Molisch test`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Biuret test`
  },
  {
    question: `Cell membranes are mainly compose of :`,
    options: [
      `Phospholipids`,
      `Fats`,
      `Proteins`,
      `Carbohydrates P a g e | 15`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Phospholipids`
  },
  {
    question: `Which one of the following is not present in RNA?`,
    options: [
      `Uracil`,
      `Thymine`,
      `Ribose`,
      `Phosphate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Thymine`
  },
  {
    question: `In blood, the transport of oxygen from lungs to tissues is carried out by:`,
    options: [
      `White blood cells(leukocytes)`,
      `Red blood cells (erythrocytes )`,
      `Fibrinogen`,
      `Globulins`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Red blood cells (erythrocytes )`
  },
  {
    question: `Glycogen is :`,
    options: [
      `A polysaccharide found in both animals and plants`,
      `A polysaccharide found in plants`,
      `A polysaccharide found in animals`,
      `A polysaccharide found in honey`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A polysaccharide found in animals`
  },
  {
    question: `Which enzyme hydrolyses triglyceride to fatty acids and glycerol?`,
    options: [
      `Amylase`,
      `Maltase`,
      `Lipase`,
      `Pepsin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lipase`
  },
  {
    question: `Citrus fruits are an important source of vitamin:`,
    options: [
      `B`,
      `C`,
      `D`,
      `K`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) C`
  },
  {
    question: `Glucose reacts with acetyl chloride to form penta acetyl glucose, it indicates presence of:`,
    options: [
      `Five primary alcoholic groups`,
      `Five secondary alcoholic groups`,
      `Aldehyde as well as alcoholic group`,
      `Five ─ groups`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Five ─ groups`
  },
  {
    question: `Night-blindness may be caused by the deficiency of vitamin`,
    options: [
      `A`,
      `B`,
      `D`,
      `C`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A`
  },
  {
    question: `Zwitter ion is formed by`,
    options: [
      `Aniline`,
      `Acetanilide`,
      `Benzoic acid`,
      `Glycine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycine`
  },
  {
    question: `In human body enzymes hydrolyse protein into:`,
    options: [
      `A ketonic acid like`,
      `A hydroxyl acid like`,
      `Dicarboxylic acid like ―`,
      `Amino acid like`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Amino acid like`
  },
  {
    question: `Starch on hydrolysis by a dilute inorganic mineral acid gives:`,
    options: [
      `Sucrose`,
      `Glucose`,
      `Fructose`,
      `maltose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) maltose`
  },
  {
    question: `Oleic, stearic and palmitic acids are:`,
    options: [
      `Nucleic acids`,
      `Amino acids`,
      `Fatty acids`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fatty acids`
  },
  {
    question: `Oils contain a higher percentage of :`,
    options: [
      `Stearin`,
      `Butyrin`,
      `Olein`,
      `Palmitin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Olein`
  },
  {
    question: `Which of the following pairs give positive Tollen’s test?`,
    options: [
      `Glucose, sucrose`,
      `Glucose, fructose`,
      `Hexanal, acetophenone`,
      `Fructose, sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose, fructose`
  },
  {
    question: `The total number of basic groups in the following form of lysine is`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `Glucose or aldohexose contains:`,
    options: [
      `ne ─ group`,
      `Five ─ groups`,
      `One primary alcoholic group and four secondary alcoholic groups`,
      `All are correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All are correct`
  },
  {
    question: `The monosaccharides having anomeric carbon atom are P a g e | 16`,
    options: [
      `Geometrical isomers`,
      `and optical isomers`,
      `Having symmetrical carbon atoms`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) and optical isomers`
  },
  {
    question: `The charring product formed when is heated with conc. is due to:`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Dehydration`,
      `Dehydrogenation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dehydration`
  },
  {
    question: `The unused fat present in the body is:`,
    options: [
      `Converted into carbohydrates`,
      `Removed as waste from the body`,
      `Reconverted into animal fat and stored in different parts of the body`,
      `Easily destroyed by certain enzymes present in the body`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Reconverted into animal fat and stored in different parts of the body`
  },
  {
    question: `Which amino acid have more than one stereogenic centre?`,
    options: [
      `Aspartic acid`,
      `Lysine`,
      `Arginine`,
      `Histidine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Arginine`
  },
  {
    question: `Ligase is an enzyme required for`,
    options: [
      `Renaturation of DNA`,
      `Proof-reading`,
      `Joining DNA bits`,
      `Breaking of DNA`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Joining DNA bits`
  },
  {
    question: `urfactants and detergents have the same common property of……in them.`,
    options: [
      `Detergency`,
      `Surface activity`,
      `Viscosity`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Surface activity`
  },
  {
    question: `Vitamin is known as`,
    options: [
      `Pyridoxin`,
      `Thiamine`,
      `Tocopherol`,
      `Riboflavin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pyridoxin`
  },
  {
    question: `Sucrose on hydrolysis gives`,
    options: [
      `Glucose and maltose`,
      `Glucose and lactose`,
      `Glucose and fructose`,
      `Only glucose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose and fructose`
  },
  {
    question: `Detergents are better cleansing agent than soaps because:`,
    options: [
      `They wash clothes better`,
      `Absorb the hardness of water`,
      `They are less affected by hard water`,
      `They are less soapy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) They are less affected by hard water`
  },
  {
    question: `The reason for double helical structure of DNA is operation of`,
    options: [
      `an der Waals’ forces`,
      `Dipole-dipole interaction`,
      `Hydrogen bonding`,
      `Electrostatic attractions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen bonding`
  },
  {
    question: `Beri-Beri is caused due to:`,
    options: [
      `Vitamin A`,
      `Vitamin`,
      `Vitamin C`,
      `Vitamin D`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vitamin`
  },
  {
    question: `Which of the following is not present in a nucleotide?`,
    options: [
      `Cytosine`,
      `Guanine`,
      `Adenine`,
      `Tyrosine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tyrosine`
  },
  {
    question: `Sodium dodecyl benzene sulphonate is used as a:`,
    options: [
      `Pesticide`,
      `Soap`,
      `Fertilizer`,
      `Detergent`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fertilizer`
  },
  {
    question: `The reaction of glucose with red P + HI is called:`,
    options: [
      `andmeyer’s reaction`,
      `Reformatsky reaction`,
      `Gattermann’s reaction`,
      `Reduction`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Reduction`
  },
  {
    question: `Which base is present in RNA but not in DNA?`,
    options: [
      `Uracil`,
      `Cytosine`,
      `Guanine`,
      `Thymine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Uracil`
  },
  {
    question: `What is not a hexose?`,
    options: [
      `Glucose`,
      `Ribose`,
      `Fructose`,
      `Galactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ribose`
  },
  {
    question: `Which functional group participates in disulphide bond formation in proteins?`,
    options: [
      `Thiolacetone`,
      `Thiol`,
      `Thioether`,
      `Thioester`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Thiol`
  },
  {
    question: `Washing soap can be prepared by saponification with alkali and:`,
    options: [
      `Rose oil`,
      `Paraffin oil`,
      `Groundnut oil`,
      `Kerosene oil P a g e | 17`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Groundnut oil`
  },
  {
    question: `Deoxyribonucleic acid (DNA) consists of the following units:`,
    options: [
      `Peptides`,
      `Glucosides`,
      `Nucleotides`,
      `Deoxyribose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Nucleotides`
  },
  {
    question: `Fatty acid is to fat as glucose is to`,
    options: [
      `Cellulose`,
      `Glycogen`,
      `Starch`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which one of the following statements is true?`,
    options: [
      `Saponification of oil yields a diol`,
      `Drying of oil involves hydrolysis`,
      `Addition of antioxidant to oil minimizes rancidity`,
      `Refining of oil involves hydrogenation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Addition of antioxidant to oil minimizes rancidity`
  },
  {
    question: `In both DNA and RNA, heterocylic base and phosphate ester linkages are at`,
    options: [
      `and respectively of the sugar molecule`,
      `and respectively of the sugar molecule`,
      `and respectively of the sugar molecule`,
      `and respectively of the sugar molecule`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) and respectively of the sugar molecule`
  },
  {
    question: `The chemical name of vitamin C is`,
    options: [
      `Nicotinic acid`,
      `Folic acid`,
      `Tartaric acid`,
      `Ascorbic acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ascorbic acid`
  },
  {
    question: `Mutarotation doesn’t occur in`,
    options: [
      `Sucrose`,
      `D–glucose`,
      `L–glucose`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sucrose`
  },
  {
    question: `Deficiency of vitamin causes the disease:`,
    options: [
      `Cheilosis`,
      `Sterility`,
      `Convulsions`,
      `Beri-Beri`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Beri-Beri`
  },
  {
    question: `What is not true for carbohydrates?`,
    options: [
      `General formula is`,
      `Glucose is the most common monomer of carbohydrates`,
      `Fructose is the sweetest of all sugars`,
      `Do not conjugate with lipids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose is the most common monomer of carbohydrates`
  },
  {
    question: `Main constituent of plants is`,
    options: [
      `Cellulose`,
      `Starch`,
      `Fructose`,
      `Lipids`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cellulose`
  },
  {
    question: `Paraffin wax is not used:`,
    options: [
      `In making candles`,
      `As a coating on paper`,
      `In greases`,
      `As a stiffening agent in cosmetic creams`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) In greases`
  },
  {
    question: `Pancreatic juice contains the enzyme:`,
    options: [
      `Zymase`,
      `Invertase`,
      `Diastase`,
      `lipase`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) lipase`
  },
  {
    question: `Reverse transcription was discovered by`,
    options: [
      `Watson and Crick`,
      `Khorana`,
      `Temin and Baltimore`,
      `Beadle and Tatum`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Temin and Baltimore`
  },
  {
    question: `Glucose and fructose differ in:`,
    options: [
      `Taste`,
      `Action of heat`,
      `Action of Tollens’ reagent`,
      `Direction of optical rotation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Direction of optical rotation`
  },
  {
    question: `Digestion of fat in intestine is aided by:`,
    options: [
      `Diffusion`,
      `Protection`,
      `Peptization`,
      `Emulsification`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Emulsification`
  },
  {
    question: `Tributyrin is a fat present in butter. It is formed by combination of butyric acid with:`,
    options: [
      `Glycerol`,
      `Oleic acid`,
      `Stearic acid`,
      `Chloroform`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glycerol`
  },
  {
    question: `The nucleic acid base having two possible binding sites is`,
    options: [
      `Thymine`,
      `Cytocine`,
      `Guanine`,
      `Adenine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Guanine`
  },
  {
    question: `An achiral amino acid`,
    options: [
      `Alanine`,
      `Valine`,
      `Leucine`,
      `Glycine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycine`
  },
  {
    question: `Insulin regulates the metabolism of`,
    options: [
      `Minerals`,
      `Amino acids`,
      `Glucose`,
      `Vitamins`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose`
  },
  {
    question: `In glycine, the basic group is`,
    options: [
      `—`,
      `—`,
      `—`,
      `—`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) —`
  },
  {
    question: `Rice has deficiency of the essential amino acid:`,
    options: [
      `Alanine`,
      `Glycine`,
      `Lysine`,
      `Leucine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lysine`
  },
  {
    question: `Mammal’s fats are hydrolysed to relase fatty acids by`,
    options: [
      `Amylase`,
      `Lactase`,
      `Lipase`,
      `Insulin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lipase`
  },
  {
    question: `Which of the following has an imino group instead of amino group ?`,
    options: [
      `Proline`,
      `Isosleucine`,
      `Tryptophan`,
      `Serine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Proline`
  },
  {
    question: `Molecular weight of a protein is:`,
    options: [
      `10,000`,
      `1,000-10,000`,
      `100-1,000`,
      `>10,000`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) >10,000`
  },
  {
    question: `Fehling’s solution and benedict’s solution are reduced by glucose to form:`,
    options: [
      `CuO`,
      `u`,
      `u`,
      `Cu`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) u`
  },
  {
    question: `The product formed in the reaction of glycine with benzoyl chloride . a is`,
    options: [
      `PhCOCH2 NH2`,
      `PhCH2NH2`,
      `PhCONHCH3`,
      `PhCONHCH2CO2H`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) PhCONHCH2CO2H`
  },
  {
    question: `Proteins when heated with conc. give a yellow colour. This is`,
    options: [
      `oppe’s test`,
      `Acid-base test`,
      `iuret’s test`,
      `Xanthoprotic test`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Xanthoprotic test`
  },
  {
    question: `Night-blindness may be caused by the deficiency of vitamin`,
    options: [
      `A`,
      `B`,
      `C`,
      `D`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A`
  },
  {
    question: `Which of the following sugars is present in genetic factor DNA molecule?`,
    options: [
      `Glucose`,
      `Maltose`,
      `Ribose`,
      `Deoxyribose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Deoxyribose`
  },
  {
    question: `Point out the wrong statement about proteins.`,
    options: [
      `They are nitrogenous organic compounds of high molecular mass`,
      `They on hydrolysis by enzymes give amino acids`,
      `Many of them are enzymes P a g e | 19`,
      `They do not contain polypeptide linkages`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) They do not contain polypeptide linkages`
  },
  {
    question: `Gums are:`,
    options: [
      `Polysaccharides of more than one type of monosaccharides`,
      `Used as thickening agent`,
      `Used for improvement of texture in food industry`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Which of the following are all disaccharides?`,
    options: [
      `Maltose, sucrose, lactose`,
      `Maltose, lactose, glucose`,
      `Glycogen, lactose, sucrose`,
      `Starch, maltose, lactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Maltose, sucrose, lactose`
  },
  {
    question: `In the following reaction sequence, The end product would be useful as:`,
    options: [
      `A soap`,
      `A fertilizer`,
      `An explosive`,
      `A detergent`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A detergent`
  },
  {
    question: `Carbohydrates are:`,
    options: [
      `Hydrates of carbon`,
      `Polyhydroxy aldehydes or ketones`,
      `Polyhydroxy acids`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Polyhydroxy aldehydes or ketones`
  },
  {
    question: `A metal present in vitamin B12 is`,
    options: [
      `Aluminium`,
      `Zinc`,
      `Iron`,
      `Cobalt`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cobalt`
  },
  {
    question: `Soap molecule has two parts, a polar part and a non-polar part. When soap is added to water:`,
    options: [
      `Both parts dissolve in water`,
      `Non-polar part dissolves in water`,
      `Polar part dissolves in water`,
      `Both parts remain undissolved in water and form a hydrocarbon layer`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Polar part dissolves in water`
  },
  {
    question: `Proteins are polymers of amino acids. Which of the following is not a protein?`,
    options: [
      `Wool`,
      `Nails`,
      `Hair`,
      `DNA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) DNA`
  },
  {
    question: `Metallic soaps are:`,
    options: [
      `Salts of fatty acids with other metals except Na, K`,
      `Not used for cleaning purposes`,
      `Used as lubricant, driers, adhesives, etc`,
      `Possess all these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Possess all these`
  },
  {
    question: `Glucose and fructose are readily distinguished by using:`,
    options: [
      `Molisch test`,
      `Salivanoff test`,
      `Tollens’ reagent`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Salivanoff test`
  },
  {
    question: `With one of the pollutant gases in air haemoglobin of blood undergoes irreversible chemical combination thus, causing death. The gas is: P a g e | 20`,
    options: [
      `Carbon monoxide`,
      `Carbon dioxide`,
      `Sulphur dioxide`,
      `Ozone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Carbon monoxide`
  },
  {
    question: `Milk sugar is (a disaccharide) :`,
    options: [
      `Sucrose`,
      `Lactose`,
      `Fructose`,
      `Glucose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lactose`
  },
  {
    question: `The carbohydrates are important constituent of our diet; they function as:`,
    options: [
      `Biofuels to provide energy`,
      `Shock absorbing pad`,
      `Heat insulator`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Biofuels to provide energy`
  },
  {
    question: `The number of amino acids in insulin is`,
    options: [
      `21`,
      `574`,
      `51`,
      `5733`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 51`
  },
  {
    question: `Candles contain a mixture of:`,
    options: [
      `Bees wax and paraffin wax`,
      `Bees wax and stearic acid`,
      `Paraffin wax and stearic acid`,
      `Higher fatty acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Paraffin wax and stearic acid`
  },
  {
    question: `The prosthetic group haemoglobin is`,
    options: [
      `Porphin`,
      `Globulin`,
      `Haem`,
      `Gelatin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Haem`
  },
  {
    question: `To become a carbohydrate, a compound must contain atleast:`,
    options: [
      `6 carbons`,
      `3 carbons`,
      `4 carbons`,
      `2 carbons`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 carbons`
  },
  {
    question: `Amino acids have peptide linkage which is`,
    options: [
      `—CO—NH—`,
      `—C—NH2`,
      `SO—NH—`,
      `—CO—N—`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) —CO—NH—`
  },
  {
    question: `Hydrogenation of oils involves:`,
    options: [
      `Saturation of unsaturated fatty acids`,
      `Reaction with oxygen`,
      `Conversion into fatty acids`,
      `Driving of the impurities in oil by hydrogen gas`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Saturation of unsaturated fatty acids`
  },
  {
    question: `Which of the following hexoses will form the same osazone when treated with excess phenyl hydrazine?`,
    options: [
      `D-glucose , D-fructose and D-galactose`,
      `D-glucose , D-fructose and D-mannose`,
      `D-glucose , D-mannose and D-galactose`,
      `D-fructose, D-mannose and D-galactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) D-glucose , D-fructose and D-mannose`
  },
  {
    question: `Energy is stored in our body in the form of`,
    options: [
      `ATP`,
      `ADP`,
      `Fats`,
      `Carbohydrates`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ATP`
  },
  {
    question: `Which of the following contains the highest percentage of protein?`,
    options: [
      `Groundnut`,
      `ow’s milk`,
      `Egg`,
      `Wheat`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Groundnut`
  },
  {
    question: `Lipids are:`,
    options: [
      `Long chain fatty acid esters`,
      `Long chain sulphonic acid esters`,
      `Polymeric hydrocarbons`,
      `Polymeric aldehydes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Long chain fatty acid esters`
  },
  {
    question: `The colorific values of fats, carbohydrates and proteins vary in the order:`,
    options: [
      `Fats > carbohydrates > proteins`,
      `Fats > proteins > carbohydrates`,
      `Carbohydrates > proteins > fats`,
      `Proteins > carbohydrates > fats`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fats > carbohydrates > proteins`
  },
  {
    question: `Nucleotides and nucleosides mainly differ from each other in:`,
    options: [
      `Presence of phosphate units`,
      `Presence of base units`,
      `Presence of nucleic acids`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Presence of phosphate units`
  },
  {
    question: `Which of the following is an ester?`,
    options: [
      `Coconut oil`,
      `Kerosene`,
      `Soap`,
      `Glycerine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Coconut oil`
  },
  {
    question: `Which of the following statements about enzymes is incorrect? P a g e | 21`,
    options: [
      `The catalytic action of an enzyme is not specific`,
      `An enzymatic reaction is highly sensitive to temperature`,
      `The catalytic action of enzymes is due to their capacity to lower the energy of activation of a particular reaction`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The catalytic action of an enzyme is not specific`
  },
  {
    question: `Which of the following is not an -amino acid?`,
    options: [
      `Cysteine`,
      `Proline`,
      `Trypsin`,
      `Serine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Trypsin`
  },
  {
    question: `Which of the following is true?`,
    options: [
      `Nucleoside + phosphoester bond = nucleotide`,
      `D A’s are nucleotide and A’s are nucleoside`,
      `Nucleotide + phosphoester bond = nucleoside`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nucleoside + phosphoester bond = nucleotide`
  },
  {
    question: `The anti-sterility or anti-reproductory vitamin is:`,
    options: [
      `B`,
      `C`,
      `D`,
      `E`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) E`
  },
  {
    question: `Which statement about fats and oils is correct?`,
    options: [
      `They may be edible as well as inedible`,
      `Vegetable oils are different than essential oils`,
      `Soyabean oil, corn oil, olive oil, etc., are edible oils`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `The hormone used as an oral contraceptive is:`,
    options: [
      `Aldosterone`,
      `Cortisone`,
      `Progesterone`,
      `Testosterone`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Progesterone`
  },
  {
    question: `If -D-glucopyranose is reacted with acetic anhydride at 373 K, the major products is the β- isomer of the pentaacetate. It is attributed to`,
    options: [
      `Isomerisation of -D into β-D-glucose at 373 K`,
      `Opening of glucopyranose ring`,
      `Both the statements are correct`,
      `None of the statement is correct`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Isomerisation of -D into β-D-glucose at 373 K`
  },
  {
    question: `A decapeptide (mol. wt. 796) on complete hydrolysis gives glycine (mol. wt. 75), alanine and phenylalanine. Glycine contributes 47% to the total weight of the hydrolysed products. The number of glycine units present in the decapeptide is`,
    options: [
      `3`,
      `4`,
      `5`,
      `6`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6`
  },
  {
    question: `Vegetable oils are:`,
    options: [
      `Essential oils obtained from plants`,
      `Unsaturated acids`,
      `Glycerides of saturated fatty acids`,
      `Glycerides of unsaturated fatty acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycerides of unsaturated fatty acids`
  },
  {
    question: `Which of the following compounds is found abundantly in nature?`,
    options: [
      `Fructose`,
      `Starch`,
      `Glucose`,
      `Cellulose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cellulose`
  },
  {
    question: `The proteins are hydrolysed with acids, alkalies or enzymes finally to:`,
    options: [
      `Amino acids`,
      `Ethers`,
      `Esters`,
      `Cycloparaffins`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amino acids`
  },
  {
    question: `Which of the following is protein?`,
    options: [
      `Terry cotton`,
      `Natural silk`,
      `Nylon`,
      `Rayon`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Natural silk`
  },
  {
    question: `Which of the following indicates open chain structure of glucose?`,
    options: [
      `Pentaacetyl derivative of glucose`,
      `Cyanohydrins formation with HCN`,
      `Reaction with Fehling solution`,
      `eaction with Tollen’s reagent`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pentaacetyl derivative of glucose`
  },
  {
    question: `A distinctive and characteristics functional group of fats is`,
    options: [
      `A peptide group`,
      `An ester group`,
      `An alcoholic group`,
      `A ketonic group`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) An ester group`
  },
  {
    question: `In an amino acid, the carboxyl group ionizes at p 2. and ammonium ion at p . . The isoelectric point of the amino acid is at pH P a g e | 22`,
    options: [
      `5.97`,
      `2.34`,
      `9.60`,
      `6.97`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5.97`
  },
  {
    question: `The primary structure of protein is based upon the`,
    options: [
      `Hydrogen bonding`,
      `an der Waals’ attraction`,
      `Ionic bonding`,
      `Covalent bonding`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Covalent bonding`
  },
  {
    question: `A good example of an unsaturated acid got by the hydrolysis of an oil is:`,
    options: [
      `Palmitic acid`,
      `Stearic acid`,
      `Oleic acid`,
      `Lauric acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Oleic acid`
  },
  {
    question: `The epimer of glucose is:`,
    options: [
      `Galactose`,
      `Fructose`,
      `Mannose`,
      `Arabinose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fructose`
  },
  {
    question: `Enzymes, in the living systems`,
    options: [
      `Provide energy`,
      `Provide immunity`,
      `Transport oxygen`,
      `Catalyse biochemical processes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Catalyse biochemical processes`
  },
  {
    question: `Antibodies are:`,
    options: [
      `Carbohydrates`,
      `proteins`,
      `phospholipids`,
      `lipids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) proteins`
  },
  {
    question: `Point out the correct statement about proteins?`,
    options: [
      `They are nitrogenous organic compounds of high molecular weights`,
      `They on hydrolysis by enzyme give amino acids`,
      `Many of them are enzymes`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `There are 20 naturally occurring amino acids. The maximum number of tripeptides that can be obtained is`,
    options: [
      `8000`,
      `6470`,
      `7465`,
      `5360`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8000`
  },
  {
    question: `Number of chiral carbon atoms in D-(+)- glucose is`,
    options: [
      `Five`,
      `Six`,
      `Three`,
      `Four`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Five`
  },
  {
    question: `Glucose on oxidation gives the acid containing the C-chiral atoms equal to`,
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
    question: `The synthesis of carbohydrates in plants is mainly due to:`,
    options: [
      `Double decomposition`,
      `Photosynthesis`,
      `Hydrolysis of ingradients taken from soil`,
      `Nitrifying bacteria`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Photosynthesis`
  },
  {
    question: `The correct statement in respect of protein haemoglobin is that it`,
    options: [
      `Functions as a catalyst for biological reactions`,
      `Maintains blood sugar level`,
      `Act as an oxygen carrier in the blood`,
      `Forms antibodies and offers resistance to diseases`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Act as an oxygen carrier in the blood`
  },
  {
    question: `The reagent used in Ruff degradation is:`,
    options: [
      `aeyer’s reagent`,
      `Tollens’ reagent`,
      `Fenton’s reagent`,
      `enedict’s reagent`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fenton’s reagent`
  },
  {
    question: `Glucose when treated with in presence of dry l gas, gives -and β-methylglucosides because it contains`,
    options: [
      `An aldehydic group`,
      `a group`,
      `A ring structure`,
      `Five OH group`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A ring structure`
  },
  {
    question: `Iodine value related to`,
    options: [
      `Fats and oils`,
      `Alcohols`,
      `Esters`,
      `Hydrocarbons`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fats and oils`
  },
  {
    question: `Complete hydrolysis of cellulose gives`,
    options: [
      `D-fructose`,
      `D-ribose`,
      `D-glucose`,
      `L-glucose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) D-glucose`
  },
  {
    question: `Dihydroxy acetone ( ) has the general formula of carbohydrate but not included in this class because:`,
    options: [
      `It does not contain polyhydroxy gp.`,
      `It does not contain aldehyde gp.`,
      `It is not optically active`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) It is not optically active`
  },
  {
    question: `Fats contain higher percentage of :`,
    options: [
      `Unsaturated fatty acids`,
      `Saturated fatty acids`,
      `Free fatty acids`,
      `Glycerol`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Saturated fatty acids`
  },
  {
    question: `All monosaccharides ………….. Tollen’s reagent.`,
    options: [
      `Oxidises`,
      `Condense with`,
      `Reduces`,
      `Add to`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Reduces`
  },
  {
    question: `Which one of the following is a conjugated protein?`,
    options: [
      `Phosphoprotein`,
      `Glycoprotein`,
      `Chromoprotein`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Proteins give a white precipitate with Million’s reagent which is:`,
    options: [
      `Mercurous and mercuric nitrate in`,
      `Mercurous and mercuric chloride in HCI`,
      `Mercurous and mercuric chloride in`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Mercurous and mercuric nitrate in`
  },
  {
    question: `In fermentation by zymase, alcohol and , are obtained from:`,
    options: [
      `Glucose`,
      `Invert sugar`,
      `Fructose`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `A certain compound gives negative test with ninhydrin and positive test with enedict’s solution. The compound is`,
    options: [
      `A protein`,
      `A monosaccharide`,
      `A lipid`,
      `An amino acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A monosaccharide`
  },
  {
    question: `The function of fat in the body is to act:`,
    options: [
      `As reserve food`,
      `As thermal insulator and to protect the body from loss of heat`,
      `To absorb and carrying vitamin A and D in the body`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `The hormone which maintains blood sugar level is:`,
    options: [
      `Oxytocin`,
      `Haemoglobin`,
      `Insulin`,
      `ptylin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Insulin`
  },
  {
    question: `Which one of the following is not a protein?`,
    options: [
      `Wool`,
      `Nail`,
      `Hair`,
      `DNA P a g e | 24`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) DNA P a g e | 24`
  },
  {
    question: `Osazone formation involves only 2 carbon atoms of glucose because of:`,
    options: [
      `Chelation`,
      `Oxidation`,
      `Reduction`,
      `Hydrolysis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxidation`
  },
  {
    question: `Protein which acts as hormone is:`,
    options: [
      `Casein`,
      `Oxytocin`,
      `Trypsin`,
      `Keratin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxytocin`
  },
  {
    question: `The only vitamin with metal atom in it`,
    options: [
      `Vitamin A`,
      `Vitamin K`,
      `Vitamin`,
      `Vitamin E`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vitamin`
  },
  {
    question: `If two moles of glucose are oxidized in the body through respiration, the number of moles of ATP produced are`,
    options: [
      `19`,
      `38`,
      `57`,
      `76`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 76`
  },
  {
    question: `Which of the following is the sweetest sugar?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Lactose`,
      `Sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fructose`
  },
  {
    question: `Kwashiorkor is caused by the deficiency of:`,
    options: [
      `Vitamins`,
      `hormones`,
      `Amino acids`,
      `Essential amino acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Amino acids`
  },
  {
    question: `The main role of oils and fats as constituents in our food is to:`,
    options: [
      `Act as stored source of energy`,
      `To meet immediate energy needs of the body`,
      `To catalyse biochemical process`,
      `Form the structural material of tissues`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) To meet immediate energy needs of the body`
  },
  {
    question: `Acrolein test is positive for`,
    options: [
      `Polysaccharides`,
      `Proteins`,
      `Oils and fats`,
      `Reducing sugars`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Oils and fats`
  },
  {
    question: `An electric current is passed through an aqueous solution of a mixture of alanine (isoelectric point 6.0) glutamic acid (3.2) and arginine (10.7) buffered at pH6. What is the fate of the three acids?`,
    options: [
      `Glutamic acid migrates of anode at pH6. Arginine present as a cation and migrates to the cathode. Alanine in a dipolar ion remains uniformly distributed in solution.`,
      `Glutamic acid migrates to cathode and others remain uniformly distributed in solution.`,
      `All three remain uniformly distributed in solution.`,
      `All three move to cathode.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glutamic acid migrates of anode at pH6. Arginine present as a cation and migrates to the cathode. Alanine in a dipolar ion remains uniformly distributed in solution.`
  },
  {
    question: `The non-proteinous substances which certain enzymes require for their activity are called:`,
    options: [
      `Catalysts`,
      `Inhibitors`,
      `Co-enzymes`,
      `Epimers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Co-enzymes`
  },
  {
    question: `Soaps do not form froths easily from hard water because:`,
    options: [
      `Of formation of insoluble salts`,
      `Of formation of complex salts`,
      `Of lower solubility of soaps in hard water`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Of formation of insoluble salts`
  },
  {
    question: `Human digestive system does not hydrolyse:`,
    options: [
      `Starch`,
      `Maltose`,
      `Glycogen`,
      `Cellulose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cellulose`
  },
  {
    question: `Soft soaps are:`,
    options: [
      `Sodium salts of fatty acids`,
      `Potassium salts of fatty acids containing excess of free alkali`,
      `Potassium salts of fatty acids containing no free alkali`,
      `Calcium salts of fatty acids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Potassium salts of fatty acids containing excess of free alkali`
  },
  {
    question: `A protein that controls the metabolism of glucose is:`,
    options: [
      `Oxytocin`,
      `Insulin`,
      `Haemoglobin`,
      `keratin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Insulin`
  },
  {
    question: `Biological catalyst (enzymes) belong to:`,
    options: [
      `Polysaccharides`,
      `Synthetic polymers`,
      `Polypeptides`,
      `Poly nitrogen heterocycles P a g e | 25`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Polypeptides`
  },
  {
    question: `Fibrous proteins are present in:`,
    options: [
      `Wool`,
      `Silk`,
      `Nails`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which one of the following is an amine hormone?`,
    options: [
      `Oxypurin`,
      `Insulin`,
      `Progesterone`,
      `Thyroxine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thyroxine`
  },
  {
    question: `Gene is a segment of`,
    options: [
      `DNA`,
      `Protein`,
      `-RNA`,
      `-RNA`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) DNA`
  },
  {
    question: `When glucose is heated with nitric acid, the product is:`,
    options: [
      `Gluconic acid`,
      `Glucaric acid`,
      `Glycolic acid`,
      `Oxalic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucaric acid`
  },
  {
    question: `Pick out the unsaturated fatty acid from the following`,
    options: [
      `Stearic acid`,
      `Lauric acid`,
      `Oleic acid`,
      `Palmitic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Oleic acid`
  },
  {
    question: `An organic compound answers Molisch’s test as well as enedict‘s test. ut it doesn’t answer cliwanoff‘s test. Most probably, it is`,
    options: [
      `Sucrose`,
      `Protein`,
      `Fructose`,
      `Maltose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Maltose`
  },
  {
    question: `Rice is deficient in`,
    options: [
      `Lysine`,
      `Alanine`,
      `Glycine`,
      `Leucine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Lysine`
  },
  {
    question: `with completely radioactive DNA was allowed to replicate in non-radioactive medium for two generations. Percentage of bacteria with radioactive DNA is`,
    options: [
      `100%`,
      `12.55%`,
      `50%`,
      `25%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 50%`
  },
  {
    question: `Which one of the following does not exhibit the phenomenon of mutarotation?`,
    options: [
      `(+) Sucrose`,
      `(+) Lactose`,
      `(+) Maltose`,
      `(-) Fructose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (+) Sucrose`
  },
  {
    question: `Redness of blood is because of the presence of:`,
    options: [
      `Iron in haeme pigment`,
      `Haemoglobin`,
      `Copper in haeme pigment`,
      `All of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Iron in haeme pigment`
  },
  {
    question: `Which of the following is not a pyrimidine base?`,
    options: [
      `Thymine`,
      `Guanine`,
      `Cytosine`,
      `Uracil`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Guanine`
  },
  {
    question: `Fats are ester of`,
    options: [
      `Sugar`,
      `Glycerol`,
      `Tributyrine`,
      `Polypeptide`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glycerol`
  },
  {
    question: `Amylose is a polymer of :`,
    options: [
      `α-D glucopyranose`,
      `Fructose`,
      `β-fructose`,
      `β -D fructose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) α-D glucopyranose`
  },
  {
    question: `Which one of the following vitamin deficiency causes rickets?`,
    options: [
      `Vitamin A`,
      `Vitamin B`,
      `Vitamin C`,
      `Vitamin D P a g e | 26`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Vitamin D P a g e | 26`
  },
  {
    question: `Hydrolysis of sucrose with dilute aqueous sulphuric acid yields`,
    options: [
      `1 : 1D-(+)–glucose; D-(-)-fructose`,
      `1 : 2D-(+)–glucose; D-(-)-fructose`,
      `1 : 1D-(-)–glucose; D-(+)-fructose`,
      `1 : 2D-(-)–glucose ; D-(+)-fructose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 : 1D-(+)–glucose; D-(-)-fructose`
  },
  {
    question: `Which is fat soluble vitamin?`,
    options: [
      `Vitamin A`,
      `Pyridoxin`,
      `Riboflavin`,
      `Thiamine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Vitamin A`
  },
  {
    question: `Denaturation of proteins leads to loss of its biological activity by`,
    options: [
      `Formation of amino acids`,
      `Loss of primary structure`,
      `Loss of both primary and secondary structures`,
      `Loss of both secondary and tertiary structures`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Loss of both secondary and tertiary structures`
  },
  {
    question: `An aldose is converted into its next higher homologue by:`,
    options: [
      `uff ‘s method`,
      `Amadori rearrangement`,
      `iliani’s synthesis`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) iliani’s synthesis`
  },
  {
    question: `When fat is heated with NaOH the substances formed are:`,
    options: [
      `Oil and a`,
      `Soap and glycerol`,
      `Soap and oil`,
      `Soapless detergent and water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Soap and glycerol`
  },
  {
    question: `Paraffin waxes are:`,
    options: [
      `Higher alkanes`,
      `Higher alkenes`,
      `Higher alkynes`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Higher alkanes`
  },
  {
    question: `The enzymes which have control site in addition to active site are called`,
    options: [
      `Holozymes`,
      `Coenzymes`,
      `Apoenzymes`,
      `Allosteric enzymes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Allosteric enzymes`
  },
  {
    question: `The intermediate compound in the conversion of starch to glucose is:`,
    options: [
      `Lactose`,
      `Maltose`,
      `Fructose`,
      `Sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Maltose`
  },
  {
    question: `Lactose gives on hydrolysis`,
    options: [
      `Glucose`,
      `Glucose and galactose`,
      `Fructose`,
      `Glucose and fructose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose and galactose`
  },
  {
    question: `When glucose reacts with bromine water the main product is`,
    options: [
      `Acetic acid`,
      `Saccharic acid`,
      `Glyceraldehydes`,
      `Gluconic acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Gluconic acid`
  },
  {
    question: `The vitamin that is most readily manufactured in our bodies is:`,
    options: [
      `Vitamin A`,
      `Vitamin B`,
      `Vitamin C`,
      `Vitamin D`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Vitamin D`
  },
  {
    question: `Maximum amount of RNA is found in`,
    options: [
      `Nucleolus`,
      `Chloroplast`,
      `Ribosomes`,
      `Cytoplasm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nucleolus`
  },
  {
    question: `The function(s) of DNA is/are:`,
    options: [
      `Protein synthesis`,
      `Self replication`,
      `Store of hereditary information`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Drying oils are used:`,
    options: [
      `In the manufacture of paints`,
      `In the manufacture of varnishes`,
      `In the manufacture of linoleum products`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `An example of disaccharide made up of two units of the same monosaccharides is:`,
    options: [
      `maltose`,
      `Maltose`,
      `Sucrose`,
      `Lactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) maltose`
  },
  {
    question: `Glucose molecules reacts with number of molecules of phenylhydrazine to yield osazone. The value of is`,
    options: [
      `Three`,
      `Two`,
      `One`,
      `Four`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Three`
  },
  {
    question: `A solution of D-glucose in water rotates the plane polarised light: P a g e | 27`,
    options: [
      `To the right`,
      `To the left`,
      `To either side`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) To the right`
  },
  {
    question: `Which is not an unsaturated acid?`,
    options: [
      `Oleic acid`,
      `Linoleic acid`,
      `Linolenic acid`,
      `Myristic acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Myristic acid`
  },
  {
    question: `When is acylated using Ac`,
    options: [
      `Its configuration is retained`,
      `Its configuration is inverted`,
      `It becomes unstable`,
      `No reaction takes place`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Its configuration is retained`
  },
  {
    question: `Increased blood pressure may be caused by excess secretion of:`,
    options: [
      `Thyroxin`,
      `Testosterone`,
      `Estradiol`,
      `Adrenaline`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Adrenaline`
  },
  {
    question: `Essential oils are:`,
    options: [
      `Mixture of various hydrocarbons`,
      `Pleasant smelling liquids occurring in plants`,
      `Mixture of higher fatty acids`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pleasant smelling liquids occurring in plants`
  },
  {
    question: `Insulin, a protein acts as:`,
    options: [
      `An antibody`,
      `A hormone`,
      `An enzyme`,
      `A transport agent`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A hormone`
  },
  {
    question: `The change in optical rotation with time of freshly prepared solution of reducing sugar is known as`,
    options: [
      `Inversion`,
      `Specific rotation`,
      `Rotatory motion`,
      `Mutarotation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mutarotation`
  },
  {
    question: `The number of atoms in the ring structure of pyranoses are: Carbon Oxygen`,
    options: [
      `5 1`,
      `4 2`,
      `4 1`,
      `3 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 1`
  },
  {
    question: `Which of the following compounds, when heated at 483 K turns to caramel?`,
    options: [
      `Glucose`,
      `Sucrose`,
      `Fructose`,
      `Lactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Sucrose`
  },
  {
    question: `If one strand of DNA has the sequence ATCGTATG, the sequence in the complementary strand would be`,
    options: [
      `TAGCTTAC`,
      `TCACATAC`,
      `TAGCATAC`,
      `TACGATAC`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) TAGCATAC`
  },
  {
    question: `The detergency of a substance can be increased by addition of :`,
    options: [
      `Another detergent`,
      `Builders like sodium tripoly phosphate`,
      `Presence of other additive`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Purity of butter is determined in terms of:`,
    options: [
      `Saponification value`,
      `Iodine value`,
      `Acetyl value`,
      `Reichert-Meissl value`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Reichert-Meissl value`
  },
  {
    question: `Which amino acid has pyhenyl —OH group?`,
    options: [
      `Lysine`,
      `Arginine`,
      `Proline`,
      `Tyrosine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tyrosine`
  },
  {
    question: `Hydrolytic reaction of fats with caustic soda is known as:`,
    options: [
      `Esterification`,
      `Saponification`,
      `Acetylation`,
      `Carboxylation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Saponification`
  },
  {
    question: `The enzyme that is used to dissolve blood clot is`,
    options: [
      `Trypsin`,
      `Renin`,
      `Streptokinase`,
      `Tyrosinase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Streptokinase`
  },
  {
    question: `Secondary structure of proteins refers to:`,
    options: [
      `Mainly denaturated proteins and structure of prosthetic group`,
      `Three dimensional structure specially the bond between amino acid residues that are distant from each other in polypeptide chain`,
      `Linear sequence of amino acid residue in the polypeptide chain`,
      `Regular folding patterns of continuous portion of the polypeptide chain`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Regular folding patterns of continuous portion of the polypeptide chain`
  },
  {
    question: `Hard soaps are:`,
    options: [
      `Sodium salts of higher fatty acids`,
      `Potassium salts of higher fatty acids P a g e | 28`,
      `Calcium salts of higher fatty acids`,
      `Magnesium salts of higher fatty acids`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sodium salts of higher fatty acids`
  },
  {
    question: `Which of the following body parts is not composed of structural proteins?`,
    options: [
      `Muscle`,
      `Nails`,
      `Bones`,
      `Skin and bone matrix`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nails`
  },
  {
    question: `In an alkaline medium, Glycine predominantly exists as/in a/an`,
    options: [
      `Cation`,
      `Anion`,
      `Zwitter ion`,
      `Covalent form`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anion`
  },
  {
    question: `An antigen develops antibodies which protect the body from their harmful effects. The antibodies are:`,
    options: [
      `Immunoglobulins`,
      `Phospholipids`,
      `Albumins`,
      `Lymphocytes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Immunoglobulins`
  },
  {
    question: `The process of respiration in absence of oxygen is called:`,
    options: [
      `Metabolic`,
      `Aerobic`,
      `Anaerobic`,
      `Glycolysis`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Anaerobic`
  },
  {
    question: `Globular proteins are present in:`,
    options: [
      `Blood`,
      `Eggs`,
      `Milk`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Polypeptides having, molecular weights, above 10000 are known as`,
    options: [
      `Amino acids`,
      `Hormones`,
      `Proteins`,
      `Terminal amino acids`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Proteins`
  },
  {
    question: `At intermediate pH values of about 6.0, an amino acid behaves as a dipolar ion or Zwitter ion. On decreasing and increasing the pH values, the amino acid becomes`,
    options: [
      `Basic and acidic respectively`,
      `Acidic and basic respectively`,
      `Remains in the state of a neutral molecule`,
      `Loses its optical activity with the exception of glycine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Acidic and basic respectively`
  },
  {
    question: `Fructose reduces Tollens’ reagent due to:`,
    options: [
      `Asymmetric carbons`,
      `Primary alcoholic group`,
      `Secondary alcoholic group`,
      `Enolisation of fructose followed by conversion to aldehyde by base`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Enolisation of fructose followed by conversion to aldehyde by base`
  },
  {
    question: `Glucose on reduction with Na/Hg and water gives:`,
    options: [
      `Sorbitol`,
      `Fructose`,
      `Saccharic acid`,
      `Gluconic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sorbitol`
  },
  {
    question: `The hormone insulin is a secretion of the organ:`,
    options: [
      `Ovary`,
      `Testes`,
      `Adrenal cortex`,
      `Pancreas`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Pancreas`
  },
  {
    question: `Vitamin C is:`,
    options: [
      `Alcohol`,
      `Amide`,
      `Amine`,
      `Lactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Alcohol`
  },
  {
    question: `In an electric field, if an amino acid migrates towards cathode, the pH of the solution is said to be`,
    options: [
      `Less than pI`,
      `More than pI`,
      `Equal to pI`,
      `7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Less than pI`
  },
  {
    question: `When sucrose is heated with concentrated nitric acid the product is:`,
    options: [
      `Saccharic acid`,
      `Oxalic acid`,
      `Formic acid`,
      `Invert sugar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxalic acid`
  },
  {
    question: `Which enzyme convert glucose into alcohol?`,
    options: [
      `Invertase`,
      `Zymase`,
      `Maltase`,
      `Diastase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Zymase`
  },
  {
    question: `Waxes are along chain compounds belonging to the class of:`,
    options: [
      `Acids`,
      `Alcohols`,
      `Esters`,
      `Ethers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Esters`
  },
  {
    question: `Proteins give:`,
    options: [
      `A violet colour with alkaline u solution`,
      `Form a purple colour on boiling with dilute ninhydrin solution`,
      `Yellow colour on boiling with`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Which compounds is orbtained, when glucose reacts with excess C6H5 —NH . NH2?`,
    options: [
      `Glucosazone`,
      `Gluconic acid`,
      `Glucose phenyl hydrazone`,
      `Saccharic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucosazone`
  },
  {
    question: `Carbohydrates are used by body mainly`,
    options: [
      `For obtaining vitamins`,
      `As source of energy`,
      `For all its developmental needs`,
      `For building muscles P a g e | 29`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) As source of energy`
  },
  {
    question: `The enzyme carbonic anhydrase catalyses the change:`,
    options: [
      `Carbonic acid to and`,
      `Lactose to glucose and galactose`,
      `Maltose to glucose`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Carbonic acid to and`
  },
  {
    question: `Which of the following pairs give positive Tollen’s test?`,
    options: [
      `Glucose , sucrose`,
      `Glucose , fructose`,
      `Hexanal, acetophenone`,
      `Fructose, sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose , fructose`
  },
  {
    question: `The end product of protein digestion is:`,
    options: [
      `Amino acid`,
      `Glucose`,
      `Glycerol`,
      `Oxalic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amino acid`
  },
  {
    question: `Glucose is a/an`,
    options: [
      `Polyhydroxy ketone`,
      `Alcohol`,
      `Hydrate of carbon`,
      `Pentahydroxy aldehyde`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Pentahydroxy aldehyde`
  },
  {
    question: `Enzymes are made up of`,
    options: [
      `Edible proteins`,
      `Proteins with specific structure`,
      `Nitrogen containing carbohydrates`,
      `Carbohydrates`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Proteins with specific structure`
  },
  {
    question: `Which are called biomolecules?`,
    options: [
      `Carbohydrate`,
      `Protein`,
      `Lipids`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The metal present in vitamin is`,
    options: [
      `Iron`,
      `Manganese`,
      `Cobalt`,
      `Mercury`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cobalt`
  },
  {
    question: `When adenine is attached to ribose sugar, it is called adenosine. To make a nucleotide from it, it would require`,
    options: [
      `Oxygenation`,
      `Addition of a base`,
      `Addition of phosphate`,
      `Hydrogenation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Addition of phosphate`
  },
  {
    question: `Complete hydrolysis of cellulose gives`,
    options: [
      `D-fructose`,
      `D-ribose`,
      `D-glucose`,
      `L-glucose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) D-glucose`
  },
  {
    question: `Drying oils are so called because they:`,
    options: [
      `Are volatile and so evaporate rapidly`,
      `Are hygroscopic and so absorb moisture from the surroundings`,
      `Are easily hydrolysed by atmospheric moisture to give solid products`,
      `Are highly unsaturated and so undergo atmospheric oxidation to yield resinous residue and becomes hard solid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Are highly unsaturated and so undergo atmospheric oxidation to yield resinous residue and becomes hard solid`
  },
  {
    question: `Cellulose is a:`,
    options: [
      `Monosaccharide`,
      `Disaccharide`,
      `Polysaccharide`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Polysaccharide`
  },
  {
    question: `An essential constituent of plant is:`,
    options: [
      `Cellulose`,
      `Glucose`,
      `Sugar`,
      `Raffinose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cellulose`
  },
  {
    question: `Maltose is made up of:`,
    options: [
      `α-D glucose`,
      `α and β-D glucose`,
      `Glucose and fructose`,
      `Fructose only`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) α-D glucose`
  },
  {
    question: `The chemical name of vitamin B1 is P a g e | 30`,
    options: [
      `Ascorbic acid`,
      `Riboflavin`,
      `Pyridoxine`,
      `Thiamine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thiamine`
  },
  {
    question: `Pyranose structure of glucose is:`,
    options: [
      `Hexagonal`,
      `Pentagonal`,
      `Linear`,
      `Tetrahedral`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hexagonal`
  },
  {
    question: `Oils and fats in our food not only provide us energy but also act as carriers of certain vitamins such as:`,
    options: [
      `A and B`,
      `A and C`,
      `B and C`,
      `A and D`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A and D`
  },
  {
    question: `Glucose gives the silver mirror test with ammoniacal solution of silver nitrate because it contains:`,
    options: [
      `Aldehydes gp.`,
      `Ester gp.`,
      `Ketone gp.`,
      `Amide gp.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aldehydes gp.`
  },
  {
    question: `Which of the following statements is not true?`,
    options: [
      `Fats and oils are stored source of energy`,
      `They provide more energy than proteins or carbohydrates`,
      `They help in absorbing the vitamins A and D`,
      `Fats are soluble in water`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fats are soluble in water`
  },
  {
    question: `Direct conversion of starch into glucose may be carried out by:`,
    options: [
      `Fermentation with diastase`,
      `Fermentation with zymase`,
      `Heating it with dil. HCl`,
      `Fermentation with maltase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Heating it with dil. HCl`
  },
  {
    question: `In alkaline medium, alanine exits predominantly as`,
    options: [
      `Anion`,
      `Zwitter ion`,
      `Cation`,
      `Covalent form`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Anion`
  },
  {
    question: `Double stranded DNA virus with 20,000 base pairs has nucleotides`,
    options: [
      `20,000`,
      `10,000`,
      `666`,
      `40,000`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 40,000`
  },
  {
    question: `A diabetic person carries a packet of glucose with him always because`,
    options: [
      `Glucose reduces the blood sugar level slowly`,
      `Glucose increases the blood sugar level slowly`,
      `Glucose reduces the blood sugar level`,
      `Glucose increases the blood sugar level almost-instantaneously.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glucose increases the blood sugar level almost-instantaneously.`
  },
  {
    question: `Ascorbic acid is:`,
    options: [
      `Vitamin C`,
      `Enzyme`,
      `Protein`,
      `Lipid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Vitamin C`
  },
  {
    question: `Which one is the complimentary base in RNA strand to the adenine base in DNA during protein synthesis?`,
    options: [
      `Adenine`,
      `Guanine`,
      `Uracil`,
      `Cytosine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cytosine`
  },
  {
    question: `The purine base present in RNA is P a g e | 31`,
    options: [
      `Guanine`,
      `Thymine`,
      `Cytosine`,
      `Uracil`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Guanine`
  },
  {
    question: `Which of the following is proteolytic enzyme?`,
    options: [
      `Insulin`,
      `Diastase`,
      `Pepsin`,
      `Adenine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pepsin`
  },
  {
    question: `Which lipid is not obtained by the hydrolysis of simple lipid and compound lipid from the following?`,
    options: [
      `Cholesterols`,
      `Neutral fats`,
      `Carotenoid`,
      `Terpenes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neutral fats`
  },
  {
    question: `A soap can be obtained by the saponification of:`,
    options: [
      `Liquid paraffin`,
      `Coconut oil`,
      `Lemongrass oil`,
      `Sandal wood`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Coconut oil`
  },
  {
    question: `Ribose is an example of`,
    options: [
      `Ketohexose`,
      `disaccharide`,
      `Pentose`,
      `Polysaccharide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pentose`
  },
  {
    question: `Which of the following reagent used to identify fructose?`,
    options: [
      `Neutral Fe l`,
      `l / alc KOH`,
      `Ammoniacal Ag`,
      `Iodine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ammoniacal Ag`
  },
  {
    question: `Which of the following set consists only of essential amino acids?`,
    options: [
      `Alanine, tyrosine, cystine`,
      `Leucine, lysine, tryptophane`,
      `Alanine , glutamine, lycine`,
      `Leucine, proline, glycine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Leucine, lysine, tryptophane`
  },
  {
    question: `Which of the following is present in animals like cow, buffaloes etc. to digest compound like paper, cloth etc.?`,
    options: [
      `Urease`,
      `Cellulose`,
      `Silicones`,
      `Sucrose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cellulose`
  },
  {
    question: `Enzyme trypsin converts:`,
    options: [
      `Amino acids into proteins`,
      `Glucose into glycogens`,
      `Starch into sugar`,
      `Proteins into amino acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Proteins into amino acids`
  },
  {
    question: `Many of the carbohydrates are sweet in taste because:`,
    options: [
      `They give sugars on hydrolysis`,
      `Of covalent bonding`,
      `Of electrovalent bonding`,
      `Of coordinate bonding`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) They give sugars on hydrolysis`
  },
  {
    question: `The highest calorific value is found in`,
    options: [
      `Proteins`,
      `Fats`,
      `Vitamins`,
      `Carbohydrates`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fats`
  },
  {
    question: `Successive nucleotides are covalently linked through`,
    options: [
      `Hydrogen bonds`,
      `Phosphodiester bonds`,
      `Sulphide bonds`,
      `Any type of bonds`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Phosphodiester bonds`
  },
  {
    question: `Which differs from the rest?`,
    options: [
      `Glucose`,
      `Maltose`,
      `Sucrose`,
      `Lactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Milk changes after digestion into`,
    options: [
      `Cellulose`,
      `Fructose`,
      `Glucose`,
      `Lactose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose`
  },
  {
    question: `Which of the following monosaccharide is pentose?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Arabinose`,
      `Galactose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Arabinose`
  },
  {
    question: `Which of the following is involved in formation of heme?`,
    options: [
      `Lysine`,
      `Glycine`,
      `Tyrosin`,
      `Arginine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glycine`
  },
  {
    question: `Cellulose trinitrate is used in preparation of:`,
    options: [
      `Food`,
      `Explosives`,
      `Rayon`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Explosives`
  },
  {
    question: `Sucrose molecule is made up of`,
    options: [
      `A gluco pyranose and a fructo pyranose`,
      `A gluco pyranose and a fructo furanose`,
      `A gluco furanose and a fructo pyranose`,
      `A gluco furanose and a fructo furanose P a g e | 32`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A gluco pyranose and a fructo furanose`
  },
  {
    question: `Wax used in gramophone records is :`,
    options: [
      `Paraffin wax`,
      `Bees wax`,
      `Carnauba wax`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carnauba wax`
  },
  {
    question: `If one strand of DNA has the sequences T A T G A C T G , the sequence in the complimentary strand would be`,
    options: [
      `A T A C A C T C`,
      `A C G T T G A C`,
      `A T A C T G A C`,
      `A T A C T G C A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A T A C T G A C`
  },
  {
    question: `Which of the following compounds is not of the lipid series?`,
    options: [
      `Fat`,
      `Soap`,
      `Oil`,
      `Lard`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Soap`
  },
  {
    question: `Peptides are formed from`,
    options: [
      `Aliphatic amines`,
      `Carbohydrates`,
      `amino acids`,
      `Aromatic amines`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) amino acids`
  },
  {
    question: `Which of the following biomolecules acts as specific catalysts in biological reaction?`,
    options: [
      `Carbohydrates`,
      `Lipids`,
      `Vitamins`,
      `Enzymes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Enzymes`
  },
  {
    question: `Wax is`,
    options: [
      `Alcohol`,
      `Ester`,
      `Ketone`,
      `Acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ester`
  },
  {
    question: `Amylopectin is a polymer of`,
    options: [
      `-D glucose`,
      `-D fructose`,
      `Lactose`,
      `Amylose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) -D glucose`
  },
  {
    question: `After digestion, starch is converted into:`,
    options: [
      `Glucose`,
      `Fructose`,
      `Lactose`,
      `sucrose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Which one of the following is a peptide hormone?`,
    options: [
      `Thyroxine`,
      `Adrenaline`,
      `Glucogen`,
      `Testosterone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thyroxine`
  },
  {
    question: `Which one of the following hormones contains iodine?`,
    options: [
      `Adrenalin`,
      `Testosterone`,
      `Thyroxine`,
      `Insulin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Thyroxine`
  },
  {
    question: `-D(+)– glucose and D-(+) – glucose are`,
    options: [
      `Conformers`,
      `Epimers`,
      `Anomers`,
      `Enantiomers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Anomers`
  },
  {
    question: `The process of formation of RNA from DNA is known as:`,
    options: [
      `Translation`,
      `Transcription`,
      `Replication`,
      `Mutation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Translation`
  },
  {
    question: `α-glucose and β-glucose are:`,
    options: [
      `Isomers`,
      `Anomers`,
      `Epimers`,
      `Tautomers`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anomers`
  },
  {
    question: `One gram of fat gives:`,
    options: [
      `Same amount of energy as one gram of carbohydrate`,
      `Same amount of energy as one gram of protein`,
      `More than twice the energy as one gram of carbohydrate or protein`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) More than twice the energy as one gram of carbohydrate or protein`
  },
  {
    question: `Insulin production and its action in human body are responsible for the level of diabetes. This compound belongs to which of the following categories?`,
    options: [
      `A co-enzyme`,
      `A hormone`,
      `An enzyme`,
      `An antibiotic`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A hormone`
  },
  {
    question: `Cellulose is a polymer of`,
    options: [
      `Glucose`,
      `Fructose`,
      `Ribose`,
      `Sucrose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Common table sugar is more formally described as:`,
    options: [
      `Glucose`,
      `Lactose`,
      `Maltose`,
      `Sucrose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sucrose`
  },
  {
    question: `Glucose is used in:`,
    options: [
      `Manufacture of vitamin C`,
      `As preservative`,
      `In the manufacture of alcohol`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Methyl D-glucoside and methyl- D-glucoside are`,
    options: [
      `Epimers`,
      `Anomers`,
      `Enantiomers`,
      `Conformational diastereomers`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anomers`
  },
  {
    question: `Ring structure of glucose is due to formation of hemiacetal and ring formation between:`,
    options: [
      `and`,
      `and`,
      `and`,
      `and`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) and`
  },
  {
    question: `Monomer of nucleic acid is`,
    options: [
      `Nucleotides`,
      `Nucleoxides`,
      `Aminoacids`,
      `Carboxylic acid P a g e | 33`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nucleotides`
  },
  {
    question: `An example of a protein which acts as a hormone is`,
    options: [
      `Casein`,
      `Oxytocin`,
      `Trypsin`,
      `Keratin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oxytocin`
  },
  {
    question: `An example for a saturated fatty acid, presents in nature is`,
    options: [
      `Oleic acid`,
      `Linoleic acid`,
      `Linolenic acid`,
      `Palmitic acid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Palmitic acid`
  },
  {
    question: `haragaff’s rule states that in an organism`,
    options: [
      `Amount of adenine (A) is equal to that of thymine (T) and amount of guanine (G) is equal to that of cytocine (C)`,
      `Amount of adenine (A) is equal to that of guanine (G) and the amount of thymine (T) is equal to that of guanine (G)`,
      `Amount of adenine (A) is equal to that of cytocine (C) and the amount of thymine (T) is equal to that of guanine (G)`,
      `Amount of all bases are equal`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amount of adenine (A) is equal to that of thymine (T) and amount of guanine (G) is equal to that of cytocine (C)`
  },
  {
    question: `Which of the following gives reddish brown precipitate with dilute solution of resorcinol in dilute HCl?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Lactose`,
      `Maltose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fructose`
  },
  {
    question: `Washing soaps are potassium and sodium salts of:`,
    options: [
      `Formic , acetic, and maleic acid`,
      `Oleic, palmitic and stearic acid`,
      `Sulphur, chlorine and fluorine`,
      `Acetone, ketone and quinones`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Oleic, palmitic and stearic acid`
  },
  {
    question: `Which of the following elements are necessary for maintaining fluid balance in the body?`,
    options: [
      `Calcium and magnesium`,
      `Potassium and sodium`,
      `Iron and magnesium`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Potassium and sodium`
  },
  {
    question: `Vitamin A is present in:`,
    options: [
      `Liver`,
      `Milk`,
      `Green vegetables`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Molisch test is made for the detection of :`,
    options: [
      `Alkyl halide`,
      `Carbohydrate`,
      `Alkaloid`,
      `Fat`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Carbohydrate`
  },
  {
    question: `The disease ‘diabetes mellitus’ is caused by the deficiency of:`,
    options: [
      `Iodine`,
      `Insulin`,
      `Phenyl alanine hydroxylase`,
      `lysine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Insulin`
  },
  {
    question: `Starch is a polymer of`,
    options: [
      `Sucrose`,
      `Maltose`,
      `Glucose`,
      `Hexose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose`
  },
  {
    question: `Bases common to DNA and RNA are:`,
    options: [
      `Adenine, cytosine, uracil`,
      `Guanine, adenine, cytosine`,
      `Guanine, uracil, thymine`,
      `Adenine, thymine, guanine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Guanine, adenine, cytosine`
  },
  {
    question: `The correct statement in respect of protein haemoglobin is that it`,
    options: [
      `Acts as an oxygen carrier in the blood`,
      `Forms antibodies and offers resistance to diseases`,
      `Function as a catalyst for biological reactions`,
      `Maintains blood sugar level`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acts as an oxygen carrier in the blood`
  },
  {
    question: `A compound of non-sugar and glucose which yields glucose on hydrolysis found in plants, is called:`,
    options: [
      `Alkoxide`,
      `Glucoside`,
      `Glycoside`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucoside`
  },
  {
    question: `The enzyme which facilitates internal rearrangement in 3-phosphoglyceric acid to form 2-phosphoglyceric acid is`,
    options: [
      `Aldolase`,
      `Triose phosphate isomerase`,
      `Phosphoglycero mutase`,
      `Pyruvate kinase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Phosphoglycero mutase`
  },
  {
    question: `An example of protein is`,
    options: [
      `Narvon`,
      `Lecithin`,
      `Cellulose`,
      `Insulin P a g e | 34`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Insulin P a g e | 34`
  },
  {
    question: `Pick out the one which does not belong to the family`,
    options: [
      `Pepsin`,
      `Cellulose`,
      `Ptyalin`,
      `lipase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cellulose`
  },
  {
    question: `The hormone that helps in the conversion of glucose to glycogen is`,
    options: [
      `Cortisone`,
      `Bile acids`,
      `Adrenaline`,
      `Insulin`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Insulin`
  },
  {
    question: `The sugar present in fruits is:`,
    options: [
      `Fructose`,
      `Glucose`,
      `Sucrose`,
      `Galactose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fructose`
  },
  {
    question: `Which one is a fibrous protein?`,
    options: [
      `Globulin`,
      `Collagen`,
      `Hordein`,
      `Glutin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Collagen`
  },
  {
    question: `Deficiency of which vitamin can cause night blindness an eye disease?`,
    options: [
      `Vitamin`,
      `Vitamin C`,
      `Vitamin`,
      `Vitamin A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Vitamin A`
  },
  {
    question: `Which of the following base is linked, as one strand of DNA to cytosine of the other strand by hydrogen bonds?`,
    options: [
      `Guanine`,
      `Adenine`,
      `Thymine`,
      `Uracil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Thymine`
  },
  {
    question: `A nucleoside on hydrolysis gives`,
    options: [
      `A heterocyclic base and orthophosphoric acid`,
      `An aldopentose, a heterocyclic base and orthophosphoric acid`,
      `An aldopentose and a heterocyclic base`,
      `An aldopentose and orthophosphoric acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) An aldopentose and a heterocyclic base`
  },
  {
    question: `umber of chiral carbons in β-D-(+) glucose is:`,
    options: [
      `5`,
      `6`,
      `3`,
      `4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4`
  },
  {
    question: `Colour of osazone of glucose is`,
    options: [
      `Red`,
      `Brown`,
      `Yellow`,
      `Orange`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Yellow`
  },
  {
    question: `Rancidity of butter is due to the formation of:`,
    options: [
      `Butyric acid`,
      `Formaldehyde`,
      `Acetic acid`,
      `Benzoic acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Butyric acid`
  },
  {
    question: `The enzyme which hydrolysis triglycerides to fatty acids and glycerol is called`,
    options: [
      `Maltase`,
      `Lipase`,
      `Zymase`,
      `Pepsin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lipase`
  },
  {
    question: `A DNA nucleotide chain has AGCTTCGA sequence. The nucleotide sequence of other chain would be`,
    options: [
      `TCGAAGCT`,
      `GCTAAGCT`,
      `TAGCATAT`,
      `GATCCTAG`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) TCGAAGCT`
  },
  {
    question: `Blood sugar is the same as:`,
    options: [
      `Fructose`,
      `Galactose`,
      `Glucose`,
      `Glycogen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose`
  },
  {
    question: `Rancidity of oils and fats is due to:`,
    options: [
      `Partial hydrolysis by the action of atmospheric moisture and oxidation of fatty acids to foul smelling products`,
      `Absorption of foul smelling ingredients from the air`,
      `Fermentation caused by microorganisms`,
      `Slow decomposition of fatty acids`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Partial hydrolysis by the action of atmospheric moisture and oxidation of fatty acids to foul smelling products`
  },
  {
    question: `Who pointed out peptide linkage in proteins?`,
    options: [
      `Kekule`,
      `Hofmann`,
      `Fisher`,
      `Cannizzaro`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fisher`
  },
  {
    question: `The charring of sugar when it is treated with conc. is due to`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Dehydration`,
      `Hydrolysis`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dehydration`
  },
  {
    question: `The vitamin which is water soluble:`,
    options: [
      `Vitamin E`,
      `Vitamin D`,
      `Vitamin K`,
      `Vitamin B`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vitamin K`
  },
  {
    question: `A compound gives negative test with ninhydrin and positive test with enedict’s solution. The compound is`,
    options: [
      `A protein`,
      `An amino acid`,
      `A lipid`,
      `A mono saccharide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A mono saccharide`
  },
  {
    question: `Proteins are composed of:`,
    options: [
      `Nucleotides`,
      `Nucleosides`,
      `Dipeptides`,
      `Amino acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Amino acids`
  },
  {
    question: `Glucose will show mutarotation when solvent is :`,
    options: [
      `Acidic`,
      `Basic`,
      `Neutral`,
      `Amphioprotic`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Amphioprotic`
  },
  {
    question: `Which of the following enzymes are used to convert starch into alcohol?`,
    options: [
      `Maltase, diastase P a g e | 35`,
      `Invertase, zymase`,
      `Diastase, maltase, zymase`,
      `Invertase, diastase, zymase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Diastase, maltase, zymase`
  },
  {
    question: `Which of the following is not simple protein?`,
    options: [
      `Albumin`,
      `Globulin`,
      `Glutinin`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
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
    solution: `Correct answer: (a) Proteins to amino acids`
  },
  {
    question: `Which of the following is an amphoteric acid?`,
    options: [
      `Glycine`,
      `Salicylic acid`,
      `Benzoic acid`,
      `Citric acid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glycine`
  },
  {
    question: `-electric is a`,
    options: [
      `Specific temperature`,
      `Suitable concentration of amino acid`,
      `Hydrogen ion concentration that does not allow migration of amino acid under electric field`,
      `Melting point of an amino acid under the influence of electric field`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hydrogen ion concentration that does not allow migration of amino acid under electric field`
  },
  {
    question: `Which enzyme is present in salive?`,
    options: [
      `Urease`,
      `Maltase`,
      `Lactase`,
      `Amylase`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Amylase`
  },
  {
    question: `maltose consists of`,
    options: [
      `One D-glucopyranose unit and one D-glucopyranose uniy with 1-2 glyosidic linkage`,
      `Two –D-glucopyranose units with 1-2 glycosidic linkage.`,
      `Two -D-glucopyranose units with 1-4 glycosidic linkage`,
      `Two D-glucopyranose units with 1-4 glycosidic linkage`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Two D-glucopyranose units with 1-4 glycosidic linkage`
  },
  {
    question: `An alkali salt of palmitic acid is known as:`,
    options: [
      `An alkoxide`,
      `An ester`,
      `A soap`,
      `An epoxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A soap`
  },
  {
    question: `A compound which catalyses a chemical reaction in a living organism is called a/an:`,
    options: [
      `Carbohydrate`,
      `Enzyme`,
      `Lipid`,
      `Vitamin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Enzyme`
  },
  {
    question: `The carbohydrate that will yield glucose and fructose on homogeneous catalytic hydrolysis in presence of dilute sulphuric acid is`,
    options: [
      `Cellulose`,
      `Maltose`,
      `Starch`,
      `Sucrose`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sucrose`
  },
  {
    question: `Which is capable to self replication?`,
    options: [
      `Enzymes`,
      `DNA polymerase`,
      `DNA ligase`,
      `DNA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) DNA`
  },
  {
    question: `Which destroy antigens?`,
    options: [
      `Insulin`,
      `Antibodies`,
      `Chromoprotein`,
      `Phosphoprotein`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibodies`
  },
  {
    question: `Aqueous solution of soap is:`,
    options: [
      `Acidic`,
      `Basic`,
      `Neutral`,
      `Amphoteric`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Basic`
  },
  {
    question: `A detergent is a:`,
    options: [
      `Cleansing agent`,
      `Drug`,
      `Catalyst`,
      `Soap`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cleansing agent`
  },
  {
    question: `Which one is not a glyceride?`,
    options: [
      `Fat`,
      `Oil`,
      `Phospholipid`,
      `Soap`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Soap`
  },
  {
    question: `Which carbohydrate is used in silvering of mirrors?`,
    options: [
      `Sucrose`,
      `Starch`,
      `Glucose`,
      `Fructose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose`
  },
  {
    question: `Biuret test is not given by`,
    options: [
      `Carbohydrates`,
      `Polypeptides`,
      `Urea`,
      `Proteins`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Carbohydrates`
  },
  {
    question: `Structurally a biodegradable detergent should contain a:`,
    options: [
      `Normal alkyl chain`,
      `Branched alkyl chain`,
      `Hexyl side chain`,
      `Cyclohexyl side chain`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Normal alkyl chain`
  },
  {
    question: `Starch is polymer of:`,
    options: [
      `Fructose`,
      `Glucose`,
      `Lactose`,
      `None of these P a g e | 36`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose`
  },
  {
    question: `The one which has least iodine value is`,
    options: [
      `Sunflower oil`,
      `Ginger oil`,
      `Ghee`,
      `Groundnut oil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ghee`
  },
  {
    question: `A vitamin which plays a vital role in the coagulating property of blood is:`,
    options: [
      `Vitamin A`,
      `Vitamin D`,
      `Vitamin E`,
      `Vitamin K`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Vitamin K`
  },
  {
    question: `ligosaccharides contain…. imple sugar units:`,
    options: [
      `2 to 10`,
      `4 to 8`,
      `6 to 12`,
      `6 to 10`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 to 10`
  },
  {
    question: `Dalda is prepared from oils by`,
    options: [
      `Oxidation`,
      `Reduction`,
      `Hydrolysis`,
      `Distillation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Reduction`
  },
  {
    question: `The anomeric carbon in D(+) glucose is`,
    options: [
      `C-1 carbon`,
      `C-2 carbon`,
      `C-5 carbon`,
      `C-6 carbon`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) C-1 carbon`
  },
  {
    question: `DNA template sequence of CTGATAGC is transcribed over -RNA as`,
    options: [
      `GUCTUTCG`,
      `GACUAUCG`,
      `GAUTATUG`,
      `UACTATCU`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) GACUAUCG`
  },
  {
    question: `Ascorbic acid is also known as`,
    options: [
      `Vitamin A`,
      `Vitamin B`,
      `Vitamin C`,
      `Vitamin D`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Vitamin C`
  },
  {
    question: `The main point of difference between DNA and RNA is:`,
    options: [
      `Presence of thymine in DNA and RNA`,
      `Presence of deoxyribose and thymine in DNA, ribose and uracil in RNA`,
      `Presence of ribose and thymine in DNA, deoxyribose and uracil in RNA`,
      `Presence of deoxyribose in DNA and ribose in RNA`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Presence of deoxyribose and thymine in DNA, ribose and uracil in RNA`
  },
  {
    question: `The substance constituting more than 80% of cell contents is:`,
    options: [
      `Protein`,
      `Mineral`,
      `Fat`,
      `Water`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Water`
  },
  {
    question: `Helical structure of protein is stablilised by`,
    options: [
      `Peptide bond`,
      `Hydrogen bond`,
      `an der Waal’s force`,
      `Dipole association`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hydrogen bond`
  },
  {
    question: `Which is sweetest among known sugars?`,
    options: [
      `Sucrose`,
      `Fructose`,
      `Glucose`,
      `Lactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fructose`
  },
  {
    question: `Saccharin is :`,
    options: [
      `Hexose`,
      `Reducing sugar`,
      `Glucoside`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `Which one is involved in the formation of nicotinamide and indole -3-acetic acid?`,
    options: [
      `Lysine`,
      `Tryptophan`,
      `Tyrosine`,
      `Glutamic acid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Tryptophan`
  },
  {
    question: `The polysaccharide used in the manufacture of paper is:`,
    options: [
      `Cellulose`,
      `Starch`,
      `Glucose`,
      `Sucrose`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cellulose`
  },
  {
    question: `Acetyl derivative of which carbohydrate is used in sizing of paper industry?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Lactose`,
      `Starch`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Starch`
  },
  {
    question: `Nucleic acid are polymers of`,
    options: [
      `Nucleosides`,
      `Globulins`,
      `Nucleons`,
      `Nucleotides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Nucleotides`
  },
  {
    question: `Which of the following doesn’t form an oxime?`,
    options: [
      `Glucose`,
      `Glucose pentaacetate`,
      `Arabinose`,
      `Galactose`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glucose pentaacetate`
  },
  {
    question: `Emil Fischer was awarded Nobel Prize for his work on:`,
    options: [
      `Sugars and purines synthesis`,
      `Ammonia discovery`,
      `Optical activity`,
      `Alkaloid synthesis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sugars and purines synthesis`
  },
  {
    question: `A source of oleic acid is:`,
    options: [
      `Animal fat`,
      `Corn oil`,
      `Linseed oil`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Corn oil`
  },
  {
    question: `A Zwitter ion is`,
    options: [
      `Negatively charged ion without metal atom`,
      `A heavy ion with a small charge on it.`,
      `An ion with positive and negative charge at different points on it.`,
      `A positively charged ion without a metal atom.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) An ion with positive and negative charge at different points on it.`
  },
  {
    question: `Milk changes after digestion into`,
    options: [
      `Glucose`,
      `Lactose`,
      `Fructose`,
      `Glucogen P a g e | 37`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Glycogen is a branched polymer of:`,
    options: [
      `α-glucose`,
      `β-glucose`,
      `α-fructose`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) α-glucose`
  },
  {
    question: `The sequence in the structure of nucleic acid is:`,
    options: [
      `Base +phosphate group + pentose`,
      `Phosphate group + pentose + base`,
      `Pentose + base + phosphate group`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pentose + base + phosphate group`
  },
  {
    question: `Which one of the following statements about amino acids is not true?`,
    options: [
      `They are constituents of all protein.`,
      `They are all high melting solids.`,
      `Most naturally occurring amino acids have D-configurations`,
      `They are characterized by isoelectric point.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Most naturally occurring amino acids have D-configurations`
  },
  {
    question: `Which amino acid has no asymmetric carbon?`,
    options: [
      `Histidine`,
      `Glycine`,
      `α-alanine`,
      `Threonine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Glycine`
  },
  {
    question: `The best source of vitamin A is`,
    options: [
      `Wheat`,
      `Beans`,
      `Carrots`,
      `Oranges`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Carrots`
  },
  {
    question: `Which set is the correct pairing set (or contains complementary pairs) responsible for the structure of DNA? (A = adenine, G = guanine, C = cytosine, T = thymine, U = uracil)`,
    options: [
      `A—T, G—C`,
      `A—C, G—T`,
      `A—G, C—T`,
      `A—U, G—C`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A—T, G—C`
  },
  {
    question: `The pyrimidine bases presents in DNA are`,
    options: [
      `Cytosine and adenine`,
      `Cytosine and guanine`,
      `Cytosine and thymine`,
      `Cytosine and uracil`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cytosine and thymine`
  },
  {
    question: `Identify the product in the following series of reactions Glucose`,
    options: [
      `Heptanoic acid`,
      `Hexanoic acid`,
      `-methyl caproic acid`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Heptanoic acid`
  },
  {
    question: `Toilet soap is:`,
    options: [
      `A mixture of calcium and sodium salts of higher fatty acids`,
      `A mixture of potassium stearate and glycerol`,
      `A mixture of sodium salts of higher fatty acids`,
      `A mixture of potassium salts of higher fatty acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A mixture of potassium salts of higher fatty acids`
  },
  {
    question: `Degree of unsaturation in oils and fats is measured in terms of:`,
    options: [
      `Saponification value`,
      `Iodine value`,
      `R/M value`,
      `Acetyl value`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Iodine value`
  },
  {
    question: `Carbohydrates containing more than 10 simple units of sugar are called:`,
    options: [
      `Monosaccharides`,
      `Disaccharides`,
      `Trisaccharides`,
      `Polysaccharides`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Polysaccharides`
  },
  {
    question: `An optically active compound , gave an while a mixture of and its enantiomer gave 5 . The ratio of and in the mixture is`,
    options: [
      `1 to 3`,
      `3 to 1`,
      `1 to 2`,
      `2 to 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 to 1`
  },
  {
    question: `Which of the following is a disaccharide?`,
    options: [
      `Sucrose`,
      `Glucose`,
      `Fructose`,
      `Starch`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sucrose`
  },
  {
    question: `Insulin has 51amino acids in two polypeptide chains which are linked by:`,
    options: [
      `One sulphide bond`,
      `One disulphide bond`,
      `Two disulphide bonds`,
      `Three disulphide bonds`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Two disulphide bonds`
  },
  {
    question: `DNA and RNA are chiral molecule due to the presence of:`,
    options: [
      `Chiral bases`,
      `Phosphate ester unit`,
      `D-sugar component`,
      `L-sugar component`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) D-sugar component`
  },
  {
    question: `A glyceride is:`,
    options: [
      `A compound of glycerol with a metal`,
      `A molecular compound of glycerol with a metal salt`,
      `An ether formed by glycerol`,
      `An ester of glycerol with fatty acids`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) An ester of glycerol with fatty acids`
  },
  {
    question: `Insulin production and its action in human body are responsible for the level of diabetes. This compound belongs to which of the following categories?`,
    options: [
      `A coenzyme`,
      `A hormone`,
      `An enzyme`,
      `An antibiotic`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A hormone`
  },
  {
    question: `Which one of the following does not correctly match with each other?`,
    options: [
      `Silk-polyamide`,
      `Lipase–enzyme`,
      `Butter–fat`,
      `Oxytocin-enzyme`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Oxytocin-enzyme`
  },
  {
    question: `When vegetable oils react with hydrogen in presence of finely divided nickel catalyst we get:`,
    options: [
      `Saturated fat`,
      `and`,
      `Washing soap`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Saturated fat`
  },
  {
    question: `The main structural feature of protein is:`,
    options: [
      `The ester linkage`,
      `The ether linkage`,
      `The peptide linkage`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The peptide linkage`
  },
  {
    question: `Which is a protein?`,
    options: [
      `Gelatin`,
      `Casein`,
      `Plasma protein`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which of the following hormones is excreted from adrenal cortex?`,
    options: [
      `Cortisone`,
      `Estrogen`,
      `Progesterone`,
      `Testosterone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cortisone`
  },
  {
    question: `What is not true for enzymes?`,
    options: [
      `They are powerful biocatalysts`,
      `They are all proteins`,
      `They are highly specific in their action`,
      `They do not lose activity on heating`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) They do not lose activity on heating`
  },
  {
    question: `One of the essential alpha amino acid is:`,
    options: [
      `Lysine`,
      `Glycine`,
      `Serine`,
      `Proline`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Lysine`
  },
  {
    question: `The amino acid which is not optically active is`,
    options: [
      `Lactic acid`,
      `Serine`,
      `Alanine`,
      `Glycine`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycine`
  },
  {
    question: `How glucose is related with fructose?`,
    options: [
      `Functional group isomerism`,
      `Rotamers`,
      `Position isomerism`,
      `Geometrical isomerism`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Functional group isomerism`
  },
  {
    question: `The chemical messenger produced in the endocrine (ductless) glands are grouped as: P a g e | 39`,
    options: [
      `Polypeptides`,
      `Hormones`,
      `Bile salts`,
      `Purines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hormones`
  },
  {
    question: `The ultimate product of the hydrolysis of starch is:`,
    options: [
      `Glucose`,
      `Fructose`,
      `Sucrose`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Glucose`
  },
  {
    question: `Which of the following is not correct?`,
    options: [
      `Chlorophyll is responsible for the synthesis of carbohydrates in plants`,
      `The compound formed in the addition of oxygen to haemoglobin is called oxyhaemoglobin`,
      `Acetyl salicylic acid is known aspirin`,
      `The metal ion present in vitamin B12 is Mg2+`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The metal ion present in vitamin B12 is Mg2+`
  },
  {
    question: `Hormones function as:`,
    options: [
      `Chemical messengers`,
      `Co-enzymes`,
      `Provitamins`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Chemical messengers`
  },
  {
    question: `Hardening of fat (lipid) is due to`,
    options: [
      `Hydrogenation`,
      `Dehydrogenation`,
      `Halogenation`,
      `Dehydrohalogenation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hydrogenation`
  },
  {
    question: `Which of the following monosaccharide is pentose?`,
    options: [
      `Glucose`,
      `Fructose`,
      `Arabinose`,
      `Galactose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Arabinose`
  },
  {
    question: `The function of DNA in an organism is`,
    options: [
      `To assist in the synthesis of RNA molecule.`,
      `To store information of heredity characteristics`,
      `To assist in the synthesis of proteins and polypeptides`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Which of the following biomolecules contain non-transition metal ion?`,
    options: [
      `Vitamin B12`,
      `Chlorophyll`,
      `Haemoglobin`,
      `Insulin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Chlorophyll`
  },
  {
    question: `The secondary structure of a protein refers to`,
    options: [
      `helical backbone`,
      `Hydrophobic interaction`,
      `Sequence of amino acids`,
      `Fixed configuration of the polypeptide backbone`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) helical backbone`
  },
  {
    question: `Raw linseed oil is present in a paint as:`,
    options: [
      `Drier`,
      `Vehicle`,
      `Lacquer`,
      `Thinner`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vehicle`
  },
  {
    question: `Which of the following contains vitamin D?`,
    options: [
      `Calciferol`,
      `Keratin`,
      `Tocopherol`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Calciferol`
  },
  {
    question: `Which protein is main constituent of milk?`,
    options: [
      `Keratin`,
      `Casein`,
      `Myosin`,
      `Insulin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Casein`
  },
  {
    question: `Pyranose`,
    options: [
      `1, 3 and 6`,
      `1, 3 and 5`,
      `2, 3 and 5`,
      `2, 3 and 6`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2, 3 and 6`
  },
  {
    question: `Which of the following is not a function of proteins?`,
    options: [
      `Nail formation`,
      `Skin formation`,
      `Muscle formation`,
      `Providing energy for metabolism`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Providing energy for metabolism`
  },
  {
    question: `and glucose differ in the orientation of -OH group around`,
    options: [
      `C1`,
      `C2`,
      `C3`,
      `C4`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) C1`
  },
  {
    question: `Which one of the following is an ester?`,
    options: [
      `Coconut oil`,
      `Kerosene oil`,
      `Soap`,
      `Glycerine P a g e | 40`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Coconut oil`
  },
  {
    question: `The carbohydrate which serves as reserve glucose in body is:`,
    options: [
      `Sucrose`,
      `Starch`,
      `Glycogen`,
      `fructose`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glycogen`
  },
  {
    question: `Which of the following compounds is responsible for the transmission of heredity characters?`,
    options: [
      `RNA`,
      `DNA`,
      `Glucose`,
      `Haemoglobin P a g e | 41 14.BIOMOLECULES :`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) DNA`
  }
];
