// ============================================================
//  QUIZ LIST CONFIG
// ============================================================

const QUIZ_LIST = [
  // ---- Class 10 GyanPoints ----
  {
    id: "udaan-chem",
    title: "Class 10 Chemistry (GyanPoints)",
    description: "465 MCQs from GyanPoints Class 10",
    questionsFile: "quizzes/udaan-chem.js",
    duration: 120,
    icon: "fa-flask",
    color: "#EF4444"
  },
  {
    id: "udaan-physics",
    title: "Class 10 Physics (GyanPoints)",
    description: "148 MCQs from GyanPoints Class 10",
    questionsFile: "quizzes/udaan-physics.js",
    duration: 120,
    icon: "fa-bolt",
    color: "#F59E0B"
  },
  {
    id: "udaan-bio",
    title: "Class 10 Biology (GyanPoints)",
    description: "234 MCQs from GyanPoints Class 10",
    questionsFile: "quizzes/udaan-bio.js",
    duration: 120,
    icon: "fa-dna",
    color: "#10B981"
  },
  {
    id: "udaan-maths-a",
    title: "Class 10 Maths Part-A (GyanPoints)",
    description: "410 MCQs from GyanPoints Class 10",
    questionsFile: "quizzes/udaan-maths-a.js",
    duration: 120,
    icon: "fa-square-root-alt",
    color: "#8B5CF6"
  },
  {
    id: "udaan-maths-b",
    title: "Class 10 Maths Part-B (GyanPoints)",
    description: "393 MCQs from GyanPoints Class 10",
    questionsFile: "quizzes/udaan-maths-b.js",
    duration: 120,
    icon: "fa-calculator",
    color: "#6366F1"
  },
  // ---- Class 12 Maths (KVS SSM) ----
  {
    id: "class12-ch03",
    title: "Class 12 Maths: Matrices",
    description: "30 MCQs – KVS Student Support Material",
    questionsFile: "quizzes/class12-ch03.js",
    duration: 40,
    icon: "fa-th",
    color: "#6366F1"
  },

  // ---- Maths (from PDF) ----
  {
    id: "jee-binomial-theorem",
    title: "JEE Maths: Binomial Theorem",
    description: "130+ MCQs with LaTeX equations – JEE/CBSE",
    questionsFile: "quizzes/jee-binomial-theorem.js",
    duration: 120,
    icon: "fa-superscript",
    color: "#7C3AED"
  },

  // ---- LaTeX / MathJax demo ----
  {
    id: "latex-demo",
    title: "LaTeX Equations Demo",
    description: "10 questions with MathJax – fractions, physics, chemistry",
    questionsFile: "quizzes/latex-demo.js",
    duration: 15,
    icon: "fa-square-root-alt",
    color: "#7C3AED"
  },

  // ---- NEET / JEE (from PDFs) ----
  {
    id: "neet-human-health",
    title: "NEET: Human Health and Disease",
    description: "573 MCQs from study material",
    questionsFile: "quizzes/neet-human-health.js",
    duration: 180,
    icon: "fa-heartbeat",
    color: "#EF4444"
  },
  {
    id: "neet-biomolecules",
    title: "NEET: Biomolecules",
    description: "629 MCQs from study material",
    questionsFile: "quizzes/neet-biomolecules.js",
    duration: 180,
    icon: "fa-dna",
    color: "#10B981"
  },
  {
    id: "jee-current-electricity",
    title: "JEE/NEET: Current Electricity",
    description: "1073 MCQs from study material",
    questionsFile: "quizzes/jee-current-electricity.js",
    duration: 180,
    icon: "fa-bolt",
    color: "#F59E0B"
  },
  // ---- Class 10 Science (from PDF Question Bank) ----
  {
    id: "class10-ch01",
    title: "Class 10 Sci Ch1: CHEMICAL REACTIONS AND EQUATIONS",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch01.js",
    duration: 20,
    icon: "fa-flask",
    color: "#EF4444"
  },
  {
    id: "class10-ch02",
    title: "Class 10 Sci Ch2: ACIDS, BASES AND SALTS",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch02.js",
    duration: 20,
    icon: "fa-vial",
    color: "#F59E0B"
  },
  {
    id: "class10-ch03",
    title: "Class 10 Sci Ch3: METALS AND NON-METALS",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch03.js",
    duration: 20,
    icon: "fa-atom",
    color: "#10B981"
  },
  {
    id: "class10-ch04",
    title: "Class 10 Sci Ch4: CARBON AND ITS COMPOUNDS",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch04.js",
    duration: 20,
    icon: "fa-leaf",
    color: "#22C55E"
  },
  {
    id: "class10-ch05",
    title: "Class 10 Sci Ch5: PERIODIC CLASSIFICATION OF ELEMENTS",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch05.js",
    duration: 20,
    icon: "fa-dna",
    color: "#06B6D4"
  },
  {
    id: "class10-ch06",
    title: "Class 10 Sci Ch6: LIFE PROCESSES",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch06.js",
    duration: 20,
    icon: "fa-brain",
    color: "#8B5CF6"
  },
  {
    id: "class10-ch07",
    title: "Class 10 Sci Ch7: CONTROL AND COORDINATION",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch07.js",
    duration: 20,
    icon: "fa-heart",
    color: "#EC4899"
  },
  {
    id: "class10-ch08",
    title: "Class 10 Sci Ch8: HOW DO ORGANISMS REPRODUCE?",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch08.js",
    duration: 20,
    icon: "fa-eye",
    color: "#6366F1"
  },
  {
    id: "class10-ch09",
    title: "Class 10 Sci Ch9: HEREDITY AND EVOLUTION",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch09.js",
    duration: 20,
    icon: "fa-bolt",
    color: "#EAB308"
  },
  {
    id: "class10-ch10",
    title: "Class 10 Sci Ch10: LIGHT \u2013 REFLECTION AND REFRACTION",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch10.js",
    duration: 20,
    icon: "fa-magnet",
    color: "#14B8A6"
  },
  {
    id: "class10-ch11",
    title: "Class 10 Sci Ch11: THE HUMAN EYE AND THE COLOURFUL WORLD",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch11.js",
    duration: 20,
    icon: "fa-sun",
    color: "#F97316"
  },
  {
    id: "class10-ch12",
    title: "Class 10 Sci Ch12: ELECTRICITY",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch12.js",
    duration: 20,
    icon: "fa-globe",
    color: "#3B82F6"
  },
  {
    id: "class10-ch13",
    title: "Class 10 Sci Ch13: MAGNETIC EFFECTS OF ELECTRIC CURRENT",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch13.js",
    duration: 20,
    icon: "fa-recycle",
    color: "#84CC16"
  },
  {
    id: "class10-ch14",
    title: "Class 10 Sci Ch14: SOURCES OF ENERGY",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch14.js",
    duration: 20,
    icon: "fa-tree",
    color: "#059669"
  },
  {
    id: "class10-ch15",
    title: "Class 10 Sci Ch15: OUR ENVIRONMENT",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch15.js",
    duration: 20,
    icon: "fa-book",
    color: "#7C3AED"
  },
  {
    id: "class10-ch16",
    title: "Class 10 Sci Ch16: SUSTAINABLE MANAGEMENT OF NATURAL RESOURCES",
    description: "20 MCQs \u2013 NCERT & CBSE pattern",
    questionsFile: "quizzes/class10-ch16.js",
    duration: 20,
    icon: "fa-graduation-cap",
    color: "#4F46E5"
  },
  {
    id: "class10-science-all",
    title: "Class 10 Science – All Chapters",
    description: "320 MCQs – complete question bank",
    questionsFile: "quizzes/class10-science-all.js",
    duration: 180,
    icon: "fa-book-open",
    color: "#4F46E5"
  },

  // ---- Chemistry (from Excel) ----
  {
    id: "chem-alcohols-phenols-ethers",
    title: "Chemistry: Alcohols, Phenols & Ethers",
    description: "358 MCQ questions",
    questionsFile: "quizzes/chem-alcohols-phenols-ethers.js",
    duration: 180,
    icon: "fa-flask",
    color: "#EF4444"
  },
  {
    id: "chem-general-principles-and-processes-of-isolation-of-e",
    title: "Chemistry: Isolation of Elements",
    description: "357 MCQ questions",
    questionsFile: "quizzes/chem-general-principles-and-processes-of-isolation-of-e.js",
    duration: 180,
    icon: "fa-industry",
    color: "#F59E0B"
  },
  {
    id: "chem-s-block-elements",
    title: "Chemistry: S-Block Elements",
    description: "159 MCQ questions",
    questionsFile: "quizzes/chem-s-block-elements.js",
    duration: 120,
    icon: "fa-atom",
    color: "#10B981"
  },
  {
    id: "chem-haloalkanes-haloarenes",
    title: "Chemistry: Haloalkanes & Haloarenes",
    description: "83 MCQ questions",
    questionsFile: "quizzes/chem-haloalkanes-haloarenes.js",
    duration: 90,
    icon: "fa-vial",
    color: "#8B5CF6"
  },
  {
    id: "chem-p-block-elements",
    title: "Chemistry: P-Block Elements",
    description: "7 MCQ questions",
    questionsFile: "quizzes/chem-p-block-elements.js",
    duration: 20,
    icon: "fa-fire",
    color: "#EC4899"
  },
  {
    id: "chem-all",
    title: "Chemistry: All Topics Combined",
    description: "964 MCQ questions \u2013 full set",
    questionsFile: "quizzes/chem-all.js",
    duration: 180,
    icon: "fa-book-open",
    color: "#4F46E5"
  },

  // ---- Sample quizzes ----
  {
    id: "gk-basics",
    title: "General Knowledge \u2013 Basics",
    description: "Basic GK questions",
    questionsFile: "quizzes/gk-basics.js",
    duration: 30,
    icon: "fa-globe",
    color: "#4F46E5"
  },
  {
    id: "current-affairs",
    title: "Current Affairs 2024",
    description: "Recent events",
    questionsFile: "quizzes/current-affairs.js",
    duration: 20,
    icon: "fa-newspaper",
    color: "#10B981"
  },
  {
    id: "reasoning",
    title: "Logical Reasoning",
    description: "Puzzles and analytical questions",
    questionsFile: "quizzes/reasoning.js",
    duration: 25,
    icon: "fa-brain",
    color: "#F59E0B"
  },
  {
    id: "science",
    title: "Science & Technology",
    description: "Physics, Chemistry basics",
    questionsFile: "quizzes/science.js",
    duration: 30,
    icon: "fa-flask",
    color: "#EF4444"
  }
];
