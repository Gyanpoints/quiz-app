// JEE/CBSE Maths – Binomial Theorem
// 119 MCQs

const QUESTIONS = [
  {
    question: `Ifthe coefficients of second, third and fourth terms in the expansion of (1 + x)^{2}” are in AP, then`,
    options: [
      `\$2n^{2}+9n+7=0\$`,
      `\$2n^{2}-9n+7=0\$`,
      `\$2n^{2}-9n-7=0\$`,
      `None ofthese`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$2n^{2}-9n+7=0\$`
  },
  {
    question: `If |x| <5, then the coefficient of x” in the expansion of ae is`,
    options: [
      `r2"`,
      `(2r - 1)2"`,
      `2274`,
      `(2r +12"`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (2r +12"`
  },
  {
    question: `The coefficient of t^{2}* in the expansion of (1 + t^{2})!2(1 + t!7)(1 + t^{2}4) is`,
    options: [
      `@C,+2`,
      `*C;`,
      `C5`,
      `"Cc,`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) @C,+2`
  },
  {
    question: `The coefficient of x” in the expansion of oe is`,
    options: [
      `\$n^{2}+2n4+1\$`,
      `\$2n^{2}+n+1\$`,
      `\$2n^{2}4+2n4+1\$`,
      `\$n^{2}+2n+2\$`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \$2n^{2}4+2n4+1\$`
  },
  {
    question: `The coefficient of x° in the expansion of (1 + x^{2})5\$(1+x)^{4}\$, is`,
    options: [
      `30`,
      `60`,
      `40`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60`
  },
  {
    question: `The coefficient of x°° in the expression \$(1+x)^{1}\$°° + 2 x\$(1+x)^{999}\$ + 3 x2\$(1+x)^{998}\$ + ++ + 1001 x19 is`,
    options: [
      `1000¢,`,
      `2¢,`,
      `102¢,`,
      `190¢,`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 102¢,`
  },
  {
    question: `If(L +x)" = Cot Cx + Cox^{2}+..+C,x”, then the value of Yocrcsen L(r + s)(C, + Cs) is`,
    options: [
      `\$n^{2}.2"\$`,
      `n.2”`,
      `\$n^{2},.22"\$`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \$n^{2}.2"\$`
  },
  {
    question: `Coefficient of x^{2}° in the polynomial (x - 1)(x - 2) ... (x - 20)is equal to`,
    options: [
      `210`,
      `-210`,
      `20!`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) -210`
  },
  {
    question: `The sum of the last eight coefficient in the expansion of \$(1+x)^{1}\$° is`,
    options: [
      `216`,
      `235`,
      `214`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 214`
  },
  {
    question: `The coefficient of y in the expansion of (y^{2} + c/y)5, is Page|2`,
    options: [
      `29¢`,
      `10c`,
      `\$10c^{2}\$`,
      `\$20 c^{2}\$`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \$10c^{2}\$`
  },
  {
    question: `The value of (0.99)+5 is`,
    options: [
      `0.8432`,
      `0.8601`,
      `0.8502`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.8601`
  },
  {
    question: `. . 10 112, The constant term in the expansion of (1 + x) (1 + 2) is`,
    options: [
      `Cio`,
      `0`,
      `220`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cio`
  },
  {
    question: `In the expansion of (8 - 3) ,n € N, if the sum of the coefficients of x° and x^{2}° is 0, then n =`,
    options: [
      `25`,
      `20`,
      `15`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15`
  },
  {
    question: `Inthe expansion of (1+ x + x^{2} + x3)°, then coefficient of x** is`,
    options: [
      `130`,
      `120`,
      `128`,
      `125 v7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 120`
  },
  {
    question: `Ifa, is the coefficient of x* in the expansion of (1 + x + x^{2})” for k = 0, 1,2, .., 2n then`,
    options: [
      `-ao`,
      `3”`,
      `n-3ntt`,
      `n-3”`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) n-3”`
  },
  {
    question: `The coefficient of x” in the polynomial (x + "Cc)(x + 3"C,)(x + 5 "C) ..[x + (2n+1)"C,]`,
    options: [
      `n.2”`,
      `n.2"*1`,
      `@+1)2”`,
      `n.2" +1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) @+1)2”`
  },
  {
    question: `\$Coefficient of x in the expansion of (x^{2} + ) is\$`,
    options: [
      `\$9a^{2}\$`,
      `\$10a^{2}\$`,
      `\$10a^{2}\$`,
      `10a`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$10a^{2}\$`
  },
  {
    question: `IfP(n):2+4+6+--+(2n),n € N, then P(K) = k(k +1) + 2implies P(k +1) =(kt1)(k+2)+2 is true for all k € N. So, statement P(n) = n(n + 1) + 2 is true for`,
    options: [
      `\$n^{2}\$>1`,
      `\$n=2\$`,
      `\$n=3\$`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `The number of terms in the expansion of (1 + 2 x + x”)^{2}°, when expanded in descending powers of x, is`,
    options: [
      `20`,
      `21`,
      `40`,
      `41`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21`
  },
  {
    question: `If "Co, "Cy, "C2 .. "Cy denote the coefficient of the binomial expansion (1 + x)”, then the value of C1 + ^{\$1}C_{\$2} + ^{\$1}C_{\$2}+. wis`,
    options: [
      `\$n^{2}\$"-^{2}`,
      `\$n^{2}\$"-1`,
      `(n+ 1)2"`,
      `(n+2)2"1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \$n^{2}\$"-^{2}`
  },
  {
    question: `The value of x in the expansion [x + x!°810*]S, if the third term in the expansion is 1000000, is`,
    options: [
      `10`,
      `11`,
      `12`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10`
  },
  {
    question: `If Cys + 2(18Cy¢) + ^{\$1}C_{\$2}g +1 = C3, then nis equal to`,
    options: [
      `19`,
      `20`,
      `18`,
      `24`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20`
  },
  {
    question: `49" + 16n - 1is divisible by`,
    options: [
      `3`,
      `19`,
      `64`,
      `29`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 64`
  },
  {
    question: `In the expansion of (1 + x)°°, the sum of the coefficients of odd powers of x is`,
    options: [
      `0`,
      `24°`,
      `250`,
      `257`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 24°`
  },
  {
    question: `If(1 +x +x^{2}" = Co + Cyx + Cpx^{2} ++, then the value of CoC, - C,C2 + C^{\$1}C_{\$2} - +, is`,
    options: [
      `3"`,
      `(-1)"`,
      `2"`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `\$a 6-2; , x2 ay^{2} The coefficient of x° a~^{2} in the expansion of (e = ’) ,is\$`,
    options: [
      `°C,`,
      `- C5`,
      `0`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0`
  },
  {
    question: `Ifa, is the coefficient of x"~+ in (1+ x)" + (14+x)"*1+..4(1 + x)"** (n<r--1<n+t+k), then retk+1(-1)"a, is equal to`,
    options: [
      `O`,
      `nt+k+1`,
      `(n+k+D!`,
      `™k+1¢,`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) O`
  },
  {
    question: `The first 3 terms in the expansion of (1 + ax)” (n # 0) are 1, 6x, and 16x^{2}. Then, the value of a andn are respectively`,
    options: [
      `2and9`,
      `3and 2`,
      `Fand9`,
      `\$= and 6\$`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Fand9`
  },
  {
    question: `\$If the binomial expansion of (a + b x)~^{2} is ; -3x+--,then (a,b) =\$`,
    options: [
      `(2,12)`,
      `(2,8)`,
      `(-2,-12)`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (2,12)`
  },
  {
    question: `If the sum of the coefficients in the expansion of (a x” - 2x + 1)%5 is equal to the sum of the coefficient in the expansion of (x - a y)*5, thena =`,
    options: [
      `O`,
      `1`,
      `Any real number`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `tf the ninth term in the expansion of {aloes V2E7 4. 3-1/8083(5" 44) "is equal to 180 and x > 1, then x equals`,
    options: [
      `logy) 15`,
      `logs 15`,
      `log, 15`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) logs 15`
  },
  {
    question: `The coefficient of x5^{2} in the following expansion Y}02, 1°°C,(% - 3)100-™ - 2 is`,
    options: [
      `Cy,`,
      `1°°Cs3`,
      `- Css`,
      `\$= °C 00\$`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) - Css`
  },
  {
    question: `If (1 + x)^{2}" = ag +a, x +2 x7 +--+ Gy_X2”, then (ag - Az + Ag - Ag +++» - Agn)^{2} + (4 - ag + As - Ay + +++ + Agn-1)^{2} is equal to`,
    options: [
      `2”`,
      `4”`,
      `0`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4”`
  },
  {
    question: `The coefficient of a5b®c’ in the expansion of (be + ca + ab)^{2} is`,
    options: [
      `100`,
      `120`,
      `720`,
      `1260`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1260`
  },
  {
    question: `\$Ifnis odd, then Ci - C^{2} + C2 - C3+..+(-1)"CZ is equal to\$`,
    options: [
      `0`,
      `1 nt`,
      `-`,
      `\$pny^{2} (3)!\$`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `If (1 - x +x7)" = dp + a,x +...dg_X2” then the value of dg + az + a4 +..+A2n is 1 1 37-1 3741`,
    options: [
      `\$3"™+=\$`,
      `\$3"-=\$`,
      `---`,
      `-- ) 3" + z ) z ) Z ) Z`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) -- ) 3" + z ) z ) Z ) Z`
  },
  {
    question: `The value of (0.99)!5 is`,
    options: [
      `0.8432`,
      `0.8601`,
      `0.8502`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.8601`
  },
  {
    question: `\$as 7 If (1 + 2xv-+x2)5 = Y a,x*,then Y = a is equal to k=0 k=O\$`,
    options: [
      `128`,
      `156`,
      `512`,
      `1024 n`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 512`
  },
  {
    question: `[fn is even, then the middle term in the expansion of (2 + 2) is 924x°, then n is equal to`,
    options: [
      `10`,
      `12`,
      `14`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 12`
  },
  {
    question: `The coefficient of x5 in the expansion of (1 + x7)°(1+x)* is Page|9`,
    options: [
      `30`,
      `60`,
      `40`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60`
  },
  {
    question: `the coefficient of x3 in (VF + 3). is`,
    options: [
      `0`,
      `120`,
      `420`,
      `540`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 540`
  },
  {
    question: `If p and q be positive, then the coefficients of x^{2} and x4 in the expansion of (1 + x)^{2}*4 will be`,
    options: [
      `Equal`,
      `Equal in magnitude but opposite in sign`,
      `Reciprocal to each other`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Equal`
  },
  {
    question: `If for positive integers r > 1,n > 2, the coefficient of the (3r)th and (r + 2)th powers of x in the expansion of (1 + x)^{2}” are equal, then`,
    options: [
      `\$n=2r\$`,
      `\$n= 3r\$`,
      `\$n=2rt+1\$`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \$n=2rt+1\$`
  },
  {
    question: `The range of values of the term independent of x in the expansion of (x sins a+ cota ,a € [-1,1], is 10¢, 710 10¢, 7710 10¢, 22 C, 2^{2}`,
    options: [
      `\$-= S|\$`,
      `\$= S|\$`,
      `[1,2]`,
      `(1,2)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \$-= S|\$`
  },
  {
    question: `If the coefficient of rth and (r + 1)th terms in the expansion of (3 + 7x)^{2}° are equal, then r equals`,
    options: [
      `15`,
      `21`,
      `14`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21`
  },
  {
    question: `[f the third term in the expansion [xt xloeiox]° is 106, then x(> 1) may be`,
    options: [
      `1`,
      `10`,
      `1075/2`,
      `\$10^{2}\$`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10`
  },
  {
    question: `In the expansion of (1 + x)°°, the sum of the coefficient of add power of x is`,
    options: [
      `Zero`,
      `249`,
      `25°`,
      `252`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 249`
  },
  {
    question: `If the coefficients of rt” and (r + 1)‘ terms in the expansion of (3 + 7x)^{2} are equal, then r =`,
    options: [
      `15`,
      `21`,
      `14`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 21`
  },
  {
    question: `In the expansion of (1 + x)^{2}"(n € NJ, the coefficients of (p + 1)” and (p + 3)*” terms are equal, then Page|10`,
    options: [
      `\$p=n-2\$`,
      `\$p=n-1\$`,
      `\$p=nt1\$`,
      `\$p=2n-2\$`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$p=n-1\$`
  },
  {
    question: `If Co, Cy, C2, .., C, denote the binomial coefficients in the expansion of (1 + x)", then the value of Vro(r + DC, is`,
    options: [
      `\$n^{2}\$"`,
      `(n +.1)2""1`,
      `(n+2)2"-1`,
      `(n+ 2)2"-2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (n+2)2"-1`
  },
  {
    question: `If the coefficient of (r + 1)'” term in the expansion of (1 + x)^{2}” be equal to that of (r + 3)*" term, then`,
    options: [
      `\$n-r+1=0\$`,
      `\$n-r-1=0\$`,
      `\$ntr+1=0\$`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$n-r-1=0\$`
  },
  {
    question: `7° +97 is divided by`,
    options: [
      `128`,
      `24`,
      `64`,
      `72`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 64`
  },
  {
    question: `2k § ‘ 1yr-3 If x^{2}* occurs in the expansion of (x + 3) , then`,
    options: [
      `n- 2k is a multiple of 2`,
      `n - 2k is a multiple of 3`,
      `\$k=0\$`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) n - 2k is a multiple of 3`
  },
  {
    question: `The number of terms with integral coefficients in the expansion of (773 + 5¥2x)°, is`,
    options: [
      `100`,
      `50`,
      `101`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 101`
  },
  {
    question: `The coefficient of x^{2}y4z5 in the expansion of (xy + yz + xz)° is`,
    options: [
      `70`,
      `60`,
      `50`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60`
  },
  {
    question: `29°C, +2+ °C, + 2°C, - 22Cy9 is equal to`,
    options: [
      `0`,
      `1242`,
      `7315`,
      `6345`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0`
  },
  {
    question: `The approximate value of (7.995)^{2}/3 correct to four decimal places is`,
    options: [
      `1.9995`,
      `1.9996`,
      `1.9990`,
      `1.9991`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.9996`
  },
  {
    question: `\$1)° In the expansion of (« = =) , the coefficient of x° is x\$`,
    options: [
      `20`,
      `-20`,
      `30`,
      `-30`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) -20`
  },
  {
    question: `- - ail^{2} pula^{2} Ifthe (r + 1)th term in the expansion of (& + 2) has equal exponents of both a and b, then value of r is`,
    options: [
      `8`,
      `9`,
      `10`,
      `11`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9`
  },
  {
    question: `The term independent of x in the expansion of (1 + x)"(1 + 1/x)”, is`,
    options: [
      `C2 +^{\$1}C_{\$2}+3-C2+--+(n+DG^{2}`,
      `\$(Co + Cy + + Cy)^{2}\$`,
      `C+ C2 +--+ C2`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) C+ C2 +--+ C2`
  },
  {
    question: `729 + 6(2)(243) + 15(4)(81) +20(8)(27) + 15(16)(9) | +6(32)3 + 64 1. Ifx = 14) #616) FGA) F256 HA) + 616) + 4064) 4 256" HM VE isequal to`,
    options: [
      `0.2`,
      `4.8`,
      `1.02`,
      `5.2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4.8`
  },
  {
    question: `If the coefficients of pth, (p + 1)th and (p + 2)th terms in the expansion of (1 + x)” are in AP, then`,
    options: [
      `\$n^{2} - 2np + 4p^{2} =0\$`,
      `\$n^{2} -n(4p +1) + 4p^{2}-2=0\$`,
      `\$n^{2} -n(4p + 1) + 4p^{2} =0\$`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$n^{2} -n(4p +1) + 4p^{2}-2=0\$`
  },
  {
    question: `. . | 2 120 The term independent of x in the expansion of (1 - x)’ (« + +) ,is`,
    options: [
      `"Cs`,
      `°c,`,
      `MC,`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) "Cs`
  },
  {
    question: `If the sum of the coefficient in the expansion of (x - 2y + 3z)" is 128, then the greatest coefficient in the expansion of (1 + x)" is`,
    options: [
      `35`,
      `20`,
      `10`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 35`
  },
  {
    question: `The sum of the series a3" 7 ast . Cro(-1)" "C, ¢ tiptatat.tm terms) is 2mm - 4`,
    options: [
      `---___ ) ama - Ty mn`,
      `2 1 2r-1 am 4`,
      `-- 2°+1`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ---___ ) ama - Ty mn`
  },
  {
    question: `\$The coefficient of x5 in (1 + x^{2})5(1 +x)‘ is\$`,
    options: [
      `20`,
      `30`,
      `60`,
      `55`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 60`
  },
  {
    question: `\$1fx = > then the greatest term in the expansion of (1 + 4)8 is the\$`,
    options: [
      `3-¢term`,
      `6% term`,
      `St term`,
      `4% term`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6% term`
  },
  {
    question: `If (1 +x -2x7)® =14 Cyx + Cpx^{2} + C3x3 + ++ Cy2x1*, then the value of Cz + C4 + Cg ++ + Cy, is`,
    options: [
      `30`,
      `32`,
      `31`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 31`
  },
  {
    question: `If the coefficients of 5th, 6th and 7th terms in the expansion of (1 + x)” be in AP, then the value of n is`,
    options: [
      `7 only`,
      `14 only`,
      `7or14`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 7or14`
  },
  {
    question: `LetR = (2 + V3)^{2}" and f = R - [R] where [-] denotes the greatest integer function, then R(1 - f) is equal Page|14 to`,
    options: [
      `1`,
      `22"`,
      `277-1`,
      `"C,`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1`
  },
  {
    question: `The value of (7a t+ 701) + (70, + ^{\$1}C_{\$2}) + + (706 + 7Cy)is`,
    options: [
      `28-1`,
      `2841`,
      `28`,
      `28-2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 28-2`
  },
  {
    question: `The value of 4"Cg + "Cy + 4" Cyt.. + Cyn is`,
    options: [
      `2-2 4 (-1)22"-1`,
      `24-2 4 22n-1`,
      `\$227-1 4 (Hanan^{2}\$`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2-2 4 (-1)22"-1`
  },
  {
    question: `\$Ie there isa term containing x^{2}” in (x + 3) * then\$`,
    options: [
      `n-2r isa positive integral multiple of 3`,
      `n-2r is even`,
      `n-2r is odd`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) n-2r isa positive integral multiple of 3`
  },
  {
    question: `Last two digit of the number 19% is`,
    options: [
      `19`,
      `29`,
      `39`,
      `81`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 19`
  },
  {
    question: `1f sum of the coefficients of the first, second and third terms of the expansion of (2 + yy" is 46, then the coefficient of the term that does not contain x is`,
    options: [
      `84 Page|15`,
      `92`,
      `98`,
      `106`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 84 Page|15`
  },
  {
    question: `The coefficient of x° in the expansion of (1 + 3x + 3x^{2} + x3)^{2}° is`,
    options: [
      `Cyo`,
      `3°Co9`,
      `BC,`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Cyo`
  },
  {
    question: `\$If (1 + 2x + 3x2)19 = ap tay x + a2 x^{2} + ++ Ayo x”, then a; equals\$`,
    options: [
      `10`,
      `20`,
      `210`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20`
  },
  {
    question: `If the coefficient of rth, (r + 1)th and (r + 2) th terms in the binomial expansion of (1 + y)™ are in AP, then m andr satisfy the equation`,
    options: [
      `\$m^{2} -m(4r - 1) +4r^{2}+.2=0\$`,
      `\$m2 - m(4r + 1) + 4r^{2}-2=0\$`,
      `\$m2 -m(4r +1) +4r^{2}+.2=0\$`,
      `\$m^{2} -n(4r - 1) +47^{2} -2=0\$`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$m2 - m(4r + 1) + 4r^{2}-2=0\$`
  },
  {
    question: `\$Coefficient of the term independent of x in the expansion 6 (« + =) is equal to\$`,
    options: [
      `10`,
      `15`,
      `16`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 15`
  },
  {
    question: `Using mathematical induction, then numbers a,’s are defined by ag=1, Any = 3n^{2} +n + ay, (n = 0) Then, a, is equal to`,
    options: [
      `\$ne+n^{2}4+1\$`,
      `\$n3-n^{2} +1\$`,
      `\$n3 -n^{2}\$`,
      `\$n3 + n^{2}\$`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$n3-n^{2} +1\$`
  },
  {
    question: `The value of Cp + 3 C, +5 C2 +7 C3.. + (2n +1) C, is equal to`,
    options: [
      `2"`,
      `2" +n-2"-1`,
      `2"-(n+1)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2"-(n+1)`
  },
  {
    question: `Matrix A is such that A^{2} = 2A - J where / is the identity matrix, then for n > 2,A” is equal to`,
    options: [
      `nA-(n-1)I`,
      `nA-I`,
      `2™-1A-(n-1)1`,
      `2™-1A-1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) nA-(n-1)I`
  },
  {
    question: `22, 2n If Y a,(x - 100)" = Y b,(x - 101)" and r=0 r=0 ay = ior all k > n, then b, equals`,
    options: [
      `2"(2"+1 - 1)`,
      `2"(2" +1)`,
      `2"(2" -1)`,
      `27412" - 1)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2"(2"+1 - 1)`
  },
  {
    question: `The coefficient of x7 in the expansion of (x - 2 x^{2})~3, is`,
    options: [
      `67485`,
      `67548`,
      `67584`,
      `67845`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 67584`
  },
  {
    question: `at egt set. +1525 is equal to`,
    options: [
      `100`,
      `120`,
      `-120`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 120`
  },
  {
    question: `\$If (1 + 2x + 3x7)! = ay + a,x + apx^{2} 4+.. +a29x7°, then a,equals\$`,
    options: [
      `10`,
      `20`,
      `210`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20`
  },
  {
    question: `The coefficient of x° in the expansion of (1 + x^{2})°(1 + x)* is`,
    options: [
      `30`,
      `60`,
      `40`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60`
  },
  {
    question: `¢the last term in the binomial expansion of (23 - 3) is (S) °", then the 5th term from the beginning is`,
    options: [
      `210`,
      `420`,
      `105`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 210`
  },
  {
    question: `\$he coefficient of x19 in (x^{2} - 3) ris ©\$`,
    options: [
      `-252`,
      `210`,
      `-5!`,
      `-120`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 210`
  },
  {
    question: `\$If (1 + x)!5 = ay + ayxt.. + aysx!, then Dear Suis equal to\$`,
    options: [
      `110`,
      `115`,
      `120`,
      `135`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 120`
  },
  {
    question: `The coefficient of x° in the expansion of (1 + x7)5(1 + x)‘, is`,
    options: [
      `30`,
      `60`,
      `40`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60`
  },
  {
    question: `\$The expression TS is equal to 1/3 x 2x^{2}\$`,
    options: [
      `61/ [ +42.`,
      `\$6-2/3 [ +54 2+.| 6 6 x | 2x^{2}\$`,
      `\$6/3 [ -42..| wuyaf, _*, 2x^{2}\$`,
      `6-¥/ [:-i+ 3..`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) \$6-2/3 [ +54 2+.| 6 6 x | 2x^{2}\$`
  },
  {
    question: `If the coefficient ofr, (r + 1)" and (r + 2) terms in the expansion of (1 + x)" are in A.P., then the value of r, is`,
    options: [
      `5,9`,
      `6,9`,
      `7,9`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5,9`
  },
  {
    question: `If the 6th term in the expansion of (ast x^{2} logio x)’ is 5600, then value of x is 38`,
    options: [
      `2`,
      `V5`,
      `Vi0`,
      `10`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10`
  },
  {
    question: `If the sum of the coefficient in the expansion of (x + y)” is 1024, then the value of the greatest coefficient in the expansion is`,
    options: [
      `356`,
      `252`,
      `210`,
      `120`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 252`
  },
  {
    question: `The two consecutive terms in the expansion of (3 + 2x)’* whose coefficient are equal, are`,
    options: [
      `11.12`,
      `7,8`,
      `30,31`,
      `None of these n`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30,31`
  },
  {
    question: `The coefficient of x” in (1 + 3x - 2x3)*° is equal to`,
    options: [
      `62640`,
      `26240`,
      `64620`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 62640`
  },
  {
    question: `\$1)* The middel term in the expansion of (« = 2) is\$`,
    options: [
      `°C,`,
      `-*9Cs`,
      `81`,
      `-*Cyo`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) -*9Cs`
  },
  {
    question: `\$The term independent of x in the expansion of uu (Fan) | ---=}] is 5 2xvx,\$`,
    options: [
      `5th term`,
      `6th term.`,
      `11th term`,
      `Noterm`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Noterm`
  },
  {
    question: `The sum of the rational terms in the expansion of (245 + V3)", is`,
    options: [
      `71`,
      `85`,
      `97`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `1f(1 +x - 2x^{2})® = 1+ a,x + agx^{2}4+..+a,2x" , then the expression az + a4 + Ggt..+ay2 has the value`,
    options: [
      `32`,
      `63`,
      `64`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `\$Coefficient of x^{2}y3z* in (ax + by + cz)^{2} is\$`,
    options: [
      `1060a7b3c*`,
      `\$1160a^{2}7b3c*\$`,
      `\$1260a^{2}7b3c*\$`,
      `960a*b3c*`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \$1260a^{2}7b3c*\$`
  },
  {
    question: `\$2 4yk-2 Leta) = 1 ”\$`,
    options: [
      `n(n-1)`,
      `n(nt+1)`,
      `\$n^{2}\$`,
      `\$(n+ 1)^{2}\$`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) \$n^{2}\$`
  },
  {
    question: `If the coefficients of three consecutive terms in the expansion of (1 + x)" are in the ratio 1: 7:42, then the value of n is`,
    options: [
      `60`,
      `70`,
      `55`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 55`
  },
  {
    question: `\$1)^{2} In the expansion of (2x = 5) , the term independent of x is\$`,
    options: [
      `8th`,
      `7th`,
      `9th`,
      `10th`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9th`
  },
  {
    question: `\$1\\"_ 5 If the fourth term in the expansion of (ax + =) iss , then\$`,
    options: [
      `\$a=1/2andn=6\$`,
      `\$a=1/3 andn=5\$`,
      `\$a=2andn=3\$`,
      `\$a=1/4andn=1\$`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) \$a=1/2andn=6\$`
  },
  {
    question: `\$1f (1 +x)" = Co + Cyx + Cox^{2}+..+C,x™, then o< a s<n X(r + s)C,C, is equal to\$`,
    options: [
      `n[22"-12"-1¢, 1]`,
      `n[22"-242"-16,_4]`,
      `\$2n[22"-1=2"-16, 4]\$`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) n[22"-12"-1¢, 1]`
  },
  {
    question: `\$If A = 100022 and B = (1001)°%, then\$`,
    options: [
      `A>B`,
      `\$A=B\$`,
      `A<B`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A>B`
  },
  {
    question: `, - 1s . fg 2\\t5 The ratio of the coefficient of x*° to the term independent of x in (x + 2) ,is`,
    options: [
      `1/4`,
      `1/16`,
      `1/32`,
      `1/64`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1/32`
  },
  {
    question: `7 6 If the fourth term in the expansion of { (loa) + nl is equal to 200 and x > 1, then x is equal to`,
    options: [
      `10v2`,
      `10`,
      `10*`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10`
  },
  {
    question: `The coefficient of x° in ((1 +.x)° + (1 +x)^{2} +--+ (1+ x) Fis`,
    options: [
      `16C,`,
      `165 - °C`,
      `C,-1`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 16C,`
  },
  {
    question: `. ses 2! 162 202 4.302 2 If C, stands for "C,., the sum of the given series ~T [Cj - 2C^{2} + 3CZ-..+(-1)” (n + 1) C7], where nis an even positive integer, is`,
    options: [
      `0`,
      `(-1)"/2(n + 1)`,
      `(-D"(n+ 2)`,
      `\$(-1)"^{2}(n + 2)\$`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) \$(-1)"^{2}(n + 2)\$`
  },
  {
    question: `The value of (1.002)^{2}^{2} upto fourth place of decimal is`,
    options: [
      `1.0242`,
      `1.0245`,
      `1.0004`,
      `1.0254`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.0242`
  },
  {
    question: `Ifa and d are two complex numbers, then the sum to (n + 1) terms of the following series aCy - (a+ dC, + (a+ 2d)C,-.. 4.018 a`,
    options: [
      `oa`,
      `na`,
      `0`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0`
  },
  {
    question: `Ifn is a positive integer, then 52"*^{2} - 24n - 25 isdivisible by Page|23`,
    options: [
      `574`,
      `575`,
      `675`,
      `576`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 576`
  },
  {
    question: `The larger of 995° + 1005° and 101°° is`,
    options: [
      `99°° + 1005°`,
      `Both are equal`,
      `1015°`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1015°`
  },
  {
    question: `The value of the sum of the series 3+ "Cy-8+ "C, +13 "Cz - 18+ "C3 + ..upto (n + 1) terms is`,
    options: [
      `O`,
      `3”`,
      `5”`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) O`
  },
  {
    question: `if the sum of the numerical coefficients in the binomial expansion of ¢ + 2x) is equal to 6561, then the term independent of x, is Page|24`,
    options: [
      `°C,`,
      `8C, x 24`,
      `°C, x 24`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8C, x 24`
  },
  {
    question: `The coefficient of x° in the expansion of (2 - x + 3x^{2})°, is`,
    options: [
      `-4692`,
      `4692`,
      `2346`,
      `-5052 n`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) -5052 n`
  }
];
