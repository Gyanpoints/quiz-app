// Class 10 Science – Chapter 10: LIGHT – REFLECTION AND REFRACTION
// 20 MCQs from NCERT / Exemplar / CBSE pattern

const QUESTIONS = [
  {
    question: `The image formed by a plane mirror is:`,
    options: [
      `Real and inverted`,
      `Virtual and erect`,
      `Real and erect`,
      `Virtual and inverted`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual and erect`
  },
  {
    question: `The focal length of a concave mirror is:`,
    options: [
      `Positive`,
      `Negative`,
      `Zero`,
      `Infinite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Negative`
  },
  {
    question: `A convex mirror always forms:`,
    options: [
      `Real image`,
      `Virtual image`,
      `Inverted image`,
      `Magnified image`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual image`
  },
  {
    question: `The refractive index of glass with respect to air is 1.5. The speed of light in glass is:`,
    options: [
      `(2×108 m/s)`,
      `(3×108 m/s)`,
      `(1.5×108 m/s)`,
      `(4.5×108 m/s)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (2×108 m/s)`
  },
  {
    question: `The power of a lens of focal length +25 cm is:`,
    options: [
      `+4 D`,
      `–4 D`,
      `+0.25 D`,
      `–0.25 D`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) +4 D`
  },
  {
    question: `When light travels from air to glass, it bends:`,
    options: [
      `Away from normal`,
      `Towards normal`,
      `Does not bend`,
      `Perpendicular to surface`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Towards normal`
  },
  {
    question: `The mirror used as rear-view mirror in vehicles is:`,
    options: [
      `Concave`,
      `Convex`,
      `Plane`,
      `Parabolic`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Convex`
  },
  {
    question: `The SI unit of power of a lens is:`,
    options: [
      `Metre`,
      `Dioptre`,
      `Watt`,
      `Joule`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Dioptre`
  },
  {
    question: `The image formed by a concave mirror when object is at infinity is:`,
    options: [
      `At F, real, inverted, highly diminished`,
      `At C, real, inverted, same size`,
      `Between F and C, real, inverted, magnified`,
      `Behind mirror, virtual, erect, magnified`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) At F, real, inverted, highly diminished`
  },
  {
    question: `The refractive index of water is 4/3. The critical angle for water-air interface is approximately:`,
    options: [
      `45°`,
      `49°`,
      `60°`,
      `90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 49°`
  },
  {
    question: `A lens that converges light rays is:`,
    options: [
      `Concave lens`,
      `Convex lens`,
      `Plane lens`,
      `Biconcave lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Convex lens`
  },
  {
    question: `The magnification produced by a plane mirror is:`,
    options: [
      `+1`,
      `–1`,
      `0`,
      `∞`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) +1`
  },
  {
    question: `The focal length of a plane mirror is:`,
    options: [
      `Zero`,
      `Infinite`,
      `Equal to radius of curvature`,
      `Negative`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Infinite`
  },
  {
    question: `When object is placed between F and P of a concave mirror, the image is:`,
    options: [
      `Real, inverted, magnified`,
      `Virtual, erect, magnified`,
      `Real, inverted, diminished`,
      `Virtual, erect, diminished`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Virtual, erect, magnified`
  },
  {
    question: `The speed of light is maximum in:`,
    options: [
      `Glass`,
      `Water`,
      `Air`,
      `Diamond`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Air`
  },
  {
    question: `The lens used to correct myopia is:`,
    options: [
      `Convex`,
      `Concave`,
      `Bifocal`,
      `Cylindrical`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Concave`
  },
  {
    question: `The relation between radius of curvature (R) and focal length (f) is:`,
    options: [
      `(R=f)`,
      `(R=2f)`,
      `(f=2R)`,
      `(R=f/2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (R=2f)`
  },
  {
    question: `The phenomenon of splitting of white light into its constituent colours is called:`,
    options: [
      `Refraction`,
      `Reflection`,
      `Dispersion`,
      `Scattering`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Dispersion`
  },
  {
    question: `The absolute refractive index of a medium is always:`,
    options: [
      `Less than 1`,
      `Equal to 1`,
      `Greater than 1`,
      `Zero`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Greater than 1`
  },
  {
    question: `The mirror formula is:`,
    options: [
      `1 𝑓 = 1 𝑣 + 1 𝑣`,
      `(f=v+u)`,
      `1 𝑓 = 1 𝑣 − 1 𝑣`,
      `(f=vu)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝑓 = 1 𝑣 + 1 𝑣`
  }
];
