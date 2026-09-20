// NEET: Human Health and Disease
// 573 MCQs

const QUESTIONS = [
  {
    question: `Cannabis sativa is the source of`,
    options: [
      `Opium`,
      `LSD`,
      `Marijuana`,
      `cocaine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Marijuana`
  },
  {
    question: `Which of the following is a pair of bacterial diseases?`,
    options: [
      `Typhoid and Pneumonia`,
      `Malaria and AIDS`,
      `Ringworm and AIDS`,
      `Cold and Malaria`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid and Pneumonia`
  },
  {
    question: `Which of the following is a protozoan disease?`,
    options: [
      `Malaria`,
      `Amoebiasis`,
      `Sleeping sickness`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Antibody is connected with`,
    options: [
      `Skeletal system`,
      `Circulatory system`,
      `Immune system`,
      `Respiratory system`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Immune system`
  },
  {
    question: `Which of the following vaccines are injected to babies at age of 1 1 2 , 2 1 2 and 3 1 2 months?`,
    options: [
      `DPT-Hib and polio`,
      `Polio and BCG`,
      `BCG and DPT-Hib`,
      `BCG and hepatitis-B`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) DPT-Hib and polio`
  },
  {
    question: `Interferons protect healthy cells in human from`,
    options: [
      `Viral infection`,
      `Bacterial infection`,
      `Fungal infection`,
      `Protozoan infection`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Viral infection`
  },
  {
    question: `During an allergic reaction, the binding of antigens to IgE antibodies initiates a response, in which chemicals cause the dilation of blood vessels and a host of other physiological changes. Such chemicals are`,
    options: [
      `Interferons`,
      `Hormones`,
      `Histamines`,
      `acetylamine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Histamines`
  },
  {
    question: `Colostrum provides the infant with`,
    options: [
      `Autoimmunity`,
      `Passive immunity`,
      `Active immunity`,
      `Innate immunity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Passive immunity`
  },
  {
    question: `Which class of antibodies is abundant in body secretion`,
    options: [
      `IgM`,
      `IgA`,
      `IgG`,
      `IgE`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) IgA`
  },
  {
    question: `ELISA is used to detect viruses, where the key reagent is`,
    options: [
      `DNA probe`,
      `RNA Aase`,
      `Alkaline phosphatase`,
      `Catalase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Alkaline phosphatase`
  },
  {
    question: `Which of the following health disorder includes symptoms of fever, chills, cough, headache, gray or bluish lips and finger’s nails?`,
    options: [
      `Filariasis`,
      `Typhoid`,
      `Pneumonia`,
      `Malaria`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Pneumonia`
  },
  {
    question: `What is the main lymphoid organ where all blood cells including lymphocytes are produced?`,
    options: [
      `Bone marrow`,
      `Tonsils`,
      `Liver`,
      `Spleen`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bone marrow`
  },
  {
    question: `The tendency of the body to manifest a characteristic and unpleasant withdrawal syndrome on abrupt discontinuation of regular dose of drugs/alcohol is called`,
    options: [
      `Depression`,
      `Dependence`,
      `Abnormalty`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Dependence`
  },
  {
    question: `Regarding common cold consider the following statements I. Rhinovirus is responsible for common cold which infects the nasal epithelium and respiratory passage but not the lungs II. The symptoms of common cold included nasal congestion and discharge, sore throat, gruffiness, cough, headache and tiredness Which of the statement given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Mast cells have important role in the development of`,
    options: [
      `Allergens`,
      `Allergy`,
      `Inflammation`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c)`
  },
  {
    question: `Which of the following is related to humoral immunity?`,
    options: [
      `T-lymphocyte`,
      `B- lymphocyte`,
      `I- lymphocyte`,
      `P- lymphocyte`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) B- lymphocyte`
  },
  {
    question: `Note the following words. P a g e | 2 I. Skin II. Phagocytes III.B-cells IV. Inflammation V. Antibodies VI. T-cells VII. Fever VIII. Antimicrobial proteins IX. NK-cells X. Secretions Identify the factors involved in second line of defence.`,
    options: [
      `II, IV, VII and IX`,
      `II, III, V and IX`,
      `IV, VI, VIII and X`,
      `III, V, VII and VIII`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) II, IV, VII and IX`
  },
  {
    question: `BCG vaccine is used against`,
    options: [
      `TB`,
      `Leprosy`,
      `Food poisoning`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) TB`
  },
  {
    question: `Allergens are`,
    options: [
      `Infectious and increased secretion of IgE`,
      `Non-infectious and increased secretion of IgE`,
      `Infectious and increased secretion of IgG`,
      `Non-infectious and increased secretion of IgM`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Non-infectious and increased secretion of IgE`
  },
  {
    question: `Smoking results in …A… build up in the blood and reduce …B… delivery to the tissue. Here A and B refers to`,
    options: [
      `A-carbon dioxide; B-carbon monoxide`,
      `A-carbon dioxide; B-oxygen`,
      `A-carbon monoxide; B-oxygen`,
      `A-oxygen; B-carbon monoxide`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A-carbon monoxide; B-oxygen`
  },
  {
    question: `What is true about T-lymphocytes is mammals?`,
    options: [
      `They scavenge damaged cells and cellular debris`,
      `These are produced in thyroid`,
      `There are three main types-cyctotoxic T-cells, helper T-cells and suppressor T-cells`,
      `These originate in lymphoid tissues`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) There are three main types-cyctotoxic T-cells, helper T-cells and suppressor T-cells`
  },
  {
    question: `The thymus is a lobed organ located near the …A… and beneath the …B… . The most appropriate combination for A and B is`,
    options: [
      `A-heart; B-breast bone`,
      `A-liver; B-ribs`,
      `A-heart; B-ribs`,
      `A-intestine; B-ribs`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-heart; B-breast bone`
  },
  {
    question: `Bacterium, which is concerned with pertussis is`,
    options: [
      `Bordetella pertussis`,
      `Bacillus`,
      `Diplococcus`,
      `Mycobacterium tuberculum`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bordetella pertussis`
  },
  {
    question: `𝐸𝑛𝑡𝑎𝑚𝑜𝑒𝑏𝑎 ℎ𝑖𝑠𝑡𝑜𝑙𝑦𝑡𝑖𝑐𝑎 is causes`,
    options: [
      `Malaria`,
      `Amoebiasis`,
      `Typhoid`,
      `Filariasis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Amoebiasis`
  },
  {
    question: `Consider the following statements I. Neural system and endocrine system influences our immune system II. Immune system maintains our health Which of the statement (s) given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Electrocardiograph was developed by`,
    options: [
      `Hans Berger`,
      `Willem Kolff`,
      `Willen Einthoven`,
      `Wilhelm Roentgen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Willen Einthoven`
  },
  {
    question: `Which of the given sets include lymphatic organs?`,
    options: [
      `Thymus, lymph nodes and spleen`,
      `Liver, spleen and thymus`,
      `Tonsils, Peyer’s patches and liver`,
      `Thymus, liver and tonsils`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thymus, lymph nodes and spleen`
  },
  {
    question: `Secondary metabolite is`,
    options: [
      `Sugar`,
      `Glucose`,
      `Antibiotics`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Antibiotics`
  },
  {
    question: `Identify the molecules 𝐴 and 𝐵 given below and select the right option giving their use and source P a g e | 3 Molecule Use Source`,
    options: [
      `A- Morphin e Sedati- ve and pain - killer Latex of poppy plant`,
      `B- Cannabin oid Produc -t mariju -ana Atropa belladon -a`,
      `C-Heroin Produc -es halluci - nation s Cannabis sativa`,
      `D- Cocaine Accele- rates the transp -ort of dopam -ine Erythrox -ylum coca`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A- Morphin e Sedati- ve and pain - killer Latex of poppy plant`
  },
  {
    question: `What is injected into the patient’s body the determining the cause of allergy?`,
    options: [
      `Pure allergen to which the patient is allergic`,
      `IgG`,
      `IgE`,
      `Steroids`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pure allergen to which the patient is allergic`
  },
  {
    question: `‘Tunnel vision’ is associated with.`,
    options: [
      `Alcoholism`,
      `Smoking`,
      `Drug addiction`,
      `epilepsy`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Alcoholism`
  },
  {
    question: `Which of the following is not a part of secondary lymphatic system?`,
    options: [
      `Spleen`,
      `Lymph nodes`,
      `Tonsils`,
      `Thymus`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thymus`
  },
  {
    question: `Which of the following toxic substances is responsible for the high malarial fever?`,
    options: [
      `Haemoglobin`,
      `Haemocyanin`,
      `Haemozoin`,
      `Haemoriden`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Haemozoin`
  },
  {
    question: `Bambykol or gyplure is a`,
    options: [
      `Drug`,
      `Harmone`,
      `Antibiotic`,
      `pheromone`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) pheromone`
  },
  {
    question: `A chemical substance produce produced by a microorganism for inhibiting the growth of another is`,
    options: [
      `Antibody`,
      `Antibiotic`,
      `Aflatoxin`,
      `Antiallergic P a g e | 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibiotic`
  },
  {
    question: `Carcinoma refers to`,
    options: [
      `Malignant tumour of the colon`,
      `Benign tumour of the connective tissue`,
      `Malignant tumour of the connective tissue`,
      `Malignant tumour of the skin or mucous membrane`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Malignant tumour of the skin or mucous membrane`
  },
  {
    question: `Who among the following is recognized as the father of immunology?`,
    options: [
      `Robert Koch`,
      `Ferdinand Kohn`,
      `Edward Jenner`,
      `Louis Pasteur`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Edward Jenner`
  },
  {
    question: `Heroin is a`,
    options: [
      `Diacetyl morphine`,
      `Morphine`,
      `Hemp`,
      `Stimulant`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Diacetyl morphine`
  },
  {
    question: `Monoclonal antibodies are used for`,
    options: [
      `Immune suppression for kidney transplantation`,
      `Growth induction`,
      `Suppression of symptoms of rabies`,
      `Treatment of breast cancer`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Immune suppression for kidney transplantation`
  },
  {
    question: `Non-specific host defence that exists prior to the exposure to an antigen is called`,
    options: [
      `Acquired immunity`,
      `Passive immunity`,
      `Innate immunity`,
      `Active immunity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Innate immunity`
  },
  {
    question: `Cancer of the internal organs is detected by`,
    options: [
      `Radiography`,
      `Computed tomography`,
      `Magnetic resonance imaging`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Full form PMNL is`,
    options: [
      `Poly Morpho-nuclear Leukocytes`,
      `Para Morpho-nuclear Lymphocytes`,
      `Penta Morpho-nuclear Leukocytes`,
      `Poly Morpho-nuclear Lymphocytes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Poly Morpho-nuclear Leukocytes`
  },
  {
    question: `A doctor advises a patient to include yellow fruits, carrots and butter in his diet. What deficiency disease do you think the patient is suffering from?`,
    options: [
      `Night blindness`,
      `Colour blindness`,
      `Kwashiorkor diseases`,
      `Marasmus disease`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Night blindness`
  },
  {
    question: `Which one of the following is correctly matched?`,
    options: [
      `Body louse - Typhoid`,
      `House fly - Yellow fever`,
      `Anopheles - Malaria`,
      `Aedes - Plague`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Anopheles - Malaria`
  },
  {
    question: `To which type of barriers under innate immunity? Saliva in the mouth and the tears from the eyes belongs?`,
    options: [
      `Cytokine barriers`,
      `Cellular barriers`,
      `Physiological barriers`,
      `physical barriers`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Physiological barriers`
  },
  {
    question: `After drinking alcohol, a person walks clumsily because, the alcohol affects his`,
    options: [
      `Cerebellum`,
      `Cerebrum`,
      `Medulla oblongata`,
      `Spinal cord`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cerebellum`
  },
  {
    question: `An uncontrolled division or proliferation of cells without any differentiation is called`,
    options: [
      `Cancer`,
      `AIDS`,
      `Filariasis`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cancer`
  },
  {
    question: `AIDS virus is also known as`,
    options: [
      `HIV`,
      `HTL V-III`,
      `LAV`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which one of the followin pairs is not correctly matched?`,
    options: [
      `Streptomyces - Antibiotic`,
      `Serratia - Drug Addiction`,
      `Spirulina - Single cell protein`,
      `Rhizobium - Biofertilizer`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Rhizobium - Biofertilizer`
  },
  {
    question: `Cocaine is obtained from`,
    options: [
      `Erythroxylum coca`,
      `Cannabis sativa`,
      `Datura`,
      `Opium plant`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Erythroxylum coca`
  },
  {
    question: `How many variable segments are present in the basic structure of antibody molecules? P a g e | 5`,
    options: [
      `One`,
      `Two`,
      `Three`,
      `Four`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Four`
  },
  {
    question: `The incubation period for hepatitis-B virus is`,
    options: [
      `15-20 days`,
      `30-180 days`,
      `42-56 days`,
      `One weak`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30-180 days`
  },
  {
    question: `Main barrier which prevents the entry of disease’s causing organism in our body is`,
    options: [
      `Skin`,
      `Saliva`,
      `Lymphocytes`,
      `Interferons`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Skin`
  },
  {
    question: `The primary host of Plasmodium is`,
    options: [
      `Man`,
      `Male Culex`,
      `sheep`,
      `Female Anopheles`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Female Anopheles`
  },
  {
    question: `An example of gene therapy is`,
    options: [
      `Production of injectable hepatitis-B vaccine`,
      `Production of vaccines in food crops like potatoes which can be eaten`,
      `Introduction of gene for adenosine deaminase in persons suffering from Severe Combined Immuno Deficiency(SCID)`,
      `Production of test tube babies by artificial insemination and implantation of fertilized eggs`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Introduction of gene for adenosine deaminase in persons suffering from Severe Combined Immuno Deficiency(SCID)`
  },
  {
    question: `Two of the body parts, which do not appear in MRI may be`,
    options: [
      `Molar teeth and eye lens`,
      `Scapula and canines`,
      `Ligaments and ribs`,
      `Tendons and premolars`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Scapula and canines`
  },
  {
    question: `Regarding pathogens consider the following statements I. A pathogen or an infectious agent is a microorganism, such as a virus, bacterium, fungus that causes disease in its host II. These pathogens multiply in our body and interfere with the normal vital activities, resulting in morphological and functional damage Which of the following statement (s) is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Which one the following statements is false?`,
    options: [
      `Psychoactive drugs have the ability to alter the activity of the nervous system`,
      `Adolescence is marked by accelerated physical growth, development of reproductive organs and changes in functioning of the neuroendocrine system`,
      `Hallucinogen can alter a person’s thoughts, feeling and perceptions`,
      `Mescaline is a stimulant`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mescaline is a stimulant`
  },
  {
    question: `Active immunity development is related to`,
    options: [
      `Natural killer cells`,
      `Memory cells`,
      `Helper T-cells`,
      `Suppressor T-cells`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Memory cells`
  },
  {
    question: `Housefly is a vector of`,
    options: [
      `Amoebiasis`,
      `Swine flu`,
      `Filariasis`,
      `Dengue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amoebiasis`
  },
  {
    question: `Which of the following are considered as cellular barrier of the body?`,
    options: [
      `Lymphocytes`,
      `Neutrophils`,
      `Macrophages`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Nobel Prize for medicine was given for confirming the role of Helicobacter pylori in causing`,
    options: [
      `Nephritis`,
      `Rhinitis`,
      `Bronchitis`,
      `Peptic ulcer`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Peptic ulcer`
  },
  {
    question: `Inflammatory response in allergy is due to the release of …… from the mast cells`,
    options: [
      `Antigen`,
      `Antibody`,
      `Histamine`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Histamine`
  },
  {
    question: `Consider the following statements. Health is a combination of I. complete physical health II. mental health III. social health Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Yersinia pestis is responsible for`,
    options: [
      `Syphilis`,
      `Whooping cough`,
      `Plague`,
      `Leprosy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Plague`
  },
  {
    question: `Products from plants like 𝐷𝑎𝑡𝑢𝑟𝑎 sp. are`,
    options: [
      `Hallucinogen`,
      `Stimulants`,
      `Sedatives`,
      `Pain killers`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hallucinogen`
  },
  {
    question: `The ‘Christmas disease’ patient lacks antihaemophilic`,
    options: [
      `Homogentisic acid oxidase`,
      `Factor-VIII`,
      `Factor-XI`,
      `Factor-IX`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Factor-IX`
  },
  {
    question: `Acquired immunity is due to`,
    options: [
      `Physiological and inflammatory barriers`,
      `Lymphocytes`,
      `Erythrocytes`,
      `NK-cells`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Erythrocytes`
  },
  {
    question: `The human immune system consists of`,
    options: [
      `Lymphoid organs`,
      `Immune cells`,
      `Antibodies`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `AIDS day is`,
    options: [
      `1 May`,
      `1 December`,
      `1 June`,
      `1 January`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 December`
  },
  {
    question: `IgA, IgM, IgE and IgG are the example of`,
    options: [
      `Antigen`,
      `Antibody`,
      `Haemoglobin`,
      `Lymphocytes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibody`
  },
  {
    question: `A new born baby who receives IgA form its mother’s milk develops`,
    options: [
      `Naturally acquired active immunity`,
      `Artificially acquired active immunity`,
      `Naturally acquired passive immunity`,
      `Artificially acquired passive immunity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Naturally acquired passive immunity`
  },
  {
    question: `The virus that cases Acquired Immune Deficiency Syndrome (AIDS) parasitizes in`,
    options: [
      `B-cells`,
      `Cytotoxic cells`,
      `Helper T-cells`,
      `Lymph nodes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Helper T-cells`
  },
  {
    question: `Antigen binding site in an antibody is found between`,
    options: [
      `Two light chains`,
      `Two heavy chains`,
      `One heavy and one light chain`,
      `Either between two light chains or between one heavy and one light chain depending upon the nature of antigen`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) One heavy and one light chain`
  },
  {
    question: `The flower tops, leaves and the resin of 𝐶𝑎𝑛𝑛𝑎𝑏𝑖𝑠 𝑠𝑎𝑡𝑖𝑣𝑎 are used to produce`,
    options: [
      `Marijuana`,
      `Hashish`,
      `Charas`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Chagas disease is caused by`,
    options: [
      `Trypanosoma gambiense`,
      `Plasmodium sp.`,
      `Trypanosome cruzi`,
      `Treponema pallidum`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Plasmodium sp.`
  },
  {
    question: `Dipsomania is`,
    options: [
      `A type of depression`,
      `Insanity due to psychosis`,
      `Severe addiction to alcohol`,
      `Tendency to take much water`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Severe addiction to alcohol`
  },
  {
    question: `Cells obtained from cancerous tumours are known as`,
    options: [
      `Hybridomas`,
      `Myelomas`,
      `Lymphocytes`,
      `Monoclonal cells`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Monoclonal cells`
  },
  {
    question: `Consider the following statements I. Opioids are the drugs, which bind to opioid receptors in the central nervous system and gastrointestinal tract II. Heroin is a white, odourless, bitter, crystalline compound III. Heroin is commonly called smack Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Which of the following elements is important to maintain structure of immunoglobulin?`,
    options: [
      `P`,
      `Fe`,
      `S`,
      `Ca`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) S`
  },
  {
    question: `In the cell mediated immuno response, T-lymphocytes divide and secrete`,
    options: [
      `antigens`,
      `Plasmogens`,
      `Collagens`,
      `cytokines`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) antigens`
  },
  {
    question: `The smallest known agents of infectious diseases are`,
    options: [
      `Viruses`,
      `Mycoplasma`,
      `Viroids`,
      `Actinomycetes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Viroids`
  },
  {
    question: `The group of disease carried by insects is P a g e | 7`,
    options: [
      `Typhoid, jaundice, dysentery`,
      `Mumps, measles, smallpox`,
      `Scrabies, ringworm, scarlet fever`,
      `Malaria, filaria, yellow fever`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Malaria, filaria, yellow fever`
  },
  {
    question: `The study of body’s defence mechanism against pathogens and toxic molecules is known as`,
    options: [
      `Immunity`,
      `Immunology`,
      `Defence`,
      `Prevention`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Immunology`
  },
  {
    question: `Which one of the following is useful in identifying the different strains of a causal microbe of an infectious disease?`,
    options: [
      `Colchicines`,
      `Agrobacterium`,
      `Complementary DNA`,
      `Crystal violet`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Complementary DNA`
  },
  {
    question: `Which one of the following correctly matches a Sexually Transmitted Disease (STD) with its pathogen?`,
    options: [
      `AIDS ________ Bacillus anthracis`,
      `Syphilis ________ Treponema pallidum`,
      `Urethritis ________ Entamoeba gingivalis`,
      `Gonorrhoea ______ Leishmania donovani`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Syphilis ________ Treponema pallidum`
  },
  {
    question: `When a person dies after stung by bee followed by the administration of penicillin, death may be due to`,
    options: [
      `Prophylactic shock`,
      `Anaphylactic shock`,
      `Autoimmunity`,
      `Sedation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anaphylactic shock`
  },
  {
    question: `Passive immunity can be obtained through`,
    options: [
      `Antigen`,
      `Vaccines`,
      `Antibiotics`,
      `Antibodies`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Antibodies`
  },
  {
    question: `Which one of the following statements is correct?`,
    options: [
      `Patients, who had undergone surgery are given cannabinoids to relieve pain`,
      `Benign tumours show the property of metastasis`,
      `Heroin accelerates body functions`,
      `Malignant tumours may exhibit metastasis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Malignant tumours may exhibit metastasis`
  },
  {
    question: `Which of the following statements best describes the role of reverse transcriptase?`,
    options: [
      `Synthesis of RNA from genomic RNA`,
      `Synthesis of DNA from genomic RNA`,
      `Synthesis of DNA from genomic RNA`,
      `Synthesis of mRNA from genomic DNA`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Synthesis of DNA from genomic RNA`
  },
  {
    question: `Eradication of smallpox has been possible due to the following facts except`,
    options: [
      `Use of highly effective vaccine`,
      `Immunization programs`,
      `Elimination of animal reservoir`,
      `International cooperation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Elimination of animal reservoir`
  },
  {
    question: `The AIDS test is known as`,
    options: [
      `ELISA`,
      `Australian antigen`,
      `HIV test`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ELISA`
  },
  {
    question: `Just as Xenopsylla is to Yersinia pesist, so is`,
    options: [
      `Glossina palpalis to Wuchereria bancrofti`,
      `Culex to Plasmodium falciparum`,
      `Homo sapiens to Taenia solium`,
      `Phlebotomus to Leishmania donovani`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Phlebotomus to Leishmania donovani`
  },
  {
    question: `AIDS was first reported in`,
    options: [
      `1981`,
      `1980`,
      `1982`,
      `1983`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1981`
  },
  {
    question: `Black-foot disease is caused due to groundwater contaminated with excess of`,
    options: [
      `Nitrate`,
      `Fluoride`,
      `Arsenic`,
      `Sulphur`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Arsenic`
  },
  {
    question: `Select the correct statement from the set given below I. Growing number of people are taking LSD and other drugs like barbiturates and amphetamines II. Several plants, fruits and seed having hallucinogenic properties have been used in folk-medicine Which of the statements given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Tobacco consumption is known to stimulate the secretion of adrenaline and nor-adrenaline. The component causing this could be`,
    options: [
      `Nicotine`,
      `Tannic acid`,
      `Curaimin`,
      `Heamozoin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Nicotine`
  },
  {
    question: `Alcoholism may leads to`,
    options: [
      `Skin cancer`,
      `Liver cirrhosis`,
      `Viral disease`,
      `Eye infections`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Liver cirrhosis`
  },
  {
    question: `Triple antigen vaccine is not used for`,
    options: [
      `Typhoid`,
      `Tetanus`,
      `Diphtheria`,
      `pertussis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid`
  },
  {
    question: `SCID is caused by defective gene coding for the enzyme called`,
    options: [
      `Adenosine transaminase`,
      `Guanosine transaminase P a g e | 8`,
      `Adenosine deaminase`,
      `Guanosine deaminase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Adenosine deaminase`
  },
  {
    question: `Rat, carries rat fleas, which are the causal organism of`,
    options: [
      `Typhus fever`,
      `Tick fever`,
      `Bubonic plague`,
      `Yellow fever`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Bubonic plague`
  },
  {
    question: `Amoebiasis is prevented by`,
    options: [
      `Eating balanced food`,
      `Eating washed fruits`,
      `Using mosquito coil`,
      `Drinking boiled water`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Drinking boiled water`
  },
  {
    question: `The effect of hydrogen sulphide on man leads to which of the following diseases?`,
    options: [
      `Paralysis`,
      `Blindness`,
      `Sterility`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Paralysis`
  },
  {
    question: `Vaccination protects a person from disease because it`,
    options: [
      `Helps in RBC production`,
      `Produces antibodies`,
      `Helps in digestion`,
      `Correct body function`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Produces antibodies`
  },
  {
    question: `Addiction to alcohol causes`,
    options: [
      `Cirrhosis`,
      `Epilepsy`,
      `Neurosis`,
      `psychosis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cirrhosis`
  },
  {
    question: `HIV/AIDS is a contagious disease which is caused by`,
    options: [
      `Virus`,
      `Bacteria`,
      `Fungal`,
      `Protozoa`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Virus`
  },
  {
    question: `Antibody molecule has`,
    options: [
      `Four polypeptide chains`,
      `Five polypeptide chains`,
      `Six polypeptide chains`,
      `Seven polypeptide chains`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Four polypeptide chains`
  },
  {
    question: `Identify the pictures 𝐴, 𝐵 and 𝐶`,
    options: [
      `A-Opium poppy, B-Cannabis sativa, C-Datura`,
      `A-Cannabis sativa, B-Opium poppy, C-Datura`,
      `A-Datura, B-Opium poppy, C-Cannabis sativa`,
      `A-Opium poppy, B-Datura, C-Cannabis sativa`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Opium poppy, B-Cannabis sativa, C-Datura`
  },
  {
    question: `Morphine, obtained from opium, is`,
    options: [
      `Latex`,
      `Pome`,
      `Alkaloid`,
      `tannin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Alkaloid`
  },
  {
    question: `The chemical used in ‘National Malaria Eradication Programme ’ is`,
    options: [
      `2, 4-D`,
      `BHC`,
      `DDT`,
      `Pyrethroid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DDT`
  },
  {
    question: `Benign tumours I. remain confined to their original location and do not spread to other parts II. cause little damage Which of the statements given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `𝐸𝑛𝑡𝑎𝑚𝑜𝑒𝑏𝑎 ℎ𝑖𝑠𝑡𝑜𝑙𝑦𝑡𝑖𝑐𝑎 is a parasite of`,
    options: [
      `Large intestine`,
      `Liver`,
      `Lungs`,
      `Kidney`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Large intestine`
  },
  {
    question: `Common examples of allergens are`,
    options: [
      `Dust`,
      `Pollen grains`,
      `Animal dander`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Smack is chemically a …A… which is white and odourless and crystalline in nature. This is obtained by …B… . Here A and B refers to`,
    options: [
      `A-diacetyl morphine; B-acetylation of morphine`,
      `A-morphine; B-acetylation of hashish P a g e | 9`,
      `A-stimulant; B-acetylation of morphine`,
      `A-hallucinogen; B-acetylation of hashish`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-diacetyl morphine; B-acetylation of morphine`
  },
  {
    question: `The pathogen 𝑀𝑖𝑟𝑐𝑜𝑠𝑝𝑜𝑟𝑢𝑚 responsible for ringworm disease in humans belongs to`,
    options: [
      `Virus`,
      `Bacteria`,
      `Fungi`,
      `Protozoa`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fungi`
  },
  {
    question: `The genes concerned with the production of cancer are called`,
    options: [
      `Cancer genes`,
      `Carcinogenes`,
      `Carcinomas`,
      `Oncogenes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Oncogenes`
  },
  {
    question: `The given below figures show`,
    options: [
      `A-Cannabinoid; B-Morphine`,
      `A-Morphine; B-Cannabinoid`,
      `A-Morphine; B-Quinine`,
      `A-Quinine; B-Cannabinoid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A-Morphine; B-Cannabinoid`
  },
  {
    question: `Who stated that human population grows gemoretrically?`,
    options: [
      `Malthus`,
      `Darwin`,
      `Cannon`,
      `Lamarck`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Malthus`
  },
  {
    question: `Cyclosporin and endosporins are the drugs that are used as`,
    options: [
      `Anti retroviral drugs`,
      `Immuno-suppressants`,
      `Immuno-modulators`,
      `Immuno-vaccines`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Immuno-suppressants`
  },
  {
    question: `Emphysema is a`,
    options: [
      `Cardio vascular disease`,
      `Pulmonary disease`,
      `Neural disease`,
      `renal disease`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Pulmonary disease`
  },
  {
    question: `Which technique uses the body’s water molecules as the bases for its images?`,
    options: [
      `Sonography`,
      `MRI`,
      `Radioactive traces`,
      `Thermography`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) MRI`
  },
  {
    question: `Antigen binding site of immunoglobulin is`,
    options: [
      `Variable region of heavy chain`,
      `Variable region of light chain`,
      `Constant region of light chain`,
      `Variable region of both heavy and light chain`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Variable region of both heavy and light chain`
  },
  {
    question: `The synthetic drugs structually similar to adrenaline are`,
    options: [
      `Amphetamines`,
      `Barbituratess`,
      `Halluncinogens`,
      `Nicotinic derivatives`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amphetamines`
  },
  {
    question: `Cannabinoids is obtained from`,
    options: [
      `Inflorescence of the plant Cannabis sativa`,
      `Fruits of the plant Papaver somniferum`,
      `Latex of the plant Cannabis sativa`,
      `Plant Papaver somniferum inflorescence`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Inflorescence of the plant Cannabis sativa`
  },
  {
    question: `A substance that cause an allergic reaction is called`,
    options: [
      `Allergen`,
      `Pollen`,
      `Foreign substance`,
      `Dander`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Allergen`
  },
  {
    question: `The polypeptide chains present in gamma immunoglobulin are`,
    options: [
      `2`,
      `4`,
      `6`,
      `8`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `Kala-azar is caused by P a g e | 10`,
    options: [
      `Trypanosoma cruzi`,
      `Leishmania donovani`,
      `Trypanosoma brucei`,
      `Trypanosoma gambiense`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Leishmania donovani`
  },
  {
    question: `Which of the following is used in diagnosis of epilepsy?`,
    options: [
      `X-ray radiography`,
      `Digital Subtraction Angiography(DSA)`,
      `Sonography`,
      `Positron Emission Tomography(PET)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Positron Emission Tomography(PET)`
  },
  {
    question: `The disease ‘Oriental sore’ is caused by`,
    options: [
      `Bacteria`,
      `Virus`,
      `Protozoa`,
      `Fungus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virus`
  },
  {
    question: `ELISA test is used for detection of`,
    options: [
      `Antibodies`,
      `Viral disease`,
      `AIDS`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Except skin, other physical barriers which also helps to prevent the entry of the microorganisms are I. mucus coating of the epithelium lining the respiratory II. gastrointestinal tracts III. urogenital tracts Choose the correct option`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Ability of the body to fight against the disease causing organisms is called`,
    options: [
      `Vulnerability`,
      `Susceptibility`,
      `Irritability`,
      `Immunity`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Immunity`
  },
  {
    question: `In a standard ECG, which one of the following alphabets is the correct representation of the respective activity of human heart?`,
    options: [
      `R-repolarization of ventricles`,
      `S-start of systole`,
      `T-end of diastole`,
      `P-depolarization of the artia`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-depolarization of the artia`
  },
  {
    question: `Damage to thymus in a child may lead to`,
    options: [
      `Loss of cell-mediated immunity`,
      `A reduction in the haemoglobin content in blood`,
      `A reduction in the amount of plasma proteins`,
      `Loss of antibody-mediated immunity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Loss of cell-mediated immunity`
  },
  {
    question: `Purpose of tubectomy is to prevent`,
    options: [
      `Fertilization`,
      `Coitus`,
      `Egg formation`,
      `Embryonic development`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fertilization`
  },
  {
    question: `Antibodies in our body are complex`,
    options: [
      `Lipoproteins`,
      `Steroids`,
      `Prostaglandins`,
      `Glycoproteins`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Glycoproteins`
  },
  {
    question: `What is the name of complex formed at the time of action of T-cells?`,
    options: [
      `HLA`,
      `STD antigen complex`,
      `HLA antigen complex`,
      `MHC antigen complex`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) MHC antigen complex`
  },
  {
    question: `Proliferation of cancer cells is not limited because of`,
    options: [
      `Differing surface proteins`,
      `Differing cholesterol level`,
      `Deficiency of steroids`,
      `Aberrant chromosomal complement`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Differing surface proteins`
  },
  {
    question: `Which of the following is a matching pair of a drug and its category?`,
    options: [
      `Amphetamines - Stimulant`,
      `Lysergic acid diethly amide - Narcotic`,
      `Heroin - Psychotropice`,
      `Benzodiazepine - Pain Killer`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amphetamines - Stimulant`
  },
  {
    question: `The drugs, which are commonly abused are`,
    options: [
      `Opioids`,
      `Cannabinoids`,
      `Coca alkaloids`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Consider the following statements P a g e | 11 I. Secondary lymphoid organs includes lymph nodes, spleen and small masses of lymph tissue such as Peyer’s patches, appendix and tonsils II. The secondary lymphoid organs all the site of lymphocyte maturation and they efficiently trap antigens for exposure to T and B-cells Which of the statements given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Who among the following is recognized as the Father of Medicine?`,
    options: [
      `Robert Koch`,
      `Hippocrates`,
      `Louis Pasteur`,
      `Edward Jenner`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hippocrates`
  },
  {
    question: `Which of the following organs is not involved in the elicitation of immune response?`,
    options: [
      `Brain`,
      `Lymph nodes`,
      `Spleen`,
      `Thymus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Brain`
  },
  {
    question: `The term ‘Vaccine’ was introduced by`,
    options: [
      `Jenner`,
      `Koch`,
      `Pasteur`,
      `Jointly by Koch and Pasteur`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Jenner`
  },
  {
    question: `Tuberculosis is caused by`,
    options: [
      `Mycobacterium sp.`,
      `Aspergillus sp.`,
      `Clostridium sp.`,
      `Vibrio sp.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Mycobacterium sp.`
  },
  {
    question: `Main source of amoebic dysentery is`,
    options: [
      `Contaminated food and water`,
      `Water and food contaminated by the faecal matter`,
      `Water and food contaminated by urine`,
      `Water and food contaminated by polluted air`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Water and food contaminated by the faecal matter`
  },
  {
    question: `Mycobacterium leprae causes`,
    options: [
      `Tuberculosis`,
      `Leprosy`,
      `AIDS`,
      `Tetanus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Leprosy`
  },
  {
    question: `Excessive doses of drugs may lead to coma and death due to`,
    options: [
      `Respiratory failure`,
      `Heart failure`,
      `Cerebral hemorrhage`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `All stages of the Plasmodium get digested in stomach of female Anopheles except`,
    options: [
      `Sporozoite`,
      `Gametocyte`,
      `Erythrocyte`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Gametocyte`
  },
  {
    question: `Hodgkins disease is`,
    options: [
      `Cancer of the lymphoid tissue`,
      `Cancer of the mammary gland`,
      `cancer of the WBC`,
      `Cancer of the liver`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cancer of the lymphoid tissue`
  },
  {
    question: `The interferons are`,
    options: [
      `Antibacterial drug`,
      `Antiviral drugs`,
      `Antibiotic drugs`,
      `Immunosuppressive drugs`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antiviral drugs`
  },
  {
    question: `Food poisoning is caused by`,
    options: [
      `Nitrosomonas`,
      `Lactobacillus`,
      `Escherichia coil`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lactobacillus`
  },
  {
    question: `Choose the true statements I. Innate immunity is accomplished by providing different types of barriers II. Acquired immunity is present from the birth and is inherited from parents III. Sweat, tears, acid in the stomach and saliva prevent microbial growth Codes I II III`,
    options: [
      `True False True`,
      `True True False`,
      `False False True`,
      `False True False`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) True False True`
  },
  {
    question: `Immunoglobulins are made up of`,
    options: [
      `Two polypeptide chains`,
      `Four polypeptide chains`,
      `Three amino acids only`,
      `Five nucleotides`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Four polypeptide chains`
  },
  {
    question: `AIDS is not diagnosed by`,
    options: [
      `Enzyme Linked Immuno Sorbant Assay test`,
      `WIDAL test`,
      `RIA`,
      `Both (b) and (c) P a g e | 12`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c) P a g e | 12`
  },
  {
    question: `The protein 𝛼 − 1 antitrypsin is used to treat which of the following disease?`,
    options: [
      `Cancer`,
      `Rheumatoid arthritis`,
      `Alzheimer’s disease`,
      `Emphysema`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Emphysema`
  },
  {
    question: `The immune system is made of`,
    options: [
      `Humoral system`,
      `Humoral and cell mediated system`,
      `Humoral and fibrous system`,
      `Antigen induced antibodies`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Humoral and cell mediated system`
  },
  {
    question: `An autoimmune disease is`,
    options: [
      `AIDS`,
      `Haemophilia`,
      `Allergy`,
      `Myasthenia gravis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Myasthenia gravis`
  },
  {
    question: `Which of the following is correct for immuno-modulators?`,
    options: [
      `They always suppress immune system`,
      `They never suppress immune system`,
      `They always stimulate immune system`,
      `Specific immuno-modulators stimulate the immuno-response of immune system, whereas some other immuno-modulators inhibit it`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Specific immuno-modulators stimulate the immuno-response of immune system, whereas some other immuno-modulators inhibit it`
  },
  {
    question: `The disease filarial is transmitted by`,
    options: [
      `Tse-tse fly`,
      `Sand fly`,
      `Culex`,
      `Anopheles`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Culex`
  },
  {
    question: `The immune system plays a major role in`,
    options: [
      `Allergic reactions`,
      `Auto-immune diseases`,
      `Organ transplantation`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `What is HLA?`,
    options: [
      `Group of proteins`,
      `Group of chromosomes`,
      `Group of genes`,
      `Group of polypeptides`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Group of proteins`
  },
  {
    question: `Aloe vera cures cough and cold by`,
    options: [
      `Leaf juice with opium`,
      `Leaf juice mixed with oil`,
      `Juice of roasted leaves taken with honey`,
      `Salad of leaves`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Juice of roasted leaves taken with honey`
  },
  {
    question: `If the person shows the production of interferons in his body, chances are that he is suffering from`,
    options: [
      `Anthrax`,
      `Malaria`,
      `Measles`,
      `Tetanus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Measles`
  },
  {
    question: `Which of these is based on magnetic resonance?`,
    options: [
      `EEG`,
      `CT scanning`,
      `NMR scanning`,
      `PET scanning`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) NMR scanning`
  },
  {
    question: `With regard to the transmission of the Human Immunodeficiency Virus (HIV), Which one of the following statements is not correct?`,
    options: [
      `The chances of transmission from female to male are twice as likely as from male to female`,
      `The chances of transmission are more if a person suffers from other sexually transmitted infections`,
      `An infected mother can transmit the infection to her baby during pregnancy at child birth and by breast feeding`,
      `The risk of contracting infection from transfusion of infected blood is much higher than an exposure to contaminate needle`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The chances of transmission from female to male are twice as likely as from male to female`
  },
  {
    question: `Amniocentesis is used for determining`,
    options: [
      `Heart disease`,
      `brain disease`,
      `Hereditary disease of the embryo`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hereditary disease of the embryo`
  },
  {
    question: `In the given flow chart, the replication of retrovirus in a host cell is shown. Observe it carefully and fill up the blank 𝐴, 𝐵 and 𝐶 P a g e | 13`,
    options: [
      `A-Retrovirus, B-Viral DNA is produced, C-New viral RNA is produced`,
      `A-Transcriptase, B-Bacterial RNA is produced, C-New viral DNA is produced by the infected cell`,
      `A-Reverse transcriptase, B-Viral DNA is produced, C-New viral RNA is produced by the infected cell`,
      `A-Reverse transcriptase, B-Viral DNA is produced, C-New viral DNA is produced by the infected cell`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A-Reverse transcriptase, B-Viral DNA is produced, C-New viral RNA is produced by the infected cell`
  },
  {
    question: `Most important component of oral contraceptive is`,
    options: [
      `LH`,
      `GH`,
      `Thyroxine`,
      `progesterone`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) progesterone`
  },
  {
    question: `Which of the following normally confined to their original location and do not spread to other parts of the body?`,
    options: [
      `Malignant tumour`,
      `Metastasis`,
      `Benign tumour`,
      `cancer`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Benign tumour`
  },
  {
    question: `In AIDS, the system which show failure is`,
    options: [
      `Digestive system`,
      `Respiratory system`,
      `Defence system`,
      `Sensory system`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Defence system`
  },
  {
    question: `Cannabinoid are the group of chemicals, which interact with cannabinoid receptors present principally in`,
    options: [
      `Brain`,
      `Neuron`,
      `Nephron`,
      `Dendron`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Brain`
  },
  {
    question: `Histamines or other, inflammation producing substances are formed by`,
    options: [
      `Macrophages`,
      `Interferons`,
      `Mast cells`,
      `Collagen tissue`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mast cells`
  },
  {
    question: `Which group of three of the following five statements (I-V) contains is correct regarding beri beri? I. A crippling disease prevalent among the native population of sub-Sahara Africa. II. A deficiency disease caused by lack of thiamine (vitamin-B1). III. A nutritional disorder in infants and young children when the diet is persistantly deficient in essential protein. IV. Occurs in those countries where the staple diet is polished rice. V. The symptoms are pain from neuritis, paralysis, muscle wasting, progressive oedema, mental deterioration and finally heart failure.`,
    options: [
      `I, II and IV`,
      `II, III and V`,
      `I,III and V`,
      `II, IV and V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) II, IV and V`
  },
  {
    question: `Which of the following diseases is caused due to allergic reaction?`,
    options: [
      `Leprosy`,
      `Typhoid`,
      `Asthma`,
      `Tetanus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Asthma`
  },
  {
    question: `Which of the following is a pair of viral diseases?`,
    options: [
      `Ringworm, AIDS`,
      `Common cold, AIDS`,
      `Dysentery, common cold`,
      `Typhoid, tuberculosis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Common cold, AIDS`
  },
  {
    question: `‘Lock jaw’ is another name of`,
    options: [
      `Malaria`,
      `Kala-azar`,
      `Tetanus`,
      `Diphtheria`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Tetanus`
  },
  {
    question: `Choose the wrong statement regarding AIDS.`,
    options: [
      `AIDS is an immunodeficiency disease`,
      `It is caused by the retrovirus HIV`,
      `HIV selectively infects and kills B-lymphocytes`,
      `Retroviruses have RNA genomes that replicate via DNA intermediate P a g e | 14`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) HIV selectively infects and kills B-lymphocytes`
  },
  {
    question: `Osteomalacia is a deficiency disease of`,
    options: [
      `Infants due to protein energy malnutrition`,
      `adults due to protein energy malnutrition`,
      `Adults due to vitamin-D deficiency`,
      `Infants due to vitamin-K deficiency`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Adults due to vitamin-D deficiency`
  },
  {
    question: `Study the following sentences. I. The cells of malignant tumours divide erratically. II. They are malignant tumours of epithelial cells. III. They are malignant tumours of organs that originate from mesoderm. IV. These tumours are found in organs such as spleen and lymph nodes. Which of the above are true for angiosarcoma?`,
    options: [
      `I and II`,
      `II and IV`,
      `I and III`,
      `II and III`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and III`
  },
  {
    question: `Spleen is a storage site for`,
    options: [
      `Erythrocytes`,
      `Basophils`,
      `Platelets`,
      `Neutrophils`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Erythrocytes`
  },
  {
    question: `The best HLA(Human Leucocyte Antigen) match for transplants in order of preference is`,
    options: [
      `Parent>sibling>twin>unrelated donor`,
      `Sibling> twin> Parent> unrelated donor`,
      `twin> unrelated donor> parent> sibling`,
      `Twin> sibling> Parent> unrelated donor`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Twin> sibling> Parent> unrelated donor`
  },
  {
    question: `Quinine is obtained from`,
    options: [
      `Bark of Cinchona`,
      `Root if Cinchona`,
      `Wood of Cinchona`,
      `Leaves of Cinchona`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bark of Cinchona`
  },
  {
    question: `Antigen binds to antibody. The binding is result of`,
    options: [
      `Electrostatic interactions`,
      `Covalent bonds`,
      `Disulphide bridges`,
      `Amide formation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Electrostatic interactions`
  },
  {
    question: `The process of introduction of weakened inactivated pathogen into human body is called`,
    options: [
      `Immunization`,
      `Vaccination`,
      `Attenuation`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vaccination`
  },
  {
    question: `Female infanticide is commonly reported from`,
    options: [
      `Usalampatti`,
      `Madurai`,
      `Kanyakumari`,
      `Rajasthan`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Usalampatti`
  },
  {
    question: `Which of the following disease is caused by the member of retrovirus group?`,
    options: [
      `Cancer`,
      `AIDS`,
      `Dengue`,
      `Common cold`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) AIDS`
  },
  {
    question: `The term ‘antibiotic’ was coined by`,
    options: [
      `Selman Waksman`,
      `Alexander Fleming`,
      `Edward Jenner`,
      `Louis Pasteur`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Selman Waksman`
  },
  {
    question: `All of the following are examples of mucosa associated lymphoid tissue except`,
    options: [
      `Appendix`,
      `Peyer’s patches`,
      `Tonsils`,
      `Liver`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Liver`
  },
  {
    question: `Give the name of two helminthes, which causes ascariasis and filariasis respectively`,
    options: [
      `Ascaris and Wuchereria`,
      `Wuchereria and Ascaris`,
      `Roundworm and Flatworm`,
      `Plasmodium and Wuchereria`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ascaris and Wuchereria`
  },
  {
    question: `Sir Godfery Hounsfield developed the diagnostic technique of`,
    options: [
      `CT scanning`,
      `MRI`,
      `Endoscopy`,
      `Bronchoscopy`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) CT scanning`
  },
  {
    question: `Hypersensitivity to an allergen is due to`,
    options: [
      `Aberrant function of immune system`,
      `Food habits`,
      `Increase in humidity`,
      `Increase in temperature`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aberrant function of immune system`
  },
  {
    question: `The following table shows certain diseases, their causative organisms and symptoms Diseases Causative Organism s Symptoms I. Filariasis A Inflammation II. Typhoid B High fever stomach pain III. C Rhinoviru ses Nasal congestion and P a g e | 15 discharge IV. Ascariasis Ascaris D The correct option regarding 𝐴, 𝐵, 𝐶 and 𝐷 is`,
    options: [
      `A-Wuchereria, B-Salmonella typhi, C-Common cold, D-Internal bleeding, fever, anaemia`,
      `A-Salmonella typhi, B-Ascaris, C-Typhoid, D-Stomach pain headache`,
      `A-Ascaris, B-Entamoeba histolytica, C-Pneumonia, D-Constipation, fever`,
      `A-Entamoeba histolytica, B- Salmonella typhi, C- Common cold, D-Nasal discharge, high fever`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Wuchereria, B-Salmonella typhi, C-Common cold, D-Internal bleeding, fever, anaemia`
  },
  {
    question: `Which part of the brain is affected first in a drunk person?`,
    options: [
      `Cerbrum`,
      `Olfactory lobe`,
      `Cerebellum`,
      `Medulla oblongata`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cerebellum`
  },
  {
    question: `African sleeping sickness is caused by`,
    options: [
      `Trypanosoma`,
      `Leishmania`,
      `Latimeria`,
      `Plasmodium`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Trypanosoma`
  },
  {
    question: `Cocaine, an alkaloid is obtained from the leaves of`,
    options: [
      `Erythroxylon coca`,
      `Ephedra sp.`,
      `Digitalis purpurea`,
      `Papaver somniferum`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Erythroxylon coca`
  },
  {
    question: `Fungi belonging to genera 𝑀𝑖𝑟𝑐𝑜𝑝𝑜𝑟𝑢𝑚, 𝑇𝑟𝑖𝑐ℎ𝑜𝑝ℎ𝑦𝑡𝑜𝑛 and 𝐸𝑝𝑖𝑑𝑒𝑟𝑚𝑜𝑝ℎ𝑦𝑡𝑜𝑛 are responsible for`,
    options: [
      `Ringworm`,
      `Skin allergy`,
      `Amoebiasis`,
      `Measles`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ringworm`
  },
  {
    question: `A localized inflammatory response appears at the site of infection causes redness, swelling, pain and heat due to certain chemicals, they are`,
    options: [
      `Histamine and prostaglandins`,
      `Cerumen and mucus`,
      `Histamine and cerumen`,
      `Prostaglandins and cerumen`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Histamine and prostaglandins`
  },
  {
    question: `A drug called morphine is obtained from`,
    options: [
      `Rauwolffia serpentina`,
      `Cannabis sativa`,
      `Cajanus cajan`,
      `Papaver somniferum`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Papaver somniferum`
  },
  {
    question: `Scientists were able to pinpoint the location of colour processing centers in the visual cortex of the brain by means of`,
    options: [
      `PET`,
      `NMR`,
      `CT-scan`,
      `X-ray`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) PET`
  },
  {
    question: `Interferon – β is also termed as`,
    options: [
      `Immune interferon`,
      `Fibroblast interferon`,
      `Leucocyte interferon`,
      `Anti-immune interferon`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Immune interferon`
  },
  {
    question: `The disease caused by virus, which is 42 nm in size and contains double stranded DNA is`,
    options: [
      `Hepatitis-A`,
      `AIDS`,
      `Hepatitis-B`,
      `Leprosy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Hepatitis-B`
  },
  {
    question: `Smoking causes`,
    options: [
      `Heart disease`,
      `Gastric ulcer`,
      `Bronchitis`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `A person is suffering from frequent episodes of nasal discharge, nasal congestion, reddening of eyes and watery eyes. These are the symptoms of`,
    options: [
      `Cyanosis`,
      `Bronchitis`,
      `Rhinitis`,
      `Bronchial carcinoma`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Rhinitis`
  },
  {
    question: `Which of the following is a viral disease?`,
    options: [
      `Typhoid`,
      `Polio`,
      `TB`,
      `Leprosy`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Polio`
  },
  {
    question: `The causative agent of filaria is`,
    options: [
      `Wuchereria bancrofti`,
      `Leishmania donovani`,
      `Plasmodium vivax`,
      `Trypanosoma gambiens`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Wuchereria bancrofti`
  },
  {
    question: `Chemical carcinogens present in smoke have been identified as a major cause of`,
    options: [
      `Lung cancer`,
      `Liver cancer`,
      `Oral cancer`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Lung cancer`
  },
  {
    question: `The cancer of the epithelial cells is called`,
    options: [
      `Leukaemia`,
      `Lipoma`,
      `Sarcoma`,
      `Carcinoma P a g e | 16`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Carcinoma P a g e | 16`
  },
  {
    question: `Cell-mediated immunity is responsible for`,
    options: [
      `Graft rejection`,
      `Passive immunity`,
      `Organ surgery`,
      `Innate immunity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Graft rejection`
  },
  {
    question: `Physiological barrier which prevents entry of microorganism in our body is/are`,
    options: [
      `Acid in the stomach`,
      `Saliva in the mouth`,
      `Tears from eyes`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Antiviral substances, produced by many vertebrates in response to viral infections for resisting the multiplication of viruses as known as`,
    options: [
      `Viroid`,
      `Interferon`,
      `Antivirin`,
      `Antigen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Interferon`
  },
  {
    question: `Study the given diagram and name the labelled 𝐴, 𝐵 and 𝐶`,
    options: [
      `A-Gametocytes, B-Salivary glands, C-Sporozoites`,
      `A-Sporozoites, B-Salivary glands, C-Gametocytes`,
      `A-Salivary glands, B-Sporozoites, C-Gametocytes`,
      `A-Salivary glands, B-Gametocytes, C-Sporozoites`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Gametocytes, B-Salivary glands, C-Sporozoites`
  },
  {
    question: `Who developed vaccine against smallpox?`,
    options: [
      `Lousi Pasteur`,
      `Selman Waksman`,
      `Edward jenner`,
      `Alexander Flemming`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Alexander Flemming`
  },
  {
    question: `The main reason, why antibiotics could not solve all the problems of bacterial disease, is`,
    options: [
      `Inactivation of antibiotics by bacterial enzyme`,
      `Decreased efficiency of the immune system`,
      `The development of mutant strains resistant to antibiotics`,
      `Insensitivity of the individual following long exposure to antibisotics`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The development of mutant strains resistant to antibiotics`
  },
  {
    question: `ELISA assay`,
    options: [
      `Use complement mediated cells lysis`,
      `User a radiobelled second antibody`,
      `Involves addition of substrate which is converted into coloured end product`,
      `Requires red blood cells`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Involves addition of substrate which is converted into coloured end product`
  },
  {
    question: `Cross sectional image of internal body structure can be obtained by using which medical technique?`,
    options: [
      `ECG - Electro Cardio Graph`,
      `EEG - Electro Encephalo Graph`,
      `CAT - Computerized Axial Tomography`,
      `PET - Positron Emission Tomography`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CAT - Computerized Axial Tomography`
  },
  {
    question: `The infectious form (after entering into human blood) of malarial parasite migrate to the`,
    options: [
      `Erythrocytes of human`,
      `Liver cells of human`,
      `Stomach of mosquito`,
      `Salivary gland of mosquito`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Liver cells of human`
  },
  {
    question: `𝐸𝑛𝑡𝑎𝑚𝑜𝑒𝑏𝑎 ℎ𝑖𝑠𝑡𝑜𝑙𝑦𝑡𝑖𝑐𝑎 is a`,
    options: [
      `Viral parasite`,
      `Bacterial parasite`,
      `Protozoan parasite`,
      `Fungal parasite`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Protozoan parasite`
  },
  {
    question: `Virus-infected cells secrete proteins called`,
    options: [
      `Enzyme`,
      `Interferon`,
      `Hormone`,
      `Antibody P a g e | 17`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Interferon`
  },
  {
    question: `World health organization has started a number of programmes to prevent spreading of HIV infection Few such steps include I. ensuring use of disposable needles and syringes II. free distribution of condoms III. advocating safe sex IV. controlling drug abuse Which of the steps given above are correct?`,
    options: [
      `I and II`,
      `III and IV`,
      `II, III and IV`,
      `I, II, III and IV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III and IV`
  },
  {
    question: `Colostrum`,
    options: [
      `Can be synthesized by the new born baby`,
      `Is a natural source of antibodies that secreted from the breast for the first few days after birth`,
      `Contain primarily fat`,
      `Is a enzyme involved in stimulating lactation`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is a natural source of antibodies that secreted from the breast for the first few days after birth`
  },
  {
    question: `Large group of lymphoid tissue in respiratory, digestive and urogenital tract are collectively called`,
    options: [
      `MALT`,
      `Peyer’s patches`,
      `Mucosa lymph nodes`,
      `𝛂-globulins`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) MALT`
  },
  {
    question: `Select the true statement I. AIDS has no cure, prevention is the best option II. During HIV infection, the person suffers from fever, weight loss and diarrhoea III. HIV is a retrovirus, which means its genetic material is DNA`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) I and II`
  },
  {
    question: `Diacetyl morphine is commonly known as`,
    options: [
      `Morphine`,
      `Cannabis`,
      `heroin`,
      `cocaine`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) heroin`
  },
  {
    question: `Reasons for alcohol abuse in adolescents are I. social pressure II. curiosity and need for adventure, excitement and experiment III. to escape from stress, depression and frustration IV. to overcome hardships of daily life Which of the statements given above are correct?`,
    options: [
      `I, II and III`,
      `I, III and IV`,
      `II, III and IV`,
      `I, II, III and IV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III and IV`
  },
  {
    question: `A disease which can easily transmit from one person to another is called`,
    options: [
      `Non-infectious disease`,
      `Infectious disease`,
      `Viral disease`,
      `Bacterial disease`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Infectious disease`
  },
  {
    question: `The name of Mary Mallon is related with the disease`,
    options: [
      `Typhoid`,
      `Pneumonia`,
      `Dengue`,
      `AIDS`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid`
  },
  {
    question: `The organ related with immunity is`,
    options: [
      `Liver`,
      `Parathyroid`,
      `Thymus`,
      `Pineal`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Thymus`
  },
  {
    question: `Tiny lesions of multiple sclerosis on brain and spinal tissue can be observed by`,
    options: [
      `Magnetic resonance imaging`,
      `Position emission tomography`,
      `X-rays radiography`,
      `Digital subtraction angiography`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Magnetic resonance imaging`
  },
  {
    question: `Genetic material found in Human Immunodeficiency Virus(HIV)is`,
    options: [
      `Double stranded RNA`,
      `Single stranded RNA`,
      `Double stranded DNA`,
      `Single stranded DNA`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Single stranded RNA`
  },
  {
    question: `A major benefit of breast feeding for the new born infant is`,
    options: [
      `Low lactose content`,
      `The high casein content`,
      `Passive immunity`,
      `E. coli factor`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Passive immunity`
  },
  {
    question: `The uncontrolled proliferation of cancerous cells produces masses of cells, called`,
    options: [
      `Tumour`,
      `Multiplication`,
      `Protooncomass`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Tumour`
  },
  {
    question: `Characters of acquired immunity are`,
    options: [
      `Specificity`,
      `Difference between self and non- self`,
      `Retains memory`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `A damaging immune response by the body to a substance is called P a g e | 18`,
    options: [
      `Immunity`,
      `Allergy`,
      `Passive immunity`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Allergy`
  },
  {
    question: `T-lymphocyte is produced in`,
    options: [
      `Bone marrow`,
      `Spleen`,
      `Pancreas`,
      `Thymus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bone marrow`
  },
  {
    question: `Ginseng is an important drug of`,
    options: [
      `America`,
      `Egypt`,
      `India`,
      `Chain`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Chain`
  },
  {
    question: `An antibody is a`,
    options: [
      `White corpuscle, which attacks invading bacteria`,
      `Molecule that specifically inactivate an antigen`,
      `Component of the blood`,
      `Secretion of mammalian erythrocyte`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Secretion of mammalian erythrocyte`
  },
  {
    question: `Blood circulation was discovered by`,
    options: [
      `William Harvey`,
      `Hippocrates`,
      `Karl Landsteiner`,
      `Paul Ehrlich`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) William Harvey`
  },
  {
    question: `Cancerous cells spread through`,
    options: [
      `Lymph`,
      `Blood`,
      `Secondary growths of malignant tumour`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Consider the following statements I. People should get vaccination to avoid infection II. Vaccination is available against polio, cholera, typhoid, tuberculosis and many other disease III. Eradication of vectors are necessary in diseases like malaria and filariasis IV. Dengue and chikengunya, both are spread by 𝐶𝑢𝑙𝑒𝑥 mosquitoes Which of the statements given above are correct?`,
    options: [
      `I, II and III`,
      `I, II and IV`,
      `I, III and IV`,
      `III and IV`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) I, II and III`
  },
  {
    question: `Vaccines, when introduced into the body, stimulates the production of`,
    options: [
      `Antigen`,
      `Antibody`,
      `Natural killer cells`,
      `Macrophage`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibody`
  },
  {
    question: `Benign tumour is the one, which`,
    options: [
      `Shows metastasis`,
      `Is differentiated and capsulated`,
      `Is undifferentiated and noncapsulated`,
      `Is differentiated and noncapsulated`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is differentiated and capsulated`
  },
  {
    question: `Antibodies are`,
    options: [
      `Lipids`,
      `Carbohydrates`,
      `Immunoglobulins`,
      `Antiviral particles`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Immunoglobulins`
  },
  {
    question: `Cancer causing viruses are called`,
    options: [
      `Oncogenic viruses`,
      `Retroviruses`,
      `Adenoviruses`,
      `Poxviruses`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Oncogenic viruses`
  },
  {
    question: `Drugs that cause malformations in embryo during pregnancy are called`,
    options: [
      `Tranquilizer`,
      `Teratogens`,
      `Alcoholic beverages`,
      `Nicotine`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Teratogens`
  },
  {
    question: `Consider the statements given below regarding contraception and answer as directed thereafter I. Medical Termination of Pregnancy (MTP) during first trimester is generally safe. II. Generally, chances of conception are nil until mother breast-feeds the infant upto two year. III. Intrauterine devices like copper-T are effective contraceptives. IV.Contraception pills may be taken upto one week after coitus to prevent conception. Which two of the above statements are correct?`,
    options: [
      `II, III`,
      `III, IV`,
      `I, III`,
      `I, II`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I, III`
  },
  {
    question: `Use of anti-histamines and steroids give a quick relief form`,
    options: [
      `Allergy`,
      `Nausea`,
      `Cough`,
      `Headache`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Allergy`
  },
  {
    question: `In recent years, which disease of digestive system in Indian has received great attention and against that active vaccination is being done even in schools?`,
    options: [
      `Poliomyelistis`,
      `hepatitis`,
      `Jaundice`,
      `Enterocolitis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) hepatitis`
  },
  {
    question: `A condition that occurs when the immune system mistakenly attacks and destroys healthy body tissue is called`,
    options: [
      `Auto-immunity`,
      `Immunization`,
      `Allergy`,
      `Immunodeficiency`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Auto-immunity`
  },
  {
    question: `The primary function of the lymphoid system is`,
    options: [
      `Circulatory of nutrients`,
      `Transport of hormones P a g e | 19`,
      `Production, maintenance and distribution of lymphocytes`,
      `Production, maintenance and distribution of plasma`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Production, maintenance and distribution of lymphocytes`
  },
  {
    question: `Cell division or mitosis is normal process in a living cell, but sudden and abnormal mitosis in an organ will frequently result in`,
    options: [
      `Zygote`,
      `Cancer`,
      `New organ`,
      `Gastrula`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cancer`
  },
  {
    question: `Surgical removal of thymus of a new born shall result in the failure to produce`,
    options: [
      `Basophils`,
      `Neutrophils`,
      `B-lymphocyte`,
      `T-lymphocyte`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T-lymphocyte`
  },
  {
    question: `Broad spectrum antibiotic`,
    options: [
      `Acts on all bacteria and virus`,
      `Is effective in very small amount`,
      `Acts on both pathogen and host`,
      `Acts on a variety of pathogenic microorganisms`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Acts on a variety of pathogenic microorganisms`
  },
  {
    question: `If a person shows production of interferons in his body, the chances are that he got an infection of`,
    options: [
      `Malaria`,
      `Measles`,
      `Typhoid`,
      `Tetanus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Measles`
  },
  {
    question: `The organism, which causes pneumonia in human beings is`,
    options: [
      `Atrichous`,
      `Monotrichous`,
      `Amphitrichous`,
      `peritrichous`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Atrichous`
  },
  {
    question: `If you suspect major deficiency of antibodies in a person, to which of the following would you look for confirmatory evidence?`,
    options: [
      `Serum albumins`,
      `Serum globulins`,
      `Fibrinogen in the plasma`,
      `Haemocytes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Serum globulins`
  },
  {
    question: `The immunoglobulin abundant in colostrums is`,
    options: [
      `IgG`,
      `IgM`,
      `IgD`,
      `IgA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) IgA`
  },
  {
    question: `Cocaine is the native to`,
    options: [
      `North America`,
      `South America`,
      `India`,
      `China`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) South America`
  },
  {
    question: `Globulins contained in human blood plasma are primarily involved in`,
    options: [
      `Defence mechanisms of body`,
      `Osmotic balance of body fluids`,
      `Oxygen transport in the blood`,
      `Clotting of blood`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Defence mechanisms of body`
  },
  {
    question: `The person showing unpredictable moods, outbursts of emotions, quarrelsome behaviour and conflicts with others is suffering from`,
    options: [
      `Schizophrenia`,
      `Borderline personality disorder(BPD)`,
      `Mood disorders`,
      `Addictive disorders`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Schizophrenia`
  },
  {
    question: `Identify the wrong statements I. The tumour of haematopoietic cells is called leukaemia. II. Cancer arising from the epithelial tissues of internal organs and glands is referred as melanoma. III. Sarcoma is a type of cancer where bone and cartilages are involved. IV. Only benign tumours are called as true cancer or neoplasm.`,
    options: [
      `I and II only`,
      `II and III only`,
      `II and IV only`,
      `I and III only`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) II and IV only`
  },
  {
    question: `Harmful effect of cigarette smoking is`,
    options: [
      `Baldness`,
      `Yellowing of eyes`,
      `Lung cancer`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lung cancer`
  },
  {
    question: `Cell mediated immunity is mainly a function of`,
    options: [
      `B-cells`,
      `T-cells`,
      `Macrophages`,
      `Interferons`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) T-cells`
  },
  {
    question: `Infective stage of 𝑃𝑙𝑎𝑠𝑚𝑜𝑑𝑖𝑢𝑚 for men is`,
    options: [
      `Merozoites`,
      `Ookinetes`,
      `Sporozoites`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Sporozoites`
  },
  {
    question: `Infection of pneumonia occurs due to`,
    options: [
      `Droplets released from an infected person`,
      `Released droplets inhaled by healthy person`,
      `Sharing contaminated objects such as glasses and utensils with an infected person`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Disease caused by deficiency of vitamin-C is`,
    options: [
      `beri beri`,
      `Scurvy`,
      `Pellagra`,
      `Night blindness P a g e | 20`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Scurvy`
  },
  {
    question: `Humoral immunity is mediated by`,
    options: [
      `B-cells`,
      `T-cells`,
      `Macrophages`,
      `Monocytes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) B-cells`
  },
  {
    question: `Minamata disease is caused due to presence of …..in water.`,
    options: [
      `Cadmium`,
      `Lead`,
      `Arsenic`,
      `Mercury`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mercury`
  },
  {
    question: `Both sickle cell anaemia and Huntington’s chorea are`,
    options: [
      `Bacteria-related diseases`,
      `Congenital disorders`,
      `Pollutant-induced disorders`,
      `Virus-related diseases`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Congenital disorders`
  },
  {
    question: `Rabies is caused by`,
    options: [
      `Virus`,
      `Bacteria`,
      `Protozoa`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Virus`
  },
  {
    question: `Some diseases are transmitted through contaminated articles. The method is called`,
    options: [
      `Vehicle transmission`,
      `Vector transmission`,
      `Air borne method`,
      `Fomite borne method`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fomite borne method`
  },
  {
    question: `Disease associated with secretion of toxin is`,
    options: [
      `Tetanus`,
      `Tuberculosis`,
      `Food poisoning`,
      `AIDS`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Tetanus`
  },
  {
    question: `The spleen I. is a large bean-shaped organ II. mainly contains lymphocytes and phagocytes III. acts as a filter of the blood by trapping blood-borne microorganisms Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Necessary steps for achieving good health are I. awareness about disease II. vaccination III. proper disposal of wastes IV. maintenance of hygienic food and water resources V. Water resources The correct combination having necessary steps is`,
    options: [
      `I, II and III`,
      `II, III and IV`,
      `I, III and IV`,
      `I, II, III and IV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III and IV`
  },
  {
    question: `Tumour viruses or cancer causing viruses called …A… have …B… . Here A and B refers to`,
    options: [
      `A-oncogenic bacteria; B-bacterial oncogenes`,
      `A-oncogenic viruses, B-viral oncogenes`,
      `A-oncogenic protozoan; B-protozoan oncogenes`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A-oncogenic viruses, B-viral oncogenes`
  },
  {
    question: `Hybridomas are the fusion product of`,
    options: [
      `Normal antibody producing cell with myeloma`,
      `Abnormal antibody producing cell with myeloma`,
      `Sex cells with myeloma`,
      `Bone cells with myeloma`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Normal antibody producing cell with myeloma`
  },
  {
    question: `Which one of the following is a stimulant?`,
    options: [
      `LSD`,
      `Cocaine`,
      `Opium`,
      `Heroin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cocaine`
  },
  {
    question: `Resistance against pathogens is due to`,
    options: [
      `Antibodies`,
      `RBCs`,
      `Haemoglobin`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Antibodies`
  },
  {
    question: `Widal test is used for the diagnosis of`,
    options: [
      `Malaria`,
      `Pneumonia`,
      `Tuberculosis`,
      `Typhoid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Typhoid`
  },
  {
    question: `An insect bite may result in inflammation of that spot. That is triggered by the alarm chemicals such as`,
    options: [
      `Histamine and dopamine`,
      `Histamine and kinins`,
      `Interferons and opsonin`,
      `Interferons and histones`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Histamine and kinins`
  },
  {
    question: `Defect in amino acid metabolism may result in`,
    options: [
      `Albinism`,
      `Porphyria`,
      `Wilson’s disease`,
      `Phenylketonuria P a g e | 21`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Phenylketonuria P a g e | 21`
  },
  {
    question: `The pathogen of typhoid is directly transmitted through`,
    options: [
      `Urine`,
      `Water`,
      `Blood`,
      `Hormone`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Water`
  },
  {
    question: `The Philadelphia chromosome is found in the patients suffering from`,
    options: [
      `Albinism`,
      `Hepatitis`,
      `Insomnia`,
      `Leukaemia`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Leukaemia`
  },
  {
    question: `Which of the following disorders can be regrded as madness?`,
    options: [
      `Psychosis`,
      `Epilepsy`,
      `Insomnia`,
      `Parkinsonism`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Psychosis`
  },
  {
    question: `Nicotine intake stimulates the …A… to release …B… and …C… into blood circulation. This lead to increase in …D… and an increase …E… . Here A and E refers to`,
    options: [
      `A-adrenal gland, B-adrenaline, C-nor-adrenaline, D-blood pressure, E-heart rate`,
      `A-thyroid gland, B-thyroxine, C-parathyroxine, D-blood pressure, E-heart rate`,
      `A-adrenal gland, B-thyroxine, C-nor-adrenaline, D-blood pressure, E-heart rate`,
      `A-gonads, B-adrenaline, C-nor-adrenaline, D-blood pressure, E-heart rate`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-adrenal gland, B-adrenaline, C-nor-adrenaline, D-blood pressure, E-heart rate`
  },
  {
    question: `Allergy involves`,
    options: [
      `IgE`,
      `IgG`,
      `IgA`,
      `IgM`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) IgE`
  },
  {
    question: `Which of the following body systems is responsible for allergic reaction?`,
    options: [
      `Lymph`,
      `Immune`,
      `Circulatory`,
      `All of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Immune`
  },
  {
    question: `The process of removal and replacement of the damaged tissues or organs like heart, eye, liver, kidney with healthy ones from a donar is called as`,
    options: [
      `Transplantation`,
      `Repair and replacement`,
      `Replacement theraphy`,
      `Transformation`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Transplantation`
  },
  {
    question: `Which of the following is the correct matching of a disease with its causative organism and mode of infection? Diseas -es Causativ -e Organis- ms Modes of Infection`,
    options: [
      `Pneu- monia Streptoc -occus pneumo nia Droplet infection`,
      `Typho -id Salmone -lla typhi With inspired air`,
      `Malari -a Plasmod -ium vivax Bite of infected male Anophel- es mosquit o-o`,
      `Eleph- antiasi s Wuchere -ria bancrofti With contami- nated food and water`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Pneu- monia Streptoc -occus pneumo nia Droplet infection`
  },
  {
    question: `In which of the following, optical fibres are used?`,
    options: [
      `Sonography`,
      `Endoscopy`,
      `MRI`,
      `CT-scan P a g e | 22`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Endoscopy`
  },
  {
    question: `Electron beam therapy is a kind of radiation therapy to treat`,
    options: [
      `Enlarged prostate gland`,
      `Gall bladder stones by breaking them`,
      `Certain types of cancer`,
      `Kidney stones`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Certain types of cancer`
  },
  {
    question: `Antivenom is used for the treatment of snake bite. The treatment of snake bite by antivenom is an example of`,
    options: [
      `Passive immunisation`,
      `Active immunization`,
      `Autoimmunization`,
      `Innate immunization`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Passive immunisation`
  },
  {
    question: `Rhinovirus causes`,
    options: [
      `Common cold`,
      `Malaria`,
      `AIDS`,
      `Pneumonia`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Common cold`
  },
  {
    question: `Which of the following protozoans attack gums in man?`,
    options: [
      `Entamoeba gingivalis`,
      `Trichomonas`,
      `Giardia`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Entamoeba gingivalis`
  },
  {
    question: `Heroin is also known by the name of`,
    options: [
      `Hemp`,
      `Smack`,
      `Coke`,
      `Bhang`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Smack`
  },
  {
    question: `Female 𝐴𝑛𝑜𝑝ℎ𝑒𝑙𝑒𝑠 mosquito is a vector of`,
    options: [
      `Filaria`,
      `Malaria`,
      `Typhoid`,
      `AIDS`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Malaria`
  },
  {
    question: `Wuchereria bancrofti is`,
    options: [
      `A Platyhelminthes`,
      `Only host in man`,
      `Causing blockage of lymphatic vessel`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Causing blockage of lymphatic vessel`
  },
  {
    question: `The confirmatory test used to diagnose AIDS is`,
    options: [
      `ELISA`,
      `Schick`,
      `WIDAL`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ELISA`
  },
  {
    question: `Hepatitis-B is also called`,
    options: [
      `Epidemic jaundice`,
      `Serum jaundice`,
      `Catarrhal jaundice`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Serum jaundice`
  },
  {
    question: `Malignant malaria is caused by`,
    options: [
      `Plasmodium falciparum`,
      `Plasmodium ovale`,
      `Plasmodium vivax`,
      `Plasmodium malariae`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Plasmodium falciparum`
  },
  {
    question: `In ultrasonography`,
    options: [
      `Antigen-antibody interaction occur`,
      `High frequency sound waves are used`,
      `Magnetic waves are used`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) High frequency sound waves are used`
  },
  {
    question: `Lung cancer is caused by`,
    options: [
      `Tabacco smoke`,
      `X-rays`,
      `UR rays`,
      `Vehicle smoke`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Tabacco smoke`
  },
  {
    question: `Which one of the following pairs of diseases are viral as well as transmitted by mosquitoes?`,
    options: [
      `Elephantiasis and dengue`,
      `Malaria and yellow fever`,
      `Ringworm and dengue`,
      `Yellow fever and dengue`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Yellow fever and dengue`
  },
  {
    question: `Ringworm is a`,
    options: [
      `Air borne disease`,
      `Infectious disease`,
      `Non-infectious disease`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Infectious disease`
  },
  {
    question: `Which of these may cause hypothermia in humans?`,
    options: [
      `Smoking`,
      `LSD`,
      `Dopamine`,
      `Alcohol consumption`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Alcohol consumption`
  },
  {
    question: `Transformation of normal cell cancerous cell is induced by`,
    options: [
      `Carcinogens`,
      `UV-rays`,
      `Neoplastic cells`,
      `Mutagens`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Carcinogens`
  },
  {
    question: `Drugs, that are normally used as medicines to help the patients cope with mental illness are`,
    options: [
      `Barbiturates`,
      `Amphetamines`,
      `Lysergic acid diethyl amides`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `The foetus receives immunoglobulin from their mother, through`,
    options: [
      `Placenta`,
      `Skin`,
      `Mouth`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Placenta`
  },
  {
    question: `Measures for personal hygiene include I. Intake of clean drinking water II. Keeping the body clean III. Disinfection of water resources P a g e | 23 Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) II and III`
  },
  {
    question: `Which of the following cells are involved in defence mechanism of the body?`,
    options: [
      `Macrophages`,
      `Neutrophils`,
      `Lymphocytes`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `If a certain patient is suspected to be suffering from typhoid. Which diagnostic technique will you recommend for its detection?`,
    options: [
      `ELISA`,
      `WIDAL`,
      `MRI`,
      `CT scan`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) WIDAL`
  },
  {
    question: `Consider the following statements about biomedical technologies. I. During open heart surgery, blood is circulated in the heart-lung machine. II. Blockage in coronary arteries is removed by angiography. III. Computerised Axial Tomography (CAT) shows detailed internal structure as seen in a section of body. IV. X-ray provides clear and detailed images of organs like prostate glands and lungs. Which two of the above statements are correct?`,
    options: [
      `II and IV`,
      `III and IV`,
      `I and III`,
      `I and II`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and III`
  },
  {
    question: `The intermediate host of the parasite that causes Tashkent ulcers is`,
    options: [
      `Glossina palpalis`,
      `Phlebotomus argentipes`,
      `Phlebotomus papatassi`,
      `Triatoma infestans`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Phlebotomus papatassi`
  },
  {
    question: `The major phagocytic cells are`,
    options: [
      `Antibody`,
      `Antigen`,
      `Lymphocytes`,
      `Macrophages`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Macrophages`
  },
  {
    question: `Full form MALT is`,
    options: [
      `Mucosal Associated Lymphoid Tissue`,
      `Memory Associated Lymphoid Tissue`,
      `Memory Associated Lymphocyte Tissue`,
      `Mucosa Associated Lymphocyte Tissue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Mucosal Associated Lymphoid Tissue`
  },
  {
    question: `Ishihara chart is used to detect`,
    options: [
      `TB`,
      `Eye sight`,
      `Colour blindness`,
      `diabetes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Colour blindness`
  },
  {
    question: `Mast cell is a cell of …A… of vertebrate animals. Mast cells mediate inflammatory responses such as …B……. . Mast cells store a number of different chemical mediators including …C… and …D… . Here A to D refers to`,
    options: [
      `A-immune system, B-allergic reactions, C- histamine, D-serotonin`,
      `A-bone marrow, B-allergic reactions, C-mucous, D- cerumen`,
      `A-thymus, B-allergic reactions, C-histamine, D- cerumen`,
      `A-immune system, B-allergic reactions, C- cerumen, D-serotonin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-immune system, B-allergic reactions, C- histamine, D-serotonin`
  },
  {
    question: `HIV is a …A… , which means it has genes composed of …B… like all viruses, HIV replicates inside the host cells. Its considered a retrovirus because it uses an enzymes, …C…, to convert …D….. into …E… . Here A to E refers to`,
    options: [
      `A-retrovirus, B-RNA, C-reverse transcriptase, D-RNA, E-DNA`,
      `A-retroviral, B-DNA, C-reverse transcriptase, D-DNA, E-RNA`,
      `A-rhinovirus, B-DNA, C-reverse transcriptase, D-DNA, E-RNA`,
      `A-adenovirus, B-RNA, C-reverse transcriptase, D-RNA, E-DNA`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-retrovirus, B-RNA, C-reverse transcriptase, D-RNA, E-DNA`
  },
  {
    question: `The specific parts of the antibody molecule that binds the antigen are called`,
    options: [
      `Heavy chain`,
      `Small chain`,
      `Antigen binding site`,
      `Antibody bindings side`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Antigen binding site`
  },
  {
    question: `Interferon is a type of protein, which is used to cure`,
    options: [
      `Homeostatic disorder`,
      `Hepatitis caused by virus`,
      `Common cold caused by virus`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c)`
  },
  {
    question: `Chancroid is a sexually transmitted disease caused by`,
    options: [
      `Treponema`,
      `Haemphilus`,
      `Neisseria`,
      `Chlamydia P a g e | 24`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Haemphilus`
  },
  {
    question: `Antiviral substances are`,
    options: [
      `Antibiotics`,
      `Antibodies`,
      `Interferons`,
      `Vaccines`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Interferons`
  },
  {
    question: `Which one of the following statements is correct with respect to AIDS?`,
    options: [
      `The HIV can be transmitted through eating food together with an infected person`,
      `Drug addicts are least susceptible to HIV infection`,
      `AIDS patients are being fully cured cent per cent with proper care and nutrition`,
      `The causative HIV retrovirus enters helper T-lymphocytes thus, reducing their numbers`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The causative HIV retrovirus enters helper T-lymphocytes thus, reducing their numbers`
  },
  {
    question: `An autoimmune disease where the body’s own antibodies attack the cells of the thyroid is called`,
    options: [
      `Hyperthyroidism`,
      `Hashimoto’s disease`,
      `Grave’s disease`,
      `Turner’s syndrome`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Hashimoto’s disease`
  },
  {
    question: `A sexually transmitted disease, symptomized by the development of ulcers on the genitals, is caused by the infection of`,
    options: [
      `Treponema pallidum`,
      `Neisseria gonorrhoeae`,
      `Human Immunodeficiency Virus`,
      `Hepatitis-B virus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Treponema pallidum`
  },
  {
    question: `Smoking addiction is harmful because it produces polycyclic aromatic hydrocarbons, which cause`,
    options: [
      `Reduction in oxygen transport`,
      `Increase in blood pressure`,
      `Cancer`,
      `Retardation of growth of foetus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Cancer`
  },
  {
    question: `The process, in which antibody comes in contact with antigen and convert them in harmless insoluble matter, is called`,
    options: [
      `Activation`,
      `Agglutination`,
      `Neutralization`,
      `Opsonization`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Agglutination`
  },
  {
    question: `Which one of the following diseases is caused by virus?`,
    options: [
      `Cholera`,
      `Diphtheria`,
      `Measles`,
      `Whooping cough`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Measles`
  },
  {
    question: `In India, there is decline in female population as compared to males, this is because of`,
    options: [
      `Less female reach reproductive age`,
      `Number of female children are born less as there is more chance of prenatal death in case of female child`,
      `Female infanticide`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Female infanticide`
  },
  {
    question: `Hepatitis is a`,
    options: [
      `Viral diseases`,
      `Bacterial diseases`,
      `Fungal diseases`,
      `Protozoan diseases`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Viral diseases`
  },
  {
    question: `Critical state of disease is called`,
    options: [
      `Acme`,
      `Acromion`,
      `Acholin`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acme`
  },
  {
    question: `Who among the following established the scientific basis of vaccination?`,
    options: [
      `Edward Jenner`,
      `George Kohler`,
      `Louis Pasteur`,
      `Von Behring`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Edward Jenner`
  },
  {
    question: `The first antibiotic was discovered by`,
    options: [
      `A Fleming`,
      `W Flemming`,
      `R Koch`,
      `Louis Pasteur`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A Fleming`
  },
  {
    question: `Malaria is caused by`,
    options: [
      `Plasmodium vivax`,
      `Plasmodium malariae`,
      `Plasmodium falciparum`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `AIDS stands for`,
    options: [
      `Acquired Immuno Deficiency Syndrome`,
      `Acquired Immuno Deficiency Sign`,
      `Acquired Immuno Deficiency System`,
      `Acquired Immuno Deficiency Structure`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acquired Immuno Deficiency Syndrome`
  },
  {
    question: `Which of the following is the most sparsely populated satate of India?`,
    options: [
      `Manipur`,
      `Rajasthan`,
      `Meghalaya`,
      `Arunachal Pradesh`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Arunachal Pradesh`
  },
  {
    question: `In ECG, what does T-wave represent?`,
    options: [
      `Diastole of auricles`,
      `Diastole of ventricles`,
      `Systole of ventricles`,
      `Diastole of auricles and ventricles P a g e | 25`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Diastole of ventricles`
  },
  {
    question: `Marriageable age of girl and boys is`,
    options: [
      `21 and 24`,
      `18 and 21`,
      `15 and 18`,
      `18 and 24`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 18 and 21`
  },
  {
    question: `Which cell secretes antibody?`,
    options: [
      `Lymphocytes`,
      `Monocytes`,
      `Eosinophils`,
      `Neuterophils`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Lymphocytes`
  },
  {
    question: `Which one of the following diseases causes dry, scaly lesions on skin, nails and scalp?`,
    options: [
      `Ringworm`,
      `Skin allergy`,
      `Botulism`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ringworm`
  },
  {
    question: `The invasion of cancerous cells from one part of the body to another of body is called`,
    options: [
      `Contact inhibition`,
      `Metastasis`,
      `Benign tumour`,
      `Tumour`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Metastasis`
  },
  {
    question: `Malignant tumours are I. mass of neoplastic cells II. cells that grow very rapidly and damaging the surrounding normal tissue III. cells that show the property of metastisis Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `An example of innate immunity is`,
    options: [
      `PMNL- neutrophils`,
      `T- lymophocytes`,
      `B-lymphocytes`,
      `TH - cells`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) PMNL- neutrophils`
  },
  {
    question: `Lung tuberculosis is caused by`,
    options: [
      `Pseudomonas aeruginosa`,
      `Mycobacterium tuberculosis`,
      `Streptococcus pneumoniae`,
      `Escherichia coli`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mycobacterium tuberculosis`
  },
  {
    question: `Which one of the following is not correctly matched?`,
    options: [
      `Glossina palpalis - Sleeping sickness`,
      `Culex - Filariasis`,
      `Aedes aegypti - Yellow fever`,
      `Anopheles culifacies - Leishmaniasis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Anopheles culifacies - Leishmaniasis`
  },
  {
    question: `HIV virus affect………. In AIDS patient.`,
    options: [
      `Cytotoxic T-cell`,
      `M-N cell`,
      `Suppressor cell`,
      `Helper T-cell`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Helper T-cell`
  },
  {
    question: `A person likely to develop tetanus is immunized by administering`,
    options: [
      `Dead germs`,
      `Performed antibodies`,
      `Wide spectrum antibiotics`,
      `Weakened germs`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Performed antibodies`
  },
  {
    question: `Your immune system helps to protect you against viruses and bacteria that can cause sickness. Which cells are part of the immune system?`,
    options: [
      `White blood cells`,
      `Red blood cells`,
      `Nerve cells`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) White blood cells`
  },
  {
    question: `Consider the following statements I. The property of metastasis is shown by malignant tumours II. Carcinogens are the agents that causes cancer III. Benign tumour causes little damage to body cells Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Gonorrhea is caused by`,
    options: [
      `Treponema pallidum`,
      `Entamoeba gingivalis`,
      `Mycobacterium leprae`,
      `Neisseria gonorrhoeae`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Neisseria gonorrhoeae`
  },
  {
    question: `To obtain a standard ECG, a patient is connected to the machine with three electrodes`,
    options: [
      `One to each wrist and to left ankle`,
      `One to each ankle and the left wrist`,
      `One to each wrist and to the left chest region`,
      `One to each ankle and to the left chest region`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) One to each ankle and to the left chest region`
  },
  {
    question: `Typhoid is caused by`,
    options: [
      `Bacteria`,
      `Virus`,
      `Protozoa`,
      `Fungus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Bacteria`
  },
  {
    question: `X-rays are used in`,
    options: [
      `ECG`,
      `EEG`,
      `CT-scan`,
      `Endoscopy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) CT-scan`
  },
  {
    question: `Side effects of anabolic steroids in females include I. masculinization II. aggressiveness III. mood swings, depression IV. abnormal menstrual cycle V. excessive facial and body hair Choose the correct option`,
    options: [
      `I, II and III`,
      `I, II, III and IV`,
      `II, III, IV and V`,
      `I, II, III, IV and V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III, IV and V`
  },
  {
    question: `Amphetamines are the drugs of`,
    options: [
      `Narcotics`,
      `Sedatives`,
      `Stimulants`,
      `hallucinogens`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Stimulants`
  },
  {
    question: `Which of the following birth control measure can be considered as the safest?`,
    options: [
      `The rhythm method`,
      `The use of physical barriers`,
      `Termination of unwanted pregnancy`,
      `Sterilization techniques`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sterilization techniques`
  },
  {
    question: `Aspirin is a/an`,
    options: [
      `Antibiotic`,
      `Antipyretic`,
      `Antiseptic`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antipyretic`
  },
  {
    question: `Flemming, Chain and Florey were awarded the Nobel Prize in 1945 for the discovery of`,
    options: [
      `HIV`,
      `CT scan`,
      `Penicillin`,
      `Staphylococcus`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Penicillin`
  },
  {
    question: `Heroin is obtained from plant of family`,
    options: [
      `Papaveraceae`,
      `Leguminosae`,
      `Cruciferae`,
      `Liliaceae`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Papaveraceae`
  },
  {
    question: `Rejection of tissue or graft transplants is brought about mainly by`,
    options: [
      `Cytotoxic T-cells`,
      `Suppressor T-cells`,
      `B-cells`,
      `Macrophages`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cytotoxic T-cells`
  },
  {
    question: `Each antibody has …A… polypeptide chains, …B… small chains called ….C… chains and …D… longer chains called …E… chains The antibody, therefore, is represented as …F… Here A to F refers to`,
    options: [
      `A-four, B-two, C-light, D-two, E-heavy, F-H2L2`,
      `A-six, B-three, C-light, D-three, E-heavy, F-H3L2`,
      `A-two, B-one, C-light, D-one, E-heavy, F-H1L1`,
      `A-five, B-two, C-light, D-three, E-heavy, F-H2L2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-four, B-two, C-light, D-two, E-heavy, F-H2L2`
  },
  {
    question: `Antibodies are produced by`,
    options: [
      `Leucocytes`,
      `Lymphocytes`,
      `Erythrocytes`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lymphocytes`
  },
  {
    question: `The test, which is misused for identification of an unborn baby is`,
    options: [
      `Clotting test`,
      `Amniocentesis`,
      `Erythroblastosis`,
      `aniogram`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Amniocentesis`
  },
  {
    question: `Heroin`,
    options: [
      `Is a depressant`,
      `Slows down body functions`,
      `As commonly called smack`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Which of the following is used in eye inflammation and for curing night blindness?`,
    options: [
      `Atropa belladonna`,
      `Cichorium intybus`,
      `Eclipta alba`,
      `Emilia sonchifolia`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Emilia sonchifolia`
  },
  {
    question: `Transmission of HIV infection from infected mother to her child occurs through`,
    options: [
      `Liver`,
      `Placenta`,
      `Skin`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Placenta`
  },
  {
    question: `Smack is a drug obtained from the`,
    options: [
      `Latex of Papaver somniferum`,
      `Leaves of Cannabis sativa`,
      `Flowers of Datura`,
      `Fruits of Erythroxylum coca`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Latex of Papaver somniferum`
  },
  {
    question: `Maurer’s dots are observed in the erythrocytes of man if these are infected with P a g e | 27`,
    options: [
      `Plasmodium malariae`,
      `Plasmodium vivax`,
      `Plasmodium falciparum`,
      `Plasmodium ovale`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Plasmodium falciparum`
  },
  {
    question: `The Ig that mediates allergic reaction is`,
    options: [
      `IgM`,
      `IgG`,
      `IgE`,
      `IgA`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) IgE`
  },
  {
    question: `Antibodies are the glycoproteins which`,
    options: [
      `Provides localized protection in external secretions against bacteria and viruses`,
      `Involved in allergic and hypersensitivity`,
      `Helps in complement activation`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Which malaria parasite has longest incubation period?`,
    options: [
      `Plasmodium. vivax`,
      `P.falciparum`,
      `p. malariae`,
      `p. ovale`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) p. malariae`
  },
  {
    question: `Which of the following is a characteristics of antibodies?`,
    options: [
      `Carbohydrate structure`,
      `Composed of heavy and light polypeptide chains`,
      `Three binding sites per antibody monomer`,
      `All of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Composed of heavy and light polypeptide chains`
  },
  {
    question: `AIDS is caused by`,
    options: [
      `Virus`,
      `Bacteria`,
      `Protozoa`,
      `Fungi`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Protozoa`
  },
  {
    question: `Which one of the following techniques is used for the detection of cancers?`,
    options: [
      `Magnetic Resonance Imaging (MRI)`,
      `Radiography (X-ray)`,
      `Computed Tomography (CT)`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `𝑃𝑙𝑎𝑠𝑚𝑜𝑑𝑖𝑢𝑚 is a`,
    options: [
      `Symbiont`,
      `Parasite`,
      `Saprophyte`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Parasite`
  },
  {
    question: `In the immune system, interferons are part of`,
    options: [
      `Physiological barriers`,
      `Cellular barriers`,
      `Physical barriers`,
      `Cytokine barriers`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Physiological barriers`
  },
  {
    question: `A transplant between individuals of the same species, but with different MHC/HLA alleles is`,
    options: [
      `Autograft`,
      `Isograft`,
      `Xenograft`,
      `Allograft`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Allograft`
  },
  {
    question: `The function of IgE is`,
    options: [
      `Mediate in allergic response`,
      `Activation of B-cells`,
      `Protection from inhaled and ingested pathogens`,
      `Stimulation of complement system, passive immunity of foetus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Mediate in allergic response`
  },
  {
    question: `Opium is extracted from`,
    options: [
      `Atropa belladona`,
      `Papaver somniferum`,
      `Vinca rosea`,
      `Azadirachta indica`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Papaver somniferum`
  },
  {
    question: `Which of the following causes prostate cancer?`,
    options: [
      `Chromium`,
      `Cadmium oxide`,
      `Vinyl chloride`,
      `Aflatoxins`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cadmium oxide`
  },
  {
    question: `Salmonella is related with`,
    options: [
      `Typhoid`,
      `Polio`,
      `TB`,
      `Tetanus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid`
  },
  {
    question: `Diphtheria is caused by`,
    options: [
      `Poisons released by living bacterial cells into the host tissues`,
      `Poisons released from dead bacterial cells into the host tissues`,
      `Poisons released by virus into host tissues`,
      `Excessive immune response by the host’s body`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Poisons released by living bacterial cells into the host tissues`
  },
  {
    question: `HIV can not be transmitted through the following options except by`,
    options: [
      `Hugging`,
      `Sharing foods`,
      `Using public toilet`,
      `Sharing razor blades`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sharing razor blades`
  },
  {
    question: `Small proteins produced by vertebrate cells naturally in response to viral infections and which inhibit multiplication of viruses are called P a g e | 28`,
    options: [
      `Immunoglobulins`,
      `Interferons`,
      `Antitoxins`,
      `Lipoproteins`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Interferons`
  },
  {
    question: `In the metropolitan cities of India, many children are suffering from allergy or asthma. What are the main causes of this problem? I. Due to sensitivity to the environment II. Because of the protected environment provided early in life III. Modern-day life style`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Which one of the following is the correct statement regarding the particular psychotropic drug specified?`,
    options: [
      `Hashish causes alter through perception and hallucinations`,
      `Opium stimulates nervous system and causes hallucinations`,
      `Morphine leads to delusions and disturbed emotions`,
      `Barbiturates cause relaxation and temporary euphoria`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hashish causes alter through perception and hallucinations`
  },
  {
    question: `To confirm ELISA for AIDS, we used`,
    options: [
      `Western blotting`,
      `Northern blotting`,
      `Southern blotting`,
      `Eastern blotting`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Western blotting`
  },
  {
    question: `Which is not cancer?`,
    options: [
      `Leukaemia`,
      `Trachoma`,
      `Carcinoma`,
      `Sarcoma`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Trachoma`
  },
  {
    question: `DTP vaccine is given for`,
    options: [
      `Tetanus, polio, plague`,
      `Diphtheria, whooping cough and leprosy`,
      `Diphtheria, pneumonia, tetanus`,
      `Diphtheria, whooping cough, tetanus`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Diphtheria, whooping cough, tetanus`
  },
  {
    question: `Sickle cell anaemia has not been eliminated from the African population because`,
    options: [
      `It is controlled by recessive genes`,
      `It is not a fatal disease`,
      `It provides immunity against malaria`,
      `It is controlled by dominant genes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) It provides immunity against malaria`
  },
  {
    question: `A person is injected with globulin against hepatitis. This is`,
    options: [
      `Artificially acquired passive immunity`,
      `Artificially acquired active immunity`,
      `Naturally acquired active immunity`,
      `Naturally acquired passive immunity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Artificially acquired passive immunity`
  },
  {
    question: `An alkaloid called ‘Reserpine’ is extracted from`,
    options: [
      `Leaves of ashwagandha`,
      `Roots of sarpagandha`,
      `Leaves of sarpagandha`,
      `Roots of ashwagandha`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Roots of sarpagandha`
  },
  {
    question: `Human immunodeficiency virus causes`,
    options: [
      `Acquired immuno deficiency syndrome`,
      `Anthrax`,
      `Tuberculosis`,
      `Polio`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Acquired immuno deficiency syndrome`
  },
  {
    question: `In heavy smokers, the alveoil of the lungs are enlarged and damaged, which reduces the surface area for the exchange of respiratory gases. The condition is called`,
    options: [
      `Asthma`,
      `Silicosis`,
      `Emphhysema`,
      `Insomnia`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Emphhysema`
  },
  {
    question: `𝐸𝑛𝑡𝑎𝑚𝑜𝑒𝑏𝑎 ℎ𝑖𝑠𝑡𝑜𝑙𝑦𝑡𝑖𝑐𝑎 feeds on`,
    options: [
      `Liver`,
      `Small intestine`,
      `Large intestine`,
      `WBCs`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Large intestine`
  },
  {
    question: `Identify the wrongly matched pair.`,
    options: [
      `Typhoid - Widal test`,
      `Plague - Viral disease`,
      `Malignant malaria - Plasmodium falciparum`,
      `Common cold - Rhinovirus P a g e | 29`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Plague - Viral disease`
  },
  {
    question: `At which stage of HIV infection does one usually shows symptoms of AIDS?`,
    options: [
      `When viral DNA is produced by reverse transcriptase`,
      `When HIV replicates rapidly in helper T-lymphocytes and damages large number of these`,
      `With 15 days of sexual contact with an infected person`,
      `When the infecting retrovirus enters host cells`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) When HIV replicates rapidly in helper T-lymphocytes and damages large number of these`
  },
  {
    question: `Consider the following statements I. Dead cells of the skin prevents pathogen entry II. Skin secretes oil that makes skin surface acidic III. Skin secretes sweat that makes surface acidic Which of the statement given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Symptoms of allergic reaction includes`,
    options: [
      `Watery eyes`,
      `Running nose`,
      `Respiratory complaints`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `A person has developed interferon in his body. He seems to carry an infection of`,
    options: [
      `Typhoid`,
      `Filariasis`,
      `Malaria`,
      `Measles`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid`
  },
  {
    question: `Human population growth is`,
    options: [
      `Lag`,
      `Stationary`,
      `Exponential`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Exponential`
  },
  {
    question: `Malarial parasite is introduced into the blood of man as a`,
    options: [
      `Metacryptozoite`,
      `Schizont`,
      `Oocyte`,
      `Sporozoite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sporozoite`
  },
  {
    question: `Expanded from of ELISA is`,
    options: [
      `Enzyme Linked Immuno Sorbent Assay`,
      `Enzyme Linked Ion Sorbent Assay`,
      `Enzyme Linked Inductive Assay`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Enzyme Linked Immuno Sorbent Assay`
  },
  {
    question: `Elephantiasis causing organism belong to`,
    options: [
      `Aschelminthes`,
      `Platyhelminthes`,
      `Cnidaria`,
      `Porifera`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Aschelminthes`
  },
  {
    question: `Which of the following is not hallucinogen?`,
    options: [
      `Heroin`,
      `LSD`,
      `Marijuana`,
      `Charas`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Heroin`
  },
  {
    question: `Which one of the following acts as a physiological barrier to the entry of microorganisms in human body?`,
    options: [
      `Tears`,
      `Monocytes`,
      `Skin`,
      `Epithelium of urogenital tract`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Tears`
  },
  {
    question: `The truck drivers usually take`,
    options: [
      `Amphetamines`,
      `LSD`,
      `Caffeine`,
      `morphine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Amphetamines`
  },
  {
    question: `Short lived immunity acquired from mother to foetus across placenta or through mother’s milk to the infant is categorized as`,
    options: [
      `Active immunity`,
      `Passive immunity`,
      `Cellular immunity`,
      `Innate or non-specific immunity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Passive immunity`
  },
  {
    question: `Cancer cells are more easily damaged by radiation than normal cells because they are`,
    options: [
      `Starved of mutation`,
      `Undergoing rapid division`,
      `Different in structure`,
      `Non-dividing`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Undergoing rapid division`
  },
  {
    question: `Cattle fed with spoilt hay to sweet clover, which contains dicumarol`,
    options: [
      `are healthier due to good diet`,
      `Catch infections easily`,
      `May suffer with vitamin-K deficiency and prolonged bleeding`,
      `May suffer from beri-beri due to deficiency of vitamin-B`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) May suffer with vitamin-K deficiency and prolonged bleeding`
  },
  {
    question: `Which of the following are the reasons for rheumatoid arthritis? Choose the correct option I. Lymphocytes become more active P a g e | 30 II. Body attacks self cells III. More antibodies are produced in the body IV. The ability to differentiate pathogens or foreign molecules from self cells to lost`,
    options: [
      `I and II`,
      `II and IV`,
      `III and IV`,
      `I and III`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) II and IV`
  },
  {
    question: `In which of the following disorders, person will become hypersensitive about ones look?`,
    options: [
      `Hypochondria`,
      `Anxiety`,
      `Mood`,
      `Phobia`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Hypochondria`
  },
  {
    question: `Warning signs of drug and alcohol abuse includes I. Drop in academic performance II. Absence from school/college III. Lack of interest in personal hygiene IV. Isolation, depression, fatigue, aggressive and rebellious behavior`,
    options: [
      `I, II and III`,
      `I, III and IV`,
      `II, III and IV`,
      `I, II, III and IV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III and IV`
  },
  {
    question: `How does antigen-determinant differ from antigen binding site?`,
    options: [
      `By its structure`,
      `By its location`,
      `By its function`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Infective stage to man of the parasite that causes haematuria is`,
    options: [
      `Miracidium`,
      `Redia`,
      `Microfilaria`,
      `Cercaria`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cercaria`
  },
  {
    question: `Health is affected by I. genetic disorders II. infections III. life style Which of the key words given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Normal cell have genes called …A… which are present in inactiveated state but under certain conditions like …B… they get transformed to …C… Here A, B and C refers to`,
    options: [
      `A-cellular oncogenes, B-mutation, C-cancer causing oncogenes`,
      `A-proto-oncogenes, B-mutation, C-disease causing genes`,
      `A-viral oncogenes, B-mutation, C-tomour causing genes`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-cellular oncogenes, B-mutation, C-cancer causing oncogenes`
  },
  {
    question: `Purified antibiotic penicillin of Penicillium notatum was discovered by`,
    options: [
      `Alexander Fleming`,
      `Howard Floxy`,
      `Robert Hooke`,
      `Carolus Linnaeus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Alexander Fleming`
  },
  {
    question: `Amoebiasis is caused by`,
    options: [
      `Plasmodium`,
      `Entamoeba histolytica`,
      `House files`,
      `Contaminated food and water`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Entamoeba histolytica`
  },
  {
    question: `Which of the following drugs can be used to reduce allergic reaction due to unavoidable substances? I. Anti-histamine II. Adrenaline III. Steroids`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Thymus is …A… at the time puberty but it …B… with age. Here A and B refers to`,
    options: [
      `A-large; B-reducing`,
      `A-small; B-increasing`,
      `A-large; B-disappear`,
      `A-not present; B-appears`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-large; B-reducing`
  },
  {
    question: `Which one is not a symptom of disease caused by 𝐸. ℎ𝑖𝑠𝑡𝑜𝑙𝑦𝑡𝑖𝑐𝑎?`,
    options: [
      `Stools with excess mucous`,
      `Constipation`,
      `Abdominal pain`,
      `Nasal discharge`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Nasal discharge`
  },
  {
    question: `Choose the wrong statement`,
    options: [
      `HIV has RNA as its genetic material`,
      `HIV replicates in TH-lymphocytes`,
      `Antiretroviral drugs are partially effective for AIDS treatment`,
      `The time-lag between the infection and appearance of AIDS symptoms may vary from few hours to a week`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The time-lag between the infection and appearance of AIDS symptoms may vary from few hours to a week`
  },
  {
    question: `Human health can be maintained by P a g e | 31`,
    options: [
      `Balanced diet`,
      `Personal hygiene`,
      `Regular exercise`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Genetic counsellors can identify heterozygous individuals by`,
    options: [
      `Height of individuals`,
      `Colour of individuals`,
      `Screening procedures`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Screening procedures`
  },
  {
    question: `Electric potential of the brain is recoreded by`,
    options: [
      `CT scan`,
      `Sphygmomanometer`,
      `ECG`,
      `EEG`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) EEG`
  },
  {
    question: `Jaundice is a disease of`,
    options: [
      `Pancreas`,
      `Kidney`,
      `Liver`,
      `Duodenum`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Liver`
  },
  {
    question: `T-lymphocytes differentiate and matured in`,
    options: [
      `Bone marrow`,
      `Kidneys`,
      `Liver`,
      `Thymus gland`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thymus gland`
  },
  {
    question: `Fever in malaria is due to`,
    options: [
      `Release of merozoites from RBCs`,
      `Entry of sporozoites into blood capillaries`,
      `Entry of cryptomerozoites into RBCs`,
      `Entry of merozoites into liver cells`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Release of merozoites from RBCs`
  },
  {
    question: `The figure given below shows an antibody molecule. Name the parts 𝐴, 𝐵 and 𝐶`,
    options: [
      `A-Antigen binding site, B-Heavy chain, C-Light chain`,
      `A-Antibody binding site, B-Light chain, C-Heavy chain`,
      `A-Antigen binding site, B-Short chain, C-Long chain`,
      `A-Antibody binding site, B-Long chain, C-Short chain`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Antigen binding site, B-Heavy chain, C-Light chain`
  },
  {
    question: `A vaccine meant for protection against tuberculosis is`,
    options: [
      `BCG`,
      `DPT`,
      `TT`,
      `BGC`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) DPT`
  },
  {
    question: `Which one of the following pairs is not correctly matched?`,
    options: [
      `Vitamin-B12 ________ Pernicious anaemia`,
      `Vitamin-B6 _______ Loss of appetite`,
      `Vitamin-B1 ________ Beri-beri`,
      `Vitamin-B2 ________ Pellagar`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Vitamin-B2 ________ Pellagar`
  },
  {
    question: `An example of liquid tumour is`,
    options: [
      `Glioblastoma`,
      `Adenocarcinoma`,
      `Chondrosarcoma`,
      `Myelocytic leukaemia`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Myelocytic leukaemia`
  },
  {
    question: `The drug ‘cyclosporin’ used for organ transplant patients is obtained from a`,
    options: [
      `Bacterium`,
      `Fungus`,
      `Virus`,
      `Plant`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fungus`
  },
  {
    question: `Sand fly spreads a particular type of disease by its`,
    options: [
      `proboscis`,
      `Mandible`,
      `Salivary gland`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) proboscis`
  },
  {
    question: `Which of the following disease caused internal bleeding, muscular pain, fever, anaemia and blockage of the intestinal passage?`,
    options: [
      `Ascariasis`,
      `Filariasis`,
      `Amoebiasis`,
      `Trypanosomiasis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Ascariasis`
  },
  {
    question: `Which of the following statement is not true about HIV/AIDS?`,
    options: [
      `HIV is a contagious disease`,
      `HIV weakened and destroy the immune system`,
      `Attack the T-cytotoxic cells of immune system`,
      `AIDS was first reported in 1981`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Attack the T-cytotoxic cells of immune system`
  },
  {
    question: `Ascariasis is caused by an endoparasite of human …A… commonly called …B… . Here A and B refers to`,
    options: [
      `A-Ascaris suum; B-tapeworm`,
      `A-Ascaris lumbricoides; B-roundworm`,
      `A-Ascaris worm; B-flatworm`,
      `A-Ascaris secernentea; B-liver worm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A-Ascaris lumbricoides; B-roundworm`
  },
  {
    question: `Aedes aegypati is a vector for P a g e | 32`,
    options: [
      `Both dengue and yellow fever`,
      `Dengue fever`,
      `Yellow fever`,
      `Japanese encephalitis`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Both dengue and yellow fever`
  },
  {
    question: `Mainly allergic reactions occur in`,
    options: [
      `Metro cities`,
      `Urban areas`,
      `Rural areas`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Metro cities`
  },
  {
    question: `Which one of the following non-infectious disease is the major cause of death in humans?`,
    options: [
      `Cancer`,
      `AIDS`,
      `Asthma`,
      `Typhoid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cancer`
  },
  {
    question: `Which is correct pair of pathogen and its vector?`,
    options: [
      `Plasmodium and Anopheles`,
      `Plasmodium and culex`,
      `Virus and Anopheles`,
      `Protozoan and Aedes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Plasmodium and Anopheles`
  },
  {
    question: `Haemozoin is released into blood during the infection of Plasmodium vivax at every`,
    options: [
      `24 h`,
      `48 h`,
      `72 h`,
      `12 h`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 48 h`
  },
  {
    question: `The opposite to acquired immunity is`,
    options: [
      `Active immunity`,
      `Passive immunity`,
      `Innate immunity`,
      `B-cell immunity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Innate immunity`
  },
  {
    question: `Hepatitis-B vaccine is produced from`,
    options: [
      `Yeast`,
      `Bacteriophase`,
      `Bacteria`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Yeast`
  },
  {
    question: `Sphygmomanometer measures`,
    options: [
      `Nerve conduction rate`,
      `Heart beat rate`,
      `Blood pressure`,
      `Pulse rate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Heart beat rate`
  },
  {
    question: `Take the odd one out.`,
    options: [
      `Rabies, influenza, AIDS`,
      `Amoebiasis, giardiasis, trypanosomiasis`,
      `Taeniasis, ascariasis, elephantiasis`,
      `Cancer, tuberculosis, tetanus`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cancer, tuberculosis, tetanus`
  },
  {
    question: `The drug useful to increase cardiovascular effects in human beings is`,
    options: [
      `Cocaine`,
      `Barbiturate`,
      `Benzodiazepine`,
      `Insulin`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cocaine`
  },
  {
    question: `Magic bullets are the`,
    options: [
      `Recombinant vaccines`,
      `Monoclonal antibodies`,
      `Chemotherapy drugs for cancer`,
      `Anabolic steroids`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Monoclonal antibodies`
  },
  {
    question: `Your immune system helps to protect you against viruses and bacteria that can cause sickness. Which cell is a part of immune system?`,
    options: [
      `White memory`,
      `Red blood T-cells`,
      `Nerve cells B-cells`,
      `All of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) White memory`
  },
  {
    question: `Which one of the following is correct matching of a vitamin, its nature and its deficiency disease?`,
    options: [
      `Vitamin-A-Fat soluble-Night blindness`,
      `Vitamin-K- Fat soluble- Beri beri`,
      `Vitamin-A- Fat soluble-Beri beri`,
      `Vitamin-K- Water soluble-Pellagra`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Vitamin-A-Fat soluble-Night blindness`
  },
  {
    question: `In India, AIDS was reported in`,
    options: [
      `1932`,
      `1986`,
      `1990`,
      `1992`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1986`
  },
  {
    question: `Immunological destruction of body tissue or its products due to antibodies reacting with it as foreign antigen is called`,
    options: [
      `Immunodeficiency disease`,
      `Auto-immune disease`,
      `Prophylaxis`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Auto-immune disease`
  },
  {
    question: `Consider the following statements about ascariasis I. Eggs of parasite are excreted along with contaminated water, soil and plants II. Infection takes place through contaminated vegetable fruits and water Choose the correct combination`,
    options: [
      `I-True; II-True`,
      `I-False; II-False`,
      `I-True; II-False`,
      `I-False; II-True`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) I-True; II-True`
  },
  {
    question: `Anaemia is due to deficiency of`,
    options: [
      `Ca`,
      `Fe`,
      `Mg`,
      `P`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fe`
  },
  {
    question: `Which of the following diseases is spread by housefly?`,
    options: [
      `Dengue fever`,
      `Encephalitis`,
      `Filariasis`,
      `Typhoid`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Typhoid`
  },
  {
    question: `HIV belongs to which of the following families of viruses?`,
    options: [
      `Retrovirus`,
      `Togavirus`,
      `Adenovirus`,
      `Lentivirus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Retrovirus`
  },
  {
    question: `Neurasthenia refers to`,
    options: [
      `Undue concern about health P a g e | 33`,
      `Traumatic experience like rape`,
      `Disorder of sensory perception`,
      `Mental inability to concentrate on or enjoy things`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Mental inability to concentrate on or enjoy things`
  },
  {
    question: `Grafting of tissue or organ between individuals of different species is called`,
    options: [
      `Autograft`,
      `Isograft`,
      `Xenograft`,
      `Allograft`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Xenograft`
  },
  {
    question: `Passive immunization include`,
    options: [
      `Transfer of lymphocyte directly`,
      `Transfer of maternal antibodies across placenta to the foetus`,
      `Introduction of antibodies`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c)`
  },
  {
    question: `Ultrasound of how much frequency is beamed into human body for sonography?`,
    options: [
      `30-45 MHz`,
      `15-30 MHz`,
      `1-15 MHz`,
      `45-70 MHz`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1-15 MHz`
  },
  {
    question: `The tests that are used in the diagnosis of AIDS are`,
    options: [
      `ELISA and immunoblot`,
      `Northern blot and ELISA`,
      `ELISA and southern blot`,
      `Western blot and ELISA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Western blot and ELISA`
  },
  {
    question: `The complexes formed during immune complex mediated hypersensitivity are removed by`,
    options: [
      `Eosinophils and Tc cells`,
      `Monocytes and B-lymopocytes`,
      `Eosinophils and monocytes`,
      `Eosinophils and basophils`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Eosinophils and Tc cells`
  },
  {
    question: `If a person is feeding only on meat, egg and milk then he will suffer from`,
    options: [
      `Nightblindness`,
      `Scurvy`,
      `Rickets`,
      `Beri-beri`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Rickets`
  },
  {
    question: `The method , which yields the best pictorial from and does not expose the patient to potentially harmful ionizing radiations is`,
    options: [
      `X-ray radiography`,
      `Angiography`,
      `Computed tomography`,
      `Magnetic resonance imaging`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Magnetic resonance imaging`
  },
  {
    question: `Human Immunodeficiency Virus (HIV) I. belongs to the group retrovirus II. has RNA genome enclosed in an envelope Which of the statements given above are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Physical carcinogens are`,
    options: [
      `UV-rays`,
      `X-rays`,
      `γ-rays`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Immunity gained after an infection is called`,
    options: [
      `Active immunity`,
      `Innate immunity`,
      `Passive immunity`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Active immunity`
  },
  {
    question: `Which of the following method is used for detection of antibodies?`,
    options: [
      `Competitive ELISA`,
      `Indirect or sandwich ELISA`,
      `Antibody class captive ELISA`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Antibody production is assisted by`,
    options: [
      `Monocytes`,
      `Natural killer cells`,
      `T-lymphocytes`,
      `Phagocyte`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) T-lymphocytes`
  },
  {
    question: `Which of the following substances can cure Parkinson’s disease?`,
    options: [
      `GABA`,
      `Acetylcholine`,
      `Dopamine`,
      `Glutamic acid`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dopamine`
  },
  {
    question: `Tetunas disease is caused by`,
    options: [
      `Virus`,
      `Bacteria`,
      `Fungi`,
      `Mycoplasma`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Bacteria`
  },
  {
    question: `Interferon is a type of`,
    options: [
      `Anti-bacterial protein`,
      `Anti-viral protein`,
      `Complex protein`,
      `Anti-clotting protein`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anti-viral protein`
  },
  {
    question: `Humoral immunity is also called as`,
    options: [
      `Antibody mediate immunity`,
      `Non-specific immune response`,
      `Antigen mediated immunity`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Antibody mediate immunity`
  },
  {
    question: `Select the true statements I. Cancer can be detected by the use of antibodies against cancer specific antigens for certain type of cancer P a g e | 34 II. The tumour cells are surgically removed to reduce the load of cancerous cells III. Certain chemotherapeutic drugs are used to kill the cancerous cells, but majority of the drugs have side affects like hair loss, anaemia, etc.`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `The type of antibody present in colostrum secreted by mammary gland during the initial days of lactation is`,
    options: [
      `IgA`,
      `IgM`,
      `IgG`,
      `IgE`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) IgA`
  },
  {
    question: `Increased asthmatic attacks in certain seasons are related to`,
    options: [
      `Hot and humid environment`,
      `Eating fruits preserved in tin containers`,
      `Inhalation of seasonal pollen`,
      `Low temperature`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Inhalation of seasonal pollen`
  },
  {
    question: `Intermediate host of 𝑊𝑢𝑐ℎ𝑒𝑟𝑒𝑟𝑖𝑎 is`,
    options: [
      `Female Anopheles`,
      `Female Aedes`,
      `Female Culex`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Female Culex`
  },
  {
    question: `First line of defence include`,
    options: [
      `Skin`,
      `Mucous coating`,
      `Lysozyme secretion from eyes`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `If a quick immune response is needed as in tetanus infection, preformed antibodies or antitoxin is injected into the patient body. This type of immunization is called……`,
    options: [
      `Active immunization`,
      `Passive immunisation`,
      `Innate immunity`,
      `Humoral immunity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Passive immunisation`
  },
  {
    question: `The full form of SCID is`,
    options: [
      `Secondary communicable Internal Disease`,
      `Secondary communicable Infectious Disease`,
      `Severe Communicable Immuno Deficiency`,
      `Severe Communicable Infectious Disease`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Severe Communicable Immuno Deficiency`
  },
  {
    question: `Which of the following is STD?`,
    options: [
      `Cancer`,
      `Malaria`,
      `Pneumonia`,
      `Trichomoniasis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Trichomoniasis`
  },
  {
    question: `Common symptoms of amoebiasis are`,
    options: [
      `Constipation, stool with blood clots`,
      `Abdominal pain and cramp`,
      `Weakness`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Foetal abnormalities are caused by`,
    options: [
      `LSD`,
      `Opium`,
      `Nicotine`,
      `Alcohol`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) LSD`
  },
  {
    question: `Activity of brain is recorded by`,
    options: [
      `ECG`,
      `EEG`,
      `MET`,
      `CT`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) EEG`
  },
  {
    question: `MRI is not allowed in the following conditions except one. Identify the exception`,
    options: [
      `Presence of pace-maker in the body`,
      `Pregnant women`,
      `Person suffering from stroke`,
      `Presence of metallic plate in the body from treatment of broken bones`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Presence of pace-maker in the body`
  },
  {
    question: `Antibody`,
    options: [
      `Induce formation of antigen`,
      `Helps in production of WBCs`,
      `Is formed by WBC`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Is formed by WBC`
  },
  {
    question: `The AIDS virus spreads by decreasing`,
    options: [
      `Killer T-cells`,
      `Helper T-cells`,
      `Suppressor T-cells`,
      `Carrier T-cells`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Suppressor T-cells`
  },
  {
    question: `Which one of the following disease is sexually transmitted disease`,
    options: [
      `Cancer`,
      `Syphilis`,
      `Diphtheria`,
      `Myocarditis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Syphilis`
  },
  {
    question: `Consider the following statements I. Cocaine interferes with the transport of the neurotransmitter dopamine II. It is usually taken by sniffing and snorting III. It has a potential stimulating action on the central nervous system Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `Which of the following disease is caused by bacteria 𝑆𝑎𝑙𝑚𝑜𝑛𝑒𝑙𝑙𝑎 𝑡𝑦𝑝ℎ𝑖?`,
    options: [
      `Typhoid`,
      `Pneumonia`,
      `Malaria`,
      `Cold P a g e | 35`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Typhoid`
  },
  {
    question: `Which one of the following is used for external application in the cure of leprosy?`,
    options: [
      `Rice bran oil`,
      `Neem seed oil`,
      `Cotton seed oil`,
      `Groundnut oil`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neem seed oil`
  },
  {
    question: `Incubation period of Plasmodium vivax is`,
    options: [
      `14 days`,
      `30 days`,
      `40 days`,
      `32 days`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 14 days`
  },
  {
    question: `The antibody dependent cytotoxicity is seen in`,
    options: [
      `Generalized anaphylaxis`,
      `Local anaphylaxis`,
      `Non-compatible blood transfusion`,
      `Immune complex reaction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Non-compatible blood transfusion`
  },
  {
    question: `The letter T in T-lymphocyte refers to`,
    options: [
      `Thyroid`,
      `Thalamus`,
      `Tonsil`,
      `Thymus`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thymus`
  },
  {
    question: `Which of the following pairs is correct?`,
    options: [
      `E. coli - Entamoeba histolytica`,
      `Culex - Elephantiasis`,
      `Bed bug - Kala-azar`,
      `Plasmodium - sleeping sickness`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Culex - Elephantiasis`
  },
  {
    question: `Which of the following are symptoms of radiation disease?`,
    options: [
      `Red and ulcered skin`,
      `Nausea and loss of hair`,
      `Nausea and anaemia`,
      `Ulcered skin, anaemia, nausea and loss of hair`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Ulcered skin, anaemia, nausea and loss of hair`
  },
  {
    question: `Amniocentesis detects`,
    options: [
      `Deformity in brain`,
      `Deformity in heart`,
      `Hereditary diseases`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Removal or absence of thymus in early life shall bring about`,
    options: [
      `Lack of laymphocytes`,
      `Lack of antibodies`,
      `Lack of lymph nodes`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Lack of lymph nodes`
  },
  {
    question: `Which of the following is an opiate narcotic?`,
    options: [
      `Morphine`,
      `LSD`,
      `Amphetamines`,
      `Barbiturates`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Morphine`
  },
  {
    question: `Ultrasound is produced by`,
    options: [
      `Lead bead`,
      `Lead zirconate`,
      `Lithium chloride`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Lead zirconate`
  },
  {
    question: `The gland often referred in relation to AIDS is`,
    options: [
      `Adrenal`,
      `Thyroid`,
      `Thymus`,
      `Pituitary`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Thymus`
  },
  {
    question: `LSD is derived from`,
    options: [
      `Claviceps purpurea`,
      `Pseudomonas putida`,
      `Cannabis indica`,
      `Cannabis sativa`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Claviceps purpurea`
  },
  {
    question: `Which among the following is an autoimmune disease?`,
    options: [
      `Rheumatoid arthritis`,
      `AIDS`,
      `Hepatitis-B`,
      `Swine flue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Rheumatoid arthritis`
  },
  {
    question: `Which of the following disorders is not hereditary?`,
    options: [
      `Haemophilia`,
      `Cataract`,
      `Sickle cell anaemia`,
      `Colour blindness`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cataract`
  },
  {
    question: `Which of the following diseases is not caused by virus?`,
    options: [
      `Mumps`,
      `Rabies`,
      `AIDS`,
      `Tuberculosis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tuberculosis`
  },
  {
    question: `Which of the following provides immunity to digestive tract against antigen?`,
    options: [
      `IgA`,
      `IgD`,
      `IgG`,
      `IgE`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) IgA`
  },
  {
    question: `The group of diseases carried (transmitted) by insects is`,
    options: [
      `Typhoid, jaundice, tuberculosis`,
      `Mumps, measles, smallpox`,
      `Scrabies, ringworm, swine flu`,
      `Malaria, filaria, yellow fever`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Malaria, filaria, yellow fever`
  },
  {
    question: `Which one of the following diseases is communicable?`,
    options: [
      `Rickets`,
      `Amoebiasis`,
      `Diabetes`,
      `Cancer`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Amoebiasis`
  },
  {
    question: `𝑃𝑙𝑎𝑠𝑚𝑜𝑑𝑖𝑢𝑚 completes its life cycle in`,
    options: [
      `One host`,
      `Two host`,
      `Multiple host`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Two host`
  },
  {
    question: `‘Mammalian thymus’ is mainly concerned with`,
    options: [
      `Regulation of body temperature`,
      `Regulation of body growth`,
      `Immunological functions`,
      `Secretion of thyrotropin`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Immunological functions`
  },
  {
    question: `Match the correct combination`,
    options: [
      `Leishamania donovani _____Sleeping sickness`,
      `Wuchereria bancrofit ____ Filariasis P a g e | 36`,
      `Amoeba proteus _________ Kala-azar`,
      `Anopheles maculipennis _____ Malaria`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Wuchereria bancrofit ____ Filariasis P a g e | 36`
  },
  {
    question: `Transmission of HIV occurs by I. sexual contact with infected person II. transfusion of contaminated blood III. sharing infected needless IV. from infected mother to her baby through placenta Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II, III and IV`,
      `I, II, III and IV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II, III and IV`
  },
  {
    question: `Which of the following is a viral disease?`,
    options: [
      `TB`,
      `Diphtheria`,
      `Small pox`,
      `All of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Small pox`
  },
  {
    question: `Cirrhosis is`,
    options: [
      `Alcohol related disease`,
      `Smoke related disease`,
      `Junk food related disease`,
      `Polluted air related disease`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Alcohol related disease`
  },
  {
    question: `Identify the hepatitis virus, which cannot survive independently and requires another hepatitis virus for its multiplication.`,
    options: [
      `Hepatitis-A virus`,
      `Hepatitis-B virus`,
      `Hepatitis-C virus`,
      `Hepatitis-D virus`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Hepatitis-D virus`
  },
  {
    question: `Excessive dosage of cocaine causes`,
    options: [
      `Hallucination`,
      `Respiratory disorders`,
      `Cardiovascular failure`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `The disease elephantiasis is caused by`,
    options: [
      `Protozoan`,
      `Bacteria`,
      `Virus`,
      `Worm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Worm`
  },
  {
    question: `Which of the following causes cancer of vagina?`,
    options: [
      `Cadmium oxide`,
      `Diethyl stilbestrol`,
      `Aflatoxin`,
      `Vinyl chloride`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Diethyl stilbestrol`
  },
  {
    question: `Cyclosporin A, which is used as an immunosuppressive agent, is produced by`,
    options: [
      `Aspergillus`,
      `Clostridium`,
      `Saccharomyces`,
      `Trichoderma`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Trichoderma`
  },
  {
    question: `AIDS virus contains`,
    options: [
      `RNA with protein`,
      `RNA with protein`,
      `DNA without protein`,
      `DNA only`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DNA without protein`
  },
  {
    question: `In a g raph of population, on x-axis time and on y-axis population is plotted. A parallal line to x-axis shows`,
    options: [
      `Natality increases mortality decreases`,
      `Natality equal to mortality`,
      `Natality decreases mortality increases`,
      `Natality constant mortality increases`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Natality equal to mortality`
  },
  {
    question: `Antipoison against snake venom contains`,
    options: [
      `Antigen`,
      `Antibody`,
      `Hormone`,
      `Enzyme substrate complex`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Antibody`
  },
  {
    question: `Which one of the following is a bacterial dieases?`,
    options: [
      `Measles`,
      `Chicken pox`,
      `Rabies`,
      `Tuberculosis`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Tuberculosis`
  },
  {
    question: `Where will you look for the sporozoites of the malarial parasite?`,
    options: [
      `RBCs of humans suffering from malaria`,
      `Spleen of infected person`,
      `Salivary glands of freshly moulted female Anopheles mosquito`,
      `Saliva of infected female Anopheles mosquito`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Saliva of infected female Anopheles mosquito`
  },
  {
    question: `The lymph nodes I. are small solid structures throughout the body II. filter lymph fluid as it flows through them, trapping bacteria, viruses and other antigens, which are them destroyed by lymphocytes Which of the statements given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `Active immunity may be acquired by`,
    options: [
      `Natural infection`,
      `Vaccines`,
      `Toxoids`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which of the following is used in analysis of metabolic and physiological process of tissue?`,
    options: [
      `Sonography`,
      `CT-Scan`,
      `NMR`,
      `ECG`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) NMR`
  },
  {
    question: `Smokeless tobacco causes P a g e | 37`,
    options: [
      `Oral cancer`,
      `Lung cancer`,
      `Bronchitis`,
      `Heart disease`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Oral cancer`
  },
  {
    question: `The treatment of snake-bite by antivenin is an example of`,
    options: [
      `Artificially acquired active immunity`,
      `Artificially acquired passive immunity`,
      `Naturally acquired passive immunity`,
      `Specific natural immunity`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Artificially acquired passive immunity`
  },
  {
    question: `ECG is a measure of`,
    options: [
      `Rate of heart beat`,
      `Difference in electric potential`,
      `Volume of blood pumped`,
      `Ventricular contraction`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Rate of heart beat`
  },
  {
    question: `The carnivorous fish used for eradication of mosquito larva in stagnated water is`,
    options: [
      `Gambusia`,
      `Anabas`,
      `Rohu`,
      `Catla catla`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Gambusia`
  },
  {
    question: `Which of the following options is not appropriate for anxiety disorder?`,
    options: [
      `Perspiration occurs`,
      `Distorted thoughts`,
      `In this condition, person reacts very strongly to any situation of stress`,
      `Heart beats increase`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Perspiration occurs`
  },
  {
    question: `The intermediate host of Schistosoma is`,
    options: [
      `Snail`,
      `Mosquito`,
      `Housefly`,
      `Sheep`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Snail`
  },
  {
    question: `A male showing aggressiveness, mood swings, depression, reduction of size of the testicles, decreased sperm production, breast enlargement premature baldness. Possibly he is taking`,
    options: [
      `Anabolic steroids`,
      `Heroin`,
      `Marijuana`,
      `Morphine`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Anabolic steroids`
  },
  {
    question: `Alteration of which genes leads to cancer?`,
    options: [
      `Cell proliferation gene(proto-oncogenes)`,
      `Tumour suppressor gene`,
      `Tumour virus gene`,
      `All of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Tumour suppressor gene`
  },
  {
    question: `Which one of the following can help in the diagnosis of a genetical disorder?`,
    options: [
      `ELISA`,
      `ABO blood group`,
      `PCR`,
      `NMR`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) PCR`
  },
  {
    question: `Cells involved in immune system is/are`,
    options: [
      `Leukocytes`,
      `Blood platelets`,
      `Thrombocytes`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Leukocytes`
  },
  {
    question: `Vaccine for tuberculosis is known as`,
    options: [
      `PAS vaccine`,
      `BCG vaccine`,
      `OPV`,
      `DPT`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) BCG vaccine`
  },
  {
    question: `Smoking causes many types of cancer including cancer of`,
    options: [
      `Lungs`,
      `Urinary bladder`,
      `Throat`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `Which of the following disease is caused by protozoan and transmitted by mosquito?`,
    options: [
      `Pneumonia`,
      `Malaria`,
      `Filariasis`,
      `Typhoid`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Malaria`
  },
  {
    question: `In India, the population control programme launched in`,
    options: [
      `1955`,
      `1976`,
      `1901`,
      `1987`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1976`
  },
  {
    question: `Pathogenicity of bacteria causing tuberculosis and leprosy is due to`,
    options: [
      `Cholesterol`,
      `Ergosterol`,
      `Prostaglandins`,
      `Wax-D`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Wax-D`
  },
  {
    question: `𝑃𝑙𝑎𝑠𝑚𝑜𝑑𝑖𝑢𝑚, a small protozoan causes`,
    options: [
      `Malaria`,
      `Filariasis`,
      `Amoebiasis`,
      `Typhoid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Malaria`
  },
  {
    question: `A non-communicable disease is`,
    options: [
      `Measles`,
      `Rabies`,
      `Diphtheria`,
      `Diabetes`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Diabetes`
  },
  {
    question: `Innate immunity is also called`,
    options: [
      `Familial`,
      `Inborn`,
      `Genetic`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `HIV affects …… in AIDS patients P a g e | 38`,
    options: [
      `Cytotoxic cells`,
      `Killer T-cells`,
      `Suppressor cell`,
      `Helper T-cell`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Helper T-cell`
  },
  {
    question: `VCRC stands for`,
    options: [
      `Vaccine Creation Research Center`,
      `Vector Control Research Center`,
      `Venum Control Research Center`,
      `Vital Chemical ReleaseC`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Vector Control Research Center`
  },
  {
    question: `Quinine used for treatment of malarial fever, is extracted form`,
    options: [
      `Atropa belladona`,
      `Cinchona officinalis`,
      `Aconitum napellus`,
      `Rauwolffia serpentina`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cinchona officinalis`
  },
  {
    question: `Which of the following is an example is an example of carcinoma?`,
    options: [
      `Melanoma cancer of skin`,
      `Cancer of lymph gland`,
      `Cancer of muscle`,
      `Cancer of blood`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Melanoma cancer of skin`
  },
  {
    question: `Which Ig is produced in primary immune response?`,
    options: [
      `IgA`,
      `IgE`,
      `IgG`,
      `IgM`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) IgM`
  },
  {
    question: `Peyer’s patches are found in`,
    options: [
      `Liver`,
      `Small intestine`,
      `Large intestine`,
      `Spleen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Small intestine`
  },
  {
    question: `The filariasis pathogens are transmitted to a healthy person through the bite of`,
    options: [
      `Female mosquito`,
      `Housefly`,
      `Cockroach`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Female mosquito`
  },
  {
    question: `Biolistic technique is used in`,
    options: [
      `Tissue culture process`,
      `Gene transfer process`,
      `Hybridization process`,
      `Germplasm conservation process`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Gene transfer process`
  },
  {
    question: `Which one of the following is protozoan disease?`,
    options: [
      `Polio`,
      `AIDS`,
      `Taeniasis`,
      `Malaria`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Malaria`
  },
  {
    question: `Consider the following statements about AIDS. I. AIDS patient become easily infected by bacteria, viruses and even parasites II. The person is unable to protect himself against any infection III. National AIDS Control Organisation (NACO) and non-governmental organization are trying their best to educate people about AIDS Which of the statements given above are correct?`,
    options: [
      `I and II`,
      `I and III`,
      `II and III`,
      `I, II and III`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I, II and III`
  },
  {
    question: `A certain patient is suspected to be suffering from acquired immuno deficiency syndrome. Which diagnostic technique will you recommend for its detection`,
    options: [
      `MIRI`,
      `Ultra Sound`,
      `WIDAL`,
      `ELISA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) ELISA`
  },
  {
    question: `The causative agent of mad-cow disease is a`,
    options: [
      `Bacterium`,
      `Prion`,
      `Worm`,
      `Virus`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Prion`
  },
  {
    question: `Which one of the following is not the property of cancerous cells?`,
    options: [
      `They do not require extracellular growth factors`,
      `They do not remain confined in the area of formation`,
      `They show contact inhibition`,
      `They divide in an uncontrolled manner`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) They show contact inhibition`
  },
  {
    question: `Regarding lymphocytes consider the following statement I. The T-lymphocytes form Cell Mediated Immune System (CMIS) II. The T-lymphocytes cells do not secrete antibodies but help the B-lymphocyte cell to produce them Which of the statement given above is/are correct?`,
    options: [
      `Only I`,
      `Only II`,
      `I and II`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) I and II`
  },
  {
    question: `HIV was reported in 1981 and isolated by`,
    options: [
      `Pasteur`,
      `Mantagnier`,
      `Robert Hook`,
      `Hansen`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mantagnier`
  },
  {
    question: `In the sigmoid curve of growth, the alphabets indicate the sequence of events. Choose the correct option where the alphabet specifies the event. P a g e | 39`,
    options: [
      `A-Phase of slow growth B- Phase of exponential growth C- Phase of diminishing growth D-Stationary phase`,
      `A- Phase of rapid growth B- Phase of diminishing growth C- Stationary phase D- Phase of slow growth`,
      `A- Diminishing growth B- exponential growth C- Slow growth D- Stationary phase`,
      `A- Stationary phase B- Phase of slow growth C- Phase of rapid growth D- Phase of diminishing growth`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A- Phase of rapid growth B- Phase of diminishing growth C- Stationary phase D- Phase of slow growth`
  },
  {
    question: `𝐴𝑠𝑐𝑎𝑟𝑖𝑠 is also known as`,
    options: [
      `Roundworm`,
      `Flatworm`,
      `Tapeworm`,
      `Liverworm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Roundworm`
  },
  {
    question: `Which of the following helps in differentiation of cells of the immune system`,
    options: [
      `Thymosin`,
      `Thyroxine`,
      `Cortisol`,
      `Steroid`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Thymosin`
  },
  {
    question: `Common symptoms of typhoid are`,
    options: [
      `High fever and weakness`,
      `Stomach pain and constipation`,
      `Headache and loss of appetite`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `The immune system may at times reject certain tissues of a person’s own body as ‘non-self’. This breakdown of the body’s self-recognition system is called …A… The auto-immune reactions cause a variety of diseases known as ….B… . …C… is an autoimmune disease. The most appropriate option providing A, B and C correctly is`,
    options: [
      `A-autoimmunity, B-autoimmune disease, C-rheumatoid arthritis`,
      `A-immunodeficiency, B-immunodeficiency disease, C-AIDS`,
      `A-severe combined immunodeficiency, B-congenital disease, C-Addison’s disease`,
      `A-autoimmunity, B-secondary immunodeficiency disease, C-diabetes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-autoimmunity, B-autoimmune disease, C-rheumatoid arthritis`
  },
  {
    question: `The word NACO stands for`,
    options: [
      `National AIDS Control Organisation`,
      `Non-Governmental AIDS Control Organisation`,
      `National Agrochemical Organisation`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) National AIDS Control Organisation`
  },
  {
    question: `Ringworm is caused by`,
    options: [
      `Bacteria`,
      `Virus`,
      `Protozoa`,
      `Fungi`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Fungi`
  },
  {
    question: `Given below the diagrammatic representation of lymph nodes P a g e | 40 Label 𝐴, 𝐵 and 𝐶`,
    options: [
      `A-Lymph nodes, B-Thymus, C-Lymphatic vessels`,
      `A-Lymphatic vessels, B-Thyroid, C-Lymph nodes`,
      `A-Tonsils, B-Peyer’s patchs, C-Lymphatic vessels`,
      `A-Tonsils, B-Thymus, C-Peyer’s patches`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A-Lymph nodes, B-Thymus, C-Lymphatic vessels`
  },
  {
    question: `Consider the following four statements (I-IV) regarding kidney transplant and select the two correct ones out of these. I .Even if a kidney transplant is proper the recipient may need to take immuno-suppressants for a long time. II. The cell-mediated immune response is responsible for the graft rejection. III. The B-lymphocytes are responsible for rejection of the graft. IV. The acceptance or rejection of a kidney transplant depends on specific interferons. The two correct statements are`,
    options: [
      `II and III`,
      `III and IV`,
      `I and III`,
      `I and II`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) I and II`
  },
  {
    question: `The rejection of organ transplanting in humans is prevented by using`,
    options: [
      `Aspirin`,
      `Cyclosporine`,
      `Calcitionin`,
      `Thrombin`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cyclosporine`
  },
  {
    question: `Examination of blood of a person suspected of having anaemia, shows large, immature, nucleated erythrocytes without haemoglobin. Supplementing his diet with which of the following, is likely to alleviate his symptoms?`,
    options: [
      `Thiamine`,
      `Folic acid and cobalamine`,
      `Riboflavin`,
      `Iron compounds`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Iron compounds`
  },
  {
    question: `The inability to distinguish between self cells and non-self cells may lead to`,
    options: [
      `Hypersensitivity`,
      `Immunodeficiency`,
      `Autoimmune disease`,
      `Allergy`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Autoimmune disease`
  }
];
