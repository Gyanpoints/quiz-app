// Class 10 Maths Part-B (GyanPoints)
// 393 MCQs

const QUESTIONS = [
  {
    question: `Match the following correctly Column-I Column-II P. cos 1 sin 1 sin cos AA AA +++ (i) cosec A + cot A Q. cos sin 1 cos sin 1 AA AA −+ +− (ii) 2 cos A R. 1 sin 1 sin A A + − (iii) sec A + tan A S. 2sin 1 cos A A− (iv) 1 + cos A`,
    options: [
      `P-(i), Q-(ii), R-(iii), S-(iv)`,
      `P-(i), Q-(ii), R-(iv), S-(iii)`,
      `P-(ii), Q-(i), R-(iii), S-(iv)`,
      `P-(i), Q-(iv), R-(iii), S-(ii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(i), R-(iii), S-(iv)`
  },
  {
    question: `(sin 30° + cos 30°) – (sin 60° + cos 60°)`,
    options: [
      `–1`,
      `0`,
      `1`,
      `1 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1`
  },
  {
    question: `If the value of cos A = 4/5, then tan A = ?`,
    options: [
      `1`,
      `3/4`,
      `4/3`,
      `4/5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3/4`
  },
  {
    question: `The value of the expression [cosec (75° + θ) – sec (15° – θ) – tan (55° + θ) + cot (35° – θ)] is`,
    options: [
      `1`,
      `1 3`,
      `0`,
      `1 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0`
  },
  {
    question: `Given that: sin A = a/b, then cos A = ?`,
    options: [
      `22ba b +`,
      `22ba b −`,
      `2 2 b a`,
      `2 2 a b`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 22ba b −`
  },
  {
    question: `The value of (tan 1° tan 2° tan 3°... tan 89°) is`,
    options: [
      `0`,
      `1`,
      `3 2`,
      `1 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 2`
  },
  {
    question: `The value of 22 2 22 sin 22 sin 68 sin 63 cos63 sin 27 cos 22 cos 68  °+ ° + °+ ° ° °+ ° is`,
    options: [
      `3`,
      `2`,
      `1`,
      `4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `If cos 9α = sin α and 9α < 90°, then the value of tan 5α is`,
    options: [
      `3`,
      `1 3`,
      `3`,
      `1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1`
  },
  {
    question: `If cos (A + B) = 0, then the value of sin (A – B) is:`,
    options: [
      `cos A`,
      `cos 2B`,
      `sin A`,
      `cos 2A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) cos 2A`
  },
  {
    question: `If 4 tan A = 3, then 4sin cos ?4sin cos AA AA − =+`,
    options: [
      `2 3`,
      `1 3`,
      `1 2`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 3`
  },
  {
    question: `cos(90 )sin(90 ) tan(90 ) AA A −− =−`,
    options: [
      `sin2 A`,
      `cos2 A`,
      `0`,
      `1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0`
  },
  {
    question: `In a ΔABC, right angled at B, AB = 24 cm and BC = 7 cm. Then the value of tan C is:`,
    options: [
      `12 7`,
      `24 7`,
      `7 25`,
      `7 24`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 24 7`
  },
  {
    question: `If (2q + 30°) and (45° – q) are acute angles, then find the degree measure of q satisfying sin (2q + 30°) = cos (45° – q) is`,
    options: [
      `45°`,
      `60°`,
      `15°`,
      `90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60°`
  },
  {
    question: `If cot q + tan q = x and sec q – cos q = y, the value of (x2y)2/3 – (xy 2)2/3 is`,
    options: [
      `0`,
      `1`,
      `tan q`,
      `sec q`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `If sin q + cos q = p and sec q + cosec q = q, the value of q (p 2 – 1) is`,
    options: [
      `2q`,
      `2p`,
      `1`,
      `p – q`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2q`
  },
  {
    question: `33sin cos sin cos θ+ θ θ+ θ is equal to`,
    options: [
      `1 – sin q`,
      `1 – sin q cos q`,
      `1 – cos q`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `The value of sin 2 15° + sin2 30° + sin2 45° + sin2 60° + sin2 75° is`,
    options: [
      `1`,
      `3 2`,
      `5 2`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `2tan 11 sec θ ++θ equals to`,
    options: [
      `tan q`,
      `1 cos θ`,
      `sec 1 cot θ− θ`,
      `sec q + tan q`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) sec 1 cot θ− θ`
  },
  {
    question: `The value of sin cos sec tan 1 cosec cot 1 xx xx xx ++− +− is`,
    options: [
      `1 2`,
      `1`,
      `3`,
      `0`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `If sin q + cos q = p, then the value of sin 2 q + cos4 q in terms of p is`,
    options: [
      `22 11 2 p +− `,
      `221 ( 1) 12 +− −p`,
      `22 21 ( 1) 2 −− −p p`,
      `22 11 2 p −−  V ery Short Answer T ype Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 221 ( 1) 12 +− −p`
  },
  {
    question: `If sin q + cos q = 3 , then 1 sec coses =θθ`,
    options: [
      `1`,
      `0`,
      `1 2`,
      `3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 2`
  },
  {
    question: `If 1 + sin 2 q = 3 sin q cos q, then cot q =`,
    options: [
      `1 2`,
      `2`,
      `–2`,
      `3 Case Study-II If q is an acute angle, then sin (90° – q) = cos q, cos (90° – q) = sin q, tan (90° – q) = cot q, cosec (90° – q) = sec q.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `cos70 cos55 cosec35 sin 20 tan 45 ° °°+=°°`,
    options: [
      `2`,
      `1`,
      `3`,
      `0`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `cos58 cos38 cosec5223 sin 32 tan15 tan 60 tan 75 ° °°  −=    ° °°°`,
    options: [
      `0`,
      `2`,
      `1`,
      `3 26 Class-X MATHEMATICS PW Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `The trigonometric expression 22 22 2 1 (1 tan ) 4sin cos 4 tan −α− αα α is equal to`,
    options: [
      `–1`,
      `2`,
      `1`,
      `3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1`
  },
  {
    question: `If 44sin cos 1 a b ab θθ+= + , the value of 88 33 sin cos ab θθ+ is`,
    options: [
      `3() +ab b`,
      `3 1 () +ab`,
      `33 1 ab +`,
      `3() ab ab + +`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 1 () +ab`
  },
  {
    question: `If (a 2 – b2) sin q + 2ab cos q = a2 + b2, then the value of tan q is`,
    options: [
      `22 2 ab ab +`,
      `22ab ab +`,
      `22 2 ab ab −`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 22 2 ab ab −`
  },
  {
    question: `If x = a sec q cos φ, y = b sec q sin φ and z = c tan q, then 22 22 xy ab +=`,
    options: [
      `2 2 2 z a c +`,
      `2 21 z c −`,
      `2 2 1z c −`,
      `2 21 z c +`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 21 z c −`
  },
  {
    question: `If 3 sin q + 5 cos q = 5, then the value of 5 sin q – 3 cos q is equal to`,
    options: [
      `5`,
      `3`,
      `2`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `If a cos q + b sin q = m and a sin q – b cos q = n then a2 + b 2 is equal to.`,
    options: [
      `m + n`,
      `mn(m – n)`,
      `mn`,
      `m2 + n 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) mn(m – n)`
  },
  {
    question: `Given 3 sin α + 5 cos α = 5, then the value of (3 cos α – 5 sin α) 2 is equal to`,
    options: [
      `9`,
      `9 5`,
      `1 3`,
      `7 9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 9`
  },
  {
    question: `If sin q + sin 2 q + sin 3 q = 1, the value of cos 6 q – 4 cos 4 q + 8 cos 2 q is`,
    options: [
      `2`,
      `5`,
      `3`,
      `4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4`
  },
  {
    question: `If x sin 3 q + y cos3 q = sin q . cos q and x sin q = y cos q, the value of x 2 + y 2 is`,
    options: [
      `sin q.cos q`,
      `sec q`,
      `2`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) sec q`
  },
  {
    question: `If sin φ and cos φ are the roots of the equation ax2 + bx + c = 0, then`,
    options: [
      `(a – c) 2 + c 2 = 1`,
      `(a – c) 2 – c 2 = b 2`,
      `(a + c)2 + c 2 = b 2`,
      `(a + c)2 – c 2 = b 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (a + c)2 + c 2 = b 2`
  },
  {
    question: `If sin q + cosec q = 2, then the value of sin n q + cosecn q is`,
    options: [
      `2`,
      `1`,
      `5`,
      `None`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `If a cos q + b sin q + c = 0 and a 1 cos q + b 1 sin q + c1 = 0 then (ab 1 – a 1b)2 – (a 1c – ac 1)2 is equal to`,
    options: [
      `(bc1 – b 1c)2`,
      `4 (bc1 – b 1c)2`,
      `3 (bc1 – b 1c)2`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 (bc1 – b 1c)2`
  },
  {
    question: `tan α + cot α = a, then the value of tan 4 α + cot 4 α is equal to`,
    options: [
      `a 4 + 4a 2 + 2`,
      `a 4 – 4a 2 + 2`,
      `a 2 – 4a 2 – 5`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) a 4 + 4a 2 + 2`
  },
  {
    question: `If sec q = 2, evaluating 1 tan 1 cos −θ +θ gives`,
    options: [
      `35−+`,
      `31+`,
      `32−`,
      `31 2 +`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 35−+`
  },
  {
    question: `If sin 2q = cos 3q and q is a acute then sin 5q = ...`,
    options: [
      `0`,
      `1`,
      `3`,
      `2 36 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 36 Class-X MATHEMATICS PW`
  },
  {
    question: `If 3 tan 3sinθ= θ , then the value of sin 2 q – cos2 q`,
    options: [
      `1 3`,
      `2 3`,
      `3 5`,
      `2 5`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 5`
  },
  {
    question: `If p sin x = q. If x is acute, then 22pq − tan x is equal to`,
    options: [
      `p – q`,
      `q`,
      `pq`,
      `p + q`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) p + q`
  },
  {
    question: `For all values of q, 1 + sin q, can be ________`,
    options: [
      `positive`,
      `negative`,
      `non-positive`,
      `non-negative`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) non-positive`
  },
  {
    question: `If x = p (sec q + tan q) and y = q(sec q – tan q), then`,
    options: [
      `xy – pq = 0`,
      `xy + pq = 0`,
      `0xy pp+=`,
      `x2y2 = pq + 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) xy + pq = 0`
  },
  {
    question: `If 4 sin a + 5 cos a = 4, the 5 sin a – 4 cos a = ________`,
    options: [
      `±5`,
      `±4`,
      `±3`,
      `±2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ±4`
  },
  {
    question: `The maximum value of sin q cos q is`,
    options: [
      `0`,
      `–1`,
      `1 2−`,
      `1 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 2−`
  },
  {
    question: `sin 35 tan12 sin18 ?cos55 cot 78 cos 72 °°°−− =°°°`,
    options: [
      `1`,
      `0`,
      `3`,
      `–1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0`
  },
  {
    question: `If cosec A = 2, then the value of tan cos 1 sin AA A+ + will be`,
    options: [
      `1 23`,
      `2 3`,
      `1 3`,
      `23`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 3`
  },
  {
    question: `The value of the expression [sec(75° – q) – cosec(15° + q) – tan(55° – q) + cot(35° + q)] is equal to`,
    options: [
      `3/2`,
      `0`,
      `–1`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0`
  },
  {
    question: `If sin q + cos q 3 2= then sin q⋅cos q =`,
    options: [
      `1`,
      `2 3`,
      `5 8`,
      `0`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0`
  },
  {
    question: `If cos2 q + 2sin2 q + 3cos2 q + 4sin2 q + ...+ 200 sin2 q = 10050, where q is an acute angle, find the value of (sin q + 3 cos q) 2`,
    options: [
      `8`,
      `4`,
      `2`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `If 22sin cos2 ,2xy θθ== for all real values of q, then`,
    options: [
      `x + y = 1`,
      `x + y = 2`,
      `22xy+≤`,
      `2xy+≥`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2xy+≥`
  },
  {
    question: `If cosec x + cot x = a, then the value of cos x is`,
    options: [
      `2 2 1a a +`,
      `2 2 1 1 a a + −`,
      `2 2 1 1 a a − +`,
      `2 1 2 a a +`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 1 2 a a +`
  },
  {
    question: `If sin q + sin2 q = 1, then cos12 q + 3cos10 q + 3cos8 q + cos6 q = ________`,
    options: [
      `sinq`,
      `cosq`,
      `0`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) cosq`
  },
  {
    question: `If secq + tanq = m and secq – tanq = n, then the value of mn is`,
    options: [
      `2`,
      `1`,
      `±1`,
      `±2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) ±1`
  },
  {
    question: `If sin 52°.cosec(90° – 2A) = 1, then the measure of angle ‘A’ is`,
    options: [
      `19°`,
      `26°`,
      `38°`,
      `52°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 26°`
  },
  {
    question: `If (sinq + tanq) = a and (tanq – sinq) = b, then a2 – b2 =`,
    options: [
      `ab`,
      `2 ab`,
      `4ab`,
      `4 ab Competitive Corner 37 Introduction to Trigonometry`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 ab`
  },
  {
    question: `sin cos ?1 cot 1 tan θθ +=−θ−θ`,
    options: [
      `cosq – sinq`,
      `tanq + 1`,
      `cosq + sinq`,
      `cotq + 1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) cosq – sinq`
  },
  {
    question: `If 5 tan q = 4 then the value of 5sin 4cos 5sin 4cos θ− θ θ+ θ is`,
    options: [
      `5 4`,
      `4 5`,
      `1`,
      `0`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 4`
  },
  {
    question: `If 3cos( ) 2AB−= and sin(A + B) = 1 then the value of A and B is`,
    options: [
      `45° and 15°`,
      `30° and 15°`,
      `60° and 30°`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `If 3 sinq + 5 cosq = 5, then the value of 5 sinq – 3 cosq is ________`,
    options: [
      `3`,
      `5`,
      `1 3`,
      `1 5`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 5`
  },
  {
    question: `If (secq – tanq) = k, where k ≠ 0 then the value of (secq + tanq) is`,
    options: [
      `11 k−`,
      `1 – k`,
      `1 + k`,
      `1 k`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 k`
  },
  {
    question: `If x = 1 + cos A, y = cosec 2A, z = 1 – cos A, then the value of (xyz) is ________`,
    options: [
      `cosec A`,
      `1`,
      `cosec2 A`,
      `cos2 A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) cosec2 A`
  },
  {
    question: `If a cosq – b sinq = c, then a sinq + b cosq = ?`,
    options: [
      `222abc± ++`,
      `222abc± +−`,
      `222abc± −+`,
      `222abc± −−`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 222abc± +−`
  },
  {
    question: `If sinq + sin2q = 1, then cos 2q + cos 4q =`,
    options: [
      `1`,
      `2`,
      `0`,
      `–1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `If sin q + cosec q = 2, then find sin 50 q + cosec50 q.`,
    options: [
      `2`,
      `3`,
      `50`,
      `100`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `If sin4 x + sin 2x = 1, then value of cos 4x + cos 2x is`,
    options: [
      `5 25−`,
      `sin2x`,
      `tan2x`,
      `1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1`
  },
  {
    question: `If cosecq + cotq = p, then the value of 2 2 1 1 p p − + is`,
    options: [
      `cosq`,
      `–cosq`,
      `sinq`,
      `–sinq`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –cosq`
  },
  {
    question: `If ( )22cos sin sin sinu = θ θ+ θ+ α then u is less than or equal to`,
    options: [
      `21 sin+α`,
      `21 cos+α`,
      `22 sin+α`,
      `22 cos+α`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21 cos+α`
  },
  {
    question: `If tan 2q = 1 – e 2, then the value of secq + tan 3q cosecq is equal to`,
    options: [
      `(1 – e 2)1/2`,
      `(2 – e 2)1/2`,
      `(2 – e 2)3/2`,
      `(1 – e 2)3/2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (2 – e 2)3/2`
  },
  {
    question: `The value of cos x° – sin x° (0 ≤ x < 45) is`,
    options: [
      `0`,
      `Positive`,
      `Negative`,
      `Sometimes negative and sometimes positive`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Positive`
  },
  {
    question: `If cos4q + sin 2q = A, then`,
    options: [
      `1 ≤ A ≤ 2`,
      `1 2 A≤ ≤1`,
      `3 14 A≤≤`,
      `3 13 4 16A≤≤`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 2 A≤ ≤1`
  },
  {
    question: `If cosecx – sinx = a 3 and sec x – cos x = b 3, then`,
    options: [
      `a 2b2(a2 + b 2) = 1`,
      `ab(a 2 + b 2) = 1`,
      `a 2 + b 2 = 1`,
      `b 2 – a 2 = 1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) a 2b2(a2 + b 2) = 1`
  },
  {
    question: `If 1cosec cot , 3xx−= where x ≠ 0, then the value of cos2x – sin 2x is`,
    options: [
      `16 25`,
      `9 25`,
      `8 25`,
      `7 25`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 25`
  },
  {
    question: `If q is an acute angle such that 2tan , 3θ= then evaluate 1 tan 1 cot sin cos sec cosec +θ −θ    θ+ θ θ+ θ  `,
    options: [
      `1 5−`,
      `4 13 −`,
      `1 5`,
      `4 13 38 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 5−`
  },
  {
    question: `If 0 ≤ x ≤ p and 22sin cos81 81 30,xx+= then greatest value of x =`,
    options: [
      `6 π`,
      `3 π`,
      `5 6 π`,
      `2 3 π [Useful information: pc = 180°, sin(180 – q) = sinq, sinq ≥ 0 when 0 ≤ q ≤ 180°]`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 6 π`
  },
  {
    question: `If tanq + secq = 1.5, then value of sinq is`,
    options: [
      `5 13`,
      `12 13`,
      `3 5`,
      `2 3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 13`
  },
  {
    question: `If sin2x + sin2y + sin2z = 0, then which of the following is a possible value of cos 2x + cos 2y + cos 2z?`,
    options: [
      `3`,
      `–3`,
      `–1`,
      `–2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3`
  },
  {
    question: `If x = cos 1° cos 2° cos 3°... cos 89° and y = cos 2° cos 6° cos 10°... cos 86°, then y x is`,
    options: [
      `266.5`,
      `268.5`,
      `265.5`,
      `267.5 Multiple Choice Questions`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 266.5`
  },
  {
    question: `A window of a house is h metres high above the ground. When seen from its window, the angles of elevation and depression of the top and bottom of another house on the opposite side of the street are α and β respectively, then match the columns. M D A C B h Column-I Column-II P. DM (i) h(1 + tan α cot β) Q. AC (ii) h tan α cot β R. CM (iii) h cosec β S. AD (iv) h cot β`,
    options: [
      `P-(ii), Q-(iii), R-(i), S-(iv)`,
      `P-(iii), Q-(iv), R-(ii), S-(i)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(iv), R-(i), S-(iii)`
  },
  {
    question: `The angle of elevation of the top of a pole is 30°. If the height of the pole is doubled, then the angle of elevation of its top will`,
    options: [
      `Also get doubled`,
      `Will get halved`,
      `Will be less than 60 degree`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Will be less than 60 degree`
  },
  {
    question: `The angles of elevation of the top of a pole from two distants points ‘s’ and ‘t’ from its foot and in the same straight line, are complementary. Then the height of the pole is P h R s Q t M`,
    options: [
      `st2 units`,
      `s t units`,
      `st units`,
      `s t units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) s t units`
  },
  {
    question: `When sun's elevation is 30°, the shadow of a tower standing on a level plane is found to be 50m longer than when it is 60°. Find the height of the tower.`,
    options: [
      `53 m`,
      `25 3 m`,
      `15 3 m`,
      `33 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15 3 m`
  },
  {
    question: `A w ire connects the top of two poles of height 20m and 14m. Find the length of the wire if it makes an angle of 30° with the horizontal.`,
    options: [
      `12m`,
      `16 m`,
      `14m`,
      `6m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 16 m`
  },
  {
    question: `T he angle of elevation of the top of an unfinished tower from a point a distance of 100 m from its base is 45°, how much higher must the tower be raised so that its angle of elevation at the same point may be 60°?`,
    options: [
      `120m`,
      `72 m`,
      `80m`,
      `7 3m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 72 m`
  },
  {
    question: `A tree which is 6 m tall casts a shadow of length 4m on the ground. At the same time, a flag pole cast a shadow 50 m long. Find the height of the flag pole.`,
    options: [
      `75m`,
      `10 0m`,
      `80m`,
      `12 5m`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 75m`
  },
  {
    question: `A pole subtends an angle of 30° at a point on the same level as its foot. From a second point, h metres above the first point, the angle of depression of the foot of the pole is 60°. The height of the pole is`,
    options: [
      `2 h m`,
      `2h m`,
      `3 h m`,
      `3 h m`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 h m`
  },
  {
    question: `A tower PQ is 100m high. When the angle of elevation of the top changes from 30° to 45°, the shadow of the tower decreases by x metres. The value of x is:`,
    options: [
      `3m`,
      `100 3 m`,
      `100( 3 1) m−`,
      `100( 3 1) m+ 68 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 100( 3 1) m+ 68 Class-X MATHEMATICS PW`
  },
  {
    question: `A chimney leans towards north, a and b be its angles of elevation respectively when observed from equal distance from north and south of the chimney in the same horizontal plane. If q is the inclination of the chimney to the vertical, then find the value of tan q .`,
    options: [
      `cos( ) 2sin sin α+β αβ`,
      `sin( ) 2cos sin α−β αβ`,
      `sin( ) 2sin sin α−β αβ`,
      `cos( ) 2 cos cos α+β αβ`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) sin( ) 2cos sin α−β αβ`
  },
  {
    question: `The ratio of the height of a pillar and its shadow cast on the ground during a day is 1 : 3 . What is the elevation of the sun at that time?`,
    options: [
      `15°`,
      `30º`,
      `45°`,
      `60°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 60°`
  },
  {
    question: `From the top of a tower of h metre high, the angles of depression of two objects, which are in line with the foot of the tower are a and b (b > a). Find the distance between two objects.`,
    options: [
      `h (tan a – tan b)`,
      `h (cot a – tan b)`,
      `h (cot a – cot b)`,
      `h (cot a + cot b)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) h (cot a + cot b)`
  },
  {
    question: `The angles of elevation of the top of a 12m high tower from two points in opposite directions with it are complementary. If distance of one point from its base is 16m, then distance of second point from tower’s base is:`,
    options: [
      `24m`,
      `9m`,
      `12m`,
      `18m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9m`
  },
  {
    question: `From the top of a 60m high tower, the angles of depression of the top and bottom of pillar are 30° and 60° respectively. Then the height of the pillar is:`,
    options: [
      `20m`,
      `20 3 m`,
      `40m`,
      `40 3 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40m`
  },
  {
    question: `Angle of elevation of a tower from a point at a distance of 15 meter from foot of the tower is 60º. Find height of the tower?`,
    options: [
      `15m`,
      `3 m`,
      `15 3 m`,
      `15 3 m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 m`
  },
  {
    question: `The angle of elevation of a cloud from a point 100 metre above the surface of a lake is 30° and the angle of depression of its image in the lake is 60° then height of the cloud above the lake is:`,
    options: [
      `100m`,
      `50m`,
      `200m`,
      `150m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 50m`
  },
  {
    question: `An aeroplane is flying horizontally at a height of 3150m above horizontal plane ground. At a particular instant, it passes another plane Vertically below it. At this instant, the angles of elevation of the planes from a point on the ground are 30° and 60°. Hence, the distance between the two planes at that instant is:`,
    options: [
      `1050m`,
      `2100m`,
      `4200m`,
      `5250m`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1050m`
  },
  {
    question: `A vertical pole of height 10 metres stands at one corner of a rectangular field. The angle of elevation of its top from the farthest corner is 30°, while that from another corner is 60°. The area (in m²) of rectangular field is:`,
    options: [
      `200 2 3`,
      `400 3`,
      `200 2 3`,
      `400 2 3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 200 2 3`
  },
  {
    question: `Two straight roads OA and OB intersect at O. A tower is situated in the interior of the angle formed by them and subtends an angle of 45° and 30° at the points A and B respectively, where the roads are nearest to it. If OA = a units and OB = b units, then the height of the tower is:`,
    options: [
      `22 2 ab − units`,
      `22 2 ba − units`,
      `223( ) 2 ba − units`,
      `223( ) 2 ab − units`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 223( ) 2 ab − units`
  },
  {
    question: `An observer standing at the top of a tower, finds that the angle of elevation of a red bulb on the top of a light house of height H is a . Further, he finds that the angle of depression of reflection of the bulb in the ocean is b . Therefore, the height of the tower is:`,
    options: [
      `(tan tan ) (tan tan ) H β− α β+ α units`,
      `sin ( ) cos ( ) H β−α α+β units`,
      `(cos cos ) (cot cot ) H α− β α+ β units`,
      `H units 76 Class-X MATHEMATICS PW Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) H units 76 Class-X MATHEMATICS PW Multiple Choice Questions`
  },
  {
    question: `A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Length PQ is:`,
    options: [
      `12 cm`,
      `13 cm`,
      `8.5 cm`,
      `√119 cm Sol. (d) 12 cm QP 5 cm O PQ = 22(12) 5 119−=`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8.5 cm`
  },
  {
    question: `In Fig., if TP and TQ are the two tangents to a circle with centre O so that ∠POQ = 110°, then ∠PTQ is equal to 110° O P T Q NCERT Exercise 109 Circle`,
    options: [
      `60°`,
      `70°`,
      `80°`,
      `90° Sol. (b) ∠OPT = 90º ∠OQT = 90º ∠POQ = 110º TPOQ is a quadrilateral. ∴∠PTQ + ∠POQ = 180º ⇒ ∠PTQ + 110º = 180º ⇒ ∠PTQ = 180º –110º = 70º Hence, correct options is (b)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 70°`
  },
  {
    question: `If tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°, then ∠POA is equal to`,
    options: [
      `50°`,
      `60°`,
      `70°`,
      `80°`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 70°`
  },
  {
    question: `There are two circles given with C 1(O1, r1) and C2(O2, r2) where O 1, O2 represents the centres and r1, r2 represents the radii of the circles C1, C2 respectively. Column-I Column-II P. If O1O2 = r 1 + r 2 (i) Number of common tangents = 4 Q. If the length O 1O2 > r1 + r 2 (ii) Number of common tangents = 2 R. If O1O2 < r 1 + r 2 (iii) Number of common tangents is 3 S. If O1O2 = r 1 – r 2 (iv) Number of common tangents = 1`,
    options: [
      `P-(iv), Q-(i), R-(iii), S-(ii)`,
      `P-(iii), Q-(i), R-(ii), S-(iv)`,
      `P-(i), Q-(iii), R-(ii), S-(iv)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(i), Q-(iii), R-(ii), S-(iv)`
  },
  {
    question: `Radii of two circles are 7 cm and 3 cm. If one of those lies wholly inside the other and the distance between their centres is d, then d belongs to`,
    options: [
      `d < 4`,
      `d > 2`,
      `d > 4`,
      `d < 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) d > 4`
  },
  {
    question: `As shown in the given figure, BA is the diameter, AM and MTC are tangents to the circle. If CB = BT and ∠BTC = 25°, then ∠AMT = _________ A B C T M`,
    options: [
      `60°`,
      `130°`,
      `65°`,
      `92°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 130°`
  },
  {
    question: `The length of the tangent from a point N to a circle of radius 12 cm is 16 cm. The distance of point N from the centre of the circle is:`,
    options: [
      `2 7cm`,
      `8 cm`,
      `25 cm`,
      `20 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 25 cm`
  },
  {
    question: `If TA and TB are two tangents to a circle with centre O, such that ∠AOB = 125°, then ∠ATB is equal to`,
    options: [
      `100°`,
      `80°`,
      `55°`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 80°`
  },
  {
    question: `AB is a tangent to a circle with centre O at the point A. If ΔOAB is an isosceles triangle, then ∠OBA is equal to`,
    options: [
      `45°`,
      `30°`,
      `120°`,
      `25°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 25°`
  },
  {
    question: `The length of the tangent drawn from a point 4 cm away from the centre of a circle of radius 2 cm is`,
    options: [
      `2 7 cm`,
      `10 cm`,
      `2 3cm`,
      `6 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 cm`
  },
  {
    question: `In the given figure, POQ is diameter. Find the value of z C x° AB O 35° R P Q O z°`,
    options: [
      `55°`,
      `60°`,
      `35°`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `As shown in the given figure, PR is a tangent and O is the centre of the circle. Find ∠PRO if ∠ROQ = 130° CO A 130° B P O R Q`,
    options: [
      `60°`,
      `40°`,
      `30°`,
      `65°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 65°`
  },
  {
    question: `In the given figure, O is the centre of the circle and ∠ONM = 30°. If ON = 8 cm, then the radius of the circle is O M N`,
    options: [
      `3 cm`,
      `4 cm`,
      `83 cm`,
      `23 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 cm`
  },
  {
    question: `From a point B, the length of the tangent to a circle is 24 cm and the distance of B from the centre is 25 cm. The radius of the circle is`,
    options: [
      `12 cm`,
      `7 cm`,
      `20 cm`,
      `26.5 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20 cm`
  },
  {
    question: `Two concentric circles are given having radii a and b where a is greater than b, then the length of a chord of larger circle which touches the other is 116 Class-X MATHEMATICS PW`,
    options: [
      `222 ab −`,
      `222 ab +`,
      `a2 – b2`,
      `22ab −`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 222 ab +`
  },
  {
    question: `A circle having centre 'O' at the diagonal of the unit square passes through points A and B that trisect the given diagonal. Find the radius of the circle.`,
    options: [
      `1 83`,
      `1 62`,
      `1 33`,
      `1 32`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 62`
  },
  {
    question: `PQ and RS are two common tangents to circles which touch each other at a point R. If S lies on PQ, such that RS = 4 cm, then PQ is`,
    options: [
      `8 cm`,
      `12 cm`,
      `3 cm`,
      `2 cm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8 cm`
  },
  {
    question: `A circle is inscribed in a ΔPQR having sides PR, PQ and QR are 8 cm, 10 cm and 12 cm respectively, then QA, RB and PC are P z R Q C B A z x y x y`,
    options: [
      `11, 5, 7`,
      `7, 9, 13`,
      `7, 5, 3`,
      `3, 5, 7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 11, 5, 7`
  },
  {
    question: `The incircle of ΔABC touches AB at P, BC at Q and CA at R. The length of AB and CR is 5 cm and 3cm respectively, then find the perimeter of ΔABC. A BC PR Q`,
    options: [
      `16 cm`,
      `18 cm`,
      `14 cm`,
      `15 cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 15 cm`
  },
  {
    question: `AB and CD are tangents to the circle having centre 'O' as shown in fig. If ∠DAB = 40°, then find ∠DCA. A C B DO`,
    options: [
      `100°`,
      `80°`,
      `70°`,
      `60° Very Short Answer T ype Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 60° Very Short Answer T ype Questions`
  },
  {
    question: `Find the length of PA`,
    options: [
      `5`,
      `3`,
      `7`,
      `10`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7`
  },
  {
    question: `Find the length of QB`,
    options: [
      `3`,
      `9`,
      `7`,
      `5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9`
  },
  {
    question: `If DR = 5 m, then DS is equal to:`,
    options: [
      `6 m`,
      `11 m`,
      `5 m`,
      `18 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 m`
  },
  {
    question: `The length of AS is:`,
    options: [
      `18 m`,
      `13 m`,
      `14 m`,
      `12 m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 13 m`
  },
  {
    question: `The length of PB is:`,
    options: [
      `12 m`,
      `11 m`,
      `13 m`,
      `20 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 13 m`
  },
  {
    question: `What is the angle of OQB?`,
    options: [
      `60°`,
      `30°`,
      `45°`,
      `90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30°`
  },
  {
    question: `What is the diameter of given circle?`,
    options: [
      `22 m`,
      `33 m`,
      `20 m`,
      `30 m Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30 m Quick Recall Fill in the Blanks`
  },
  {
    question: `In the given figure, if QM = 8 and MN = 16.5, then QT = ? N M T Q`,
    options: [
      `14 cm`,
      `18 cm`,
      `12 cm`,
      `10 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 12 cm`
  },
  {
    question: `Circle C(O, r) touches the circle C(Oʹ, rʹ) internally at A. AB is a chord of larger circle which intersects the smaller circle at P, then AP : AB =`,
    options: [
      `2 'r r`,
      `2'r r`,
      `2 2' r r`,
      `' r r`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2'r r`
  },
  {
    question: `QT is a tangent and QMN is a secant as shown in figure. If QT = 6 cm, MN = 5 cm, then the length of QM is T Q O M N`,
    options: [
      `8 cm`,
      `6 cm`,
      `10 cm`,
      `4 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10 cm`
  },
  {
    question: `In the given figure, PQ = OQ and XY is a tangent of a circle. If ∠XOP = 125°, then ∠OPQ is ___________ P Q X O Y`,
    options: [
      `27.5°`,
      `55°`,
      `18°`,
      `60° 130 Class-X MATHEMATICS PW A B 5 cm 10 cmO P Q M3c m O΄ (a) 25 cm (b) 20 cm (c) 10 cm (d) None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 55°`
  },
  {
    question: `Two circles of radii, r = 2 cm and r' = 3 cm touch each other externally at M. AMB is a secant intersecting the circles respectively at A and B (other than M), then MA MB MA + is equal to`,
    options: [
      `5 2`,
      `4 3`,
      `3 2`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 3`
  },
  {
    question: `Triangle ABC has in centre I and the in circle touches BC, CA at D, N respectively. Let BI be produced to meet DN at M. If ∠BMD = 55°, ∠IAN is equal to`,
    options: [
      `30°`,
      `55°`,
      `75°`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `As shown in the given diagram, regular pentagon ABCDE is inscribed in a circle O. Chord EC and DB intersect at N. Chord DB is extended to M and tangent MA is drawn. What is ∠AMD? A C E B M O N D`,
    options: [
      `30°`,
      `36°`,
      `72°`,
      `120°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 120°`
  },
  {
    question: `A point on a circle inscribed in a square is '1' and '2' units from the closest sides of the square. Find the area of the square. P Q S R1 2 M`,
    options: [
      `20(3 2 2)+`,
      `10(3 2)+`,
      `20( 30 2)+`,
      `10( 3 2)+`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10(3 2)+`
  },
  {
    question: `In a circle, AB is a chord and the tangent at A and B meet at C. If D is any point on the circle and DL, DM and DN are perpendiculars from D to AB, BC and CA respectively. Which one is true?`,
    options: [
      `DL2 = DM.DN`,
      `DN2 = DM.DL`,
      `DM2 = DL.DN`,
      `DL2 = DM2 + DN2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DM2 = DL.DN`
  },
  {
    question: `As shown in the figure given below, AB is a diameter of a circle and AC, CD and BD are tangents to the circle at points A, M and B respectively. If CM.DM = 3. Determine the area of circle. C A DM O r r B`,
    options: [
      `5π`,
      `3π`,
      `2π`,
      `4π`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3π`
  },
  {
    question: `In the given figure, a circle is inscribed in a quadrilateral PQRS. If QR = 38 cm, QA = 27 cm, SR = 25 cm and PS perpendicular RS, then the radius of the circle is 27 cm A P M S N 25 cm 38 cm R B Q O`,
    options: [
      `14 cm`,
      `20 cm`,
      `13 cm`,
      `18 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 cm`
  },
  {
    question: `PQR is a right angled triangle, right angled at Q such that QR = 10 cm and PQ = 24 cm. A circle with centre O is inscribed in ΔPQR. The radius of the circle is`,
    options: [
      `13 cm`,
      `4 cm`,
      `8 cm`,
      `12 cm 131 Circle`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 13 cm`
  },
  {
    question: `P, Q, R and S are points on the circumference of a circle with centre O. A tangent is drawn from T to touch the circle at R. ∠PTR = 36° and TPO is a straight line. Find (a + b) Q R T P S a b O`,
    options: [
      `20°`,
      `19°`,
      `27°`,
      `26°`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20°`
  },
  {
    question: `In the given diagram, O is the centre of the circle and S, M and N are the mid points of PQ, QO and OP respectively. If ∠SMN = 30°, then ∠PRQ is N M O PS Q R`,
    options: [
      `30°`,
      `120°`,
      `90°`,
      `60°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 60°`
  },
  {
    question: `AAʹ and BBʹ are two direct common tangents to two circles intersecting in the points P and Q. The common chord when produced intersect AA' at M and BB' at N, then AA' 2 + PQ 2 is equal to`,
    options: [
      `MN2`,
      `NP2`,
      `MQ 2`,
      `NQ2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) NQ2`
  },
  {
    question: `From a point A, two tangents AP and AQ are drawn to a circle with centre O. If length of OA = diameter of the circle, then ΔPA Q is P O Q AB`,
    options: [
      `Equilateral triangle`,
      `Isosceles triangle`,
      `Right angle triangle`,
      `Scalene triangle`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Scalene triangle`
  },
  {
    question: `Two circles touch each other internally at O. Chord AB of the larger circle touches the smaller circle at C, then ∠AOC is equal to A X Y C D B O`,
    options: [
      `∠CAO`,
      `∠COD`,
      `∠OCD`,
      `∠OCB`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) ∠OCD`
  },
  {
    question: `Two circles touch each other externally at C and AB is a common tangent to the circles, then ∠ACB =`,
    options: [
      `60°`,
      `45°`,
      `30°`,
      `90°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 45°`
  },
  {
    question: `In fig, if PQR is the tangent to a circle at Q whose centre is O, AB is a chord parallel to PR and ∠BQR = 70°, then ∠AQB is equal to P RQ 70° A S O B`,
    options: [
      `15°`,
      `40°`,
      `35°`,
      `50°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 40°`
  },
  {
    question: `If two tangents are inclined at an angle of 60° are drawn to a circle of radius 3 cm, then length of each tangent is equal to A B 3 cm 3 cm O 60°`,
    options: [
      `33 2 cm`,
      `63 2 cm`,
      `22 cm`,
      `3 3 cm 132 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 33 2 cm`
  },
  {
    question: `In the given figure, AB is the diameter of a circle with O and AT is a tangent. If ∠AOO = 58°, then the value of ∠ATQ is B Q O A T 58°`,
    options: [
      `52°`,
      `61°`,
      `46°`,
      `75°`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 46°`
  },
  {
    question: `The chords PQ and RS of a circle are extended to meet at the point O. If PQ = 6 cm, OQ = 8 cm, OS = 7 cm, then RS =`,
    options: [
      `12 cm`,
      `9 cm`,
      `10 cm`,
      `16 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9 cm`
  },
  {
    question: `PQRS is a square of side 6 cm each and T is mid point of QR. What is the radius of circle inscribed in DTSR. QP S R T`,
    options: [
      `3 35−`,
      `6 35+`,
      `2 35+`,
      `35+`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 35+`
  },
  {
    question: `In figure PQ, is a chord of a circle with centre O and PT is its tangent at P. If ∠QPT = 60° then ∠PRQ is P T R Q O`,
    options: [
      `105°`,
      `115°`,
      `120°`,
      `130°`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 115°`
  },
  {
    question: `In the given figure, BC is the diameter of a circle and ∠BAO = 60° then ∠ADC is equal to`,
    options: [
      `30°`,
      `45°`,
      `60°`,
      `90°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 90°`
  },
  {
    question: `In the given figure PA = 4 cm, AB = 5 cm. Then length of PT will be:`,
    options: [
      `13 cm`,
      `9 cm`,
      `6 cm`,
      `4 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9 cm`
  },
  {
    question: `Two concentric circles with center O, have radii 15 cm and 9 cm. From a point A on the bigger circle tangents AB and AC are drawn to the smaller circle at B and C, respectively, intersecting bigger circles at D and E, respectively, OF ⊥ DE at F. The length of OF is`,
    options: [
      `3.8 cm`,
      `4.2 cm`,
      `4.5 cm`,
      `5.1 cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5.1 cm`
  },
  {
    question: `C1 and C2 are two circles in a plane. If N is the total number of common tangents, then which of the following is wrong?`,
    options: [
      `N = 2 when C1 and C2 intersect but do not touch`,
      `N = 4 when C1 and C2 are disjoint`,
      `When C1 and C2 touch then N must be less than 3`,
      `N can never be more than 4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) N can never be more than 4`
  },
  {
    question: `In the figure, BC is a chord of the circle with centre O and A is a point on the minor arc BC. Then, ∠BAC-∠OBC is equal to`,
    options: [
      `30°`,
      `60°`,
      `80°`,
      `90° CB A D O T P A B5 cm 4 cm B C A O Competitive Corner 133 Circle`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60°`
  },
  {
    question: `In the figure, DAPB is formed by three tangents to the circle with centre O. If ∠APB = 40°, then the measure of ∠BOA is A T O R B P S 40°`,
    options: [
      `50°`,
      `55°`,
      `60°`,
      `70°`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 60°`
  },
  {
    question: `Three circles with radii r 1, r2 and r touch each other externally as shown in the adjoining figure. If PQ is their common tangent and r 1 > r2, then which of the following relations is correct? P O r2 r1 r`,
    options: [
      `r1 – r2 = r`,
      `r1 + r2 = 2r`,
      `12 111 rr r+=`,
      `12 111 rr r +=`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) r1 + r2 = 2r`
  },
  {
    question: `A circle C is drawn inside a square S so that the four sides of S are tangents to C. An equilateral triangle T is drawn inside C with its vertices on C. If the area of S is k times the area of T, then the value of k is`,
    options: [
      `16 33`,
      `16 3`,
      `32 33`,
      `32 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 16 3`
  },
  {
    question: `In the adjoining figure, ABC is a triangle in which ∠B = 90° and its incircle C1 has radius 3. A circle C2 of radius 1 touches sides AC, BC and the circle C1. Then length AB is equal to`,
    options: [
      `3 63+`,
      `10 3 2+`,
      `10 2 3+`,
      `9 33+ A B C C2 C1 3 1 Multiple Choice Questions`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3 63+`
  },
  {
    question: `Match the following: Column-I Column-II P. With the decrease in the area of circle, the ratio of perimeter and radius (i) May increase or decrease Q. With the increase in the area of a circle, the difference between perimeter and radius (ii) Increases R. As the arc length increases the area of minor sector (iii) Remains constant S. As the perimeter of a triangle increases, the area of its circumcircle (iv) First increases then decrease`,
    options: [
      `P-(iii), Q-(ii), R-(iv), S-(i)`,
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(ii), Q-(iii), R-(iv), S-(i)`,
      `P-(iii), Q-(ii), R-(i), S-(iv) Quick Recall 166 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(iii), R-(iv), S-(i)`
  },
  {
    question: `If the sum of the areas of two circles with radii R1 and R2 is equal to the area of a circle of radius R, then`,
    options: [
      `(R 1 × R2) = R`,
      `R1 2 + R 2 2 = R 2`,
      `R1 + R 2 < R`,
      `R1 2 + R 2 2 < R 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) R1 + R 2 < R`
  },
  {
    question: `If the circumference of a circle and the perimeter of a square are equal, then`,
    options: [
      `Area of the circle < Area of the square`,
      `Area of the circle > Area of the square`,
      `Area of the circle = Area of the square`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Area of the circle > Area of the square`
  },
  {
    question: `If the perimeter of a circle is equal to that of a square, then the ratio of their areas is`,
    options: [
      `22 : 7`,
      `14 : 11`,
      `7 : 22`,
      `11 : 14`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7 : 22`
  },
  {
    question: `The radius of a circle whose area is equal to the sum of the areas of the two circles of radii 24 cm and 7 cm respectively is`,
    options: [
      `18 cm`,
      `25 cm`,
      `12 cm`,
      `32 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 25 cm`
  },
  {
    question: `If the length of an arc of sector of a circle of radius r is equal to that of an arc of sector of a circle of radius 2r, then`,
    options: [
      `the angle of the corresponding sector of the first circle is double the angle of the corresponding sector of the other circle.`,
      `the angle of the corresponding sector of the first circle is one-eighth the angle of the corresponding sector of the other circle.`,
      `the angle of the corresponding sector of the first circle is half the angle of the corresponding sector of the other circle.`,
      `None of these 167 Areas Related to Circles`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these 167 Areas Related to Circles`
  },
  {
    question: `A square is inscribed in a circle. The ratio of the areas of the circle and the square is`,
    options: [
      `π : 4`,
      `π : 3`,
      `π : 6`,
      `π : 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) π : 3`
  },
  {
    question: `In the given figure, ABCD is a trapezium of area 24.5 cm2. If AD || BC, ∠DAB = 90°, AD = 10 cm, BC = 4 cm and ABE is quadrant of a circle, then the area of the shaded region is D E A BC`,
    options: [
      `14.875 cm2`,
      `15.875 cm2`,
      `16.875 cm2`,
      `17.875 cm2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 17.875 cm2`
  },
  {
    question: `In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. The length of the arc is`,
    options: [
      `14 cm`,
      `21 cm`,
      `22 cm`,
      `25 cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 25 cm`
  },
  {
    question: `If the sum of the circumferences of two circles with diameters d1 and d2 is equal to the circumference of a circle of diameter d, then`,
    options: [
      `d 1 2 + d 2 2 = d 2`,
      `d 1 + d 2 = d`,
      `d 1 + d 2 > d 2`,
      `d 1 3 + d 2 3 = d`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) d 1 + d 2 = d`
  },
  {
    question: `A race track is in the form of a ring whose inner and outer circumferences are 437 m and 503 m respectively. The area of the track is`,
    options: [
      `74 cm2`,
      `4935 cm2`,
      `9870 cm2`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9870 cm2`
  },
  {
    question: `If a circular grass lawn of 35 m in radius has a path 7 m. wide running around it on the outside, then the area of the path is`,
    options: [
      `1260 m2`,
      `1576 m2`,
      `1694 m2`,
      `3368 m2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1576 m2`
  },
  {
    question: `The area of a circular path of uniform width 'd ' surrounding a circular region of radius 'r' is`,
    options: [
      `πd(2r + d)`,
      `π(2r + d)r`,
      `π(d – r)`,
      `π(d + r)r`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) π(2r + d)r`
  },
  {
    question: `If the area of a sector of a circle is one-sixth that of the complete circle, then the angle of the sector is`,
    options: [
      `180°`,
      `45°`,
      `60°`,
      `90°`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 180°`
  },
  {
    question: `A copper wire when bent in the form of a square encloses an area of 484 cm 2, if the same wire is bent in the form of a circle, the area enclosed by it is (use π = 22/7)`,
    options: [
      `616 cm2`,
      `614 cm2`,
      `454 cm2`,
      `none of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 616 cm2`
  },
  {
    question: `A wheel of a car makes 4 revolutions per second. If the diameter of the wheel is 84 cm, then find the speed of the wheel of a car.`,
    options: [
      `38 km/hr`,
      `28 km/hr`,
      `48.016 km/hr`,
      `38.016 km/hr`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 38.016 km/hr`
  },
  {
    question: `It is proposed to build a single circular park equal in area to the sum of areas of two circular parks of radius 8 m and 6 m in a locality. The radius of the new park would be`,
    options: [
      `10 m`,
      `8 m`,
      `20 m`,
      `24 m`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 24 m`
  },
  {
    question: `The area of the circle that can be inscribed in a square of side 6 cm is`,
    options: [
      `18π cm2`,
      `18π cm2`,
      `12π cm2`,
      `9π cm2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9π cm2`
  },
  {
    question: `The wheel of a motorcycle is of radius 35 cm. How many revolutions per minute must the wheel make so as to keep a speed of 66 km/h?`,
    options: [
      `150`,
      `400`,
      `450`,
      `500`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 450`
  },
  {
    question: `In a restaurant, the shape of the top of a table is in the form of a sector of a circle with centre O and ∠POQ = 90°. If PO = OQ = 60 cm, then the area of the top of the table.`,
    options: [
      `1623 cm2`,
      `9078 cm2`,
      `10078 cm2`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9078 cm2`
  },
  {
    question: `In the given figure, the side of square is 28 cm and radius of each circle is half of the length of the side of the square where O and O' are centres of the circles. Find the area of shaded region.`,
    options: [
      `1608 cm2`,
      `1708 cm2`,
      `1808 cm2`,
      `1908 cm2 O P Q O O' 168 Class-X MATHEMATICS PW Very Short Answer T ype Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1708 cm2`
  },
  {
    question: `The area of the circular stadium is: (Use π = 3.14)`,
    options: [
      `56800 m2`,
      `40000 m2`,
      `120000 m2`,
      `125600 m2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 120000 m2`
  },
  {
    question: `What is the area of the hockey court (square)?`,
    options: [
      `80000 m2`,
      `60000 m2`,
      `20000 m2`,
      `25600 m2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60000 m2`
  },
  {
    question: `The area of the Javelin Range is,`,
    options: [
      `80000 m2`,
      `40000 m2`,
      `20000 m2`,
      `12500 m2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20000 m2`
  },
  {
    question: `The ratio of the areas of the Javelin Range and Circular field is,`,
    options: [
      `25 : 157`,
      `5 : 157`,
      `14 : 11`,
      `100 : 157`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 : 157`
  },
  {
    question: `The area of the trapezium-shaped stadium is,`,
    options: [
      `65000 m2`,
      `180000 m2`,
      `75000 m2`,
      `100000 m2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 75000 m2`
  },
  {
    question: `The radius of the circular cricket ground is,`,
    options: [
      `120 m`,
      `100 m`,
      `250 m`,
      `400 m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 100 m`
  },
  {
    question: `Find the area of the circular cricket field. (use π = 3.14)`,
    options: [
      `65000 m2`,
      `22000 m2`,
      `31400 m2`,
      `40000 m2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 31400 m2`
  },
  {
    question: `The area of the shaded part of the stadium (other than cricket field) is,`,
    options: [
      `31400 m2`,
      `33600 m2`,
      `28000 m2`,
      `40000 m2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 33600 m2`
  },
  {
    question: `Find the area of circular cricket field excluding pitch whose dimension is 22 m × 3 m? (use π = 3.14)`,
    options: [
      `31400 m2`,
      `28600 m2`,
      `31334 m2`,
      `40000 m2 ANSWER KEY Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 40000 m2 ANSWER KEY Quick Recall Fill in the Blanks`
  },
  {
    question: `If the perimeter and the area of a circle are numerically equal, then the radius of the circle is`,
    options: [
      `2 units`,
      `π units`,
      `4 units`,
      `7 units Sol. Since the perimeter of the circle = area of the circle, 2πr = πr2 2 2r r π⇒= π ⇒ r = 2 The radius of the circle is 2 units. Exercise-2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 units Sol. Since the perimeter of the circle = area of the circle, 2πr = πr2 2 2r r π⇒= π ⇒ r = 2 The radius of the circle is 2 units. Exercise-2`
  },
  {
    question: `Three circles with unit radius touch each other and each of them touches a bigger circle externally. Find the area of the bigger circle that touches all three circles.`,
    options: [
      `4 73 3  + π`,
      `( ) 2 323 π +`,
      `2 23 5  + π`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 23 5  + π`
  },
  {
    question: `In the given figure, the area of the shaded region is,`,
    options: [
      `2a ( 2)7 π−`,
      `( ) 2a 22 π−`,
      `2a ( 6)4 π−`,
      `2a 142 π −`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ( ) 2a 22 π−`
  },
  {
    question: `A circular arc of radius 6 cm has been drawn with vertex of an equilateral triangle of side 12 cm as centre and a sector of circle of same radius taking B as centre is made then the area of the shaded region in the figure, where is [Use 3 = 1.73 and  = 3.14]`,
    options: [
      `137.62 cm2`,
      `138.62 cm2`,
      `139.62 cm2`,
      `140.62 cm2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 138.62 cm2`
  },
  {
    question: `In the figure, O is the centre and AOM is the diameter of the circle. The sum of the areas of the two designed segments made by the chords AB and BM is`,
    options: [
      `8.78 cm2`,
      `4.57 cm2`,
      `3.56 cm2`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8.78 cm2`
  },
  {
    question: `Three horses are tethered with 7 meter-long ropes at the three corners of a triangular field having sides 20 m, 34 m and 42 m. Find the area of the plot which can be grazed by the horses and the area of the plot which remains ungrazed.`,
    options: [
      `77 m2; 259 m 2`,
      `68 m2; 255 m 2`,
      `66 m2; 257 m 2`,
      `77 m2; 269 m 2 R QP 45° a 45° O A B 90° O M 4 cm 4 cm A B`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 77 m2; 259 m 2`
  },
  {
    question: `In the given figure PQRS is a square of a side 10 cm and a circle is inscribed in it. The area of the shaded part as shown in the figure is`,
    options: [
      `2100 36 cm41 −π `,
      `2100 25 cm8 −π `,
      `2100 25 cm8 +π `,
      `2100 38 cm36 −π `,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2100 38 cm36 −π `
  },
  {
    question: `Two circular wheels of the same radius 'y' have their central hubs at a distance of 'a' from one another. The minimum length of a fan belt which will pass around both the wheels is aa`,
    options: [
      `2(a + πy)`,
      `ay 2 +π`,
      `4a + πy`,
      `a + πy`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) a + πy`
  },
  {
    question: `In the figure, all four outer circles are of the same size (radius = r), then the radius of the inner circle is`,
    options: [
      `r2`,
      `( )2 1r−`,
      `1 r 32`,
      `( ) 2 r 21+`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) ( ) 2 r 21+`
  },
  {
    question: `A circle with a radius of 2 units is placed against a right angle. Another smaller circle is also placed as shown in the adjoining figure, what is the radius of the smaller circle?`,
    options: [
      `3 22−`,
      `4 22−`,
      `5 32−`,
      `6 42− AB DCS R QP 182 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 32−`
  },
  {
    question: `The area of shaded portion in the given figure, 5 7 7 12`,
    options: [
      `77 sq. units`,
      `74 sq. units`,
      `72 sq. units`,
      `89.5 sq. units`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 72 sq. units`
  },
  {
    question: `Three identical wheels of diameter 7cm inserted in a rubber belt as shown in the figure. Then the length of the belt (in cm) is………..`,
    options: [
      `65`,
      `57`,
      `159 7`,
      `43`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 57`
  },
  {
    question: `A square is circumscribing a circle. The side of the square is 14 cm. Find the area of the square not included in the circle.`,
    options: [
      `21 cm2`,
      `42 cm2`,
      `48 cm2`,
      `196 cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 48 cm2`
  },
  {
    question: `The wall around a semicircular garden is 180 m long. The area of the garden is`,
    options: [
      `1800 m2`,
      `1900 m2`,
      `1925 m2`,
      `1825 m2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1900 m2`
  },
  {
    question: `The length of a arc of a sector of angle q of circle with radius r is :`,
    options: [
      `2r180 θ ×π`,
      `2r360 θ ×π`,
      `r180 θ ×π`,
      `r360 θ ×π`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) r360 θ ×π`
  },
  {
    question: `PQRS is a square, PQ = 73 cm with centre R and radius RS, Sector RQAS is drawn. Find the area of the shaded portion. 14 cm S A P Q R`,
    options: [
      `29.5 cm2`,
      `17.5 cm2`,
      `23.7 cm2`,
      `31.5 cm2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 17.5 cm2`
  },
  {
    question: `In the given figure, PQ is the diameter of the circle. If PR = 5cm and QR = 12 cm then find the area of the shaded region. R P Q`,
    options: [
      `(25π – 30) cm 2`,
      `(36π – 30) cm 2`,
      `(169π – 30) cm 2`,
      `2169 30 cm4  π−`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2169 30 cm4  π−`
  },
  {
    question: `In the given figure a square OABC is inscribed in a quadrant OPBQ of a circle. If OA = 14 cm, then the area of the shaded region will be: Q C B PA14 cm 14 cm O`,
    options: [
      `308 sq cm`,
      `196 sq cm`,
      `112 sq cm`,
      `504 sq cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 504 sq cm`
  },
  {
    question: `‘O’ is the centre of the circle. The area of the shaded region in the given figure is 126 cm2, PQ PR= , then the diameter QR is:`,
    options: [
      `21 cm`,
      `21 2 cm`,
      `7 cm`,
      `7 2 cm P Q RO Competitive Corner 183 Areas Related to Circles`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21 2 cm`
  },
  {
    question: `Find the area of shaded portion in the figure given below, where ABCD is a square of side 28 cm: A B CD`,
    options: [
      `784 cm2`,
      `616 cm2`,
      `668 cm2`,
      `168 cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 668 cm2`
  },
  {
    question: `In the given figure, the centre of the circle is A and ABCDEF is a regular hexagon of side 6 cm. The approximate area of segment BPF is. (Take π = 3.14) A B F P C E D`,
    options: [
      `25 cm2`,
      `22 cm2`,
      `32 cm2`,
      `30 cm2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 22 cm2`
  },
  {
    question: `In the figure PQRS is a cyclic quadrilateral. If the area of the shaded part is 72 7 sq. units. Then find the radius of the circle SP RQ`,
    options: [
      `7 units`,
      `4 units`,
      `3 units`,
      `2 units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 units`
  },
  {
    question: `A momento is made as shown in the figure. Its base PBCQ is silver plated from the front side. A CB P Q 90° 7cm 7cm 3cm3cm The silver plated area is (use π = 22/7)`,
    options: [
      `11 cm2`,
      `11.5 cm2`,
      `12.5 cm2`,
      `13 cm2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 11 cm2`
  },
  {
    question: `In a circle of diameter 40 cm, the length of the chord is 20 cm. Find the length of the minor arc corresponding to the chord.`,
    options: [
      `2 3 π`,
      `20 3 π`,
      `10 3 π`,
      `10π`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 3 π`
  },
  {
    question: `The length of minor arc AB of a circle with radius 7 units is 14. Find the length of major are AB .`,
    options: [
      `18`,
      `21`,
      `28`,
      `30`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30`
  },
  {
    question: `The area of two concentric circles are 1386 cm 2 and 962.5 cm2. The width of the ring is`,
    options: [
      `4.2 cm`,
      `3.8 cm`,
      `3.5 cm`,
      `2.8 cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.8 cm`
  },
  {
    question: `A circle is inscribed in a square of side 2.5cm. Another circle is circumscribing this square. The ratio of areas of outer circle and inner circle is (Punjab 2017)`,
    options: [
      `1 : 2`,
      `2 : 1`,
      `2 : 1`,
      `3 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 : 1`
  },
  {
    question: `Two circles, both of radii 'a' touch each other and each of them touches internally a circle of radius 2a. Then the radius of the circle which touches all the three circles is [NTSE 2019]`,
    options: [
      `1/2 a`,
      `2/3 a`,
      `3/4 a`,
      `a`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3/4 a`
  },
  {
    question: `If the area of a square inscribed in a semi circle is 2 cm2, then the area of the square inscribed in a full circle of the same radius is [NTSE 2017]`,
    options: [
      `5 cm2`,
      `10 cm2`,
      `5 2 cm2`,
      `258 cm2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 cm2`
  },
  {
    question: `If Anish is moving along the boundary of a triangular field of sides 35 m, 53 m and 66 m and you are moving along the boundary of a circular field whose area is double the area of the triangular field, then the radius of the circular field is: (Take π = 22/7) [NTSE 2016]`,
    options: [
      `14 3 m`,
      `3 14 m`,
      `28 3 m`,
      `7 3 m 184 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 14 m`
  },
  {
    question: `A calf is tied with a rope of length 12m at a corner of a rectangular field of dimensions 35m × 25m. If the length of the rope is increased to 23m, then the additional grassy area in which the calf can graze is: (Take π = 22/7)`,
    options: [
      `280.0 m2`,
      `300.0 m2`,
      `302.5 m2`,
      `312.5 m2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 280.0 m2`
  },
  {
    question: `In the figure, a semi - circle with centre O is drawn on AB. The ratio of the larger shaded area to the smaller shaded area is 120° 60° BA P`,
    options: [
      `4 23 2 23 π− π−`,
      `4 33 3 33 π− π−`,
      `4 33 2 33 π− π−`,
      `3 23 2 23 π− π− Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 23 2 23 π− π− Multiple Choice Questions`
  },
  {
    question: `For the diagram shown below, match the following. 24 cm 7 cm Hemisphere Column-I Column-II P. Slant height of cone (i) 308 cm2 Q. Curved surface area (C.S.A) of hemisphere. (ii) 25 cm R. C.S.A of conical part (iii) 858 cm2 S. Total surface area of given figure (iv) 550 cm2`,
    options: [
      `P-(i), Q-(iii), R-(iv), S-(ii)`,
      `P-(iv), Q-(iii), R-(i), S-(ii)`,
      `P-(ii), Q-(i), R-(iv), S-(iii)`,
      `P-(iii), Q-(ii), R-(i), S-(iv)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(i), R-(iv), S-(iii)`
  },
  {
    question: `A cylindrical pencil sharpened at both the edges is the combination of`,
    options: [
      `a cone and a cylinder`,
      `frustum of a cone and a cylinder`,
      `two cones and a cylinder`,
      `two cylinders.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) two cones and a cylinder`
  },
  {
    question: `Find the total surface area of new solid, if two solid cylinders of same base radii r and height h are joined together along their bases.`,
    options: [
      `2 pr(2h + r)`,
      `4π rh`,
      `2π r2`,
      `2π r (r + h)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2π r2`
  },
  {
    question: `If d is the diameter of the sphere, then the surface area of the sphere is given by`,
    options: [
      `24 3 dπ`,
      `4 p d2`,
      `p d2`,
      `3 p d2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 p d2`
  },
  {
    question: `If a cylinder is covered by two hemispherical lid having same radius as of cylinder, then the total curved surface area of the new object will be`,
    options: [
      `4 p rh + 2 p r2`,
      `3 p rh – p r2`,
      `2 p rh + 4 p r2`,
      `2 p rh + 4 p r`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 p rh + 4 p r`
  },
  {
    question: `The dimension of a metallic cuboid is 100 cm × 80 cm × 64 cm. It is melted and recasted to form a cube. Find the surface area of the cube.`,
    options: [
      `38400 cm2`,
      `38800 cm2`,
      `39400 cm2`,
      `44800 cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 39400 cm2`
  },
  {
    question: `Find the number of coins, 1.5 cm in diameter and 0.2 cm thick to be melted to form a right circular cylinder of height 10 cm and diameter 4.5 cm.`,
    options: [
      `280`,
      `400`,
      `450`,
      `500`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 400`
  },
  {
    question: `A cubical ice-cream brick of edge 22 cm is to be distributed among some children by filling ice-cream cones of radius 2 cm and height 7 cm upto its brim. How many children will get ice-cream cones?`,
    options: [
      `163`,
      `263`,
      `363`,
      `463`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 263`
  },
  {
    question: `From a solid circular cylinder with height 10 cm and radius of the base 6 cm, a right circular cone of the same height and same base is removed, then the volume of remaining solid is`,
    options: [
      `280 p cm3`,
      `320 cm3`,
      `240 p cm3`,
      `440 p cm3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 280 p cm3`
  },
  {
    question: `A rectangular sheet of paper which is 44 cm long and 18 cm wide is rolled along its length to form a cylinder. The volume of the cylinder [use p = 22 7 ] is`,
    options: [
      `2772 cm3`,
      `2460 cm3`,
      `2408 cm3`,
      `2368 cm3 217 Surface Areas and Volumes`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2772 cm3`
  },
  {
    question: `If the radius of base of a cone and a cylinder are equal, the curved surface areas are also equal, then the ratio of the slant height of the cone to the height of the cylinder is:`,
    options: [
      `2 : 1`,
      `2 : 3`,
      `1 : 3`,
      `3 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 : 1`
  },
  {
    question: `The internal and external diameter of a hollow hemispherical vessel are 42 cm and 45.5 cm respectively. Find its volume and also its outer curved surface area.`,
    options: [
      `5.27 litres, 3253.25 cm 2`,
      `5.20 litres, 3253.25 cm 2`,
      `5.27 litres, 3200.18 cm 2`,
      `5.27 litres, 3250.25 cm 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5.27 litres, 3250.25 cm 2`
  },
  {
    question: `A piece of iron has dimensions 3 cm × 1.5 cm × 6 cm. If its mass 205.2 gms, its density is`,
    options: [
      `5.6 gm/cm3`,
      `8.4 gm/cm3`,
      `7.6 gm/cm3`,
      `76 gm/cm3 Very Short Answer T ype Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 76 gm/cm3 Very Short Answer T ype Questions`
  },
  {
    question: `Total surface area of a cylinder is given by`,
    options: [
      `38.97 cm2`,
      `40.97 cm2`,
      `38.87 cm2`,
      `40.55 cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 38.87 cm2`
  },
  {
    question: `The area of canvas required in one tent can be calculated by using formula`,
    options: [
      `44 cm2`,
      `42 cm2`,
      `40 cm2`,
      `34 cm2 219 Surface Areas and Volumes Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 42 cm2`
  },
  {
    question: `Find the volume of tent if the conical part of tent has height H and radius R and the height of cylinder is h and base radius is same as that of cone.`,
    options: [
      `221 3 Rh RHπ +π`,
      `221 3 RH Rhπ +π`,
      `pR 2h`,
      `πrl + πr 2h`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) pR 2h`
  },
  {
    question: `If one side of cubical portion is 23 m, then find the diagonal of the cubic portion of the Gol Gumbaz.`,
    options: [
      `23 m`,
      `23 2 m`,
      `23 3 m`,
      `24 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 23 3 m`
  },
  {
    question: `A block of Gol Gumbaz is in the shape of a cylinder of diameter 0.5 cm with two hemispheres stuck to each of its ends. The length of shape is 2 cm. The volume of the block is (Use π = 3.14) 2 cm`,
    options: [
      `0.32 cm3`,
      `0.36 cm3`,
      `0.34 cm3`,
      `0.33 cm3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.36 cm3`
  },
  {
    question: `Find the curved surface area of the new solid formed by joining two solid hemispheres of same radii r along their bases.`,
    options: [
      `4πr2`,
      `6πr2`,
      `2πr2`,
      `8πr2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2πr2`
  },
  {
    question: `A solid piece of iron taken out from the back of Gol Gumbaz in the form of a cuboid of dimensions 49 cm × 33 cm × 24 cm, is moulded to form a solid sphere. Find the radius of the sphere.`,
    options: [
      `19 cm`,
      `18 cm`,
      `25 cm`,
      `21 cm ANSWER KEY 220 Class-X MATHEMATICS PW Match the Following`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 18 cm`
  },
  {
    question: `If the radii of the top and bottom of a bucket having slant height 45 cm are 28 cm and 7 cm respectively, then find the curved surface area of the bucket.`,
    options: [
      `4950 cm2`,
      `4800 cm2`,
      `4900 cm2`,
      `4958 cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4900 cm2`
  },
  {
    question: `The radius of the top and bottom of a frustum having height 21 cm are 25 cm and 8 cm. The volume of the bucket is`,
    options: [
      `4000 cm3`,
      `19558 cm2`,
      `19558 cm3`,
      `18068 cm3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 19558 cm2`
  },
  {
    question: `A reservoir is in the shape of a frustum of a right circular cone. The diameters of upper circular end and lower circular end are 8 m and 4 m respectively. It is 6 m deep, then its capacity is`,
    options: [
      `176 m3`,
      `196 m3`,
      `620 m3`,
      `110 m3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 620 m3`
  },
  {
    question: `A hemispherical bowl is filled to the brim with a beverage. The contents of the bowl are transferred into a cylindrical vessel whose radius is 50% more than its height. If the diameter is same for both the bowl and the cylinder, then how much beverage is contained in the vessel from the bowl?`,
    options: [
      `266 %3`,
      `178 %2`,
      `100%`,
      `More than 100%`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 178 %2`
  },
  {
    question: `If C denotes the area of the curved surface of a right circular cone of height h and semi-vertical angle α then C is`,
    options: [
      `π h2 tan2 α`,
      `πh2 secα.tanα`,
      `1 2 πh2 tan2 α`,
      `1 2 πh2 secα. tanα`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 2 πh2 secα. tanα`
  },
  {
    question: `A larger solid sphere of diameter 15 m is melted and recast into several small spheres of diameter 3m. What is the percentage increase in the surface area of the smaller spheres?`,
    options: [
      `200%`,
      `400%`,
      `500%`,
      `Cannot be determined`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 400%`
  },
  {
    question: `The radius of cylinder is the same as that of sphere. Their volume are equal. The height of the cylinder is how many times its radius`,
    options: [
      `4 3`,
      `2 3`,
      `1`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `How many lead balls, each of radius 1cm can be made from a sphere whose radius is 8cm?`,
    options: [
      `510`,
      `512`,
      `480`,
      `250`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 250`
  },
  {
    question: `A rectangular paper of dimensions 6 cm and 3 cm is rolled to form a cylinder with height equal to the width of the paper. Its radius of the base is`,
    options: [
      `3 2π`,
      `6 π`,
      `9 π`,
      `3 π`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 π`
  },
  {
    question: `Twenty-seven solid iron spheres, each of radius r and surface area s are melted to from a sphere with surface area s' The radius (r') of the new sphere is 'k' is`,
    options: [
      `5`,
      `4`,
      `3`,
      `5 3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `On increasing each of the radius of the base and the height of a cone by 20% its volume will be increased by ______.`,
    options: [
      `20%`,
      `40%`,
      `72.2%`,
      `72.8% 231 Surface Areas and Volumes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 40%`
  },
  {
    question: `The length of the diagonal of a cube is 63 its total surface area is:`,
    options: [
      `144 cm2`,
      `216cm2`,
      `180 cm2`,
      `180cm 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 180 cm2`
  },
  {
    question: `The volume of a cube is 2744 cm 3. Its surface area is:`,
    options: [
      `196 cm2`,
      `1176 cm2`,
      `784 cm2`,
      `588cm 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1176 cm2`
  },
  {
    question: `The total surface area of a cube is 864 cm 2. Its volume is:`,
    options: [
      `3456 cm3`,
      `432 cm3`,
      `1728 cm3`,
      `3458 cm3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1728 cm3`
  },
  {
    question: `How many bricks each measuring (25 cm × 11.25 cm × 6 cm) will be required to construct a wall (8 m × 6 m × 22.5 m):`,
    options: [
      `8000`,
      `6400`,
      `4800`,
      `7200`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6400`
  },
  {
    question: `The area of the base of a rectangular tank is 6500 cm2 and the volume of water contained in it is 2.6 cm 3. The depth of the water in the tank is:`,
    options: [
      `3.5 m`,
      `4 m`,
      `5 m`,
      `8 m`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 m`
  },
  {
    question: `The volume of a wall, 5 times as high as it is broad and 8 times as long as it is high, is 12.8 m 3. The breath of the wall is:`,
    options: [
      `30 cm`,
      `40 cm`,
      `22.5 cm`,
      `25 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 40 cm`
  },
  {
    question: `If each edge of a cube is increased by 50% the percentage increased in the surface area is:`,
    options: [
      `50%`,
      `75%`,
      `100%`,
      `125%`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 125%`
  },
  {
    question: `How many bags of grain can be stored in a cuboidal granary (8m × 6m × 3m), if each bag occupies a space of 0.64m 3?`,
    options: [
      `8256`,
      `90`,
      `212`,
      `225`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 225`
  },
  {
    question: `A cube of side 6 cm is cut into a number of cubes each of side 2 cm. The number of cubes formed is:`,
    options: [
      `6`,
      `9`,
      `12`,
      `27`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9`
  },
  {
    question: `During conversion of a solid from one shape to another, the volume of the new shape will.`,
    options: [
      `decrease`,
      `increase`,
      `remain unaltered`,
      `be doubled ANSWER KEY Multiple Choice Questions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) remain unaltered`
  },
  {
    question: `The following frequency distribution shows the life time of 410 steam irons tested at a company. Life time (hours) 200- 300 300- 400 400- 500 500- 600 600- 700 700- 800 No. of steam irons 28 68 132 98 56 28 with the help of information given above, match the columns. Column-I Column-II P. Upper limit of modal class (i) 100 Q. Class-size (ii) 400 R. Cumulative frequency of median class (iii) 500 S. Lower limit of median class (iv) 228`,
    options: [
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(ii), S-(iv)`,
      `P-(ii), Q-(i), R-(iv), S-(iii)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(iii), Q-(i), R-(ii), S-(iv)`
  },
  {
    question: `In the formula ,ii i fdxa f ∑= + ∑ for finding the mean of grouped data, di's are deviations from 'a' of`,
    options: [
      `Lower limits of the classes`,
      `Upper limits of the classes`,
      `Mid points of the classes`,
      `Frequencies of the class marks.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mid points of the classes`
  },
  {
    question: `If xi's are the midpoints of the class intervals of grouped data fi's are the corresponding frequencies and x is the mean, then () iifx x∑− is equal to`,
    options: [
      `0`,
      `–1`,
      `1`,
      `2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –1`
  },
  {
    question: `If the arithmetic mean of x, x + 3, x + 6, x + 9 and x + 12 is 8, then x = ?`,
    options: [
      `1`,
      `2`,
      `6`,
      `4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6`
  },
  {
    question: `The Median when it is given that mode and mean are 8 and 5 respectively, is:`,
    options: [
      `8`,
      `6`,
      `4`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `The median and mean of frequency distribution is 7 and 8, respectively. Then the mode is:`,
    options: [
      `1 13`,
      `4`,
      `5`,
      `33`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 33`
  },
  {
    question: `If the mean of first n natural numbers is 3 5 n , then the value of n is:`,
    options: [
      `2`,
      `7`,
      `5`,
      `6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`
  },
  {
    question: `In a frequency distribution, the mid value of a class is 13 and the width of the class is 8. The lower limit of the class is`,
    options: [
      `6`,
      `7`,
      `8`,
      `9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9`
  },
  {
    question: `If the difference of mode and median of a data is 36, then the difference of median and mean is:`,
    options: [
      `18`,
      `24`,
      `8`,
      `36`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 36`
  },
  {
    question: `Which of the following is not a measure of central tendency ?`,
    options: [
      `Mean`,
      `Mode`,
      `Median`,
      `Variance`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Mode`
  },
  {
    question: `The Mode of 12, 14, 11, 16, 15, 14, 11, 13, 14 is`,
    options: [
      `14`,
      `11`,
      `15`,
      `16 271 Statistics (a) Arithmetic mean (b) Range (c) Median (d) Deviation`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15`
  },
  {
    question: `The weight mean of first n natural numbers when their weights are equal to corresponding natural number is:`,
    options: [
      `( 1) 2 nn +`,
      `1 2 n +`,
      `21 3 n +`,
      `(2 1) 3 nn +`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (2 1) 3 nn +`
  },
  {
    question: `If the mean of the following data is 18, the value of p is x 10 15 20 25 f 5 10 p 8`,
    options: [
      `5`,
      `6`,
      `10`,
      `7`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7`
  },
  {
    question: `The mean weight of 150 students in a class is 60 kg. The mean weight of boys is 70 kg, while that of girls is 55 kg, then the number of boys and girls in the school is:`,
    options: [
      `B = 50, g = 150`,
      `B = 100, g = 300`,
      `B = 50, G = 100`,
      `B = 60, G = 100`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) B = 50, G = 100`
  },
  {
    question: `If the mean of the observation x, x + 2, x + 4, x + 6, x + 8 is 11, then find the mean of last 3 observation`,
    options: [
      `13`,
      `11`,
      `9`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11`
  },
  {
    question: `The marks obtained by 100 students is 57. If their marks are multiplied by 3, then the new mean is:`,
    options: [
      `150`,
      `171`,
      `114`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 171`
  },
  {
    question: `If the mean of the numbers a + 27, a + 19, a + 38, a + 47, a + 54 is 82 Then the mean of a + 9, a + 21, a + 27 is:`,
    options: [
      `80`,
      `62`,
      `64`,
      `54`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 62`
  },
  {
    question: `For the following distribution, Class 0-5 5-10 10-15 15-20 20-25 Frequency 10 15 12 20 9 The sum of upper limits of median class and modal class is:`,
    options: [
      `15`,
      `25`,
      `30`,
      `35`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 15`
  },
  {
    question: `The mean of following distribution is : xi 12 16 18 20 fi 3 6 8 7`,
    options: [
      `15.6`,
      `17`,
      `14.8`,
      `17.34`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 15.6`
  },
  {
    question: `What is the lower limit of median class?`,
    options: [
      `125`,
      `145`,
      `165`,
      `185`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 165`
  },
  {
    question: `What is the upper limit of modal class?`,
    options: [
      `125`,
      `145`,
      `165`,
      `185`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 145`
  },
  {
    question: `The median class interval is:`,
    options: [
      `45-55`,
      `35-45`,
      `25-35`,
      `15-25`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 25-35`
  },
  {
    question: `The median age of the patients admitted in the hospital is:`,
    options: [
      `35.9 years`,
      `35.5 years`,
      `36.8 years`,
      `38.5 years`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 35.5 years`
  },
  {
    question: `Which age group was affected the most?`,
    options: [
      `35-45`,
      `25-35`,
      `15-25`,
      `45-55`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15-25`
  },
  {
    question: `The modal age of the patients admitted in the hospital is:`,
    options: [
      `38.6`,
      `36.8`,
      `35.9`,
      `36 275 Statistics Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 36.8`
  },
  {
    question: `The marks obtained by 16 students in a mathematics test (out of 100) are given below: 49, 91, 82, 100, 96, 65, 82, 76, 79, 90, 46, 64, 72, 68, 66, 48. The range of the data is`,
    options: [
      `54`,
      `46`,
      `100`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `The median of a set of 15 observations is 30.5. If each of the largest 6 observations of the set is increased by 5, then the median of the new set of observations`,
    options: [
      `is 2 times the original number`,
      `is increased by 5`,
      `is decreased by 5`,
      `remains the same as that of the original set`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) is increased by 5`
  },
  {
    question: `If a, b, c are denoting mean, median and mode of a data and a : b = 9 : 8, then b : c is`,
    options: [
      `8 : 9`,
      `4 : 3`,
      `7 : 6`,
      `5 : 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7 : 6`
  },
  {
    question: `The following frequency distribution shows the absentee record of class-X students in a term. If the mean of following data is 15.5, then the missing frequencies x and y are: Number of days 0- 5 5- 10 10- 15 15- 20 20- 25 25- 30 30- 35 35- 40 Total Total Number of students 15 16 x 8 y 8 6 4 70`,
    options: [
      `x = 4 and y = 3`,
      `x = 7 and y = 7`,
      `x = 8 and y = 5`,
      `x = 7 and y = 6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) x = 7 and y = 7`
  },
  {
    question: `The following frequency shows the monthly pocket expense of 510 students. Pocket expenses 0- 200 200- 400 400- 600 600- 800 800- 1000 1000- 1200 1200- 1400 Number of students 33 74 170 88 76 44 25 Then the median for the above data is:`,
    options: [
      `485.07`,
      `586.91`,
      `574.12`,
      `560.84`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 586.91`
  },
  {
    question: `The abscissa of the point of intersection of the less than type and of the more than type cumulative frequency curves of a grouped data gives its:`,
    options: [
      `Mean`,
      `Median`,
      `Mode`,
      `All the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Mode`
  },
  {
    question: `Frequency polygons are used when the data is`,
    options: [
      `Discontinuous and very large`,
      `Continuous and very large`,
      `Discontinuous and very small`,
      `Continuous and very small`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Continuous and very large`
  },
  {
    question: `The mean of n observations is x. If the first item is increased by 1, second by 2 and so on, then the new mean is`,
    options: [
      `xn+`,
      `+ 2 nx`,
      `1+ 2 nx +`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1+ 2 nx +`
  },
  {
    question: `If 'a' be the lower class boundary of a class in a frequency distribution and 'b' be the mid point of the class. Then the upper class boundary of the class is`,
    options: [
      `2 aba ++`,
      `2 abb ++`,
      `2a + b`,
      `2b – a`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 abb ++`
  },
  {
    question: `If the mode of a data is 18 and the mean is 24, then the median is`,
    options: [
      `18`,
      `21`,
      `24`,
      `22`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 22`
  },
  {
    question: `Observations of some data are 22, ,, ,,5 3345 x xx xxx and 3 4 x . If the median of the data is 4, then 'x' is`,
    options: [
      `5`,
      `7`,
      `8`,
      `10`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`
  },
  {
    question: `If the mean of x and 1 x is M, then the mean of x 3 and 3 1 x is`,
    options: [
      `2( – 3) 2 MM`,
      `M(4M 2 – 3)`,
      `M 3`,
      `M 3 + 3 282 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) M 3 + 3 282 Class-X MATHEMATICS PW`
  },
  {
    question: `If the mean of observations x 1, x2, x3, ..... x n is x , then the mean of new observations x1 + a, x2 + 2a, x3 + 3a, ..... x n + na is:`,
    options: [
      `ax`,
      `xa+`,
      `xa−`,
      `1 2 nxa ++ `,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ax`
  },
  {
    question: `The median of the observation 11, 12, 14, 18, x + 2, x + 4, 30, 32, 35, 41 arranged in ascending order is 24. Find the value of x.`,
    options: [
      `20`,
      `21`,
      `22`,
      `23`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20`
  },
  {
    question: `The range of 15, 14, x, 25, 30, 35, is 29. Find the least possible value of x.`,
    options: [
      `14`,
      `6`,
      `8`,
      `11`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 11`
  },
  {
    question: `If the mean of x and 1 x is p. Then the mean of 2 2 1x x + is:`,
    options: [
      `p 2`,
      `2 4 p`,
      `2p2 + 1`,
      `2p2 – 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2p2 – 1`
  },
  {
    question: `The mean of the values of 1, 2, 3, ....., n with respective frequencies x, 2x, 3x, ..... nx is:`,
    options: [
      `21 2 n +`,
      `21 6 n +`,
      `2 n`,
      `21 3 n +`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 21 3 n +`
  },
  {
    question: `The mean of 12 observations is 13.5 by an error and observation is registered as 24 instead of 42. The correct mean is:`,
    options: [
      `13`,
      `15`,
      `13.7`,
      `14`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 13.7`
  },
  {
    question: `A die is tossed 100 times (faces are numbered 1 - 6) and frequently distribution of the integers obtained are given below. The mean of grouped data is: Integer 1 2 3 4 5 6 Frequency 18 19 16 18 20 11`,
    options: [
      `3.25`,
      `3.55`,
      `3.42`,
      `3.35`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.55`
  },
  {
    question: `The mean of a set of 9 observations is 20.5. If each of the largest 4 observations is increased by 2, the median of new set is:`,
    options: [
      `Same`,
      `Increased by 2`,
      `Decreased by 2`,
      `Decreased by 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Increased by 2`
  },
  {
    question: `For the following grouped frequency distribution the mode is Class 3- 6 6- 9 9- 12 12- 15 15- 18 18- 21 21- 24 Frequency 2 5 10 23 21 12 3`,
    options: [
      `14.4`,
      `13`,
      `14.6`,
      `15.6`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 14.4`
  },
  {
    question: `The mean and median of the data a, b and c are 50 and 35 respectively, where a < b < c. If c – a = 55, then find (b – a).`,
    options: [
      `8`,
      `7`,
      `3`,
      `5`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5`
  },
  {
    question: `If X, M, Z are denoting mean, median and mode of a data and X : M = 9 : 8, then find the ratio M : Z`,
    options: [
      `3 : 4`,
      `4 : 3`,
      `7 : 6`,
      `9 : 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 : 3`
  },
  {
    question: `The arithmetic mean of the series 1, 3, 3 2,...... 3n-1 is`,
    options: [
      `3 2 n n`,
      `31 2 n n −`,
      `13 1 n n − +`,
      `231 1 n n − +`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 31 2 n n −`
  },
  {
    question: `A sequence a, ax, ax2,........ axn, has odd number of terms. Find its median.`,
    options: [
      `ax n – 1`,
      `12 n ax −`,
      `2 n ax`,
      `12 n ax −`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 n ax`
  },
  {
    question: `The mean of 25 observations is 36. If the mean of the first 13 observation is 32 and that of the last 13 observations is 39, then the 13th observations is`,
    options: [
      `16`,
      `23`,
      `21`,
      `18`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 23`
  },
  {
    question: `If the mean of the squares of first n natural number is 105, then the median of first n natural numbers is:`,
    options: [
      `8`,
      `9`,
      `10`,
      `11 283 Statistics`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9`
  },
  {
    question: `(x + 2), x and (x – 1) are the frequencies of the numbers 12, 15 and 20 respectively. If the mean of the distribution is 14.5, the value of x is`,
    options: [
      `2`,
      `3`,
      `4`,
      `5`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5`
  },
  {
    question: `The mode of the given series is 36. Find the value of K Class Interval 0-10 10-20 20-30 30-40 40-50 50-60 60-70 Frequency 7 6 K 16 12 8 10`,
    options: [
      `10`,
      `15`,
      `20`,
      `30`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30`
  },
  {
    question: `Numbers 50, 42, 35, 2x + 10, 2x – 8, 12, 11, 8 are written in descending order and their median is 25 find x.`,
    options: [
      `20`,
      `25`,
      `12`,
      `11`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 25`
  },
  {
    question: `Mean of a certain number is x –. If each observation is divided by m(m ≠ 0) and increased by n, then the mean of new observation will be:`,
    options: [
      `x mn +`,
      `x nm +`,
      `nx m+`,
      `mx n+`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) nx m+`
  },
  {
    question: `The product of mean and median of first five prime numbers is`,
    options: [
      `54.6`,
      `28`,
      `27`,
      `10.8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 28`
  },
  {
    question: `With usual meanings of notations, formula for assumed mean method for A.M. is`,
    options: [
      `1 1 N ii i N i i fd xA f + + = + ∑ ∑`,
      `12 ... nxx xx N + ++=`,
      `1 1 N ii i N i i fx x f = = = ∑ ∑`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 12 ... nxx xx N + ++=`
  },
  {
    question: `The mean of the following data is 8 x 3 5 7 9 11 13 y 6 8 15 p 8 4 then the value of p is:`,
    options: [
      `21`,
      `23`,
      `24`,
      `25`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 24`
  },
  {
    question: `When 10 is subtracted from each of the given observations, the mean is reduced by 60%. If 5 is added to all the given observations, the mean will be:`,
    options: [
      `25`,
      `30`,
      `30`,
      `65`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30`
  },
  {
    question: `The mean of certain number of observations is 46. If four observation whose mean is 52 are removed, the mean becomes 44.5. The original number of observation is`,
    options: [
      `35`,
      `20`,
      `15`,
      `12`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15`
  },
  {
    question: `The mean, mode and median of the observation 7, 7, 5, 7 and x are the same. Then the observation x is:`,
    options: [
      `10`,
      `2.9`,
      `8`,
      `7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.9`
  },
  {
    question: `Following tables given the number of trees planted by the students in a school on Environment Day, Observe the table and find mode of the trees planted by the students. Number of plants 0-10 10-20 20-30 30-40 40-50 50-60 Number of Students 30 42 50 80 50 40`,
    options: [
      `80`,
      `50`,
      `45`,
      `35`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 35`
  },
  {
    question: `Mean of ten consecutive odd numbers is 120, then the mean of first five odd numbers among them is`,
    options: [
      `113`,
      `115`,
      `114`,
      `116 Competitive Corner 284 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 115`
  },
  {
    question: `From a frequency distribution table if N = 100, h = 10 c.f = 38f = 18, L = 50, then find the median for the distribution. Choose the correct alternative`,
    options: [
      `56.67`,
      `55.76`,
      `56.76`,
      `55.87`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 56.67`
  },
  {
    question: `If the mean and mode of a data are 30 and 36 respectively, then its median is what?`,
    options: [
      `40`,
      `32`,
      `55.7`,
      `31.69`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 40`
  },
  {
    question: `The mean weight of students of a particular class is 52 kg. The mean weight of boys of this class is 56 kg and that of girls is 50 kg. Find the ratio of number of boys to the number of girls in the class.`,
    options: [
      `1 : 2`,
      `2 : 1`,
      `1 : 1`,
      `2 : 3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 : 3`
  },
  {
    question: `Observe the following frequency distribution table. It shows the distances travelled by 250 public transport buses in a day. Find the median of the distance travelled. Distance in (km) 200-210 210-220 220-230 230-240 240-250 No. of buses 40 60 80 50 20`,
    options: [
      `225`,
      `217.80`,
      `223.125`,
      `230`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 230`
  },
  {
    question: `Mean of 8,12,16,22,10 and 4 is 12. If each observation is increased by 25% then resulting mean is`,
    options: [
      `9`,
      `15`,
      `12`,
      `16`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 16`
  },
  {
    question: `Following are the points obtained by a Kabaddi team in various matches. 17, 2, 7, 27, 15, 5, 14, 19, 10, 24, 9, 8, 6, 18, 28 the median of the points obtained by the team will be -`,
    options: [
      `14`,
      `16`,
      `15`,
      `17`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15`
  },
  {
    question: `In a frequency distribution, Mean = 9.1 and 132 5 , 20ii ifx k f= +=∑∑ , then k is`,
    options: [
      `4`,
      `6`,
      `10`,
      `9 Multiple Choice Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `Which of the following cannot be the probability of an event?`,
    options: [
      `2 3`,
      `–1.5`,
      `15%`,
      `0.7 Sol. As we know, the probability of any event (E) always lies between 0 and 1 i.e. 0 ≤ P(E) ≤`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –1.5`
  },
  {
    question: `Two unbiased coins are tossed simultaneously. Match Column-I with the probabilities given in Column-II Column-I Column-II P. The probability of getting atmost one head is (i) 3 4 Q. The probability of getting at least two head is (ii) 1 4 R. The probability of getting atmost two heads is (iii) 1`,
    options: [
      `P-(iii), Q-(i), R-(ii)`,
      `P-(iii), Q-(ii), R-(i)`,
      `P-(ii), Q-(i), R-(iii)`,
      `P-(i), Q-(ii), R-(iii) Quick Recall 310 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) P-(ii), Q-(i), R-(iii)`
  },
  {
    question: `Two dice are thrown simultaneously. The probability of getting a sum of 9 is:`,
    options: [
      `1 10`,
      `3 36`,
      `1 9`,
      `4 9`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 9`
  },
  {
    question: `100 cards are numbered from 1 to 100. Find the probability of getting a prime number.`,
    options: [
      `3 4`,
      `27 50`,
      `1 4`,
      `29 100`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 27 50`
  },
  {
    question: `A bag contains 7 red balls and some blue balls. If the probability of drawing a blue ball is double that of a red ball, then the number of blue balls in a bag is:`,
    options: [
      `7`,
      `14`,
      `15`,
      `20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15`
  },
  {
    question: `A number x is chosen at random from the numbers –2, –1, 0 , 1, 2. Then the probability that x 2 < 2 is?`,
    options: [
      `1 5`,
      `2 5`,
      `3 5`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 5`
  },
  {
    question: `If P(E) = 0.34, then what is the probability of ‘not E’?`,
    options: [
      `0.66`,
      `0.34`,
      `0.64`,
      `0.90`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.90`
  },
  {
    question: `A bag has 11 green marbles, 4 black marbles and 7 purple marbles. One marble is drawn out randomly. The probability of not getting a purple marble is: 311 Probability`,
    options: [
      `0.5`,
      `0.56`,
      `0.75`,
      `0.68`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.56`
  },
  {
    question: `One card is drawn from a well shuffled deck of 52 cards. Find the probability of getting a red colour face card.`,
    options: [
      `3 26`,
      `1 13`,
      `4 53`,
      `4 13`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4 13`
  },
  {
    question: `A single letter is selected at random from the word “COMMUNICATIONS”. The probability that the selected letter is a vowel is:`,
    options: [
      `2 14`,
      `6 13`,
      `3 7`,
      `1 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 2`
  },
  {
    question: `A two digit number is to be formed using the digits 3, 4, 7, 8 and 2 without repetition. The probability that it is an odd number is:`,
    options: [
      `2 5`,
      `9 20`,
      `1 2`,
      `3 5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9 20`
  },
  {
    question: `Two coins are tossed simultaneously. The probability of getting utmost one tail is:`,
    options: [
      `1 4`,
      `1 2`,
      `3 4`,
      `2 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 4`
  },
  {
    question: `The probability that the month of April has exactly 5 Mondays is:`,
    options: [
      `3 7`,
      `5 30`,
      `2 15`,
      `2 7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 30`
  },
  {
    question: `If a vowel is chosen at random from the vowels of English alphabet, then the probability that it is a vowel of the word 'DELHI' is:`,
    options: [
      `2 5`,
      `1 26`,
      `5 26`,
      `2 26`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 26`
  },
  {
    question: `If the probability of an event is p, the probability of its complementary event will be:`,
    options: [
      `p – 1`,
      `p`,
      `1 – p`,
      `11 p−`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) p – 1`
  },
  {
    question: `Two numbers are selected randomly from {1, 2, 3, 4, 5, 6}, one after another without replacement. Then the probability that the smaller value among the two numbers is less than 4 is:`,
    options: [
      `4 5`,
      `23 30`,
      `2 5`,
      `8 15`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 5`
  },
  {
    question: `What is the probability of getting 53 Mondays in a leap year?`,
    options: [
      `2 366`,
      `53 366`,
      `2 7`,
      `7 366`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 366`
  },
  {
    question: `The probability of getting atleast two heads, when a coin is tossed thrice, will be`,
    options: [
      `1 2`,
      `1 4`,
      `1`,
      `3 8`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 8`
  },
  {
    question: `A dice is thrown twice. The probability of getting 4, 5 or 6 in the first throw and 1, 2, 3 or 4 in the second throw is:`,
    options: [
      `1 3`,
      `1 6`,
      `3 4`,
      `1 4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 4`
  },
  {
    question: `A fair dice is thrown once, the probability of getting a composite number less than 6 is:`,
    options: [
      `1 2`,
      `5 6`,
      `2 6`,
      `1 6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 6`
  },
  {
    question: `A letter is chosen at random from the letters of the word 'MISSISSIPPI'. If the probability of selecting a vowel is 4 31x − , then x is equal to:`,
    options: [
      `5`,
      `4`,
      `7`,
      `8 312 Class-X MATHEMATICS PW Very Short Answer T ype Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `How many triangular erasers are of Grey colour and how many squares are of black colour?`,
    options: [
      `3, 4`,
      `4, 5`,
      `5, 5`,
      `8, 6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5, 5`
  },
  {
    question: `Find the probability that lost eraser has the square shape.`,
    options: [
      `4 9`,
      `5 9`,
      `1 3`,
      `5 18`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 9`
  },
  {
    question: `Find the probability that lost eraser is of triangular shape.`,
    options: [
      `4 9`,
      `5 9`,
      `1 3`,
      `5 18`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 3`
  },
  {
    question: `Ruby got first chance to roll a dice. What is the probability that she got the sum of 7?`,
    options: [
      `1 6`,
      `7 12`,
      `5 18`,
      `1 9`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 18`
  },
  {
    question: `Rita got the next chance to roll a dice. What is the probability that she got the same number on both the dice?`,
    options: [
      `1 12`,
      `7 36`,
      `1 36`,
      `1 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7 36`
  },
  {
    question: `What is the probability that the sum of the numbers on the both the dice is divisible by 4 or 6?`,
    options: [
      `7 18`,
      `7 15`,
      `5 18`,
      `2 9`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 18`
  },
  {
    question: `Find the probability that the difference of numbers shown on the dice is 2.`,
    options: [
      `7 36`,
      `11 36`,
      `25 36`,
      `2 9 Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11 36`
  },
  {
    question: `Two dice are thrown simultaneously, find the probability of getting a multiple of 3 as the sum.`,
    options: [
      `1 3`,
      `2 3`,
      `11 36`,
      `4 3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 11 36`
  },
  {
    question: `A bag contains 12 good mobiles and some defective mobiles. If the probability of drawing a good mobile is three times of a defective mobile, then the number of defective mobiles in the bag are:`,
    options: [
      `3`,
      `18`,
      `4`,
      `6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 18`
  },
  {
    question: `A fair coin with 1 marked on one face and 3 on the other and a fair dice are both tossed. Find the probability that the sum of numbers that turn up is 7.`,
    options: [
      `1 6`,
      `1 12`,
      `2 24`,
      `5 12`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 24`
  },
  {
    question: `The odds in favour of an event are 3 : 5. Find the probability of occurrence of the event.`,
    options: [
      `5 8`,
      `3 8`,
      `2 8`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 8`
  },
  {
    question: `One of the two events must happen. Given that the chance of the one is two third of the other. Find the odds in favour of the other.`,
    options: [
      `2 : 3`,
      `2 : 5`,
      `3 : 2`,
      `5 : 7`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5 : 7`
  },
  {
    question: `A box contains 54 marbles each of which is blue, green and white. The probability of selecting a blue marble at random from the box is 1 3 and the probability of selecting a green marble at random is 4 9 . The number of white marbles in the box are:`,
    options: [
      `10`,
      `12`,
      `14`,
      `16`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 12`
  },
  {
    question: `Three identical dice are rolled. The probability that the same number will appear on each of the dice is`,
    options: [
      `1 6`,
      `1 36`,
      `1 18`,
      `3 28`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 28`
  },
  {
    question: `A number x is selected from the numbers 1, 2, 3 and then a second number y is randomly selected form the numbers 1, 4, 9 then the probability that the product xy of the two numbers will be less than 9 is`,
    options: [
      `3 7`,
      `4 9`,
      `5 9`,
      `7 9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 9`
  },
  {
    question: `A helicopter was crashed some where in the region given below. A B CD 10 cm 10 cm The probability that the helicopter was crashed in the shaded region is:`,
    options: [
      `0.75`,
      `0.57`,
      `0.61`,
      `0.77`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.57`
  },
  {
    question: `'A' speaks truth in 60% of cases and 'B' in 80% of cases. Then, the probability that they will say the same thing while describing a single event is:`,
    options: [
      `0.54`,
      `0.56`,
      `0.74`,
      `0.94`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.74`
  },
  {
    question: `At a fare, cards bearing numbers 1 to 3500, one number on one card, are put in a box. Each player selects one card at random and that card is not replaced. If the selected card has a perfect cube number greater than 500, the player wins a prize. The probability that the first player wins is: 318 Class-X MATHEMATICS PW`,
    options: [
      `2 875`,
      `10 3500`,
      `0.997`,
      `36 3500`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 3500`
  },
  {
    question: `Mohan lies 13 out of 20 times and Rekha lies 7 out of 18 times. Find the probability that they will contradict each other in stating the same fact?`,
    options: [
      `190 360`,
      `95 180`,
      `8 15`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 95 180`
  },
  {
    question: `A bag contains 8 red and x blue balls. If the odds against drawing a blue ball is 2: 5, then x = ?`,
    options: [
      `15`,
      `20`,
      `18`,
      `24`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 15`
  },
  {
    question: `Sita and Gita are friends, what is the probability that both will have different birthdays (ignoring a leap year):`,
    options: [
      `1 365`,
      `1 364`,
      `364 365`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 364 365`
  },
  {
    question: `Two dice are thrown. Find the probability that sum of numbers of both up sides of both dice is a perfect square`,
    options: [
      `1 6`,
      `7 36`,
      `5 36`,
      `0`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7 36`
  },
  {
    question: `What is the probability having 53 Thursdays in ordinary year (except leap year)?`,
    options: [
      `2 7`,
      `3 7`,
      `1 7`,
      `4 7`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 7`
  },
  {
    question: `Two dice are rolled simultaneously, what is the probability of getting sum of the digits on the upper face as a prime number?`,
    options: [
      `5 36`,
      `5 12`,
      `5 18`,
      `11 36`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 12`
  },
  {
    question: `Two dice are thrown together. The probability of getting sum of numbers is divisible by 5 is:`,
    options: [
      `29 36`,
      `5 36`,
      `1 6`,
      `7 36`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 36`
  },
  {
    question: `A number is to be chosen at random from among the numbers –3, –2, –1, 0, 1, 2, 3 What is the probability for the modulus of the number chosen to be less than 2 ?`,
    options: [
      `5 7`,
      `3 7`,
      `2 7`,
      `1 7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 7`
  },
  {
    question: `Three digit numbers are formed using the digits 0, 1, 2 and 5 (without repetition). Find the probability that the number is divisible by 5 .`,
    options: [
      `3 4`,
      `1 2`,
      `1 4`,
      `5 9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5 9`
  },
  {
    question: `‘Karan’ speaks truth in 75% cases and ‘Surash’ speaks truth in 80% cases. Find the probability that they contradict each other in a statement is:`,
    options: [
      `13 20`,
      `3 5`,
      `2 5`,
      `7 20`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 7 20`
  },
  {
    question: `One ticket is drawn from a bag containing 100 tickets numbered 1, 2, 3, ....., 100. If the number on the selected ticket is x, then the probability that 1 2x x+> is:`,
    options: [
      `0`,
      `0.99`,
      `1`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.99`
  },
  {
    question: `A die is constructed so that when it is thrown each even number is twice as likely to come up as each of the odd number. What is the probability of getting 6, when it is thrown once? Competitive Corner 319 Probability`,
    options: [
      `1 6`,
      `1 9`,
      `2 9`,
      `1 3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 9`
  },
  {
    question: `The probability that card drawn from a pack of 52 cards will be diamond or a King is`,
    options: [
      `2 13`,
      `4 13`,
      `1 13`,
      `1 52`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 13`
  },
  {
    question: `Two dice are thrown at the same time. Then the probability of getting the total of at least 8 is :`,
    options: [
      `5 6`,
      `5 12`,
      `5 18`,
      `5 36`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 12`
  },
  {
    question: `One box contains four cards numbered 1, 3,5 and 7 and another box contains four cards numbered as 2, 4, 6 and 8. One card is drawn from each box at random. The probability that the product of the numbers so drawn is more than 14 is:`,
    options: [
      `1 2`,
      `7 10`,
      `3 8`,
      `5 8`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 2`
  },
  {
    question: `In a single throw of two dice, what will be the probability of getting a total of 8 .`,
    options: [
      `1 36`,
      `5 6`,
      `1 6`,
      `5 36`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5 36`
  },
  {
    question: `There are thirty cards numbered from 1 to 30. If a card is drawn at random find the probability that, the drawn card has a prime number greater than 7`,
    options: [
      `1 2`,
      `1 3`,
      `1 4`,
      `1 5`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 5`
  },
  {
    question: `Three dice are thrown simultaneously. The probability of getting a total of at least 5 of the numbers appearing on their tops is`,
    options: [
      `5 54`,
      `7 54`,
      `49 54`,
      `53 54`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 53 54`
  },
  {
    question: `A box contains four cards numbered as 1, 2, 3 and 4 and another box contains four cards numbered as 1, 4, 9 and 16. One card is drawn at random from each box. What is the probability of getting the product of the two numbers so obtained, more than 16?`,
    options: [
      `5 8`,
      `1 2`,
      `3 8`,
      `1 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 8`
  },
  {
    question: `If two dice are thrown together, the probability that the difference of the numbers appearing on them is a prime number`,
    options: [
      `2 9`,
      `4 9`,
      `5 12`,
      `17 36`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 9`
  },
  {
    question: `A number is picked up at random from the numbers from 1 to 1000. The probability that it is of the form mn (where m > 1, n > 1) is`,
    options: [
      `1 20`,
      `1 25`,
      `1 30`,
      `1 39`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 25`
  },
  {
    question: `Two unbiased dice are rolled. What is the probability of getting a sum which is neither 7 nor 11?`,
    options: [
      `7 9`,
      `7 18`,
      `2 8`,
      `11 18 320 Class-X MATHEMATICS PW Multiple Choice Questions`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7 9`
  }
];
