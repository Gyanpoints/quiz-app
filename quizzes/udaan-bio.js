// Class 10 Biology (GyanPoints)
// 234 MCQs

const QUESTIONS = [
  {
    question: `The xylem in plants ar e responsible for:`,
    options: [
      `T ransport of water`,
      `T ransport of food`,
      `T ransport of amino acids`,
      `T ransport of oxygen`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) T ransport of water`
  },
  {
    question: `The autotr ophic mode of nutrition requires:`,
    options: [
      `Carbon dioxide and water`,
      `Chlorophyll`,
      `Sunlight`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Match the processes given in column-I with their definition given in column-II and choose the correct option. Column-I Column-II P. Nutrition (i) The increase in cell size and/ or number Q. Synthesis (ii) The movement of materials within the cell or within the organism. R. Growth (iii) The process of obtaining food. S. Transport (iv) Combining small molecules to create larger more complex molecules.`,
    options: [
      `P-(iv), Q-(ii), R-(i), S-(iii)`,
      `P-(iii), Q-(iv), R-(ii), S-(i)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iii), Q-(iv), R-(i), S-(ii)`
  },
  {
    question: `Match the organisms given in column -I with their mode of nutrition given in column -II. Column-I (Mode of Nutrition) Column-II (Organisms) P. Trypsin (i) Liver Q. Amylase (ii) Gastric glands R. Bile (iii) Saliva S. Pepsin (iv) Pancreas`,
    options: [
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(i), Q-(iii), R-(iv), S-(ii)`,
      `P-(iv), Q-(ii), R-(i), S-(iii)`,
      `P-(iv), Q-(iii), R-(ii), S-(i) 40 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iv), Q-(iii), R-(i), S-(ii)`
  },
  {
    question: `Match the given columns and mark the correct option. Column-I Column-II (P) Larynx (i) Sight of smell (Q) Alveoli (ii) Production of sound (R) Bronchi (iii) Conduction of air (S) Nose (iv) Exchange of gases`,
    options: [
      `P-(ii), Q-(iv), R-(iii), S-(i)`,
      `P-(i), Q-(ii), R-(iii), S-(iv)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(iii), Q-(i), R-(iv), S-(ii)`
  },
  {
    question: `Match column-I with column-II and choose the option. Column-I Column-II P. Trypsin (i) Pancreas Q. Amylase (ii) Gastric glands R. Bile (iii) Liver S. Pepsin (iv) Saliva`,
    options: [
      `P-(i), Q-(iv), R-(ii), S-(iii)`,
      `P-(iv), Q-(i), R-(ii), S-(iii)`,
      `P-(i), Q-(iv), R-(iii), S-(ii)`,
      `P-(i), Q-(ii), R-(iv), S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(i), Q-(iv), R-(iii), S-(ii)`
  },
  {
    question: `Match column-I and column-II and choose the correct option. Column-I Column-II P. Xylem (i) Oxygenated blood Q. Nephron (ii) Translocation of minerals R. Arteries (iii) Clotting of blood S. Platelets (iv) Excretion`,
    options: [
      `P-(ii), Q-(i), R-(iv), S-(iii)`,
      `P-(i), Q-(ii), R-(iv), S-(iii)`,
      `P-(ii), Q-(i), R-(iii), S-(iv)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(i), R-(iii), S-(iv)`
  },
  {
    question: `Match the processes given in column - I with their definition given in column-II. Column-I Column-II (P) Regulation (i) The removal of metabolic waste from an organism. (Q) Reproduction (ii) The chemical process of oxidizing organic molecules to release energy. (R) Respiration (iii) The production of new individuals of the same kind. (S) Excretion (iv) The control and coordination of chemical processes within the organism.`,
    options: [
      `P-(iv), Q-(ii), R-(i), S-(iii)`,
      `P-(iv), Q-(iii), R-(ii), S-(i)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(iv), S-(ii) Multiple Choice Question`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iii), Q-(iv), R-(i), S-(ii)`
  },
  {
    question: `T ransportation in unicellular organisms usually occurs by:`,
    options: [
      `T ransporting organs`,
      `DNA`,
      `Diffusion`,
      `They do not need any transport`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Diffusion`
  },
  {
    question: `If a plant is being irrigated with water containing a radioactive isotope of oxygen, very likely the _________ molecule will also be radioactive.`,
    options: [
      `Hydrogen`,
      `Carbon dioxide`,
      `Oxygen`,
      `Carbohydrates`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hydrogen`
  },
  {
    question: `In desert plants, inta ke of carbon dioxide takes place:`,
    options: [
      `During day`,
      `During night`,
      `During both day and night`,
      `T hey do not intake carbon dioxide; they totally depend on carbon dioxide produced from respiration.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T hey do not intake carbon dioxide; they totally depend on carbon dioxide produced from respiration.`
  },
  {
    question: `Which of the following statements is incorrect?`,
    options: [
      `A TP cannot be produced without mitochondria.`,
      `A TP can be produced in mitochondria.`,
      `A TP can be produced in the cytoplasm.`,
      `A TP can be consumed in the cytoplasm.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A TP can be produced in the cytoplasm.`
  },
  {
    question: `The dough for making cakes rises due to:`,
    options: [
      `Production of alcohol`,
      `Production of lactic acid`,
      `Production of carbon dioxide`,
      `Production of water`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Production of water`
  },
  {
    question: `Bronchi most specifically , has the role of:`,
    options: [
      `Exchange of gases`,
      `Conduction of air`,
      `Storage of air`,
      `Oxygenation of blood`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Oxygenation of blood`
  },
  {
    question: `Breathing is inefficient in humans because:`,
    options: [
      `Oxygen cannot be isolated from air .`,
      `W e live in oxygen-deficient atmosphere.`,
      `W e have common path for inhalation and exhalation.`,
      `W e lack oxygen specific transport proteins.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Oxygen cannot be isolated from air .`
  },
  {
    question: `If plant xylems are blocked, the plant will:`,
    options: [
      `Suf fer from water shortage only.`,
      `Suf fer from water and carbohydrate shortage.`,
      `Suf fer from water and mineral shortage.`,
      `Su ffer from water, mineral and carbohydrates shortage.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Suf fer from water shortage only.`
  },
  {
    question: `If the phloem is blocked, the plant will:`,
    options: [
      `Suf fer from food shortage only.`,
      `Suf fer from mineral shortage.`,
      `Suf fer from water and food shortage.`,
      `Suf fer from water and food shortage.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Suf fer from water and food shortage.`
  },
  {
    question: `The advantage of a four-chambered heart is:`,
    options: [
      `Increased blood-carrying capacity .`,
      `Increased blood storage capacity .`,
      `Increased blood production capacity .`,
      `Increased blood oxygen-carrying ef ficiency.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Increased blood oxygen-carrying ef ficiency.`
  },
  {
    question: `W e can assume four-chambered heart:`,
    options: [
      `W ill be suitable in cold blooded animals`,
      `W ill be suitable in warm blooded animals`,
      `W ill be suitable in both`,
      `W ill be suitable in none`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) W ill be suitable in both`
  },
  {
    question: `Define which one of the following statements is correct about the human circulatory system?`,
    options: [
      `Blood transports only oxygen and not carbon dioxide.`,
      `Human heart has five chambers.`,
      `V alves ensure that the blood does not flow backwards.`,
      `Both oxygen-rich and oxygen-deficient blood gets mixed in the heart.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both oxygen-rich and oxygen-deficient blood gets mixed in the heart.`
  },
  {
    question: `Which is the main nitrogenous waste present in it? Case Study-V The given figure depicts a single nephron from a mammalian kidney. Identify the labelled parts (A-E) and match them with the options (I-IV) given below. (I) The site of ultrafiltration. (II) Collection and concentration of urine. (III) The main area for the reabsorption of glucose and amino acids. (IV) Mainly responsible for the maintenance of the pH of blood. A C B D E`,
    options: [
      `(I)-A, (II)-E, (III)-C, (IV)-D`,
      `(I)-A, (II)-B, (III)-C, (IV)-A`,
      `(I)-B, (II)-A, (III)-C, (IV)-E`,
      `(I)-E, (II)-B, (III)-D, (IV)-A 46 Class-X BIOLOGY PW Life Processes?`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (I)-B, (II)-A, (III)-C, (IV)-E`
  },
  {
    question: `The first step in photosynthesis is:`,
    options: [
      `Conversion of light ener gy into chemical energy.`,
      `Reduction of carbondioxide.`,
      `Absorption of light ener gy by chlorophyll.`,
      `Formation of carbohydrates.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Conversion of light ener gy into chemical energy.`
  },
  {
    question: `Which of the following events in the mouth cavity will be affected if salivary amylase is absent in the saliva?`,
    options: [
      `Starch hydrolysis into sugars.`,
      `Proteins hydrolysis into amino acids.`,
      `Absorption of vitamins.`,
      `Fats breaking down into fatty acids and glycerol.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fats breaking down into fatty acids and glycerol.`
  },
  {
    question: `From the options given, identify the event that doesn't occur in the photosynthesis.`,
    options: [
      `Oxidation of carbon to carbon dioxide.`,
      `Absorption of light ener gy by the chlorophyll.`,
      `Reduction of carbon dioxide to carbohydrates.`,
      `Conversion of light ener gy into chemical energy.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Reduction of carbon dioxide to carbohydrates.`
  },
  {
    question: `In which order do these events occur in human nutrition?`,
    options: [
      `Digestion → ingestion → absorption → assimilation`,
      `Digestion → ingestion → assimilation → absorption`,
      `Ingestion → digestion → absorption → assimilation`,
      `Inge stion → digestion → assimilation → absorption`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ingestion → digestion → absorption → assimilation`
  },
  {
    question: `The enzymes pepsin and trypsin are secreted respectively by:`,
    options: [
      `Stomach and pancreas`,
      `Salivary gland and stomach`,
      `Liver and pancreas`,
      `Liver and salivary gland`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Liver and pancreas`
  },
  {
    question: `Which of the following is not a digestive enzyme contained in the pancreatic juice? (i) Amylase (ii) Hydrochloric acid (iii) Mucus (iv) Trypsin`,
    options: [
      `(i) and (ii)`,
      `(i) and (iv)`,
      `(ii) and (iii)`,
      `(i) and (iii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (i) and (iii)`
  },
  {
    question: `Which of the following statements are correct. (i) Saliva has salivary amylase to digest protein. (ii) The pH of human saliva is 3.8. (iii) Fats get digested completely in the small intestine. (iv) The pH of human saliva is 6.5 to 6.8 PH.`,
    options: [
      `(i) and (iv)`,
      `(i) and (ii)`,
      `(i) and (iii)`,
      `(iii) and (iv)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (i) and (iv)`
  },
  {
    question: `The given figure is a demonstration of an experiment to show that carbon dioxide is essential for photosynthesis. What is the substance “X” , kept in petri dish? ‘X’ crystals in petri dish Bell jar`,
    options: [
      `Potassium hydroxide`,
      `Sodium bicarbonate`,
      `Sodium carbonate`,
      `Potassium sulphate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Potassium hydroxide`
  },
  {
    question: `The diagram shows an experiment to investigate the balance between respiration and photosynthesis. In which tube are photosynthesis and respiration taking place at the same time? 56 Class-X BIOLOGY PW`,
    options: [
      `A will have both photosynthesis and respiration while B will only have photosynthesis`,
      `All tubes will have respiration`,
      `C will have photosynthesis only and D will have respiration only`,
      `A and D will have respiration only`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A and D will have respiration only`
  },
  {
    question: `Which process occurring in human body does not involve energy from respiration?`,
    options: [
      `Contraction of heart muscle.`,
      `D iffusion of oxygen from the alveoli into the blood.`,
      `Digestion of bread.`,
      `Maintaining a constant body temperature.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Contraction of heart muscle.`
  },
  {
    question: `Which of the given step is common in both aerobic respiration and anaerobic respiration?`,
    options: [
      `Conversion of pyruvate to carbon dioxide, water and energy.`,
      `Conversion of glucose to pyruvate.`,
      `Conversion of pyruvate to lactic acid and ener gy.`,
      `Convers ion of pyruvate to ethanol, carbon dioxide and energy.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Convers ion of pyruvate to ethanol, carbon dioxide and energy.`
  },
  {
    question: `Read the following statements about glycolysis (breakdown of glucose) and select the option that shows the CORRECT statements about it. (i) Occurs in cytoplasm. (ii) Pyruvic acid is formed by the breakdown of glucose in the number of steps. (iii) H⊕ is released in this breakdown through the oxygen supplied by forming H2O. (iv) V ery little energy is released.`,
    options: [
      `(i) and (ii)`,
      `(ii) and (iii)`,
      `(i), (ii) and (iv)`,
      `(i) and (iv)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (i) and (iv)`
  },
  {
    question: `Which of the following expression depict the respiratory quotient?`,
    options: [
      `RQ → volume of CO 2 absorbed/ volume of O 2 consumed.`,
      `RQ → volume of CO 2 evolved/ volume of O 2 consumed.`,
      `RQ → volume of O 2 evolved/ volume of CO 2 consumed.`,
      `RQ → volume of O 2 absorbed/ volume of CO 2 consumed.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) RQ → volume of CO 2 absorbed/ volume of O 2 consumed.`
  },
  {
    question: `Which of the following statement(s) is (are) true about respiration? (i) During inhalation, ribs move inward and diaphragm is raised. (ii) In the alveoli, exchange of gases takes place i.e., oxygen from alveolar air diffuses into blood and carbon dioxide from the blood into the alveolar air. (iii) Haemoglobin has a greater af finity for carbon dioxide than oxygen. (iv) Alveoli increase surface area for exchange of gases.`,
    options: [
      `(i) and (iv)`,
      `(ii) and (iii)`,
      `(i) and (iii)`,
      `(ii) and (iv)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (ii) and (iv)`
  },
  {
    question: `During contraction, what prevents the backflow of blood inside the heart?`,
    options: [
      `V alves in the heart`,
      `Thick muscular walls of ventricles`,
      `Thin walls of atria`,
      `Thick walls of atria 57 Life Processes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thick walls of atria 57 Life Processes`
  },
  {
    question: `Which of the following is correct regarding capillaries?`,
    options: [
      `Thick walled blood vessels that carry blood from the hearts to all the parts of the body .`,
      `Thin walled blood vessels and are extremely narrow tubes which connect arteries to veins.`,
      `Thi n walled blood vessels which carry blood from all the parts of body to the heart.`,
      `T hick walled blood vessels which carry blood from all the parts of body to the brain.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T hick walled blood vessels which carry blood from all the parts of body to the brain.`
  },
  {
    question: `Agranulocytes are:`,
    options: [
      `L ymphocytes, Monocytes`,
      `L ymphocytes, Basophils`,
      `Eosinophils, Basophils`,
      `Eosinophils, Monocytes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Eosinophils, Monocytes`
  },
  {
    question: `What is the correct pathway of transport of urine in our body.`,
    options: [
      `Kidney → ureter → urethra → urinary bladder`,
      `Kidney → urinary bladder → urethra → ureter`,
      `Kidney → ureters → urinary bladder → urethra`,
      `Urinary bladder → kidney → ureter → urethra`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Kidney → urinary bladder → urethra → ureter`
  },
  {
    question: `What is the function of the glomerulus and Bowman's capsule of the nephron?`,
    options: [
      `Filtration of blood`,
      `Re-absorption of ions from blood`,
      `Re-absorption of hormones from blood`,
      `Re-absorption of water from blood`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Re-absorption of water from blood`
  },
  {
    question: `Which substances out of the following in the dialysis fluid should be at a lower concentration than in the blood of patient?`,
    options: [
      `Salt and urea`,
      `Glucose and amino acid`,
      `Glucose and urea`,
      `Glucose and salts`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Glucose and urea`
  },
  {
    question: `An experiment conducted in the laboratory is tabulated below: Test tube - A Test tube-B Test tube - C Saliva + lodine ↓ incubation Starch + Saliva ↓ incubation Starch + Saliva + Enzyme Inhibitor ↓ Incubation + lodine What would be the colour observed in test tube A, B and C at the end of the experiment?`,
    options: [
      `A-Y ellow, B-No color , C-Blue`,
      `A-No color , B-Blue black, C-Y ellow`,
      `A-Blue black, B-Y ellow, C-No color`,
      `A-No color , B-Y ellow, C-Blue black`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Y ellow, B-No color , C-Blue`
  },
  {
    question: `What would happen to earth if carbondioxide was absent from its atmosphere?`,
    options: [
      `The earth would be a pleasant place.`,
      `Absence of carbon dioxide would not make any difference to earth.`,
      `Earth would be devoid of life`,
      `Earth would have only animal life. 62 Class-X BIOLOGY PW School Level Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Earth would be devoid of life`
  },
  {
    question: `Choose the correct option from the information given below regarding the reflex action.`,
    options: [
      `Never reaches brain.`,
      `Reaches brain after the action has been taken.`,
      `Is not acted or stored by brain.`,
      `Is handled by spinal cord exclusively .`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Is not acted or stored by brain.`
  },
  {
    question: `Roots are gravitropic as it grows towards the direction of gravity. Which pair of diagrams show a controlled experiment to find out if these roots are also phototropic? Light proof box 1 3 Light proof box 2 Light 4 Light`,
    options: [
      `1 and 2`,
      `1 and 3`,
      `2 and 3`,
      `2 and 4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 and 4`
  },
  {
    question: `Which of the following is a plant hormone?`,
    options: [
      `Insulin`,
      `Thyroxine`,
      `Oestrogen`,
      `Cytokinin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Oestrogen`
  },
  {
    question: `The gap between two neur ons is called:`,
    options: [
      `Dendrite`,
      `Synapse`,
      `Axon`,
      `Impulse`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Dendrite`
  },
  {
    question: `The brain is r esponsible for:`,
    options: [
      `Thinking`,
      `regulating the heart beat`,
      `Balancing of the body`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Match the given columns and choose the correct option. Column-I Column-II (P) Cell division (i) Abscisic acid (Q) Wilting (ii) Gibberellin (R) Hastens fruit ripening (iii) Ethylene (S) Stem growth (iv) Cytokinin`,
    options: [
      `P-(iii) Q-(iv) R-(ii) S-(i)`,
      `P-(iv) Q-(iii) R-(ii) S-(i)`,
      `P-(iv) Q-(iii) R-(i) S-(ii)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(iv) Q-(i) R-(iii) S-( ii)`
  },
  {
    question: `Match column-I with Column-II and choose the correct option. Column-I Column-II (P) Hypothyroidism (i) Dwarfism (Q) Growth hormone (ii) Goitre (R) Glucagon (iii) Pregnancy (S) Oxytocin (iv) Pancreas (T) Vasopressin (v) Antidiuretic (U) Progesterone (vi) Mammary gland`,
    options: [
      `P-(i), Q-(ii), R-(iv), S-(vi), T-(v), U-(iii)`,
      `P-(ii), Q-(i), R-(iv), S-(vi), T-(v), U-(iii)`,
      `P-(ii), Q-(i), R-(iv), S-(vi), T-(iii), U-(v)`,
      `P-(ii), Q-(i), R-(v), S-(iv), T-(iii), U-(vi)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(i), R-(iv), S-(vi), T-(iii), U-(v)`
  },
  {
    question: `Which of the following statements is correct about receptors?`,
    options: [
      `Gust atory receptors detect taste while olfactory receptors detect smell.`,
      `Both gustatory and olfactory receptors detect smell.`,
      `Auditory receptors detect smell and olfactory receptors detect taste.`,
      `Olfactory receptors detect taste and gustatory receptors smell.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Auditory receptors detect smell and olfactory receptors detect taste.`
  },
  {
    question: `In a synapse, chemical signal is transmitted from:`,
    options: [
      `dendritic end of one neuron to axonal end of another neuron.`,
      `axon to cell body of the same neuron.`,
      `cell body to axonal end of the same neuron.`,
      `axonal end of one neuron to dendritic end of another neuron.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) dendritic end of one neuron to axonal end of another neuron.`
  },
  {
    question: `Which is the correct sequence of the components of a reflex arc?`,
    options: [
      `Receptors → Muscles→ Sensory neuron → Motor neuron → Spinal cord`,
      `Receptors → Motor neuron → Spinal cord → Sensory neuron → Muscle`,
      `Receptors → Spinal cord → Sensory neuron → Motor neuron → Muscle`,
      `Receptors → Sensory neuron → Spinal cord → Motor neuron → Muscle`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Receptors → Spinal cord → Sensory neuron → Motor neuron → Muscle`
  },
  {
    question: `Which of the following statements are true? ( i) Sudden action in response to something in the environment is called reflex action. (ii) Sensory neurons carry signals from spinal cord to muscles. (iii) Motor neurons carry signals from receptors to spinal cord. (iv) The path through which signals are transmitted from a receptor to a muscle or a gland is called reflex arc.`,
    options: [
      `(i) and (ii)`,
      `(i) and (iii)`,
      `(i) and (iv)`,
      `(i), (ii) and (iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (i) and (iv)`
  },
  {
    question: `Which of the following statements are true about the brain? ( i) The main thinking part of brain is hind brain. (ii) Centres of hearing, smell, memory , sight etc are located in fore brain. (iii) Involuntary actions like salivation, vomiting, blood pressure are controlled by the medulla in the hind brain. (iv) Cerebellum does not control posture and balance of the body.`,
    options: [
      `(i) and (ii)`,
      `(i), (ii) and (iii)`,
      `(ii) and (iii)`,
      `(iii) and (iv)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (ii) and (iii)`
  },
  {
    question: `Choose the incorrect statement about insulin.`,
    options: [
      `It is produced in pancreas.`,
      `It regulates growth and development of the body.`,
      `It regulates blood sugar level.`,
      `Insuf ficient secretion of insulin will cause diabetes.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) It is produced in pancreas.`
  },
  {
    question: `When a person is suffering from severe cold, he or she cannot __________.`,
    options: [
      `dif ferentiate the taste of an apple from that of an ice cream.`,
      `dif ferentiate the smell of a perfume from that of an agarbatti.`,
      `dif ferentiate red light from green light.`,
      `dif ferentiate a hot object from a cold object.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) dif ferentiate the taste of an apple from that of an ice cream.`
  },
  {
    question: `Complete the following.`,
    options: [
      `Acetylcholi ne: Neurotransmitter : : Adrenaline : __________.`,
      `Cerebrum : Forebrain : : Cerebellum : ________`,
      `Thyroxine : Thyroid gland : : Insulin __________.`,
      `Thermoregulation : H ypothalamus : : Body balance :__________.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acetylcholi ne: Neurotransmitter : : Adrenaline : __________.`
  },
  {
    question: `Answer the following`,
    options: [
      `Name the endocrine gland associated with brain.`,
      `Which gland secretes digestive enzymes as well as hormones?`,
      `Name the endocrine gland ass ociated with kidneys.`,
      `Which endocrine gland is present in males but not in females?`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Name the endocrine gland associated with brain.`
  },
  {
    question: `Match the Column-I and Column-II and choose the correct option. Column-I Column-II P (i) Cyton Q (ii) Synaptic vesicle R (iii) Afferent nature S (iv) Efferent nature`,
    options: [
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
      `P-(i), Q-(ii), R-(iii), S-(iv)`,
      `P-(iv), Q-(ii), R-(iii), S-(i)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iv), Q-(ii), R-(iii), S-(i)`
  },
  {
    question: `Fight-or -flight reactions cause activation of:`,
    options: [
      `the adrenal medulla, leading to increas ed secretion of epinephrine and nor-epinephrine.`,
      `the pancreas, leading to reduction in blood sugar levels.`,
      `the parathyroid glands, leading increased metabolic rate.`,
      `the kidney , leading to suppression of renin- angiotensin-aldosterone pathway.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) the parathyroid glands, leading increased metabolic rate.`
  },
  {
    question: `Coordination is achieved through nervous system as well as endocrine system by respective agents like:`,
    options: [
      `vitamins and proteins`,
      `neurotransmitters and hormones`,
      `hormones and sugars`,
      `sugar and hormones`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) sugar and hormones`
  },
  {
    question: `Which of the following is not a reflex action?`,
    options: [
      `Blinking of eyes due to bright light`,
      `Salivation on seeing food`,
      `Sweating`,
      `W ithdrawl of hand on touching some hot object`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sweating`
  },
  {
    question: `The correct sequence of meninges of brain from outside to inside is:`,
    options: [
      `Dura mater → arachnoid → pia mater`,
      `Arachnoid → dura mater → pia mater`,
      `Pia mater → dura mater → arachnoid`,
      `Dura mater → pia mater → arachnoid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pia mater → dura mater → arachnoid`
  },
  {
    question: `Which part of the human brain controls body temperature?`,
    options: [
      `Pituitary`,
      `Cerebellum`,
      `Hypothalamus`,
      `Pons`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Pons`
  },
  {
    question: `Coordination via the nervous system tends to differ from that produced by the endocrine system because the nervous system:`,
    options: [
      `Is quick, precise and localized.`,
      `Is slower and more pervasive.`,
      `Does not require conscious activity .`,
      `Secrete hormones.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Secrete hormones.`
  },
  {
    question: `Which of the following plant function is controlled by auxins?`,
    options: [
      `Apical dominance`,
      `Seed dormancy`,
      `Bolting`,
      `Stem elongation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Apical dominance`
  },
  {
    question: `Which of the following receptors is incorrectly paired with their senses?`,
    options: [
      `Chemoreceptors - Chemicals`,
      `Photoreceptors - Pain`,
      `Thermoreceptors - Heat`,
      `Nociceptors - Pain`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Nociceptors - Pain`
  },
  {
    question: `The secretion of which hormone leads to physical changes in the body when you are 10-12 years of age?`,
    options: [
      `Estrogen from testes and testosterone from ovaries.`,
      `Es trogen from adrenal gland and testosterone from pituitary gland.`,
      `T estosterone from testes and estrogen from ovaries.`,
      `T estosterone from thyroid gland and estrogen from pituitary gland.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) T estosterone from testes and estrogen from ovaries.`
  },
  {
    question: `Identify which of the following statements about thyroxin is incorrect?`,
    options: [
      `Thyroid gland requires iodine to synthesize thyroxine.`,
      `Thyroxine is secreted by thyroid hormone.`,
      `It regulates protein, carbohydrates and fat metabolism in the body.`,
      `Iron is essential for the synthesis of thyroxin.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) It regulates protein, carbohydrates and fat metabolism in the body.`
  },
  {
    question: `A big tree falls in a forest, but its roots are still in contact with the soil. The branches of this fallen tree grow straight up (vertically). This happens in response to:`,
    options: [
      `W ater and light`,
      `W ater and minerals`,
      `Gravity and water`,
      `Light and gravity`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Light and gravity`
  },
  {
    question: `Cretinism results due to:`,
    options: [
      `Excess secretion of growth hormone.`,
      `Under secretion of thyroid hormone.`,
      `Excess secretion of adrenal gland.`,
      `Under secretion of growth hormone.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Under secretion of growth hormone.`
  },
  {
    question: `A person entering an empty room suddenly finds a snake right in front on opening the door. Which one of the following is likely to happen in this neuro- hormonal control system?`,
    options: [
      `Sympathetic nervous system is activated releasing epinephrine and nor-epinephrine from adrenal medulla.`,
      `Ne urotransmitters diffuse (rapidly across) the sympatic cleft and transmit a nerve impulse.`,
      `Hy pothalamus activates the para-sympathetic division of brain.`,
      `Sympathetic nervous system is activated releasing epinephrine and epinephrine from adrenal cortex.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sympathetic nervous system is activated releasing epinephrine and epinephrine from adrenal cortex.`
  },
  {
    question: `How do parasympathetic neural signals affects working of heart and digestion?`,
    options: [
      `Both heart rate and digestion rate increases.`,
      `Heart rate decreases but digestion increases.`,
      `Reduces both heart rate and digestion.`,
      `Heart rate is increased but has no ef fect on digestion.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Heart rate is increased but has no ef fect on digestion.`
  },
  {
    question: `Pneumatophores of mangrove are example of:`,
    options: [
      `Thermonasty`,
      `negative phototropism`,
      `positive geotropism`,
      `negative geotropism 109 Control and Coordination`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thermonasty`
  },
  {
    question: `Given below is the incomplete table about certain hormones, their source glands and one major effect of each on the body of humans. Identify the correct option for the blanks X, Y and Z. Gland Secretion Effect on body X Oestrogen Maintenance of secondary sexual characters Pancreas Y Raises blood sugar level Anterior pituitary Z Oversecretion leads to gigantism Options: X Y Z`,
    options: [
      `Ovaries Glucagon Growth hormone`,
      `Placenta Insulin V asopressin`,
      `Ovaries Thyroxine Calcitonin`,
      `Testes Glucagon Calcitonin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ovaries Glucagon Growth hormone`
  },
  {
    question: `Which of the following statements about transmission of nerve impulse is incorrect?`,
    options: [
      `Nerve impulse travels from dendritic end towards axonal end.`,
      `At the dendritic end, electrical impulses bring about the release of some chemicals which generate an electrical impulse at the axonal end of another neuron.`,
      `The chemicals released from the axonal end of one neuron cross the synapse and generate a similar electrical impulse in a dendrite of another neuron.`,
      `A neuron transmits electrical impulses not only to another neuron but also to muscle and gland cells.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nerve impulse travels from dendritic end towards axonal end.`
  },
  {
    question: `The growth of tendril in pea plants is due to:`,
    options: [
      `ef fect of light`,
      `ef fect of gravity`,
      `r apid cell divisions in tendrillar cells that are away from the support`,
      `rapid cell divisions in tendrillar cells in contact with the support`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ef fect of gravity`
  },
  {
    question: `Involuntary actions in the body are controlled by:`,
    options: [
      `medulla in fore brain`,
      `medulla in mid brain`,
      `medulla in hind brain`,
      `medulla in spinal cord`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) medulla in hind brain`
  },
  {
    question: `A doctor advised a person to take an injection of insulin because:`,
    options: [
      `his blood pressure was low`,
      `his heart was beating slowly`,
      `he was suf fering from goitre`,
      `his sugar level in blood was high`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) his sugar level in blood was high`
  },
  {
    question: `If the apical parts of the negative geotropic roots of mangrove plant are pasted with wax, which function of these roots will be affected? (Rajasthan 2013)`,
    options: [
      `Exchange of O2 and CO2`,
      `W ater absorption`,
      `Fixation of plant`,
      `Photosynthesis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Exchange of O2 and CO2`
  },
  {
    question: `Choose the correct option from the following. (Chandigarh 2013) I . In light, hormone auxin helps the cells to grow longer in plants. II. Plants hormone gibberellins helps in growth of a stem. III. Cytokininis inhibits cells division. IV . Abscisic acid promote growth in plants.`,
    options: [
      `I and III are correct`,
      `II and IV are correct`,
      `I and II are correct`,
      `I and IV are correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I and IV are correct`
  },
  {
    question: `Read the following statements and select the correct option. (Karnataka 2017) I. Auxins help to prevent fruit and leaf drop at early stages. II. Abscisic acid promotes seed germination.`,
    options: [
      `‘I’ is false and ‘II’ is true`,
      `‘I’ is true and ‘II’ is false`,
      `Both ‘I’ and ‘II’ are true`,
      `Both ‘I’ and ‘II’ are false`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both ‘I’ and ‘II’ are true`
  },
  {
    question: `The middle layer of brain meninges is________. (W est bengal 2017)`,
    options: [
      `Dura matter`,
      `Pia matter`,
      `Arachnoid`,
      `Sub-arachnoid space`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sub-arachnoid space`
  },
  {
    question: `Choose the correct option to complete ‘P’, ‘Q’, ‘R’ and ‘S’ in the following table. (Delhi 2019) Hormone Function A Stimulates growth in all organs B Stimulates pituitary to release growth hormone C Controls blood sugar level D Regulates BMR`,
    options: [
      `P – Insulin, Q-Thyroxine, R-Growth hormone releasing hormone, S-Growth hormone releasing hormone Release Factor`,
      `P – Growth hormone releasing hormone, Q- Insulin, R- Thyroxine, S-Growth hormone releasing hormone Release Factor`,
      `P – Thyroxine, Q- Insulin, R-Growth hormone releasing hormone, S-Growth hormone releasing hormone Release Factor`,
      `P – Growth Hormone, Q- Growth hormone releasing hormone Release Factor, R- Insulin, S-Thyroxine.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P – Insulin, Q-Thyroxine, R-Growth hormone releasing hormone, S-Growth hormone releasing hormone Release Factor`
  },
  {
    question: `What would happen to the person if cerebellum of his brain is damaged? [NTSE 2013]`,
    options: [
      `He will lose his memory power .`,
      `He will not be able to swallow food properly .`,
      `He will be unable to coordinate and stand properly.`,
      `He will lose his power of vision and hearing. 111 Control and Coordination`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) He will lose his power of vision and hearing. 111 Control and Coordination`
  },
  {
    question: `Observe the experimental sets [X] & [Y]. [NTSE 2018] (X) (Y) T est tube Cotton Plant Plug Water Day 1 Day 5 Observe the test tube X & Y . From the list given below, choose the combination of responses of shoot and root that are observed in Y .`,
    options: [
      `Positive phototropism and positive geotropism`,
      `Negative phototropism and positive geotropism`,
      `Positive phototropism and negative geotropism`,
      `Only negative phototropism`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Negative phototropism and positive geotropism`
  },
  {
    question: `In a hypertensive patient, the systolic pressure is increased to 150 mm of Hg. Which part of the brain would be involved in the regulation of blood pressure? (NTSE 2018)`,
    options: [
      `Medulla`,
      `Cerebrum`,
      `Cerebellum`,
      `Hypothalamus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cerebellum`
  },
  {
    question: `Match the items given in Column-I with the most appropriate ones in Column-II and choose the option with the correct matching pairs: (2019) Column-I Column-II P. Cranial nerves (i) Testosterone Q. Leydig cells (ii) Natural reflex R. Acetylcholine (iii) 12 pairs S. Spinal nerves (iv) Prolactin T. Sneezing (v) Neurotransmitter (vi) 18 pairs (vii) 31 pairs (viii) Conditioned reflex`,
    options: [
      `P-(iii), Q-(i), R-(v), S-(vii), T-(ii)`,
      `P-(vii), Q-(v), R-(ii), S- (i), T-(iii)`,
      `P-(vii), Q-(ii), R-(v), S-(iv), T-(iii)`,
      `P-(ii), Q-(i), R-(v), S-(iv), T-(vii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(ii), Q-(i), R-(v), S-(iv), T-(vii)`
  },
  {
    question: `Positions of endocrine glands are labelled A–E in the given diagram. Match the symbols of glands in column-I with the type of hormone it secretes given in column-II. (NTSE 2019) E D C BA Column-I Column-II A. (i) Progesterone B. (ii) Insulin C. (iii) Parathyroid hormone D. (iv) Melatonin E. (v) Follicle stimulating hormone (vi) Thyroxine (vii) Aldosterone Choose the correct combination from the following.`,
    options: [
      `A–(i), B–(ii), C–(vii), D–(iii), E–(v)`,
      `A–(i), B–(iv), C–(ii), D–(iii), E–(vi)`,
      `A–(v), B–(ii), C–(iv), D–(iii), E–(vii)`,
      `A–(v), B–(iv), C–(vii), D–(iii), E–(ii) 112 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A–(v), B–(iv), C–(vii), D–(iii), E–(ii) 112 Class-X BIOLOGY PW`
  },
  {
    question: `Charles Darwin observed that seedlings grow towards light. He called this response ‘phototropism’. In an experiment, two light sources are used to illuminate each seedling. Each source is indicated by circle in the diagrams below. The larger circle represents a light source with twice the illumination than the light source represented by the smaller circle. (2013) (i) (ii) (iii) (iv) Which of the above responses would be observed?`,
    options: [
      `only ( iv)`,
      `only ( ii)`,
      `(i) and (iii)`,
      `(i) and (iv)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (i) and (iv)`
  },
  {
    question: `Which of the following is not a part of the female r eproductive system in human beings?`,
    options: [
      `Ovary`,
      `Uterus`,
      `V as deferens`,
      `Fallopian tube`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ovary`
  },
  {
    question: `Match the or ganisms given in column-I with their respective reproduction methods in column-II. Column-I Column-II (P) Planaria (i) Binary fission (Q) Fungi (ii) Asexual spores (R) Yeast (iii) Budding (S) Amoeba (iv) Regeneration`,
    options: [
      `P-(i) Q-(ii) R-(iii) S-( iv)`,
      `P-(iv) Q-(ii) R-(iii) S-( i)`,
      `P-(ii) Q-(iii) R-(i) S-(iv)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii) Q-(iii) R-(i) S-(iv)`
  },
  {
    question: `Match the column-I with column-II. Column-I Column-II (P) Stamens (i) Calyx (Q) Pistil (ii) Corolla (R) Sepals (iii) Androecium (S) Petals (iv) Gynoecium`,
    options: [
      `P-(iii) Q-(iv) R-(i) S-(ii)`,
      `P-(i) Q-(ii) R-(iii) S-( iv)`,
      `P-(ii) Q-(i) R-(iii) S-( iv)`,
      `P-(iii) Q-(ii) R-(i) S-(iv)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iii) Q-(iv) R-(i) S-(ii)`
  },
  {
    question: `Match the given columns: Column-I Column-II (P) Germination (i) The pollen transferred from one flower to another (Q) Pollination (ii) The process in which embryo develops into seedling (R) Menstruation (iii) Fertilised egg in humans gets implanted in (S) Uterus (iv) Process occurs when egg in humans is not fertilised`,
    options: [
      `P-(ii) Q-(i) R-(iv) S-(iii)`,
      `P-(i) Q-(ii) R-(iv) S-(iii)`,
      `P-(i) Q-(ii) R-(iii) S-( iv)`,
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(i) Q-(ii) R-(iii) S-( iv)`
  },
  {
    question: `Match the column-I with column-II: Column-I Column-II (P) External fertilization (i) Fertilization (Q) Female gamete (ii) Ovary (R) Fusion of male and female gametes (iii) Frog (S) Main female reproductive organ (iv) Testis (T) Main male reproductive organ (v) Ovum`,
    options: [
      `P-(i) Q-(ii) R-(iii) S-( iv) T-(v)`,
      `P-(iii) Q-(v) R-(i) S-(ii) T-(iv)`,
      `P-(ii) Q-(iii) R-(iv) S-(i) T-(v)`,
      `P-(ii) Q-(iv) R-(i) S-(iii) T-(v) Multiple Choice Questions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii) Q-(iii) R-(iv) S-(i) T-(v)`
  },
  {
    question: `W hich of the following is not an outcome of variations present in population?`,
    options: [
      `Bacterial resistance to heat.`,
      `Dif ferent colour of eyes.`,
      `Survival of species over time.`,
      `Maintenance of body design features. 141 How Do Organisms Reproduce? 141 How Do Organisms Reproduce?`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Survival of species over time.`
  },
  {
    question: `If a starfish is cut into pieces, each piece grow into a complete animals. The process is called`,
    options: [
      `Regeneration`,
      `Reproduction`,
      `Healing of wounds`,
      `Fragmentation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Regeneration`
  },
  {
    question: `Spiny or sticky pollen grains and lar ge, attractively coloured flowers are associated with`,
    options: [
      `Hydrophily`,
      `Entomophily`,
      `Ornithophily`,
      `Anemophily`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Anemophily`
  },
  {
    question: `From among the sets of terms given below, identify those that are associated with the gynoecium.`,
    options: [
      `Ovule, ovary , embryo sac, tapetum`,
      `Thalamus, pistil, style, ovule`,
      `Stigma, ovule, embryo sac, placenta`,
      `Ovule, stamen, ovary , embryo sac`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Stigma, ovule, embryo sac, placenta`
  },
  {
    question: `Fertilisation is the process of`,
    options: [
      `transfer of male gamete to female gamete.`,
      `fusion of nuclei of male and female gamete.`,
      `adhesion of male and female reproductive organs.`,
      `the formation of gametes by a reproductive organ. (2020)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) the formation of gametes by a reproductive organ. (2020)`
  },
  {
    question: `The diagram given below represents a system in the human body. Study the diagram and answer the following questions: 2 5 13 6 4`,
    options: [
      `Identify the system.`,
      `Label the parts marked 5 and 6.`,
      `Name the two hormones secreted by 1.`,
      `Mention the number and the nam e of the part involved in fertilization and implantation from the above diagram. (e) Mention the sur gical methods of contraception in:`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Identify the system.`
  },
  {
    question: `The mass of green filament was of`,
    options: [
      `Spir ogyra`,
      `V olvox`,
      `Fucus`,
      `Fungal filaments or hyphae`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fucus`
  },
  {
    question: `The small fragment gave rise to new filament. What does it indicate?`,
    options: [
      `Spir ogyra reproduces asexually through regeneration.`,
      `Spir ogyra reproduces asexually through fragmentation.`,
      `Spi rogyra reproduces asexually through binary fission.`,
      `Spir ogyra reproduces asexually through vegetative propagation. 145 How Do Organisms Reproduce? 145 How Do Organisms Reproduce?`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Spir ogyra reproduces asexually through regeneration.`
  },
  {
    question: `Can you identify an organism which reproduces in similar way as Spirogyra?`,
    options: [
      `Yeast`,
      `Cyanobacteria`,
      `Entamoeba`,
      `V olvox`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) V olvox`
  },
  {
    question: `T he pathway to synthesise red coloured petals in a plant X consumes ATP. This red colour was important to its recognition by the pollinator. A Pathogen reduced the population of its pollinator to colour blind individuals. The plant population is expected to evolve. Which of the following will be least expected change?`,
    options: [
      `red flowers remain as widespread as before.`,
      `spread of plants with black and white flowers.`,
      `increase in fragrance of flowers.`,
      `to increase root/stem branching.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) increase in fragrance of flowers.`
  },
  {
    question: `Why are testes located outside the abdominal cavity in scrotum?`,
    options: [
      `Fo rmation of sperms requires a higher temperature.`,
      `Formation of sperms requires a lower temperature.`,
      `Formation of sperms requires more space`,
      `Sperms get nutrition from scrotum 146 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fo rmation of sperms requires a higher temperature.`
  },
  {
    question: `T estis in males and ovaries in the females produce respectively`,
    options: [
      `Ovum and sperms`,
      `Ova and spermatozoa`,
      `Oogonia and spermatozoa`,
      `Sperms and ovum`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sperms and ovum`
  },
  {
    question: `W hich hormones seem to initiate maturation and release of ova?`,
    options: [
      `Progesterone`,
      `FSH and LH`,
      `It is not controlled by hormones`,
      `Oestrogens`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Oestrogens`
  },
  {
    question: `Ant her has Microspore mother cells that undergo meiosis to form microspores. Pick the CORRECT number of chromosomes in these plant parts or cells if the haploid number of chromosomes in the plant species is 12 Petal Filament Microspore mother cell Microspore Pollen grain male gamete`,
    options: [
      `Cannot be known Cannot be known 24 12 24 12`,
      `24 24 24 12 12 12`,
      `Cannot be known Cannot be known 24 24 12 12`,
      `Cannot be known Cannot be known 24 12 12 12`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cannot be known Cannot be known 24 12 12 12`
  },
  {
    question: `Column-I Column-II (P) Seminiferous tubule (i) Manufactures egg (Q) Fallopian tube (ii) Progesterone (R) Ovary (iii) Sac enclosing embryo (S) Corpus luteum (iv) Manufactures sperm (T) Amnion (v) Site of fertilization`,
    options: [
      `(P)-(v); (Q)-(i); (R)-(iv); (S)-(ii); (T)-(iii)`,
      `(P)-(iv); (Q)-(v); (R)-(i); (S)-(ii); (T)-(iii)`,
      `(P)-(i); (Q)-(ii); (R)-(iii); (S)-(v); (T)-(iv)`,
      `(P)-(i); (Q)-(ii); (R)-(iii); (S)-(iv); (T)-(v)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (P)-(v); (Q)-(i); (R)-(iv); (S)-(ii); (T)-(iii)`
  },
  {
    question: `The diagram shows the menstrual cycle of a woman during the month of September. Sunday 7 14 21 28 Monday 1 8 15 22 29 Tuesday 2 9 16 23 30 Wednesday 3 10 17 24 Thursday 4 11 18 25 Friday 5 12 19 26 Saturday 6 13 20 27 Key = ovulation = menstruation Why can fertilisation not take place if sperms are released into the vagina on 8th September?`,
    options: [
      `Sperms are washed out of the female uterus by the menstrual flow.`,
      `Sperms can survive in the female reproductive system for only 3 or 4 days.`,
      `Sp erms must be released after ovulation for fertilisation to take place.`,
      `The uterus lining is washed out of the female body during menstruation.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The uterus lining is washed out of the female body during menstruation.`
  },
  {
    question: `This diagram shows that process of __________ (Chandigarh 2017 SA T)`,
    options: [
      `Binary Fission`,
      `Multiple fission`,
      `Regeneration`,
      `Budding`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Regeneration`
  },
  {
    question: `In plants, the developing embryo is nourished by endospermic tissues its cell consists of: (Jharkhand, 2017 SA T)`,
    options: [
      `One genome (Haploid)`,
      `T wo genomes (Diploid)`,
      `Three genomes (T riploid)`,
      `Four genomes (T etraploid)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) One genome (Haploid)`
  },
  {
    question: `Which option indicates the parts of gynoecium? (Kerala 2017, SA T)`,
    options: [
      `Pollen grain, filament, ovary , tube nucleus`,
      `Polar nuclei, stigma, ovule, style`,
      `Style stamen, stigma, generative nucleus`,
      `Ovary , anther, filament, polar nuclei`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ovary , anther, filament, polar nuclei`
  },
  {
    question: `Parthenogenesis is (Andhra Pradesh, 2019, SA T)`,
    options: [
      `Asexual Reproduction`,
      `Sexual Reproduction`,
      `Artificial Propagation`,
      `Natural Propagation`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Natural Propagation`
  },
  {
    question: `R ead the given statements and select the correct option. Statement - I: In humans, the gamete contributed by the male determines whether the child produced will be the male or female. Competitive Corner 161 How Do Organisms Reproduce? 161 How Do Organisms Reproduce? Statement-II: Sex in humans is dependent on the X-chromosome or Y-chromosome of the father. (T elangana, Stage 1 SAT)`,
    options: [
      `Bot h Statements-I and II are true and Statement - II is the correct explanation of Statement-I.`,
      `Both Statements-I and II are true, Statement-II is not the correct explanation of Statement`,
      `Statement-I is true and Statement -II is false`,
      `Both Statements-I and II are false`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bot h Statements-I and II are true and Statement - II is the correct explanation of Statement-I.`
  },
  {
    question: `Re ad the following statement and select the correct option (Chandigarh, 2020, Stage 1 SA T) A: Wind pollinated flowers need to produce more amount of pollen grain B: Seeds from cross pollinated flowers produce weaker and less healthy plants.`,
    options: [
      `A is false, B is true`,
      `A is true, B is false`,
      `Both A and B are true`,
      `Neither A nor B is true`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Neither A nor B is true`
  },
  {
    question: `Sperms are produced in the: (Delhi, 2020, Stage 1 SA T)`,
    options: [
      `Seminiferous tubules`,
      `Interstitial cell`,
      `V as deferens`,
      `Prostate gland`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Interstitial cell`
  },
  {
    question: `W hich one of the following is correct route for passage of sperms? (2014)`,
    options: [
      `T estes - scrotum - vasdeferens - urethra - penis`,
      `Scrotum - testes - urethra - vasdeferens - penis`,
      `T estes vasdeferens - urethra - seminal vesicles`,
      `T estes - vasdeferens - urethra - penis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T estes - vasdeferens - urethra - penis`
  },
  {
    question: `E mbryonic development is a complex multi-step process that involves transition from single cellularism to multicellularism. In animals, all of the following are associated with embryonic development except (2018)`,
    options: [
      `Migration of cells to specific areas`,
      `Formation of germ layers`,
      `Activation of all the genes in each cell`,
      `Inductive tissue interactions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Inductive tissue interactions`
  },
  {
    question: `The figure below shows the process of egg production and early development of a healthy fertilized egg in the human reproductive system. (2015) Y W X Z Sperm unfertilized egg Which of the following statements is NOT correct?`,
    options: [
      `Three polar bodies are attached to W.`,
      `X produces progesterone.`,
      `The chromosome number for each cell in Y is 46.`,
      `Z is at the stage of blastocyst`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Z is at the stage of blastocyst`
  },
  {
    question: `Consi der Figure 5, the graph comparing the effectiveness of different methods of contraception. (201 1) Sterilization Condom Rhythm method Hermenal Pills 100 - 90 - 80 - 70 - 60 - 50 - 40 - 30 - 20 - 10 - 0 - Which of the following statements is correct?`,
    options: [
      `The sterilization and douche methods can be considered good methods of avoiding pregnancy.`,
      `The condom is completely effective in preventing pregnancy.`,
      `Ni nety eight percent of pregnancies can be prevented by using hormone pills.`,
      `The contraceptive success rate of the rhythm method, where sex is avoided during ovulation is about 35%.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The sterilization and douche methods can be considered good methods of avoiding pregnancy.`
  },
  {
    question: `Human c horionic gonadotropin hormone (hCG) is injected into the blood of a mouse. Antibodies are produced in the mouse blood in response to this substance. What can the serum from this mouse blood be used for? (2009)`,
    options: [
      `T reatment of infertility`,
      `Pregnancy test`,
      `Prevention of fertilization`,
      `Paternity test 163 How Do Organisms Reproduce? 163 How Do Organisms Reproduce? School Level Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) T reatment of infertility`
  },
  {
    question: `There will be similarity between some of your genes and some plants genes because`,
    options: [
      `Plants have infected humans`,
      `Humans consume plants`,
      `V iruses infecting plants have infected humans as well`,
      `W e have or had common ancestor sometime in the past`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Plants have infected humans`
  },
  {
    question: `Which of the following is not a requirement for natural selection to occur?`,
    options: [
      `V ariation between individuals`,
      `Heritability of the trait being selected`,
      `Sexual reproduction`,
      `Dif ferences in reproductive success among individuals`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sexual reproduction`
  },
  {
    question: `An example of homologous organs is`,
    options: [
      `Our arm and a dog’ s fore-leg.`,
      `Our teeth and an elephant’ s tusks.`,
      `Potato and runners of grass.`,
      `All of the above.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Our arm and a dog’ s fore-leg.`
  },
  {
    question: `In evolutionary terms, we have more in common with`,
    options: [
      `A Chinese school-boy.`,
      `A chimpanzee.`,
      `A spider.`,
      `A bacterium.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A bacterium.`
  },
  {
    question: `Match the following Column-I Column-II (P) Transmission of characters from parent to offspring (i) Hereditary (Q) Differences among the individual of same species (ii) Genetics (R) Branch of science deals with heredity and variation (iii) Variation (S) Development of new organism by modifications in pre existing ones (iv) Evolution`,
    options: [
      `P-(iii) Q-(ii) R-(iv) S-(i)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(i) Q-(iii) R-(ii) S-(iv)`
  },
  {
    question: `Match the following Column-I Column-II (P) Genes (i) Units of inheritance (Q) Factors (ii) Impressions of past organism (R) Fossils (iii) Entities which control the expression of traits (S) Sex chromosomes (iv) Determine sex of an individual`,
    options: [
      `P-(iii) Q-(ii) R-(iv) S-(i)`,
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iii) Q-(ii) R-(iv) S-(i)`
  },
  {
    question: `Match the following Column-I Column-II (P) Phenotype (i) Gene complement of an individual (Q) Genotype (ii) Factor which cannot express its effect (R) Dominant factor (iii) Factor which can express its effect (S) Recessive factor (iv) Observable characteristics`,
    options: [
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
      `P-(iii) Q-(ii) R-(iv) S-(i)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(iv) Q-(i) R-(iii) S-( ii)`
  },
  {
    question: `Match the following Column-I Column-II (P) Change in gene frequency due to random event (i) Homologous organs (Q) Organs structurally similar but functionally different (ii) Vestigial organs (R) Organs functionally similar but develop from different ways (iii) Analogous organs (S) Functionless organs present in body (iv) Genetic drift`,
    options: [
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
      `P-(iii) Q-(ii) R-(iv) S-(i)`,
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iii) Q-(ii) R-(iv) S-(i)`
  },
  {
    question: `Match the following Column-I Column-II (P) Edible part in kale (i) Terminal bud (Q) Edible part in kohlrabi (ii) Swollen stem (R) Edible part in Broccoli (iii) Larger leaves (S) Edible part in cabbage (iv) Immature green flowers`,
    options: [
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
      `P-(i) Q-(iii) R-(ii) S-(iv)`,
      `P-(iv) Q-(i) R-(iii) S-( ii)`,
      `P-(iii) Q-(ii) R-(iv) S-(i) 194 Class-X BIOLOGY PW Multiple Choice Questions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iv) Q-(i) R-(iii) S-( ii)`
  },
  {
    question: `Which of the following statement is incorrect?`,
    options: [
      `For every hormone there is a gene.`,
      `For every protein there is a gene.`,
      `For production of every enzyme there is a gene.`,
      `For every molecule of fat there is a gene`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) For production of every enzyme there is a gene.`
  },
  {
    question: `A cross between a tall plant (TT) and short pea plant (tt) resulted in progeny that were all tall plants because`,
    options: [
      `tallness is the dominant trait`,
      `shortness is the dominant trait`,
      `tallness is the recessive trait`,
      `height of pea plant is not governed by gene ‘T’ or ‘t’`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) tallness is the dominant trait`
  },
  {
    question: `Select the incorrect statement.`,
    options: [
      `Frequency of certain genes in a population change over several generations resulting in evolution.`,
      `Reduction in weight of the or ganism due to starvation is genetically controlled.`,
      `L ow weight parents can have heavy weight progeny.`,
      `T raits which are not inherited over generations do not cause evolution.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) L ow weight parents can have heavy weight progeny.`
  },
  {
    question: `The changes in non-reproductive tissues`,
    options: [
      `Cannot be passed on to the DNA of the germ cells`,
      `Cannot direct evolution`,
      `Arc the acquired traits`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Arc the acquired traits`
  },
  {
    question: `The gases present in the atmosphere of primitive earth were:`,
    options: [
      `Nitrogen, nitrogen dioxide and oxygen only`,
      `Carbon dioxide and carbon monoxide only`,
      `Methane, ammonia and water vapour`,
      `Ozone and hydrogen only`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ozone and hydrogen only`
  },
  {
    question: `The experiment to confirm the origin of life from inanimate matter was performed by:`,
    options: [
      `Lamarck`,
      `Darwin`,
      `J.B.S. Haldane`,
      `Stanley Miller and Harold C. Urey`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Lamarck`
  },
  {
    question: `Man has developed the following pair of common vegetables, which of the following pairs has been developed from wild cabbege?`,
    options: [
      `Kale and Kohlrabi`,
      `Broccoli and cauliflower`,
      `Cabbage and Kale`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `W rite the genotypes for`,
    options: [
      `Purple flowers (heterozygous)`,
      `Round seeds (homozygous)`,
      `Green pods (heterozygous)`,
      `Dwarf pea plants (homozygous)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Green pods (heterozygous)`
  },
  {
    question: `In the following crossies write the characteristics of the progeny Cross Progeny`,
    options: [
      `RR YY × RR YY Round, yellow Round, yellow ------------- -------------`,
      `Rr Yy × Rr Yy Round, yellow Round, yellow ------------- -------------`,
      `rr yy × rr yy wrinkled, green wrinkled, green ------------- -------------`,
      `RR YY × rr yy Round, yellow wrinkled, yellow ------------- -------------`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) rr yy × rr yy wrinkled, green wrinkled, green ------------- -------------`
  },
  {
    question: `On the basis of the table given below answer the question. Character Dominant trait Rrecessive trait`,
    options: [
      `Seed Colour Yellow Green`,
      `Flower Colour Violet White`,
      `Pod Shape Full Constricted`,
      `Flower Position Axial Terminal Which of the following trait is correctly placed? (a) A and D only ( b) A and B only (c) A and C only ( d) All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Flower Position Axial Terminal Which of the following trait is correctly placed? (a) A and D only ( b) A and B only (c) A and C only ( d) All of the above`
  },
  {
    question: `Evolution has never been straight. There is`,
    options: [
      `Branching descent`,
      `Progressive and retrogressive evolution`,
      `Diver gent evolution`,
      `Conver gent evolution`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Diver gent evolution`
  },
  {
    question: `Why did many of the old species gets eliminated?`,
    options: [
      `Due to development of new species.`,
      `Changes in environment`,
      `Natural selection`,
      `All the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Due to development of new species.`
  },
  {
    question: `What factor helped the present day species to survive`,
    options: [
      `Natural selection`,
      `Adaptability to the changes in environment 199 Heredity and Evolution`,
      `Favourable mutations`,
      `All the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All the above`
  },
  {
    question: `Mendel crossed a pure white flowered recessive pea plant with a dominant pure purple flowering plant. What will be the percentage of plants he would have obtained if he crossed the hybrids?`,
    options: [
      `50% white flowers and 50% purple flowers`,
      `All purple flowered plants`,
      `7 5% purple flowered and 25% purple flowered plants`,
      `75% white flowered and 25% purple flowered plants`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7 5% purple flowered and 25% purple flowered plants`
  },
  {
    question: `Blue eye colour in human is recessive to brown eye colour . The expected children of a marriage between blue-eyed woman and brown-eyed male who had a blue-eyed mother are likely to be :-`,
    options: [
      `all blue-eyed`,
      `three blue-eyed and one brown-eyed`,
      `all brown-eyed`,
      `one blue-eyed and one brown-eyed`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) all brown-eyed`
  },
  {
    question: `In an experiment consisting of tall pea plants bearing violet flowers (TtVV) with short pea plant bearing Violet flowers (ttVV). What will be the resultant progeny?`,
    options: [
      `25% violet, tall plant and 75% violet short plant`,
      `50% violet, tall plant and 50% violet short plant`,
      `100% violet flowers with 50% tall and 50% short`,
      `75% violet, tall plant and 25% violet short plant`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 75% violet, tall plant and 25% violet short plant`
  },
  {
    question: `If there is a cross between a red flowering plant (dominant) and a yellow flowering plant (recessive), and the genotype of the F1 progeny is Rr and rr in the ratio of . What is the genotypic condition of the red and yellow flowering plant?`,
    options: [
      `Homozygous dominant and heterozygous recessive`,
      `Heterozygous dominant and homozygous recessive`,
      `Both are heterozygous dominant`,
      `Both are homozygous dominant`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Homozygous dominant and heterozygous recessive`
  },
  {
    question: `In snapdragons, the allel e for tall plants (T) is dominant to the allele for dwarf plants (t), and the allele for red flowers (R) is incompletely dominant with the allele for white flowers (R’). The heterozygous condition for flower color is pink. 207 Heredity and Evolution If a dw arf red snapdragon is crossed with a white snapdragon homozygous for tall, what are the probable genotypes and phenotypes of the F1 generation?`,
    options: [
      `All TtRR’ (tall and pink)`,
      `All TtRR (tall and red)`,
      `All ttR’R’ (tall and white)`,
      `All ttRR (dwarf and red)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) All TtRR’ (tall and pink)`
  },
  {
    question: `Yellow and round sed Yellow and round sed Green and wrinkled seed Selfing T otal number of seeds were 560. Y ellow round = A, Yellow wrinkled = B, Green round = C, Green wrinkled = D Choose the correct option:`,
    options: [
      `A = 35, B = 108, C = 101, D = 315`,
      `A = 108, B = 315, C = 35, D = 101`,
      `A = 315, B = 105, C = 105, D = 35`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `A pure tall plant can be differentiated from a hybrid tall plant`,
    options: [
      `If all plants are tall after self-pollination`,
      `By measuring length of plant`,
      `By spraying gibberellins`,
      `If all plants are dwarf after self-pollination`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) By spraying gibberellins`
  },
  {
    question: `The genotype of B blood group father of an O blood group child would be:`,
    options: [
      `IAIB`,
      `I BIB`,
      `IBIO`,
      `IOIO`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) IAIB`
  },
  {
    question: `ABO Blood grouping system is a perfect example of`,
    options: [
      `Co dominance only`,
      `Co dominance and multiple allelism only`,
      `Multiple allelism only`,
      `Dominance, co dominance, and multiple allelism`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Dominance, co dominance, and multiple allelism`
  },
  {
    question: `The dif ference between Darwin’s and Lamarck’s perspective is that`,
    options: [
      `Darwin would say long neck of giraf fe existed in the population already`,
      `Lamarck would say long neck of giraf fe existed in the population already`,
      `Lamarck held evolution to be driven by advantage whereas Darwin thought it was mere luck`,
      `Darwin held evolution to be driven by advantage whereas Lamarck thought it was mere luck`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lamarck would say long neck of giraf fe existed in the population already`
  },
  {
    question: `The key dif ference between natural and artificial selection is`,
    options: [
      `Artificial selection uses chemicals`,
      `Artificial selection is relatively slower`,
      `Artificial selection cannot create new species`,
      `Artificial selection pressures are curated by man`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Artificial selection cannot create new species`
  },
  {
    question: `Which of the following observation would have proved Lamarck’s hypothesis?`,
    options: [
      `A body builder’s son is born with strong muscles`,
      `A presence of an allele for temperature resistance in a bacterial population at 8000 ft altitude`,
      `Increase in number of individuals with dark skin colour near the equator`,
      `none of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) none of these`
  },
  {
    question: `According to the evolutionary theory, formation of a new species is generally due to`,
    options: [
      `sudden creation by nature`,
      `accumulat ion of variations over several generations`,
      `clones formed during asexual reproduction`,
      `movement of individuals from one habitat to another`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) sudden creation by nature`
  },
  {
    question: `Select the correct statement`,
    options: [
      `T endril of a pea plant and phylloclade of Opuntia are homologous`,
      `T endril of a pea plant and phylloclade of Opuntia are analogous`,
      `W ings of birds and limbs of lizards are analogous`,
      `W ings of birds and wings of bat are homologous`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) W ings of birds and wings of bat are homologous`
  },
  {
    question: `Some dinosaurs had feathers although they could not fly but birds have feathers that help them to fly. In the context of evolution this means that`,
    options: [
      `reptiles have evolved from birds`,
      `t here is no evolutionary connection between reptiles and birds`,
      `feathers are homologous structures in both the organisms`,
      `birds have evolved from reptiles 208 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) birds have evolved from reptiles 208 Class-X BIOLOGY PW`
  },
  {
    question: `If heat-labile bacteria are made to grow in a temperature higher than 70 degree celsius, after some progenies some of the bacteria start developing resistance for the heat and becomes thermostable. What can be the most likely reason for it?`,
    options: [
      `The bacteria have derived a mechanism to reduce the temperature.`,
      `The bacteria have found an alternative condition to grow.`,
      `The bacteria have under gone variation and become heat resistant.`,
      `The bacteria have changed their food.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The bacteria have changed their food.`
  },
  {
    question: `Which of the following would stop evolution by natural selection from occurring?`,
    options: [
      `I f a thermonuclear war killed most living organisms and changed the environment drastically.`,
      `If humans became ext inct because of a disease epidemic.`,
      `If all individuals in a population were genetically identical, and there was no genetic recombination, sexual reproduction, or mutation.`,
      `If ozone depletion led to increased ultraviolet radiation, which caused many new mutations.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) If ozone depletion led to increased ultraviolet radiation, which caused many new mutations.`
  },
  {
    question: `Classification of species is done on the basis of`,
    options: [
      `Cell design - nucleated or non-nucleated`,
      `Unicellular or multi-cellular .`,
      `Specialisation of cell types and tissues - Autotrophs or heterotrophs.`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cell design - nucleated or non-nucleated`
  },
  {
    question: `The correct sequence in evolution of man is:`,
    options: [
      `Fish→amphibian→reptile→man`,
      `Insect→fish→bird→man`,
      `Fish→amphibian→bird→man.`,
      `Reptile→Fish→bird→man`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fish→amphibian→reptile→man`
  },
  {
    question: `What factors could lea d to the rise of new species? [Chandigarh 2017]`,
    options: [
      `Natural Selection`,
      `Genetic drift`,
      `Acquisition of traits during life time`,
      `All of above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Acquisition of traits during life time`
  },
  {
    question: `In a plant, red fruit (R) is dominant over yellow fruit (r) and tallness (T) is dominant over dwarf (t). if a plant with RRTt is crossed with a plant with rrtt, then [WB 2017]`,
    options: [
      `75% will be tall with red fruit`,
      `100% will be tall with red fruit`,
      `25% will be tall with red furit`,
      `50% will be tall with red furit`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 75% will be tall with red fruit`
  },
  {
    question: `The arm of humans, leg of horse, leg of a lizard and wing of birds are linked to each other because: [Chandigarh 2018] Competitive Corner 209 Heredity and Evolution`,
    options: [
      `Structures having similar development but dif ferent functions.`,
      `Structures having similar function but dif ferent development`,
      `Structures having similar development and similar functions`,
      `St ructures having different development and different functions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Structures having similar development and similar functions`
  },
  {
    question: `Which of the following conclusion is related to Lamarck. [U.P 2018]`,
    options: [
      `Survival of the fittest`,
      `Inheritance of acquired character`,
      `Struggle for existence`,
      `Origin of species by natural selection`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Struggle for existence`
  },
  {
    question: `T wo similar pea plants are growing in two different islands separated by a vast ocean. The phenomenon of geographical isolation will: [Delhi 2019]`,
    options: [
      `not be seen as the plants get self pollinated.`,
      `be seen as the plants are growing in isolated regions.`,
      `not be seen as the plants get pollinated by ocean water currents.`,
      `be seen as the plants do not get pollinated and reproduces asexually.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) be seen as the plants do not get pollinated and reproduces asexually.`
  },
  {
    question: `In the experiment conducted by Mendel, RRyy (round, green) and rrYY (wrinkled, yellow) seeds of pea plant were used. In the F₂ generation 240 progeny were produced, out of which 15 progeny had specific characteristics. What were the characteristics? [2017]`,
    options: [
      `Round and green`,
      `Round and yellow`,
      `W rinkle and yellow`,
      `W rinkle and green`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) W rinkle and green`
  },
  {
    question: `Old world monkeys 2. New world monkeys Arrange the evolutionary processes that would lead to the formation of the new species.`,
    options: [
      `Migration → Adaptation → Natural Selection`,
      `Genetic drift→ Natural Selection → Adaptation`,
      `Natural Selection → Adaptation → Genetic drift`,
      `Adaptation → Genetic drift → Natural Selection`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Natural Selection → Adaptation → Genetic drift`
  },
  {
    question: `According to Darwin's theory , the more closely related two different organisms are: [2010]`,
    options: [
      `the more similar their habitats.`,
      `the less similar their DNA sequence.`,
      `the more recently they shared a common ancestor.`,
      `the more similar they are in size. 211 Heredity and Evolution School Level Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) the more similar they are in size. 211 Heredity and Evolution School Level Quick Recall Fill in the Blanks`
  },
  {
    question: `Pea has several useful characters:`,
    options: [
      `It has easily observable set of distinct characters`,
      `It is bisexual hence self-fertilisation could also be enabled and controlled`,
      `It was a plant, hence breeding and maintaining them was easy`,
      `It produced good number of seeds which allowed Mendel to statistically verify his findings.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) It has easily observable set of distinct characters`
  },
  {
    question: `Which of the following gr oups contain only biodegradable item?`,
    options: [
      `Grass, flowers and leather`,
      `Grass, wood and plastic`,
      `Fruit peels, cake and lime juice`,
      `Cake, wood and grass`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fruit peels, cake and lime juice`
  },
  {
    question: `Which of the following ar e environment friendly practices ?`,
    options: [
      `Carrying cloth-bags to put purchases in while shopping`,
      `Switching of f unnecessary lights and fans`,
      `W alking to school instead of getting your mother to drop on her scooter`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Match the column-I and column-II and select the correct option. Column-I Column-II (P) Third trophic level (i) Producers (Q) Accumulation of pesticides at higher trophic level (ii) Carnivores (R) Green plants (iii) Herbivores (S) Second trophic level (iv) Biomagnification`,
    options: [
      `P-(i) Q-(ii) R-(iii) S-( iv)`,
      `P-(ii) Q-(iv) R-(i) S-(iii)`,
      `P-(i) Q-(ii) R-(iv) S-(iii)`,
      `P-(i) Q-(iv) R-(ii) S-(iii) Quick Recall 232 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(i) Q-(ii) R-(iii) S-( iv)`
  },
  {
    question: `Level represented by carnivores is ________.`,
    options: [
      `producers`,
      `secondary and tertiary consumers`,
      `phytoplanktons`,
      `zooplankton`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) phytoplanktons`
  },
  {
    question: `In every food chain green plants are:`,
    options: [
      `saprophytes`,
      `producers`,
      `consumers`,
      `none of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) saprophytes`
  },
  {
    question: `Biodegradable substances are those substances that:`,
    options: [
      `can be broken down by the action of bacteria or other decomposers.`,
      `cannot be acted upon by physical processes like heat and pressure.`,
      `persist in the environment for a long time.`,
      `may harm the various members of the ecosystem.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) may harm the various members of the ecosystem.`
  },
  {
    question: `Food webs are prominent in an ecosystem because`,
    options: [
      `A consumer is not dependent on a single type of food from the same food chain.`,
      `Int erlinking of food chains leading to formation of food webs.`,
      `Both ( a) and (b)`,
      `All of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A consumer is not dependent on a single type of food from the same food chain.`
  },
  {
    question: `Suggest the correct sequence of various autotrophic levels likely in the food chain that involves plants, birds, lions, snakes and ants.`,
    options: [
      `Plants, ants, snakes, lions and birds`,
      `Plants, ants, birds, snakes and lions`,
      `Ants, birds, lions, snakes and plants`,
      `Plants, snakes, ants, birds, lions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Plants, snakes, ants, birds, lions`
  },
  {
    question: `In an ecosystem, which of the following occurs as abiotic compounds?`,
    options: [
      `Microorganisms`,
      `Cycling of materials`,
      `Consumers`,
      `Both ( a) and (b)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Microorganisms`
  },
  {
    question: `Which of the following is incorrect regarding food chain?`,
    options: [
      `Food chain is a single straight pathway through food energy travels in an ecosystem.`,
      `Food chains reveal how each or ganism depends on someone else for survival.`,
      `Si nce so little energy is available for the next level of consumers, food chains generally consist of only three or four steps.`,
      `The flow of ener gy in a food chain is unidirectional.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Si nce so little energy is available for the next level of consumers, food chains generally consist of only three or four steps.`
  },
  {
    question: `As ener gy is transferred from one trophic level to another, the amount of usable energy:`,
    options: [
      `is increased`,
      `is decreased`,
      `remains the same`,
      `ener gy is never transferred`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) remains the same`
  },
  {
    question: `The good ozone is present in which layer of the atmosphere?`,
    options: [
      `Troposphere`,
      `Mesosphere`,
      `Stratosphere`,
      `Thermosphere`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Stratosphere`
  },
  {
    question: `The enhanced UV - radiations would affect humans and other animals. It can cause:`,
    options: [
      `skin cancer in human beings.`,
      `cataract in eyes of human beings.`,
      `crop yield reduction.`,
      `all of the above. 236 Class-X BIOLOGY PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) skin cancer in human beings.`
  },
  {
    question: `Read the given statements regarding the ozone layer . I. The amount of ozone in the atmosphere began to drop sharply in the 1960s. II. Ozone is formed in the atmosphere as a result of photochemical reaction. III. Harmful chemicals produce active chlorine in presence of UV radiations that destroys ozone layers. IV . Ozone absorbs harmful UV radiations and X-rays emitted by sun. Select the option that correctly identifies them as true (T) and false. (F). I II III IV`,
    options: [
      `False False T rue False`,
      `False T rue T rue False`,
      `True T rue False False`,
      `True False T rue T rue`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) True False T rue T rue`
  },
  {
    question: `Which of the following compound causes depletion of ozone layer?`,
    options: [
      `Chlorofluorocarbons`,
      `Methane`,
      `Nitrous oxide`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Nitrous oxide`
  },
  {
    question: `Refer to the given flow chart. G rass → Rabbit → Wolf → Lion 100 units 10 units 1 unit 0.5 unit The given flow chart states that:`,
    options: [
      `As we move from one trophic level to another , the number of individuals decreases.`,
      `The flow of ener gy in an ecosystem is unidirectional.`,
      `Only 10% of the total energy is available to next trophic level.`,
      `Both ( b) and (c)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) As we move from one trophic level to another , the number of individuals decreases.`
  },
  {
    question: `The flow of ener gy is unidirectional. Which of the following best explains this phenomenon?`,
    options: [
      `First law of thermodynamics`,
      `Second law of thermodynamics`,
      `Third law of thermodynamics`,
      `Both ( a) and (b) 238 Class-X BIOLOGY PW T ypes of Food Chain There are two different types of food chains: grazing food chain and detritus food chain.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Third law of thermodynamics`
  },
  {
    question: `The diagram shows a woodland food web: rabbit snail frogfox hawk dandeliongrass Which statement is correct? (IGCSE 2018)`,
    options: [
      `Dandelions and grass are both primary consumers.`,
      `The fox and the hawk both secondary consumers.`,
      `The frog is a tertiary consumer .`,
      `The rabbit and the snail are both primary consumers .`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Dandelions and grass are both primary consumers.`
  },
  {
    question: `Accumulation of non-biodegradable pesticides in the food chain in increasing amount at each higher trophic level is known as:`,
    options: [
      `eutrophication`,
      `pollution`,
      `biomagnification`,
      `accumulation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) biomagnification`
  },
  {
    question: `Which of the statement is incorrect?`,
    options: [
      `All green plants and blue green algae are producers`,
      `Green pl ants get their food from organic compounds`,
      `Producers prepare their own food from inor ganic compounds`,
      `Plants convert solar ener gy into chemical energy`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Plants convert solar ener gy into chemical energy`
  },
  {
    question: `Disposable plastic plates should not be used because:`,
    options: [
      `they are made of materials with light weight.`,
      `they are made of toxic materials.`,
      `they are made of biodegradable materials.`,
      `they are made of non-biodegradable materials. 241 Our Environment`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) they are made of materials with light weight.`
  },
  {
    question: `On the basis of following features identify correct option from the following. I . The concentration of greenhouse gases grows, more heat is trapped in the atmosphere and less escapes back into space. II. It changes the clima te and alters weather patterns, which may hasten species extinction, influence the length of seasons, cause coastal flooding, etc.`,
    options: [
      `Acid rain`,
      `Drought`,
      `Global warming`,
      `Flood`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acid rain`
  },
  {
    question: `In the given figure the various trophic levels are represented in a pyramid. At which trophic level the energy available is maximum? T4 T3 T2 T1`,
    options: [
      `T4`,
      `T2`,
      `T1`,
      `T3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T3`
  },
  {
    question: `Our food contains varying amounts of pesticide residues. This is so because of:`,
    options: [
      `biological magnification.`,
      `t he chemical supplied during agricultural processes are retained by the fruits and seeds through soil and water.`,
      `chemical reactions taking place between spices and other waste materials.`,
      `only (a) and (b).`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) only (a) and (b).`
  },
  {
    question: `If a non-degradable and fat soluble pollutant, such as DDT enters the food chain, the pollutant: (NTSE 2013)`,
    options: [
      `Magnifies in concentration at each trophic level.`,
      `Degrades at first trophic level.`,
      `Accumulates in the body fat of organism at first trophic level and does not pass to second trophic level.`,
      `Decreases in concentration at each trophic level.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Accumulates in the body fat of organism at first trophic level and does not pass to second trophic level.`
  },
  {
    question: `The abundance of coliform bacteria in a water body is indicative of pollution from: (NTSE 2015)`,
    options: [
      `Petroleum refinery`,
      `Metal smelter`,
      `Fertilizer factory`,
      `Domestic sewage`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Domestic sewage`
  },
  {
    question: `A p rolonged exposure to the fumes released by incomplete combustion of coal may cause death of a human because of: (NTSE 2015)`,
    options: [
      `Inhalation of unburnt carbon particles.`,
      `Continuous exposure to high temperature`,
      `Increased level of carbon monoxide.`,
      `Increased level of carbon dioxide.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Inhalation of unburnt carbon particles.`
  },
  {
    question: `Which of the following is an result of biological magnification? (NTSE 2016)`,
    options: [
      `T op level predators may be harmed by toxic chemical in environment.`,
      `Increase in carbon dioxide.`,
      `The green-house ef fect will be most significance at the poles.`,
      `E nergy is lost at each trophic level of a food chain.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) T op level predators may be harmed by toxic chemical in environment.`
  },
  {
    question: `What is the main reason for increase in temperature in a glass house? (NTSE 2016)`,
    options: [
      `Sunlight is completely absorbed by plants in the glass house.`,
      `Radiation fails to escape from the glass house completely.`,
      `Plant do not utilize sunlight in a glass house.`,
      `Plants produce heat inside the glass house.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Plants produce heat inside the glass house.`
  },
  {
    question: `According to Charles Eltion, which is not correct? (A.P 2017)`,
    options: [
      `Carnivores at the top of the pyramid`,
      `Ener gy trapping is high at the top of the pyramid`,
      `Producers at the top of the pyramid`,
      `(b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (b) and (c)`
  },
  {
    question: `In a given food chain if frog has 100 J of energy then the energy available with plants and snake respectively will be: (Haryana 2017) Plants → Insect → Frog → Snake`,
    options: [
      `1000 J and 10 J`,
      `10000 J and 10 J`,
      `10 J and 1000 J`,
      `1000 J and 100 J`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1000 J and 10 J`
  },
  {
    question: `Which of the following constitutes a good food chain? (Haryana 2017)`,
    options: [
      `Grass, Wheat, Mango`,
      `Grass, Goat, Lion`,
      `Goat, Cow , Elephant`,
      `Grass, Fish, Goat`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Grass, Fish, Goat`
  },
  {
    question: `The diagram shows an aquatic food web. (IGCSE 2019) seagull phytoplankton zooplankton krill crab squidfish blue whale killer whale seaweed seal Which statement is correct?`,
    options: [
      `There are two producers and three herbivores.`,
      `There are two primary consumers and two secondary consumers.`,
      `There are three producers and two primary consumers.`,
      `There are two herbivores and two tertiary consumers.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) There are two herbivores and two tertiary consumers.`
  },
  {
    question: `In which order do or ganisms occur in the food chain? (IGCSE 2020)`,
    options: [
      `carnivore → herbivore → producer`,
      `herbivore → carnivore → producer`,
      `producer → carnivore → herbivore`,
      `producer → herbivore → carnivore`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) producer → herbivore → carnivore`
  },
  {
    question: `Biomagnification is the process by which some toxic chemicals build up across an entire food chain and affects all of the animals higher up in the chain. Biomagnification usually happens for chemicals that (2019)`,
    options: [
      `Are not readily degraded and they dissolve in fat.`,
      `Are not readily degraded and they dissolve in water.`,
      `Are readily degraded and do not dissolve in water.`,
      `Are readily degraded and do not dissolve in fat.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Are not readily degraded and they dissolve in fat.`
  },
  {
    question: `Carefully observe the diagram(s) given below . Melting of ice caps Rise in sea level Submer gence of low-lying areas Cause of following ef fects is:`,
    options: [
      `Global warming`,
      `Ozone depletion`,
      `Acid rain`,
      `None`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Global warming`
  },
  {
    question: `Illustration of a pyramid of number of an aquatic ecosystem is given. (2020) Sea Lion Herring Zootoplankton Phytoplankton The pyramid of energy for the same ecosystem would be :`,
    options: [
      `Sea Lion Herring Zootoplankton Phytoplankton`,
      `Sea Lion Herring Zootoplankton Phytoplankton`,
      `Sea Lion Herring Zootoplankton Phytoplankton`,
      `Sea Lion Herring Zootoplankton Phytoplankton`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sea Lion Herring Zootoplankton Phytoplankton`
  },
  {
    question: `On an average a climax ecosystem has more organic matter in the form of: (2018)`,
    options: [
      `primary producers.`,
      `consumers.`,
      `decomposers.`,
      `dead org anic biomass of all the above.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) primary producers.`
  },
  {
    question: `A food chain in a terrestrial ecosystem is shown. (2019) Sun→ Grass →Rabbit → Snake The food chain is incomplete due to:`,
    options: [
      `Absence of tertiary consumer`,
      `Absence of decomposers`,
      `Absence of quaternary consumer`,
      `Absence of parasitic component`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Absence of decomposers`
  },
  {
    question: `Eutrophication is considered bad for a water body because it leads to: (2019)`,
    options: [
      `increase in demand for carbon dioxide`,
      `increase in demand for oxygen`,
      `increase in demand for nitrogen`,
      `change in pH of the water body`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) change in pH of the water body`
  },
  {
    question: `Match the following columns: Column-I Column-II (P) Industrial development (i) Amrita Devi Bishnoi (Q) Protection of khejri trees (ii) Incomplete combustion (R) Glass or metal (iii) Deforestation (S) Carbon monoxide (iv) Recycle`,
    options: [
      `P-(i), Q-(iii), R-(ii), S-(iv)`,
      `P-(iii), Q-(i), R-(ii), S-(iv)`,
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iii), Q-(i), R-(iv), S-(ii)`
  },
  {
    question: `Match the columns: Column-I Column-II (P) Ozone hole discovery (i) 1970 (Q) Algal bloom (ii) Dark organic matter (R) Humus (iii) 1985 (S) Chipko Andolan (iv) Eutrophication`,
    options: [
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(iv), R-(ii), S-(i)`,
      `P-(iii), Q-(ii), R-(iv), S-(i)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(iii), Q-(ii), R-(iv), S-(i)`
  },
  {
    question: `A successful forest conservation strategy should involve [NCER T Examplar]`,
    options: [
      `protection of animals at the highest trophic level`,
      `protection of only consumers`,
      `protection of only herbivores`,
      `c omprehensive programme to protect all the physical and biological components`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) protection of only herbivores`
  },
  {
    question: `The major ill ef fect of mono culture practice in forests is on the [2020]`,
    options: [
      `biodiversity which faces lar ge destruction`,
      `local people whose basic needs can nor longer be met from such forests`,
      `industries`,
      `forest department`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) biodiversity which faces lar ge destruction`
  },
  {
    question: `The Reni village of Garhwal is famous for [2020]`,
    options: [
      `Monocultures of pine, teak and eucalyptus.`,
      `Chipko Movement.`,
      `Extensive biodiversity .`,
      `Pa rticipation of local people in efficient management of forests.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Pa rticipation of local people in efficient management of forests.`
  },
  {
    question: `The important message conveyed by the “Chipko Movement” is that the Government should [2020]`,
    options: [
      `cut down forest tress for developmental activities.`,
      `have the unquestionale right to order destruction of trees in forests.`,
      `ignore the local community in forest conservation efforts.`,
      `involve the local community in fores t conservation efforts.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) ignore the local community in forest conservation efforts.`
  },
  {
    question: `Which one of the following is responsible for the sustenance of underground water? [2019]`,
    options: [
      `Loss of vegetation cover`,
      `Diversion for high water demanding crops`,
      `Pollution from urban wastes`,
      `Afforestation 271 Sustainable Management of Natural Resources`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Afforestation 271 Sustainable Management of Natural Resources`
  },
  {
    question: `A diagram of traditional water harvesting system is given below: [2020] The statement which defines the system and its parts is A B C`,
    options: [
      `This is an ideal setting of the Khadin system and A = Catchment area; B = Saline area & C = Shallow dugwell`,
      `This is an ideal setting of the Shallow dugwell system and A = Catchment area; B = Saline area and C = Khadin`,
      `T his is an ideal setting of Catchement area and A = Khadin, B = Saline area and C = Shallow dugwell`,
      `T his is showing Saline area and A = Catchment area; B = Khadin and C = Shallow dugwell`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) This is an ideal setting of the Khadin system and A = Catchment area; B = Saline area & C = Shallow dugwell`
  },
  {
    question: `Sustainable development means sustainable management of [2020]`,
    options: [
      `industrial units`,
      `dams and bridges`,
      `resources`,
      `power plants and research laboratories`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) industrial units`
  },
  {
    question: `In which state X-type of water harvesting system was built?`,
    options: [
      `Karnataka`,
      `Kerala`,
      `Rajasthan`,
      `Madhya Pradesh`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Karnataka`
  },
  {
    question: `Like ‘X’ system, identify the traditional water harvesting system of Maharashtra.`,
    options: [
      `Khadin and nadis respectively`,
      `Bandharas and tals respectively`,
      `Eris and kattas respectively`,
      `T als and khadin respectively`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T als and khadin respectively`
  },
  {
    question: `On the basis of abundance and availability of the natural resources A and B can be classified into A B`,
    options: [
      `Inexhaustible Exhaustible`,
      `Exhaustible Non-renewable`,
      `Renewable Inexhaustible`,
      `Renewable Non-renewable`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Renewable Inexhaustible`
  },
  {
    question: `In addition to carbon what would be the composition of X and Y?`,
    options: [
      `Phosphorus, hydrogen and potassium`,
      `Hydrogen, nitrogen and sulphur`,
      `Nitrogen, potassium and phosphorus`,
      `Sulphur , helium and hydrogen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Nitrogen, potassium and phosphorus`
  },
  {
    question: `Identify the community P of Rajasthan.`,
    options: [
      `Bamendeh`,
      `Bishnoi`,
      `Singchung Bugun`,
      `Lemasachenlok`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Singchung Bugun`
  },
  {
    question: `X can be found in which district of Rajasthan?`,
    options: [
      `Jaipur`,
      `Udaipur`,
      `Jodhpur`,
      `Bharatpur`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Jaipur`
  },
  {
    question: `Z was revived by the West Bengal Forest department with the help of villagers. Identify Z with its location.`,
    options: [
      `Sal forests of Arabari`,
      `T ropical forests of Bankura`,
      `Sub -tropical broad-leafed wet forest of Darjeeling`,
      `T ropical dry deciduous forest of Noida`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sub -tropical broad-leafed wet forest of Darjeeling`
  },
  {
    question: `It is important to make small check dams across the flooded gullies because they A. Hold water for irrigation purpose B. Prevent soil erosion and also hold water . C. Rechar ge ground water D. Hold water permanently ( a)`,
    options: [
      `and (D) ( b) Only`,
      `( c)`,
      `and`,
      `( d) (B) and (D)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) ( d) (B) and (D)`
  },
  {
    question: `Lar ge areas of tropical forests have been cleared to grow monocultures of palm oil plants. Which ef fect will this have on the ecosystem?`,
    options: [
      `The use of fossil fuels in the area will decrease.`,
      `The use of pesticides in the area will decrease.`,
      `The variety of species in the area will decrease.`,
      `The variety of species in the area will increase.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The use of fossil fuels in the area will decrease.`
  },
  {
    question: `Examine the two graphs (Figures 3 and 4) which were provided by the Department of Environmental Affairs in South Africa. The graphs show the average temperature increase during the period 1975 to 2010, and related species decline in South Africa. It can be deduced that, during the period 1995 to 2005:`,
    options: [
      `an average temperature increase of 10 °C resulted in extinction of 2000 species.`,
      `an average temperature increase of 2 °C resulted in extinction of 3000 species.`,
      `an average temperature increase of 5 °C resulted in extinction of 2000 species.`,
      `an average temperature increase of 2 °C resulted in extinction of 1000 species.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) an average temperature increase of 2 °C resulted in extinction of 1000 species.`
  },
  {
    question: `Endemic species refers to`,
    options: [
      `threatened wild animals and plants which belong to different areas.`,
      `species which are capable of inter breeding.`,
      `those species of flora and fauna which are found exclusively in a particular area.`,
      `a ll the plants and animals mentioned in the red data book. 283 Sustainable Management of Natural Resources School Level Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) those species of flora and fauna which are found exclusively in a particular area.`
  }
];
