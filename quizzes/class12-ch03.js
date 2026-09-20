// class12-ch03
// 30 MCQs · EN + HI

const QUESTIONS = [
  {
    question: `The number of all possible matrices of order 2×3 with each entry 1 or 2 is`,
    question_hi: `प्रत्येक प्रविष्टि 1 या 2 के साथ क्रम 2×3 के सभी संभावित मैट्रिस की संख्या है`,
    options: [
      `16`,
      `6`,
      `64`,
      `24`,
    ],
    options_hi: [
      `16`,
      `6`,
      `64`,
      `24`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (C) 64`,
    solution_hi: `सही उत्तर: (c)`,
    difficulty: 2
  },
  {
    question: `[3𝑐+6 𝑎−𝑑 𝑎+𝑑 2−3𝑏]=[12 2 −8 −4]are equal, then value of 𝑎𝑏−𝑐𝑑 is:`,
    question_hi: `[2 − 8 − 4]=[12 2 −8 −4] बराबर हैं, तो −का मानहै:`,
    options: [
      `4`,
      `16`,
      `-4`,
      `-16`,
    ],
    options_hi: [
      `4`,
      `16`,
      `-4`,
      `-16`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) 4`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `For the matrix 𝑋=[ 0 1 1 1 0 1 1 1 0 ],(𝑋2−𝑋) is:`,
    question_hi: `मैट्रिक्स के लिए:=[ 0 1 1 1 0 1 1 1 1 0 ],(° 2 −°) है:`,
    options: [
      `21`,
      `31`,
      `1`,
      `51`,
    ],
    options_hi: [
      `21`,
      `31`,
      `1`,
      `51`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) 21`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `For two matrices 𝐏=[ 3 4 −1 2 0 1 ] and 𝐐T=[−1 2 1 1 2 3], 𝑃−𝑄 is:`,
    question_hi: `दो मैट्रिसेस के लिए: =[ 3 4 −1 2 0 1 ] और: T=[−1 2 1 2 3] है:`,
    options: [
      `[ 2 3 −3 0 0 −3 ]`,
      `[ 4 3 −3 0 −1 −2 ]`,
      `[ 4 3 −0 −3 −1 −2 ]`,
      `[ 2 3 0 −3 0 −3 ]`,
    ],
    options_hi: [
      `[ 2 3 −3 0 0 −3 ]`,
      `[ 4 3 −3 0 −1 −2 ]`,
      `[ 4 3 −0 −3 −1 −2 ]`,
      `[ 2 3 0 −3 0 −3 ]`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) [ 4 3 −3 0 −1 −2 ]`,
    solution_hi: `सही उत्तर: (B) [ 4 3 −3 0 −1 −2 ]`,
    difficulty: 2
  },
  {
    question: `A matrix 𝐀=[𝑎𝑖𝑗]3×3 is defined by 𝑎𝑖𝑗={ 2𝑖+3𝑗, 𝑖<𝑗 5, 𝑖=𝑗 3𝑖−2𝑗, 𝑖>𝑗 The number of elements in A which are more than 5, is:`,
    question_hi: `एक मैट्रिक्स (Matrix) =[अध्यात्मिक]3×3 को अध्यात्म (अध्यात्म) ={ 2 अध्यात्म + 3 अध्यात्म, अध्यात्म (अध्यात्म) द्वारा परिभाषित किया गया है। A में तत्वों की संख्या जो 5 से अधिक हैं, वह है:`,
    options: [
      `3`,
      `4`,
      `5`,
      `6`,
    ],
    options_hi: [
      `3`,
      `4`,
      `5`,
      `6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) 4`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `If A is a square matrix such that A2=A, then (I−A)3+A is equal to:`,
    question_hi: `यदि A एक वर्ग मैट्रिक्स है जैसे कि A2=A, तो (I-A)3+A किसके बराबर है:`,
    options: [
      `I`,
      `0`,
      `I−A`,
      `I+A`,
    ],
    options_hi: [
      `I`,
      `0`,
      `I A<ex id="_1"/>`,
      `I+A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) I`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `If [𝑥][𝑥 1][1 0 −2 0]=0, then 𝑥 equals:`,
    question_hi: `यदि [O ][ O ][ O] 1 ][ 1 0 −2 0]=0, तो O बराबर है:`,
    options: [
      `0`,
      `-2`,
      `-1`,
      `2`,
    ],
    options_hi: [
      `0`,
      `-2`,
      `-1`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (D) 2`,
    solution_hi: `सही उत्तर: (D) 2`,
    difficulty: 2
  },
  {
    question: `If 𝐴=[2 −3 4],𝐵=[ 3 2 2 ],𝑋=[1 2 3]and 𝑌=[ 2 3 4 ], then 𝐴𝐵+𝑋𝑌 equals:`,
    question_hi: `यदि O=[2 −3 4], O =[ 3 2 2 ], O =[1 2 3]और O =[ 2 3 4 ], तो O+Oबराबर है:`,
    options: [
      `[28]`,
      `[24]`,
      `28`,
      `24`,
    ],
    options_hi: [
      `[28]`,
      `[24]`,
      `28`,
      `24`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) [28]`,
    solution_hi: `सही उत्तर: (A )[ 28]`,
    difficulty: 2
  },
  {
    question: `Suppose 𝑃 and 𝑄 are two different matrices of order 3×𝑛 and 𝑛×𝑝, then the order of the matrix P×Q is?`,
    question_hi: `मान लीजिए कि क्रम 3 के दो अलग - अलग मैट्रिक्स हैं?? और?? हैं, तो मैट्रिक्स P×Q का क्रम है?`,
    options: [
      `3×𝑝`,
      `𝑝×3`,
      `𝑛×𝑛`,
      `3×3`,
    ],
    options_hi: [
      `3×`,
      `>×3`,
      `>×`,
      `3. 3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) 3×𝑝`,
    solution_hi: `सही उत्तर: (A) 3×`,
    difficulty: 2
  },
  {
    question: `𝐴=[𝑎𝑖𝑗]𝑚×𝑛is a square matrix, if`,
    question_hi: `•=[*बी.आर.]*एक वर्ग मैट्रिक्स है, यदि`,
    options: [
      `𝑚<𝑛`,
      `𝑚>𝑛`,
      `𝑚=𝑛`,
      `None of these`,
    ],
    options_hi: [
      `</ g> </ g >`,
      `</ प्रविष्टि> </ प्रविष्टि >`,
      `</ प्रविष्टि> </ प्रविष्टि >`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (C) 𝑚=𝑛`,
    solution_hi: `सही उत्तर: (C)‍=‍`,
    difficulty: 2
  },
  {
    question: `If 𝐴=[cos 𝛼 −sin 𝛼 sin 𝛼 cos 𝛼], then 𝐴+𝐴′=𝐼, then the value of 𝛼 is:`,
    question_hi: `यदि a=[cos o -sin o - sin o - sin o - cos o] है, तो a + o '= o, तो a का मान है:`,
    options: [
      `𝜋 6`,
      `𝜋 3`,
      `𝜋`,
      `3𝜋 2`,
    ],
    options_hi: [
      `‹ 6`,
      `> 3`,
      `¡`,
      `3> 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) 𝜋 3`,
    solution_hi: `सही उत्तर: (B) 3`,
    difficulty: 2
  },
  {
    question: `Matrices 𝐴 and 𝐵 will be inverse of each other only if:`,
    question_hi: `मैट्रिसेस और मैट्रिसेस केवल तभी एक - दूसरे के प्रति व्युत्क्रम होंगे यदि:`,
    options: [
      `𝐴𝐵=𝐵𝐴`,
      `𝐴𝐵=𝐵𝐴=0`,
      `𝐴𝐵=0,𝐵𝐴=𝐼`,
      `𝐴𝐵=𝐵𝐴=𝐼`,
    ],
    options_hi: [
      `</ g > = </ g> </ g > </g > </ g`,
      `</ g > =</ g > </g > </g > =0`,
      `</ g > =0, </ g > </ g>= </ g>`,
      `</प्रविष्टि></ प्रविष्टि >`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (D) 𝐴𝐵=𝐵𝐴=𝐼`,
    solution_hi: `सही उत्तर: (D) अध्यादेश= अध्यादेश =अध्यादेश=अध्यादेश`,
    difficulty: 2
  },
  {
    question: `If 𝐴 and 𝐵 are symmetric matrices of same order, then 𝐴𝐵−𝐵𝐴 is a:`,
    question_hi: `यदि 'और' एक ही क्रम के सममित मैट्रिक्स हैं,तो '-' एक है:`,
    options: [
      `Skew-symmetric matrix`,
      `Symmetric matrix`,
      `Zero matrix`,
      `Identity matrix`,
    ],
    options_hi: [
      `Skew-symmetric matrix`,
      `Symmetric matrix`,
      `Zero matrix`,
      `Identity matrix`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) Skew-symmetric matrix`,
    solution_hi: `सही उत्तर: (A) तिरछा - सममित मैट्रिक्स`,
    difficulty: 2
  },
  {
    question: `If the matrix 𝐴 is both symmetric and skewsymmetric, then:`,
    question_hi: `यदि मैट्रिक्स दोनों सममित और skewsymmetric है, तो:`,
    options: [
      `𝐴 is a diagonal matrix`,
      `𝐴 is a zero matrix`,
      `𝐴 is a square matrix`,
      `None of these`,
    ],
    options_hi: [
      `‹ एक विकर्ण मैट्रिक्स है`,
      `‹ एक शून्य मैट्रिक्स है`,
      `‹ एक वर्ग मैट्रिक्स है`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) 𝐴 is a zero matrix`,
    solution_hi: `सही उत्तर: (B) एक शून्य मैट्रिक्स है`,
    difficulty: 2
  },
  {
    question: `The matrix [ 1 0 0 0 2 0 0 0 4 ] is a:`,
    question_hi: `मैट्रिक्स [ 1 0 0 0 2 0 0 0 4 ] एक है:`,
    options: [
      `identity matrix`,
      `symmetric matrix Page | 56`,
      `skew-symmetric matrix`,
      `None of these`,
    ],
    options_hi: [
      `identity matrix`,
      `symmetric matrix Page | 56`,
      `skew-symmetric matrix`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) symmetric matrix Page | 56`,
    solution_hi: `सही उत्तर: (B) सममित मैट्रिक्स पृष्ठ | 56`,
    difficulty: 2
  },
  {
    question: `The matrix [ 0 −5 8 5 0 12 −8 −12 0 ] is 𝑎 :`,
    question_hi: `मैट्रिक्स [ 0 −5 8 5 0 12 −8 −12 0 ] है :`,
    options: [
      `diagonal matrix`,
      `symmetric matrix`,
      `skew symmetric matrix`,
      `scalar matrix`,
    ],
    options_hi: [
      `diagonal matrix`,
      `symmetric matrix`,
      `skew symmetric matrix`,
      `scalar matrix`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (C) skew symmetric matrix`,
    solution_hi: `सही उत्तर: (C) तिरछा सममित मैट्रिक्स`,
    difficulty: 2
  },
  {
    question: `The number of all the possible matrices of order 3 × 3 with each entry 2 or 0 is`,
    question_hi: `प्रत्येक प्रविष्टि 2 या 0 के साथ क्रम 3 × 3 के सभी संभावित मैट्रिस की संख्या है`,
    options: [
      `9`,
      `27`,
      `81`,
      `512`,
    ],
    options_hi: [
      `9`,
      `27`,
      `81`,
      `512`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (D) 512`,
    solution_hi: `सही उत्तर: (D) 512`,
    difficulty: 2
  },
  {
    question: `If A is skew-symmetric matrix, then A² is`,
    question_hi: `यदि A तिरछा - सममित मैट्रिक्स है, तो A² है`,
    options: [
      `symmetric matrix`,
      `skew-symmetric matrix`,
      `Identity matrix`,
      `can't be determined`,
    ],
    options_hi: [
      `symmetric matrix`,
      `skew-symmetric matrix`,
      `Identity matrix`,
      `निर्धारित नहीं किया जा सकता`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) symmetric matrix`,
    solution_hi: `सही उत्तर: (A) सममित मैट्रिक्स`,
    difficulty: 2
  },
  {
    question: `If A is a square matrix such that A² = A, then (I - A)³ + A is equal to`,
    question_hi: `यदि A एक वर्ग मैट्रिक्स है जैसे कि A² = A, तो (I - A)³ + A बराबर है`,
    options: [
      `I`,
      `0`,
      `I – A`,
      `I + A`,
    ],
    options_hi: [
      `I`,
      `0`,
      `I A<ex id="_1"/>`,
      `I + A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) I`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `If A is a matrix of order m × n and B is a matrix such that AB' and B'A are both defined, then order of matrix B is`,
    question_hi: `यदि A, क्रम m × n का एक मैट्रिक्स है और B एक मैट्रिक्स है जैसे कि AB' और B'A दोनों को परिभाषित किया गया है, तो मैट्रिक्स B का क्रम है`,
    options: [
      `m × m`,
      `n × n`,
      `n × m`,
      `m × n Select the correct option for each Assertion-Reason question. (A) Both assertion and reason are correct, and the reason is the correct explanation of assertion. (B) Both asse`,
    ],
    options_hi: [
      `m × m`,
      `N/n`,
      `N⋅m`,
      `m × n प्रत्येक अभिकथन - कारण प्रश्न के लिए सही विकल्प का चयन करें। (A) कथन और कारण दोनों सही हैं, और कारण कथन का सही स्पष्टीकरण है। (B) दोनों asse`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (D) m × n Select the correct option for each Assertion-Reason question. (A) Both assertion and reason are correct, and the reason is the correct explanation of assertion. (B) Both asse`,
    solution_hi: `सही उत्तर: (D) m × n प्रत्येक अभिकथन - कारण प्रश्न के लिए सही विकल्प का चयन करें। (A) कथन और कारण दोनों सही हैं, और कारण कथन का सही स्पष्टीकरण है। (B) दोनों asse`,
    difficulty: 2
  },
  {
    question: `If A=[ 1 0 2 0 2 1 2 0 3 ], prove that A3−6A2+7A+2I=0 SOLUTIONS 1 MARK TYPE QUESTIONS 1. C 2. A 3. A 4. B 5. B 6. A 7. D 8. A 9. A 10. C 11. B 12. D 13. A 14. B 15. B 16. C 17. D 18. A 19. A 20. D 21. A 22. C 23. A 24. A 25. A Ans 1. Option (C) is correct. Explanation: The order of the matrix =2×3. The number of elements =2×3=6. Each place can have either 1 or 2 . So, each place can be filled in 2 ways.Thus, the number of possible matrices =26=64 Ans 2. Option`,
    question_hi: `If A=[ 1 0 2 0 2 1 2 0 3 ], prove that A3−6A2+7A+2I=0 SOLUTIONS 1 MARK TYPE QUESTIONS 1. C 2. A 3. A 4. B 5. B 6. A 7. D 8. A 9. A 10. C 11. B 12. D 13. A 14. B 15. B 16. C 17. D 18. A 19. A 20. D 21. A 22. C 23. A 24. A 25. A Ans 1. Option (C) is correct. Explanation: The order of the matrix =2×3. The number of elements =2×3=6. Each place can have either 1 or 2 . So, each place can be filled in 2 ways.Thus, the number of possible matrices =26=64 Ans 2. Option`,
    options: [
      `is correct. Explanation: Given, [3𝑐+6 𝑎−𝑑 𝑎+𝑑 2−3𝑏]=[12 2 −8 −4] ∴ 3𝑐+6=12, 𝑎−𝑑 =2, 𝑎+𝑑 =−8, 2−3𝑏 =−4 On solving eqs., we get 𝑎=−3,c=2, 𝑑= -5and 𝑏=2 Now, 𝑎𝑏−𝑐𝑑=(−3)2−2(−5)⇒ 𝑎𝑏−𝑐𝑑=−`,
      `is correct. Explanation: Here, 𝑄=(𝑄𝑇)𝑇=[ −1 1 2 2 1 3 ],𝑃−𝑄=[ 3 4 −1 2 0 1 ]−[ −1 1 2 2 1 3 ]=[ 4 3 −3 0 −1 −2 ]`,
      `is correct. Explanation: It is known that a given matrix is said to be a square matrix if the number of rows is equal to the number of columns. Therefore, 𝐴=[𝑎𝑖𝑗]𝑚×𝑛 is a square ma`,
      `is correct. Explanation: We know that if 𝐴 is a square matrix of order 𝑚, and if there exists another square matrix 𝐵 of the same order 𝑚, such that 𝐴𝐵=𝐵𝐴=𝐼, then 𝐵 is said to be t`,
    ],
    options_hi: [
      `सही है। स्पष्टीकरण: दिया गया है, [3 ‎+6 ‎ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ 2 ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ = [12 2−8 ‍ ‍ 4] † 3 ‍ + 6 = 12 ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍⇒ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍`,
      `यह सही है। स्पष्टीकरण: यहाँ, [ −1 1 2 2 1 3 ], [3 4 − 1 2 0 1] - [ − 1 1 2 1 3 ]=[ 4 3 −3 0 −1 −2 ]`,
      `सही है। स्पष्टीकरण: यह ज्ञात है कि दिए गए मैट्रिक्स को एक वर्ग मैट्रिक्स कहा जाता है यदि पंक्तियों की संख्या स्तंभों की संख्या के बराबर है। इसलिए, एक वर्ग मा है।`,
      `यह सही है। स्पष्टीकरण: हम जानते हैं कि यदि 'क्रम का एक वर्ग मैट्रिक्स है, और यदि एक ही क्रम का एक और वर्ग मैट्रिक्स मौजूद है, जैसे कि' s '=' s '=', तो 't' कहा जाता है`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) is correct. Explanation: Here, 𝑄=(𝑄𝑇)𝑇=[ −1 1 2 2 1 3 ],𝑃−𝑄=[ 3 4 −1 2 0 1 ]−[ −1 1 2 2 1 3 ]=[ 4 3 −3 0 −1 −2 ]`,
    solution_hi: `सही उत्तर: (B) सही है। व्याख्या: यहाँ, τ =(τ τ) ρ =[ −1 1 2 1 3 ], ρ − τ =[ 3 4 −1 2 0 1 ]-[ −1 1 2 1 3 ]=[ 4 3 −3 0 −1 −2 ]`,
    difficulty: 2
  },
  {
    question: `If A and 𝐵 are matrices of same order, then (𝐴𝐵′− 𝐵𝐴′) is a:`,
    question_hi: `यदि A और C एक ही क्रम के मैट्रिसेस हैं, तो (C) एक है:`,
    options: [
      `skew-symmetric matrix`,
      `null matrix`,
      `symmetric matrix`,
      `unit matrix`,
    ],
    options_hi: [
      `skew-symmetric matrix`,
      `null matrix`,
      `symmetric matrix`,
      `unit matrix`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (C) symmetric matrix`,
    solution_hi: `सही उत्तर: (C) सममित मैट्रिक्स`,
    difficulty: 2
  },
  {
    question: `If 𝐴 is square matrix such that 𝐴2 = 𝐼, then (𝐴−𝐼)3+ (𝐴+𝐼)3− 7𝐴 is equal to:`,
    question_hi: `यदि 'वर्ग मैट्रिक्स' इस प्रकार है कि '2 =' है, तो '3+ (' +' है) '3 -7' के बराबर है:`,
    options: [
      `𝐴`,
      `𝐼 − 𝐴`,
      `𝐼 + 𝐴`,
      `−3𝐴`,
    ],
    options_hi: [
      `¡`,
      `‎ - ‎ ‎`,
      `C + C`,
      `−3°`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) 𝐴`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `If 𝐴=[2 −1 3 −4 5 1]and 𝐵=[ 2 3 4 −2 1 5 ]then:`,
    question_hi: `यदि a=[2 −1 3 −4 5 1]और a=[ 2 3 4 −2 1 5 ]तो:`,
    options: [
      `only 𝐴𝐵 is defined.`,
      `only 𝐵𝐴 is defined.`,
      `𝐴𝐵and𝐵𝐴 both are defined.`,
      `𝐴𝐵 and 𝐵𝐴 both are not defined.`,
    ],
    options_hi: [
      `केवल परिभाषितकिया गया है।`,
      `केवल परिभाषितकिया गया है।`,
      `दोनों को परिभाषित किया गया है।`,
      `दोनों को परिभाषित नहीं किया गया है।`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) only 𝐴𝐵 is defined.`,
    solution_hi: `सही उत्तर: (A) केवल 'को परिभाषित किया गया है।`,
    difficulty: 2
  },
  {
    question: `Total number of possible matrices of order 3×3with each entry 2 or 0 is:`,
    question_hi: `प्रत्येक प्रविष्टि 2 या 0 के साथ क्रम 3×3 के संभावित मैट्रिस की कुल संख्या है:`,
    options: [
      `9`,
      `27`,
      `81`,
      `512`,
    ],
    options_hi: [
      `9`,
      `27`,
      `81`,
      `512`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) 27`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `𝐴matrix which is symmetric and skew symmetric both`,
    question_hi: `मैट्रिक्स जो सममित और तिरछा सममित दोनों है`,
    options: [
      `I`,
      `0`,
      `2I`,
      `None of these`,
    ],
    options_hi: [
      `I`,
      `0`,
      `2I`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (B) 0`,
    solution_hi: `सही उत्तर (बी)`,
    difficulty: 2
  },
  {
    question: `If matrix 𝐴=[𝑎𝑖𝑗]2×2, where𝑎𝑖𝑗=1 if 𝑖≠𝑗 and 𝑎𝑖𝑗=0 if 𝑖=𝑗 i, then 𝐴2 is equal to:`,
    question_hi: `यदि मैट्रिक्स (matrix) =[अध्यापक]2×2 है, जहां अध्यापक (अध्यापक) =1 है यदि अध्यापक (अध्यापक) और अध्यापक (अध्यापक) =0 है यदि अध्यापक (अध्यापक) = अध्यापक (अध्यापक) = 1 है, तो अध्यापक (अध्यापक) = 2 है:`,
    options: [
      `I`,
      `A`,
      `0`,
      `None of these`,
    ],
    options_hi: [
      `I`,
      `A`,
      `0`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) I`,
    solution_hi: `सही उत्तर (क)`,
    difficulty: 2
  },
  {
    question: `The matrix 𝐴=[ 0 −5 8 5 0 12 −8 −12 0 ]is a:`,
    question_hi: `मैट्रिक्स =[ 0 −5 8 5 0 12 −8 −12 0 ] एक है:`,
    options: [
      `diagonal matrix`,
      `symmetric matrix`,
      `skew-symmetric matrix`,
      `scalar matrix`,
    ],
    options_hi: [
      `diagonal matrix`,
      `symmetric matrix`,
      `skew-symmetric matrix`,
      `scalar matrix`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (D) scalar matrix`,
    solution_hi: `सही उत्तर: (D) अदिश मैट्रिक्स`,
    difficulty: 2
  },
  {
    question: `If 𝐴 is a matrix of order 𝑚×𝑛 and B is a matrix such that AB' and BA'are both defined, then order of matrix B is:`,
    question_hi: `यदि 'क्रम का एक मैट्रिक्स है' और 'B' एक मैट्रिक्स है जैसे कि AB' और' BA'दोनों परिभाषित हैं, तो मैट्रिक्स B का क्रम है:`,
    options: [
      `𝑚×𝑛`,
      `𝑛×𝑛`,
      `𝑛×𝑚`,
      `𝑚×𝑚`,
    ],
    options_hi: [
      `>×`,
      `>×`,
      `>×`,
      `>×`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) 𝑚×𝑛`,
    solution_hi: `सही उत्तर: (A)××`,
    difficulty: 2
  },
  {
    question: `Which of the following matrices are null matrices? (i)[0 0 0 0] (ii)[ 0 0 0 0 0 0 0 0 0 ] (iii) [0 1 1 0] (iv) [0 0 1 0] Choose the correct option from the following:`,
    question_hi: `निम्नलिखित में से कौन सा मैट्रिक्स शून्य मैट्रिक्स हैं? (i)[0 0 0 0] (ii)[ 0 0 0 0 0 0 0 0 ] (iii) [0 1 0] (iv) [0 0 0 1 0] निम्नलिखित में से सही विकल्प चुनें:`,
    options: [
      `(i) and (ii)`,
      `(ii) and (iii)`,
      `(i) and (iii)`,
      `(ii) and (iv) Page | 70 The following question is Assertion and Reason based questions. Two statements are given, one labelled as Assertion (A) and the other is labelled as Reason `,
    ],
    options_hi: [
      `(i) and (ii)`,
      `(ii) and (iii)`,
      `(i) and (iii)`,
      `(ii) and (iv) Page | 70 The following question is Assertion and Reason based questions. Two statements are given, one labelled as Assertion (A) and the other is labelled as Reason`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (A) (i) and (ii)`,
    solution_hi: `सही उत्तर: (A) (i) और (ii)`,
    difficulty: 2
  }
];
