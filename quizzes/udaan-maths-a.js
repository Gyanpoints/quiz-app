// Class 10 Maths Part-A (GyanPoints)
// 410 MCQs

const QUESTIONS = [
  {
    question: `Express each number as a product of its prime factors:`,
    options: [
      `140`,
      `156`,
      `3825`,
      `5005 (e) 7429 Sol. (a) 22 × 5 × 7 (b) 22 × 3 × 13 (c) 3 2 × 5 2 × 17 (d) 5 × 7 × 11 × 13 (e) 17 × 19 × 23`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 140`
  },
  {
    question: `Match the following columns : Column-I Column-II P. H.C.F. of 306 and 657 (i) 2 Q. H.C.F. of the smallest composite number and the smallest prime number (ii) 5 R. H.C.F. of 475 and 495 (iii) 9 S. Power of 2 in 144 (iv) 4`,
    options: [
      `P-(i), Q-(iv), R-(iii), S-(ii)`,
      `P-(iii), Q-(ii), R-(i), S-(iv)`,
      `P-(iii), Q-(i), R-(ii), S-(iv)`,
      `P-(iv), Q-(i), R-(iii), S-(iv)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(i), Q-(iv), R-(iii), S-(ii)`
  },
  {
    question: `The LCM of two numbers is 2400. Which of the following can not be their HCF? [CBSE 2022]`,
    options: [
      `300`,
      `400`,
      `500`,
      `600`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 300`
  },
  {
    question: `The number of zeroes in number n, if n = 2 3 × 3 2 × 52 × 7, is equal to`,
    options: [
      `2`,
      `1`,
      `5`,
      `6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `The least number that is divisible by all the natural numbers from 1 to 10 (both inclusive) is [Exemplar]`,
    options: [
      `10`,
      `100`,
      `504`,
      `2520`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 100`
  },
  {
    question: `If two positive integers a and b can be expressed as p = ab2 and q = a 3b; a, b being prime numbers, then LCM (p, q) is [Exemplar]`,
    options: [
      `ab`,
      `a2b2`,
      `a3b2`,
      `a3b3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) a3b2`
  },
  {
    question: `Find the greatest number which when divides 70 and 125, leaves remainder 5 and 8 respectively.`,
    options: [
      `875`,
      `10`,
      `13`,
      `1680`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 13`
  },
  {
    question: `Statement-I: It two positive integers a and b are written as a = x 3y2 and b = xy 3; x, y are prime numbers, then HCF of a & b is x 3y2. Statement-II: If n is a natural number then 12 n can not end with digit 5.`,
    options: [
      `Only Statement-I is true`,
      `Both Statement-I & Statement-II is true`,
      `Only Statement-II is true`,
      `Neither Statement-I or Statement-II is true`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Only Statement-II is true`
  },
  {
    question: `HCF of two numbers is 27 and their LCM is 162. If one of the numbers is 54, then other number is [CBSE 2020]`,
    options: [
      `36`,
      `35`,
      `9`,
      `81`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 36`
  },
  {
    question: `If a = 2 3 × 3, b = 2 × 3 × 5, c = 3 p × 5 and LCM (a, b, c) = 2 3 × 3 2 × 5, then p =`,
    options: [
      `6`,
      `4`,
      `9`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `What is the greatest possible speed at which a girl can walk 95 m and 171 m in an exact number of minutes? [CBSE 2022]`,
    options: [
      `17 m/min.`,
      `19 m/min.`,
      `23 m/min.`,
      `13 m/min.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 17 m/min.`
  },
  {
    question: `Find the smallest number which is a perfect square and is divisible by each of 16, 20 and 24.`,
    options: [
      `600`,
      `2800`,
      `3600`,
      `2400`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2400`
  },
  {
    question: `The L.C.M. of a and 18 is 36. The H.C.F. of a and 18 is 2. Find the value of number a.`,
    options: [
      `4`,
      `5`,
      `6`,
      `1 Very Short Answer T ype Questions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6`
  },
  {
    question: `Total number of participants will be`,
    options: [
      `160`,
      `84`,
      `220`,
      `none of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 160`
  },
  {
    question: `Find the LCM of 60, 84 and 108.`,
    options: [
      `3780`,
      `840`,
      `544320`,
      `12`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 840`
  },
  {
    question: `Who reaches the nearest point?`,
    options: [
      `Birbal`,
      `Akbar`,
      `Mohit`,
      `All together 11 Real Numbers`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Birbal`
  },
  {
    question: `How many times can they meet in between on the same stair?`,
    options: [
      `3`,
      `4`,
      `5`,
      `0`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `Who takes the least number of steps to reach near a hundred?`,
    options: [
      `Birbal`,
      `Akbar`,
      `Mohit`,
      `All`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Akbar`
  },
  {
    question: `What is the first stair where any two out of three will meet together?`,
    options: [
      `Birbal and Akbar will meet for the first time on the 15th stair.`,
      `Akbar and Mohit will meet for the first time on the 35th stair.`,
      `Birbal and Mohit will meet for the first time on the 21st stair.`,
      `Birbal and Akbar will meet for the first time on 21st stair.`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Birbal and Mohit will meet for the first time on the 21st stair.`
  },
  {
    question: `What is the second stair where any two out of three will meet together?`,
    options: [
      `Birbal and Akbar will meet on 21 st stair.`,
      `Akbar and Mohit will meet on the 35 th stair.`,
      `Birbal and Mohit will meet on the 21 st stair.`,
      `Birbal and Mohit will meet on the 35 th stair. ANSWER KEY Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Birbal and Mohit will meet on the 21 st stair.`
  },
  {
    question: `If the HCF of 65 and 117 is in the form 65m – 117, then the value of m is: [Exemplar CBSE 2019]`,
    options: [
      `4`,
      `2`,
      `1`,
      `3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `(n2 – 1) is divisible by 8, if n is: [Exemplar]`,
    options: [
      `An integer`,
      `A natural number`,
      `An odd integer`,
      `An even integer`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A natural number`
  },
  {
    question: `Decimal expansion of a rational number is 327.7081. When the number is expressed in a b form, where a & b are co-primes what would be in the prime factors of b?`,
    options: [
      `2 and 7`,
      `3 and 8`,
      `2 and 5`,
      `2, 3 and 5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 and 5`
  },
  {
    question: `Statement-I: 987 10500 will have terminating decimal expansion. Statement-II: For any natural number a and b there exist unique whole numbers q and r such that, a = bq + r, (0 ≤ r ≤ b).`,
    options: [
      `Only I is true`,
      `Both I & II is true`,
      `Only II is true`,
      `Neither I or II is true`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Only II is true`
  },
  {
    question: `Select the one having a terminating decimal expansion:`,
    options: [
      `77 210`,
      `22 7`,
      `23 8`,
      `125 441`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 23 8`
  },
  {
    question: `For some integer q, every odd integer is of the form: [Exemplar]`,
    options: [
      `q`,
      `q + 1`,
      `2q`,
      `2q + 1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) q`
  },
  {
    question: `Among the following rational numbers, which one has a non-terminating repeating decimal expansion?`,
    options: [
      `45 3125`,
      `71 512`,
      `24 200`,
      `None of these 26 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these 26 Class-X MATHEMATICS PW`
  },
  {
    question: `If a is a rational number, then 52a – 22a is divisible by:`,
    options: [
      `Both 3 and 7`,
      `9`,
      `3`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Both 3 and 7`
  },
  {
    question: `The number 3 13 – 3 10 is divisible by:`,
    options: [
      `3 and 5`,
      `2, 3 and 13`,
      `2, 3 and 10`,
      `3 and 10`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 and 10`
  },
  {
    question: `Find the smallest number which on being divided by 15, leaves 5 as remainder, on being divided by 25, leaves a remainder of 15 and on being divided by 35 leaves a remainder of 25.`,
    options: [
      `1050`,
      `525`,
      `540`,
      `515`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 540`
  },
  {
    question: `The number 10 A – 1 is divisible by 11 for:`,
    options: [
      `All value of A`,
      `Even values of A`,
      `Odd values of A`,
      `A must be multiple of 11`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A must be multiple of 11`
  },
  {
    question: `A six digit number which consists of only one type of digits, either 1, 2, 3, 4, 5, 6, 7, 8 or 9, eg 111111, 222222... etc. This six digit number is always divisible by:`,
    options: [
      `11`,
      `13`,
      `7`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 11`
  },
  {
    question: `The difference of the squares of two odd natural numbers is divisible by:`,
    options: [
      `8`,
      `6`,
      `14`,
      `16`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 16`
  },
  {
    question: `For any positive integer a, a3 – a is divisible by:`,
    options: [
      `2`,
      `6`,
      `4`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `Find the number of natural numbers lying between 200 and 400 which are divisible by 4 and 5.`,
    options: [
      `10`,
      `11`,
      `9`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11`
  },
  {
    question: `Find the number of perfect cubes in the sequence 11, 22, 33, 44, ..., 100 100.`,
    options: [
      `32`,
      `34`,
      `37`,
      `40`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 34`
  },
  {
    question: `Find the largest number which will divide 398, 436 and 542 and leave 7, 11 and 15 as remainders, respectively.`,
    options: [
      `17`,
      `16`,
      `20`,
      `19`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 17`
  },
  {
    question: `A certain number has exactly eight factors including 1 and itself. Two of its factors are 21 and 35. The number is:`,
    options: [
      `105`,
      `210`,
      `420`,
      `525`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 210`
  },
  {
    question: `The last digit in the finite decimal representation of the number 2004 1 5   is:`,
    options: [
      `2`,
      `4`,
      `6`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `What is the greatest positive integer ‘n’ which makes n3 + 100 divisible by ‘n + 10’?`,
    options: [
      `890`,
      `810`,
      `1000`,
      `900`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 900`
  },
  {
    question: `Which of the following can never bе а common factor of 287 + x and 378 + x where x is any natural number?`,
    options: [
      `26`,
      `13`,
      `91`,
      `7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 26`
  },
  {
    question: `Number 1146600 can be written as the product of two factors, in how many ways?`,
    options: [
      `100`,
      `273`,
      `216`,
      `108`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 100`
  },
  {
    question: `Find unit’s digit in a = 7 17 + 7 34.`,
    options: [
      `7`,
      `8`,
      `10`,
      `6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10`
  },
  {
    question: `Last two digits of 33 288 will be:`,
    options: [
      `41`,
      `81`,
      `56`,
      `93`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 56`
  },
  {
    question: `Find the unit’s digit of (90 + 91 + 92 + 93 + ... + 92009).`,
    options: [
      `9`,
      `5`,
      `0`,
      `7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 9`
  },
  {
    question: `Find the greatest power of 7 contained in 926!.`,
    options: [
      `148`,
      `1078`,
      `152`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `How many zeroes will be there at the end of 36!36!.`,
    options: [
      `6!`,
      `8 × 36!`,
      `36!`,
      `8 3 × 36!`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6!`
  },
  {
    question: `Find the value of n for which 2 200 – 2 192.31 + 2 n is a perfect square.`,
    options: [
      `198`,
      `208`,
      `232`,
      `146 27 Real Numbers`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 208`
  },
  {
    question: `When 31513 and 34369 are divided by a certain three digit number, the remainders are equal, then the remainder is .... [Andhra Pradesh 2017]`,
    options: [
      `86`,
      `97`,
      `374`,
      `113`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 86`
  },
  {
    question: `The sum of squares of two consecutive even numbers added by 4 is always divisible by: [Chandigarh 2017]`,
    options: [
      `24`,
      `16`,
      `8`,
      `32`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 16`
  },
  {
    question: `If n is a natural number the 9 2n – 4 2n is always divisible by: [Delhi 2017]`,
    options: [
      `13`,
      `both 5 and 13`,
      `5`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) both 5 and 13`
  },
  {
    question: `A number when divided by 5, 3 and 2 leaves remainders 4, 2 and 1 respectively. Out of all three digit numbers, find the total such numbers. [Haryana 2017]`,
    options: [
      `28`,
      `29`,
      `30`,
      `31`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30`
  },
  {
    question: `A positive integer n when divided by 9, gives 7 as remainder. What will be the remainder when (3n – 1) is divided by 9? [Jharkhand 2017]`,
    options: [
      `1`,
      `2`,
      `3`,
      `1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `What is the smallest number which leaves the same remainder 1 on division by 18, 24, 30, 42? [Kerala 2017]`,
    options: [
      `2519`,
      `2520`,
      `2521`,
      `2522`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2521`
  },
  {
    question: `What is sum of all factors of 256? [Kerala 2017]`,
    options: [
      `511`,
      `512`,
      `1023`,
      `1024`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 511`
  },
  {
    question: `Which is unit digit of 6 18 – 5 10? [Rajasthan 2017]`,
    options: [
      `5`,
      `8`,
      `1`,
      `9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9`
  },
  {
    question: `If a natural number ‘a’ is divided by 7, the remainder is 5. If a natural number ‘b ’ is divided by 7, the remainder is 3. The remainder is ‘r’ if a + b is divided by 7. Find the value of 35 4 r + . [Chandigarh 2018]`,
    options: [
      `7`,
      `2`,
      `8`,
      `11`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7`
  },
  {
    question: `The expression 14 m – 6 m will always divisible by [Delhi 2018]`,
    options: [
      `8`,
      `20`,
      `14`,
      `6`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6`
  },
  {
    question: `How many natural numbers between 15 to 500 when divided by 6 leave remainder 5? [Maharashtra 2018]`,
    options: [
      `80`,
      `81`,
      `82`,
      `83`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 82`
  },
  {
    question: `The largest number which divides 72 and 127 leaving remainders 7 and 10 respectively is: [Gujrat 2018]`,
    options: [
      `845`,
      `458`,
      `65`,
      `13`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 13`
  },
  {
    question: `If 102017 – 2017 is expressed as integer, what is the sum of its digits? [Telangana 2018]`,
    options: [
      `18144`,
      `17468`,
      `16466`,
      `18564`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 18144`
  },
  {
    question: `If 39 + 312 + 315 + 3n is a perfect cube (of an integer) where n ∈ N, then find the value of n. [Telangana 2018]`,
    options: [
      `18`,
      `14`,
      `16`,
      `17`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 17`
  },
  {
    question: `Compute: LCM of (1,2,3,...,200) LCM of (102,103,104,...,200) [Telangana 2018]`,
    options: [
      `101`,
      `106`,
      `184`,
      `176`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 106`
  },
  {
    question: `Product of any three consecutive even numbers is divisible by: [Madhya Pradesh 2018]`,
    options: [
      `2`,
      `4`,
      `16`,
      `12`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `What is the ascending order of the surds 39 62, 3, 4 ? [Orrisa 2018]`,
    options: [
      `93 64, 3, 2`,
      `93 64, 2, 3`,
      `39 62, 3, 4`,
      `936 3 ,4 ,2 Competitive Corner 28 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 93 64, 2, 3`
  },
  {
    question: `The unit digit in the expression 55 725 + 73 5810 + 22853 is: [Bihar 2019]`,
    options: [
      `0`,
      `4`,
      `5`,
      `6`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `What must be substracted from 21, 38, 55, 106 so that the remainders are proportional? [Orissa 2019]`,
    options: [
      `8`,
      `6`,
      `4`,
      `2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `The product of two 2-digit numbers is 2160 and their H.C.F is 12. Then sum of the number is: [Delhi 2019]`,
    options: [
      `72`,
      `84`,
      `96`,
      `60`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 84`
  },
  {
    question: `A number when divided by 6, gives remainder 3, then what will be the remainder if square of that number is divided by 6. [Punjab 2020]`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4`
  },
  {
    question: `If ‘a ’ and ‘b ’ are any two positive integers and ab × b a = 72, then the values of a and b are: [Tamil Nadu 2020]`,
    options: [
      `2, 3`,
      `3, 2`,
      `2, 3 or 3, 2`,
      `3, 3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2, 3`
  },
  {
    question: `When (10 12 – 1) is divided by 111 the quotient is: [Uttar Pradesh 2020]`,
    options: [
      `9009009`,
      `9009009009`,
      `9000009`,
      `900000009`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 9009009`
  },
  {
    question: `If [n] denotes the greatest integer < n and (n) denotes the smallest integer > n; n being a real number, then 11111 1 1 1 (1.5)5555     ×− ÷+        is: [West Bangal 2020]`,
    options: [
      `1.5`,
      `2`,
      `2.5`,
      `3.5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.5`
  },
  {
    question: `There __________. [NTSE 2014]`,
    options: [
      `Is exactly one such pair`,
      `Are exactly two such pairs`,
      `Are exactly three such pairs`,
      `Are exactly four such pairs`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Are exactly two such pairs`
  },
  {
    question: `LCM of two numbers x and y is 720 and the LCM of numbers 12x and 5y is also 720. The number y is: [NTSE 2015]`,
    options: [
      `180`,
      `144`,
      `120`,
      `90`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 180`
  },
  {
    question: `When a natural number x is divided by 5, the remainder is 2. When a natural number y is divided by 5, the remainder is 4. The remainder is z when x + y is divided by 5. The value of 25 3 z − is: [NTSE 2015]`,
    options: [
      `–1`,
      `1`,
      `–2`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `On dividing a natural number by 13, the remainder is 3 and on dividing the same number by 21, the remainder is 11. If the number lies between 500 and 600, then the remainder on dividing the number by 19 is: [NTSE 2016]`,
    options: [
      `4`,
      `6`,
      `9`,
      `13`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4`
  },
  {
    question: `The sum of all the possible remainders which can be obtained when the cube of a natural number is divided by 9, is: [NTSE 2017]`,
    options: [
      `5`,
      `6`,
      `8`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `On dividing 2272 as well as 875 by a 3-digit number N, we get the same remainder in each case. The sum of the digits of N is [NTSE 2017]`,
    options: [
      `10`,
      `11`,
      `12`,
      `13`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11`
  },
  {
    question: `Given that 1 0. 1428577 = which is a repeating decimal having six different digits. If x is the sum of such first three positive integers n such that 1 0. ,abcdefn = where a , b, c, d, e and f are different digits, then the value of x is: [NTSE 2018]`,
    options: [
      `20`,
      `21`,
      `41`,
      `42`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 42`
  },
  {
    question: `Which of the following digits is ruled out in the units place of 12n + 1 for every positive integer n ? [NTSE 2018]`,
    options: [
      `1`,
      `3`,
      `5`,
      `7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3`
  },
  {
    question: `If m = n 2 – n, where n is an integer, then m2 – 2m is divisible by: [NTSE 2019]`,
    options: [
      `20`,
      `24`,
      `30`,
      `16 29 Real Numbers`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20`
  },
  {
    question: `On dividing a natural number x by 11, the remainder is 3, and on dividing x by 17, the remainder is 9. If the number x lies between 300 and 400, then the remainder on dividing x by 21 is: [NTSE 2020]`,
    options: [
      `9 but not 11`,
      `11 but not 9`,
      `both 9 and 11`,
      `neither 9 nor 11`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11 but not 9`
  },
  {
    question: `If 10025–25 is written in decimal notations, then the sum of its digits is: [IOQJS 2020]`,
    options: [
      `444`,
      `442`,
      `424`,
      `422 ANSWER KEY Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 422 ANSWER KEY Multiple Choice Questions`
  },
  {
    question: `Match the following with correct response. Column-I (Zeroes) Column-II (Quadratic polynomials) P. 3 and –3 (i) x2 + x – 42 Q. 52+ and 52− (ii) x2 – 9 R. –9 and 1 9 (iii) 2 80 19xx +− S. –7 and 6 (iv) x2 – 10x + 21`,
    options: [
      `P-(i), Q-(iii), R-(ii), S-(iv)`,
      `P-(iii), Q-(ii), R-(iv), S-(i)`,
      `P-(ii), Q-(iv), R-(iii), S-(i)`,
      `P-(iv), Q-(i), R-(iii), S-(ii) 52 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(i), Q-(iii), R-(ii), S-(iv)`
  },
  {
    question: `If the zeroes of the quadratic polynomial ax2 + bx + c, c ≠ 0 are equal, then`,
    options: [
      `c and a have opposite signs`,
      `c and b have same sign`,
      `c and a have same sign`,
      `c and b have opposite signs`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) c and a have opposite signs`
  },
  {
    question: `If one of the zeroes of the quadratic polynomial (a – 1)x2 + ax + 1 is –3, then find the value of a`,
    options: [
      `4 3`,
      `4 3−`,
      `2 3`,
      `7 3−`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 3−`
  },
  {
    question: `Number of zeroes of polynomial is equal to number of points where the graph of polynomial`,
    options: [
      `Intersects x-axis`,
      `Intersects y-axis`,
      `Intersects y-axis or x-axis`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Intersects y-axis`
  },
  {
    question: `A polynomial of degree n has`,
    options: [
      `At least n zeroes`,
      `Only one zero`,
      `More than n zeroes`,
      `Atmost n zeroes`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) More than n zeroes`
  },
  {
    question: `Which of the following does NOT represent a zero polynomial?`,
    options: [
      `p(x) = 0`,
      `p(x) = x 0 – 1`,
      `p(x) = x 0`,
      `p(x) = 0.x 0`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) p(x) = x 0`
  },
  {
    question: `If f(x) = 2x 3 − 13x 2 + 17x + 12, then find out the remainder when f(x) is divided by (x + 2).`,
    options: [
      `–90`,
      `–85`,
      `–70`,
      `90`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) –70`
  },
  {
    question: `Find the remainder when x3 – ax2 + 6x – a is divided by x – a.`,
    options: [
      `2a`,
      `5a`,
      `6a`,
      `9a`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2a`
  },
  {
    question: `The zeroes of the quadratic polynomial x2 + 99x – 127 are`,
    options: [
      `Both positive`,
      `Both negative`,
      `One positive and one negative`,
      `Can't say`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Can't say`
  },
  {
    question: `If one of the zeroes of a quadratic polynomial of the form x2 + ax + b is the negative of the other, then it`,
    options: [
      `Has no linear term and the constant term is negative.`,
      `Has no linear term and the constant term is positive.`,
      `Can have a linear term but the constant term is negative.`,
      `Can't say`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Has no linear term and the constant term is negative.`
  },
  {
    question: `If (x + λ) is a factor of polynomial p(x) = x2 + 5x + 6, then the value of λ is`,
    options: [
      `2`,
      `3`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `If one of the zeroes of the cubic polynomial x3 + ax2 + bx + c is –1, then the product of the other two zeroes is`,
    options: [
      `b – a + 1`,
      `b – a – 1`,
      `a – b + 1`,
      `a – b –1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) a – b + 1`
  },
  {
    question: `The zeroes of the quadratic polynomial x 2 + kx + k, k ≠ 0,`,
    options: [
      `cannot both be positive`,
      `cannot both be negative`,
      `are always unequal`,
      `are always equal 54 Class-X MATHEMATICS PW Very Short Answer T ype Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) are always equal 54 Class-X MATHEMATICS PW Very Short Answer T ype Questions`
  },
  {
    question: `Find the dimensions of the outer frame?`,
    options: [
      `(10 + 2x) m × (10 + 3x) m`,
      `(5 + 2x) m × (10x + 2) m`,
      `(10 + 2x) m × (5 + 2x) m`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (10 + 2x) m × (10 + 3x) m`
  },
  {
    question: `A metal sheet of the minimum area is used to make the frame. Find the minimum area of the metal sheet before cutting?`,
    options: [
      `(4x 2 + 30x + 50) m 2`,
      `(4x 2 + 50x + 30) m 2`,
      `(4x 2 + 30x + 40) m 2`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (4x 2 + 50x + 30) m 2`
  },
  {
    question: `What is the area of the required final metal frame?`,
    options: [
      `(3x 2 + 40x) m 2`,
      `(4x 2 + 30x) m 2`,
      `(2x 2 + 30x) m 2`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (4x 2 + 30x) m 2`
  },
  {
    question: `If the area of the frame is 54 sq. m, what is the value of x?`,
    options: [
      `2.9 m`,
      `1.5 m`,
      `2.5 m`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.5 m`
  },
  {
    question: `Graph of a quadratic polynomial is in _________ shape.`,
    options: [
      `straight line`,
      `parabolic`,
      `circular`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) straight line`
  },
  {
    question: `The expression of the polynomial represented by the graph is`,
    options: [
      `x2 – 49`,
      `x2 – 64`,
      `x2 – 36`,
      `x2 – 81`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) x2 – 64`
  },
  {
    question: `Find the value of the polynomial represented by the graph when x = 6.`,
    options: [
      `– 2`,
      `– 1`,
      `0`,
      `1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) – 1`
  },
  {
    question: `The sum of zeroes of the polynomial x2 + 2x – 3 is`,
    options: [
      `–1`,
      `– 2`,
      `2`,
      `1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2`
  },
  {
    question: `If the zeroes of the quadratic polynomial x 2 + (a + 1) x + b are 2 and –3, then`,
    options: [
      `a = –7, b = –1`,
      `a = 5, b = –1`,
      `a = 2, b = – 6`,
      `a = 0, b = – 6`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) a = –7, b = –1`
  },
  {
    question: `If the zeroes of the polynomial x3 – 6x2 – 45x + 162 are a – b, –a, a + b, then the value of a is`,
    options: [
      `3`,
      `–6`,
      `6`,
      `5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –6`
  },
  {
    question: `Given that one of the zeroes of the cubic polynomial ax3 + bx2 + cx + d is zero, the product of the other two zeroes is`,
    options: [
      `– c a`,
      `c a`,
      `0`,
      `– b a`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) c a`
  },
  {
    question: `For a given polynomial p (x) = x 4 – 6x 3 – 26x 2 + 138x – 35, the sum of two zeroes is 4. Then the sum of other two zeroes is:`,
    options: [
      `6`,
      `2`,
      `8`,
      `1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8`
  },
  {
    question: `Find the sum of real values of y satisfying the equation x2 + x 2y2 + x 2y4 = 525 and x + xy + xy 2 = 35.`,
    options: [
      `7 2`,
      `9 2`,
      `5 2`,
      `3 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 2`
  },
  {
    question: `Using factor theorem, if factorized : p(x) = 2 x4 – 7x 3 – 13 x2 + 63 x – 45, which of the following is not a factor:`,
    options: [
      `(x + 1)`,
      `(x + 3)`,
      `(x – 1)`,
      `(2x – 5)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (x – 1)`
  },
  {
    question: `The value that must be added to f(x) = 3x 4 + 13x 3 – 29x2 + 100x – 77, so that the resulting polynomial is completely divisible by g(x) = x2 + 6x – 7.`,
    options: [
      `–67x – 77`,
      `– 67x + 77`,
      `67x – 77`,
      `67x + 77`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) –67x – 77`
  },
  {
    question: `The value of 222() () () ( )( ) ( )( ) ( )( ) xy yz zx yz zx xy zx xy yz −−− ++− −− −− − is:`,
    options: [
      `0`,
      `6`,
      `3`,
      `–3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) –3`
  },
  {
    question: `Find the degree of the polynomial (x + 1)(x 2 – x – x4 + 1).`,
    options: [
      `2`,
      `3`,
      `1`,
      `5`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `The degree of the polynomial, 5x4 – 9x2 + x9 is`,
    options: [
      `2`,
      `4`,
      `1`,
      `9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9`
  },
  {
    question: `Find the value of p for which (x − 2) is a factor of polynomial x4 − x3 +2x2 − px + 4.`,
    options: [
      `10`,
      `–9`,
      `4`,
      `–10`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `When 6x 9 + 3x16 – p is divided by x + 1, the remainder is 20. The value of p is`,
    options: [
      `–23`,
      `–12`,
      `8`,
      `23`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 23`
  },
  {
    question: `If (x – k) is the H.C.F. of x2 + x – 12 and 2x2 – kx – 9, then the value of k is`,
    options: [
      `–3`,
      `3`,
      `Both (a) and (b)`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) –3`
  },
  {
    question: `If the polynomial x4 + x3 + 8x2 + ax + b is divisible by x2 + 1, then the value of a + b is`,
    options: [
      `7`,
      `4`,
      `8`,
      `3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3`
  },
  {
    question: `f(x) = x4 – 2x3 + 3x2 – ax + b leaves remainder 5 and 19 on division by (x – 1) and (x + 1) respectively. If f(x) divided by (x – 3), the remainder is`,
    options: [
      `0`,
      `23`,
      `47`,
      `–47 67 Polynomials`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 23`
  },
  {
    question: `If the polynomial 3x 4 – 7x3 – 7x2 + 21x – 6 has one of its zero as 3− , then find the values of other zeroes.`,
    options: [
      `13, 2, 3`,
      `13, , 2 3 −`,
      `13, 2, 3−−`,
      `12, 2, 3−`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 13, , 2 3 −`
  },
  {
    question: `The value of p and q, such that x4 + px3 + 2x2 – 3x + q is divisible by (x2 – 1) are`,
    options: [
      `–3, –3`,
      `–3, 3`,
      `3, –3`,
      `4, 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –3, 3`
  },
  {
    question: `If f(x) = x + x 9 + x 25 + x 49 + x 81 is divided by (x3 – x), then the remainder is`,
    options: [
      `x 27`,
      `x2 + 5x + 1`,
      `5x2`,
      `5x`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) x 27`
  },
  {
    question: `If a and b are the zeroes of the polynomial P(x) = x2 + 3x + k such that a – b = 5, then the value of k is`,
    options: [
      `– 4`,
      `5`,
      `– 3`,
      `2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) – 4`
  },
  {
    question: `If a and b are the zeros of the quadratic polynomial P(x) = x2 + qx – p then the value of 11+αβ is`,
    options: [
      `p q`,
      `q p`,
      `p q −`,
      `q p −`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) q p`
  },
  {
    question: `The polynomial, f(x) = (x – 1)2 + (x – 2)2 + (x – 3)2 + (x – 4)2 has minimum value, when x = ...........`,
    options: [
      `40`,
      `20`,
      `10`,
      `2.5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20`
  },
  {
    question: `If x + y + z = 0 & x ≠ 0, y ≠ 0, z ≠ 0 then the value of 2 22xyz yz xz xy++ is?`,
    options: [
      `0`,
      `1`,
      `2`,
      `3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2`
  },
  {
    question: `When x100 – 2x51 + 1 is divided by x2 – 1, the remainder is r(x). The value of r(–2) + r(2) is:`,
    options: [
      `0`,
      `4`,
      `6`,
      `8`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6`
  },
  {
    question: `If the zeros of polynomial f(x) = x3 – 3x2 + m are in Arithmetic Progression, then the value of ‘m’ is`,
    options: [
      `3`,
      `2`,
      `0`,
      `–2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3`
  },
  {
    question: `When 2x2 + 3x + 1 is divided by x + 2 then quotient and remainder are :`,
    options: [
      `Q = 2x – 1, R = 3`,
      `Q = x + 1, R = 3`,
      `Q = 2x + 1, R = 3`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `The zeros of quadratic polynomial x2 + 7x + 10 will be:`,
    options: [
      `2 and – 5`,
      `– 2 and 5`,
      `– 2 and –5`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 and – 5`
  },
  {
    question: `Let a, b and c are the roots of the polynomial equation x3 – 597x – 5236 = 0 then the value of (a3 + b3 + c3) is`,
    options: [
      `597`,
      `15708`,
      `5236`,
      `10472`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10472`
  },
  {
    question: `If a and b are the zeros of the polynomial f(x) = x2 – 5x + k such that a – b = 1, then the value of k is`,
    options: [
      `6`,
      `2`,
      `3`,
      `0`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `If any polynomial f (x) is divided by (x 2 – 16) then remainder is (5x + 3). If it is divided by (x + 4) then the remainder will be:`,
    options: [
      `17`,
      `– 17`,
      `23`,
      `– 23 Competitive Corner 68 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) – 23 Competitive Corner 68 Class-X MATHEMATICS PW`
  },
  {
    question: `If x + 1 y = 1 and y + 1 z = 1, then what is the value of 1 1z x  ++ .`,
    options: [
      `0`,
      `1`,
      `2`,
      `3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `If 333pqr++ = 0 then the value of (p + q + r)3 is`,
    options: [
      `3pqr`,
      `9pqr`,
      `27pqr`,
      `0`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0`
  },
  {
    question: `If (x + k) is a common factor of (x2 + px + q) and (x2 + lx + m), then the value of k is:`,
    options: [
      `l + p`,
      `m – q`,
      `lp mq − −`,
      `mq lp − −`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) m – q`
  },
  {
    question: `If ax3 + bx + c is divisible by x2 + dx + 1, then:`,
    options: [
      `a 2 + b 2 = ac`,
      `a2 – c 2 = ab`,
      `a 2 – b 2 = ac`,
      `a 2 + c 2 = ab`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) a2 – c 2 = ab`
  },
  {
    question: `If 3, – 1, – 1 3 are zeros of cubic polynomial p(x), where p(x) is`,
    options: [
      `3x3 + 5x 2 – 11x – 3`,
      `3x3 – 5x 2 – 11x + 3`,
      `3x3 – 5x 2 – 11x – 3`,
      `3x3 + 5x 2 + 11x + 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3x3 – 5x 2 – 11x + 3`
  },
  {
    question: `If 3x2 − x3 + 5x − 2 is divided by x − 1 + x2, then the remainder is`,
    options: [
      `– 3`,
      `2`,
      `3`,
      `− 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) – 3`
  },
  {
    question: `If polynomials 3x3 + x2 – 4x + P and 2x3 + Px2 + 3x – 3 are divided by (x – 2), get the same remainder. What will be the value of P.`,
    options: [
      `+ 3`,
      `1 3`,
      `– 1 3`,
      `– 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 3`
  },
  {
    question: `1xy yx+= − , (x, y ≠ 0), then the value of x3 – y3 is:`,
    options: [
      `1`,
      `– 1`,
      `0`,
      `1 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) – 1`
  },
  {
    question: `If the zeroes of the polynomial 64x3 – 144x2 + 92x – 15 are in A.P., then the difference between the largest and the smallest zeroes of the polynomial is`,
    options: [
      `1`,
      `7 8`,
      `3 4`,
      `1 2 Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 2 Multiple Choice Questions`
  },
  {
    question: `Column-II gives value of x and y for pair of equations given in Column-I. Column-I Column-II P. x + y = 10, x – y = 4 (i) (3, 4) Q. 11 3,76 +=xy 11 523 −=xy (ii) (4, 5) R. 5x + 3y = 35, 2x + 4y = 28 (iii) 11,14 6   S. 15x + 4y = 61, 4x + 15y = 72 (iv) (7, 3)`,
    options: [
      `P-(iv), Q-(iii), R-(ii), S-(i)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `P-(iii), Q-(iv), R-(i), S-(ii)`,
      `P-(iii), Q-(i), R-(iv), S-(ii)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iv), Q-(iii), R-(ii), S-(i)`
  },
  {
    question: `The given pair of equations 6x – 3y + 10 = 0 2x – y + 9 = 0 Represents two lines which are:`,
    options: [
      `Intersecting at exactly one point.`,
      `Intersecting at exactly four points.`,
      `Coincident`,
      `Parallel`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Intersecting at exactly one point.`
  },
  {
    question: `If the lines represented by given pair of equations, 3x + 2ky = 2 2x + 5y + 1 = 0 are parallel, then the value of k is`,
    options: [
      `3 5`,
      `2 5`,
      `15 4`,
      `3 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 5`
  },
  {
    question: `If one equation of a pair of dependent linear equations is –5x + 7y – 2 = 0, then the second equation can be`,
    options: [
      `20x + 28y + 8 = 0`,
      `–10x – 14y + 4 = 0`,
      `–10x + 14y + 4 = 0`,
      `10x – 14y = –4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –10x – 14y + 4 = 0`
  },
  {
    question: `Two numbers are in the ratio 5 : 6. If 8 is subtracted from each of the numbers, the ratio becomes 4 : 5. Then, find the numbers:`,
    options: [
      `36, 44`,
      `42, 48`,
      `40, 48`,
      `44, 50`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40, 48`
  },
  {
    question: `Statement-I: If 5x + 6y = 21 and 6x + 5y = 23 then (x + y) is 4. Statement-II: For k = 12, kx + 6y = 27 and 6x + ky = 28 are inconsistent.`,
    options: [
      `Only I is true`,
      `Only II is true`,
      `Both I & II is true`,
      `Both I & II is false`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both I & II is true`
  },
  {
    question: `For which values of a and b, will the following pair of linear equations have infinitely many solutions? x + 2y = 1 (a – b)x + (a + b)y = a + b – 2`,
    options: [
      `a = 2 and b = 1`,
      `a = 4 and b = 3`,
      `a = –3 and b = 1`,
      `a = 3 and b = 1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) a = –3 and b = 1`
  },
  {
    question: `The father’s age is six times his son’s age. After four years, the age of the father will be four times his son’s age. Find the present ages, of the son and the father, in years. 98 Class-X MATHEMATICS PW`,
    options: [
      `8 and 32`,
      `5 and 30`,
      `6 and 36`,
      `3 and 24`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8 and 32`
  },
  {
    question: `Rakhi has only \` 1 and \` 2 coins with her. If the total number of coins that she has is 50 and the amount of money with her is \` 75, then the number of \` 1 and \` 2 coins is, respectively`,
    options: [
      `35 and 15`,
      `35 and 20`,
      `20 and 25`,
      `25 and 25`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 25 and 25`
  },
  {
    question: `In a competitive examination, one mark is awarded for each correct answer while 1 2 mark is deducted for every wrong answer. Priya answered 120 questions and got 90 marks. How many questions did she answer correctly?`,
    options: [
      `100`,
      `74`,
      `90`,
      `60`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 100`
  },
  {
    question: `A shopkeeper gives books on rent for reading. She takes a fixed charge for the first two days, and an additional charge for each day thereafter. Preeti paid \` 22 for a book kept for six days, while Ritu paid \` 16 for the book kept for four days, then the charge for each extra day is:`,
    options: [
      `\` 5`,
      `\` 8`,
      `\` 3`,
      `\` 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \` 3`
  },
  {
    question: `Statement-I : For k = 6, x + 2y = 5 and 3x + ky = 15 has a unique solution. Statement-II : yx2 + xy2 = 2xy; x, y ≠ 0 is a quadratic equation.`,
    options: [
      `Only I is true`,
      `Only II is true`,
      `Both I & II are true`,
      `Both I & II are false`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both I & II are false`
  },
  {
    question: `For what value of k will the equations x + 2y + 7 = 0, 2x + ky + 14 = 0 represents coincident lines?`,
    options: [
      `6`,
      `4`,
      `3`,
      `2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6`
  },
  {
    question: `If 2 is subtracted from the numerator and 1 is added to the denominator, a fraction becomes 1 2 but when 4 is added to the numerator and 3 is subtracted from the denominator, it becomes 3 2 , then find the fraction:`,
    options: [
      `12 11`,
      `8 11`,
      `7 11`,
      `13 13`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 13 13`
  },
  {
    question: `3 women and 4 girls can complete a piece of work in 6 days whereas the same work can be done by 5 women and 2 girls in 5 days. In how many days a women will complete that work?`,
    options: [
      `24 days`,
      `25 days`,
      `15 days`,
      `30 days`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 25 days`
  },
  {
    question: `Find the value of x, if xy ab+ = a + b and 22 xy ab + = 2.`,
    options: [
      `a2`,
      `b2`,
      `a2b2`,
      `ab`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) b2`
  },
  {
    question: `2 tables and 3 chairs together cost Rs. 2000 whereas 3 tables and 2 chairs together cost Rs. 2500. Find the total cost of 1 table and 5 chairs.`,
    options: [
      `\` 1700`,
      `\` 1500`,
      `\` 1300`,
      `\` 1450`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \` 1700`
  },
  {
    question: `Shyam has some cows and some hens in his shed. The total number of legs is 92 and total number of heads is 29. Find the number of cows in shed?`,
    options: [
      `15`,
      `14`,
      `17`,
      `19 99 Pair of Linear Equations in Two Variables Very Short Answer T ype Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 14`
  },
  {
    question: `Represent algebraically the situation faced by both Anu and Bindu.`,
    options: [
      `x + 25y = 4500, x +30y= 5200`,
      `25x + y = 4500, 30x + y = 5200`,
      `x – 25y = 4500, x – 30y = 5200`,
      `25x – y = 4500, 30x – y = 5200`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) x + 25y = 4500, x +30y= 5200`
  },
  {
    question: `The system of linear equations, represented by above situations has`,
    options: [
      `No solution`,
      `Unique solution`,
      `Infinitely many solutions`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Unique solution`
  },
  {
    question: `The cost of food per day is`,
    options: [
      `\`120`,
      `\`130`,
      `\`140`,
      `\`1300`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \`130`
  },
  {
    question: `The fixed charges per month for the hostel is`,
    options: [
      `\`1500`,
      `\`1200`,
      `\`1000`,
      `\`1300`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \`1000`
  },
  {
    question: `1st situation can be represented algebraically as`,
    options: [
      `3x – 5y = 74`,
      `2x + 5y = 74`,
      `2x – 3y = 46`,
      `2x + 3y = 46`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3x – 5y = 74`
  },
  {
    question: `2nd situation can be represented algebraically as`,
    options: [
      `5x + 3y = 74`,
      `5x – 3y = 74`,
      `3x + 5y = 74`,
      `3x – 5y = 74`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5x – 3y = 74`
  },
  {
    question: `Fare from Bengaluru to Malleswaram is`,
    options: [
      `\`6`,
      `\`8`,
      `\`10`,
      `\`2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \`8`
  },
  {
    question: `Fare from Bengaluru to Yeswanthpur is`,
    options: [
      `\`10`,
      `\`12`,
      `\`14`,
      `\`16`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \`14`
  },
  {
    question: `Kirti can row downstream 20 km in 2 hours, and upstream 4 km in 2 hours. Her speed of rowing in still water and the speed of the current is:`,
    options: [
      `4 km/hr and 2 km/hr`,
      `7 km/hr and 4 km/hr`,
      `6 km/hr and 4 km/hr`,
      `10 km/hr and 6 km/hr`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 km/hr and 2 km/hr`
  },
  {
    question: `Find the values of a and b for which the following system of linear equations has infinite number of solutions: 2x – 3y = 7 (a + b)x – (a + b – 3)y – (4a + b) = 0`,
    options: [
      `–3, –4`,
      `–5, –1`,
      `2, 3`,
      `5, 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –5, –1`
  },
  {
    question: `A man sold a chair and a table together for \`1520 thereby making a profit of 25% on the chair and 10% on table. By selling them together for \`1535, he would have made a profit of 10% on the chair and 25% on the table. Find the cost price of table.`,
    options: [
      `\`600`,
      `\`700`,
      `\`500`,
      `\`400`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \`700`
  },
  {
    question: `Solution of the following system of equations: 1 andxa yb xa ya a ca cb c ab c −− +−+= +=−− − is given by`,
    options: [
      `22 ,= =abxy ba`,
      `x = c, y = a`,
      `x = a, y = b`,
      `x = c, y = b`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) x = a, y = b`
  },
  {
    question: `Riya travels 24 km to her home by covering half of it by walking through road and half of it by rowing a boat through river. Riya takes 5 hours to complete the journey of 12 km with the stream and remaining by walking. It takes 7 hours to complete the journey against the stream and remaining by walking. If there were no current, the journey would take 25 3 hours; the rate of the stream is`,
    options: [
      `2.5 km/hr`,
      `4 km/hr`,
      `1.5 km/hr`,
      `3 km/hr`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.5 km/hr`
  },
  {
    question: `A part of salary of a salesman is fixed and the rest depends on the commission he gets on the sales. In one month he got an order of \`31500 and got total monthly salary of \`5575. In another month, he got an order of \`45000 and got the total salary as \`6250. If he gets the total salary of \`7750 in next month, then order of sales he got`,
    options: [
      `\`60,000`,
      `\`75,000`,
      `\`65,000`,
      `\`80,000`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \`65,000`
  },
  {
    question: `Find the solution of the following system of equations, ( )2 3 3 41 3 ,6 73 43 −− = ++xy yx yx ( )1 7 12 45= ++ xy`,
    options: [
      `x = 8, y = 2`,
      `x = 4, y = 6`,
      `x = 6, y = 4`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) x = 8, y = 2`
  },
  {
    question: `A three digit number abc is 459 more than the sum of its digits. What is the sum of the 2-digit number ab and one-digit number a?`,
    options: [
      `71`,
      `81`,
      `51`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `On the national highway two points P and Q are situated at a distance of 160 km apart. A car starts from P and another car starts from Q at the same time. If they go in the same direction, they meet in 8 hours and if they go in opposite direction they meet in 2 hours, then speed of car starting from Q is`,
    options: [
      `20 km/hr`,
      `30 km/hr`,
      `50 km/hr`,
      `55 km/hr`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20 km/hr`
  },
  {
    question: `Acids of 77% purity and 99% purity are mixed to prepare 28 litres of acid of 88% purity, then find the quantity of each solution.`,
    options: [
      `12 litre each`,
      `11 litre each`,
      `14 litre each`,
      `16 litre each 126 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 16 litre each 126 Class-X MATHEMATICS PW`
  },
  {
    question: `Two candles of equal length start burning at the same instant. One of the candles burn in 5 hrs and the other in 4 hrs. By the time one candle is 2 times the length of the other, the candles have already burnt for:`,
    options: [
      `12.2 hrs`,
      `15.3 hrs`,
      `13.9 hrs`,
      `13.3 hrs`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 13.9 hrs`
  },
  {
    question: `The solution of the equations ,+= + =mn nm abxy xy is given by`,
    options: [
      `2 2 22 ,+−= =−− nm mnxy am bn bm an`,
      `22 2 2 ,+−= =−− mn nmxy am bn bm an`,
      `22 22 ,−−= =−− mn mnxy am bn bm an`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `A test has 50 questions. A student was awarded 1 mark for a correct answer, 1 3− for a wrong answer and 1 6− for not attempting a question. If the net score of a student is 32, the number of questions answered wrongly by the student can not be less than:`,
    options: [
      `5`,
      `4`,
      `3`,
      `2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5`
  },
  {
    question: `At a certain fast food restaurant, Priya can buy 3 burgers, 7 shakes and one order of fries for \`120. At the same place, it would cost \`146.50 for four burgers, 10 shakes and one order of fries. How much would it cost for an ordinary meal of one burger, one shake and one order of fries.`,
    options: [
      `67`,
      `41`,
      `21`,
      `Cannot be determined`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Cannot be determined`
  },
  {
    question: `The number of non-negative integer solutions of the equations 6x + 4y + z = 200 and x + y + z = 100 is`,
    options: [
      `3`,
      `5`,
      `7`,
      `Infinite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5`
  },
  {
    question: `What is the solution of the pair of equation 76 32 −xy = 15 and 89 32 =xy ?`,
    options: [
      `(– 2, – 3)`,
      `(4, 3)`,
      `(2, 3)`,
      `(3, 4)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (4, 3)`
  },
  {
    question: `Find the value of x, y and z. (respectively). x – y + z = 6 x – 2y – 2z = 5 2x + y – 3z = 1`,
    options: [
      `3, –2, 1`,
      `–2, 3, 1`,
      `1, 3, –2`,
      `3, 1, –2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –2, 3, 1`
  },
  {
    question: `23 + xy = 2, 49 − xy = – 1 Find the value of x & y respectively.`,
    options: [
      `(2, 3)`,
      `(3, 2)`,
      `(4, 9)`,
      `(4, – 9)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (2, 3)`
  },
  {
    question: `Find the value of P in 3x – 2Py = 1, where x and y are the solutions of x + y = 7 and 2x + 3y = 18.`,
    options: [
      `– 1`,
      `1`,
      `– 2`,
      `2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `If (a, b) is the solution of the equations 3 12 23 2 1 35 6 −+ ++ + += =xy xy x y , then which of the following is true.`,
    options: [
      `3=a b`,
      `a + b = 4`,
      `ab = 1`,
      `a × b = 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) a + b = 4`
  },
  {
    question: `Solve the equation: 6(2 x–1) + 9(3y – 1) = 25 and 9(2 x) – 6(3y) = 70`,
    options: [
      `(x, y) = (– 1, 3)`,
      `(x, y) = (2, 2)`,
      `(x, y) = (1, – 3)`,
      `(x, y) = (3, – 1) 127 Pair of Linear Equations in Two Variables`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (x, y) = (3, – 1) 127 Pair of Linear Equations in Two Variables`
  },
  {
    question: `A pair of linear equations which has a unique solution x = 2, y = –3 is`,
    options: [
      `1, 2 3 5xy x y+= − − = −`,
      `2 5 11, 4 10 22xy x y+= − + = −`,
      `2 1, 3 2 0xy x y−= + =`,
      `4 14 0,5 13 0x y xy− − = −− =`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1, 2 3 5xy x y+= − − = −`
  },
  {
    question: `If x = a and y = b is the solution of the equations x – y = 2 and x + y = 4, then the value of a and b are receptively.`,
    options: [
      `3 and 5`,
      `5 and 3`,
      `3 and 1`,
      `–1 and –3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 and 3`
  },
  {
    question: `Aruna has only Re. 1 and Rs, 2 coins with her. If the total number of coins that she has is 50 and the amount of money with her is Rs. 75, then the number of Re. 1 and Rs. 2 coins are respectively.`,
    options: [
      `35 and 15`,
      `35 and 20`,
      `15 and 35`,
      `25 and 25`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 35 and 20`
  },
  {
    question: `The father’s age is six times his son’s age. Four years hence, the age of the father will be four times his son’s age. The percentage in years of the son and the father are respectively.`,
    options: [
      `4 and 24`,
      `5 and 30`,
      `6 and 36`,
      `3 and 24`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6 and 36`
  },
  {
    question: `The value of x which satisfies the equations px + qy = p – q . qx – py = p + q is`,
    options: [
      `–1`,
      `0`,
      `1`,
      `2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1`
  },
  {
    question: `For what value :4 6 1kx y += and 27x ky+= are inconsistent ?`,
    options: [
      `k = 2`,
      `k = 3`,
      `k = 4`,
      `k = –2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) k = 4`
  },
  {
    question: `If four angles of a cyclic quadrilaterals are ( 2 1) , ( 2 1) , ( 5)x xy ° °°+ −+ and ( 5)y − ° , then`,
    options: [
      `45 , 90xy= = `,
      `90 , 45xy= = `,
      `60 , 80xy= = `,
      `80 , 60xy= = `,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 45 , 90xy= = `
  },
  {
    question: `If the system of equations ( )3 1; 2 1xy k x+= − + ( )1 21k yk−= + is inconsistent then k is equal to`,
    options: [
      `1`,
      `–1`,
      `–2`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `The value of k for which the system of equations kx y− 2; 6 2 3xy= −= has a unique solution is/are`,
    options: [
      `2`,
      `1`,
      `0`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `The value of k for which x + 2y + 7 = 0 and 2x + ky + 14 = 0 represent coincident lines is`,
    options: [
      `3`,
      `4`,
      `–4`,
      `–3 ANSWER KEY Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) –3 ANSWER KEY Multiple Choice Questions`
  },
  {
    question: `Match the following. Column-I (A.P.) Column-II (Common Difference) P. 31 1 3, , , ,...2 222−− (i) –4 Q. 1.8, 2.0, 2.2, 2.4 (ii) 4 3 R. 1591 3, , , ,....333 3 (iii) 0.2 S. 0, –4, –8, –12 (iv) –1`,
    options: [
      `P-(i), Q-(iii), R-(ii), S-(iv)`,
      `P-(iii), Q-(ii), R-(iv), S-(i)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `P-(iv), Q-(iii), R-(ii), S-(i)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(i), Q-(iii), R-(ii), S-(iv)`
  },
  {
    question: `In an AP, if d = –4, n = 7 and an = 4, then find the value of a.`,
    options: [
      `13`,
      `8`,
      `20`,
      `28`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 13`
  },
  {
    question: `In an AP, if a = 3.5, d = 0, n = 101, then find the value of a n.`,
    options: [
      `36`,
      `3.5`,
      `73`,
      `104.5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.5`
  },
  {
    question: `The famous mathematician associated with finding the sum of the first 100 natural numbers is`,
    options: [
      `Pythagoras`,
      `Euclid`,
      `Gauss`,
      `Acrhimedes`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Euclid`
  },
  {
    question: `Find the 11 th term of an A.P 555, , 0, .........22−−`,
    options: [
      `–20`,
      `20`,
      `–15`,
      `30`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) –15`
  },
  {
    question: `In an A.P, if first two terms are –3 and 4 respectively, then find the 21 st term of the A.P.`,
    options: [
      `21`,
      `137`,
      `143`,
      `–143`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 143`
  },
  {
    question: `Find the 7 th term of an A.P, if the 2 nd term of A.P is 13 and the 5 th term is 25.`,
    options: [
      `30`,
      `33`,
      `37`,
      `46`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 37`
  },
  {
    question: `If the common difference of an A.P is 5, then find the value of a 18 – a 13.`,
    options: [
      `10`,
      `20`,
      `25`,
      `30`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10`
  },
  {
    question: `Find the middle most term (s) of the A.P. –11, –7, –3, ..., 49.`,
    options: [
      `14, 18`,
      `19, 23`,
      `17, 21`,
      `23, 25`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 23, 25`
  },
  {
    question: `Two A.P's have the same common difference. The first term of one of these is –1 and that of the other is – 8, then find the difference between their 4 th terms.`,
    options: [
      `–3`,
      `–8`,
      `7`,
      `–5`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) –3`
  },
  {
    question: `Find the 18th term of an A.P, if 7 times the 7 th term is equal to 11 times its 11 th term.`,
    options: [
      `3`,
      `15`,
      `18`,
      `0 223 Arithmetic Progressions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0 223 Arithmetic Progressions`
  },
  {
    question: `Find the value of n if the numbers n – 2, 4n – 1 and 5n + 2 are in AP.`,
    options: [
      `1`,
      `4`,
      `–4`,
      `–2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) –4`
  },
  {
    question: `Find the 30 th term of the A.P. 10,7, 4, …..`,
    options: [
      `3`,
      `77`,
      `–77`,
      `–96`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) –96`
  },
  {
    question: `Which term of the A.P. 3, 8, 13, 18, … is 78?`,
    options: [
      `8th`,
      `13th`,
      `10th`,
      `16th`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8th`
  },
  {
    question: `If a, b, c, d, e, f are in AP, then find the value of (e – c).`,
    options: [
      `2(c – a)`,
      `2(d – b)`,
      `2(f – d)`,
      `2(d – c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2(d – c)`
  },
  {
    question: `If a, b, c, d, e are in A.P., then find the value of a – 3b + 3c – d.`,
    options: [
      `a + b`,
      `a – b`,
      `0`,
      `none of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) a – b`
  },
  {
    question: `In an A.P if 10th term is 25 and 14 th term is 33, then determine the general term of an A.P.`,
    options: [
      `3n + 8`,
      `2n + 7`,
      `2n + 5`,
      `3n + 7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2n + 7`
  },
  {
    question: `Find the second term of A.P. if the first and third terms of A.P. are a 2 + 7 and 3a 2 + 4 respectively.`,
    options: [
      `a 2`,
      `23 2 a+`,
      `3a2 + 2`,
      `2 112 2a +`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 23 2 a+`
  },
  {
    question: `How many numbers between 50 and 500 are divisible by 7?`,
    options: [
      `58`,
      `63`,
      `64`,
      `76`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 58`
  },
  {
    question: `If pth and qth term of an A.P. are q and p respectively, then find the r th term of A.P.`,
    options: [
      `p + q`,
      `p – q + r`,
      `p + q + r`,
      `p + q – r`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) p – q + r`
  },
  {
    question: `The sum of first 16 terms of the A.P 10, 6, 2,... is`,
    options: [
      `–320`,
      `315`,
      `–352`,
      `–400`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 315`
  },
  {
    question: `Find the sum of first five multiples of 3.`,
    options: [
      `45`,
      `48`,
      `23`,
      `75`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 75`
  },
  {
    question: `In an A.P, if first term and third term are 5 and 15 respectively, then find the sum of first 16 terms of an AP.`,
    options: [
      `600`,
      `680`,
      `585`,
      `860`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 600`
  },
  {
    question: `Common difference of an AP, the sum of whose n terms is S n, is`,
    options: [
      `S n – 2S n – 1 + S n – 2`,
      `S n – 2S n – 1 – S n – 2`,
      `S n – S n + 2`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) S n – 2S n – 1 + S n – 2`
  },
  {
    question: `The sum of first n odd natural numbers is`,
    options: [
      `2 2 n`,
      `n 2`,
      `2 1 2 n +`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 1 2 n +`
  },
  {
    question: `The sum of first n natural numbers is`,
    options: [
      `n 2`,
      `( 1)( 1) 2 nn−+`,
      `( 1) 2 nn +`,
      `2 1 2 n +`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) ( 1) 2 nn +`
  },
  {
    question: `If S1, S2 and S3 denote the sum of first n1 n2 and n 3 terms respectively of an A.P., then 312 23 31 12 1 23 ( )( )( ) SSS n n nn nnnnn −+ −+ − =`,
    options: [
      `0`,
      `S 1 + S 2 × n 2`,
      `S 1S2S3`,
      `n 1n2n3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `If the sum of first n terms of an AP is (pn + qn 2), where p and q are real numbers, then the common difference of AP is`,
    options: [
      `p – 1`,
      `p + q`,
      `2p + 2q`,
      `2q`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2q`
  },
  {
    question: `Let Sn denote the sum of first ‘n’ terms of an A.P. If S2n = 3S n , then the ratio 3n n S S is equal to`,
    options: [
      `2`,
      `6`,
      `5`,
      `10 224 Class-X MATHEMATICS PW Very Short Answer T ype Questions`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `Find the number of apples in the 9 th basket.`,
    options: [
      `56`,
      `60`,
      `61`,
      `72`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 56`
  },
  {
    question: `Find the sum of apples in the first 13 baskets.`,
    options: [
      `709`,
      `804`,
      `603`,
      `611`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 804`
  },
  {
    question: `The amount paid by him in 20 th instalment is`,
    options: [
      `\`38,700`,
      `\`37,700`,
      `\`36,000`,
      `\`39,900`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \`38,700`
  },
  {
    question: `The amount paid by him upto 30 instalments is`,
    options: [
      `\`5,20,000`,
      `\`95,500`,
      `\`9,55,500`,
      `\`8,55,500`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \`95,500`
  },
  {
    question: `The total number of instalments he has to pay is`,
    options: [
      `40`,
      `59`,
      `39`,
      `45`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 59`
  },
  {
    question: `Find the ratio of the 1 st instalment to the 20 th instalment.`,
    options: [
      `1:49`,
      `10:29`,
      `10:39`,
      `39:10 226 Class-X MATHEMATICS PW ANSWER KEY Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10:39`
  },
  {
    question: `Find the ratio of m th and n th term of an A.P, if the ratio of sum of m and n terms of an AP is m 2 : n 2.`,
    options: [
      `(m – 2) : (n + 2)`,
      `(2m + 1) : (2n + 1)`,
      `(2m – 1) : (2n – 1)`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (m – 2) : (n + 2)`
  },
  {
    question: `Find the sum of all natural numbers not greater than 1000 which are divisible by 4 but not by 8.`,
    options: [
      `62500`,
      `62,200`,
      `65000`,
      `65600`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 62,200`
  },
  {
    question: `If a – 3d, a – d, a + d, a + 3d are continuous terms of an AP., then find the common difference of A.P.`,
    options: [
      `d`,
      `2d`,
      `2a`,
      `a – d`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2d`
  },
  {
    question: `If there are 5 arithmetic mean between p and q, then find the common difference.`,
    options: [
      `4 pq−`,
      `6 pq+`,
      `6 qp−`,
      `4 qp×`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6 qp−`
  },
  {
    question: `If Sn = nP + ( 1) ,2 nn Q− where Sn denotes the sum of the first n terms of an A.P., then common difference is`,
    options: [
      `Q`,
      `2P + 3Q`,
      `Q + 2P`,
      `2Q + P`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Q + 2P`
  },
  {
    question: `The first and last term of an AP is a and l respectively. If S is the sum of all the terms of the AP and common difference is given by 22 ,() la k la − −+ then k is`,
    options: [
      `4S`,
      `2S`,
      `3S`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4S`
  },
  {
    question: `The arithmetic mean between 14 and 18 is`,
    options: [
      `16`,
      `15`,
      `17`,
      `32`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 32`
  },
  {
    question: `If n A.M.’s are introduced between 3 and 17 such that the ratio of the last mean to the first mean is 3 : 1 then the value of n is:`,
    options: [
      `6`,
      `8`,
      `4`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6`
  },
  {
    question: `In an A.P, if sum of four consecutive numbers is 20 and the sum of their squares is 120, consecutive then find the four numbers of A.P.`,
    options: [
      `4, 6, 8, 10`,
      `2, 4, 6, 8`,
      `1, 3, 5, 7`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `Let Sn denote the sum of n terms of an A.P. whose first term is a. If the common difference d is given by d = S n – kS n–1 + S n–2. then k =`,
    options: [
      `1`,
      `2`,
      `3`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `The sum of all three digit natural numbers, which are divisible by 7, is`,
    options: [
      `70336`,
      `70784`,
      `64064`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `If the first, second and the last terms of an A.P are a, b, c respectively, then the sum is`,
    options: [
      `( )( 2 ) 2( ) a ba c b ba + +− −`,
      `( )( 2 ) 2( ) bc ab c ba + +− −`,
      `( )( 2 ) 2( ) a cb c a ba + +− −`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ( )( 2 ) 2( ) a ba c b ba + +− −`
  },
  {
    question: `If the p th term of an A.P is q and the q th term is p, then its (p + q) th term is`,
    options: [
      `p + q`,
      `p + q + 1`,
      `p + q – 1`,
      `0 232 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0 232 Class-X MATHEMATICS PW`
  },
  {
    question: `The pth term of an A.P. is q and the qth terms is p. find the r th term`,
    options: [
      `p + q + r`,
      `p + q – r`,
      `p + q + r`,
      `p – q – r`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) p + q + r`
  },
  {
    question: `If 9, a, b, –6 are in arithmetic progression then a + b is`,
    options: [
      `1`,
      `5`,
      `15`,
      `3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5`
  },
  {
    question: `If, 11 1 abc,, are in A.P., then ba ba bc bc /g14 /g16/g14/g14 /g16 equals`,
    options: [
      `1`,
      `2`,
      `bc ab − −`,
      `ab c`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `The tenth term from the end of the A.P. 4, 9, 14, …... 254 is`,
    options: [
      `214`,
      `209`,
      `208`,
      `204`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 208`
  },
  {
    question: `The sum of first n-positive integers is:`,
    options: [
      `()n2 1 2 +`,
      `() ()nn++12 2`,
      `nn() + 1 2`,
      `2n`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) nn() + 1 2`
  },
  {
    question: `If the 8th term of an arithmetic progression is 51 and 5th term is 33, then the sum of the first 10 terms of the arithmetic progression is`,
    options: [
      `312`,
      `320`,
      `345`,
      `360`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 345`
  },
  {
    question: `Find the sum of all the integers from 1 to 100 that are divisible by 2 or5.`,
    options: [
      `3000`,
      `3050`,
      `3600`,
      `3100`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3000`
  },
  {
    question: `In an Arithmetic Progression, the sum of first ‘n’ terms is 3 2 5 2 2nn + Then the 25 th term will be:`,
    options: [
      `75`,
      `74`,
      `76`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `Which term of the A.P. 27, 24, 21, ...... is zero?`,
    options: [
      `8th`,
      `5th`,
      `10th`,
      `11th`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8th`
  },
  {
    question: `The interior angles of a polygon are in an Arithmetic Progression and the common difference is 10. If the biggest exterior angle is 85°, then the number of sides of the polygon will be`,
    options: [
      `6`,
      `9`,
      `7`,
      `8`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8`
  },
  {
    question: `Following two statements speak about Arithmetic Progression: Statement`,
    options: [
      `: In an Arithmetic Progression series: 20 + 19 1 3 + 18 2 3 + ...... 25 terms is 300 Statement`,
      `: In an Arithmetic progression series: 20 + 19 1 3 + 18 2 3 + ...... 36 terms is 300 Pick the correct option from below: (a) Only statement A is true (b) Only statement B is true`,
      `Both the statements are true`,
      `Both the statements are false`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both the statements are true`
  },
  {
    question: `What is the sum of all natural numbers from 1 to 1000 that are divisible by 7?`,
    options: [
      `61061`,
      `71271`,
      `71071`,
      `73371`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 73371`
  },
  {
    question: `Find the common difference of an AP whose first terms is 1 and the sum of the first four terms is one third of the sum of the next four terms.`,
    options: [
      `2`,
      `4`,
      `1.5`,
      `–2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `If tn is the n th term of an A.P. then the value of t n+1 – tn–1 is`,
    options: [
      `2a`,
      `–2a`,
      `2d`,
      `–2d`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) –2d`
  },
  {
    question: `The angles of a pentagon are in arithmetic progression. The sum of the smallest and largest angle is`,
    options: [
      `172°`,
      `108°`,
      `180°`,
      `216° Competitive Corner 233 Arithmetic Progressions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 108°`
  },
  {
    question: `If x1, x2, x3, ......, x n are in A.P. then the value of 11 1 12 23 34xx xx xx++ + ...... + 1 1xxnn− is`,
    options: [
      `n xx n −1 1`,
      `n xx n − − 1 21`,
      `n xx n1`,
      `n xx n + 1 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) n xx n − − 1 21`
  },
  {
    question: `nth term of a list of numbers is given by an = (3 + 2n) . Sum of first 24 terms will be`,
    options: [
      `672`,
      `670`,
      `570`,
      `572`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 670`
  },
  {
    question: `If ‘m’ times the mth term of an A.P. is equal to the ‘n’ times of the n th terms of it, then what is the (m + n)th term of the A.P.?`,
    options: [
      `0`,
      `1`,
      `2`,
      `3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `If pth term of an A.P. is 1 q and q th term is 1 p then (pq)th term of this A.P. will be.`,
    options: [
      `1`,
      `0`,
      `pq pq+`,
      `pq pq −`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0`
  },
  {
    question: `The 7th term of an AP is 5 times the first term and its 9 th term exceeds twice the 4 th term by 1. The first term of the AP is ...`,
    options: [
      `151`,
      `–39`,
      `3`,
      `–124`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –39`
  },
  {
    question: `If the sum of the first m terms of an A.P. is n and sum of its first n terms is m, then the sum of its first (m + n) terms is`,
    options: [
      `–(m + n)`,
      `m + n`,
      `–m + n`,
      `m – n`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) m – n`
  },
  {
    question: `The 5th term of an arithmetic sequence is 5 and sum of the first 5 terms is 55. What is its first term?`,
    options: [
      `15`,
      `16`,
      `17`,
      `18`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 15`
  },
  {
    question: `Which term of A.P. 20, 19 1 4 18 1 2, ...... is first negative term?`,
    options: [
      `18th`,
      `15th`,
      `28th`,
      `27th`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 18th`
  },
  {
    question: `A circle with area A cm 2 is contained in the interior of a larger circle with area (A + B) cm 2 and the radius of the larger circle is 4 cm. If A, B, A + B are in arithmetic progression, then the diameter (in cm) of the smaller circle is`,
    options: [
      `3 2`,
      `43 3`,
      `83 3`,
      `23 ANSWER KEY Multiple Choice Questions`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 83 3`
  },
  {
    question: `Which of the following statement is false?`,
    options: [
      `All isosceles triangles are similar.`,
      `All equilateral triangles are similar.`,
      `All circles are similar.`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) All isosceles triangles are similar.`
  },
  {
    question: `O is the point of intersection of two equal chords AB and CD such that OB = OD, then triangles OAC and ODB are AD C B O45° A D BC O`,
    options: [
      `Scalene`,
      `Isosceles but not similar`,
      `Equilateral and similar`,
      `Isosceles and similar`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Isosceles but not similar`
  },
  {
    question: `In triangle PQR, if PQ = 6 cm, PR = 8 cm, QS = 3 cm, and PS is the bisector of angle QPR, what is the length of SR?`,
    options: [
      `2`,
      `4`,
      `6`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `If ABCD is parallelogram, P is a point on side BC and DP when produced meets AB produced at L, then select the correct option`,
    options: [
      `DP DC BL PL=`,
      `DP DC PL BL=`,
      `DP BL PL DC=`,
      `DP AB PL DC= 274 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) DP BL PL DC=`
  },
  {
    question: `In the figure given below DE || BC. If AD = x, DB = x – 2, AE = x + 2 and EC = x – 1, the value of x is: A D B C E C E A D B`,
    options: [
      `4`,
      `16`,
      `2`,
      `8`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2`
  },
  {
    question: `In the given figure, AM : MC = 3 : 4, BP : PM = 3 : 2 and BN = 12 cm. Find AN. A M CB N P`,
    options: [
      `10 cm`,
      `7 cm`,
      `14 cm`,
      `16 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 14 cm`
  },
  {
    question: `If ∆ABC and ∆DEF are similar such that 2AB = DE and BC = 8 cm, then EF =`,
    options: [
      `16 cm`,
      `12 cm`,
      `18 cm`,
      `14 cm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 14 cm`
  },
  {
    question: `In the given figure, AD = 6 cm, AE = 9 cm and EC = 4 cm, then the value of 2BD is A CB D E 9 cm 4 cm x° x° 6 cm`,
    options: [
      `9`,
      `18`,
      `27`,
      `36 Very Short Answer T ype Questions`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 9`
  },
  {
    question: `Which similarity criteria can be seen in this case, if ship and lighthouse are considered as straight lines?`,
    options: [
      `AA`,
      `SAS`,
      `SSS`,
      `ASA`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) AA`
  },
  {
    question: `If the distance of Ravi from the lighthouse is fifteen times the height of the ship and the distance between Ravi and ship is twice as much as the height of the ship, then the ratio of the heights of ship and lighthouse is`,
    options: [
      `15 : 2`,
      `1 : 15`,
      `2 : 15`,
      `15 : 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 : 15`
  },
  {
    question: `What is the height of the tower?`,
    options: [
      `20m`,
      `50m`,
      `100m`,
      `200m`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20m`
  },
  {
    question: `What will be the length of the shadow of the tower when Vijay’s house casts a shadow of 12 m?`,
    options: [
      `75m`,
      `50m`,
      `45m`,
      `60m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 50m`
  },
  {
    question: `What is the height of Ajay’s house?`,
    options: [
      `30m`,
      `40m`,
      `50m`,
      `20m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 40m`
  },
  {
    question: `When the tower casts a shadow of 40m, same time what will be the length of the shadow of Ajay’s house?`,
    options: [
      `16m`,
      `32m`,
      `20m`,
      `8m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20m`
  },
  {
    question: `When the tower casts a shadow of 40 m, same time what will be the length of the shadow of Vijay’s house?`,
    options: [
      `15m`,
      `32m`,
      `16m`,
      `8m 277 Triangles Quick Recall Fill in the Blanks`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 16m`
  },
  {
    question: `Sides of two similar triangles are in the ratio 4 : 9. Areas of these triangles are in the ratio`,
    options: [
      `2 : 3`,
      `4 : 9`,
      `81 : 16`,
      `16 : 81 Sol. (d) It is given that the sides of two similar triangles are in the ratio 4 :`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 : 3`
  },
  {
    question: `The areas of two similar triangles are 36 cm 2 and 144 cm 2 respectively, then the ratio of their corresponding medians is`,
    options: [
      `1 : 2`,
      `9 : 81`,
      `36 : 144`,
      `8 : 12`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 : 2`
  },
  {
    question: `DABC is an equilateral triangle with each side of length 2x. If AD⊥BC, then the value of AD is`,
    options: [
      `3`,
      `3 x`,
      `x`,
      `2x`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 x`
  },
  {
    question: `The area of a right angled isosceles triangle whose hypotenuse is equal to 14 m is`,
    options: [
      `100 m2`,
      `49 m2`,
      `44 m2`,
      `64 m2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 49 m2`
  },
  {
    question: `The areas of two similar triangles PQR and ABC are in the ratio 9 : 16. If BC = 8 cm, then the length of QR is`,
    options: [
      `4 cm`,
      `4.5 cm`,
      `3 cm`,
      `6 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 cm`
  },
  {
    question: `In the given figure, P and Q are points on the sides AB and AC respectively of a triangle ABC. PQ is parallel to BC and divides the triangle ABC into 2 parts, equal in area. The ratio of BP : AP = A P Q B C`,
    options: [
      `2 :1`,
      `( )2 1: 2−`,
      `2 1:1−`,
      `1: 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 1:1−`
  },
  {
    question: `A flag pole 25 m high casts a shadow 15 m long. Find the distance of the top of the pole from the far end of the shadow.`,
    options: [
      `25.67 cm`,
      `29.15 m`,
      `32 m`,
      `27.68 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 32 m`
  },
  {
    question: `The length of altitude of an equilateral triangle of side 16 cm is`,
    options: [
      `8 3 cm`,
      `2 3 cm`,
      `3 3 cm`,
      `4 3 cm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8 3 cm`
  },
  {
    question: `If E is a point on side CA of an equilateral DABC such that BE ⊥ CA, then AB2 + BC 2 + CA 2 =`,
    options: [
      `2BE2`,
      `3BE2`,
      `4BE2`,
      `24 3 BE`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 24 3 BE`
  },
  {
    question: `In an equilateral triangle ABC, if AD  BC, then`,
    options: [
      `2AB2 = 3AD 2`,
      `3AB2 = 4AD 2`,
      `4AB2 = 3AD 2`,
      `5AB2 = 4AD 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2AB2 = 3AD 2`
  },
  {
    question: `PQ2 = QR·QL`,
    options: [
      `Both (1) and (2)`,
      `Both (2) and (3)`,
      `Both (1) and (3)`,
      `All the three`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Both (2) and (3)`
  },
  {
    question: `A 5 m long ladder is placed leaning towards a vertical wall such that it reaches the wall at a point 4 m high. If the foot of the ladder is moved 1.6 m towards the wall, then the distance by which the top of the ladder would slide upwards on the wall is`,
    options: [
      `0.6 m`,
      `0.2 m`,
      `0.4 m`,
      `0.8 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.4 m`
  },
  {
    question: `Radhika wants to visit her friend's house who recently moved to a new house. The road map between Radhika's home and her friend's home is shown in the figure given below: 10.5 km 10.5 km Radhika’s house Friend’s house 2.5 km 2.5 km4.5 km 14.5 km 301 Triangles To reach the friend’s house, the shortest distance which Radhika has to travel, is`,
    options: [
      `30.95 km`,
      `32.5 km`,
      `28.5 km`,
      `35.35 km`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 35.35 km`
  },
  {
    question: `The area of the semi-circle drawn on the hypotenuse of a right angled triangle is equal to`,
    options: [
      `Sum of the areas of the semi-circles drawn on the other two sides of the triangle.`,
      `Difference of the areas of semi-circles drawn on the other two sides of the triangle.`,
      `Product of the areas of semi-circles drawn on other two sides of the triangle.`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Sum of the areas of the semi-circles drawn on the other two sides of the triangle.`
  },
  {
    question: `O is the point of intersection of the diagonals AC and BD of a trapezium ABCD with AB || DC. Through O, a line segment PQ is drawn parallel to AB meeting AD in P and BC in Q, then OP =`,
    options: [
      `OP = OQ`,
      `OP = 2OQ`,
      `OQ = 2OP`,
      `1 3OP OQ=`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 3OP OQ=`
  },
  {
    question: `Diagonal AC of a rectangle ABCD is produced to the point E such that AC : CE = 2 : 1, AB = 8 cm and BC = 6m. The length of DE is`,
    options: [
      `2 19 cm`,
      `15 cm`,
      `3 17 cm`,
      `13 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 15 cm`
  },
  {
    question: `The area of the shaded portion given that ABCD and APRQ are rectangles is A D B C 8 2 3 12 P X Y QR ZA D B C`,
    options: [
      `0.9 sq. units`,
      `1.8 sq. units`,
      `3.6 sq. units`,
      `2.7 sq. units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.8 sq. units`
  },
  {
    question: `ABC is a triangle having coordinates A(c, d), B(0, 0) and C(b, 0) and 'O' is the point of intersection of the medians then AB 2 + BC 2 + CA 2 is equal to?`,
    options: [
      `(OA2 + OB 2 + OC 2)`,
      `3(OA2 + OB 2 + OC 2)`,
      `5 (OA2 + OB2 + OC2)`,
      `7 (OA2 + OB 2 + OC 2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3(OA2 + OB 2 + OC 2)`
  },
  {
    question: `An infinite series of similar right triangles converges to point C. If AE = 16 and ED = 8. What is the sum of all the vertical segments (AE + BD + ....)? A EC DG I8 16 B F H E D G I C H F B A`,
    options: [
      `16`,
      `20`,
      `32`,
      `18`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 16`
  },
  {
    question: `In the figure AE : EB = 1 : 2 and BD : DC = 5 : 3. Then what will be the value of EG : GC? A 1 E 2 B5 D3 C G A E G B D C`,
    options: [
      `5 : 9`,
      `1 : 3`,
      `3 : 5`,
      `2 : 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 : 3`
  },
  {
    question: `In DABC, D is a point on side BC. If AC = 3 cm, AD = 3 cm, BD = 8 cm and CD = 1 cm, then AB is? A CDB`,
    options: [
      `5 cm`,
      `6 cm`,
      `7 cm`,
      `9 cm 302 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 cm`
  },
  {
    question: `In DABC, AD ⊥ BC, ∠A = 90°. D is the interior point on BC. AC = 15 cm and DB = 16 cm, then area of DABC is (in sq. cm) ( Andhra Pradesh 2020)`,
    options: [
      `120`,
      `150`,
      `180`,
      `100`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 120`
  },
  {
    question: `In a parallelogram ABCD, the midpoints of adjacent sides BC & CD are P and Q respectively, then the area of parallelogram ABCD : Area of DAPQ (Chhatisgarh 2020)`,
    options: [
      `8 : 3`,
      `3 : 8`,
      `5 : 7`,
      `7 : 5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 : 8`
  },
  {
    question: `In a right angled triangle the hypotenuse is to be 1 cm longer than the base and 2 cm longer than the altitude, then the perimeter of the triangle is:`,
    options: [
      `24 cm`,
      `20 cm`,
      `12 cm`,
      `10 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 cm`
  },
  {
    question: `The ratio of medians of two similar triangles is 3 : 4. Then the ratio of their areas will be (Delhi 2020)`,
    options: [
      `4 : 3`,
      `3 : 4`,
      `16 : 9`,
      `9 : 16`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 16 : 9`
  },
  {
    question: `In a DABC, AX bisects BC and AX is also the angle bisector of angle A. If AB = 12 cm. BX = 3 cm, then what is the area of DABC. (Andhra Pradesh 2020)`,
    options: [
      `9 cm2`,
      `22 cm`,
      `29 5 cm`,
      `29 15 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 29 5 cm`
  },
  {
    question: `In the figure, ABCD is a rectangle such that Area of DAOB = am2, Area of DAOD = bm2, Area of DCOD = cm2. Then the area of DBOC (in m2) (Jharkhand 2020) A C O D B`,
    options: [
      `a + b + c`,
      `a + b – c`,
      `b + c – a`,
      `a + c – b`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) b + c – a`
  },
  {
    question: `In the figure Seg. AM ⊥ Seg. BC Seg BN ⊥ Seg. SAC. If BC = 7 cm; AM = 14 3 cm, then BN = ? (Rajsthan 2020) A C N M B`,
    options: [
      `4 3 cm`,
      `5 3 cm`,
      `23 cm`,
      `4 cm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 3 cm`
  },
  {
    question: `ABC is a triangle in which ABC > 90° and AD⊥CB produce. Then (Bihar 2020) A CD B`,
    options: [
      `AB 2 = AC 2 + BC 2 + BC × BD`,
      `AB 2 = AC 2 + BC 2 + 2BC × BD`,
      `AC 2 = AB 2 + BC 2 + 2BC × BD`,
      `AC 2 = AB 2 + BC 2 + BC × BD`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) AC 2 = AB 2 + BC 2 + BC × BD`
  },
  {
    question: `In a DABC, ∠C = 90°. On the sides CA and CB two points P and Q are taken such that they divide CA and CB in the ratio 2 : 1 respectively. Then (AQ2 + BP 2) : AB 2 = _________.`,
    options: [
      `7 9`,
      `4 9`,
      `13 9`,
      `11 9`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7 9`
  },
  {
    question: `DABC is right angled at B. AD, CE are the two medians drawn from A and C respectively. If AD = 35 , 252 CE = . The value of AC will be (Karnatka 20219)`,
    options: [
      `13`,
      `5`,
      `12 5`,
      `12 Competitive Corner 303 Triangles Multiple Choice Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 12 Competitive Corner 303 Triangles Multiple Choice Questions`
  },
  {
    question: `ABC is a right angled triangle with ∠B = 90°, M is the midpoint of AC and BM = 117 cm. AB + BC – 30, then the area of the triangle is....`,
    options: [
      `108 cm2`,
      `248cm2`,
      `316cm2`,
      `156cm2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 316cm2`
  },
  {
    question: `P is a point in the interior of an equilateral triangle with side a units. If p1, p2 and p 3 are the distances of P from the three sides of the triangle, then P1 + P 2 + P 3`,
    options: [
      `equals 2 3 a units`,
      `equals 3 2 a units`,
      `is more than a units`,
      `cannot be determined unless the location of P is specified ANSWER KEY 304 Class-X MATHEMATICS PW School Level Quick Recall Assertion & Reason T ype Questions`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) cannot be determined unless the location of P is specified ANSWER KEY 304 Class-X MATHEMATICS PW School Level Quick Recall Assertion & Reason T ype Questions`
  },
  {
    question: `Column-II gives distance between pair of points given in Column-I. Column-I Column-II P. (3, 1), (6, 4) (i) 8 units Q. ( 3 1, 1), (0, 3 )+ (ii) 5 units R. (5, 6), (1, 3) (iii) 6 units S. (0, 0),( 3, 3)− (iv) 32 units`,
    options: [
      `P-(iv), Q-(iii), R-(ii), S-(i)`,
      `P-(iii), Q-(ii), R-(iv), S-(i)`,
      `P-(ii), Q-(iv), R-(i), S-(iii)`,
      `P-(iv), Q-(i), R-(ii), S-(iii)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P-(iv), Q-(iii), R-(ii), S-(i)`
  },
  {
    question: `If the distance between the points A(–1, x) and B(2, –2) is 5, then one of the values of x is:`,
    options: [
      `–4`,
      `2`,
      `–3`,
      `1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) –4`
  },
  {
    question: `PQRS is a rectangle whose three vertices are P(0, 3), Q(0, 0) and R(5, 0). The length of its diagonal is:`,
    options: [
      `2 units`,
      `6 18 units`,
      `34 units`,
      `4 units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 18 units`
  },
  {
    question: `If M ,43 a  is the mid-point of the line segment joining the points A(– 6, 5) and B(– 2, 3), then the value of a is:`,
    options: [
      `–3`,
      `–12`,
      `6`,
      `–6`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) –12`
  },
  {
    question: `One of the two points of trisection of the line segment joining the points P(7, – 2) and Q(1, – 5) which divides the line segment in the ratio 1:2 are:`,
    options: [
      `(5, –3)`,
      `(5, 3)`,
      `(4, 3)`,
      `(4, 2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (4, 3)`
  },
  {
    question: `The point on the X-axis which is equidistant from the points P(–2, 3) and Q(5, 4) is:`,
    options: [
      `(0, 4)`,
      `(2, 0)`,
      `(8, 0)`,
      `(–2, 0)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (8, 0)`
  },
  {
    question: `If three points (0, 0), (3, 3) and (3, λ) form an equilateral triangle, then λ equals`,
    options: [
      `1`,
      `–3`,
      `–2`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1`
  },
  {
    question: `Area of the circle with centre O(–1, –2) and passing through A(3, 4) is`,
    options: [
      `52π sq. units`,
      `52 sq. units`,
      `28π sq. units`,
      `36π sq. units`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 36π sq. units`
  },
  {
    question: `Find the area of the square whose one pair of opposite vertices are (2, –3) and (4, 5).`,
    options: [
      `26 sq. units`,
      `13 sq. units`,
      `34 sq. units`,
      `51 sq. units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 26 sq. units`
  },
  {
    question: `The points P(–1, –2), Q(1, 0), R(–1, 2), S(–3, 0) forms a quadrilateral of type:`,
    options: [
      `Square`,
      `Rectangle`,
      `Parallelogram`,
      `Kite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Kite`
  },
  {
    question: `The ratio in which the line segment joining the points A(–3, 10) and B(6, –8) internally is divided by O(–1, 6) is:`,
    options: [
      `2 : 1`,
      `1 : 5`,
      `2 : 7`,
      `2 : 5 340 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 : 7`
  },
  {
    question: `The coordinates of a point A, where AB is the diameter of circle whose centre is (2, – 3) and B is (1, 4) is:`,
    options: [
      `(3, –10)`,
      `(2, 3)`,
      `(–3, 10)`,
      `(–2, 10)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (–2, 10)`
  },
  {
    question: `A circle drawn with origin as the centre passes through the point 13 ,02   . From the given options, select the point which does not lie in the interior of the circle.`,
    options: [
      `3 ,14 − `,
      `72, 3  `,
      `3 ,02  `,
      `56, 2 −`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3 ,14 − `
  },
  {
    question: `The point which divides the line segment AB joining the points A(7, –6) and B(3, 4) in ratio 1 : 2 internally lies in the`,
    options: [
      `I quadrant`,
      `II quadrant`,
      `III quadrant`,
      `IV quadrant`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) IV quadrant`
  },
  {
    question: `If the points P(4, 3) and Q(x, 5) are on the circle with centre O(2, 3), then the value of x is`,
    options: [
      `–2`,
      `4`,
      `2`,
      `3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `A figure is shown below: 1–4 –3 –2 –1 1 2 2 O 3 3 –4 4 –3 –2 –1 4 Y Y′ XX′ S(1, 3) P(1, 1) R(3, 3) Q(3, 1) If we rotate the given figure about O at an angle of 180° in anti-clockwise direction, then the point of intersection of diagonals is`,
    options: [
      `(2, 2)`,
      `(–2, –1)`,
      `(–1, –2)`,
      `(–2, –2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (–2, –1)`
  },
  {
    question: `If the points P(6, 1), Q(8, 2), R(9, 4) and S(p, 3) are the vertices of a parallelogram, taken in order. Find the value of p.`,
    options: [
      `15`,
      `7`,
      `–4`,
      `6 Very Short Answer T ype Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7`
  },
  {
    question: `Find the co-ordinates of the point 'B' which divides the line segment AC in the ratio 1 : 2 internally.`,
    options: [
      `134, 3  `,
      `13 11,33  `,
      `10 13,33  `,
      `132, 2  `,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 134, 3  `
  },
  {
    question: `Find the distance AC.`,
    options: [
      `2 10 units`,
      `36 units`,
      `40 units`,
      `3 20 units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 36 units`
  },
  {
    question: `What is the distance between grocery store and food court?`,
    options: [
      `√137 cm`,
      `√129 cm`,
      `8√15 cm`,
      `16√3 cm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) √137 cm`
  },
  {
    question: `What is the distance of the school from the house?`,
    options: [
      `10 cm`,
      `15 cm`,
      `20 cm`,
      `25 cm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 15 cm`
  },
  {
    question: `If the grocery store and office lie on a line, what is the ratio of distance of house from grocery store to that from office?`,
    options: [
      `1 : 2`,
      `3 : 1`,
      `4 : 1`,
      `5 : 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 : 1`
  },
  {
    question: `What is the ratio of distances of house from school to food court.`,
    options: [
      `1 : 1`,
      `2 : 1`,
      `3 : 1`,
      `4 : 1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 : 1`
  },
  {
    question: `The area of a triangle with vertices P(3, 0), Q(7, 0) and R(8, 4) is:`,
    options: [
      `12 sq. units`,
      `28 sq. units`,
      `8 sq. units`,
      `4 sq. units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 12 sq. units`
  },
  {
    question: `In the given figure, the area of ΔPQR (in sq units) is: 1–2 Q P(1, 3) –1 1 2 2 3 3 4 5 –2 –1 4 Y Y′ XX′ 5 6`,
    options: [
      `12`,
      `8`,
      `7.5`,
      `2.5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8`
  },
  {
    question: `If P(k, 2k), Q(2k, 3k) and R(3, 1) are collinear, then one of the value of k is equal to:`,
    options: [
      `–2`,
      `1 2−`,
      `1 4`,
      `4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 2−`
  },
  {
    question: `If the points (a, 0), (0, b) and (1, 1) are collinear, then find the value of 11 ab+ .`,
    options: [
      `1`,
      `4`,
      `0`,
      `–1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0`
  },
  {
    question: `Find the value of x, if the area of the triangle formed by the points (x, 2x), (–2, 6) and (3, 1) is 5 sq units, then x equals to?`,
    options: [
      `2 3`,
      `3 5`,
      `4`,
      `6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `Find the area of the triangle formed by joining the mid-points of the sides of the triangle whose vertices are (0, –1), (2, 1) and (0, 3).`,
    options: [
      `1 2`,
      `3 4`,
      `1`,
      `4 357 Coordinate Geometry`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1`
  },
  {
    question: `Find the area of a triangle having vertices P(3, 2), Q(11, 8) and R(8, 12).`,
    options: [
      `25 sq. units`,
      `28 sq. units`,
      `36 sq. units`,
      `9 sq. units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25 sq. units`
  },
  {
    question: `If P(4, –6), Q(3, –2) and R(5, 2) are the vertices of ΔPQR, then a median of a triangle PQR divides it into _______ triangle of equal areas.`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4`
  },
  {
    question: `Find the area of the quadrilateral PQRS whose vertices are respectively P(1, 1), Q(7, –3), R(12, 2) and S(7, 21).`,
    options: [
      `144 sq. units`,
      `132 sq. units`,
      `121 sq. units`,
      `120 sq. units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 144 sq. units`
  },
  {
    question: `For what value of k are the points (k, 2 – 2k) (–k + 1, 2k) and (–4 – k, 6 – 2k) are collinear?`,
    options: [
      `k = 1 2 or k = –1`,
      `k = – 1 2 or k = 1`,
      `k = 2 3 or k = –2`,
      `k = – 2 3 or k = 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) k = – 2 3 or k = 2`
  },
  {
    question: `Co-ordinates of three vertices of a triangle are (4, y), (6, 9) and (x, 4). Find the values of x and y, if the centroid of the triangle is (3, 6).`,
    options: [
      `x = –1, y = 5`,
      `x = 1, y = 5`,
      `x = –1, y = 5`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) x = –1, y = 5`
  },
  {
    question: `The centroid of the triangle whose vertices are (3, –7), (–8, 6) and (5, 10) is:`,
    options: [
      `(2, 3)`,
      `(0, 3)`,
      `(1, 3)`,
      `(6, 4)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (6, 4)`
  },
  {
    question: `The third vertex of ΔPQR, with two vertices as P(–2, 3), Q(4, 5) and centroid G(1, 2) is:`,
    options: [
      `(1, –2)`,
      `(2, 4)`,
      `(3, 2)`,
      `(0, 1)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (1, –2)`
  },
  {
    question: `If the centroid of a triangle is (6, 6) and its orthocenter is (0, 0), then its circumcentre is:`,
    options: [
      `(2, 2)`,
      `(1, 1)`,
      `(6, 6)`,
      `(9, 9)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (9, 9)`
  },
  {
    question: `The circumcentre of the triangle, whose vertices are (0, 0), (3, 3) and (0, 2 3) is:`,
    options: [
      `(1, 3 )`,
      `( 3, 3)`,
      `(3 2, 2)`,
      `(2, 3)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ( 3, 3)`
  },
  {
    question: `If the coordinates of the mid-points of the sides of a triangle are (1, 1), (2, –3) and (3, 4), then its centroid is:`,
    options: [
      `22, 3  `,
      `2 ,23  `,
      `(3, 4)`,
      `(2, 2)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 ,23  `
  },
  {
    question: `If x – 2y + k = 0 is a median of the triangle whose vertices are at points P(–1, 3), Q(0, 4) and R(–5, 2), then find the value of k.`,
    options: [
      `2`,
      `3`,
      `1`,
      `8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3`
  },
  {
    question: `If the vertices of a triangle have integral coordinates, then triangle cannot be equilateral.`,
    options: [
      `True`,
      `False`,
      `Can't say`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) True`
  },
  {
    question: `Join two points A(2, 2) and B(4, 2) in a plane. Fixed the point A and rotate the line AB in anti-clockwise direction at an angle of 270°. Find the area formed by this figure.`,
    options: [
      `9.12 sq. units`,
      `9.5 sq. units`,
      `9.42 sq. units`,
      `9.45 sq. units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9.5 sq. units`
  },
  {
    question: `Find the area of the region formed by 4|x| + 3|y| = 12.`,
    options: [
      `10 sq units`,
      `20 sq units`,
      `24 sq units`,
      `28 sq units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 sq units`
  },
  {
    question: `A circle is inscribed in a square given below. Find the area enclosed between the square and the inscribed circle. 1–2 Q O P R Q S –1 1 2 2 3 3 4 5 –2 –1 4 Y Y′ XX′ 5 6`,
    options: [
      `0.82 sq units`,
      `1 sq units`,
      `0.86 sq units`,
      `1.8 sq units`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.8 sq units`
  },
  {
    question: `Find the coordinates of the centre of the circle passing through the points O(0, 0), P(–2, 1) and Q (–3, 2):`,
    options: [
      `(2, 8)`,
      `3 11,22  `,
      `(3, 2)`,
      `(–3, –11) 358 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (2, 8)`
  },
  {
    question: `M(3, 0) and N(3, 1) are the points of trisection of a line segment PQ. Then the length of PQ is:`,
    options: [
      `4 unit`,
      `3 units`,
      `5 units`,
      `7 units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 unit`
  },
  {
    question: `The coordinates of one end point of a diameter of a circle are (4, –1) and the coordinates of the centre of the circle are (1, –3). Find the coordinates of the other end of the diameter.`,
    options: [
      `(–5, –2)`,
      `(2, –5)`,
      `(5, 2)`,
      `(–2, –5)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (5, 2)`
  },
  {
    question: `If P(5, –1), Q(–3, –2) and R(–1, 8) are the vertices of triangle PQR, then the length of median through P is:`,
    options: [
      `65 units`,
      `13 5 units`,
      `5 13 units`,
      `52 units`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 13 units`
  },
  {
    question: `A straight line 3x + 2y = 6 intersects x-axis and y-axis at P and Q respectively, then distance between the circumcentre and orthocentre of ΔOPQ is:`,
    options: [
      `13 2 units`,
      `5 18 units`,
      `2 13 units`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 13 2 units`
  },
  {
    question: `Find the locus of a point M such that sum of its distances from the points P(0, 2) and Q(0, –2) is 6.`,
    options: [
      `9x2 + 5y 2 = 45`,
      `3x2 + 4y 2 = 40`,
      `x 2 + 3x 2 = 60`,
      `x + y = 1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 9x2 + 5y 2 = 45`
  },
  {
    question: `Find the value of M , such that three lines, 7x – 11y + 3 = 0, 4x + 3y – 9 = 0 and 13x + My – 48 = 0, passes through the same point.`,
    options: [
      `12`,
      `21`,
      `8`,
      `26`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21`
  },
  {
    question: `The image of the point (3, 8) under a reflection across the x-axis is:`,
    options: [
      `(2, 3)`,
      `(3, 8)`,
      `(3, –8)`,
      `(8, –3)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (3, 8)`
  },
  {
    question: `The ratio of in which 9x – 3y – 14 = 0 divides the join of (2, – 4) and (3, 7) is: (West bengal 2020)`,
    options: [
      `2 : 1`,
      `1 : 2`,
      `2 : 3`,
      `3 : 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 : 1`
  },
  {
    question: `Assertion: If the points A(8, 1), B(k, –4) and C(2, –5) are collinear, then k = 4. Reason: Three points A(x 1, y1), B(x2, y2) and C(x3, y3) are collinear, when AB + BC = AC or AC + CB = AB or BA + CA = BC. (Andhra Pradesh 2020)`,
    options: [
      `‘A’ is true but ‘R’ is false`,
      `‘A’ is false but ‘R’ is true`,
      `Both ‘A’ and ‘R’ are true but ‘R’ is not a correct explanation of ‘A’`,
      `Both ‘A’ and ‘R’ are true and ‘R’ is a correct explanation of ‘A’.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ‘A’ is false but ‘R’ is true`
  },
  {
    question: `The line segment joining the points (3, –4) and (1, 2) is trisected at the points A & B. If the co-ordinates of A & B are (a, –2) & 5 ,3 b  respectively. Find the values of a and b. (Chandigarh 2020)`,
    options: [
      `a = 0, b = 7 3`,
      `a = 7 3 , b = 0`,
      `a = 7, b = 3`,
      `a = 3, b = 7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) a = 7 3 , b = 0`
  },
  {
    question: `If the coordinate of two opposite vertices of square are (a, b) and (b, a) then the area of the square is: (Chhatisgarh 2020)`,
    options: [
      `(a + b) 2`,
      `2(b + a) 2`,
      `(a – b) 2`,
      `2(b – a) 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (a – b) 2`
  },
  {
    question: `If DABC is an equilateral triangle such that A(2, 2) and centroid of the triangle is (–2, 2) then find the length of its side. (Delhi 2020)`,
    options: [
      `4 units`,
      `6 units`,
      `43 units`,
      `9 units Competitive Corner 359 Coordinate Geometry`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 43 units`
  },
  {
    question: `AB is a line segment with A = (–2, 3) and B = (5, 5). It is reflected in the x-axis. Then, its image is reflected in the y-axis. What is the sum of the coordinates of the midpoint of the final image? (Haryana 2020)`,
    options: [
      `5`,
      `15 2`,
      `– 15 2`,
      `–5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) – 15 2`
  },
  {
    question: `Two vertices of a triangle are (3, 5) and (−4, −5). If the centroid of the triangle is (4, 3). Find the third vertex. (Jharkhand 2020)`,
    options: [
      `(13, 9)`,
      `(9, 13)`,
      `(13, −9)`,
      `(−9, −13)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (13, 9)`
  },
  {
    question: `The point (7, 3) divides the line segment joining the points (4, –3) and (8, 5) internally in ratio. (Madhya Pradesh 2020)`,
    options: [
      `2 : 3`,
      `7 : 4`,
      `3 : 2`,
      `3 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 : 1`
  },
  {
    question: `If point P(x, y) is equidistant from points Q(–2, 5) and R(6, –1) then find relation between x and y. (Maharashtra 2020)`,
    options: [
      `4x − 3y = 2`,
      `x − 3 y = 2`,
      `4x + 3y = −2`,
      `2x − 3 y = 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4x − 3y = 2`
  },
  {
    question: `If the distance between the points (–1, –2) and (2, x) is 5, then one of the values of x is: (Odisha 2020)`,
    options: [
      `3`,
      `– 2`,
      `6`,
      `– 6`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) – 6`
  },
  {
    question: `Find the value of xy if(1, 2) (4, y), (x, 6) and (3, 5) are vertices of a rhombus taken in order. (Punjab 2020)`,
    options: [
      `6`,
      `9`,
      `18`,
      `24`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 18`
  },
  {
    question: `Triangle formed by the vertices (2, –2), (–2, 1) and (5, 2) will be: (Rajasthan 2020)`,
    options: [
      `scalene triangle`,
      `equilateral triangle`,
      `isosceles triangle`,
      `right-angle isosceles triangle`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) right-angle isosceles triangle`
  },
  {
    question: `The distance between two points (4, 3) and (–2, 1) is: (Tamil nadu 2020)`,
    options: [
      `2 10 units`,
      `4 units`,
      `2 2 units`,
      `5 2 units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 10 units`
  },
  {
    question: `The co-ordinates of the vertices of a triangle are (3, 0), (0, 4) and (3, 4) respectively. The radius of the circle inscribed inside the triangle is ........... units. (Bihar 2020)`,
    options: [
      `1 2`,
      `2`,
      `1 2`,
      `1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1`
  },
  {
    question: `If the points (a, 2a), (3a, 3a) and (3, 1) are collinear then one of the value of ‘a’ is: (Andhra Pradesh 2019)`,
    options: [
      `2 3 −`,
      `1 3 −`,
      `1 2 −`,
      `2 3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 3 −`
  },
  {
    question: `If the vertices of a triangle are (1, 2), (4, –6) and (3, 5) then: (Bihar 2019)`,
    options: [
      `triangle is right angled`,
      `the area of triangle is 12.5 sq units`,
      `the points do not from a triangle`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) the area of triangle is 12.5 sq units`
  },
  {
    question: `For a triangle whose vertices are (8, 6), (8, –2) and (2, –2), the co-ordinate of the circumcentre will be: (Chhattisgarh 2019)`,
    options: [
      `(5, 2)`,
      `(2, 5)`,
      `(–5, 2)`,
      `(2, –5)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (5, 2)`
  },
  {
    question: `The coordinates of vertices A and B of a triangle ABC are (0, 0) and (36, 15), respectively. If the coordinates of C are integers, then what is the minimum area (in sq. units) that DABC can have? (Haryana 2019)`,
    options: [
      `1`,
      `3 2`,
      `2`,
      `5 2 360 Class-X MATHEMATICS PW`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 2`
  },
  {
    question: `The area of the triangle whose vertices are (0, 0), (a, 0) and (0, b) is: (Jharkhand 2019)`,
    options: [
      `ab sq. units`,
      `1 2 |ab| sq. units`,
      `a + b sq. units`,
      `a2 + b 2 sq. units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 2 |ab| sq. units`
  },
  {
    question: `A segment AB is divided at a point P such that 3 7 PB AB = , then the ratio of AP : PB is: (Jharkhand 2019)`,
    options: [
      `4 : 7`,
      `7 : 4`,
      `7 : 3`,
      `4 : 3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4 : 3`
  },
  {
    question: `If the area of the triangle formed by joining the points (0, a), (–a, 0) and (a, 0) is 16a cm 2, then the value of ‘a’ is: (Karnataka 2019)`,
    options: [
      `16 cm`,
      `8 cm`,
      `4 cm`,
      `2 cm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 16 cm`
  },
  {
    question: `If A(0, 7), B(–6, 0) and C(0, –4) are the vertices of DABC, then the distance from centroid of DABC to vertex ‘A’ is: (Karnataka 2019)`,
    options: [
      `40 units`,
      `32 units`,
      `68 units`,
      `60 units`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 40 units`
  },
  {
    question: `The area of the triangle with vertices (1, –1),(–4, 6) and (–3, –5) is: (Madhya Pradesh 2019)`,
    options: [
      `20 square unit`,
      `22 square unit`,
      `24 square unit`,
      `28 square unit`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 24 square unit`
  },
  {
    question: `Which of the following points are not on the X-axis? (Maharashtra 2019) P(0, 3), Q(1, 0), R(0, −1), S(−5, 0) and T(1, 2)`,
    options: [
      `Only P and R`,
      `Only Q and S`,
      `Only P, R and T`,
      `Only Q, S and T`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Only P, R and T`
  },
  {
    question: `Which of the following are the co-ordinates of the centre of the circle that passes through P(6, −6), Q(3, −7) and R(3, 3)? (Maharashtra 2019)`,
    options: [
      `(3, −2)`,
      `(2, −3)`,
      `(0, 0)`,
      `(2, −2)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (3, −2)`
  },
  {
    question: `In what ratio does the line 2x + y – 4 =0 divides the line segment joining (2, –2) and (3, 7)? (Odisha 2019)`,
    options: [
      `9 : 2 internally`,
      `9 : 2 externally`,
      `2 : 9 externally`,
      `2 : 9 internally`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 : 9 internally`
  },
  {
    question: `If a point (a, b) is equidistant from points (x + y, y – x) and (x – y, x + y) then which of the following is true? (Punjab 2019)`,
    options: [
      `ay = bx`,
      `ax = by`,
      `a + b = x + y`,
      `a2y = b 2x`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ay = bx`
  },
  {
    question: `Quadrilateral formed by the vertices (1, 4), (–5, 4), (–5, –3) and (1, –3) will be: (Rajasthan 2019)`,
    options: [
      `Square`,
      `Rectangle`,
      `Rhombus`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Rectangle`
  },
  {
    question: `The area of the triangle formed by the points (–2, 0), (0, –2) and (2, 0) is: (Tamilnadu 2019)`,
    options: [
      `0 sq. units`,
      `4 sq. units`,
      `2 sq. units`,
      `– 4 sq. units`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 sq. units`
  },
  {
    question: `The graph of the line x – y = 0 passes through the point. (Tamilnadu 2019)`,
    options: [
      `(2, 3)`,
      `(3, 4)`,
      `(5, 6)`,
      `(0, 0)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (0, 0)`
  },
  {
    question: `The point on the y-axis, which is equidistant from points A(6, 5) and B(–4, 3) is: (Uttar Pradesh 2019)`,
    options: [
      `(9, 0)`,
      `(0, 9)`,
      `(0, 4)`,
      `(0, 3)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (0, 9)`
  },
  {
    question: `The equation of the base of an equilateral triangle is x + y – 2 = 0 . If one its vertex is (2, –1) then area of triangle is: (Uttar Pradesh 2019)`,
    options: [
      `1 23 sq. unit`,
      `3 12 sq. unit`,
      `2 3 sq. unit`,
      `33 4 sq. unit`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 23 sq. unit`
  },
  {
    question: `A circle passes through the vertices of a triangle ABC. If the vertices are A(–2, 5), B(–2, –3), C(2, –3), then the centre of the circle is: [NTSE 2019]`,
    options: [
      `(0, 0)`,
      `(0, 1)`,
      `(–2, 1)`,
      `(0, –3)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (0, 1)`
  },
  {
    question: `How many points (x, y) with integral co – ordinates are there whose distance from (1, 2) is two units? [NTSE 2018]`,
    options: [
      `one`,
      `two`,
      `three`,
      `four`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) four`
  },
  {
    question: `Let ABC be an equilateral triangle. If the co- ordinates of A are (1, 2) and co-ordinates of B are (2, –1) then: [NTSE 2017]`,
    options: [
      `C cannot lie in the first quadrant`,
      `C cannot lie in the fourth quadrant`,
      `C is the origin`,
      `C cannot lie in the third quadrant 361 Coordinate Geometry`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) C cannot lie in the third quadrant 361 Coordinate Geometry`
  },
  {
    question: `The centre of the circle passing through the points (6, –6), (3, –7) and (3, 3) is: [NTSE 2016]`,
    options: [
      `(3, 2)`,
      `(–3, –2)`,
      `(3, –2)`,
      `(–3, 2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (3, –2)`
  },
  {
    question: `If the line segment joining (2, 3) and (–1, 2) is divided internally in the ratio 3 : 4 by the graph of the equation x + 2y = k, the value of k is: [NTSE 2016]`,
    options: [
      `5 7`,
      `31 7`,
      `36 7`,
      `41 7`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 41 7`
  },
  {
    question: `(5, –10), (–15, 15) and (5, 5) are the coordinates of vertices A, B and C respectively of DABC and P is a point on median AD such that AP : PD = 2 : 3. Ratio of the areas of the triangles PBC and ABC is: [NTSE 2015]`,
    options: [
      `2 : 3`,
      `3 : 4`,
      `3 : 5`,
      `4 : 5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 : 5`
  },
  {
    question: `P is a point on the graph of y = 5x + 3. The coordinates of a point Q are (3, –2). If M is the mid point of PQ, then M must lie on the line represented by: [NTSE 2015]`,
    options: [
      `y = 5x + 1`,
      `y = 5x –7`,
      `57 22yx= −`,
      `51 22yx= + Multiple Choice Questions`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) y = 5x –7`
  }
];
