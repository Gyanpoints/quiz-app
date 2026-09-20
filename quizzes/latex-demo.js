// latex-demo
// 10 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `What is the value of \$\\dfrac{1}{2} + \\dfrac{1}{3}\$?`,
    question_hi: `\$\\dfrac{1}{2} + \\dfrac{1}{3}\$ का मान क्या है?`,
    options: [
      `\$\\dfrac{1}{5}\$`,
      `\$\\dfrac{2}{5}\$`,
      `\$\\dfrac{5}{6}\$`,
      `\$\\dfrac{1}{6}\$`,
    ],
    options_hi: [
      `\$\\dfrac{1}{5}\$`,
      `\$\\dfrac{2}{5}\$`,
      `\$\\dfrac{5}{6}\$`,
      `\$\\dfrac{1}{6}\$`,
    ],
    correct_option_id: 2,
    solution: `\$\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{3}{6}+\\dfrac{2}{6}=\\dfrac{5}{6}\$`,
    solution_hi: `\$\\dfrac{1}{2}+\\dfrac{1}{3}=\\dfrac{3}{6}+\\dfrac{2}{6}=\\dfrac{5}{6}\$`,
    difficulty: 1
  },
  {
    question: `Ohm's law is given by:`,
    question_hi: `ओम का नियम निम्न द्वारा दिया जाता है:`,
    options: [
      `\$V = IR\$`,
      `\$V = \\dfrac{I}{R}\$`,
      `\$V = I^{2}R\$`,
      `\$P = VI\$`,
    ],
    options_hi: [
      `\$V = IR\$`,
      `\$V = \\dfrac{I}{R}\$`,
      `\$V = I^{2}R\$`,
      `\$P = VI\$`,
    ],
    correct_option_id: 0,
    solution: `Ohm's law: \$V = IR\$ (voltage = current × resistance).`,
    solution_hi: `ओम का नियम: \$V = IR\$ (वोल्टता = धारा × प्रतिरोध)।`,
    difficulty: 1
  },
  {
    question: `Kinetic energy of a body of mass \$m\$ and velocity \$v\$ is:`,
    question_hi: `द्रव्यमान \$m\$ तथा वेग \$v\$ वाले पिंड की गतिज ऊर्जा है:`,
    options: [
      `\$mv\$`,
      `\$\\dfrac{1}{2}mv\$`,
      `\$\\dfrac{1}{2}mv^{2}\$`,
      `\$mv^{2}\$`,
    ],
    options_hi: [
      `\$mv\$`,
      `\$\\dfrac{1}{2}mv\$`,
      `\$\\dfrac{1}{2}mv^{2}\$`,
      `\$mv^{2}\$`,
    ],
    correct_option_id: 2,
    solution: `\$KE = \\dfrac{1}{2}mv^{2}\$`,
    solution_hi: `गतिज ऊर्जा \$KE = \\dfrac{1}{2}mv^{2}\$`,
    difficulty: 2
  },
  {
    question: `The quadratic formula for \$ax^{2}+bx+c=0\$ is:`,
    question_hi: `\$ax^{2}+bx+c=0\$ के लिए द्विघात सूत्र है:`,
    options: [
      `\$x = \\dfrac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}\$`,
      `\$x = \\dfrac{b \\pm \\sqrt{b^{2}-4ac}}{2a}\$`,
      `\$x = \\dfrac{-b}{2a}\$`,
      `\$x = b^{2}-4ac\$`,
    ],
    options_hi: [
      `\$x = \\dfrac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}\$`,
      `\$x = \\dfrac{b \\pm \\sqrt{b^{2}-4ac}}{2a}\$`,
      `\$x = \\dfrac{-b}{2a}\$`,
      `\$x = b^{2}-4ac\$`,
    ],
    correct_option_id: 0,
    solution: `\$x = \\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}\$`,
    solution_hi: `\$x = \\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}\$`,
    difficulty: 2
  },
  {
    question: `Chemical formula of sulfuric acid is:`,
    question_hi: `सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:`,
    options: [
      `\$\\mathrm{HCl}\$`,
      `\$\\mathrm{H_{2}SO_{4}}\$`,
      `\$\\mathrm{HNO_{3}}\$`,
      `\$\\mathrm{H_{2}CO_{3}}\$`,
    ],
    options_hi: [
      `\$\\mathrm{HCl}\$`,
      `\$\\mathrm{H_{2}SO_{4}}\$`,
      `\$\\mathrm{HNO_{3}}\$`,
      `\$\\mathrm{H_{2}CO_{3}}\$`,
    ],
    correct_option_id: 1,
    solution: `Sulfuric acid is \$\\mathrm{H_{2}SO_{4}}\$.`,
    solution_hi: `सल्फ्यूरिक अम्ल \$\\mathrm{H_{2}SO_{4}}\$ है।`,
    difficulty: 1
  },
  {
    question: `Evaluate \$\\displaystyle\\int_{0}^{1} x\\,dx\$:`,
    question_hi: `\$\\displaystyle\\int_{0}^{1} x\\,dx\$ का मान ज्ञात कीजिए:`,
    options: [
      `\$0\$`,
      `\$1\$`,
      `\$\\dfrac{1}{2}\$`,
      `\$2\$`,
    ],
    options_hi: [
      `\$0\$`,
      `\$1\$`,
      `\$\\dfrac{1}{2}\$`,
      `\$2\$`,
    ],
    correct_option_id: 2,
    solution: `\$\\int_{0}^{1} x\\,dx = \\left[\\dfrac{x^{2}}{2}\\right]_{0}^{1} = \\dfrac{1}{2}\$`,
    solution_hi: `\$\\int_{0}^{1} x\\,dx = \\left[\\dfrac{x^{2}}{2}\\right]_{0}^{1} = \\dfrac{1}{2}\$`,
    difficulty: 2
  },
  {
    question: `Area of a circle with radius \$r\$ is:`,
    question_hi: `त्रिज्या \$r\$ वाले वृत्त का क्षेत्रफल है:`,
    options: [
      `\$2\\pi r\$`,
      `\$\\pi r^{2}\$`,
      `\$\\pi d\$`,
      `\$4\\pi r^{2}\$`,
    ],
    options_hi: [
      `\$2\\pi r\$`,
      `\$\\pi r^{2}\$`,
      `\$\\pi d\$`,
      `\$4\\pi r^{2}\$`,
    ],
    correct_option_id: 1,
    solution: `\$A = \\pi r^{2}\$`,
    solution_hi: `क्षेत्रफल \$A = \\pi r^{2}\$`,
    difficulty: 1
  },
  {
    question: `Einstein's mass–energy relation is:`,
    question_hi: `आइंस्टीन का द्रव्यमान–ऊर्जा संबंध है:`,
    options: [
      `\$E = mc\$`,
      `\$E = mc^{2}\$`,
      `\$E = \\dfrac{1}{2}mv^{2}\$`,
      `\$E = hf\$`,
    ],
    options_hi: [
      `\$E = mc\$`,
      `\$E = mc^{2}\$`,
      `\$E = \\dfrac{1}{2}mv^{2}\$`,
      `\$E = hf\$`,
    ],
    correct_option_id: 1,
    solution: `\$E = mc^{2}\$ where \$c\$ is the speed of light.`,
    solution_hi: `\$E = mc^{2}\$ जहाँ \$c\$ प्रकाश की चाल है।`,
    difficulty: 1
  },
  {
    question: `If \$\\vec{F} = q(\\vec{v} \\times \\vec{B})\$, the force is perpendicular to:`,
    question_hi: `यदि \$\\vec{F} = q(\\vec{v} \\times \\vec{B})\$, तो बल लंबवत होता है:`,
    options: [
      `Only \$\\vec{v}\$`,
      `Only \$\\vec{B}\$`,
      `Both \$\\vec{v}\$ and \$\\vec{B}\$`,
      `Neither`,
    ],
    options_hi: [
      `केवल \$\\vec{v}\$ पर`,
      `केवल \$\\vec{B}\$ पर`,
      `\$\\vec{v}\$ और \$\\vec{B}\$ दोनों पर`,
      `किसी पर नहीं`,
    ],
    correct_option_id: 2,
    solution: `Cross product \$\\vec{v}\\times\\vec{B}\$ is perpendicular to both vectors.`,
    solution_hi: `सदिश गुणनफल \$\\vec{v}\\times\\vec{B}\$ दोनों सदिशों पर लंबवत होता है।`,
    difficulty: 3
  },
  {
    question: `Solve for \$x\$: \$2x + 5 = 13\$`,
    question_hi: `\$x\$ ज्ञात कीजिए: \$2x + 5 = 13\$`,
    options: [
      `\$x = 3\$`,
      `\$x = 4\$`,
      `\$x = 5\$`,
      `\$x = 9\$`,
    ],
    options_hi: [
      `\$x = 3\$`,
      `\$x = 4\$`,
      `\$x = 5\$`,
      `\$x = 9\$`,
    ],
    correct_option_id: 1,
    solution: `\$2x = 8 \\Rightarrow x = 4\$`,
    solution_hi: `\$2x = 8 \\Rightarrow x = 4\$`,
    difficulty: 1
  }
];
