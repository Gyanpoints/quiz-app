// Class 10 Physics (GyanPoints)
// 148 MCQs

const QUESTIONS = [
  {
    question: `The im age formed by a concave mirror is observed to be virtual, erect and larger than the object. Where should be the position of the object?`,
    options: [
      `Between the principal focus and the centre of curvature.`,
      `At the centre of curvature.`,
      `Beyond the centre of curvature.`,
      `Between the pole of the mirror and its principal focus.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Between the principal focus and the centre of curvature.`
  },
  {
    question: `Where should an object be placed in front of a convex lens to get a real image same as the size of the object?`,
    options: [
      `At the principal focus of the lens.`,
      `At twice the focal length.`,
      `At infinity .`,
      `Between the optical centre of the lens and its principal focus.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) At infinity .`
  },
  {
    question: `A spherical mirror and a thin spherical lens has a focal length of –15cm. The mirror and the lens are likely to be`,
    options: [
      `both concave.`,
      `both convex.`,
      `the mirror is concave and the lens is convex.`,
      `the mirror is convex, but the lens is concave.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) the mirror is concave and the lens is convex.`
  },
  {
    question: `Which of the following lenses would you prefer to use while reading small letters found in a dictionary?`,
    options: [
      `A convex lens of focal length 50cm.`,
      `A concave lens of focal length 50cm.`,
      `A convex lens of focal length 5cm.`,
      `A concave lens of focal length 5cm.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A convex lens of focal length 50cm.`
  },
  {
    question: `Convex lens always has a positive focal length. Quick Recall 29 Light-Reflection and Refraction Match the Following In this section, each question has two matching lists. Choices for the correct combination from Column-I and Column-II are g(iv)en as options`,
    options: [
      `,`,
      `,`,
      `and`,
      `out of which one is correct.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) out of which one is correct.`
  },
  {
    question: `Match the following with correct response. Column-I Column-II P. Convex lens (i) Diverging Q. Concave lens (ii) Virtual image smaller than the object R. Concave mirror (iii) Virtual image larger than the object S. Convex mirror (iv) Converging`,
    options: [
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(i), Q-(ii), R-(iii), S-(iv)`,
      `P-(iv), Q-(i), R-(iii), S-(ii)`,
      `P-(i), Q-(iii), R-(ii), S-(iv)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(i), Q-(iii), R-(ii), S-(iv)`
  },
  {
    question: `Mirror that is used by a dentist to examine a dental cavity is:`,
    options: [
      `Plane mirror`,
      `Convex mirror`,
      `Combination of concave mirror and convex`,
      `Concave mirror`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Combination of concave mirror and convex`
  },
  {
    question: `Anil is given three media A, B and C of refractive index 1.33, 1.65 and 1.46. The medium in which the light will travel fastest is`,
    options: [
      `B`,
      `A`,
      `C`,
      `equal in all the three media`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) equal in all the three media`
  },
  {
    question: `A ray of light travels from medium A to medium B as shown in the figure below. Refractive index of the medium B relative to medium A is Medium B Medium A 45° 30° N N' 60° 45°`,
    options: [
      `3 2`,
      `2 3`,
      `1 2`,
      `3 32 Class-X PHYSICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 32 Class-X PHYSICS PW`
  },
  {
    question: `A light ray enters from medium B to medium A as shown in the figure. The refractive index of medium A relative to B will be Medium A N N' Medium B`,
    options: [
      `nB > nA`,
      `nB < nA`,
      `nB = nA`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) nB > nA`
  },
  {
    question: `St udy the given ray diagrams and select the correct statement from the following: (CBSE 2017) 20 cm 25 cm Screen YX Screen`,
    options: [
      `Device X is a concave mirror and device Y is a convex lens, whose focal lengths are 20cm and 25cm respectively.`,
      `Device X is a convex lens and device Y is a concave mirror, whose focal lengths are 10cm and 25cm respectively.`,
      `Device X is a concave lens and device Y is a convex mirror, whose focal lengths are 20cm and 25cm respectively.`,
      `Device X is a convex lens and device Y is a concave mirror, whose focal lengths are 20cm and 25cm respectively.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Device X is a concave mirror and device Y is a convex lens, whose focal lengths are 20cm and 25cm respectively.`
  },
  {
    question: `A student focuses the image of a candle flame, placed at about 2m from a convex lens of focal length 10 cm, on a screen. After that he moves gradually the flame towards the lens and each time focuses its image on the screen.`,
    options: [
      `In which direction does he move the lens to focus the flame on the screen?`,
      `W hat happens to the size of the image of the flame formed on the screen?`,
      `W hat difference is seen in the intensity (brightness) of the image of the flame on the screen?`,
      `What is seen on the screen when the flame is very close (at about 5 cm) to the lens? (CBSE-2017)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) In which direction does he move the lens to focus the flame on the screen?`
  },
  {
    question: `Draw ray diagrams showing the image formation by a concave mirror when an object is placed (NCER T Exemplar) 35 Light-Reflection and Refraction`,
    options: [
      `between the pole and focus of the mirror .`,
      `between focus and center of curvature of the mirror.`,
      `at the center of curvature of the mirror .`,
      `a little beyond the center of curvature of the mirror . (e) at infinity .`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) at the center of curvature of the mirror .`
  },
  {
    question: `The nature of the image is`,
    options: [
      `Diminished and inverted`,
      `V irtual and erect`,
      `V irtual and inverted`,
      `Real and erect`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Diminished and inverted`
  },
  {
    question: `When light pas ses from glass to water, the speed of light:`,
    options: [
      `increases`,
      `decreases`,
      `remains same`,
      `first increases then decrease`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) remains same`
  },
  {
    question: `A real and enlarged image can be formed by using:`,
    options: [
      `concave mirror .`,
      `plane mirror .`,
      `convex mirror .`,
      `Both concave and a plane mirror .`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) convex mirror .`
  },
  {
    question: `For an incident ray directed towards centre of curvature of a spherical mirror the reflected ray`,
    options: [
      `retraces its path`,
      `passes through focus`,
      `passes through the pole`,
      `becomes parallel to the principal axis`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) passes through focus`
  },
  {
    question: `Rahul conducts an experiment using an object of height 10cm and a concave lens with focal length 20 cm. The object is placed at a distance of 25cm from the lens. Can the image be formed on a screen? 41 Light-Reflection and Refraction`,
    options: [
      `Y es, as the image formed will be real`,
      `Y es, as the image formed will be erect`,
      `No, as the image formed will be virtual`,
      `No, as the image formed will be inverted`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) No, as the image formed will be inverted`
  },
  {
    question: `The distance between a spherical lens and the image is –15 cm. The lens is:`,
    options: [
      `Concave lens`,
      `either concave lens or convex lens with the object between O and F.`,
      `either of the tw o irrespective of the object distance`,
      `Convex lens`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Concave lens`
  },
  {
    question: `A ray of light propagates from an optically denser medium to an optically rarer medium.`,
    options: [
      `It will bend towards the normal after refraction.`,
      `It will refract in a way such that the angle of refraction = angle of incidence.`,
      `It w ill continue to go on the same path after refraction.`,
      `It will bend away from the normal after refraction.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) It will refract in a way such that the angle of refraction = angle of incidence.`
  },
  {
    question: `Beams of light are incident through the holes A and B and emerge out of box through the holes C and D respectively as shown in the Figure. Which of the following could be inside the box? (NCER T Exemplar) C A D Box B`,
    options: [
      `A rectangular glass slab`,
      `A convex lens`,
      `A concave lens`,
      `A prism`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A rectangular glass slab`
  },
  {
    question: `If an object is placed between 2F and F in front of the convex lens, then the image will form at`,
    options: [
      `At the focus`,
      `At 2 F`,
      `Between F and 2F`,
      `Beyond 2 F`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) At the focus`
  },
  {
    question: `m = +2 : image is virtual and enlarged : : m = –2 : ………..`,
    options: [
      `The image is real and enlar ged.`,
      `Image is virtual and enlar ged.`,
      `Image is real and diminished.`,
      `Image is virtual and diminished 42 Class-X PHYSICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Image is virtual and enlar ged.`
  },
  {
    question: `Which of the following can make a parallel beam of light from a point source incident on it?`,
    options: [
      `concave mirror as well as convex lens`,
      `convex mirror as well as concave lens`,
      `two plane mirrors placed at 90° to each other`,
      `concave mirror as well as concave lens`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) concave mirror as well as concave lens`
  },
  {
    question: `Which of the following correctly depicts the graphical variation in case of spherical mirror?`,
    options: [
      `i y xO r`,
      `i y xO r`,
      `i y xO r`,
      `i y xO r`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) i y xO r`
  },
  {
    question: `A student studies that the speed of light in air is 300000km/sec where that of speed in a glass slab is about 197000km/sec. What causes the difference in speed of light in these two media?`,
    options: [
      `dif ference in density`,
      `dif ference in temperature`,
      `dif ference in amount of light`,
      `dif ference in direction of wind flow`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) dif ference in temperature`
  },
  {
    question: `Focal length of a thin convex lens is 10cm. An object is placed at a distance 15cm in front of the lens and a plane mirror is kept at 20cm on the other side as shown in figure. (NSEJS 2022-23) 15cm 20 m c Plane mirror`,
    options: [
      `The final image is formed at distance 10cm from lens towards the mirror`,
      `The final image is formed at a distance 30cm from lens means 10cm behind the mirror`,
      `The final image has magnification m = –2`,
      `The final image has magnification m = +2 Competitive Corner 44 Class-X PHYSICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The final image has magnification m = –2`
  },
  {
    question: `A glass plate of uniform thickness t and refractive index m is as shown in the diagram. AB is the incident ray and FG is the emergent ray. The angles of incidence and refraction are i and r respectively. The perpendicular distance FC = x between the incident and the emergent rays is called the lateral shift. Then (IOQJS 2021-22) t A B F x D C E G r lateral shift tθ`,
    options: [
      `cos sinsin cos irxt i r = −`,
      `x depends on refractive index m`,
      `x is independent of the wavelength l of light`,
      `Maximum value of x = t when i is close to 90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) x depends on refractive index m`
  },
  {
    question: `A ray of light passes through a thick glass sheet with some angle of incidence as shown. The refractive index of glass is: (INJSO 2018) B CD A d /c113 45 Light-Reflection and Refraction`,
    options: [
      `Exactly d/DC`,
      `Approximately d/DC`,
      `Approximately d/AD`,
      `Approximately AD/AC`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Approximately d/DC`
  },
  {
    question: `Light travels through a glass slab of thickness t and having refractive index n. If c is the velocity of light in a vacuum, then the time taken by light to travel this thickness of glass is (NTSE-2021/Delhi)`,
    options: [
      `t nc`,
      `nt c`,
      `2nt c`,
      `2 t nc`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) nt c`
  },
  {
    question: `The image formed by a concave mirror is observed to be virtual, erect, and larger than the object. Where should be the position of the object? (NTSE-2021/Jharkhand)`,
    options: [
      `Between the principal focus and the center of curvature`,
      `At the center of curvature`,
      `Beyond the center of curvature`,
      `Between the pole of the mirror and its principal focus`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Between the principal focus and the center of curvature`
  },
  {
    question: `The incident light is light from a point source. Which of the following can produce a parallel beam of light? (NTSE-2021/Odisha)`,
    options: [
      `concave mirror only`,
      `T wo plane mirrors placed at 90° to each other`,
      `convex lens only`,
      `Both concave mirror and convex lens 46 Class-X PHYSICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) convex lens only`
  },
  {
    question: `In case of a convex lens, what is the minimum distance between an object and its real image? (NTSE-2021/W est Bengal)`,
    options: [
      `2.5 times of focal length`,
      `2 times of focal length`,
      `4 times of focal length`,
      `equal to focal length`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2.5 times of focal length`
  },
  {
    question: `A point object is placed at a distance of 10cm and its real image is formed at a distance of 20cm from a concave mirror. When the object is moved by 0.1cm toward the mirror, then the image will be moved by about (NTSE-2019/Andhra Pradesh)`,
    options: [
      `0.8cm away from the mirror`,
      `0.4cm away from the mirror`,
      `0.8cm toward the mirror`,
      `0.4 cm toward the mirror 47 Light-Reflection and Refraction`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.4cm away from the mirror`
  },
  {
    question: `A spherical mirror and a thin spherical lens each of focal lengths –10cm are given. The mirror and lens are likely to be: (NTSE 2020/Karnataka)`,
    options: [
      `The mirror is concave mirror and the lens is concave lens`,
      `The mirror is convex mirror and the lens is convex lens`,
      `The mirror is convex mirror and the lens is concave lens`,
      `The mirror is concave mirror and the lens is convex lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The mirror is convex mirror and the lens is convex lens`
  },
  {
    question: `In which of the following cases, the position and properties of the image formed remain almost the same, independent of the position of the object? (NTSE 2020/Kerala)`,
    options: [
      `Convex mirror , Convex lens`,
      `Convex mirror , Concave lens`,
      `Convex lens, Concave mirror`,
      `Convex lens, Concave lens`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Convex mirror , Concave lens`
  },
  {
    question: `A small source of light casts a sharp shadow on an opaque object shows (NTSE 2020/Punjab)`,
    options: [
      `Ray Nature of Light`,
      `W ave Nature of Light`,
      `Particle Nature of Light`,
      `Dual Nature of Light`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) W ave Nature of Light`
  },
  {
    question: `Match the following columns: Column-I Column-II P. Near points (i) Farthest point to which the eye can see clearly Q. Power of accommodation (ii) Nearest point to which the eye can see clearly R. Far point (iii) Minimum distance at which eye can see the objects clearly without strain S. Least distance of distinct vision (iv) The ability of eye lens to focus near and far objects`,
    options: [
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
      `P-(ii), Q-(i), R-(iv), S-(iii)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(ii), Q-(iv), R-(i), S-(iii)`
  },
  {
    question: `One cannot see through the fog, because`,
    options: [
      `it is an opaque object`,
      `light suf fers total reflection at droplets`,
      `light is scattered by the droplets`,
      `fog absorbs light`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) light is scattered by the droplets`
  },
  {
    question: `The ability of eye lens to adjust its focal length to form a sharp image of the object at varying distances on the retina is called :`,
    options: [
      `conver ging power of the eye.`,
      `power of accommodation of the eye.`,
      `power of adjustment of the eye.`,
      `diver ging power of the eye.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) power of accommodation of the eye.`
  },
  {
    question: `Refraction of light by the earth's atmosphere due to variation in air density is called:`,
    options: [
      `Atmospheric refraction`,
      `Dispersion`,
      `Scattering`,
      `Atmospheric reflection`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Atmospheric refraction`
  },
  {
    question: `The clear sky appears to be blue because:`,
    options: [
      `Blue light gets reflected in the atmosphere.`,
      `Ultraviolet radiations are absorbed in the atmosphere.`,
      `V iolet and blue lights get scattered more than lights of all other colours by the atmosphere.`,
      `Light of all other colours is scattered more than the violet and blue colour lights by the atmosphere.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ultraviolet radiations are absorbed in the atmosphere.`
  },
  {
    question: `At noon the sun appears white as:`,
    options: [
      `light is least scattered.`,
      `dif ferent colours of the white light are scattered away.`,
      `blue colour is scattered the most.`,
      `red colour is scattered the most. 79 Human Eye and the Colourful World`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) light is least scattered.`
  },
  {
    question: `Account for the following:`,
    options: [
      `Part of the human eye that helps in changing the focal length of the eye lens.`,
      `T he condition resulting due to the eye lens becoming cloudy.`,
      `The factors on which the colour of the scattered white light depends.`,
      `The range of vision of a normal eye. (e) The sky appears dark to the astronauts in space. [CBSE 2016] 80 Class-X PHYSICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) T he condition resulting due to the eye lens becoming cloudy.`
  },
  {
    question: `Planets do not appear to twinkle because:`,
    options: [
      `they are very close to earth.`,
      `they are far away from earth.`,
      `they are small in size.`,
      `None of the above.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of the above.`
  },
  {
    question: `The apparent position of the star appears raised due to:`,
    options: [
      `atmospheric refraction.`,
      `scattering of light.`,
      `Both ( a) and (b)`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) atmospheric refraction.`
  },
  {
    question: `The sun appears oval-shaped or flattened due to:`,
    options: [
      `dispersion`,
      `scattering`,
      `atmospheric refraction`,
      `cannot say`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) atmospheric refraction`
  },
  {
    question: `T winkling of stars and non-twinkling of planets is accounted for by:`,
    options: [
      `scattering of light`,
      `dispersion of light`,
      `atmospheric refraction`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) atmospheric refraction`
  },
  {
    question: `Human eye is one of the most valuable and sensitive organ that:`,
    options: [
      `enables us to see the wonderful world and colours around us.`,
      `can identify the objects.`,
      `is like a camera.`,
      `All of the above`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of the above`
  },
  {
    question: `Iris contracts the pupil:`,
    options: [
      `in darkness`,
      `to allow less light to enter`,
      `in bright light`,
      `Only ( b) and (c)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) in darkness`
  },
  {
    question: `Hypermetropia is also known as far sightedness as`,
    options: [
      `t he person is able to see clearly the distant objects, but not near objects.`,
      `the person is not able to see clearly the distant objects, but can see near objects clearly.`,
      `the person is unable to see the distant or near objects clearly.`,
      `the person is able to see the distant or near objects clearly.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) the person is unable to see the distant or near objects clearly.`
  },
  {
    question: `A person is not able to see nearby objects clearly, because:`,
    options: [
      `focal length of the eye lens is too great.`,
      `image is formed behind the retina.`,
      `use of convex lens has been ignored, though it w as advised.`,
      `All of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) use of convex lens has been ignored, though it w as advised.`
  },
  {
    question: `A normal eye is not able to see objects closer than 25cm because:`,
    options: [
      `the eye lens has the focal length of 25cm.`,
      `the distance of the retina from the eye-lens is 25cm.`,
      `the eye is not able to decrease the focal length beyond a limit.`,
      `the eye is not able to decrease the distance between the eye-lens and the retina beyond a limit.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) the eye lens has the focal length of 25cm.`
  },
  {
    question: `A student sitting on the last bench can read the letters written on the blackboard but is not able to read the letters written in his textbook. Which of the following statements is correct? [NCER T Exemplar]`,
    options: [
      `The near point of his eyes has receded away .`,
      `The near point of his eyes has come closer to him.`,
      `The far point of his eyes has come closer to him.`,
      `The far point of his eyes has receded away .`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The near point of his eyes has come closer to him.`
  },
  {
    question: `Which of the following phenomena of light are involved in the formation of a rainbow? [NCER T Exemplar]`,
    options: [
      `Reflection, refraction and dispersion .`,
      `Refraction, dispers ion and total internal reflection.`,
      `Refraction, dispersion and internal reflection.`,
      `Di spersion, scattering and total internal reflection. 88 Class-X PHYSICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Di spersion, scattering and total internal reflection. 88 Class-X PHYSICS PW`
  },
  {
    question: `Which of the following statements is correct regarding the propagation of light of dif ferent colours of white light in air? [NCER T Exemplar]`,
    options: [
      `Red light moves fastest.`,
      `Blue light moves faster than green light.`,
      `All the colours of the white light move with the same speed.`,
      `Y ellow light moves with the mean speed as that of the red and the violet light.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Red light moves fastest.`
  },
  {
    question: `The danger signals installed at the top of tall buildings are red in colour. These can be easily seen from a distance because among all other colours, the red light: [NCER T Exemplar]`,
    options: [
      `is scattered the most by smoke or fog.`,
      `is scattered the least by smoke or fog.`,
      `is absorbed the most by smoke or fog.`,
      `moves fastest in air .`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) is scattered the least by smoke or fog.`
  },
  {
    question: `The focal length of the eye lens increases when eye muscles [NCER T Exemplar]`,
    options: [
      `are relaxed and lens becomes thinner .`,
      `contract and lens becomes thicker .`,
      `are relaxed and lens becomes thicker .`,
      `contract and lens becomes thinner .`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) are relaxed and lens becomes thinner .`
  },
  {
    question: `Which of the following statement is correct? [NCER T Exemplar]`,
    options: [
      `A person with myopia can see distant objects clearly.`,
      `A person with hypermetropia can see nearby objects clearly.`,
      `A person with myopia can see nearby objects clearly.`,
      `A person with hypermetropia cannot see distant objects clearly.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A person with hypermetropia cannot see distant objects clearly.`
  },
  {
    question: `A mirage takes place due to _________.`,
    options: [
      `reflection`,
      `refraction`,
      `total internal reflection`,
      `Both ( b) and (c)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) reflection`
  },
  {
    question: `Find the incorrect state ments related to the rainbow`,
    options: [
      `The rainbow is formed in the same direction to the position of the sun.`,
      `When the light rays undergo dispersion and total internal reflection the water droplets present in the atmosphere forms rainbow.`,
      `A rainbow is formed in the shape of circle.`,
      `When light rays under go one internal reflection and two refractions produce primary rainbow whereas two internal reflections and two refractions produces secondary rainbow`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) When the light rays undergo dispersion and total internal reflection the water droplets present in the atmosphere forms rainbow.`
  },
  {
    question: `The reduction of the sun at sunrise and at sunset as viewed from the Earth’s surface is due to: [NTSE 2021/Odisha]`,
    options: [
      `dispersion of light.`,
      `atmospheric refraction of light.`,
      `scattering of light.`,
      `total internal reflection of light.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) scattering of light.`
  },
  {
    question: `Rainbow is formed due to a combination of: [NTSE 2021/Bihar]`,
    options: [
      `dispersion and total internal reflection`,
      `refraction and absorption.`,
      `dispersion and interference.`,
      `scattering and dispersion.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) scattering and dispersion.`
  },
  {
    question: `Identify the following colours in the ascending order of their frequencies. [NTSE 2020/Andhra Pradesh]`,
    options: [
      `Red, blue, yellow , green`,
      `Blue, green, yellow , red`,
      `Red, green, yellow , blue`,
      `Red, yellow , green, blue`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Red, blue, yellow , green`
  },
  {
    question: `The spectacular glow of diamonds is due to: [NTSE 2020/ Tamil Nadu]`,
    options: [
      `Refraction`,
      `Reflection`,
      `T otal Internal Reflection`,
      `Scattering of Light`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Refraction`
  },
  {
    question: `Match the following columns: [NTSE 2020/T amil Nadu] Column-I Column-II P. Formation of real and inverted image of objects (i) Pupil Q. Controls the amount of light entering the pupil (ii) Cornea R. Pathway of the light to retina (iii) Iris S. Refracts or bends the light onto the lens (iv) Retina`,
    options: [
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(iv), Q-(iii), R-(ii), S-(i)`,
      `P-(iii), Q-(iv), R-(ii), S-(iv)`,
      `P-(ii), Q-(i), R-(iii), S-(iv)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iv), Q-(iii), R-(i), S-(ii)`
  },
  {
    question: `Which one of the following will show Tyndall Effect? [NTSE 2019/ Madhya Pradesh]`,
    options: [
      `Solution of salt`,
      `Milk`,
      `Solution of copper sulphate`,
      `None of the above 91 Human Eye and the Colourful World`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Solution of salt`
  },
  {
    question: `A beam of white light when passes through a glass prism, and a spectrum is observed. But when the same beam of light passes through a hollow grass prism then: [NTSE 2018/Punjab]`,
    options: [
      `spectrum is the same.`,
      `spectrum becomes brighter .`,
      `there will be no spectrum.`,
      `colours of spectrum reversed.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) there will be no spectrum.`
  },
  {
    question: `T o read a poster on a wall, a person with defective vision needs to stand at a distance of 0.4m from the poster. A person with normal vision can read the poster from a distance of 2.0m. Which one of the following lens may be used to correct the defective vision? [NTSE 2017]`,
    options: [
      `A concave lens of 0.5D.`,
      `A concave lens of 1.0D.`,
      `A concave lens of 2.0D.`,
      `A convex lens of 2.0D.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) A concave lens of 2.0D.`
  },
  {
    question: `Match the following: [NTSE Stage-2/2015] Phenomenon Reason P. Rainbow (i) Scattering of light Q. Twinkling of stars (ii) Dispersion of light R. Blue colour of sky (iii) Fluctuation of the refraction index in atmosphere layers S. Advancement of sunrise and delay of sunset (iv) Refraction of light`,
    options: [
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `P-(ii), Q-(iii), R-(i), S-(iv)`,
      `P-(ii), Q-(i), R-(iii), S-(iv)`,
      `P-(iv), Q-(ii), R-(i), S-(iii)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) P-(ii), Q-(iii), R-(i), S-(iv)`
  },
  {
    question: `A person is suffering from both near sightedness and far sightedness. His spectacles would be made of:`,
    options: [
      `two convex lenses with the upper lens having a larger focal length than the lower lens.`,
      `two concave lenses with the upper lens having a smaller focal length than the lower lens.`,
      `a concave lens as the upper lens and a convex lens as the lower lens.`,
      `a convex lens as the upper lens and a concave lens as the lower lens.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) a convex lens as the upper lens and a concave lens as the lower lens.`
  },
  {
    question: `A ray of light of pure single colour is incident on the face of a prism having angle of the prism 30° at an angle of incidence 45°. The refracted ray does not change its direction as it crosses the other face and emerges out of the prism. The refractive index of the material of the prism is:`,
    options: [
      `2 3`,
      `2`,
      `2`,
      `3 93 Human Eye and the Colourful World School Level Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `An electric lamp of resistance 20 Ω and a conductor of resistance 4 Ω are connected to a 6 V battery as shown in the circuit. Calculate: (CBSE 2019) + – 6V – +A K I 4/c87`,
    options: [
      `the total resistance of the circuit,`,
      `the current through the circuit,`,
      `the potential dif ference across the (i) electric lamp and (ii) conductor, and`,
      `power of the lamp.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) the current through the circuit,`
  },
  {
    question: `What could be concluded from the given graphs?`,
    options: [
      `T he resistor device and the light bulb obeyed Ohm's law.`,
      `Neither the resistor device nor the light bulb obeyed Ohm’s law.`,
      `The light bulb obeyed Ohm's law, but the resistor device did not.`,
      `The resistor device obeyed Ohm's law , but the light bulb did not.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The light bulb obeyed Ohm's law, but the resistor device did not.`
  },
  {
    question: `Which of the following statement is true for the bulbs in two circuits?`,
    options: [
      `Brightness of the bulbs in both circuits cannot be compared.`,
      `Bulbs in series combination will glow more brightly.`,
      `B ulbs in both circuits glow with the same brightness.`,
      `Bulbs in parallel combination will glow more brightly.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Bulbs in parallel combination will glow more brightly.`
  },
  {
    question: `Potential dif ference between two points is defined as`,
    options: [
      `The amount of work done in moving a unit charge by a unit distance`,
      `Distance between two terminals`,
      `Length of the connecting wire`,
      `The amount of work done in moving a unit charge between the two points.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Length of the connecting wire`
  },
  {
    question: `Power produced due to flow of current through a conductor is given by the formula`,
    options: [
      `P = I 2 R`,
      `P = V I`,
      `P = V 2/R`,
      `All of the above 136 Class-X PHYSICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) P = V I`
  },
  {
    question: `If a wire of resistance 2 Ω is stretched to double its length, then resistance will be`,
    options: [
      `1 2 Ω`,
      `2 Ω`,
      `1 8 Ω`,
      `8 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 2 Ω`
  },
  {
    question: `When two or more resistors are connected in parallel combination,`,
    options: [
      `The current passing through each resistor is same`,
      `The potential difference across each resistor is same`,
      `Both of the above`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both of the above`
  },
  {
    question: `Alloys are generally used in electrical heating devices because`,
    options: [
      `resistivity of an alloy is generally higher than that of constituent elements`,
      `alloys do not oxidize readily at high temperature`,
      `Both ( a) and (b)`,
      `Neither (a ) nor (b)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) alloys do not oxidize readily at high temperature`
  },
  {
    question: `Direction of conventional current is from`,
    options: [
      `Lower potential to higher potential`,
      `Higher potential to lower potential`,
      `In any direction`,
      `In both the directions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) In both the directions`
  },
  {
    question: `In electrical circuits the fuse wire should have`,
    options: [
      `High resistance – high melting point`,
      `Low resistance – high melting point`,
      `Low resistance – low melting point`,
      `High resistance – low melting point`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) High resistance – high melting point`
  },
  {
    question: `Consider the following statements:`,
    options: [
      `Electric current is a vector quantity .`,
      `The S.I. unit of electric charge is ampere. Which of these statement(s) is/are correct? (a) (A) only (b) (B) only`,
      `Both (A) and (B)`,
      `Neither (A) nor (B)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Neither (A) nor (B)`
  },
  {
    question: `T he intensity of the bulb will decrease when a resistance is connected`,
    options: [
      `In series`,
      `In parallel`,
      `Series or parallel`,
      `Intensity cannot be decreased`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) In series`
  },
  {
    question: `In the adjacent circuit the voltages across AD, BD and CD are 2 V , 6 V and 8V respectively. If resistance RA = 1kΩ, then the values of resistances RA and RC are and respectively. (NSEJS 2019) B A RB RC RA C D`,
    options: [
      `4 k Ω and 6 k Ω`,
      `2 k Ω and 1 k Ω`,
      `1 k Ω and 2 k Ω`,
      `data insuf ficient as battery voltage is not given`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 k Ω and 6 k Ω`
  },
  {
    question: `In the adjoining circuit, R = 5 Ω . It is desired that the voltage across R s should be 6V , then the value of Rs should be (IOQJS 2019) R R R Rs RR 18 V`,
    options: [
      `4 Ω`,
      `12 Ω`,
      `16 Ω`,
      `20 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 16 Ω`
  },
  {
    question: `A metallic wire of diameter p mm was made into a circular loop of radius 4p cm and was connected to an electric circuit. The potential difference between terminals (c, d) and the current passing in the circuit are shown in the figure. What do you expect the conductivity of the wire to be? Consider p to be 3.14. (IJSO 2019) 2A 2nV 4/c112c 4/c112d`,
    options: [
      `1.01 × 103 Ω–1 m–1`,
      `2.03 × 103 Ω–1 m–1`,
      `4.06 × 103 Ω–1 m–1`,
      `8.1 1 × 10 3 Ω–1 m–1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4.06 × 103 Ω–1 m–1`
  },
  {
    question: `What is the equivalent resistance between A and B. (NTSE-I 2018) 2 /c87 2 /c87 2 /c87 2 /c87 2 /c87 2 /c87 4 /c87 A B`,
    options: [
      `12Ω`,
      `24Ω`,
      `6 Ω`,
      `2.4 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 12Ω`
  },
  {
    question: `In the given circuit the equivalent resistance between A and B is (NTSE-I 2018) 2 /c87 2 /c87 2 /c87 10 /c8710 /c87 3 /c87 2 /c87 13 /c87 A B`,
    options: [
      `10 Ω`,
      `2 Ω`,
      `5 Ω`,
      `3 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 Ω`
  },
  {
    question: `If the ammeter in the given circuit reads 2 A. What is the value of resistance R (the resistance of ammeter is negligible). (NTSE-I 2019) 3 /c87 6 /c87 R 6V A`,
    options: [
      `1Ω`,
      `2Ω`,
      `3 Ω`,
      `4 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1Ω`
  },
  {
    question: `W hat is the equivalent resistance of the network between points A and B ? (each resistance is of value r). (NTSE-I 2018) B A`,
    options: [
      `r 2`,
      `4r`,
      `r 4`,
      `zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) r 2`
  },
  {
    question: `For a cell, a graph is plotted between the potential difference V across the terminals of the cell and current I drawn from the cell (see fig.) The emf and internal resistance of the cell are E and r respectively, then : (NTSE-I 2019) 2.0 1.5 1.0 0.5 I (amp) V (volt) 1 2 3 4 50`,
    options: [
      `E = 2V , r = 0.5 Ω`,
      `E = 2V , r = 0.4 Ω`,
      `E > 2V , r = 0.5 Ω`,
      `E > 2V , r = 0.4 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) E = 2V , r = 0.5 Ω`
  },
  {
    question: `What is the value of R in the circuit given below if the current passing through the battery is 0.25 A. (NTSE-I 2019) 12V R 10/c8720/c87 60/c87`,
    options: [
      `42 Ω`,
      `62 Ω`,
      `84 Ω`,
      `none of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 84 Ω`
  },
  {
    question: `The number of electrons in one coulomb char ge are: (NTSE-I 2019)`,
    options: [
      `5.46 × 10–29`,
      `9 × 1013`,
      `6.25 × 1018`,
      `1.6 × 10–19`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9 × 1013`
  },
  {
    question: `If n identical resistance of equal values are firstly connected in series and then connected in parallel, then the value of their resultant resistance R R s r will be: (NTSE-I 2019)`,
    options: [
      `1 n`,
      `1 2n`,
      `n2`,
      `n`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 n`
  },
  {
    question: `In Domestic Electric Circuits, appliances are always connected in (NTSE-I 2019)`,
    options: [
      `Series`,
      `Parallel`,
      `Mixed`,
      `Bulbs in Series and Fans in Parallel 140 Class-X PHYSICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Series`
  },
  {
    question: `Six ident ical resistors connected between points A, B and C as shown in diagram. The equivalent resistance would be maximum between. C AB R R RR R R`,
    options: [
      `A and B`,
      `B and C`,
      `A and C`,
      `Option ( a), (b) & (c) are correct.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) B and C`
  },
  {
    question: `In the circuit shown: (NTSE-I 2019) 20V 2 /c87 4 /c87 6 /c87`,
    options: [
      `Current flowing from battery is 5A.`,
      `Power supplied by battery is 200 W.`,
      `Potential difference across 4Ω is equal to the potential difference across 6Ω.`,
      `Both ( b) and (c)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Potential difference across 4Ω is equal to the potential difference across 6Ω.`
  },
  {
    question: `Choose the correct option. The magnetic field inside a long straight solenoid- carrying current`,
    options: [
      `Is zero.`,
      `Decreases as we move towards its end.`,
      `Increases as we move towards its end.`,
      `Is the same at all points.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Increases as we move towards its end.`
  },
  {
    question: `Which of the following correctly describes the magnetic field near a long straight wire?`,
    options: [
      `The field consists of straight lines perpendicular to the wire.`,
      `The field consists of straight lines parallel to the wire.`,
      `The field consists of radial lines originating from the wire.`,
      `The field consists of concentric circles centered on the wire.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The field consists of concentric circles centered on the wire.`
  },
  {
    question: `At the time of short circuit, the current in the circuit`,
    options: [
      `reduces substantially .`,
      `does not change.`,
      `increases heavily .`,
      `vary continuously .`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) reduces substantially .`
  },
  {
    question: `State whether the following statements are true or false.`,
    options: [
      `An electric motor converts mechanical energy into electrical energy.`,
      `An electric generator works on the principle of electromagnetic induction.`,
      `T he field at the center of a long circular coil carrying current will be parallel straight lines.`,
      `A wire with a green insulation is usually the live wire of an electric supply.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) T he field at the center of a long circular coil carrying current will be parallel straight lines.`
  },
  {
    question: `Match the Column-I with Column-II Column-I Column-II P. Two like poles (i) Red Q. Two unlike poles (ii) Black R. Live wire (iii) Repel S. Neutral wire (iv) Attracts`,
    options: [
      `P-(iii), Q-(i), R-(ii), S-(iv)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(i), Q-(iii), R-(iv), S-(ii)`,
      `P-(ii), Q-(i), R-(iii), S-(iv)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) P-(ii), Q-(i), R-(iii), S-(iv)`
  },
  {
    question: `Match the Column-I with Column-II. Column-I Column-II P. S.I unit of magnetic field (i) Small bar magnet capable of rotating freely Q. Magnetic field inside a solenoid (ii) Tesla R. Compass needle (iii) Acts as a temporary magnet S. Current carrying Solenoid (iv) Uniform`,
    options: [
      `P-(iii), Q-(ii), R-(i), S-(iv)`,
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `P-(iv), Q-(ii), R-(iii), S-(i)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(iv), R-(i), S-(iii)`
  },
  {
    question: `Choose the incorrect statement from the following regarding magnetic lines of force`,
    options: [
      `The direction of magnetic field at a point is taken to be the direction in which the north pole of a magnetic compass needle`,
      `Magnetic field lines are closed curves`,
      `If magnetic field lines are parallel and equidistant, they represent zero field strength`,
      `Relative strength of magnetic field is shown by the degree of closeness of the field lines`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) If magnetic field lines are parallel and equidistant, they represent zero field strength`
  },
  {
    question: `The pattern of the magnetic field produced by the straight current carrying conducting wire is`,
    options: [
      `In a direction opposite to the direction of current`,
      `In a direction parallel to the current carrying wire`,
      `Circular around the wire`,
      `In the direction of current flowing through the wire`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Circular around the wire`
  },
  {
    question: `Magnetic polarities of a solenoid can be determined by`,
    options: [
      `Use of compass needle`,
      `Right hand thumb rule`,
      `Fleming’ s left hand rule`,
      `Both ( a) or (b)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Right hand thumb rule`
  },
  {
    question: `Magnetic field inside a long current carrying straight solenoid is`,
    options: [
      `More at the ends than at the middle`,
      `Minimum in the middle`,
      `Uniform inside the solenoid`,
      `Both ( a) and (b) 163 Magnetic Effects of Electric Current`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) More at the ends than at the middle`
  },
  {
    question: `A soft iron rod is inserted inside a current carrying solenoid. The magnetic field inside the solenoid`,
    options: [
      `W ill decrease`,
      `W ill remains same`,
      `W ill increase`,
      `W ill become zero`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) W ill increase`
  },
  {
    question: `Fleming's left hand rule is used in`,
    options: [
      `Electric generator`,
      `Electric motor`,
      `DC generator`,
      `Both for generator and motor .`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Electric motor`
  },
  {
    question: `MCB stands for`,
    options: [
      `minute circuit breaker`,
      `miniature circuit breaker`,
      `minute current breaker`,
      `miniature current breaker`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) minute circuit breaker`
  },
  {
    question: `A Copper wire should not be used as a fuse wire because`,
    options: [
      `copper has very high melting point`,
      `copper has very low resistance`,
      `copper is very expensive`,
      `both ( a) and (b) 166 Class-X PHYSICS PW Other Rules to Find Direction of MFL`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) copper is very expensive`
  },
  {
    question: `Which one of the state ment best describes the nature of the magnetic field lines of a bar magnet?`,
    options: [
      `Field lines start from the north pole and end on the south pole of the magnet`,
      `Field lines start from the South pole and end on the North pole of the magnet`,
      `Field lines are continuous lines passing inside and outside the magnet. Only one field line passes through any given point.`,
      `Field lines are continuous lines passing inside and outside the magnet. Any number of field lines can pass through a point.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Field lines are continuous lines passing inside and outside the magnet. Only one field line passes through any given point.`
  },
  {
    question: `An electric current is passed through a straight conductor passing through the centre of a piece of cupboard. Some iron filings are sprinkled on the cardboard and tapped. The iron filings around the conductor.`,
    options: [
      `Settle as parallel lines`,
      `Settle as circles`,
      `Settle at one point`,
      `Do not acquire any regular pattern`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Settle as circles`
  },
  {
    question: `A current carrying wire produces`,
    options: [
      `Electric field only`,
      `Magnetic field only`,
      `Electric and magnetic fields`,
      `No fields`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Electric field only`
  },
  {
    question: `If the key in the arrangement is taken out and magnetic field lines are drawn over the horizontal plane ABCD. the lines will be + + Variable resistance Long straight conductor B A D O C K A – –`,
    options: [
      `Concentric circles`,
      `Elliptical in shape`,
      `Straight lines parallel to each other`,
      `Concentric circles near the point O but of elliptical shapes as we go away from it`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Straight lines parallel to each other`
  },
  {
    question: `At every point near a current carrying circular loop, the concentric circles representing the magnetic fields lines would become`,
    options: [
      `Lar ger and larger as we move away from the wire`,
      `So lar ge at the .centre of circular loop that they look like straight lines`,
      `Both ( a) and (b)`,
      `Neither (a ) nor (b)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) So lar ge at the .centre of circular loop that they look like straight lines`
  },
  {
    question: `Which of the following statement is not true? [Maharashtra 2012]`,
    options: [
      `Magnetic lines of forces are closed continuous curves`,
      `T wo magnetic lines of force never intersect each other`,
      `Ma gnetic lines of force are far away from each other at the poles`,
      `They start from the north pole and end on the south pole of the magnet`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Magnetic lines of forces are closed continuous curves`
  },
  {
    question: `Increasing the number of turns in the solenoid will`,
    options: [
      `Have no ef fect on the strength of magnetic field`,
      `W ill increase the strength of the magnetic field`,
      `W ill decrease the strength of the magnetic field`,
      `W ill change the direction of the magnetic field`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) W ill increase the strength of the magnetic field`
  },
  {
    question: `A circular loop placed in a plane perpendicular to the plane of paper carries a current. The current as seen from points A and B along the axis of the coil is anti-clockwise and clockwise respectively. The magnetic field lines point from B to A. The N-pole of the resultant magnet is on the face close to A B K + + – – Variable resistance`,
    options: [
      `A`,
      `B`,
      `A if the current is small, and B if the current is large`,
      `B if the current is small and A if the current is large`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A`
  },
  {
    question: `A straight current carrying wire is placed parallel to and over a compass needle. The deflection in the needle`,
    options: [
      `Be comes opposite when the direction of the current is reversed`,
      `Remains in the same direction even on reversing the direction of current`,
      `Ke eps fluctuating on passage of current in any direction`,
      `Do es not change on reversing the direction of current`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Do es not change on reversing the direction of current`
  },
  {
    question: `Magnitude of the force experienced by a current- carrying conductor when placed in magnetic field will be:`,
    options: [
      `Maximum if the directions of current and magnetic field are perpendicular to each other`,
      `Minimum if the directions of current and magnetic field are perpendicular to each other`,
      `Maximum if the directions of current and magnetic field are opposite to each other`,
      `Maximum if the directions of current and magnetic field are same`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Maximum if the directions of current and magnetic field are perpendicular to each other`
  },
  {
    question: `An electric motor`,
    options: [
      `W orks on the principle described by Fleming's left hand rule`,
      `Converts electrical ener gy to mechanical energy`,
      `Both ( a) and (b)`,
      `Neither (a ) nor (b)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both ( a) and (b)`
  },
  {
    question: `A copper ring is suspended by a thread. If one end of magnet is brought horizontally towards the ring as shown below, the ring will: N S`,
    options: [
      `Move towards the magnet`,
      `Not change the position`,
      `Move away from the magnet`,
      `First move towards and then move away from the magnet`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) First move towards and then move away from the magnet`
  },
  {
    question: `A magnet NS is placed along the axis of a circular coil. The magnet is moved away from the coil. The induced current in the coil is Coil N S`,
    options: [
      `Zero`,
      `Clockwise`,
      `Anti-clockwise`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Clockwise`
  },
  {
    question: `An electric generator is based on the principle of`,
    options: [
      `EMI`,
      `Magnetisation`,
      `Demagnetisation`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) EMI`
  },
  {
    question: `One advantage of AC power transmission over DC power transmission is`,
    options: [
      `AC transmit without much loss of ener gy`,
      `AC produces more heat during transmission`,
      `AC produces lar ger voltage during transmission`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) AC transmit without much loss of ener gy`
  },
  {
    question: `A positively charged plate and negatively charged plate are kept parallel to each other at a distance of 10 cm. An electron is release near the negative plate. Looking from the negative plate towards the positive plate, the magnetic field produced by the moving electron will be [NTSE-I 2019-20]`,
    options: [
      `clockwise`,
      `anti-clockwise`,
      `positive to negative plate`,
      `negative to positive plate Competitive Corner 177 Magnetic Effects of Electric Current`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) anti-clockwise`
  },
  {
    question: `An induced current is produced when a magnet is moved into a coil depend on the magnitude of induced current does not depend on [NTSE-I 2017]`,
    options: [
      `The speed with which the magnet is moved`,
      `The resistivity of the wire of the coil`,
      `The number of turns of the coil`,
      `The strength of the magnet`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The number of turns of the coil`
  },
  {
    question: `A bar magnet placed in non - uniform magnetic field experiences [NTSE-I 2017]`,
    options: [
      `only torque`,
      `only force`,
      `both torque and force`,
      `neither force nor torque`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) only force`
  },
  {
    question: `MRI stands for ______________. [NTSE-I 2017]`,
    options: [
      `Managing Response Index`,
      `Magnetic Resonance Index`,
      `Magnetic Resonance Imaging`,
      `Managing Response Imaging`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Managing Response Index`
  },
  {
    question: `Which of the following is not a property of magnetic lines of force. [NTSE-I 2017]`,
    options: [
      `The tangent at any point on the magnetic lines of force gives the direction of the magnetic field at that point.`,
      `No two magnetic lines of force can intersect each other`,
      `Magnetic l ines of force are crowded where the magnetic field is strong and far from each other where field is weak.`,
      `T hey are closed continuous curves. They start from south pole and end on north pole.`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) T hey are closed continuous curves. They start from south pole and end on north pole.`
  },
  {
    question: `A constant current I flows in a horizontal wire in the plane of the paper from West to East as shown in the figure. The direction of magnetic field at a point will be South to North. [NTSE-I 2018] E N W S I`,
    options: [
      `directly above the wire`,
      `directly below the wire`,
      `at a point located in the plane of the paper , on the north side of the wire.`,
      `at a point located in the plane of the paper , on the south 178 Class-X PHYSICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) directly above the wire`
  },
  {
    question: `Magnetic meridian is [ NTSE-I 2018]`,
    options: [
      `a point`,
      `a line along north-south`,
      `a horizontal plane`,
      `a vertical plane`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) a point`
  },
  {
    question: `Magnetic field due to current through a solenoid is similar to magnetic field produced by a bar magnet. [NTSE-I 2018]`,
    options: [
      `circular loop of conducting wire`,
      `rectangular loop of conducting wire`,
      `solenoid`,
      `thick copper wire`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) solenoid`
  },
  {
    question: `The S.I unit of magnet ic field induction is [NTSE-I 2018]`,
    options: [
      `Weber/m2`,
      `Tesla`,
      `W eber – m2`,
      `Weber`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Weber/m2`
  },
  {
    question: `The strength of magne tic field inside a long current carrying straight solenoid is: [NTSE-I 2018]`,
    options: [
      `Minimum in the middle`,
      `More at the ends than at the centre`,
      `Same at all points`,
      `Found to increase from one end to the other .`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Same at all points`
  },
  {
    question: `Under the influence of magnetic field a charged particle is moving in a circle of radius R with constant speed v. The time period of the motion: [NTSE-I 2019] 179 Magnetic Effects of Electric Current`,
    options: [
      `Depends on both R and v`,
      `Is independent of both R and v`,
      `Depends on R but not on v`,
      `Depends on v but not on R.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is independent of both R and v`
  },
  {
    question: `A uniform magnetic field pointing top to bottom in a plane of paper. When an electron is allowed to move perpendicular to it, it get deflected outwards. The electron must be moving along: [NTSE-I 2019] e–`,
    options: [
      `left to right`,
      `right to left`,
      `it is stationary`,
      `it can’ t deflect outward`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) left to right`
  },
  {
    question: `What is the magnitude of force F on a charge q moving with a velocity v in a perpendicular magnetic field B? [NTSE-I 2019]`,
    options: [
      `qB v`,
      `vB q`,
      `qvB`,
      `qv B`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) qvB`
  },
  {
    question: `T wo parallel wires carrying current in opposite directions: [NTSE-I 2019]`,
    options: [
      `attract each other`,
      `repel each other`,
      `do not af fect each other`,
      `get moved to perpendicular to each other`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) repel each other`
  },
  {
    question: `Inside a magnet, magnetic lines of force move from: [ NTSE-I 2019]`,
    options: [
      `north to south pole`,
      `away from north pole`,
      `south to north pole`,
      `away from south pole`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) away from south pole`
  },
  {
    question: `A square metal loop is moving away from a current carrying straight conductor as shown in the figure. What is the direction of induced current across the loop? [NTSE-I 2019]`,
    options: [
      `Clockwise`,
      `Anticlockwise`,
      `No induced current`,
      `May be clockwise or anticlockwise I V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Anticlockwise`
  },
  {
    question: `An electron move with velocity v in a uniform magnetic field B. The magnetic force experienced by the electron is [NTSE-I 2019]`,
    options: [
      `always zero`,
      `Never zero`,
      `zero if v is perpendicular to B`,
      `zero if v is parallel to B`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) zero if v is parallel to B`
  },
  {
    question: `The direction of induced current in a circuit is given by [NTSE-I 2020]`,
    options: [
      `Fleming’ s left hand rule`,
      `Fleming’ s right hand rule`,
      `Right hand thumb rule`,
      `Ampere’ s swimming rule`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Fleming’ s right hand rule`
  },
  {
    question: `The phenomen of electromagnetic induction is [NTSE-I 2020]`,
    options: [
      `the process of char ging a body`,
      `the process of generating magnetic field due to a current passing through a coil`,
      `the process of producing induced current in a coil due to relative motion between a magnet and the coil.`,
      `the process of rotating a coil of an electric motor 180 Class-X PHYSICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) the process of producing induced current in a coil due to relative motion between a magnet and the coil.`
  },
  {
    question: `Which one of the following statements best describes the nature of the field lines due to a bar magnet? [NTSE-II 2013-14]`,
    options: [
      `Field lines start form the north pole and end on the south pole. Any number of field lines can pass through a point.`,
      `Field lines start from the north pole and end on the south pole. Only one field line passes through a point.`,
      `Field lines are continuous lines passing inside and outside the magnet. Only one field line passes through a point.`,
      `Field lines are continuous lines passing inside and outside the magnet. Any number of field lines can pass through a point.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Field lines are continuous lines passing inside and outside the magnet. Only one field line passes through a point.`
  },
  {
    question: `Which of the following can produce a magnetic field? [NTSE-II 2014-15]`,
    options: [
      `Electric char ges at rest`,
      `Electric char ges in motion`,
      `Only by permanent magnets`,
      `Electric char ges whether at rest or in motion`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Electric char ges in motion`
  }
];
