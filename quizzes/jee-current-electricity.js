// JEE/NEET: Current Electricity
// 1073 MCQs

const QUESTIONS = [
  {
    question: `In the electric circuit shown each cell has an emf of 2V and internal resistance of 1Ω. The external resistance is 2Ω. The value of the current I is(in ampere)`,
    options: [
      `2`,
      `1.25`,
      `0.4`,
      `1.2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.2`
  },
  {
    question: `𝐴, 𝐵, 𝐶 and 𝐷 are four resistances of 2Ω, 2Ω, 2Ω and 3Ω respectively. They are used to form a Wheatstone bridge. The resistance 𝐷 is short circuted with a resistances R in order to get the bridge balanced. The value of 𝑅 will be`,
    options: [
      `4 Ω`,
      `6 Ω`,
      `8 Ω`,
      `3 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 Ω`
  },
  {
    question: `The arrangement as shown in figure is called as`,
    options: [
      `Potential divider`,
      `Potential adder`,
      `Potential substracter`,
      `Potential multiplier`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Potential substracter`
  },
  {
    question: `If the balance point is obtained at the 35th 𝑐𝑚 in a meter bridge, the resistances in the left and right gaps are in the ratio of`,
    options: [
      `7 : 13`,
      `13 : 7`,
      `9 : 11`,
      `11 : 9`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7 : 13`
  },
  {
    question: `Two electric bulbs rated 𝑃1 watt 𝑉 volts and 𝑃2 watt 𝑉 volts are connected in parallel and 𝑉 volts are applied to it. The total power will be`,
    options: [
      `𝑃1 + 𝑃2𝑤𝑎𝑡𝑡`,
      `√𝑃1𝑃2 𝑤𝑎𝑡𝑡`,
      `𝑃1𝑃2 𝑃1 + 𝑃2 𝑤𝑎𝑡𝑡`,
      `𝑃1 + 𝑃2 𝑃1𝑃2 𝑤𝑎𝑡𝑡`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑃1 + 𝑃2𝑤𝑎𝑡𝑡`
  },
  {
    question: `In a meter bridge a 30Ω resistance is connected in the left gap and a pair of resistances P and Q in the right gap. Measured from the left, the balance point is 37.5 cm, when P and Q are in series and 71.4 cm when they are parallel. The values of P and Q (in ohm) are`,
    options: [
      `40, 10`,
      `35, 15`,
      `30, 20`,
      `25, 25`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30, 20`
  },
  {
    question: `In an experiment to measure the internal resistance of a cell by potentiometer, it is found that the balance point is at a length of 2𝑚 when the cell is shunted by a 5Ω resistance; and is at a length of 3𝑚 when the cell is shunted by a 10Ω resistance. The internal resistance of the cell is, then`,
    options: [
      `1.5Ω`,
      `10Ω`,
      `15Ω`,
      `1Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10Ω`
  },
  {
    question: `Two electroplating cells, one of silver and another of aluminium are connected in series. The ratio of the number of silver atoms to that of aluminium atoms deposited during time 𝑡 will be`,
    options: [
      `1 : 3`,
      `3 : 1`,
      `1 : 9`,
      `9 : 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 : 1`
  },
  {
    question: `A coil of wire of resistance 50 Ω is embedded in a block of ice and a potential difference of 210 V is applied across it. The amount of ice which melts in 1 sec is`,
    options: [
      `0.262 g`,
      `2.62 g`,
      `26.2 g`,
      `0.0262 g`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.62 g`
  },
  {
    question: `The resistance of 1 𝐴 ammeter is 0.018Ω. To convert it into 10 𝐴 ammeter, the shunt resistance required will be`,
    options: [
      `0.18 Ω`,
      `0.0018 Ω`,
      `0.002 Ω`,
      `0.12 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.002 Ω`
  },
  {
    question: `When current flows through a conductor, then the order of drift velocity of electrons will be`,
    options: [
      `1010𝑚/𝑠𝑒𝑐`,
      `10−2𝑐𝑚/𝑠𝑒𝑐`,
      `104𝑐𝑚/𝑠𝑒𝑐`,
      `10−1𝑐𝑚/𝑠𝑒𝑐 Variable P.D. Total P.D. 2 Ω 2V ,1 Ω I P a g e | 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10−2𝑐𝑚/𝑠𝑒𝑐`
  },
  {
    question: `Which of the following statements is wrong`,
    options: [
      `Voltmeter should have high resistance`,
      `Ammeter should have low resistance`,
      `Ammeter is placed in parallel across the conductor in a circuit`,
      `Voltmeter is placed in parallel across the conductor in a circuit`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Ammeter is placed in parallel across the conductor in a circuit`
  },
  {
    question: `A material 𝐵 has twice the specific resistance of 𝐴. A circular wire made of 𝐵 has twice the diameter of a wire made of 𝐴. Then for the two wires to have the same resistance, the ratio 𝑙𝐵/𝑙𝐴 of their respective lengths must be`,
    options: [
      `1`,
      `1/2`,
      `1/4`,
      `2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2`
  },
  {
    question: `In the circuit shown below, the power developed in the 6Ω resistor is 6 watt. The power in watts developed in the 4Ω resistor is`,
    options: [
      `16`,
      `9`,
      `6`,
      `4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9`
  },
  {
    question: `The value of internal resistance of an ideal cell is`,
    options: [
      `Zero`,
      `0.5 Ω`,
      `1 Ω`,
      `Infinity`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Zero`
  },
  {
    question: `If the electronic charge is 1.6 × 10−19 C, then the number of electrons passing through a section of wire per second, when the wire carries a current of 2 A is`,
    options: [
      `1.25 × 1017`,
      `1.6 × 1017`,
      `1.25 × 1019`,
      `1.6 × 1019`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.25 × 1019`
  },
  {
    question: `Two bulbs are working in parallel order. Bulb 𝐴 is brighter than bulb 𝐵. If 𝑅𝐴 and 𝑅𝐵 are their resistance respectively then`,
    options: [
      `𝑅𝐴 > 𝑅𝐵`,
      `𝑅𝐴 < 𝑅𝐵`,
      `𝑅𝐴 = 𝑅𝐵`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅𝐴 < 𝑅𝐵`
  },
  {
    question: `The amount of chlorine produced per-second through electrolysis in a plate which consumes 100 KW power at 200 V is (Given, electrochemical equivalent of chlorine = 0.367× 10−3gC−1)`,
    options: [
      `18.35 g`,
      `1.835 g`,
      `183.5 g`,
      `0.1835 g`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.1835 g`
  },
  {
    question: `Three resistors each of 2 𝑜ℎ𝑚 are connected together in a triangular shape. The resistance between any two vertices will be`,
    options: [
      `4/3𝑜ℎ𝑚`,
      `3/4 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚`,
      `6 𝑜ℎ𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4/3𝑜ℎ𝑚`
  },
  {
    question: `Two different conductors have same resistance at 0°C. It is found that the resistance of the first conductor at 𝑡1℃ is equal to the resistance of the second conductor at 𝑡2℃. The ratio of the temperature coefficients of resistance of the conductors, 𝛼1 𝛼2 is`,
    options: [
      `𝑡1 𝑡2`,
      `𝑡2 − 𝑡1 𝑡2`,
      `𝑡2 − 𝑡1 𝑡1`,
      `𝑡2 𝑡1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑡2 𝑡1`
  },
  {
    question: `The resistance of a galvanometer is 25 𝑜ℎ𝑚 and it requires 50 𝜇𝐴 for full deflection. The value of the shunt resistance required to convert it into an ammeter of 5 𝑎𝑚𝑝 is`,
    options: [
      `2.5 × 10−4𝑜ℎ𝑚`,
      `1.25 × 10−3𝑜ℎ𝑚`,
      `0.05 𝑜ℎ𝑚`,
      `2.5 𝑜ℎ𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2.5 × 10−4𝑜ℎ𝑚`
  },
  {
    question: `The resistivity of a potentiometer wire is 40 × 10−8𝑜ℎ𝑚− 𝑚 and its area of cross-section is 8 × 10−6𝑚2. If 0.2 𝑎𝑚𝑝 current is flowing through the wire, the potential gradient will be`,
    options: [
      `10−2𝑣𝑜𝑙𝑡/𝑚`,
      `10−1𝑣𝑜𝑙𝑡/𝑚`,
      `3.2 × 10−2𝑣𝑜𝑙𝑡/𝑚`,
      `1 𝑣𝑜𝑙𝑡/𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10−2𝑣𝑜𝑙𝑡/𝑚`
  },
  {
    question: `In the circuit shown here, the readings of the ammeter and voltmeter are V A V A V A P a g e | 3`,
    options: [
      `6 𝐴, 60 𝑉`,
      `0.6 𝐴, 6 𝑉`,
      `6/11 𝐴, 60/11 𝑉`,
      `11/6 𝐴, 11/60 𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6/11 𝐴, 60/11 𝑉`
  },
  {
    question: `A thermocouple of negligible resistance produces an 𝑒.m.f. of 40𝜇𝑉/℃ in the linear range of temperature. A galvanometer of resistance 10 𝑜ℎ𝑚 whose sensitivity is 1𝜇𝐴/𝑑𝑖𝑣, is employed with the thermocouple. The smallest value of temperature difference that can be detected by the system will be`,
    options: [
      `0.1℃`,
      `0.25℃`,
      `0.5℃`,
      `1℃`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.25℃`
  },
  {
    question: `The resistance across 𝑅 and 𝑄 in the figure.`,
    options: [
      `𝑟/3`,
      `𝑟/2`,
      `2𝑟`,
      `6𝑟`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑟/3`
  },
  {
    question: `When a current 𝐼flows through a wire, the drift velocity of the electrons is 𝑣. When current 2𝐼 flows through another wire of the same material having double the length and double the area of cross-section, the drift velocity of the electrons will be`,
    options: [
      `𝑣 8`,
      `𝑣 4`,
      `𝑣 2`,
      `𝑣`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑣`
  },
  {
    question: `A wire is broken in four equal parts. A packet is formed by keeping the four wires together. The resistance of the packet in comparison to the resistance of the wire will be`,
    options: [
      `Equal`,
      `One fourth`,
      `One eight`,
      `1 16𝑡ℎ`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 16𝑡ℎ`
  },
  {
    question: `In an electroplating experiment, 𝑚 𝑔𝑚 of silver is deposited when 4 𝑎𝑚𝑝𝑒𝑟𝑒 of current flows for 2 𝑚𝑖𝑛𝑢𝑡𝑒. The amount (in 𝑔𝑚) of silver deposited by 6 𝑎𝑚𝑝𝑒𝑟𝑒 of current for 40 𝑠𝑒𝑐𝑜𝑛𝑑 will be`,
    options: [
      `4 𝑚`,
      `𝑚/2`,
      `𝑚/4`,
      `2 𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑚/2`
  },
  {
    question: `Which of the following relation is wrong?`,
    options: [
      `1 ampere ×1 ohm=1 volt`,
      `1 watt ×1 sec=1 joule`,
      `1 newton per coulomb =1 volt per metre`,
      `1 columb ×1 volt=1 watt`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 columb ×1 volt=1 watt`
  },
  {
    question: `To convert a 800 𝑚𝑉 range 𝑚𝑖𝑙𝑙𝑖 𝑣𝑜𝑙𝑡𝑚𝑒𝑡𝑒𝑟 of resistance 40 Ω into a galvanometer of 100 𝑚𝐴 range, the resistance to be connected as shunt is`,
    options: [
      `10 Ω`,
      `20 Ω`,
      `30 Ω`,
      `40 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 Ω`
  },
  {
    question: `The effective resistance between points 𝐴 and 𝐵 is`,
    options: [
      `10 Ω`,
      `20 Ω`,
      `40 Ω`,
      `None of the above three values`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 Ω`
  },
  {
    question: `If the total emf in a thermocouple is a parabolic function expressed as 𝐸 = 𝑎𝑡+ 1 2 𝑏𝑡2, which of the following relation does not hold good? A 10 10 10 10 B 10 C A B r r r r r r P Q P a g e | 4`,
    options: [
      `Neutral temperature 𝑡𝑛 = − 𝑎 𝑏`,
      `Temperature of inversion, 𝑡𝑖 = − −2𝑎 𝑏`,
      `Thermoelectric power 𝑃 = 𝑎 + 𝑏𝑡`,
      `𝑡𝑛 = 𝑎 𝑏`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Neutral temperature 𝑡𝑛 = − 𝑎 𝑏`
  },
  {
    question: `The plot represents the flow of current through a wire at three different times. The ratio of charges flowing through the wire at different times is`,
    options: [
      `2 : 1 : 2`,
      `1 : 3 : 3`,
      `1 : 1 : 1`,
      `2 : 3 : 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 : 1 : 1`
  },
  {
    question: `When the resistance of 9 Ω is connected at the ends of a battery, its potential difference decreases from 40 𝑣𝑜𝑙𝑡 to 30 𝑣𝑜𝑙𝑡. The internal resistance of the battery is`,
    options: [
      `6 Ω`,
      `3 Ω`,
      `9 Ω`,
      `15 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 Ω`
  },
  {
    question: `A cylindrical metal wire of length 𝑙 and cross sectional area 𝑆, has resistance 𝑅, conductance 𝐺, conductivity 𝜎 and resistivity 𝜌. Which one of the following expressions for 𝜎 is valid`,
    options: [
      `𝐺𝑅 𝜌`,
      `𝜌𝑅 𝐺`,
      `𝐺𝑆 𝑙`,
      `𝑅𝑙 𝑆`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐺𝑅 𝜌`
  },
  {
    question: `The heat developed in an electric wire of resistance 𝑅 by a current 𝐼 for a time 𝑡 is`,
    options: [
      `𝐼2𝑅𝑡 4.2 𝑐𝑎𝑙`,
      `𝐼2𝑡 4.2𝑅𝑐𝑎𝑙`,
      `𝐼2𝑅 4.2 𝑡 𝑐𝑎𝑙`,
      `𝑅𝑡 4.2 𝐼2 𝑐𝑎𝑙`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐼2𝑅𝑡 4.2 𝑐𝑎𝑙`
  },
  {
    question: `In the circuit of adjoining figure the current though 12 Ω resistor will be`,
    options: [
      `1 𝐴`,
      `1 5 𝐴`,
      `2 5 𝐴`,
      `0 𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0 𝐴`
  },
  {
    question: `An electric bulb is designed to draw power 𝑃0 at voltage 𝑉0. If the voltage is 𝑉 it draws a power 𝑃. Then`,
    options: [
      `𝑃 = (𝑉0 𝑉 ) 2 𝑃0`,
      `𝑃 = (𝑉 𝑉0 ) 2 𝑃0`,
      `𝑃 = (𝑉 𝑉0 )𝑃0`,
      `𝑃 = (𝑉0 𝑉 )𝑃0`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑃 = (𝑉 𝑉0 ) 2 𝑃0`
  },
  {
    question: `When two resistances 𝑅1 and 𝑅2 are connected in series and parallel with 120 𝑉 line power consumed will be 25 𝑊 and 100 𝑊 respectively. Then the ratio of power consumed by 𝑅1 to that consumed by 𝑅2 will be`,
    options: [
      `1 :1`,
      `1 :2`,
      `2 :1`,
      `1 :4`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 :1`
  },
  {
    question: `For which of the following the resistance decreases on increasing the temperature`,
    options: [
      `Copper`,
      `Tungsten`,
      `Germanium`,
      `Aluminium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Germanium`
  },
  {
    question: `The effective resistance between the points 𝐴 and 𝐵 in the figure is`,
    options: [
      `5Ω`,
      `2Ω`,
      `3Ω`,
      `4Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2Ω`
  },
  {
    question: `How much energy in kilowatt hour is consumed in operating ten 50 watt bulbs for 10 hours per day in a month (30 days) 3 3 3 6 3 A B C D P a g e | 5`,
    options: [
      `1500`,
      `5,000`,
      `15`,
      `150`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 150`
  },
  {
    question: `If in a voltaic cell, 5 g of zinc is consumed, we will get how many ampere hour (given that ECE of zinc is 3.38 × 10−7kgC−1)`,
    options: [
      `2.05`,
      `8.2`,
      `4.1`,
      `5 × 3.338 × 10−7`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4.1`
  },
  {
    question: `The resistance of a conductor is 5 𝑜ℎ𝑚 at 50℃ and 6 𝑜ℎ𝑚 at 100℃. Its resistance at 0℃ is`,
    options: [
      `1 𝑜ℎ𝑚`,
      `2 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚`,
      `4 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4 𝑜ℎ𝑚`
  },
  {
    question: `A metallic wire of resistance 12 Ω is bent to from a square. The resistance between two diagonal points would be`,
    options: [
      `12 Ω`,
      `24 Ω`,
      `6 Ω`,
      `3 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 Ω`
  },
  {
    question: `A piece of metal weighing 200 g is to be electroplated with 5% of its weight in gold. How long it would take to deposits the required amount of gold, if the strength of the available current is 2 A? (Given, electrochemical equivalent of 𝐻 = 0.0104× 10−4 gC−1 atomic weight of gold = 197.1, atomic weight of hydrogen = 1.008)`,
    options: [
      `7347.9 s`,
      `7400.5 s`,
      `7151.7 s`,
      `70 s`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7347.9 s`
  },
  {
    question: `In the circuit shown in figure, the heat produced by the 6 Ω resistance is 60Ω cal s−1. What heat per second is produced across 3Ω resistance?`,
    options: [
      `30 cal`,
      `60 cal`,
      `100 cal`,
      `120 cal`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 120 cal`
  },
  {
    question: `Thirteen resistance each of resistance 𝑅 𝑜ℎ𝑚 are connected in the circuit as shown in the figure below. The effective resistance between 𝐴 and 𝐵 is 4 Ω 6 Ω 3 Ω 2 Ω P a g e | 6`,
    options: [
      `2𝑅 Ω`,
      `4𝑅 3 Ω`,
      `2 𝑅 3 Ω`,
      `𝑅 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 𝑅 3 Ω`
  },
  {
    question: `In the shown circuit, what is the potential difference across 𝐴 and 𝐵`,
    options: [
      `50 𝑉`,
      `45 𝑉`,
      `30 𝑉`,
      `20 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 20 𝑉`
  },
  {
    question: `The internal resistance of a cell is the resistance of`,
    options: [
      `Electrodes of the cell`,
      `Vessel of the cell`,
      `Electrolyte used in the cell`,
      `Material used in the cell`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Electrolyte used in the cell`
  },
  {
    question: `In potentiometer a balance point is obtained, when`,
    options: [
      `The e.m.f. of the battery becomes equal to the e.m.f. of the experimental cell`,
      `The p.d. of the wire between the +𝑣𝑒 end to jockey becomes equal to the e.m.f. of the experimental cell`,
      `The p.d. of the wire between +𝑣𝑒 point and jockey becomes equal to the e.m.f. of the battery`,
      `The p.d. across the potentiometer wire becomes equal to the e.m.f. of the battery`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The p.d. of the wire between the +𝑣𝑒 end to jockey becomes equal to the e.m.f. of the experimental cell`
  },
  {
    question: `A conductor wire having 1029 free electrons/m3 carries a current of 20A. If the cross-section of the wire is 1mm2, then the drift velocity of electrons will be`,
    options: [
      `6.25 × 10−3ms−1`,
      `1.25 × 10−5ms−1`,
      `1.25 × 10−3ms−1`,
      `1.25 × 10−4ms−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.25 × 10−3ms−1`
  },
  {
    question: `Figure shown three similar lamps 𝐴, 𝐵 and 𝐶 connected across a power supply. If the lamp 𝐶 fuses, how will the light emitted by 𝐴 and 𝐵 change?`,
    options: [
      `No change`,
      `Brilliance of 𝐴 decreases and that of 𝐵 increases`,
      `Brilliance of both 𝐴 and 𝐵 increases`,
      `Brilliance of both 𝐴 and 𝐵 decreases`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Brilliance of 𝐴 decreases and that of 𝐵 increases`
  },
  {
    question: `Bulb 𝐵1 (100 W-250 V) and bulb 𝐵2 (100 W-200 V) are connected across 250 V. What is potential drop across 𝐵2?`,
    options: [
      `200 V`,
      `250 V`,
      `98 V`,
      `48 V`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 98 V`
  },
  {
    question: `The amount of charge required to liberate 9 𝑔𝑚 of aluminium (atomic weight =27 and valency = 3) in the process of electrolysis is (Faraday’s number =96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠/𝑔𝑚 equivalent)`,
    options: [
      `321660 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠`,
      `69500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠`,
      `289500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`
  },
  {
    question: `In the circuit shown below, the reading of the voltmeter 𝑉 is 10 20 30 (min) 100 (mA) 1 (mA) 0.0 20 V A B R R R R R R R R R R R R R B A P a g e | 7`,
    options: [
      `12 𝑉`,
      `8 𝑉`,
      `20 𝑉`,
      `16 𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 12 𝑉`
  },
  {
    question: `If each resistance in the figure is of 9 Ω then reading of ammeter is`,
    options: [
      `5 𝐴`,
      `8 𝐴`,
      `2 𝐴`,
      `9 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 𝐴`
  },
  {
    question: `160W-60V lamp is connected at 60 V DC supply. The number of electrons passing through the lamp in 1 min is (the charge of electron 𝑒 = 1.6 × 10−19C)`,
    options: [
      `1019`,
      `1021`,
      `1.6 × 1019`,
      `1.4 × 1020`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1021`
  },
  {
    question: `The smallest temperature difference that can be measured with a combination of a thermocouple of thermo 𝑒.m.f. 30 𝜇𝑉 per degree and a galvanometer of 50 𝑜ℎ𝑚 resistance, capable of measuring a minimum current of 3 × 10−7𝑎𝑚𝑝 is`,
    options: [
      `0.5 degree`,
      `1.0 degree`,
      `1.5 degree`,
      `2.0 degree`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.5 degree`
  },
  {
    question: `The magnitude and direction of the current in the circuit shown will be`,
    options: [
      `7/3𝐴 from 𝑎 to 𝑏 through 𝑒`,
      `7/3𝐴 from 𝑏 to 𝑎 through 𝑒`,
      `1𝐴 from 𝑏 to 𝑎 through 𝑒`,
      `1𝐴 from 𝑎 to 𝑏 through 𝑒`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1𝐴 from 𝑎 to 𝑏 through 𝑒`
  },
  {
    question: `If the cold junction is held at 0℃, the same thermo-emf 𝑉 of a thermocouple varies as 𝑉 = 10 × 10−6 𝑡 − 1 40 × 10−6 𝑡2, where 𝑡 is the temperature of the hot junction in ℃. The neutral temperature and the maximum value of thermo-emf are respectively`,
    options: [
      `200℃; 2 mV`,
      `400℃; 2 mV`,
      `100℃; 1 mV`,
      `200℃; 1 mV`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 200℃; 1 mV`
  },
  {
    question: `A voltmeter has a range 0 − 𝑉 with a series resistance 𝑅. With a series resistance 2𝑅, the range is 0 − 𝑉′. The correct relation between 𝑉and 𝑉′ is`,
    options: [
      `𝑉′ = 2𝑉`,
      `𝑉′ > 2𝑉`,
      `𝑉′ ≫ 2𝑉`,
      `𝑉′ < 2𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑉′ < 2𝑉`
  },
  {
    question: `If the resistance in the primary circuit is doubled then the position of new null point will be`,
    options: [
      `0.4 𝐿`,
      `0.5 𝐿`,
      `0.6 𝐿`,
      `0.8 𝐿`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.5 𝐿`
  },
  {
    question: `The ratio of voltage sensitivity (𝑉𝑆) and current sensitivity (𝐼𝑠) of a moving coil galvanometer is`,
    options: [
      `1 𝐺`,
      `1 𝐺2`,
      `G`,
      `𝐺2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝐺`
  },
  {
    question: `Find the power of the circuit d c b a 1 10V e 4V 2 3 + – 9V A 16 B A 2A C 1A 4 16 1A 4 V P a g e | 8`,
    options: [
      `1.5 𝑊`,
      `2 𝑊`,
      `1 𝑊`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 𝑊`
  },
  {
    question: `Five conductors are meeting at a point x as shown in the figure. What is the value of current in fifth conductor?`,
    options: [
      `3 A away from x`,
      `1 A away from x`,
      `4 A away from x`,
      `1 A towards x`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 A away from x`
  },
  {
    question: `A heating coil is labelled 100 𝑊, 220 𝑉. The coil is cut in half and the two pieces are joined in parallel to the same source. The energy now liberated per second is`,
    options: [
      `200 𝐽`,
      `400 𝐽`,
      `25 𝐽`,
      `50 𝐽`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 400 𝐽`
  },
  {
    question: `For comparing the e.m.f.'s of two cells with a potentiometer, a standard cell is used to develop a potential gradient along the wires. Which of the following possibilities would make the experiment unsuccessful`,
    options: [
      `The e.m.f. of the standard cell is larger than the 𝐸 e.m.f.'s the two cells`,
      `The diameter of the wires is the same and uniform throughout`,
      `The number of wires is ten`,
      `The e.m.f. of the standard cell is smaller than the e.m.f.'s of the two cells`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The e.m.f. of the standard cell is smaller than the e.m.f.'s of the two cells`
  },
  {
    question: `In the circuit element given here, if the potential at point 𝐵, 𝑉𝐵 = 0, then the potentials of 𝐴 and 𝐷 are given as`,
    options: [
      `𝑉𝐴 = −1.5𝑉, 𝑉𝐷 = +2𝑉`,
      `𝑉𝐴 = +1.5𝑉, 𝑉𝐷 = +2𝑉`,
      `𝑉𝐴 = +1.5 𝑉, 𝑉𝐷 = +0.5 𝑉`,
      `𝑉𝐴 = +1.5𝑉, 𝑉𝐷 = −0.5 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑉𝐴 = +1.5𝑉, 𝑉𝐷 = −0.5 𝑉`
  },
  {
    question: `If in the circuit shown below, the internal resistance of the battery is 1.5 Ω and 𝑉P and 𝑉Q are the potentials at 𝑃 and 𝑄 respectively, what is the potential difference between the points 𝑃 and 𝑄`,
    options: [
      `Zero`,
      `4 𝑣𝑜𝑙𝑡𝑠 (𝑉𝑃 > 𝑉𝑄)`,
      `4 𝑣𝑜𝑙𝑡𝑠 (𝑉𝑄 > 𝑉P)`,
      `2.5 𝑣𝑜𝑙𝑡𝑠 (𝑉𝑄 > 𝑉P)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.5 𝑣𝑜𝑙𝑡𝑠 (𝑉𝑄 > 𝑉P)`
  },
  {
    question: `Two resistance of 10 Ω and 20 Ω and an inductor of inductance 5 𝐻 are connected to a battery of 2 𝑉 through a key 𝑘 as shown in the figure. At time 𝑡 = 0, when the key 𝑘 is closed the initial current through the battery is 2 Ω P Q 20 V 3 Ω 3 Ω 2 Ω 1.5 Ω + – A B C D 1 amp 1.5 Ω 2.5 Ω 2V E t E t E t E t P a g e | 9`,
    options: [
      `0.2 𝐴`,
      `2 15𝐴`,
      `1 15𝐴`,
      `0`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 15𝐴`
  },
  {
    question: `Find the equivalent resistance across the terminals of source of e.m.f. 24 𝑉 for the circuit shown in figure`,
    options: [
      `15 Ω`,
      `10 Ω`,
      `5 Ω`,
      `4 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 Ω`
  },
  {
    question: `Twelve cells, each having emf E volts are connected in series and kept in a closed box. Some of these cells are wrongly connected with positive and negative terminals reversed. This 12-cell battery is connected with an ammeter, an external resistance R ohm and a two-cell battery (two cells of the same type used earlier, connected perfectly in series). The current in the circuit when the 12-cell battery and 2-cell battery aid each other is 3A and 2A when they oppose each other. Then, the number of cell in 12-cell battery that are connected wrongly is`,
    options: [
      `4`,
      `3`,
      `2`,
      `1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1`
  },
  {
    question: `In hydrogen atom, the electron makes 6.6 × 1015 revolutions per second around the nucleus in an orbit of radius 0.5 × 10−10𝑚. It is equivalent to a current nearly`,
    options: [
      `1 𝐴`,
      `1 𝑚𝐴`,
      `1 𝜇𝐴`,
      `1.6 × 10−19𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 𝑚𝐴`
  },
  {
    question: `Two conductors made of the same material are connected across a common potential difference. Conductor 𝐴 has twice the diameter and twice the length of conductor 𝐵. The power delivered to the two conductors 𝑃𝐴 and 𝑃𝐵 respectively is such that 𝑃𝐴/𝑃𝐵 equals to`,
    options: [
      `0.5`,
      `1.0`,
      `1.5`,
      `2.0`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.0`
  },
  {
    question: `Two heater wires of equal length are first connected in series and then in parallel. The ratio of heat produced in the two cases is`,
    options: [
      `1 : 4`,
      `4 : 1`,
      `1 : 2`,
      `2 : 1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 : 4`
  },
  {
    question: `The current through G is zero. Which of the above statements is/zero true?`,
    options: [
      `1,2 and 3`,
      `2 and 3`,
      `2 alone`,
      `1 alone`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 alone`
  },
  {
    question: `In a copper voltmeter experiment, current is decreased to one-fourth of the initial value but is passed for four times the earlier duration. Amount of copper deposited will be`,
    options: [
      `Same`,
      `One-fourth the previous value`,
      `Four times the previous value`,
      `1 16 𝑡ℎ the previous value`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Same`
  },
  {
    question: `A strip of copper and another of germanium are cooled from room temperature to 80 𝐾. The resistance of`,
    options: [
      `Each of these increases`,
      `Each of these decreases 2R 2R E A R R B G P a g e | 10`,
      `Copper strip increases and that of germanium decreases`,
      `Copper strip decreases and that of germanium increases`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Copper strip decreases and that of germanium increases`
  },
  {
    question: `The resistance of the following circuit figure between 𝐴 and 𝐵 is`,
    options: [
      `(3/2) Ω`,
      `2 Ω`,
      `4 Ω`,
      `8 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (3/2) Ω`
  },
  {
    question: `The amount of charge 𝑄 passed in time 𝑡 through a cross-section of a wire is 𝑄 = 5𝑡2 + 3𝑡 + 1.The value of current at time 𝑡 = 5 𝑠 is`,
    options: [
      `9A`,
      `49A`,
      `53A`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 53A`
  },
  {
    question: `Silver and copper voltameter are connected in parallel with a battery of 𝑒.m.f. 12 𝑉. In 30 𝑚𝑖𝑛𝑢𝑡𝑒𝑠, 1𝑔 of silver and 1.8𝑔 of copper are liberated. The power supplied by the battery is (𝑍𝐶𝑢 = 6.6 × 10−4𝑔/𝐶 and 𝑍𝐴𝑔 = 11.2 × 10−4𝑔/𝐶)`,
    options: [
      `24.13 𝐽/𝑠𝑒𝑐`,
      `2.413 𝐽/𝑠𝑒𝑐`,
      `0.2413 𝐽/𝑠𝑒𝑐`,
      `2413 𝐽/𝑠𝑒𝑐`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 24.13 𝐽/𝑠𝑒𝑐`
  },
  {
    question: `In a copper voltmeter, the mass deposited in 30 s is 𝑚 gram. If the current -time graph is as shown in figure, the electrochemical equivalent of copper, in gC−1 is`,
    options: [
      `0.1 𝑚`,
      `0.6 𝑚`,
      `𝑚 2`,
      `𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑚 2`
  },
  {
    question: `The electron in a hydrogen atom circles around the proton in 1.5941× 10−18s. The equivalent current due to motion of the electrons is`,
    options: [
      `127.37 mA`,
      `122.49 mA`,
      `100.37 mA`,
      `94.037 mA`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 100.37 mA`
  },
  {
    question: `The effective resistance between points 𝑃 and 𝑄 of the electrical circuit shown in the figure.`,
    options: [
      `2𝑅𝑟 𝑅 + 𝑟`,
      `8𝑅(𝑅 + 𝑟) (3𝑅 + 𝑟)`,
      `2𝑅 + 4𝑟`,
      `5𝑅 2 + 2𝑅`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2𝑅𝑟 𝑅 + 𝑟`
  },
  {
    question: `In a thermo-couple, one junction which is at 0℃ and the othe at 𝑡℃ the emf is given by 𝐸 = 𝑎𝑡2 − 𝑏𝑡2. The neutral temperature is given by`,
    options: [
      `𝑎/𝑏`,
      `2 𝑎/3𝑏`,
      `3𝑎/2𝑏`,
      `𝑏/2𝑎`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 𝑎/3𝑏`
  },
  {
    question: `In the arrangement shown in figure, the current through 5Ω resistor is`,
    options: [
      `2A`,
      `Zero`,
      `12 7 A`,
      `1A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2A`
  },
  {
    question: `A straight conductor of uniform cross-section carries a current 𝑖, If 𝑠 is the specific charge of an electron, the momentum of all the free electrons per unit length of the conductor, due to their drift velocity only is`,
    options: [
      `𝑖𝑠`,
      `√𝑖/𝑠`,
      `𝑖/𝑠`,
      `(𝑖 𝑠⁄ )2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑖/𝑠`
  },
  {
    question: `When a copper voltmeter is connected with a battery of emf 12V, 2 g of copper is deposited in 30 min. If the same voltmeter is connected across 6 V battery, the mass of copper deposited in 45 min would be t (s) i (mA) 100 10 20 30 2 R 2 R 2 R 2 R 2 R 2 R r r P Q 5 Ω 2 Ω 2 Ω 12V 12V 2 Ω 2 Ω 2 Ω 2 Ω 2 Ω 2 Ω 2 Ω 2 Ω C A B F E D P a g e | 11`,
    options: [
      `1 g`,
      `1.5 g`,
      `2 g`,
      `2.5 g`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.5 g`
  },
  {
    question: `A resistor 𝑅 and 2𝜇F capacitor in series is connected through a switch to 200 V direct supplies. Across the capacitor is a neon bulb that lights up at 120 V. Calculate the value of 𝑅 to make the bulk light up 5 s alter the switch has been closed (log10 2.5 = 0.4)`,
    options: [
      `1.7 × 105 Ω`,
      `2.7 × 106 Ω`,
      `3.3 × 107 Ω`,
      `1.3 × 104 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.7 × 105 Ω`
  },
  {
    question: `In above question, if length is doubled, the drift velocity`,
    options: [
      `Is doubled`,
      `Is halved`,
      `Remains same`,
      `Becomes zero`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is halved`
  },
  {
    question: `Out of five resistances of resistance 𝑅 Ω each 3 are connected in parallel and are joined to the rest 2 in series. Find the resultant resistance`,
    options: [
      `(3 7)𝑅 Ω`,
      `(7 3)𝑅 Ω`,
      `(7 8)𝑅 Ω`,
      `(8 7)𝑅 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (7 3)𝑅 Ω`
  },
  {
    question: `If the resistivity of an alloy is 𝜌′ and that of constituent metal is 𝜌 then`,
    options: [
      `𝜌’> 𝜌`,
      `𝜌’< 𝜌`,
      `𝜌′ = 𝜌`,
      `There is no simple relation between 𝜌 and 𝜌′`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝜌’> 𝜌`
  },
  {
    question: `The mass of a substance liberated when a charge ′𝑞′ flows through an electrolyte is proportional to`,
    options: [
      `𝑞`,
      `1/𝑞`,
      `𝑞2`,
      `1/𝑞2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑞`
  },
  {
    question: `If the resistance of a conductor is 5Ω at 50℃ and 7Ω at 100℃ then the mean temperature coefficient of resistance of the material is`,
    options: [
      `0.008/℃`,
      `0. .006/℃`,
      `0.004/℃`,
      `0.001/℃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.008/℃`
  },
  {
    question: `The resistance of a galvanometer coil is R, then the shunt resistance required to convert it into a ammeter of range 4times, will be`,
    options: [
      `4R`,
      `R/3`,
      `R/4`,
      `R/5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) R/3`
  },
  {
    question: `All bulbs in figure, are identical. Which bulb lights brightly?`,
    options: [
      `1`,
      `2`,
      `3`,
      `4`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1`
  },
  {
    question: `An ammeter gives full scale deflection when current 1.0 𝐴 is passed in it. To convert it into 10 𝐴 range ammeter, the ratio of its resistance and the shunt resistance will be`,
    options: [
      `1 : 9`,
      `1 : 10`,
      `1 : 11`,
      `9 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9 : 1`
  },
  {
    question: `Same current is being passed through a copper voltmeter and a silver voltmeter. The rate of increase in weights of the cathode of the two voltmeters will be proportional to`,
    options: [
      `Atomic masses`,
      `Atomic number`,
      `Relative densities`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Atomic masses`
  },
  {
    question: `For measurement of potential difference, potentiometer is preferred in comparison to voltmeter because`,
    options: [
      `Potentiometer is more sensitive than voltmeter`,
      `The resistance of potentiometer is less than voltmeter`,
      `Potentiometer is cheaper than voltmeter`,
      `Potentiometer does not take current from the circuit`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Potentiometer does not take current from the circuit`
  },
  {
    question: `The resistance of an ideal ammeter is`,
    options: [
      `Infinite`,
      `Very high`,
      `Small`,
      `Zero`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Zero`
  },
  {
    question: `In the given circuit the current 𝐼1 is`,
    options: [
      `0.4 𝐴`,
      `−0.4 𝐴`,
      `0.8 𝐴`,
      `−0.8 𝐴 30  40  40  40V I 3 I1 I 2 80V P a g e | 12`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) −0.4 𝐴`
  },
  {
    question: `The chemical equivalent of copper and zinc are 32 and 108 respectively. When copper and silver voltmeters are connected in series and electric current is passed through for sometime, 1.6 𝑔 of copper is deposited. Then, the mass of silver deposited will be`,
    options: [
      `3.5 𝑔`,
      `2.8 𝑔`,
      `5.4 𝑔`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5.4 𝑔`
  },
  {
    question: `When current is passed in antimony-bismuth couple, then`,
    options: [
      `The junction becomes hot when the current is from bismuth to antimony`,
      `The junction becomes hot when current flows from antimony to bismuth`,
      `Both junctions becomes hot`,
      `Both junctions becomes cold`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The junction becomes hot when current flows from antimony to bismuth`
  },
  {
    question: `The current inside a copper voltameter`,
    options: [
      `Is half the outside value`,
      `Is the same as the outside value`,
      `Is twice the outside value`,
      `Depends on the concentration of 𝐶𝑢𝑆𝑂4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Is the same as the outside value`
  },
  {
    question: `𝐼 − 𝑉 characteristic of a copper wire of length 𝐿 and area of cross-section 𝐴 is shown in figure. The slope of the curve becomes`,
    options: [
      `More if the experiment is performed at higher temperature`,
      `More if a wire of steel of same dimension is used`,
      `More if the length of the wire increased`,
      `Less if the length of the wire increased`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) More if the experiment is performed at higher temperature`
  },
  {
    question: `A heater of 220 V heats a volume of water in 5 min time. A heater of 110 V heats the same volume of water is`,
    options: [
      `5 min`,
      `8 min`,
      `4 × 104 min`,
      `20 min`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 20 min`
  },
  {
    question: `Two wires having resistance of 2Ω and 4Ω are connected to same voltage. Ratio of heat dissipated at resistance is`,
    options: [
      `1 :2`,
      `4 :3`,
      `2 :1`,
      `5 :2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 :1`
  },
  {
    question: `A group of N cells whose emf varies directly with the internal resistance as per the equation 𝐸𝑁 = 1.5𝑟𝑁 are connected as shown in the figure. The current I in the circuit is`,
    options: [
      `5.1A`,
      `0.51A`,
      `1.5A`,
      `0.15A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.5A`
  },
  {
    question: `For the network shown in the figure the value of the current 𝑖 is`,
    options: [
      `9𝑉 35`,
      `5𝑉 18`,
      `5𝑉 9`,
      `18𝑉 5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5𝑉 18`
  },
  {
    question: `Which of the following is not a correct statement 4 3 6 4 2 V i P a g e | 13`,
    options: [
      `Resistivity of electrolytes decreases on increasing temperature`,
      `Resistance of mercury falls on decreasing its temperature`,
      `When joined in series a 40 𝑊 bulb glows more than a 60 𝑊 bulb`,
      `Resistance of 40 𝑊 bulb is less than the resistance of 60 𝑊 bulb`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Resistance of 40 𝑊 bulb is less than the resistance of 60 𝑊 bulb`
  },
  {
    question: `For a certain thermocouple the emf is 𝐸 = 𝑎𝑇+ 𝑏𝑇2, where 𝑡 (in℃) is the temperature of hot junction, the cold junction is at 0 ℃. The value of contants 𝑎 and 𝑏 are 10 × 10−6 and 0.02 × 10−6 respectively, then the temperature of inversion (in℃) will be`,
    options: [
      `150`,
      `250`,
      `500`,
      `750`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 500`
  },
  {
    question: `In the given figure, potential difference between 𝐴 and 𝐵 is`,
    options: [
      `0`,
      `5 𝑣𝑜𝑙𝑡`,
      `10 𝑣𝑜𝑙𝑡`,
      `15 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10 𝑣𝑜𝑙𝑡`
  },
  {
    question: `A cell of emf E is connected across a resistance R. the potential difference between the terminals of the cell is found to be V volt. Then the internal resistance of the cell must be`,
    options: [
      `(E-V)`,
      `(𝐸 − 𝑉) 𝑉 𝑅`,
      `2(𝐸 − 𝑉)𝑅 𝐸`,
      `2(𝐸 − 𝑉)𝑉 𝑅`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (𝐸 − 𝑉) 𝑉 𝑅`
  },
  {
    question: `Electric field (E) and current density (J) have relation`,
    options: [
      `𝐸 ∝ 𝐽−1`,
      `𝐸 ∝ 𝐽`,
      `𝐸 ∝ 1 𝐽2`,
      `𝐸2 ∝ 1 𝐽`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐸 ∝ 𝐽`
  },
  {
    question: `In a network as shown in the figure, the potential difference across the resistance 2R is (the cell has an emf of E volt and has no ingternal resistance)`,
    options: [
      `2E`,
      `4𝐸 7`,
      `𝐸 7`,
      `E`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4𝐸 7`
  },
  {
    question: `Then the ratio of their drift velocities is`,
    options: [
      `1 : 2`,
      `3 : 2`,
      `1 : 1`,
      `1 ∶ 21/2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 : 2`
  },
  {
    question: `A 100 𝑊 bulb produces an electric field of 2.9 𝑉/𝑚 at a point 3 𝑚 away. If the bulb is replaced by 400 𝑊 bulb without disturbing other conditions, then the electric field produced at the same point is`,
    options: [
      `2.9 𝑉/𝑚`,
      `3.5 𝑉/𝑚`,
      `5 𝑉/𝑚`,
      `5.8 𝑉/𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5.8 𝑉/𝑚`
  },
  {
    question: `The neutral temperature 𝑡𝑛 = 285°C is constant for a Cu-Fe thermocouple. When the cold junction is at 0°C, the value of inversion temperature is 𝑡𝑖 = 570°C but if the cold junction is at 10°C, the inversion temperature (𝑡𝑖) will be`,
    options: [
      `550°C`,
      `560°C`,
      `570°C`,
      `580°C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 560°C`
  },
  {
    question: `When a battery connected across a resistor of 16 Ω, the voltage across the resistor is 12 V. When the same battery is connected across a resistor of 10 Ω, voltage across it is 11V. The internal resistance of the battery (in ohm) is`,
    options: [
      `10 7`,
      `20 7`,
      `25 7`,
      `30 7`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 7`
  },
  {
    question: `For obtaining chlorine by electrolysis a current of 100 kW and 125 V is used. (Electro chemical equivalent of chlorine is 0.367 × kgC−1). The amount of chlorine obtained in one minute will be`,
    options: [
      `1.7616 g`,
      `17.616 g`,
      `0.17161 g`,
      `1.7616 kg`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 17.616 g`
  },
  {
    question: `𝑉 − 𝑖 graphs for parallel and series combination of two identical resistors are as shown in figure. Which graph represents parallel combination R 4 R 2 R 30 V 10K 10K 10K A B D P a g e | 14`,
    options: [
      `𝐴`,
      `𝐵`,
      `𝐴 and 𝐵 both`,
      `Neither 𝐴 nor 𝐵`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐴`
  },
  {
    question: `As the temperature rises the resistance offered by metal`,
    options: [
      `Increase`,
      `Decrease`,
      `Remains same`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Increase`
  },
  {
    question: `A wire 100𝑐𝑚 long and 2.0 𝑚𝑚 diameter has a resistance of 0.7 𝑜ℎ𝑚, the electrical resistivity of the material is`,
    options: [
      `4.4 × 10−6 𝑜ℎ𝑚× 𝑚`,
      `2.2 × 10−6𝑜ℎ𝑚× 𝑚`,
      `1.1 × 10−6 𝑜ℎ𝑚× 𝑚`,
      `0.22 × 10−6 𝑜ℎ𝑚× 𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.2 × 10−6𝑜ℎ𝑚× 𝑚`
  },
  {
    question: `In the Wheatstone’s bridge (shown in figure) 𝑋 = 𝑌 and 𝐴 > 𝐵. The direction of the current between 𝑎𝑏 will be`,
    options: [
      `From 𝑎 to 𝑏`,
      `From 𝑏 to 𝑎`,
      `From 𝑏 to 𝑎 through 𝑐`,
      `From 𝑎 to 𝑏 through 𝑐`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) From 𝑏 to 𝑎`
  },
  {
    question: `The chemical equivalent of silver is 108. If the current in a silver voltmeter is 2 𝑎𝑚𝑝, the time required to deposit 27 𝑔𝑟𝑎𝑚𝑠 of silver will be`,
    options: [
      `8.57 ℎ𝑟𝑠`,
      `6.70 ℎ𝑟𝑠`,
      `3.35 ℎ𝑟𝑠`,
      `12.50 ℎ𝑟𝑠`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3.35 ℎ𝑟𝑠`
  },
  {
    question: `By increasing the temperature, the specific resistance of a conductor and a semiconductor`,
    options: [
      `Increases for both`,
      `Decreases for both`,
      `Increases, decreases`,
      `Decreases, increases`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Increases, decreases`
  },
  {
    question: `Two electric bulbs whose resistances are in the ratio of 1 ∶ 2 are connected in parallel to a constant voltage source. The powers dissipated in them have the ratio`,
    options: [
      `1 :2`,
      `1 :1`,
      `2 :1`,
      `1 :4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 :1`
  },
  {
    question: `Two cells of same emf 𝐸 but of different internal resistances 𝑟1and 𝑟2are connected in series with an external resistance 𝑅. The potential drop across the first cell is found to be zero. The external resistance 𝑅 is`,
    options: [
      `𝑟1 + 𝑟2`,
      `𝑟1 − 𝑟2`,
      `𝑟2 − 𝑟1`,
      `𝑟1𝑟2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑟1 − 𝑟2`
  },
  {
    question: `A thermocouple is made from two metals, Antimony and Bismuth. If one junction of the couple is kept hot and the other is kept cold, then, an electric current will`,
    options: [
      `Flow from Antimony to Bismuth at the hot junction`,
      `Flow from Bismuth to Antimony at the cold junction`,
      `Not flow through the thermocouple`,
      `Flow from Antimony to Bismuth at the cold junction`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Flow from Antimony to Bismuth at the cold junction`
  },
  {
    question: `The resistivity of a wire`,
    options: [
      `Increase with the length of the wire`,
      `Decreases with the area of cross-section`,
      `Decreases with the length and increases with the cross-section of wire`,
      `None of the above statement is correct`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of the above statement is correct`
  },
  {
    question: `In the circuit shown figure potential difference between 𝑋 and 𝑌 will be X Y B A a b c d P a g e | 15`,
    options: [
      `Zero`,
      `20 V`,
      `60 V`,
      `120 V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 120 V`
  },
  {
    question: `Heat produced (cals) in a resistance 𝑅 when a current 𝐼 amperes flows through it for 𝑡 seconds is given by the expression`,
    options: [
      `𝐼2𝑅𝑡 4.2`,
      `𝐼𝑅2𝑡 4.2`,
      `4.2𝐼𝑅 𝑡2`,
      `𝐼𝑅𝑡2 4.2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐼2𝑅𝑡 4.2`
  },
  {
    question: `Kirchoff’s second law for the analysis of circuit is based on`,
    options: [
      `Conversion of charge`,
      `Conversion of energy`,
      `Conversion of both charge and energy`,
      `Conversion of momentum of electron`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Conversion of energy`
  },
  {
    question: `A constant voltage is applied between the two ends of a uniform metallic wire. Some heat is developed in it. The heat developed is doubled if`,
    options: [
      `Both the length and radius of wire are halved`,
      `Both the length and radius of wire are doubled`,
      `The radius of wire is doubled`,
      `The length of wire is doubled`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Both the length and radius of wire are doubled`
  },
  {
    question: `If an increase in length of copper wire is 0.5% due to stretching, the percentage increase in its resistance will be`,
    options: [
      `0.1%`,
      `0.2%`,
      `1%`,
      `2%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1%`
  },
  {
    question: `The figure here shows a portion of a circuit. What are the magnitude and direction of the current 𝑖 in the lower right-hand wire`,
    options: [
      `7 𝐴`,
      `8 𝐴`,
      `6 𝐴`,
      `2 𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 𝐴`
  },
  {
    question: `The current flowing through a wire depends on time as 𝐼 = 3𝑡2 + 2𝑡 + 5. The charge flowing through the cross-section of the wire in time from 𝑡 = 0 to 𝑡 = 2 sec. is`,
    options: [
      `22 C`,
      `20 C`,
      `18 C`,
      `5 C`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 22 C`
  },
  {
    question: `We have a galvanometer of resistance 25Ω. It is shunted by a 2.5 Ω wire. The part of total current that flows through the galvanometer is given as`,
    options: [
      `𝐼 𝐼0 = 1 11`,
      `𝐼 𝐼0 = 1 10`,
      `𝐼 𝐼0 = 3 11`,
      `I I0 = 4 11`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐼 𝐼0 = 1 11`
  },
  {
    question: `A current of 3 𝑎𝑚𝑝. flows through the 2Ω resistor shown in the circuit. The power dissipated in the 5Ω resistor is`,
    options: [
      `1 𝑤𝑎𝑡𝑡`,
      `5 𝑤𝑎𝑡𝑡`,
      `4 𝑤𝑎𝑡𝑡`,
      `2 𝑤𝑎𝑡𝑡`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 𝑤𝑎𝑡𝑡`
  },
  {
    question: `One junction of a certain thermoelectric couple is at a fixed temperature 𝑇𝑟 and the other junction is at temperature 𝑇. The thermo-electromotive force for this is expressed by 𝐸 = 𝑘(𝑇 − 𝑇𝑟) [𝑇0 − 1 2 (𝑇 + 𝑇𝑟)]. 20 Ω 40 Ω X 120 V Y P a g e | 16 6 Ω 6 Ω 50Ω At temperature 𝑇 = 1 2 𝑇0, the thermoelectric power is`,
    options: [
      `1 2 𝑘𝑇0`,
      `𝑘𝑇0`,
      `1 2 𝑘𝑇0 2`,
      `1 2 𝑘 (𝑇0 − 𝑇𝑟)2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 2 𝑘𝑇0`
  },
  {
    question: `In a given network, each resistance has value of 6Ω. The point X is connected to point A by a copper wire of negligible resistance and point Y is connected to point B by the same wire. The effective resistance between X and Y will be`,
    options: [
      `18Ω`,
      `6 Ω`,
      `3 Ω`,
      `2 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 Ω`
  },
  {
    question: `Faraday’s laws of electrolysis are related to`,
    options: [
      `The atomic number of positive ion`,
      `The equivalent weight of electrolyte`,
      `The atomic number of negative ion`,
      `The velocity of positive ion`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The equivalent weight of electrolyte`
  },
  {
    question: `A cell having emf of 1.5V, when connected across a resistance of 14 Ω, produces a voltage of only 1.4V across this resistance. The internal resistance of the cell must be`,
    options: [
      `1 Ω`,
      `14 Ω`,
      `15 Ω`,
      `21 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 Ω`
  },
  {
    question: `Two similar accumulators each of emf E and internal resistance r are connected as shown in the following figure. Then, the potential difference between x and y is`,
    options: [
      `2E`,
      `E`,
      `Zero`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zero`
  },
  {
    question: `In a meter bridge experiment, the ratio of the left gap resistance to right gap resistance is 2:3, the balance point from left is`,
    options: [
      `60 cm`,
      `50 cm`,
      `40 cm`,
      `20 cm`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40 cm`
  },
  {
    question: `A conductor wire having 1029 free electrons/m3 carries a current of 20A. If the cross-section of the wire is 1mm2, then the drift velocity of electrons will be`,
    options: [
      `6.25 × 10−3ms−1`,
      `1.25 × 10−5ms−1`,
      `1.25 × 10−3ms−1`,
      `1.25 × 10−4ms−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.25 × 10−3ms−1`
  },
  {
    question: `A potentiometer wire of length 10 m and resistance 20 Ω is connected is series with a 15V battery and an external resistance 40 Ω. A secondary cell of emf E in the secondary circuit is balanced by 240 cm long the potentiometer wire. The emf E of the cell is`,
    options: [
      `2.4V`,
      `1.2V`,
      `2.0V`,
      `3V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.2V`
  },
  {
    question: `In circuit shown below, the resistances are given in ohm and the battery is assumed ideal with emf equal to 3V. The voltage across the resistance 𝑅4 is`,
    options: [
      `0.4V`,
      `0.6V`,
      `1.2V`,
      `1.5V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.4V`
  },
  {
    question: `Constant current is flowing through a linear conductor of non-uniform area of cross-section. The charge flowing per second through the area of conductor at any cross-section is`,
    options: [
      `Proportional to the area of cross- section`,
      `Inversely proportional to the area of cross-section`,
      `Independent of the area of cross-section`,
      `Dependent on the length of conductor`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Independent of the area of cross-section`
  },
  {
    question: `Total surface area of a cathode is 0.05𝑚2 and 1 𝐴 current passes through it for 1 ℎ𝑜𝑢𝑟. Thickness of nickle 30Ω 𝑅5 𝑅4 60Ω 30Ω 𝑅3 𝑅1 𝑅2 50Ω+ 3V | | X y 6 Ω B A X Y P a g e | 17 deposited on the cathode is (Given that density of nickle = 9𝑔/𝑐𝑐 and it’s E.C.E. = 3.04 × 10−4𝑔/𝐶)`,
    options: [
      `2.4 𝑚`,
      `0.24 𝜇𝑚`,
      `2.4 𝜇𝑚`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.4 𝜇𝑚`
  },
  {
    question: `An AC generator of 220 V have internal resistance 𝑟 = 10 Ω and external resistance 𝑅 = 100 Ω. What is the power developed in the external circuit?`,
    options: [
      `227 W`,
      `325 W`,
      `400 W`,
      `500 W`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 400 W`
  },
  {
    question: `In the circuit shown here, what is the value of the unknown resistor 𝑅 so that the total resistance of the circuit between points 𝑃 and 𝑄 is also equal to 𝑅`,
    options: [
      `3 𝑜ℎ𝑚`,
      `√39 𝑜ℎ𝑚`,
      `√69 𝑜ℎ𝑚`,
      `10 𝑜ℎ𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) √69 𝑜ℎ𝑚`
  },
  {
    question: `The resistance of a wire is 𝑅. If the length of the wire is doubled by stretching, then the new resistance will be`,
    options: [
      `2𝑅`,
      `4𝑅`,
      `𝑅`,
      `𝑅 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4𝑅`
  },
  {
    question: `By ammeter, which of the following can be measured`,
    options: [
      `Electric potential`,
      `Potential difference`,
      `Current`,
      `Resistance`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Current`
  },
  {
    question: `The maximum power drawn out of the cell from a source is given by (where 𝑟 is internal resistance)`,
    options: [
      `𝐸2/2𝑟`,
      `𝐸2/4𝑟`,
      `𝐸2/𝑟`,
      `𝐸2/3𝑟`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐸2/4𝑟`
  },
  {
    question: `The emf is thermocouple changes sign at 600 K. If the neutral temperature is 210℃, the temperature of cold junction is`,
    options: [
      `180 K`,
      `117 K`,
      `93℃`,
      `90℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 93℃`
  },
  {
    question: `How many minimum number of 2 Ω resistance can be connected to have an effective resistance of 1.5 Ω?`,
    options: [
      `3`,
      `2`,
      `4`,
      `6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `Equal potentials are applied on an iron and copper wire of same length. In order to have the same current flow in the two wires, the ration 𝑟 (iron)/𝑟 (copper) of their radii must be (Given that specific resistance of iron = 1.0 × 10−7 𝑜ℎ𝑚− 𝑚 and specific resistance of copper = 1.7 × 10−8𝑜ℎ𝑚− 𝑚)`,
    options: [
      `About 1.2`,
      `About 2.4`,
      `About 3.6`,
      `About 4.8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) About 2.4`
  },
  {
    question: `A fuse wire of circuit cross-section and having diameter of 0.4 mm, allows 3 A of current to pass through it. But if another fuse wire of same material and circular cross-section and having diameter of 0.6 mm is taken, then the amount of current passed through the fuse is`,
    options: [
      `3 A`,
      `3 × √3 2 A`,
      `3 × ( 3 2) 3/2 A`,
      `3 × (3 2) A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 × ( 3 2) 3/2 A`
  },
  {
    question: `Two identical cells weather connected in parallel or in series gives the same current when connected to an external resistance 1.5 Ω. Find the value of internal resistance of each cell.`,
    options: [
      `1 Ω`,
      `0.5 Ω`,
      `Zero`,
      `1.5 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.5 Ω`
  },
  {
    question: `In the shown arrangement of the experiment of the meter bridge if AC corresponding to null deflection of galvanometer is 𝑥, what would be its value if the radius of the wire AB is doubled?`,
    options: [
      `𝑥`,
      `𝑥/4`,
      `4𝑥`,
      `2𝑥`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑥`
  },
  {
    question: `A current of two ampere is flowing through a cell of e. m. f. 5 𝑣𝑜𝑙𝑡 and internal resistance 0.5 𝑜ℎ𝑚 from negative to positive electrode. If the potential of negative electrode is 10𝑉, the potential of positive electrode will be | | G X C R 1 R 2 B A R 10 3 P 3 Q P a g e | 18`,
    options: [
      `5 𝑉`,
      `14 𝑉`,
      `15 𝑉`,
      `16 𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 14 𝑉`
  },
  {
    question: `Two bulbs 25 W, 220 V and 100 W, 220 V are given. Which has higher resistance?`,
    options: [
      `25 W bulb`,
      `100 W bulb`,
      `Both bulbs will have equal resistance`,
      `Resistance of bulbs cannot be compared`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25 W bulb`
  },
  {
    question: `The temperature of cold, hot junction of a thermocouple is 0℃ and 𝑇℃ respectively. The thermo-emf produced is 𝐸 = 𝐴𝑇− 1 2 𝐵𝑇2. If 𝐴 = 16, 𝐵 = 0.080, the temperature of inversion will be`,
    options: [
      `100℃`,
      `300℃`,
      `400℃`,
      `500℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 400℃`
  },
  {
    question: `The equivalent resistance across A and B is`,
    options: [
      `2Ω`,
      `3Ω`,
      `4Ω`,
      `5Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4Ω`
  },
  {
    question: `The length of a potentiometer wire is 5m. An electron in this wire experiences a force of 4.8 × 10−19N, emf of the main cell used in potentiometer is`,
    options: [
      `3 V`,
      `15 V`,
      `1.5 V`,
      `5 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 15 V`
  },
  {
    question: `When a piece of aluminium wire of finite length is drawn through a series of dies to reduce its diameter to half its original value, its resistance will become`,
    options: [
      `Two times`,
      `Four times`,
      `Eight times`,
      `Sixteen times`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Sixteen times`
  },
  {
    question: `A voltmeter of resistance 1000 Ω is connected across a resistance of 500 Ω in the given circuit. What will be the reading of voltmeter`,
    options: [
      `1 𝑉`,
      `2 𝑉`,
      `6 𝑉`,
      `4𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4𝑉`
  },
  {
    question: `A resistance of 4Ω and a wire of length 5 𝑚𝑒𝑡𝑟𝑒𝑠 and resistance 5Ω are joined in series and connected to a cell of e.m.f. 10 𝑉 and internal resistance 1Ω. A parallel combination of two identical cells is balanced across 300 𝑐𝑚 of the wire. The e.m.f. 𝐸 of each cell is`,
    options: [
      `1.5 𝑉`,
      `3.0 𝑉`,
      `0.67 V`,
      `1.33 𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.0 𝑉`
  },
  {
    question: `Current flows through a metabolic conductor whose area of cross-section increases in the direction of the current. If we move in this direction,`,
    options: [
      `The carrier density will change`,
      `The current will change`,
      `The drift velocity will decrease`,
      `The drift velocity will increase`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The drift velocity will decrease`
  },
  {
    question: `The resistance will be least in a wire with dimension`,
    options: [
      `𝐿/2,2𝐴`,
      `2𝐿, 𝐴`,
      `𝐿, 𝐴`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐿/2,2𝐴`
  },
  {
    question: `At room temperature, copper has free electron density of 8.4 × 1028 per 𝑚3. The copper conductor has a 10V E 3m 4 E 1 5, 5m G 10 Ω 4 Ω 4 Ω 4 Ω 4 Ω B A P a g e | 19 cross-section of 10−6𝑚2 and carries a current of 5.4 𝐴. The electron drift velocity in copper is`,
    options: [
      `400 𝑚/𝑠`,
      `0.4 𝑚/𝑠`,
      `0.4 𝑚𝑚/𝑠`,
      `72 𝑚/𝑠`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.4 𝑚𝑚/𝑠`
  },
  {
    question: `A battery is charged at a potential of 15 𝑉 in 8 hours when the current flowing is 10 𝐴. The battery on discharge supplies a current of 5 𝐴 for 15 hours. The mean terminal voltage during discharge is 14 𝑉. The "𝑊𝑎𝑡𝑡− ℎ𝑜𝑢𝑟" efficiency of battery is`,
    options: [
      `80%`,
      `90%`,
      `87.5%`,
      `82.5%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 87.5%`
  },
  {
    question: `A combination of two resistance of 2 W and 2/3 W connected in parallel is joined across a battery of emf of 3 V and of negligible internal resistance. The energy given out per sec will be`,
    options: [
      `1 2 × 3 ×3 J`,
      `1 2 × 1 3 × 3 × 3 J`,
      `2 × 3 J`,
      `3 × 3 × 2 J`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 × 3 × 2 J`
  },
  {
    question: `The length of the wire is doubled. Its conductance will be`,
    options: [
      `Unchanged`,
      `Halved`,
      `Quadrupled`,
      `1/4 of the original value`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Halved`
  },
  {
    question: `In the circuit as shown in the figure, the heat produced by 6 𝑜ℎ𝑚 resistance due to current flowing in it is 60 𝑐𝑎𝑙𝑜𝑟𝑖𝑒 per 𝑠𝑒𝑐𝑜𝑛𝑑. The heat generated across 3 𝑜ℎ𝑚 resistance per second will be`,
    options: [
      `30 𝑐𝑎𝑙𝑜𝑟𝑖𝑒`,
      `60 𝑐𝑎𝑙𝑜𝑟𝑖𝑒`,
      `100 𝑐𝑎𝑙𝑜𝑟𝑖𝑒`,
      `120 𝑐𝑎𝑙𝑜𝑟𝑖𝑒`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 120 𝑐𝑎𝑙𝑜𝑟𝑖𝑒`
  },
  {
    question: `Two identical incandescent light bulbs are connected as shown in the figure. When the circuit is an AC voltage source of frequency 𝑓, which of the following observations will be correct?`,
    options: [
      `Both bulbs will glow alternatively`,
      `Both bulbs will glow with same brightness provided frequency 𝑓 = 1 2𝜋 √(1/𝐿𝐶)`,
      `Bulb 𝑏1 will light up initially and goes off, bulb 𝑏2 will be ON constantly`,
      `Bulb 𝑏1 will blink and bulb 𝑏2 will be ON constantly`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Both bulbs will glow with same brightness provided frequency 𝑓 = 1 2𝜋 √(1/𝐿𝐶)`
  },
  {
    question: `A wire of length 5𝑚 and radius 1 𝑚𝑚 has a resistance of 1 𝑜ℎ𝑚. What length of the wire of the same material at the same temperature and of radius 2 𝑚𝑚 will also have a resistance of 1 𝑜ℎ𝑚`,
    options: [
      `1.25 𝑚`,
      `2.5 𝑚`,
      `10 𝑚`,
      `20 𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 20 𝑚`
  },
  {
    question: `It is possible that any some constant value of emf, but the potential difference between the plates is zero?`,
    options: [
      `Not, possible`,
      `Yes, if another identical battery is joined in series`,
      `Yes, if another identical battery is joined in opposition`,
      `Yes, possible, if another similar battery is joined in parallel`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Yes, if another identical battery is joined in opposition`
  },
  {
    question: `Six equal resistances are connected between point s 𝑃, 𝑄 and 𝑅 as shown in the figure. Then the net resistance will be maximum between`,
    options: [
      `𝑃 and 𝑄`,
      `𝑄 and 𝑅`,
      `𝑃 and 𝑅`,
      `Any two points`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑃 and 𝑄`
  },
  {
    question: `When a 12Ω resistor is connected with a moving coil galvanometer then its deflection reduces from 50 divisions to 10 divisions. The resistance of the galvanometer is`,
    options: [
      `24 Ω`,
      `36 Ω`,
      `48 Ω`,
      `60 Ω R Q P 2 3 6 4 P a g e | 20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 48 Ω`
  },
  {
    question: `A galvanometer having a resistance of 8 𝑜ℎ𝑚 is shunted by a wire of resistance 2 𝑜ℎ𝑚. If the total current is 1 𝑎𝑚𝑝, the part of it passing through the shunt will be`,
    options: [
      `0.25 𝑎𝑚𝑝`,
      `0.8 𝑎𝑚𝑝`,
      `0.2 𝑎𝑚𝑝`,
      `0.5 𝑎𝑚𝑝`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.8 𝑎𝑚𝑝`
  },
  {
    question: `Resistors of 1, 2, 3 𝑜ℎ𝑚 are connected in the form of a triangle. If a 1.5 volt cell of negligible internal resistance is connected across 3 𝑜ℎ𝑚 resistor, the current flowing through this resistance will be`,
    options: [
      `0.25 𝑎𝑚𝑝`,
      `0.5 𝑎𝑚𝑝`,
      `1.0 𝑎𝑚𝑝`,
      `1.5 𝑎𝑚𝑝`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.5 𝑎𝑚𝑝`
  },
  {
    question: `A galvanometer of resistance 50 Ω is connected to a battery of 3V along with a resistance of 2950 Ω in series. A full scale deflection of 30 divisions is obtained in the galvanometer. In order to reduce this deflection to 20 divisions, the resistance in series should be`,
    options: [
      `5050 Ω`,
      `5550 Ω`,
      `6050 Ω`,
      `4450 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4450 Ω`
  },
  {
    question: `If a 30 𝑉, 90 𝑊 bulb is to be worked on a 120 𝑉 line, a resistance of how many ohms should be connected in series with the bulb`,
    options: [
      `10 𝑜ℎ𝑚`,
      `20 𝑜ℎ𝑚`,
      `30 𝑜ℎ𝑚`,
      `40 𝑜ℎ𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30 𝑜ℎ𝑚`
  },
  {
    question: `𝑛 equal resistors are first connected in series and then connected in parallel. What is the ratio of the maximum to the minimum resistance`,
    options: [
      `𝑛`,
      `1 𝑛2`,
      `𝑛2`,
      `1 𝑛`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑛2`
  },
  {
    question: `Figure shows a simple potentiometer circuit for measuring a small e.m.f. produced by a thermocouple. The meter wire 𝑃𝑄 has a resistance 5 Ω and the driver cell has an e.m.f. of 2 𝑉. If a balance point is obtained 0.600𝑚 along 𝑃𝑄 when measuring an e.m.f. of 6.00 𝑚𝑉, what is the value of resistance 𝑅`,
    options: [
      `995 Ω`,
      `1995 Ω`,
      `2995 Ω`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 995 Ω`
  },
  {
    question: `The ammeter has range 1 𝑎𝑚𝑝𝑒𝑟𝑒 without shunt. The range can be varied by using different shunt resistances. The graph between shunt resistance and range will have the nature`,
    options: [
      `𝑃`,
      `𝑄`,
      `𝑅`,
      `𝑆`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑄`
  },
  {
    question: `In a Wheatstone’s network 𝑃 = 2Ω, 𝒬 = 2Ω, R = 2Ω and S = 3Ω. The resistance with which S is to be shunted in order that the bridge may be balanced is`,
    options: [
      `1 Ω`,
      `2 Ω`,
      `4 Ω`,
      `6 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6 Ω`
  },
  {
    question: `In the Wheatstone’s bridge shown, 𝑃 = 2Ω, 𝑄 = 3Ω, 𝑅 = 6Ω and 𝑆 = 8 Ω. In order to obtain balance, shunt resistance across ′𝑆′ must be P a g e | 21`,
    options: [
      `2 Ω`,
      `3 Ω`,
      `6 Ω`,
      `8 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 Ω`
  },
  {
    question: `If 2.2𝑘𝑊 power is transmitted through a 100Ω line at 22,000𝑉, the power loss in the form of heat will be`,
    options: [
      `0.1 𝑊`,
      `1 𝑊`,
      `10 𝑊`,
      `100 𝑊`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 𝑊`
  },
  {
    question: `The resistance of a bulb filament is 100 Ω at a temperature of 100°C. If its temperature coefficient of resistance be 0.005 per°C, its resistance will become 200 Ω at a temperature of`,
    options: [
      `300°C`,
      `400°C`,
      `500°C`,
      `200°C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 400°C`
  },
  {
    question: `Find out the value of current through 2Ω resistance for the given circuit`,
    options: [
      `5 𝐴`,
      `2 𝐴`,
      `Zero`,
      `4 𝐴`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zero`
  },
  {
    question: `Which of the plots shown in figure may represent the thermal energy produced in a resistor in a given time as a function of the electric current?`,
    options: [
      `𝑎`,
      `𝑏`,
      `𝑐`,
      `𝑑`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑑`
  },
  {
    question: `Two resistors of resistances 200 𝑘Ω and 1𝑀Ω respectively form a potential divider with outer junctions maintained at potentials of +3𝑉 and −15𝑉. Then, the potential at the junction between the resistors is`,
    options: [
      `+1 𝑉`,
      `−0.6 𝑉`,
      `0 𝑉`,
      `−12 𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0 𝑉`
  },
  {
    question: `In a Wheatstone bridge, 𝑃 = 90Ω, 𝑄 = 110Ω, 𝑅 = 40Ω and 𝑆 = 60Ω and a cell of 4 V emf. Then the potential difference between the diagonal along which a galvanometer is connected is`,
    options: [
      `−0.2 V`,
      `+0.2 V`,
      `−1 V`,
      `+1 V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) −0.2 V`
  },
  {
    question: `A thermo couple develops 200𝜇 𝑉 between 0℃ and 100℃. If it develops 64 𝜇 𝑉 and 76 𝜇 𝑉 respectively between (0℃ − 32℃) and (32℃ − 70℃) then what will be the thermo 𝑒𝑚𝑓 it develops between 70℃ and 100℃`,
    options: [
      `65 𝜇 𝑉`,
      `60 𝜇 𝑉`,
      `55 𝜇 𝑉`,
      `50 𝜇 𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60 𝜇 𝑉`
  },
  {
    question: `In a potentiometer arrangement, a cell of emf 1.5V gives a balance point at 27cm length of wire. If the cell is replaced by another cell and balance point shifts to 54cm, the emf of the second cell is`,
    options: [
      `3V`,
      `1.5V`,
      `0.75V`,
      `2.25V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3V`
  },
  {
    question: `Which of the following is not reversible`,
    options: [
      `Joule effect`,
      `Peltier effect`,
      `Seebeck effect`,
      `Thomson effect`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Joule effect`
  },
  {
    question: `The equivalent resistance of the circuit shown in the figure is`,
    options: [
      `8 Ω`,
      `6 Ω`,
      `5 Ω`,
      `4 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 Ω`
  },
  {
    question: `A battery having e.m.f. 5𝑉 and internal resistance 0.5 Ω is connected with a resistance of 4.5 Ω then the 2 2 2 2 10V 5 10 2 20V S R Q P P a g e | 22 4Ω voltage at the terminals of battery is`,
    options: [
      `4.5 𝑉`,
      `4 𝑉`,
      `0 𝑉`,
      `2 𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4.5 𝑉`
  },
  {
    question: `If the electric current through an electric bulb is 3.2 A, the number of electrons flow through it in one second is`,
    options: [
      `2 × 109`,
      `2 × 1019`,
      `3.2 × 1019`,
      `1.6 × 1018`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 × 1019`
  },
  {
    question: `Two tangent galvanometer A and B are identical except in their number of turns. They are connected in series. On passing a current through them, deflections of 60° and 30° are produced. The ratio of the number of units A and B is`,
    options: [
      `1:3`,
      `3:1`,
      `1:2`,
      `2:1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3:1`
  },
  {
    question: `A solenoid is at potential difference of 60 𝑉 and current flowing through it is 15 𝑎𝑚𝑝𝑒𝑟𝑒, then the resistance of coil will be`,
    options: [
      `4Ω`,
      `8Ω`,
      `0.25Ω`,
      `2Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4Ω`
  },
  {
    question: `A 50 𝑜ℎ𝑚 galvanometer gets full scale deflection when a current of 0.01 𝐴 passes through the coil. When it is converted to a 10 𝐴 ammeter, the shunt resistance is`,
    options: [
      `0.01 Ω`,
      `0.05 Ω`,
      `2000 Ω`,
      `5000 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.05 Ω`
  },
  {
    question: `Sensitivity of potentiometer can be increased by`,
    options: [
      `Increasing the e.m.f. of the cell`,
      `Increasing the length of the potentiometer wire`,
      `Decreasing the length of the potentiometer wire`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Increasing the length of the potentiometer wire`
  },
  {
    question: `In the circuit shown the value of I in ampere is`,
    options: [
      `1`,
      `060`,
      `0.4`,
      `1.5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.4`
  },
  {
    question: `A moving coil galvanometer of resistance 100Ωis used as an ammeter using a resistance 0.1Ω. The maximum deflection current in the galvanometer is 100𝜇A. Find the minimum current in the circuit so that the ammeter shows maximum deflection`,
    options: [
      `100.1mA`,
      `1000.1mA`,
      `10.01mA`,
      `1.01mA`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 100.1mA`
  },
  {
    question: `When two identical batteries of internal resistance 1 Ω each are connected in series across a resistor 𝑅, the rate of heat produced in 𝑅 is 𝐽1. When the same batteries are connected I parallel across 𝑅, the rate is 𝐽2. If 𝐽1 = 2.25 𝐽2 then the value of 𝑅 in Ω is`,
    options: [
      `4`,
      `6`,
      `4.8`,
      `5.16`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5.16`
  },
  {
    question: `A metal wire is subjected to a constant potential difference. When the temperature of the metal wire increases, the drift velocity of the electron in it`,
    options: [
      `increases, thermal velocity of the electron decreases`,
      `Decreases, thermal velocity of the electron decreases`,
      `increases, thermal velocity of the electron increases`,
      `Decreases, thermal velocity of the electron increases`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) increases, thermal velocity of the electron decreases`
  },
  {
    question: `A current of 6𝐴 enters one corner 𝑃 of an equilateral triangle 𝑃𝑄𝑅 having 3 wires of resistances 2Ω each and leaves by the corner 𝑅. Then the current 𝐼1 and 𝐼2 are 4Ω 1.6Ω 4Ω 4Ω 4V I P a g e | 23`,
    options: [
      `2𝐴, 4𝐴`,
      `4𝐴, 2𝐴`,
      `1𝐴, 2𝐴`,
      `2𝐴, 3𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2𝐴, 4𝐴`
  },
  {
    question: `There is a current of 0.21 A in a copper wire whose area of cross-section is 10−6m2. If the number of free electrons per m3 is 8.4× 1028, then find the drift velocity, (𝑒 = 1.6 × 10−19C)`,
    options: [
      `2 × 10−5 ms−1`,
      `1.56 × 10−5 ms−1`,
      `1 × 10−5 ms−1`,
      `0.64 × 10−5 ms−1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.56 × 10−5 ms−1`
  },
  {
    question: `If 2.2 𝑘𝑖𝑙𝑜𝑤𝑎𝑡𝑡 power is transmitted through a 10 𝑜ℎ𝑚 line at 22000 𝑣𝑜𝑙𝑡, the power loss in the form of heat will be`,
    options: [
      `0.1 𝑤𝑎𝑡𝑡`,
      `1 𝑤𝑎𝑡𝑡`,
      `10 𝑤𝑎𝑡𝑡`,
      `100 𝑤𝑎𝑡𝑡`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.1 𝑤𝑎𝑡𝑡`
  },
  {
    question: `In the circuit shown in figure the heat produced in the 5Ω resistor due to the current flowing through it is 100Js−1.The heat generated in the 4Ω resistor is`,
    options: [
      `10 Js−1`,
      `20 Js−1`,
      `30 Js−1`,
      `40 Js−1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 Js−1`
  },
  {
    question: `Two copper wires have their masses in the ratio 2 : 3 and the lengths in the ratio 3 : 4 the ratio of their resistance is`,
    options: [
      `4 : 9`,
      `27 : 32`,
      `16 : 9`,
      `27 :128`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 27 : 32`
  },
  {
    question: `A battery of emf E and internal resistance r is connected to an external resistance R the condition for maximum power transfer is`,
    options: [
      `r<R`,
      `r>R`,
      `r=1/R`,
      `R=R`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) R=R`
  },
  {
    question: `The cold junction of a thermocouple is maintained at 10℃. No thermo 𝑒.m.f. is developed when the hot junction is maintained at 530℃. The neutral temperature is`,
    options: [
      `260℃`,
      `270℃`,
      `265℃`,
      `520℃`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 270℃`
  },
  {
    question: `An electric heater boils 1 kg of water in a time 𝑡1. Another heater boils the same amount of water in a time 𝑡2. When the two heaters are connected in parallel, the time required by them together to boil the same amount of water is`,
    options: [
      `𝑡1 + 𝑡2`,
      `𝑡1𝑡2`,
      `𝑡1 + 𝑡2 2`,
      `𝑡1𝑡2 𝑡1 + 𝑡2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑡1𝑡2 𝑡1 + 𝑡2`
  },
  {
    question: `A voltmeter having a resistance of 998 𝑜ℎ𝑚 is connected to a cell of e.m.f. 2 𝑣𝑜𝑙𝑡 and internal resistance 2 𝑜ℎ𝑚. The error in the measurement of e.m.f. will be`,
    options: [
      `4 × 10−1𝑣𝑜𝑙𝑡`,
      `2 × 10−3𝑣𝑜𝑙𝑡`,
      `4 × 10−3 𝑣𝑜𝑙𝑡`,
      `2 × 10−1 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 × 10−3 𝑣𝑜𝑙𝑡`
  },
  {
    question: `In the circuit shown, if the 10 Ω resistance is replaced by 20 Ω then what is the amount of current drawn from the battery?`,
    options: [
      `2.5A`,
      `3A`,
      `3.5A`,
      `4A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4A`
  },
  {
    question: `The figure below shows a 2.0 V potentiometer used for the determination of internal resistance of a 2.5 V cell. The balance point of the cell in the open circuit is 75cm. When a resistor of 10 Ωis used in the external circuit of the cell, the balance point shifts to 65 cm length of potentiometer wire. Then the internal resistance of the cell is 10 Ω 4 Ω 4 Ω 3 Ω 3 Ω 4 A 5 Ω 6 Ω 4 Ω i i P a g e | 24`,
    options: [
      `2.5 Ω`,
      `2.0 Ω`,
      `1.54 Ω`,
      `1.0 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.54 Ω`
  },
  {
    question: `A battery of 24 cells, each of emf 1.5 𝑉 and internal resistance 2Ω is to be connected in order to send the maximum current through a 12Ω resistor. The correct arrangement of cells will be`,
    options: [
      `2 rows of 12 cells connected in parallel`,
      `3 rows of 8 cells connected in parallel`,
      `4 rows of 6 cells connected in parallel`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 rows of 12 cells connected in parallel`
  },
  {
    question: `A cell of emf 𝐸 and internal resistance 𝑟 supplies currents for the same time 𝑡 through external resistance 𝑅1 =100 Ω and 𝑅2 = 40 Ω separately. If the heat developed in both the cases in the same, then the internal resistance of the cell is given by`,
    options: [
      `28.6 Ω`,
      `70 Ω`,
      `63.3 Ω`,
      `140 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 63.3 Ω`
  },
  {
    question: `Incandescent bulbs are designed by keeping in mind that the resistance of their filament increases with the increase in temperature. If at room temperature, 100 W, 60 W and 40 W bulbs have filament resistances 𝑅100, 𝑅60 and 𝑅40, respectively, the relation between these resistances is`,
    options: [
      `1 𝑅100 = 1 𝑅40 + 1 𝑅60`,
      `𝑅100 = 𝑅40 + 𝑅60`,
      `𝑅100 > 𝑅60 > 𝑅40`,
      `1 𝑅100 > 1 𝑅60 > 1 𝑅40`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅100 = 𝑅40 + 𝑅60`
  },
  {
    question: `In a potentiometer circuit there is a cell of e.m.f. 2 𝑣𝑜𝑙𝑡, a resistance of 5 𝑜ℎ𝑚 and a wire of uniform thickness of length 1000 𝑐𝑚 and resistance 15 𝑜ℎ𝑚. The potential gradient in the wire is`,
    options: [
      `1 500𝑉/𝑐𝑚`,
      `3 2000𝑉/𝑐𝑚`,
      `3 5000𝑉/𝑐𝑚`,
      `1 1000𝑉/𝑐𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 2000𝑉/𝑐𝑚`
  },
  {
    question: `Equal amounts of a metal are converted into cylindrical wire of different lengths 𝐿 and cross-sectional area 𝐴.The wire with the maximum resistance is the one, which has`,
    options: [
      `Length=𝐿 and area= 𝐴`,
      `lengths= 𝐿 2 and area= 2𝐴`,
      `lengths= 2𝐿 and area= 𝐴 2`,
      `All have the same resistance, as the amount of the metal is the same`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) lengths= 2𝐿 and area= 𝐴 2`
  },
  {
    question: `Amount of electricity required to pass through the 𝐻2𝑂 voltmeter so as to liberate 11.2 𝑙𝑖𝑡𝑟𝑒 of hydrogen will be`,
    options: [
      `1 𝑓𝑎𝑟𝑎𝑑𝑎𝑦`,
      `1 2 𝑓𝑎𝑟𝑎𝑑𝑎𝑦`,
      `2 𝑓𝑎𝑟𝑎𝑑𝑎𝑦`,
      `3 𝑓𝑎𝑟𝑎𝑑𝑎𝑦`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝑓𝑎𝑟𝑎𝑑𝑎𝑦`
  },
  {
    question: `Five cells each of internal resistances 0.2Ω and emf 2 V are connected in series with a resistance of 4Ω. The current through the external resistance is`,
    options: [
      `4 A`,
      `2 A`,
      `1 A`,
      `0.5 A`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 A`
  },
  {
    question: `3 identical bulbs are connected in series and these together dissipate a power 𝑃. If now the bulbs are connected in parallel, then the power dissipated will be`,
    options: [
      `𝑃 3`,
      `3𝑃`,
      `9𝑃`,
      `𝑃 9`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9𝑃`
  },
  {
    question: `How many coulombs of electric charge must pass through acidulated water in order to release 22.4 L Of hydrogen at NTP?`,
    options: [
      `96500 Faraday`,
      `193000 coulomb`,
      `196500 Faraday`,
      `96500 coulomb`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 193000 coulomb`
  },
  {
    question: `Two identical cells connected in series send 1.0 A current through a 5Ω resistor. When they are connected in parallel, they send 0.8 A current through the same resistor. What is the internal resistance of the cell? G - - - - - - - - - - - - - - - - - - - G j' j 2.0 V 1.5 V 10 Ω P a g e | 25`,
    options: [
      `0.5 Ω`,
      `1.0 Ω`,
      `1.5 Ω`,
      `2.5 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.5 Ω`
  },
  {
    question: `Which of the following is not equal to 𝑤𝑎𝑡𝑡`,
    options: [
      `(𝐴𝑚𝑝)2 × 𝑜ℎ𝑚`,
      `𝐴𝑚𝑝/𝑉𝑜𝑙𝑡`,
      `𝐴𝑚𝑝× 𝑉𝑜𝑙𝑡`,
      `𝐽𝑜𝑢𝑙𝑒/𝑠𝑒𝑐`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐴𝑚𝑝/𝑉𝑜𝑙𝑡`
  },
  {
    question: `The current in the given circuit is`,
    options: [
      `8.31 𝐴`,
      `6.82 𝐴`,
      `4.92 𝐴`,
      `2 𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 𝐴`
  },
  {
    question: `A lamp having tungsten filament consumes 50 W. Assume the temperature coefficient of resistance for tungsten is 4.5 × 10−3℃−1 and temperature of the surrounding is 20℃. When the lamp burns, the temperature of its filament becomes 2500℃ , then the power consumed at the moment switch is on, is`,
    options: [
      `608 W`,
      `710 W`,
      `215 W`,
      `580 W`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 608 W`
  },
  {
    question: `A wire of resistance R is divided in 10 equal parts. These parts are connected in parallel, the equivalent resistance of such connection will be`,
    options: [
      `0.01 𝑅`,
      `0.1 𝑅`,
      `10 𝑅`,
      `100 𝑅`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.01 𝑅`
  },
  {
    question: `In the circuit shown, a 𝑚𝑒𝑡𝑒𝑟 bridge is in its balanced state. The 𝑚𝑒𝑡𝑒𝑟 bridge wire has a resistance 0.1 𝑜ℎ𝑚/𝑐𝑚. The value of unknown resistance 𝑋 and the current drawn from the battery of negligible resistance is`,
    options: [
      `6 Ω, 5 𝑎𝑚𝑝`,
      `10 Ω, 0.1 𝑎𝑚𝑝`,
      `4 Ω, 1.0 𝑎𝑚𝑝`,
      `12 Ω, 0.5 𝑎𝑚𝑝`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 Ω, 1.0 𝑎𝑚𝑝`
  },
  {
    question: `𝐸𝑚𝑓 is most closely related to`,
    options: [
      `Mechanical force`,
      `Potential difference`,
      `Electric field`,
      `Magnetic field`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Potential difference`
  },
  {
    question: `An electron (charge = 1.6 × 10−19𝑐𝑜𝑢𝑙𝑜𝑚𝑏) is moving in a circle of radius 5.1 × 10−11𝑚 at a frequency of 6.8 × 1015 𝑟𝑒𝑣𝑜𝑙𝑢𝑡𝑖𝑜𝑛𝑠/𝑠𝑒𝑐. The equivalent current is approximately`,
    options: [
      `5.1 × 10−3𝑎𝑚𝑝`,
      `6.8 × 10−3𝑎𝑚𝑝`,
      `1.1 × 10−3𝑎𝑚𝑝`,
      `2.2 × 10−3𝑎𝑚𝑝`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.1 × 10−3𝑎𝑚𝑝`
  },
  {
    question: `The drift velocity of free electrons in a conductor is ′𝑣′ when a current ′𝑖′ is flowing in it. If both the radius and current are doubled, then drift velocity will be`,
    options: [
      `𝑣`,
      `𝑣 2`,
      `𝑣 4`,
      `𝑣 8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑣 2`
  },
  {
    question: `If a steady current of 100 A is passed then how much time is taken to deposit 0.254 kg of copper on the cathode of copper voltmeter. Use the known value of Faraday constant and relative atomic mass of copper is 63.5.`,
    options: [
      `15440 s`,
      `7720 s`,
      `3760 s`,
      `5480 s`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7720 s`
  },
  {
    question: `Two similar cells, whether joined in series or in parallel, have the same current through an external resistance of 2 Ω. The internal resistance of each cell is`,
    options: [
      `1 Ω`,
      `2 Ω`,
      `0.5 Ω`,
      `1.5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `The current in the 1Ω resistor shown in the circuit is 1 Ω 4 Ω 4 Ω 6 V B A 60 cm 40 cm X 6 5V G 4.8V RA = 3 RC = 6 RB = 6 P a g e | 26`,
    options: [
      `2 3 𝐴`,
      `3A`,
      `6A`,
      `2A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2A`
  },
  {
    question: `An electric heater of 1.08 Kw is immersed in water. After the water has reached a temperature of 100℃, how much time will be required to produce 100 g of steam?`,
    options: [
      `420 s`,
      `210 s`,
      `105 s`,
      `50 s`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 210 s`
  },
  {
    question: `How many calories of heat will be produced approximately in a 210 W electric bulb in 5 min?`,
    options: [
      `80000 cal`,
      `63000 cal`,
      `1050 cal`,
      `15000 cal`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 15000 cal`
  },
  {
    question: `Four resistances are connected in a circuit in the given figure. The electric current flowing through 4 𝑜ℎ𝑚 and 6 𝑜ℎ𝑚 resistance is respectively`,
    options: [
      `2 𝑎𝑚𝑝 and 4 𝑎𝑚𝑝`,
      `1 𝑎𝑚𝑝 and 2 𝑎𝑚𝑝`,
      `1 𝑎𝑚𝑝 and 1 𝑎𝑚𝑝`,
      `2 𝑎𝑚𝑝 and 2 𝑎𝑚𝑝`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 𝑎𝑚𝑝 and 2 𝑎𝑚𝑝`
  },
  {
    question: `The current passing through the ideal ammeter in the circuit given below is`,
    options: [
      `1.25A`,
      `1A`,
      `0.75A`,
      `0.5A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.5A`
  },
  {
    question: `The potential difference between point 𝐴 & 𝐵 is`,
    options: [
      `20 7 𝑉`,
      `40 7 𝑉`,
      `10 7 𝑉`,
      `0`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0`
  },
  {
    question: `According to Joule’s law, if the potential difference across a conductor having a material of specific resistance remains constant, then the heat produced in the conductor is directly proportional to`,
    options: [
      `𝜌`,
      `𝜌2`,
      `1 √𝜌`,
      `1 𝜌`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 𝜌`
  },
  {
    question: `If power dissipated in the 9 Ω resistor in the circuit shown is 36 Watt, the potential difference across the 2 Ω resistor is`,
    options: [
      `2 𝑣𝑜𝑙𝑡`,
      `4 𝑣𝑜𝑙𝑡`,
      `8 𝑣𝑜𝑙𝑡`,
      `10 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10 𝑣𝑜𝑙𝑡`
  },
  {
    question: `The resistor of resistance 𝑅 is connected to 25 V supply and heat produced in it is 25 Js−1. The value of 𝑅 is`,
    options: [
      `225 Ω`,
      `1 Ω`,
      `25 Ω`,
      `50 Ω B A 8 6 4 3 10 V A + - , 4V 2 Ω 2 Ω 2 Ω 4 Ω 4 6 4 6 20V 1Ω P a g e | 27`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 25 Ω`
  },
  {
    question: `The resistance between the points 𝐴 and 𝐶 in the figure below is`,
    options: [
      `𝑅 Ω`,
      `4 3 Ω`,
      `2 3 𝑅Ω`,
      `8𝑅 3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 3 𝑅Ω`
  },
  {
    question: `The deflection in a moving coil galvanometer is reduced to half when it is shunted with a 40 Ω coil. The resistance of the galvanometer is`,
    options: [
      `15 Ω`,
      `20 Ω`,
      `40 Ω`,
      `80 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40 Ω`
  },
  {
    question: `The resistance of a cell does not depend on`,
    options: [
      `Current drawn from the cell`,
      `Temperature of electrolyte`,
      `Concentration of electrolyte`,
      `The 𝑒.m.f. of the cell`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The 𝑒.m.f. of the cell`
  },
  {
    question: `In the given figure the steady state current in the circuit is`,
    options: [
      `Zero`,
      `0.6A`,
      `0.9A`,
      `1.5A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.5A`
  },
  {
    question: `Twelve wires of equal length and same cross-section are connected in the form of a cube. If the resistance of each of the wires is 𝑅, then the effective resistance between the two diagonal ends would be`,
    options: [
      `2 𝑅`,
      `12 𝑅`,
      `5 6 𝑅`,
      `8 𝑅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 6 𝑅`
  },
  {
    question: `The length of a conductor is doubled and its radius is halved, its specific resistance is`,
    options: [
      `Unchanged`,
      `Halved`,
      `Doubled`,
      `Quadrupled`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Unchanged`
  },
  {
    question: `Four identical resistors of 4 Ω each are joined in circuit as shown in figure. The cell 𝐵 has emf 2V and its internal resistance is negligible. The ammeter reading is 4 Ω 4 Ω 4 Ω 4 Ω + - B A 𝐶 = 0.2 μF 2.8Ω 4Ω 3Ω 2Ω 6 V 𝑅 Ω 𝑅 Ω 𝑅 Ω 𝑅 Ω 𝑅 Ω 𝑅 Ω 𝑅 Ω 𝑅 Ω C A B D E P a g e | 28`,
    options: [
      `3 8 A`,
      `2A`,
      `1 2 A`,
      `1 8 A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3 8 A`
  },
  {
    question: `Variation of current and voltage in a conductor has been shown in the diagram below. The resistance of the conductor is`,
    options: [
      `4 𝑜ℎ𝑚`,
      `2 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚`,
      `1 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 𝑜ℎ𝑚`
  },
  {
    question: `Resistance of rod is 1 Ω.It is bent in form of square. What is resistance across adjoint corners?`,
    options: [
      `1 Ω`,
      `3 Ω`,
      `3 16Ω`,
      `3 4 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 16Ω`
  },
  {
    question: `The Avogadro’s number is 6 × 1023 per gm mole and electronic charge is 1.6 × 10−19𝐶. The Faraday’s number is`,
    options: [
      `6 × 1023 × 1.6 × 10−19`,
      `6 × 1023 1.6 × 10−19`,
      `2 6 × 1023 × 1.6 × 10−19`,
      `1.6 × 10−19 6 × 1023`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6 × 1023 × 1.6 × 10−19`
  },
  {
    question: `In the network shown in the figure, each of the resistance is equal to 2 Ω. The resistance between the points 𝐴 and 𝐵 is`,
    options: [
      `1 Ω`,
      `4 Ω`,
      `3 Ω`,
      `2 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 Ω`
  },
  {
    question: `The temperature of cold junction of thermo-couple is 0℃. If the neutral temperature is 270℃, then the inversion temperature is`,
    options: [
      `540℃`,
      `520℃`,
      `640℃`,
      `580℃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 540℃`
  },
  {
    question: `The mobility of free electrons (charge 𝑒, mass 𝑚 and relaxation time 𝜏) in a metal is proportional to`,
    options: [
      `𝑒 𝑚𝜏`,
      `𝑚 𝑒 𝜏`,
      `𝑒 𝑚𝜏`,
      `𝑚 𝑒𝜏`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑒 𝑚𝜏`
  },
  {
    question: `In the figure shown, the total resistance between 𝐴 and 𝐵 is`,
    options: [
      `12 Ω`,
      `4 Ω`,
      `6 Ω`,
      `8 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 Ω`
  },
  {
    question: `In the electrical network shown in the figure, the potential difference across 3Ω resistance will be`,
    options: [
      `12V`,
      `2.4V`,
      `24 V`,
      `36 V`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 24 V`
  },
  {
    question: `If 𝑛, 𝑒, 𝜏 and 𝑚 respectively represent the density, charge relaxation time and mass of the electron, then the resistance of a wire of length 𝑙 and area of cross-section 𝐴 will be 18A 3 Ω 4 ΩI 6 Ω A B 2 1 1 1 1 1 2 1 1 1 1 1 8 8 4 D C A B 1 2 3 4 5 6 1 2 3 4 5 6 i V P a g e | 29`,
    options: [
      `𝑚𝑙 𝑛𝑒2𝜏𝐴`,
      `𝑚𝜏2𝐴 𝑛𝑒2𝑙`,
      `𝑛𝑒2𝜏𝐴 2𝑚𝑙`,
      `𝑛𝑒2𝐴 2𝑚𝜏𝑙`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑚𝑙 𝑛𝑒2𝜏𝐴`
  },
  {
    question: `A ring is made of a wire having a resistance 𝑅0 = 12Ω. Find the points 𝐴 and 𝐵 as shown in the figure, at which a current carrying conductor should be connected so that the resistance 𝑅 of the sub circuit between these points is equal to 8 3 Ω`,
    options: [
      `ℓ1 ℓ2 = 5 8`,
      `ℓ1 ℓ2 = 1 3`,
      `ℓ1 ℓ2 = 3 8`,
      `ℓ1 ℓ2 = 1 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) ℓ1 ℓ2 = 1 2`
  },
  {
    question: `When a Daniel cell is connected in the secondary circuit of a potentiometer, the balancing length is found to be 540 cm. If the balancing length becomes 500 cm when the cell is short circuited with 1 Ω, the internal of the cell is`,
    options: [
      `0.08 Ω`,
      `0.04 Ω`,
      `1.0 Ω`,
      `1.08 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.08 Ω`
  },
  {
    question: `What is the equivalent resistance between the points 𝐴 and 𝐵 of the network`,
    options: [
      `57 7 Ω`,
      `8 Ω`,
      `6 Ω`,
      `57 5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 Ω`
  },
  {
    question: `An electric water kettle rated 2.1 kW is filled with 1.5 kg of water at 20°C. How many seconds does it take to reach the boiling point of water? Assume that there are no heat losses from the kettle. Specific heat capacity of water is 4200 Jkg−1 K−1`,
    options: [
      `60`,
      `120`,
      `240`,
      `480`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 240`
  },
  {
    question: `A cell can be balanced against 110cm and 100cm of potentiometer wire, respectively with and without being short circuited through a resistance of 10 Ω. Its internal resistance is`,
    options: [
      `1.0 Ω`,
      `0.5 Ω`,
      `2.0 Ω`,
      `Zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.0 Ω`
  },
  {
    question: `Kirchhoff’s I law and II law of current, prove the`,
    options: [
      `Conservation of charge and energy`,
      `Conservation of current and energy`,
      `Conservation of mass and charge`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Conservation of charge and energy`
  },
  {
    question: `The resistivity of iron is 1 × 10−7𝑜ℎ𝑚− 𝑚. The resistance of a iron wire of particular length and thickness is 1 𝑜ℎ𝑚. If the length and the diameter of wire both are doubled, then the resistivity in 𝑜ℎ𝑚− 𝑚 will be`,
    options: [
      `1 × 10−7`,
      `2 × 10−7`,
      `4 × 10−7`,
      `8 × 10−7`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 × 10−7`
  },
  {
    question: `In an experiment, a graph was plotted of the potential difference 𝑉 between the terminals of a cell against the circuit current 𝑖 by varying load rheostat. Internal conductance of the cell is given by`,
    options: [
      `𝑥𝑦`,
      `𝑦 𝑥`,
      `𝑥 𝑦`,
      `(𝑥 − 𝑦)`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑦 𝑥`
  },
  {
    question: `For a thermocouple the neutral temperature is 270℃ when its cold junction is at 20℃. What will be the neutral temperature and the temperature of inversion when the temperature of cold junction is increased 10Ω 1.8Ω 4Ω 2Ω 1Ω 1Ω 5Ω 2.2Ω 2Ω 3Ω 2Ω A B P a g e | 30 to 40℃`,
    options: [
      `290℃, 580℃`,
      `270℃, 580℃`,
      `270℃, 500℃`,
      `290℃, 540℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 270℃, 500℃`
  },
  {
    question: `In the following circuit, 5Ω resistor develops 45 𝐽/𝑠 due to current flowing through it. The power developed per second across 12 Ω resistor is`,
    options: [
      `16 𝑊`,
      `192 𝑊`,
      `36 𝑊`,
      `64 𝑊`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 192 𝑊`
  },
  {
    question: `A current of (2 3)𝐴 produces a deflection of 60° in a tangent galvanometer. The reduction factor is`,
    options: [
      `(2 3)𝐴`,
      `2A`,
      `(2 3)𝐴`,
      `( 2 √3 )𝐴`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (2 3)𝐴`
  },
  {
    question: `Two sources of equal emf are connected to an external resistance 𝑅. The internal resistances of the two sources are 𝑅1 and 𝑅2(𝑅2 > 𝑅1). If the potential difference across the source having internal resistance 𝑅2 is zero, then`,
    options: [
      `𝑅 = 𝑅1𝑅2/(𝑅1 + 𝑅2)`,
      `𝑅 = 𝑅1𝑅2/(𝑅2 − 𝑅1)`,
      `𝑅 = 𝑅2 × (𝑅1 + 𝑅2)/(𝑅2 − 𝑅1)`,
      `𝑅 = 𝑅2 − 𝑅1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅 = 𝑅2 − 𝑅1`
  },
  {
    question: `Which of the following has a negative temperature coefficient`,
    options: [
      `𝐶`,
      `𝐹𝑒`,
      `𝑀𝑛`,
      `𝐴𝑔`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐶`
  },
  {
    question: `A cell supplies a current 𝑖1through a resistance 𝑅1 and a current 𝐼2 through a resistance 𝑅2. The internal resistance of a cell is`,
    options: [
      `𝑅2 − 𝑅1`,
      `(𝑖1 + 𝑖2) 𝑖1 − 𝑖2 𝑅1𝑅2`,
      `𝑖1𝑅2 − 𝑖2𝑅1 𝑖1 − 𝑖2`,
      `𝑖2𝑅2 − 𝑖1𝑅1 𝑖1 − 𝑖2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑖2𝑅2 − 𝑖1𝑅1 𝑖1 − 𝑖2`
  },
  {
    question: `Two ends of a conductor are at different temperatures the electromotive force generated between two ends is`,
    options: [
      `Seebeck electro motive force (𝑒.m.f.)`,
      `Peltier electro motive force (𝑒.m.f.)`,
      `Thomson electro motive force (𝑒.m.f.)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Thomson electro motive force (𝑒.m.f.)`
  },
  {
    question: `What is the equivalent resistance between 𝐴 and 𝐵`,
    options: [
      `2 3 𝑅`,
      `3 2 𝑅`,
      `𝑅 2`,
      `2𝑅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅 2`
  },
  {
    question: `The effective resistance between points 𝐴 and 𝐵 in figure`,
    options: [
      `10 Ω`,
      `12 Ω`,
      `9.85 Ω`,
      `10.85 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9.85 Ω`
  },
  {
    question: `The current density (number of free electrons per m3) in metallic conductor is of the order of`,
    options: [
      `1022`,
      `1024`,
      `1026`,
      `1028`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1028`
  },
  {
    question: `The potential difference between points 𝐴 and 𝐵 of adjoining figure is 24 Ω 5 Ω 3 Ω 12 Ω 6 Ω 4 Ω A B A 2R C 2R D R B i i1 i2 6  9  5  12  P a g e | 31`,
    options: [
      `2 3 𝑉`,
      `8 9 𝑉`,
      `4 3 𝑉`,
      `2𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 3 𝑉`
  },
  {
    question: `The potential gradient along the length of a uniform wire is 10Vm−1.The length of the potentiometer wire is 4 m. What is the potential difference across two points on the wire separated by 50cm?`,
    options: [
      `2.5 V`,
      `5.0 V`,
      `1.25 V`,
      `4.0 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5.0 V`
  },
  {
    question: `In the circuit shown, the value of each resistance is 𝑟, then equivalent resistance of circuit between points 𝐴 and 𝐵 will be`,
    options: [
      `(4/3)𝑟`,
      `3𝑟/2`,
      `𝑟/3`,
      `8𝑟/7`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8𝑟/7`
  },
  {
    question: `For the circuit shown in the figure`,
    options: [
      `The current 𝐼 through the battery is 7.5mA`,
      `The potential difference across 𝑅𝐿 is 18 V`,
      `Ratio of powers dissipated in 𝑅1 and 𝑅2 is 3`,
      `If 𝑅1 and 𝑅2 are interchanged, magnitude of the power dissipated in 𝑅𝐿 will decrease by a factor of 9`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) If 𝑅1 and 𝑅2 are interchanged, magnitude of the power dissipated in 𝑅𝐿 will decrease by a factor of 9`
  },
  {
    question: `A brass rectangular plate 12cm× 3cm is to be electroplated with copper. If we wish to coat it with a layer of 0.02 mm thick both sides, how much time will it take with a constant current of 5A? Given ECE of copper is 33 × 10−5g C−1 and density of copper is 8.9 g cm−3.`,
    options: [
      `388 s`,
      `776 s`,
      `400 s`,
      `800 s`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 776 s`
  },
  {
    question: `You are given several identical resistances each of value 𝑅 = 10Ω and each capable of carrying maximum current of 1 ampere. It is required to make a suitable combination of these resistances to produce a resistance of 5Ω which can carry a current of 4 ampere. The minimum number of resistances of the type 𝑅 that will be required for this job`,
    options: [
      `4`,
      `10`,
      `8`,
      `20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8`
  },
  {
    question: `A 12 𝑉 lead accumulator is being charged using 24 𝑉 supply with an external resistance 2Ω. The internal resistance of the accumulator is 1Ω. Find the time in which it will store 360 𝑊-hour energy`,
    options: [
      `1 ℎ𝑟`,
      `7.5 ℎ𝑟`,
      `10 ℎ𝑟`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7.5 ℎ𝑟`
  },
  {
    question: `As the switch 𝑆 is closed in the circuit shown in figure, current passed through it is 1.5k Ω 6k Ω 2k Ω I 24 V 24 V R 1 R 2 R L A B C r r r r r r r D A 5 5 5 5 5 5 2V B C P a g e | 32`,
    options: [
      `Zero`,
      `1 A`,
      `2 A`,
      `1.6 A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 A`
  },
  {
    question: `If nearly 105C liberate 1 g equivalent of aluminium, then the amount of aluminium (equivalent weight 9) deposited through electrolysis in 20 min by a current of 50 A will be`,
    options: [
      `0.09 g`,
      `0.6 g`,
      `5.4 g`,
      `10.8 g`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5.4 g`
  },
  {
    question: `Potential gradient is defined as`,
    options: [
      `Fall of potential per unit length of the wire`,
      `Fall of potential per unit area of the wire`,
      `Fall of potential between two ends of the wire`,
      `Potential at any one end of the wire`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fall of potential per unit length of the wire`
  },
  {
    question: `The current flowing in a copper voltmeter is 3.2 𝐴. The number of copper ions (𝐶𝑢2+) deposited at the cathode per minute is`,
    options: [
      `0.5 × 1020`,
      `1.5 × 1020`,
      `3 × 1020`,
      `6 × 1020`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6 × 1020`
  },
  {
    question: `The specific resistance of manganin is 50 × 10−8 𝑜ℎ𝑚× 𝑚. The resistance of a cube of length 50𝑐𝑚 will be`,
    options: [
      `10−6 𝑜ℎ𝑚`,
      `2.5 × 10−5 𝑜ℎ𝑚`,
      `10−8 𝑜ℎ𝑚`,
      `5 × 10−4 𝑜ℎ𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10−6 𝑜ℎ𝑚`
  },
  {
    question: `The total current supplied to the given circuit by the battery is`,
    options: [
      `9 A`,
      `6 A`,
      `2 A`,
      `4 A`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 A`
  },
  {
    question: `Combination of two identical capacitors, a resistor 𝑅 and a DC voltage source of voltage 6 V is used in an experiment on𝐶 − 𝑅 circuit. It is found that for a parallel combination of the capacitor the time in which the voltage of the fully charged combination reduces to half its original voltage is 10s. For series combination the time needed for reducing the voltage of the fully charged series combination by half is`,
    options: [
      `200s`,
      `10s`,
      `5s`,
      `2.5s`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.5s`
  },
  {
    question: `If 400Ω of resistance is made by adding four 100Ω resistance of tolerance 5%, then the tolerance of the combination is`,
    options: [
      `20 %`,
      `5 %`,
      `10 %`,
      `15 %`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 %`
  },
  {
    question: `A 5℃ rise in temperature is observed in a conductor by passing a current. When the current is doubled the rise in temperature will be approximately`,
    options: [
      `16℃`,
      `10℃`,
      `20℃`,
      `12℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20℃`
  },
  {
    question: `In the following circuit, 18Ω resistor develops 2𝐽/𝑠𝑒𝑐 due to current flowing through it. The power developed across 10Ω resistance is`,
    options: [
      `125 𝑊`,
      `10 𝑊`,
      `4 5 𝑊`,
      `25 𝑊`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 𝑊`
  },
  {
    question: `𝑒 = 𝛼 𝑡 − 1 2 𝛽 𝑡2, if temperature of cold junction is 0℃ then temperature of inversion is 12 12 9 9 9 10 18 2 Ω 2 Ω 4 Ω S 5 V 10 V P a g e | 33 (if 𝛼 = 500.0𝜇𝑉/℃, 𝛽 = 5.0𝜇𝑉/square℃)`,
    options: [
      `100`,
      `200`,
      `300`,
      `400`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 200`
  },
  {
    question: `In 𝐶𝑢− 𝐹𝑒 couple, the flow of current at the temperature of inversion is`,
    options: [
      `From 𝐹𝑒 to 𝐶𝑢 through the hot junction`,
      `From 𝐶𝑢 to 𝐹𝑒 through the hot junction`,
      `Maximum`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) From 𝐹𝑒 to 𝐶𝑢 through the hot junction`
  },
  {
    question: `Two wires 𝐴 and 𝐵 of same material and same mass have radii 2𝑟 and 𝑟 respectively. If resistance of wire 𝐴 is 34Ω, then resistance of 𝐵 will be`,
    options: [
      `544Ω`,
      `272Ω`,
      `68Ω`,
      `17Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 544Ω`
  },
  {
    question: `Three electric bulbs with same voltage ratings of 110 volts but wattage ratings of 40, 60 and 100 watts respectively are connected in series across a 220 volt supply line. If their brightness are 𝐵1, 𝐵2, 𝐵3 respectively, then`,
    options: [
      `𝐵1 > 𝐵2 > 𝐵3`,
      `𝐵1 > 𝐵2 < 𝐵3`,
      `𝐵1 = 𝐵2 = 𝐵3`,
      `Bulbs will burn out due to the high voltage supply`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐵1 > 𝐵2 > 𝐵3`
  },
  {
    question: `Consider a rectangular slab of length 𝐿 and area of cross section 𝐴. A current 𝐼 is passed through it. If the length is doubled, the potential drop across the end faces`,
    options: [
      `Becomes half of the initial value`,
      `Becomes one-fourth of the initial value`,
      `Becomes double the initial value`,
      `Remains same`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Becomes double the initial value`
  },
  {
    question: `Two cells having emf 4V, 2V and internal resistances 1 Ω, 1 Ω are connected as shown in figure below. Current through 6 Ω resistance is`,
    options: [
      `1 3 𝐴`,
      `2 3 𝐴`,
      `1A`,
      `2 9 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 3 𝐴`
  },
  {
    question: `Kirchhoff’s first law 𝑖. 𝑒. ∑ 𝑖 = 0 at a junction is based on the law of conservation of`,
    options: [
      `Charge`,
      `Energy`,
      `Momentum`,
      `Angular momentum`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Charge`
  },
  {
    question: `The equivalent resistance of the following infinite network of resistance is`,
    options: [
      `Less than 4Ω`,
      `4Ω`,
      `More than 4Ω but less than 12Ω`,
      `12Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) More than 4Ω but less than 12Ω`
  },
  {
    question: `The resistance in which the maximum heat is produced is given by 12 Ω 6 Ω 2 Ω 4 Ω 2 V 2 2 2 2 2 2 2 2 2 A B 2 Ω 3 Ω 1Ω 1Ω 4 V 2 V 6 Ω P a g e | 34`,
    options: [
      `2Ω`,
      `6Ω`,
      `4Ω`,
      `12Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2Ω`
  },
  {
    question: `We are able to obtain fairly large currents in a conductor because`,
    options: [
      `The electron drift speed is usually very large`,
      `The number density of free electrons is very high and this can compensate for the low values of the electron drift speed and the very small magnitude of the electron charge`,
      `The number density of free electrons as well as the electron drift speeds are very large and these compensate for the very small magnitude of the electron charge`,
      `The very small magnitude of the electron charge has to be divided by the still smaller product of the number density and drift speed to get the electric current`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The number density of free electrons is very high and this can compensate for the low values of the electron drift speed and the very small magnitude of the electron charge`
  },
  {
    question: `A battery of emf 𝐸 has an internal resistance 𝑟. A variable resistance 𝑅 is connected to the terminals of the battery. A current 𝑖 is drawn from the battery. 𝑉 is the terminal potential difference. If 𝑅 alone is gradually reduced to zero, which of the following best describes 𝑖 and 𝑉?`,
    options: [
      `𝑖 approaches zero, 𝑉 approaches 𝐸`,
      `𝑖 approaches𝐸 𝑟 , 𝑉 approaches zero`,
      `𝑖 approaches𝐸 𝑟 , 𝑉 approaches 𝐸`,
      `𝑖 approaches infinity, 𝑉 approaches 𝐸`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑖 approaches𝐸 𝑟 , 𝑉 approaches zero`
  },
  {
    question: `Kirchhoff’s second law is based on the law of conservation of`,
    options: [
      `Charge`,
      `Energy`,
      `Momentum`,
      `Sum of mass and energy`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Energy`
  },
  {
    question: `The temperature at which thermal electric power of a thermo couple becomes zero is called`,
    options: [
      `Inversion temperature`,
      `Neutral temperature`,
      `Junction temperature`,
      `Null temperature`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Neutral temperature`
  },
  {
    question: `Resistances 𝑅1 and 𝑅2 are joined in parallel and a current is passed so that the amount of heat liberated is 𝐻1 and 𝐻2 respectively. The ratio 𝐻1 𝐻2 has the value`,
    options: [
      `𝑅2 𝑅1`,
      `𝑅1 𝑅2`,
      `𝑅1 2 𝑅2 2`,
      `𝑅2 2 𝑅1 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅2 𝑅1`
  },
  {
    question: `Two wires 𝐴 and 𝐵 of same material and mass have their lengths in the ratio 1:2. On connecting them to the same source, the rate of heat dissipation in 𝐵 is found to be 5𝑊. The rate of heat dissipation in 𝐴 is`,
    options: [
      `10𝑊`,
      `5𝑊`,
      `20𝑊`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20𝑊`
  },
  {
    question: `Two electrolytic cells containing CuSO4 and AgNO3 respectively are connected in series and a current is passed through them until 2 mg of copper is deposited in the first cell. The amount of silver deposited in the second cell during this time in approximately (atomic weight of copper and silver are 63.6 and 108.0 )`,
    options: [
      `1.7 mg`,
      `3.4 mg`,
      `5.1 mg`,
      `6.8 mg`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6.8 mg`
  },
  {
    question: `At neutral temperature, the thermoelectric power (𝑑𝐸 𝑑𝑇) has the value`,
    options: [
      `Zero`,
      `Maximum but negative`,
      `Maximum but positive`,
      `Minimum but positive`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Zero`
  },
  {
    question: `At steady state, energy stored in capacitor is`,
    options: [
      `4 × 10−6 J`,
      `2 J`,
      `4 J`,
      `Zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 × 10−6 J`
  },
  {
    question: `A fuse wire with a radius of 1 mm blows at 1.5 A. If the fuse wire of the same material should blow at 3.0 A, the radius of the fuse wire must be`,
    options: [
      `41/3 mm`,
      `√2 mm`,
      `0.5 mm`,
      `8.0 mm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 41/3 mm`
  },
  {
    question: `5 𝑎𝑚𝑝𝑒𝑟𝑒 of current is passed through a metallic conductor. The charge flowing in one minute in coulomb will be 2 Ω A B 2 V F 2 P a g e | 35`,
    options: [
      `5`,
      `12`,
      `1/12`,
      `300`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 300`
  },
  {
    question: `The 𝑉 − 𝑖 graph for a good conductor makes angle 40° with 𝑉 −axis. Here 𝑉 denotes voltage and 𝑖 denotes current. The resistance of the conductor will be`,
    options: [
      `sin40°`,
      `cos40°`,
      `tan40°`,
      `cot40°`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) cot40°`
  },
  {
    question: `A galvanometer of resistance, 𝐺, is shunted by a resistance 𝑆 𝑜ℎ𝑚. To keep the main current in the circuit unchanged, the resistance to be put in series with the galvanometer is`,
    options: [
      `𝐺2 (𝑆 + 𝐺)`,
      `𝐺 (𝑆 + 𝐺)`,
      `𝑆2 (𝑆 + 𝐺)`,
      `𝑆𝐺 (𝑆 + 𝐺)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐺2 (𝑆 + 𝐺)`
  },
  {
    question: `A 50V battery is connected across a 10 Ω resistor and a current of 4.5 A flows. The internal resistance of the battery is`,
    options: [
      `10 Ω`,
      `0.5 Ω`,
      `1.1 Ω`,
      `5 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.1 Ω`
  },
  {
    question: `There are two electric bulbs of 40 𝑊 and 100 𝑊. Which one will be brighter when first connected in series and then in parallel`,
    options: [
      `40 𝑊 in series and 100 𝑊 in parallel`,
      `100 𝑊 in series and 40 𝑊 in parallel`,
      `40 𝑊 both in series and parallel will be uniform`,
      `100 𝑊 both in series and parallel will be uniform`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 40 𝑊 in series and 100 𝑊 in parallel`
  },
  {
    question: `The conductivity of a superconductor is`,
    options: [
      `Infinite`,
      `Very large`,
      `Very small`,
      `Zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Infinite`
  },
  {
    question: `Two identical cell send the same current in 2Ω resistance, whether connected in series or in parallel. The internal resistance of the cell should be`,
    options: [
      `1 Ω`,
      `2 Ω`,
      `1 2 Ω`,
      `2.5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `According to Faraday’s law of electrolysis, the amount of decomposition is proportional to`,
    options: [
      `1/time for which current passes`,
      `Electrochemical equivalent of the substance`,
      `1/current`,
      `1/electrochemical equivalent`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Electrochemical equivalent of the substance`
  },
  {
    question: `Three similar cells, each of emf 2V and internal resistance 𝑟 send the same current through an external resistance of 2Ω,when connected in series or in parallel. The strength of current flowing through the external resistance is`,
    options: [
      `0.75 A`,
      `1 A`,
      `1.5 A`,
      `zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.75 A`
  },
  {
    question: `For what value of 𝑅 the net resistance of the circuit will be 18 𝑜ℎ𝑚𝑠`,
    options: [
      `8 Ω`,
      `10 Ω`,
      `16 Ω`,
      `24 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 16 Ω`
  },
  {
    question: `The resistance of a wire is 𝑅 Ω.The wire is stretched to double its length keeping volume constant. Now the resistance of the wire will become`,
    options: [
      `4 𝑅 Ω`,
      `2 𝑅 Ω`,
      `𝑅/2 Ω`,
      `𝑅/4 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 𝑅 Ω`
  },
  {
    question: `A uniform copper wire of length 1 m and cross-section area 5 × 10−7m2 carries a current of 1 A. Assuming that there are 8 × 1028 free electron m−3in copper, how long will an electron take to drift from one end of the wire to the other?`,
    options: [
      `0.8 × 103s`,
      `1.6 × 103s`,
      `3.2 × 103s`,
      `6.4 × 103s`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6.4 × 103s`
  },
  {
    question: `A voltmeter has a resistance of G ohm and range V volt. The value of resistance used in series to convert it into a voltmeter of range 𝑛𝑉 volt is`,
    options: [
      `𝑛𝐺`,
      `𝐺 𝑛`,
      `(𝑛− 1)𝐺`,
      `𝐺 𝑛− 1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (𝑛− 1)𝐺`
  },
  {
    question: `To decrease the range of an ammeter, its resistance need to be increased. An ammeter has resistance 𝑅0and range I. Which of the following resistance can be connected in series with it to decreases its range to 𝐼/𝑛?`,
    options: [
      `𝑅0 𝑛`,
      `𝑅0 (𝑛− 1)`,
      `𝑅0 (𝑛+ 1)`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `If a current is allowed to pass through a circuit consisting of two dissimilar metals, there is either evolution or absorption of heat at the junction, depending upon the direction of the current. The effect is known as`,
    options: [
      `Seebeck effect`,
      `Joule effect`,
      `Peltier effect`,
      `Thomson effect`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Peltier effect`
  },
  {
    question: `Two bulbs when connected in parallel to a source take 60 W each. The total power consumed when they are connected in series with the same source is`,
    options: [
      `15 W`,
      `30 W`,
      `60 W`,
      `120 W`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30 W`
  },
  {
    question: `In the circuit shown in figure, find the current through the branch 𝐵𝐷 G1 G2 R 2 R T R 1 V G1 G2 R T R 2 V 1 G2 R 1 R T R 2 V G G1 G 2 R 2 R T R T V P a g e | 37`,
    options: [
      `5 𝐴`,
      `0 𝐴`,
      `3 𝐴`,
      `4 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 𝐴`
  },
  {
    question: `If 𝐸 = 𝑎𝑡+ 𝑏𝑡2, what is the neutral temperature`,
    options: [
      `− 𝑎 2𝑏`,
      `+ 𝑎 2𝑏`,
      `− 𝑎 𝑏`,
      `+ 𝑎 𝑏`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) − 𝑎 2𝑏`
  },
  {
    question: `The resistance of an incandescent lamp is`,
    options: [
      `Greater when switched off`,
      `Smaller when switched on`,
      `Greater when switched on`,
      `The same whether it is switched off or switched on`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Greater when switched on`
  },
  {
    question: `The voltage 𝑉 and current 𝐼 graph for a conductor at two different temperatures 𝑇1 and 𝑇2 are shown in the figure. The relation between 𝑇1 and 𝑇2 is`,
    options: [
      `𝑇1 > 𝑇2`,
      `𝑇1 ≈ 𝑇2`,
      `𝑇1 = 𝑇2`,
      `𝑇1 < 𝑇2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑇1 > 𝑇2`
  },
  {
    question: `The current in a conductor varies with time 𝑡 as 𝐼 = 2𝑡 + 3𝑡2 where 𝐼 is in 𝑎𝑚𝑝𝑒𝑟𝑒 and 𝑡 in 𝑠𝑒𝑐𝑜𝑛𝑑𝑠. Electric charge flowing through a section of the conductor during 𝑡 = 2 𝑠𝑒𝑐 to 𝑡 = 3 𝑠𝑒𝑐 is`,
    options: [
      `10 𝐶`,
      `24 𝐶`,
      `33 𝐶`,
      `44 𝐶`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 24 𝐶`
  },
  {
    question: `The maximum power dissipated in an external resistance R, when connected to a cell of emf E and internal resistance r, will be`,
    options: [
      `𝐸2 𝑟`,
      `𝐸2 2𝑟`,
      `𝐸2 3𝑟`,
      `𝐸2 4𝑟`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝐸2 4𝑟`
  },
  {
    question: `When a resistance of 100 Ω is connected in series with a gal vinometer of resistance R, its range is V. to double its range, a resistance of 1000 Ω is connected in series. Find R`,
    options: [
      `700 Ω`,
      `800 Ω`,
      `900 Ω`,
      `100 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 900 Ω`
  },
  {
    question: `A 10 Ω electric heater operates on a 110V line. The rate at which heat is developed in watts is`,
    options: [
      `1310 W`,
      `670 W`,
      `810 W`,
      `1210 W`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1210 W`
  },
  {
    question: `In a galvanometer 5% of the total current in the circuit passes through it. If the resistance of the galvanometer is G, the shunt resistance S connected to the galvanometer is`,
    options: [
      `19G`,
      `G/19`,
      `20G`,
      `G/20`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) G/19`
  },
  {
    question: `A resistance of 2Ω is to be made from a copper wire (specific resistance=1.7 × 10−8Ω m) using a wire of length 50cm. The radius of the wire is`,
    options: [
      `0.0116 mm`,
      `0.367 mm`,
      `0.116 mm`,
      `0.267 mm`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.367 mm`
  },
  {
    question: `When a charged particle of charge 𝑒 revolves in circular orbit of radius 𝑟 with frequency 𝑛, then orbital current will be`,
    options: [
      `𝑒𝑣 𝜋𝑟2`,
      `𝑒𝑣 4𝜋𝑟`,
      `𝑒𝑣 2𝜋𝑟`,
      `𝑒𝑣 4𝜋𝑟2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑒𝑣 2𝜋𝑟`
  },
  {
    question: `A battery of 𝑒. m. f. 10 𝑉 and internal resistance 0.5 𝑜ℎ𝑚 is connected across a variable resistance 𝑅. The value of 𝑅 for which the power delivered in it is maximum is given by`,
    options: [
      `2.0 𝑜ℎ𝑚`,
      `0.25 𝑜ℎ𝑚`,
      `1.0 𝑜ℎ𝑚`,
      `0.5 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.5 𝑜ℎ𝑚`
  },
  {
    question: `In an electrical cable there is a single wire of radius 9 𝑚𝑚 of copper. Its resistance is 5Ω. The cable is replaced by 6 different insulated copper wires, the radius of each wire is 3𝑚𝑚. Now the total resistance of the cable will be V I T1 T2 P a g e | 38`,
    options: [
      `7.5 Ω`,
      `45 Ω`,
      `90 Ω`,
      `270 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7.5 Ω`
  },
  {
    question: `Two identical cells send the same current in 3 Ω resistance, whether connected in series or in parallel. The internal resistance on the cell should be`,
    options: [
      `1 Ω`,
      `3 Ω`,
      `1 2 Ω`,
      `3.5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 Ω`
  },
  {
    question: `In the adjoining figure the equivalent resistance between A and B is`,
    options: [
      `5 Ω`,
      `8 Ω`,
      `2.5 Ω`,
      `6.8 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 Ω`
  },
  {
    question: `If the ratio of the concentration of electron to that of holes in a semiconductor is 7 5 and the ratio of current is 7 4, then what is the ratio of their drift velocities`,
    options: [
      `4 5`,
      `5 4`,
      `4 7`,
      `5 8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 4`
  },
  {
    question: `Electroplating does not help in`,
    options: [
      `Fine finish to the surface`,
      `Shining appearance`,
      `Metals to become hard`,
      `Protecting metal against conosion`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Metals to become hard`
  },
  {
    question: `Corresponding to the resistance 4.7 × 106Ω± 5%, which is order of colour coding on carbon resistors?`,
    options: [
      `Yellow, violet, blue, gold`,
      `Yellow, violet, green, gold`,
      `Orange, blue, green, gold`,
      `Orange, blue, violet, gold`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Yellow, violet, green, gold`
  },
  {
    question: `For a thermocouple, the neutral temperature is 270℃ and the temperature of its cold junction is 20℃. If there is no deflection in the galvanometer, the temperature of the hot junction should be`,
    options: [
      `210℃`,
      `540℃`,
      `520℃`,
      `209℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 520℃`
  },
  {
    question: `Two cells A and B are connected in the secondary circuit of a potentiometer one at a time and the balancing length are respectively 400 cm and 440 cm. The emf of the cell A is 1.08V. The emf of the second cell B is volt is`,
    options: [
      `1.08`,
      `1.188`,
      `11.88`,
      `12.8`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.188`
  },
  {
    question: `What determines the emf between the two metals placed in an electrolyte?`,
    options: [
      `Relative position of metals in the electro chemical series`,
      `Distance between them`,
      `Strength of electrolyte`,
      `Nature of electrolyte`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Relative position of metals in the electro chemical series`
  },
  {
    question: `𝐴𝐵 is a potentiometer wire of length 100 𝑐𝑚 and its resistance is 10 𝑜ℎ𝑚. It is connected in series with a resistance 𝑅 = 40 𝑜ℎ𝑚 and a battery of e.m.f. 2 𝑉 and negligible internal resistance. If a source of unknown e.m.f. 𝐸 is balanced by 40 𝑐𝑚 length of the potentiometer wire, the value of 𝐸 is`,
    options: [
      `0.8 𝑉`,
      `1.6 𝑉`,
      `0.08 𝑉`,
      `0.16 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.16 𝑉`
  },
  {
    question: `In a closed circuit, the current 𝐼(in ampere) at an instant of time 𝑡(in second) is given by 𝐼 = 4 − 0.08𝑡. The number of electrons flowing in 50s through the cross-section of the conductor is`,
    options: [
      `1.25 × 1019`,
      `6.25 × 1020`,
      `5.25 × 1019`,
      `2.55 × 1020`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6.25 × 1020`
  },
  {
    question: `The internal resistance of a cell of emf 2 V is 0.1Ω. It is connected to a resistance of 3.9Ω . The potential difference across is`,
    options: [
      `0.5 V`,
      `1.9 V`,
      `1.95 V`,
      `2 V R A B 2 V 40 cm E 4 Ω 2 Ω 1 Ω 2 Ω 6 Ω 4 Ω 2 Ω 1 Ω A B P a g e | 39`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.95 V`
  },
  {
    question: `The accurate measurement of emf can be obtained using`,
    options: [
      `Multimeter`,
      `Voltmeter`,
      `Voltameter`,
      `Potentiometer`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Potentiometer`
  },
  {
    question: `A potential difference of 𝑉 is applied at the ends of a copper wire of length 𝑙 and diameter 𝑑. On doubling only 𝑑, the drift velocity,`,
    options: [
      `Becomes two times`,
      `Becomes half`,
      `Does not change`,
      `Becomes one-fourth`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Does not change`
  },
  {
    question: `Find equivalent resistance between 𝐴 and 𝐵`,
    options: [
      `𝑅`,
      `3𝑅 4`,
      `𝑅 2`,
      `2𝑅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅 2`
  },
  {
    question: `𝐴𝐵 is a wire of uniform resistance. The galvanometer 𝐺 shows no current when the length 𝐴𝐶 = 20𝑐𝑚 and 𝐶𝐵 = 80𝑐𝑚. The resistance 𝑅 is equal to`,
    options: [
      `2 Ω`,
      `8 Ω`,
      `20 Ω`,
      `40 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20 Ω`
  },
  {
    question: `A heater coil is cut into two parts of equal length and one of them is used in the heater. The ratio of the heat produced by this half coil to that by the original coil is`,
    options: [
      `2 :1`,
      `1 :2`,
      `1 :4`,
      `4 :1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 :1`
  },
  {
    question: `If the cold junction of a thermocouple is kept at 0℃ and the hot junction is kept at 𝑇℃, then the relation between neutral temperature (𝑇𝑛) and temperature of inversion (𝑇𝑖) is`,
    options: [
      `𝑇𝑛 = 𝑇𝑖 2`,
      `𝑇𝑛 = 2𝑇𝑖`,
      `𝑇𝑛 = 𝑇𝑖 − 𝑇`,
      `𝑇𝑛 = 𝑇𝑖 + 𝑇`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑇𝑛 = 𝑇𝑖 2`
  },
  {
    question: `The reading of the ammeter as per figure shown is`,
    options: [
      `1 8 𝐴`,
      `3 4 𝐴`,
      `1 2 𝐴`,
      `2 𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 4 𝐴`
  },
  {
    question: `In the circuit shown, the currents 𝑖1 and 𝑖2are`,
    options: [
      `𝑖1 = 3A, 𝑖2 = 1A`,
      `𝑖1 = 1A, 𝑖2 = 3A`,
      `𝑖1 = 0.5A, 𝑖2 = 1.5 A`,
      `𝑖1 = 1.5 A, 𝑖2 = 0.5 A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑖1 = 0.5A, 𝑖2 = 1.5 A`
  },
  {
    question: `When a potential difference is applied across the ends of a linear metallic conductor`,
    options: [
      `The free electrons are accelerated continuously from the lower potential end to the higher potential end 12V, 1Ω 12Ω 4Ω 2Ω i 1 i 2 2 2 2 2 2V A A C B 80  R G P a g e | 40 of the conductor`,
      `The free electrons are accelerated continuously from the higher potential end to the lower potential end of the conductor`,
      `The free electrons acquire a constant drift velocity from the lower potential end to the higher potential end of the conductor`,
      `The free electrons are set in motion from their position of rest`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The free electrons acquire a constant drift velocity from the lower potential end to the higher potential end of the conductor`
  },
  {
    question: `A thermocouple of resistance 1.6Ω is connected in series with a galvanometer of 8Ω resistance. The thermocouple develops an 𝑒.m.f. of 10𝜇𝑉 per degree temperature difference between two junctions. When one junction is kept at 0℃ and the other in a molten metal, the galvanometer reads 8 𝑚𝑖𝑙𝑙𝑖𝑣𝑜𝑙𝑡. The temperature of molten metal, when 𝑒.m.f. varies linearly with temperature difference, will be`,
    options: [
      `960℃`,
      `1050℃`,
      `1275℃`,
      `1545℃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 960℃`
  },
  {
    question: `The resistance of hot tungsten filament is about 10 times the cold resistance. What will be the resistance of 100 W and 200 lamps, when not in use?`,
    options: [
      `40 Ω`,
      `20 Ω`,
      `400 Ω`,
      `200 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 40 Ω`
  },
  {
    question: `The potential difference between the terminals of a cell in open circuit is 2.2V with resistance of 5 Ω across the terminals of a cell, the terminal potential difference is 1.8V. the resistance of the cell is`,
    options: [
      `9 10Ω`,
      `10 9 Ω`,
      `7 12Ω`,
      `12 7 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 9 Ω`
  },
  {
    question: `The circuit shown here is used to compare the emf of two cells 𝐸1 and𝐸2(𝐸1 > 𝐸2). The null point is at 𝐶 when the galvanometer is connected to 𝐸2. when the galvanometer is connected to 𝐸2, the null point will be`,
    options: [
      `To the left of 𝐶`,
      `To the right of 𝐶`,
      `At 𝐶 itself`,
      `None where on 𝐴𝐵`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) To the left of 𝐶`
  },
  {
    question: `A cell of constant emf first connected to a resistance 𝑅1and then connected to a resistance𝑅2.`,
    options: [
      `√𝑅1𝑅2`,
      `√𝑅1 𝑅2`,
      `𝑅1 − 𝑅2 2`,
      `𝑅1 + 𝑅2 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) √𝑅1𝑅2`
  },
  {
    question: `Find the equivalent resistance between the points 𝑎 and 𝑏`,
    options: [
      `2 Ω`,
      `4 Ω`,
      `8 Ω`,
      `16 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 Ω`
  },
  {
    question: `An ammeter with internal resistance 90Ω reads 1.85 𝐴 when connected in a circuit containing a battery and two resistors 700Ω and 410Ω in series. Actual current will be`,
    options: [
      `1.85 𝐴`,
      `Greater than 1.85 𝐴`,
      `Less than 1.85 𝐴`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Greater than 1.85 𝐴`
  },
  {
    question: `The current through the circuit shown in figure 1A. If each of 4Ω the resistors is replaced by 2Ω resistor, the current in circuit will become nearly C A B V G E1 E2 4 8 4 2 10 b a P a g e | 41`,
    options: [
      `1.11 A`,
      `1.25 A`,
      `1.34 A`,
      `1.67 A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.11 A`
  },
  {
    question: `A 36Ω galvanometer is shunted by resistance of 4Ω. The percentage of the total current, which passes through the galvanometer is`,
    options: [
      `8%`,
      `9%`,
      `10%`,
      `91%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10%`
  },
  {
    question: `In the figure a carbon resistor has bands of different colours on its body as mentioned in the figure. The value of the resistance is`,
    options: [
      `2.2 𝑘 Ω`,
      `3.3 𝑘 Ω`,
      `5.6 𝑘 Ω`,
      `9.1 𝑘 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9.1 𝑘 Ω`
  },
  {
    question: `In a potentiometer experiment, the galvanometer shows no deflection when a cell is connected across 60 𝑐𝑚 of the potentiometer wire. If the cell is shunted by a resistance of 6Ω, the balance is obtained across 50 𝑐𝑚 of the wire. The internal resistance of the cell is`,
    options: [
      `0.5 Ω`,
      `0.6 Ω`,
      `1.2 Ω`,
      `1.5 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.2 Ω`
  },
  {
    question: `Consider a thin square sheet of side 𝐿 and thickness 𝑡, made of a material of resistivity 𝜌. The resistance between two opposite faces, shown by the shaded areas in the figure is`,
    options: [
      `Directly proportional to 𝐿`,
      `Directly proportional to 𝑡`,
      `Independent of 𝐿`,
      `Independent of 𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Independent of 𝐿`
  },
  {
    question: `When 1 kg of hydrogen forms water, 34 × 106 cal of heat is liberated. If ECE of hydrogen is (1/96500,000)kg C−1, then the minimum voltage requird for decomposition of water is`,
    options: [
      `0.75 V`,
      `3.0 V`,
      `1.5 V`,
      `6.0 V`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.5 V`
  },
  {
    question: `The reciprocal of resistance is`,
    options: [
      `Conductance`,
      `Resistivity`,
      `Voltage`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Conductance`
  },
  {
    question: `The resistance of a wire is 20 𝑜ℎ𝑚. It is so stretched that the length becomes three times, then the new resistance of the wire will be`,
    options: [
      `6.67 𝑜ℎ𝑚`,
      `60.0 𝑜ℎ𝑚`,
      `120 𝑜ℎ𝑚`,
      `180.0 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 180.0 𝑜ℎ𝑚`
  },
  {
    question: `In the circuit shown the cells 𝐴 and 𝐵 have negligible resistance. For 𝑉𝐴 = 12𝑉, 𝑅1 = 500Ω and 𝑅 = 100Ω the galvanometer (G) shows no deflection. The value of 𝑉𝐵 is`,
    options: [
      `4𝑉`,
      `2𝑉`,
      `12𝑉`,
      `6𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2𝑉`
  },
  {
    question: `Under what condition will the strength of current in a wire of resistance 𝑅 be the same for connection is 𝑛 L t 2 Ω 4 Ω 4 Ω 15 Ω 15 Ω 15 Ω 10 V P a g e | 42 1Ω 2Ω series or in parallel of 𝑛 identical cells each of the internal resistance 𝑟, when`,
    options: [
      `𝑅 = 𝑛𝑟`,
      `𝑅 = 𝑟/𝑛`,
      `𝑅 = 𝑟`,
      `𝑅 → ∞, 𝑟 → 0`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅 = 𝑟`
  },
  {
    question: `Two bulbs 40 W and 60 W and rated voltage 240 V are connected in series across a potential difference of 420 V. Which bulb will work at above its rated voltages?`,
    options: [
      `40 W bulb`,
      `60 W bulb`,
      `Both will work`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 60 W bulb`
  },
  {
    question: `A thermocouple uses Bismuth and Tellurium as the dissimilar metals. The sensitivity of bismuth is −72𝜇 𝑉/℃ and that of the tellurium is 500𝜇 𝑉/℃. If the difference between hot and cold junction is 100℃, then the maximum output will be`,
    options: [
      `50 𝑚𝑉`,
      `7.2 𝑚𝑉`,
      `42.8 𝑚𝑉`,
      `57.2 𝑚𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 57.2 𝑚𝑉`
  },
  {
    question: `The resistance of an ideal voltmeter is`,
    options: [
      `Zero`,
      `Very low`,
      `Very large`,
      `Infinite`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Infinite`
  },
  {
    question: `A battery of e. m. f. 𝐸 and internal resistance 𝑟 is connected to a variable resistor 𝑅 as shown here. Which one of the following is true`,
    options: [
      `Potential difference across the terminals of the battery is maximum when 𝑅 = 𝑟`,
      `Power delivered to the resistor is maximum when 𝑅 = 𝑟`,
      `Current in the circuit is maximum when 𝑅 = 𝑟`,
      `Current in the circuit is maximum when 𝑅 ≫ 𝑟`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Power delivered to the resistor is maximum when 𝑅 = 𝑟`
  },
  {
    question: `A potential difference 𝑉 is applied to a copper wire of length 𝑙 and thickness 𝑑. If 𝑉 is doubled, the drift velocity`,
    options: [
      `Is doubled`,
      `Is halved`,
      `Remains same`,
      `Becomes zero`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Is doubled`
  },
  {
    question: `Two copper wires of lengths 𝑙 and 2𝑙 have radii 𝑟 and 2𝑟 respectively. What is ratio of their specific resistances?`,
    options: [
      `1 : 2`,
      `2 : 1`,
      `1 : 1`,
      `1 : 3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 : 1`
  },
  {
    question: `What is the equivalent resistance between 𝐴 and 𝐵 in the given circuit?`,
    options: [
      `4Ω`,
      `2Ω`,
      `8 3 Ω`,
      `3 8 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8 3 Ω`
  },
  {
    question: `A metal wire of specific resistance 64 × 10−6𝑜ℎ𝑚− 𝑐𝑚 and length 198 𝑐𝑚 has a resistance of 7 𝑜ℎ𝑚, the radius of the wire will be`,
    options: [
      `2.4 𝑐𝑚`,
      `0.24 𝑐𝑚`,
      `0.024 𝑐𝑚`,
      `24 𝑐𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.024 𝑐𝑚`
  },
  {
    question: `A potential difference is applied across the ends of a metallic wire. If the potential difference is doubled, the drift velocity will`,
    options: [
      `Be doubled`,
      `Be halved`,
      `Be quadrupled`,
      `Remain unchanged`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Be doubled`
  },
  {
    question: `In the figure shown below, the terminal voltage across 𝐸2 is 8Ω 4Ω 4Ω 2Ω 2Ω 2Ω 2Ω A B E D C E r R P a g e | 43`,
    options: [
      `12 V`,
      `12.66 V`,
      `11.34 V`,
      `11.66 V`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 11.34 V`
  },
  {
    question: `A silver voltameter of resistance 2 𝑜ℎ𝑚 and a 3 𝑜ℎ𝑚 resistor are connected in series across a cell. If a resistance of 2 𝑜ℎ𝑚 is connected in parallel with the voltameter, then the rate of deposition of silver`,
    options: [
      `Decreases by 25%`,
      `Increases by 25%`,
      `Increases by 37.5%`,
      `Decreases by 37.5%`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Decreases by 37.5%`
  },
  {
    question: `A tap supplies water at 22℃. A man takes 1 L of water per min at 37℃ from the geyser. The power of the geyser is`,
    options: [
      `525 W`,
      `1050 W`,
      `1575 W`,
      `2100 W`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1050 W`
  },
  {
    question: `When a current flows through a conductor its temperature`,
    options: [
      `May increase or decrease`,
      `Remains same`,
      `Decrease`,
      `Increase`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Increase`
  },
  {
    question: `An electric bulb is marked 100 W, 230 V. If the supply voltage drops to 115 V, what is the total energy produced by the bulb in 10 min?`,
    options: [
      `30 kJ`,
      `20 kJ`,
      `15 kJ`,
      `10 kJ`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15 kJ`
  },
  {
    question: `The potentiometer is superior to a voltmeter for measuring a potential difference because`,
    options: [
      `The resistance of the voltmeter`,
      `The potentiometer does not draw any current from the source of the potential`,
      `The sensitivity of potentiometer is better than that of the voltmeter`,
      `The voltmeter has a dial and of small size`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The potentiometer does not draw any current from the source of the potential`
  },
  {
    question: `Constantan wire is used in making standard resistances because its`,
    options: [
      `Specific resistance is low`,
      `Density is high`,
      `Temperature coefficient of resistance is negligible`,
      `Melting point is high`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Temperature coefficient of resistance is negligible`
  },
  {
    question: `For a given thermocouple neutral temperature`,
    options: [
      `Is a constant`,
      `Depends on cold junction temperature`,
      `Depends on inversion temperature`,
      `Double that of cold junction temperature`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Is a constant`
  },
  {
    question: `An electric cable of copper has just one wire of radius 9 mm. Its resistance is 5Ω. This single copper wire of cable is replaced by 6 different well insulated copper wires each of radius 3 mm. The total resistance of the cable will now be equal to`,
    options: [
      `7.5 Ω`,
      `45 Ω`,
      `90 Ω`,
      `270 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7.5 Ω`
  },
  {
    question: `Two resistance 𝑅1 and 𝑅2 are joined as shown in the figure to two batteries of e.m.f. 𝐸1 and 𝐸2. If 𝐸2 is short-circuited, the current through 𝑅1 is`,
    options: [
      `𝐸1/𝑅1`,
      `𝐸2/𝑅1`,
      `𝐸2/𝑅2`,
      `𝐸1/(𝑅2 + 𝑅1)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐸1/𝑅1`
  },
  {
    question: `When two resistances 𝑅1 and 𝑅2 are connected in series, they consume 12 W powers. When they are connected in parallel, they consume 50 W powers. What the ratio of the powers of 𝑅1 and 𝑅2?`,
    options: [
      `1/4`,
      `4`,
      `3/2`,
      `3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3/2`
  },
  {
    question: `The lowest resistance which can be obtained by connecting 10 resistors each of 1/10 𝑜ℎ𝑚 is`,
    options: [
      `1/250 Ω`,
      `1/200 Ω`,
      `1/100 Ω`,
      `1/10 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1/100 Ω`
  },
  {
    question: `The electron of hydrogen atom is considered to be revolving round in circular orbit of radius ℎ2/𝑚𝑒2with E1 R1 R2 E2 8 V 12 V E 1 E 1 2 9Ω P a g e | 44 velocity 𝑒2 ℎ⁄ , where ℎ = ℎ/2𝜋. The current 𝑖 is`,
    options: [
      `4𝜋2𝑚𝑒5 ℎ2`,
      `4𝜋2𝑚𝑒2 ℎ3`,
      `4𝜋2𝑚2𝑒5 ℎ3`,
      `4𝜋2𝑚𝑒5 ℎ3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4𝜋2𝑚𝑒5 ℎ3`
  },
  {
    question: `Two wires of same metal have the same length but their cross sections are in the retio 3:1. They are joined in series. The resistance of the thicker wire is 10Ω. The total resistance of the combination is`,
    options: [
      `5/2 Ω`,
      `40/3 Ω`,
      `40 Ω`,
      `100 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40 Ω`
  },
  {
    question: `A copper wire of length 𝐿 and radius 𝑟 is nickel plated till its final radius become 𝑅 but length remains 𝐿. If the resistivity of nickel and copper be ρn and ρc respectively, the conductance of the nickelled wire is`,
    options: [
      `𝜋𝑟2 𝐿. ρc`,
      `𝜋(𝑅2 − 𝑟2) 𝐿. ρn`,
      `𝜋 𝐿 [𝑟2 ρc + (𝑅2 − 𝑟2) ρn ]`,
      `𝐿ρc 𝜋𝑟2 + 𝐿. ρn 𝜋(𝑅2 − 𝑟2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝜋 𝐿 [𝑟2 ρc + (𝑅2 − 𝑟2) ρn ]`
  },
  {
    question: `Following figure shows cross-sections through three long conductors of the same length and material, with square cross-section of edge lengths as shown. Conductor 𝐵 will fit snugly within conductor 𝐴, and conductor 𝐶 will fit snugly within conductor 𝐵. Relationship between their end to end resistance is`,
    options: [
      `𝑅𝐴 = 𝑅𝐵 = 𝑅𝐶`,
      `𝑅𝐴 > 𝑅𝐵 > 𝑅𝐶`,
      `𝑅𝐴 < 𝑅𝐵 < 𝑅𝐶`,
      `Information is not sufficient`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅𝐴 = 𝑅𝐵 = 𝑅𝐶`
  },
  {
    question: `A 100 𝑉 voltmeter of internal resistance 20 𝑘Ω in series with a high resistance 𝑅 is connected to a 110 𝑉 line. The voltmeter reads 5 𝑉, the value of 𝑅 is`,
    options: [
      `210 𝑘Ω`,
      `315 𝑘Ω`,
      `420 𝑘Ω`,
      `440 𝑘Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 420 𝑘Ω`
  },
  {
    question: `Three voltmeters A, B and C having resistances R, 1.5R and 3R respectively are used in a circuit as shown. When a potential difference is applied between X and Y, the readings of the voltmeters are 𝑉1, 𝑉2𝑎𝑛𝑑 𝑉3 respectively. Then`,
    options: [
      `𝑉1 = 𝑉2 = 𝑉3`,
      `𝑉1 < 𝑉2 = 𝑉2`,
      `𝑉1 > 𝑉2 > 𝑉3`,
      `𝑉1 > 𝑉2 > 𝑉3`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑉1 = 𝑉2 = 𝑉3`
  },
  {
    question: `The potential drop across the 3Ω resistor is`,
    options: [
      `1 𝑉`,
      `1.5 𝑉`,
      `2 V`,
      `3 𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝑉`
  },
  {
    question: `A conductor wire having 1029 free electrons/m3 carries a current of 20A. If the cross-section of the wire is 1mm2, then the drift velocity of electrons will be`,
    options: [
      `6.25 × 10−3ms−1`,
      `1.25 × 10−5ms−1`,
      `1.25 × 10−3ms−1`,
      `1.25 × 10−4ms−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.25 × 10−3ms−1`
  },
  {
    question: `Two wires have resistances 𝑅 and 2𝑅. When both are joining in series and in parallel, then ratio of heats generated in these situations on applying the same voltage, is`,
    options: [
      `2 : 1`,
      `1 : 2`,
      `2 : 9`,
      `9 : 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 : 9`
  },
  {
    question: `The potential difference in open circuit for a cell is 2.2 𝑣𝑜𝑙𝑡. When a 4 𝑜ℎ𝑚 resistor is connected between its two electrodes the potential difference becomes 2 𝑣𝑜𝑙𝑡. The internal resistance of the cell will be`,
    options: [
      `1 𝑜ℎ𝑚`,
      `0.2 𝑜ℎ𝑚`,
      `2.5 𝑜ℎ𝑚`,
      `0.4 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.4 𝑜ℎ𝑚`
  },
  {
    question: `The temperature of hot junction of a thermocouple changes from 80℃ to 100℃, the percentage change in thermo electric power is 3 4 3 V 6 A B C X Y A B C a a3 a2 P a g e | 45`,
    options: [
      `25%`,
      `20%`,
      `10%`,
      `8%`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25%`
  },
  {
    question: `Two bulbs, one of 50 𝑤𝑎𝑡𝑡 and another of 25 𝑤𝑎𝑡𝑡 are connected in series to the mains. The ratio of the currents through them is`,
    options: [
      `2 :1`,
      `1 :2`,
      `1 :1`,
      `Without voltage, cannot be calculated`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 :1`
  },
  {
    question: `When a resistor of 11 Ω is connected in series with an electric cell, the current flowing in it is 0.5 𝐴. Instead, when a resistor of 5 Ω is connected to the same electric cell in series, the current increases by 0.4 𝐴. The internal resistance of the cell is`,
    options: [
      `1.5 Ω`,
      `2 Ω`,
      `2.5 Ω`,
      `3.5 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.5 Ω`
  },
  {
    question: `A battery of emf 10V and internal resistance 3 Ωis connected to an external resistor. The current in the circuit is 0.5A. the terminal voltage of the battery when the circuit is close is`,
    options: [
      `10V`,
      `Zero`,
      `1.5 V`,
      `8.5 V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8.5 V`
  },
  {
    question: `The relation between voltage sensitivity (𝜎𝑉) and current sensitivity (𝜎𝑖) of a moving coil galvanometer is (resistance of galvanometer is G).`,
    options: [
      `𝜎𝑖 𝐺 = 𝜎v`,
      `𝜎v G = 𝜎i`,
      `𝐺 𝜎v = 𝜎i`,
      `𝐺 𝜎i = 𝜎V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝜎𝑖 𝐺 = 𝜎v`
  },
  {
    question: `An electric heater of resistances 6 Ω is run for 10 min on 120 V line. The energy librated in this period of time is?`,
    options: [
      `7.2 × 105 J`,
      `14.4 × 105 J`,
      `43.2 × 105 J`,
      `28.8 × 105 J`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 14.4 × 105 J`
  },
  {
    question: `A certain piece of silver of given mass is to be made like a wire. Which of the following combinations of length (𝐿) and the area of cross-section (𝐴) will lead to the smallest resistance`,
    options: [
      `𝐿 and 𝐴`,
      `2𝐿 and 𝐴/2`,
      `𝐿/2 and 2 𝐴`,
      `Any of the above, because volume of silver remains same`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝐿/2 and 2 𝐴`
  },
  {
    question: `Thomson coefficient of a conductor is 10𝜇𝑉/𝐾. The two ends of it are kept at 50℃ and 60℃ respectively. Amount of heat absorbed by the conductor when a charge of 10𝐶 flows through it is`,
    options: [
      `1000 𝐽`,
      `100 𝐽`,
      `100 𝑚𝐽`,
      `1 𝑚𝐽`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 𝑚𝐽`
  },
  {
    question: `The junction of Ni-Cu thermo couple are maintained at 0℃ and 100℃. The seeback emf developed in the temperature is 𝑎Ni−Cu = 16.3 × 10−6V℃−1 𝑏Ni−Cu = −0.021× 10−6V℃−1`,
    options: [
      `2.73 × 103V`,
      `1.42 × 10−3V`,
      `3.68 × 10−3V`,
      `2.23 × 103V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.42 × 10−3V`
  },
  {
    question: `A source of a primary cell is 2V. what is the short circuited it provides 4A current, then the internal resistance of cell will be`,
    options: [
      `8 Ω`,
      `2.0 Ω`,
      `4 Ω`,
      `0.5 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.5 Ω`
  },
  {
    question: `For what value of unknown resistance 𝑋, the potential difference between 𝐵 and 𝐷 will be zero in the circuit shown in the figure B C 1 1 12 X 6 D A 1 1 P a g e | 46`,
    options: [
      `4 Ω`,
      `6 Ω`,
      `2 Ω`,
      `5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 Ω`
  },
  {
    question: `The 𝑉 − 𝐼 graph for a wire of copper of length 𝐿 and cross-section ares 𝐴 is shown in adjoining figure. The slope of the graph will be`,
    options: [
      `Less if the experiment is repeated at a higher temperature`,
      `More if a wire of silver having the same dimension is used`,
      `Doubled if the length of the wire is doubled`,
      `Halved if length of the wire is halved`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Doubled if the length of the wire is doubled`
  },
  {
    question: `The heat generated through 2 𝑜ℎ𝑚 and 8 𝑜ℎ𝑚 resistances separately, when a condenser of 200 𝜇F capacity charged to 200 𝑉 is discharged one by one, will be`,
    options: [
      `4 𝐽 and 16 𝐽 respectively`,
      `16 𝐽 and 4 𝐽 respectively`,
      `4 𝐽 and 8 𝐽 respectively`,
      `4 𝐽 and 4 𝐽 respectively`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4 𝐽 and 4 𝐽 respectively`
  },
  {
    question: `The circuit shown here is used to compare the e.m.f.'s of two cells 𝐸1 and 𝐸2(𝐸1 > 𝐸2). The null point is at 𝐶 when the galvanometer is connected to 𝐸1. When the galvanometer is connected to 𝐸2, the null point will be`,
    options: [
      `To the left of 𝐶`,
      `To the right of 𝐶`,
      `At 𝐶 itself`,
      `No where on 𝐴𝐵`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) To the left of 𝐶`
  },
  {
    question: `The colour code for a resistor of resistance 3.5𝑘Ω with 5% tolerance is`,
    options: [
      `Orange, green, red and gold`,
      `Red, yellow, black and gold`,
      `Orange, green, orange and silver`,
      `Orange, green, red and silver`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Orange, green, red and gold`
  },
  {
    question: `The tangent galvanometer, when connected in series with a standard resistance can be used as`,
    options: [
      `An ammeter`,
      `A voltmeter`,
      `A wattmeter`,
      `Both ammeter and voltmeter`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) A voltmeter`
  },
  {
    question: `Which of the following statement is correct`,
    options: [
      `Both Peltier and Joule effects are reversible`,
      `Both Peltier and Joule effects are irreversible`,
      `Joule effect is reversible, whereas Peltier effect is irreversible`,
      `Joule effect is reversible, whereas Peltier effect is reversible`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Joule effect is reversible, whereas Peltier effect is reversible`
  },
  {
    question: `Four wires 𝐴𝐵, 𝐵𝐶, 𝐶𝐷, 𝐷𝐴 of resistance 4 𝑜ℎ𝑚 each and a fifth wire 𝐵𝐷 of resistance 8 𝑜ℎ𝑚 are joined to form a rectangle 𝐴𝐵𝐶𝐷 of which 𝐵𝐷 is a diagonal. The effective resistance between the points 𝐴 and 𝐵 is`,
    options: [
      `24 𝑜ℎ𝑚`,
      `16 𝑜ℎ𝑚`,
      `4 3 𝑜ℎ𝑚`,
      `8 3 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 3 𝑜ℎ𝑚`
  },
  {
    question: `Two wires of the same material and equal length are joined in parallel combination. If one of them has half the thickness of the other and the thinner wire has a resistance of 8 𝑜ℎ𝑚𝑠, the resistance of the combination is equal to`,
    options: [
      `5 8 𝑜ℎ𝑚`,
      `8 5 𝑜ℎ𝑚`,
      `3 8 𝑜ℎ𝑚`,
      `8 3 𝑜ℎ𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 5 𝑜ℎ𝑚`
  },
  {
    question: `In the circuit shown, the internal resistance of the cell is negligible. The steady state current in the 2 Ω resistance is E2 E1 C B B G A P a g e | 47`,
    options: [
      `0.6A`,
      `1.2A`,
      `0.9A`,
      `1.5A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.9A`
  },
  {
    question: `The equivalent resistance and potential difference between 𝐴 and 𝐵 for the circuit is respectively`,
    options: [
      `4 Ω, 8 𝑉`,
      `8 Ω, 4 𝑉`,
      `2 Ω, 2 𝑉`,
      `16 Ω, 8 𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 Ω, 8 𝑉`
  },
  {
    question: `A wire of resistance 18Ω is divided into three equal parts. These parts are connected in side of triangle, the equivalent resistance of any two corners of triangle will be`,
    options: [
      `18Ω`,
      `9Ω`,
      `6Ω`,
      `4Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 4Ω`
  },
  {
    question: `The power of heater is 500 W at 800℃. What will be its power at 200℃ ? (Given : temperature coefficient of resistance, 𝛼 = 4 × 10−4℃−1)`,
    options: [
      `484 W`,
      `672 W`,
      `526 W`,
      `620 W`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 620 W`
  },
  {
    question: `The equivalent resistance of the arrangement of resistances shown in adjoining figure between the points 𝐴 and 𝐵 is`,
    options: [
      `6 𝑜ℎ𝑚`,
      `8 𝑜ℎ𝑚`,
      `16 𝑜ℎ𝑚`,
      `24 𝑜ℎ𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 𝑜ℎ𝑚`
  },
  {
    question: `Three identical resistances 𝐴, 𝐵 and 𝐶 are connected as shown in figure. The heat produced will be maximum`,
    options: [
      `In 𝐵`,
      `In 𝐵 and 𝐶`,
      `In 𝐴`,
      `Same for 𝐴, 𝐵 and 𝐶`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) In 𝐴`
  },
  {
    question: `In a conductor 4 𝑐𝑜𝑢𝑙𝑜𝑚𝑏 of charge flows for 2 𝑠𝑒𝑐𝑜𝑛𝑑𝑠. The value of electric current will be`,
    options: [
      `4 𝑣𝑜𝑙𝑡`,
      `4 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `2 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `2 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 𝑎𝑚𝑝𝑒𝑟𝑒`
  },
  {
    question: `The main supply voltage to a room is 120 V. The resistance of the lead wires is 6Ω. A 60 W bulb is already giving light. What is the decrease in voltage across the bulb when a 240 W heater is switched on? A R B R C R A B 20 16 8 16 6 9 18 4 Ω 2 Ω 3 Ω 2.8 Ω 𝐸 = 6V 𝐶 = 0.7 μF P a g e | 48`,
    options: [
      `No change`,
      `10 V`,
      `20 V`,
      `More than 10 V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) More than 10 V`
  },
  {
    question: `Two bulbs consume same power when operated at 200 V and 300 V respectively. When these bulbs are connected in series across a DC source of 400 V, then the ratio of power consumed across them is`,
    options: [
      `2/3`,
      `3/2`,
      `4/9`,
      `9/4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4/9`
  },
  {
    question: `A wire is stretched so as to change its diameter by 0.25%. The percentage change in resistance is`,
    options: [
      `4.0%`,
      `2.0%`,
      `1.0%`,
      `0.5%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.0%`
  },
  {
    question: `The resistor in which maximum heat will be produced is`,
    options: [
      `2 Ω`,
      `3 Ω`,
      `4 Ω`,
      `6 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 Ω`
  },
  {
    question: `If an ammeter is connected in parallel to a circuit, it is likely to be damaged due to excess`,
    options: [
      `Current`,
      `Voltage`,
      `Resistance`,
      `All of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Current`
  },
  {
    question: `See the electrical circuit shown in this figure. Which of the following equations is a 𝑐𝑜𝑟𝑟𝑒𝑐𝑡 equation for it`,
    options: [
      `𝜀1 − (𝑖1 + 𝑖2)𝑅 − 𝑖1𝑟1 = 0`,
      `𝜀2 − 𝑖2𝑟2 − 𝜀1 − 𝑖1𝑟1 = 0`,
      `−𝜀2 − (𝑖1 + 𝑖2)𝑅 + 𝑖2𝑟2 = 0`,
      `𝜀1 − (𝑖1 + 𝑖2)𝑅 + 𝑖1𝑟1 = 0`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝜀1 − (𝑖1 + 𝑖2)𝑅 − 𝑖1𝑟1 = 0`
  },
  {
    question: `In the adjoining circuit, the e.m.f. of the cell is 2 𝑣𝑜𝑙𝑡 and the internal resistance is negligible. The resistance of the voltmeter is 80 𝑜ℎ𝑚. The reading of the voltmeter will be`,
    options: [
      `0.80 𝑣𝑜𝑙𝑡`,
      `1.60 𝑣𝑜𝑙𝑡`,
      `1.33 𝑣𝑜𝑙𝑡`,
      `2.00 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.33 𝑣𝑜𝑙𝑡`
  },
  {
    question: `5 cells, each of emf 0.2𝑉 and internal resistance 1Ω are connected to an external circuit of resistance of 10Ω. Find the current through external circuit`,
    options: [
      `1 2.5 𝐴`,
      `1 10𝐴`,
      `1 15𝐴`,
      `1 2 𝐴`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 15𝐴`
  },
  {
    question: `A 2V battery, a 990 Ω resistor and a potentiometer of 2m length, all are connected in series of the residence of potentiometer wire is 10 Ω, then the potential gradient of the potentiometer wire is`,
    options: [
      `0.05𝑉𝑚−1`,
      `0.5𝑉𝑚−1`,
      `0.01𝑉𝑚−1`,
      `0.1 𝑉𝑚−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.01𝑉𝑚−1`
  },
  {
    question: `A galvanometer of resistance 36 Ω is changed into an ammeter by using a shunt of 4 Ω. The fraction 𝑓0 of total current passing through the galvanometer is`,
    options: [
      `1 40`,
      `1 4`,
      `1 140`,
      `1 10`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 10`
  },
  {
    question: `Two cells of equal 𝑒. 𝑚. 𝑓. and of internal resistance 𝑟1 and 𝑟2(𝑟1 > 𝑟2) are connected in series. On connecting this combination to an external resistance 𝑅, it is observed that the potential difference across the first cell becomes zero. The value of 𝑅 will be`,
    options: [
      `𝑟1 + 𝑟2`,
      `𝑟1 − 𝑟2`,
      `𝑟1 + 𝑟2 2`,
      `𝑟1 − 𝑟2 2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑟1 − 𝑟2`
  },
  {
    question: `The current I drawn from the 5 V source will be + – 2V 80  20  80  V 5 Ω 6 Ω 3 Ω 4 Ω 2 Ω P a g e | 49`,
    options: [
      `0.33A`,
      `0.5A`,
      `0.67A`,
      `0.17A`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.5A`
  },
  {
    question: `If 2 A of current is passed through CuSO4 solution for 32 s, then the number of copper ions deposited at the cathode will be`,
    options: [
      `4 × 1020`,
      `2 × 1020`,
      `4 × 1019`,
      `2 × 1019`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 × 1020`
  },
  {
    question: `A steady current is set up in a metallic wire of non-uniform cross-section. How is the rate of flow of electrons (𝑅) related to the area of cross-section (𝐴)?`,
    options: [
      `𝑅 ∝ 𝐴−1`,
      `𝑅 ∝ 𝐴`,
      `𝑅 ∝ 𝐴2`,
      `𝑅 is independent of 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅 ∝ 𝐴−1`
  },
  {
    question: `If 96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠 of electricity liberates one gram equivalent of any substance, the time taken for a current of 0.15 𝑎𝑚𝑝𝑒𝑟𝑒𝑠 to deposit 20𝑚𝑔 of copper from a solution of copper sulphate is (Chemical equivalent of copper = 32)`,
    options: [
      `5 𝑚𝑖𝑛20 𝑠𝑒𝑐`,
      `6 𝑚𝑖𝑛42 𝑠𝑒𝑐`,
      `4 𝑚𝑖𝑛40 𝑠𝑒𝑐`,
      `5 𝑚𝑖𝑛50 𝑠𝑒𝑐`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 𝑚𝑖𝑛42 𝑠𝑒𝑐`
  },
  {
    question: `The electron drift speed is small and the charge of the electron is also small but still, we obtain large current in a conductor. This is due to`,
    options: [
      `The conducting property of the conductor`,
      `The resistance of the conductor is small`,
      `The electron number density of the conductor is small`,
      `The electron number density of the conductor is enormous`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The electron number density of the conductor is enormous`
  },
  {
    question: `What is the equivalent resistance across the points 𝐴 and 𝐵 in the circuit given below?`,
    options: [
      `8 Ω`,
      `12 Ω`,
      `16 Ω`,
      `32 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 8 Ω`
  },
  {
    question: `The resistance of the filament of an electric bulb changes with temperature. If an electric bulb rated 220 volt and 100 watt is connected to (220× .8) 𝑣𝑜𝑙𝑡 sources, then the actual power would be`,
    options: [
      `100× 0.8 𝑤𝑎𝑡𝑡`,
      `100× (0.8)2 𝑤𝑎𝑡𝑡`,
      `Between 100× 0.8 𝑤𝑎𝑡𝑡 and 100 𝑤𝑎𝑡𝑡`,
      `Between 100× (0.8)2𝑤𝑎𝑡𝑡 and 100× 0.8 𝑤𝑎𝑡𝑡`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Between 100× (0.8)2𝑤𝑎𝑡𝑡 and 100× 0.8 𝑤𝑎𝑡𝑡`
  },
  {
    question: `Every atom makes one free electron in copper. If 1.1 A Current is flowing in the wire of copper having 1 mm diameter, then the drift velocity(approx.) will be (density of copper=9 × 103 kg m−3and atomic weight of copper=63)`,
    options: [
      `0.1 mms−1`,
      `0.2 mms−1`,
      `0.3 mms−1`,
      `0.2 mms−1`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.1 mms−1`
  },
  {
    question: `In a copper voltmeter , if the current (𝐼) and time (𝑡) variations of the type as shown in figure, the mass deposited in 30 min is [Atomic weight of copper is 63.5 and Faraday constant is 96500 C per g equivalent]`,
    options: [
      `0.078 g`,
      `0.054 g`,
      `0.039 g`,
      `0.0195 g 16 Ω 12 Ω 2.5 Ω 10 Ω 10 Ω 10 Ω C A B E D 20Ω 5Ω 10Ω 5 V + - I 10Ω 10Ω- P a g e | 50`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.039 g`
  },
  {
    question: `A wire when connected to 220𝑉 mains supply has power dissipation 𝑃1. Now the wire is cut into two equal pieces which are connected in parallel to the same supply. Power dissipation in this case is 𝑃2. Then 𝑃2 ∶ 𝑃1 is`,
    options: [
      `1`,
      `4`,
      `2`,
      `3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4`
  },
  {
    question: `A source of e. m. f. 𝐸 = 15 𝑉 and having negligible internal resistance is connected to a variable resistance so that the current in the circuit increases with time as 𝑖 = 1.2 𝑡 + 3. Then, the total charge that will flow in first five seconds will be`,
    options: [
      `10 𝐶`,
      `20 𝐶`,
      `30 𝐶`,
      `40 𝐶`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30 𝐶`
  },
  {
    question: `Electric bulb 50 𝑊-100 𝑉 glowing at full power are to be used in parallel with battery 120 𝑉, 10 Ω. Maximum number of bulbs that can be connected so that they glow in full power is`,
    options: [
      `2`,
      `8`,
      `4`,
      `6`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4`
  },
  {
    question: `10 wires (same length, same area, same material) are connected in parallel and each has 1Ω resistance, then the equivalent resistance will be`,
    options: [
      `10 Ω`,
      `1 Ω`,
      `0.1 Ω`,
      `0.001 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1 Ω`
  },
  {
    question: `In order to pass 10% of main current through a moving coil galvanometer of 99 𝑜ℎ𝑚, the resistance of the required shunt is`,
    options: [
      `9.9 Ω`,
      `10 Ω`,
      `11 Ω`,
      `9 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 11 Ω`
  },
  {
    question: `If the resistivity of a potentiometer wire be 𝜌 and area of cross-section be 𝐴, then what will be potential gradient along the wire`,
    options: [
      `𝐼𝜌 𝐴`,
      `𝐼 𝐴𝜌`,
      `𝐼𝐴 𝜌`,
      `𝐼𝐴𝜌`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐼𝜌 𝐴`
  },
  {
    question: `The current from the battery in circuit diagram shown is`,
    options: [
      `1 𝐴`,
      `2 𝐴`,
      `1.5 𝐴`,
      `3 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝐴`
  },
  {
    question: `Two bulbs when connected in parallel to a source take 100 W each. The total power consumed when they are connected in series with the same source is`,
    options: [
      `25 W`,
      `50 W`,
      `100 W`,
      `200 W`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 50 W`
  },
  {
    question: `A uniform resistance R and length L is cut into for equal parts, each of length L/4, which are then connected in parallel combination. The effective resistance of the combination will be`,
    options: [
      `R`,
      `4R`,
      `𝑅 4`,
      `𝑅 16`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅 16`
  },
  {
    question: `In a circuit 5 percent of total current passes through a galvanometer. If resistance of the galvanometer is 𝐺 then value of the shunt is`,
    options: [
      `19 𝐺`,
      `20 𝐺`,
      `𝐺 20`,
      `𝐺 19`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝐺 19`
  },
  {
    question: `An electric lamp is marked 60 𝑊, 230 𝑉. The cost of a 1 𝑘𝑊ℎ of energy is 𝑅𝑠. 1.25. The cost of using this lamp 8 ℎ𝑟𝑠 a day for 30 days is`,
    options: [
      `𝑅𝑠. 10`,
      `𝑅𝑠. 16`,
      `𝑅𝑠. 18`,
      `𝑅𝑠. 20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅𝑠. 18`
  },
  {
    question: `Two wires ′𝐴′ and ′𝐵′ of the same material have their lengths in the ratio 1 ∶ 2 and radii in the ratio 2 ∶ 1. The two wires are connected in parallel across a battery. The ratio of the heat produced in ′𝐴′ to the heat produced in ′𝐵′ for the same time is`,
    options: [
      `1 :2`,
      `2 :1`,
      `1 :8`,
      `8 :1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 :1`
  },
  {
    question: `(1)The product of a volt and a coulomb is a joule (2)The product of a volt and an ampere is a joule/second (3)The product of volt and watt is horse power (4)Watt-hour can be measured in terms of electron volt 15V 8 1 10 2 0.5 6 7 A B P a g e | 51 State if`,
    options: [
      `All four are correct`,
      `(1), (2) and (4) are correct`,
      `(1) and (3) are correct`,
      `(3) and (4) are correct`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (1), (2) and (4) are correct`
  },
  {
    question: `A copper and a chromium voltmeter are connected in series with a battery. It found that in half an hour 0.475 𝑔 of copper and 0.130 𝑔 of chromium have been deposited. The ECE ratio of copper and chromium is`,
    options: [
      `0.274`,
      `0.523`,
      `3.65`,
      `1.85`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3.65`
  },
  {
    question: `Each resistance shown in figure is 2 Ω. The equivalent resistance between A and B is`,
    options: [
      `2 Ω`,
      `4 Ω`,
      `8 Ω`,
      `1 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 Ω`
  },
  {
    question: `If 𝜎1, 𝜎2 and 𝜎3 are the conductances of three conductors, then their equivalent conductance, when they are joined in series, will be`,
    options: [
      `𝜎1 + 𝜎2 + 𝜎3`,
      `1 𝜎1 + 1 𝜎2 + 1 𝜎3`,
      `𝜎1𝜎2𝜎3 𝜎1 + 𝜎2 + 𝜎3`,
      `None of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of these`
  },
  {
    question: `The resistance of a metal increases with increasing temperature because`,
    options: [
      `The collisions of the conducting electrons with the electrons increase`,
      `The collisions of the conducting electrons with the lattice consisting of the ions of the metal increases`,
      `The number of conduction electrons decrease`,
      `The number of conduction electrons increase`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The collisions of the conducting electrons with the lattice consisting of the ions of the metal increases`
  },
  {
    question: `Two electric bulbs 𝐴 and 𝐵 are rated as 60 W and 100 W. They are connected in parallel to the same source. Then`,
    options: [
      `𝐵 draws more current than 𝐴`,
      `Currents drawn are in the ratio of their resistances`,
      `Both draw the same current`,
      `𝐴 draws more current than 𝐵`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐵 draws more current than 𝐴`
  },
  {
    question: `If an electric current is passed through a nerve of a man, then man`,
    options: [
      `Begins to laugh`,
      `Begins to weep`,
      `Is excited`,
      `Becomes insensitive to pain`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Is excited`
  },
  {
    question: `An electric bulb is rated 220 V-100 W. The power consumed by it when operated on 110 V will be`,
    options: [
      `75 W`,
      `40 W`,
      `25 W`,
      `50 W`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 25 W`
  },
  {
    question: `In the adjacent shown circuit, a voltmeter of internal resistance 𝑅, when connected across 𝐵 and 𝐶 reads 100 3 𝑉. Neglecting the internal resistance of the battery, the value of 𝑅 is`,
    options: [
      `100 𝑘Ω`,
      `75 𝑘Ω`,
      `50 𝑘Ω`,
      `25 𝑘Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 50 𝑘Ω`
  },
  {
    question: `A resistor 𝑅1 dissipates power 𝑃 when connected to a certain generator. If the resistor 𝑅2 is put in series with 𝑅1, the power dissipated by 𝑅1`,
    options: [
      `Decreases`,
      `Increases`,
      `Remains the same`,
      `Any of the above depending upon the relative values of 𝑅1 and 𝑅2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Decreases`
  },
  {
    question: `If two wires having resistances 𝑅 and 2𝑅 both are joined in series and in parallel, then ratio of heat generated in this situation, applying the same voltage is`,
    options: [
      `2 :1`,
      `1 :2`,
      `2 :9`,
      `9 :2 2Ω 2 Ω 2 Ω 2 Ω 2 Ω A V B P a g e | 52`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 :9`
  },
  {
    question: `For driving a current of 2 𝐴 for 6 𝑚𝑖𝑛𝑢𝑡𝑒𝑠 in a circuit, 1000 𝐽 of work is to be done. The e.m.f. of the source in the circuit is`,
    options: [
      `1.38 𝑉`,
      `1.68 𝑉`,
      `2.04 𝑉`,
      `3.10 𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.38 𝑉`
  },
  {
    question: `A heater of 220 V heats a volume of water in 5 min. The same heater when connected to 110 V heats the same volume of water in (minute)`,
    options: [
      `5`,
      `20`,
      `10`,
      `2.5`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20`
  },
  {
    question: `50 Ω and 100 Ω resistors are connected in series. This connection is connected with a battery of 2.4 𝑣𝑜𝑙𝑡. When a voltmeter of 100 Ω resistance is connected across 100 Ω resistor, then the reading of the voltmeter will be`,
    options: [
      `1.6 𝑉`,
      `1.0 𝑉`,
      `1.2 𝑉`,
      `2.0 𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.2 𝑉`
  },
  {
    question: `A series combination of two resistors 1 Ω each is connected to a 12 𝑉 battery of internal resistance 0.4 Ω. The current flowing through it will be`,
    options: [
      `3.5 𝐴`,
      `5 𝐴`,
      `6 𝐴`,
      `10 𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 𝐴`
  },
  {
    question: `In the circuit shown in figure, power developed across 1Ω , 2Ω , 3 Ω resistance are in ratio of`,
    options: [
      `1 : 2 : 3`,
      `4 : 2 : 27`,
      `6 : 4 : 9`,
      `2 : 1 : 27`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 : 2 : 27`
  },
  {
    question: `Four resistances 10 Ω, 5 Ω, 7 Ω and 3 Ω are connected so that they form the sides of a rectangle 𝐴𝐵, 𝐵𝐶, 𝐶𝐷 and 𝐷𝐴 respectively. Another resistance of 10 Ω is connected across the diagonal 𝐴𝐶. The equivalent resistance between 𝐴 and 𝐵 is`,
    options: [
      `2 Ω`,
      `5 Ω`,
      `7 Ω`,
      `10 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 Ω`
  },
  {
    question: `A copper voltmeter and a silver voltmeter are connected in series in a circuit. The rate of the increase in the weight of the cathode in the two voltmeters will be in the ratio of`,
    options: [
      `Atomic weights of Cu and Ag`,
      `Densities of Cu and Ag`,
      `Half of the atomic weight of Cu to the atomic weight of Ag`,
      `Half of the atomic weight of Ag to half the atomic weight of Cu`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Half of the atomic weight of Cu to the atomic weight of Ag`
  },
  {
    question: `In the circuit shown, the cell is ideal, with emf=10V. Each resistance is of 2Ω. The potential difference across the capacitor is`,
    options: [
      `12 V`,
      `10 V`,
      `8 V`,
      `zero`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8 V`
  },
  {
    question: `A current of 16 𝑎𝑚𝑝𝑒𝑟𝑒 flows through molten 𝑁𝑎𝐶𝑙 for 10 𝑚𝑖𝑛𝑢𝑡𝑒. The amount of metallic sodium that appears at the negative electrode would be`,
    options: [
      `0.23 𝑔𝑚`,
      `1.15 𝑔𝑚`,
      `2.3 𝑔𝑚`,
      `11.5 𝑔𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.3 𝑔𝑚`
  },
  {
    question: `A storage battery has e.m.f. 15 𝑣𝑜𝑙𝑡 and internal resistance 0.05 𝑜ℎ𝑚. Its terminal voltage when it is delivering 10 𝑎𝑚𝑝𝑒𝑟𝑒 is`,
    options: [
      `30 𝑣𝑜𝑙𝑡`,
      `1.00 𝑣𝑜𝑙𝑡`,
      `14.5 𝑣𝑜𝑙𝑡`,
      `15.5 𝑣𝑜𝑙𝑡`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 14.5 𝑣𝑜𝑙𝑡`
  },
  {
    question: `There are three voltmeters of the same range but of resistances 10000Ω, 8000Ω and 4000Ω respectively. The best voltmeter among these is the one whose resistance is`,
    options: [
      `10000 Ω`,
      `8000 Ω`,
      `4000 Ω`,
      `All are equally good`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10000 Ω`
  },
  {
    question: `In the circuit shown in the adjoining figure, the current between 𝐵 and 𝐷 is zero, the unknown resistance is of A B D R 10 V G H F R R R R F 3 C = 3 Ω 1 Ω 2 Ω i P a g e | 53`,
    options: [
      `4 Ω`,
      `2 Ω`,
      `3 Ω`,
      `𝑒. 𝑚. 𝑓. of a cell is required to find the value of 𝑋`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `In meter bridge or wheatstone bridge for measurement of resistance, the known and the unknown resistance are interchanged. The error so removed is`,
    options: [
      `End correction`,
      `Index error`,
      `Due to temperature effect`,
      `Random error`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) End correction`
  },
  {
    question: `The potential difference between A and B in the following figure is`,
    options: [
      `32 V`,
      `48 V`,
      `24 V`,
      `14 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 48 V`
  },
  {
    question: `Two conductors have the same resistance at 0°C but their temperature coefficients of resistance are 𝛼1𝑎𝑛𝑑 𝛼2. The respective temperature coefficients of their series and parallel combinations are nearly`,
    options: [
      `𝛼1+𝛼2 2 , 𝛼1 + 𝛼2`,
      `𝛼1+𝛼2, 𝛼1+𝛼2 2`,
      `𝛼1 + 𝛼2, 𝛼1𝛼2 𝛼1+𝛼2`,
      `𝛼1+𝛼2 2 , 𝛼1+𝛼2 2`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝛼1+𝛼2 2 , 𝛼1+𝛼2 2`
  },
  {
    question: `Figure shows a circuit with known resistances 𝑅1 .Neglect the internal resistance of the sources of current and resistance of the connecting wire. The magnitude of electromotive force 𝐸1 such that the resistances 𝑅 is zero will be`,
    options: [
      `𝐸𝑅1/𝑅2`,
      `𝐸𝑅2/𝑅1`,
      `𝐸(𝑅1 + 𝑅2)/𝑅2`,
      `𝐸𝑅1/(𝑅1 + 𝑅2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝐸(𝑅1 + 𝑅2)/𝑅2`
  },
  {
    question: `A current 𝐼 is passed for a time 𝑡 through a number of voltmeters. If 𝑚 is the mass of a substance deposited on an electrode and 𝑧 is its electrochemical equivalent, then`,
    options: [
      `𝑧𝐼𝑡 𝑚 = constant`,
      `𝑧 𝑚𝐼𝑡= constant`,
      `𝐼 𝑧𝑚𝑡= constant`,
      `𝐼𝑡 𝑧𝑚= constant`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑧𝐼𝑡 𝑚 = constant`
  },
  {
    question: `The drift velocity of the electrons in a copper wire of length 2 m under the application of a potential difference of 220 V is 0.5ms−1. Their mobility (in m2V−1s−1)`,
    options: [
      `2.5 × 10−3`,
      `2.5 × 10−2`,
      `5 × 102`,
      `5 × 10−3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5 × 10−3`
  },
  {
    question: `The inversion temperature of a copper-iron thermocouple is 540℃ when the cold junction temperature is 0℃. If the cold junction temperature is increased by 10℃, then the inversion temperature and neutral temperature of the thermocouple respectively are`,
    options: [
      `270℃ and 530℃`,
      `270℃ and 550℃`,
      `280℃ and 530℃`,
      `280℃ and 550℃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 270℃ and 530℃`
  },
  {
    question: `The heat produced by a 100 W heater in 2 min will be equal to`,
    options: [
      `12 × 103 J`,
      `10 × 103 J`,
      `6 × 103 J`,
      `3 × 103 J`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 12 × 103 J`
  },
  {
    question: `There is a current of 1.344 𝑎𝑚𝑝 in a copper wire whose area of cross-section normal to the length of the wire is 1 𝑚𝑚2. If the number of free electrons per 𝑐𝑚3 is 8.4 × 1022, then the drift velocity would be`,
    options: [
      `1.0 𝑚𝑚/𝑠𝑒𝑐`,
      `1.0 𝑚/𝑠𝑒𝑐`,
      `0.1 𝑚𝑚/𝑠𝑒𝑐`,
      `0.01 𝑚𝑚/𝑠𝑒𝑐`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1 𝑚𝑚/𝑠𝑒𝑐`
  },
  {
    question: `The neutral temperature of a thermocouple is 350℃ when the cold junction is at 0℃. When the cold junction is immersed in a bath of 30℃, the inversion temperature is R E R1 R2 E1 9Ω B A 2 A 12 V 4 V 5 Ω B X C 1 1 4 12 1 3 D A 6 Ω P a g e | 54`,
    options: [
      `700℃`,
      `600℃`,
      `350℃`,
      `670℃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 670℃`
  },
  {
    question: `𝑂ℎ𝑚′𝑠 law is true`,
    options: [
      `For metallic conductors at low temperature`,
      `For metallic conductors at high temperature`,
      `For electrolytes when current passes through them`,
      `For diode when current flows`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) For metallic conductors at low temperature`
  },
  {
    question: `Which of the following statements is correct`,
    options: [
      `Liquids obey fully the 𝑜ℎ𝑚′𝑠 law`,
      `Liquids obey partially the 𝑜ℎ𝑚′𝑠 law`,
      `There is no relation between current and p.d. for liquids`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Liquids obey partially the 𝑜ℎ𝑚′𝑠 law`
  },
  {
    question: `The range of a voltmeter of resistance 500 Ω is 10V. the resistance to be connected to convert it into an ammeter of range 10A is`,
    options: [
      `1 Ω in parallel`,
      `1 Ω in series`,
      `0.1 Ω in parallel`,
      `0.1 Ω in series`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1 Ω in parallel`
  },
  {
    question: `A uniform wire of resistance 𝑅 is uniformly compressed along its length, until its radius becomes 𝑛 times the original radius. Now resistance of the wire becomes`,
    options: [
      `𝑅 𝑛4`,
      `𝑅 𝑛2`,
      `𝑅 𝑛`,
      `𝑛𝑅`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅 𝑛4`
  },
  {
    question: `The rate of increase of thermo 𝑒.m.f. with temperature at the neutral temperature of a thermocouple`,
    options: [
      `Is negative`,
      `Is positive`,
      `Is zero`,
      `Depends upon the choice of the two materials of the thermocouple`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Is zero`
  },
  {
    question: `What length of the wire of specific resistance 48 × 10−8Ω 𝑚 is needed to make a resistance of 4.2 Ω (diameter of wire = 0.4 𝑚𝑚)`,
    options: [
      `4.1 𝑚`,
      `3.1 𝑚`,
      `2.1 𝑚`,
      `1.1 𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.1 𝑚`
  },
  {
    question: `In the given current distribution, what is the value of I?`,
    options: [
      `3A`,
      `8A`,
      `2A`,
      `5A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2A`
  },
  {
    question: `An ammeter and a voltmeter of resistance 𝑅 are connected in series to an electric cell of negligible internal resistance. Their readings are 𝐴 and 𝑉 respectively. If another resistance 𝑅 is connected in parallel with the voltmeter`,
    options: [
      `Both 𝐴 and 𝑉 will increase`,
      `Both 𝐴 and 𝑉 will decrease`,
      `𝐴 will decrease and 𝑉 will increase`,
      `𝐴 will increase and 𝑉 will decrease`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝐴 will increase and 𝑉 will decrease`
  },
  {
    question: `When the current 𝑖 is flowing a conductor, the drift velocity is 𝑣. If 2𝑖 current is flowed through the same metal but having double the area of cross-section, then the drift velocity will be`,
    options: [
      `𝑣/4`,
      `𝑣/2`,
      `𝑣`,
      `4𝑣`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑣`
  },
  {
    question: `In a typical Wheatstone network, the resistances in cycle order are 𝐴 = 10 Ω, 𝐵 = 5 Ω, 𝐶 = 4 Ω and 𝐷 = 4 Ω. For the bridge to be balanced`,
    options: [
      `10 Ω should be connected in parallel with 𝐴`,
      `10 Ω should be connected in series with 𝐴`,
      `5 Ω should be connected in series with 𝐵`,
      `5 Ω should be connected in parallel with 𝐵`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 Ω should be connected in parallel with 𝐴`
  },
  {
    question: `When a resistance of 2𝑜ℎ𝑚 is connected across the terminals of a cell, the current is 0.5 𝑎𝑚𝑝𝑒𝑟𝑒. When the resistance is increased to 5 𝑜ℎ𝑚, the current is 0.25 𝑎𝑚𝑝𝑒𝑟𝑒. The internal resistance of the cell is`,
    options: [
      `0.5 𝑜ℎ𝑚`,
      `1.0 𝑜ℎ𝑚`,
      `1.5 𝑜ℎ𝑚`,
      `2.0 𝑜ℎ𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.0 𝑜ℎ𝑚`
  },
  {
    question: `A tap supplies water at 22℃, a man takes of 1 L of water per min at 37℃ from the geyser. The power of geyser is`,
    options: [
      `525 W`,
      `1050 W`,
      `1775 W`,
      `2100 W`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1050 W`
  },
  {
    question: `For a cell, the graph between the potential difference (𝑉) across the terminals of the cell and the current (𝐼) drawn from the cell is shown in the figure. The e.m.f. and the internal resistance of the cell are`,
    options: [
      `2𝑉, 0.5Ω`,
      `2𝑉, 0.4Ω`,
      `> 2𝑉, 05Ω`,
      `> 2𝑉, 0.4Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2𝑉, 0.4Ω`
  },
  {
    question: `The thermistors are usually made of`,
    options: [
      `Metals with low temperature coefficient of resistivity`,
      `Metals with high temperature coefficient of resistivity`,
      `Metal oxides with high temperature coefficient of resistivity`,
      `Semiconducting materials having low temperature coefficient of resistivity`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Metal oxides with high temperature coefficient of resistivity`
  },
  {
    question: `A storage cell is charged by 5 𝑎𝑚𝑝 D.C. for 18 ℎ𝑜𝑢𝑟𝑠. Its strength after charging will be`,
    options: [
      `18 𝐴𝐻`,
      `5 𝐴𝐻`,
      `90 𝐴𝐻`,
      `15 𝐴𝐻`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 90 𝐴𝐻`
  },
  {
    question: `The internal resistance of a cell of e.m.f. 12𝑉 is 5 × 10−2Ω. It is connected across an unknown resistance. Voltage across the cell, when a current of 60 𝐴 is drawn from it, is D = 4  C = 4  B = 5  A = 10  J 0 A B J 0 A B P a g e | 56`,
    options: [
      `15 𝑉`,
      `12 𝑉`,
      `9 𝑉`,
      `6 𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9 𝑉`
  },
  {
    question: `In the circuit shown in figure, the points 𝐹 is grounded. Which of the following is wrong statement?`,
    options: [
      `𝐷 is at 5V`,
      `𝐸 is at zero potential`,
      `The current in the circuit will be 0.5 A`,
      `The potential at 𝐸 is same whether or not 𝐹 is rounded`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐸 is at zero potential`
  },
  {
    question: `Potentiometer wire of length 1m is connected in series with 490Ωresistance and 2V battery. If 0.2m Vcm−1is the potential gradient, then resistance of the potentiometer wire is`,
    options: [
      `4.9Ω`,
      `7.9Ω`,
      `5.9Ω`,
      `6.9Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4.9Ω`
  },
  {
    question: `The potential difference across the terminals of a battery is 50𝑉 when 11𝐴 current is drawn and 60𝑉 when 1𝐴 current is drawn. The 𝑒. 𝑚. 𝑓. and the internal resistance of the battery are`,
    options: [
      `62𝑉, 2Ω`,
      `63𝑉, 1Ω`,
      `61𝑉, 1Ω`,
      `64𝑉, 2Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 61𝑉, 1Ω`
  },
  {
    question: `Two resistance 𝑅1 and 𝑅2 are made of different materials. The temperature coefficient of the material of 𝑅1 is 𝛼 and of the material of 𝑅2 is −𝛽. The resistance of the series combination of 𝑅1 and 𝑅2 will not change with temperature, if 𝑅1/𝑅2 equals`,
    options: [
      `𝛼 𝛽`,
      `𝛼 + 𝛽 𝛼 − 𝛽`,
      `𝛼2 + 𝛽2 𝛼𝛽`,
      `𝛽 𝛼`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝛽 𝛼`
  },
  {
    question: `To deposit one litre of hydrogen at 22.4 atmosphere from acidulated water, the quantity of electricity that must pass through is`,
    options: [
      `1 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `22.4 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `193000 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 193000 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`
  },
  {
    question: `In ballistic galvanometer, the frame in which the coil is wound is non-metallic to`,
    options: [
      `Avoid the production of induced emf`,
      `Avoid the production of eddy currents`,
      `Increase the production of eddy currents`,
      `Increase the production of induced emf`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Avoid the production of eddy currents`
  },
  {
    question: `In the circuit, the galvanometer G shows zero deflection. If the batteries A and B have negligible internal resistance, the value of the resistor R will be`,
    options: [
      `200Ω`,
      `100 Ω`,
      `500 Ω`,
      `1000 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 100 Ω`
  },
  {
    question: `The resistivity of alloys = 𝑅alloy; the resistivity of constituent metals 𝑅metal. Then, usually`,
    options: [
      `𝑅alloy = 𝑅metal`,
      `𝑅alloy < 𝑅metal`,
      `There is no simple relation between 𝑅alloy and 𝑅metal`,
      `𝑅alloy > 𝑅metal`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅alloy > 𝑅metal`
  },
  {
    question: `The production of 𝑒.m.f. by maintaining a difference of temperature between the two junctions of two different metals is known as`,
    options: [
      `Joule effect`,
      `Seebeck effect`,
      `Peltier effect`,
      `Thomson effect`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Seebeck effect`
  },
  {
    question: `An electric heater is heated respectively by 𝑑. 𝑐. and 𝑎. 𝑐. Applied voltage for both the currents is equal. The heat produced per second will be`,
    options: [
      `More on heating by 𝑎. 𝑐. source`,
      `More on heating by 𝑑. 𝑐. source G A 2 V R B 12 V 500 Ω 2 Ω 4 Ω 3 Ω 5 Ω C A B F D E 10 V 3 V P a g e | 57`,
      `Same for both`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Same for both`
  },
  {
    question: `A coil takes 15 min to boil a certain amount of water; another coil takes 20 min for the same process. Time taken to boil the same amount of water when both coils are connected in series`,
    options: [
      `5 min`,
      `8.6 min`,
      `35 min`,
      `30 min`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 35 min`
  },
  {
    question: `The electron dirft speed is small and the charge of the electron is also small but still, we obtain large current in a conductor. This is due to`,
    options: [
      `The conducting property of the conductor`,
      `The resistance of the conductor is small`,
      `The electron number density of the conductor is small`,
      `The electron number density of the conductor is enormous`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The electron number density of the conductor is enormous`
  },
  {
    question: `A small power station supplies electricity to 5000 lamps connected in parallel. Each lamp has a resistance of 220 and is operated at 220 V. The total current supplied by the station is`,
    options: [
      `2500 A`,
      `3500 A`,
      `5000 A`,
      `10000 A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5000 A`
  },
  {
    question: `In the circuit shown, if a conducting wire is connected between points 𝐴 and 𝐵, the current in this wire will`,
    options: [
      `Be zero`,
      `Flow from B to A`,
      `Flow from A to B`,
      `Flow in the direction which will be decided by the value of 𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Flow from B to A`
  },
  {
    question: `The effective resistance between points 𝐴 and 𝐵 is`,
    options: [
      `𝑅`,
      `𝑅 3`,
      `2𝑅 3`,
      `3𝑅 5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2𝑅 3`
  },
  {
    question: `A moving coil galvanometer has 150 equal divisions. Its current sensitivity is 10 divisions per milliampere and voltage sensitivity is 2 divisions per millivolt. In order that each division reads 1V, the resistance in Ohm’s needed to be connected in series with the coil will be`,
    options: [
      `103`,
      `105`,
      `99995`,
      `9995`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9995`
  },
  {
    question: `A capacitor of capacitance 3𝜇F is first charged by connecting across 10 V battery, then it is allowed to get discharged through 2 Ω and 4Ω resistor by closing the key 𝐾as shown in figure. The total energy dissipated in 2Ω resistor is equal to`,
    options: [
      `0.15 m J`,
      `0.5 m J`,
      `0.05 m J`,
      `1.0 m J`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.05 m J`
  },
  {
    question: `If each of the resistances in the network in figure. 𝑅, the equivalent resistance between terminals 𝐴 and 𝐵 is C A B D 2R 2R R R 2 Ω 4 Ω F 3 K C = P a g e | 58`,
    options: [
      `5 𝑅`,
      `2 𝑅`,
      `4 𝑅`,
      `𝑅`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅`
  },
  {
    question: `The tolerance level of a resistor with the colour code red, blue, orange, gold is`,
    options: [
      `±5%`,
      `±10%`,
      `±20%`,
      `±40%`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) ±5%`
  },
  {
    question: `What is the new resistance?`,
    options: [
      `3𝑅`,
      `8𝑅`,
      `16𝑅`,
      `2𝑅`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8𝑅`
  },
  {
    question: `The expression for thermo 𝑒.m.f. in a thermocouple is given by the relation 𝐸 = 40𝜃 − 𝜃2 20, where 𝜃 is the temperature difference of two junctions. For this, the neutral temperature will be`,
    options: [
      `100℃`,
      `200℃`,
      `300℃`,
      `400℃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 400℃`
  },
  {
    question: `The steady current flows in a metallic conductor of non-uniform cross-section. The quantity/quantities constant along the length of the conductor is/are`,
    options: [
      `Current, electric field and drift velocity`,
      `Drift speed only`,
      `Current and drift speed`,
      `Current only`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Current only`
  },
  {
    question: `Potential difference between the points 𝑃 and 𝑄 in the electric circuit shown is`,
    options: [
      `4.5 𝑉`,
      `1.2 𝑉`,
      `2.4 𝑉`,
      `2.88 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.88 𝑉`
  },
  {
    question: `Who among the following scientists made the statement –“Chemical change can produce electricity”`,
    options: [
      `Galvani`,
      `Faraday`,
      `Coulomb`,
      `Thomson`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Galvani`
  },
  {
    question: `A thin wire of resistance 4 Ω is bent to form a circle. The resistance across any diameter is`,
    options: [
      `4 Ω`,
      `2 Ω`,
      `1 Ω`,
      `8 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 Ω`
  },
  {
    question: `A wire 𝑃 has a resistance of 20Ω. Another wire 𝑄 of same material but length twice that of 𝑃 has resistance of 8Ω. If 𝑟 is the radius of cross-section of 𝑃, the radius of cross-section of 𝑄is`,
    options: [
      `𝑟`,
      `𝑟 √2`,
      `√5𝑟`,
      `2𝑟`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) √5𝑟`
  },
  {
    question: `A 100 W bulb 𝐵1 and two 60 W bulb 𝐵2 and 𝐵3 are connected to a 250 V source as shown in the figure. Now 𝑊1, 𝑊2 and 𝑊3 are the out-put powers of the bulbs 𝐵1, 𝐵2 and 𝐵3 respectively. Then`,
    options: [
      `𝑊1 > 𝑊2 = 𝑊3`,
      `𝑊1 > 𝑊2 > 𝑊3`,
      `𝑊1 < 𝑊2 = 𝑊3`,
      `𝑊1 < 𝑊2 < 𝑊3`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑊1 < 𝑊2 < 𝑊3`
  },
  {
    question: `The electric intensity 𝐸, current density 𝑗 and specific resistance 𝑘 are related to each other by the relation`,
    options: [
      `𝐸 = 𝑗/𝑘`,
      `𝐸 = 𝑗𝑘`,
      `𝐸 = 𝑘/𝑗`,
      `𝑘 = 𝑗𝐸`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐸 = 𝑗𝑘`
  },
  {
    question: `The kirchoff;s forst law (∑𝑖 = 0)and second law (∑𝑖𝑅 = ∑𝐸)where the symbols have their usual meanings, are respectively based on`,
    options: [
      `Conservation of charge, conversion of momentum`,
      `Conservation of energy, conservation of charge`,
      `Conservation of momentum, conservation of charge`,
      `Conservation of charge, conservation of energy`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Conservation of charge, conservation of energy`
  },
  {
    question: `In the circuit shown in figure the potential difference between the points 𝐴 and 𝐵 will be RA = 2 3 Q P RB = 4 RC = 12 RD = 6 i = 1.5 A P a g e | 59`,
    options: [
      `2 3 V`,
      `8 9 V`,
      `4 3 V`,
      `2V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 3 V`
  },
  {
    question: `For goldplating on a copper chain, the substance required in the form of solution is`,
    options: [
      `Copper sulphate`,
      `Copper chloride`,
      `Potassium cyanide`,
      `Potassium aurocyanide`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Potassium aurocyanide`
  },
  {
    question: `A milliammeter of range 10 𝑚𝐴 has a coil of resistance 1 Ω. To use it as voltmeter of range 10 𝑣𝑜𝑙𝑡, the resistance that must be connected in series with it, will be`,
    options: [
      `999 Ω`,
      `99 Ω`,
      `1000 Ω`,
      `None of these`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 999 Ω`
  },
  {
    question: `Two wires of resistance 𝑅1 and 𝑅2 have temperature coefficient of resistances 𝛼1 and 𝛼1 respectively. These are joined in series. The effective temperature coefficient of resistance is`,
    options: [
      `𝛼1 + 𝛼2 2`,
      `√𝛼1𝛼2`,
      `𝛼1𝑅1 + 𝛼2𝑅2 𝑅1 + 𝑅2`,
      `√𝑅1𝑅2𝛼1𝛼2 √𝑅1 2 + 𝑅2 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝛼1𝑅1 + 𝛼2𝑅2 𝑅1 + 𝑅2`
  },
  {
    question: `Conductivity increases in the order of`,
    options: [
      `𝐴𝑙, 𝐴𝑔, 𝐶𝑢`,
      `𝐴𝑙, 𝐶𝑢, 𝐴𝑔`,
      `𝐶𝑢, 𝐴𝑙, 𝐴𝑔`,
      `𝐴𝑔, 𝐶𝑢, 𝐴𝑙`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐴𝑙, 𝐶𝑢, 𝐴𝑔`
  },
  {
    question: `A current of 1.5 A flows through a copper voltmeter. The thickness of copper deposited on the electrode surface of area 50 cm2in 20 min is (density of Cu=9000 kgm−3; ECE of Cu = 3.3 × 10−7kgC−1)`,
    options: [
      `1.3 × 10−4 m`,
      `1.3 × 10−5 m`,
      `2.6 × 10−4 m`,
      `2.6 × 10−5 m`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.3 × 10−5 m`
  },
  {
    question: `If resistance of the filament increases with temperature, what will be power dissipated in a 220 𝑉- 100 𝑊 lamp when connected to 110 𝑉 power supply`,
    options: [
      `25 𝑊`,
      `< 25 𝑊`,
      `> 25 𝑊`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) > 25 𝑊`
  },
  {
    question: `Resistances of 6 𝑜ℎ𝑚 each are connected in the manner shown in adjoining figure. With the current 0.5 𝑎𝑚𝑝𝑒𝑟𝑒 as shown in figure, the potential difference 𝑉𝑃 − 𝑉𝑄 is`,
    options: [
      `3.6 𝑉`,
      `6.0 𝑉`,
      `3.0 𝑉`,
      `7.2 𝑉`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3.0 𝑉`
  },
  {
    question: `What is the volume of hydrogen liberated at NTP by the amount of charge which liberates 0.3175 g of copper?`,
    options: [
      `224 cc`,
      `112 cc`,
      `56 cc`,
      `1120 cc`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 112 cc`
  },
  {
    question: `A coil develops heat of 800 𝑐𝑎𝑙/𝑠𝑒𝑐. When 20 𝑣𝑜𝑙𝑡𝑠 is applied across its ends. The resistance of the coil is (1 𝑐𝑎𝑙= 4.2 𝑗𝑜𝑢𝑙𝑒)`,
    options: [
      `1.2 Ω`,
      `1.4 Ω`,
      `0.12 Ω`,
      `0.14 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.12 Ω`
  },
  {
    question: `In the given figure, when key 𝐾 is opened, the reading of the ammeter 𝐴 will be`,
    options: [
      `50 𝐴`,
      `2 𝐴`,
      `0.5 𝐴`,
      `10 9 𝐴 B C 4 A K D A + – 10V E 5 P 6 6 6 6 6 6 Q 0.5 A 5 Ω 5 Ω 5 Ω 5 Ω 5 Ω A B 2 V 5 Ω P a g e | 60`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 𝐴`
  },
  {
    question: `An electric wire of length ′𝐿′ and area of cross-section 𝑎 has resistance 𝑅 𝑜ℎ𝑚. Another wire of the same material having same length and area of cross-section 4𝑎 has a resistance of`,
    options: [
      `4𝑅`,
      `𝑅/4`,
      `𝑅/16`,
      `16𝑅`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅/4`
  },
  {
    question: `The figure shows a network of currents. The magnitude of current is shown here. The current I will be`,
    options: [
      `3A`,
      `9A`,
      `13A`,
      `19A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 13A`
  },
  {
    question: `An ammeter of 5 𝑜ℎ𝑚 resistance can read 5 𝑚𝐴. If it is to be used to read 100 𝑣𝑜𝑙𝑡, how much resistance is to be connected in series`,
    options: [
      `19.9995 Ω`,
      `199.995 Ω`,
      `1999.95 Ω`,
      `19995 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 19995 Ω`
  },
  {
    question: `The thermo-emf of a thermocouple is 25𝜇 V/℃ at room temperature. A galvanometer of 40 Ω resistance, capable of detecting current as low as 10−5 A, is connected with the thermocouple. The smallest temperature difference that can be detected by this system is`,
    options: [
      `16℃`,
      `12℃`,
      `8℃`,
      `20℃`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 16℃`
  },
  {
    question: `An ionization chamber with parallel conducting plates as anode and cathode has 5 × 107 electrons and the same number of singly-charged positive ions per 𝑐𝑚3. The electrons are moving at 0.4 𝑚/𝑠. The current density from anode to cathode is 4𝜇𝐴/𝑚2. The velocity of positive ions moving towards cathode is`,
    options: [
      `0.4 𝑚/𝑠`,
      `16 𝑚/𝑠`,
      `Zero`,
      `0.1 𝑚/𝑠`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.1 𝑚/𝑠`
  },
  {
    question: `In a potentiometer experiment, when three cells A, B and C care connected in series the balancing length is found to be 740 cm. if A and B are connected in series balancing length is 540 cm. then the emf of 𝐸𝐴, 𝐸𝐵𝑎𝑛𝑑 𝐸𝐶 are respectively (in volts)`,
    options: [
      `1,1.2 and 1.5`,
      `1,2 and 3`,
      `1.5,2 and 3`,
      `1.5, 2.5 and 3.5`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1,1.2 and 1.5`
  },
  {
    question: `Figure below shows a thick copper rod 𝑋 and a thin copper wire 𝑌 joined in series. They carry a current which is sufficient to make 𝑌 much hotter than 𝑋 Which one of the following is correct? Number density of Mean time between Conduction collisions of the electrons electrons`,
    options: [
      `Same in 𝑋 and 𝑌 less in 𝑋 than in 𝑌`,
      `Same in 𝑋 and 𝑌 same in 𝑋 and 𝑌`,
      `Same in 𝑋 and 𝑌 more in 𝑋 than in 𝑌`,
      `more in 𝑋 and 𝑌 less in 𝑋 than in 𝑌`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Same in 𝑋 and 𝑌 more in 𝑋 than in 𝑌`
  },
  {
    question: `A steady current 𝑖 is flowing through a conductor of uniform cross-section. Any segment of the conductor has`,
    options: [
      `Zero charge`,
      `Only positive charge`,
      `Only negative charge`,
      `Charge proportional to current 𝑖`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Zero charge`
  },
  {
    question: `Nine resistors each of 1 𝑘Ω are conneted to a battery of 6 𝑉 as shown in the circuit given below. What is the total current flowing in the circuit 2 A I 1 A 10 A 6 A P a g e | 61`,
    options: [
      `3𝑚𝐴`,
      `2 3 𝑚𝐴`,
      `3 2 𝑚𝐴`,
      `2𝑚𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2𝑚𝐴`
  },
  {
    question: `In order to increase the sensitivity of galvanometer`,
    options: [
      `The suspension wire should be made stiff`,
      `Area of the coil should be reduced`,
      `The magnetic field should be increased`,
      `The number of turns in the coil should be reduced`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The magnetic field should be increased`
  },
  {
    question: `When the number of turns of the coil is doubled, the current sensitivity of a moving coil galvanometer is doubled whereas the voltage sensitivity of the galvanometer`,
    options: [
      `Remains the same`,
      `Is halved`,
      `Is doubled`,
      `Is quadrupled`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Remains the same`
  },
  {
    question: `The reading of a high resistance voltmeter when a cell is connected across it is 2.2 𝑉. When the terminals of the cell are also connected to a resistance of 5 Ω the voltmeter reading drops to 1.8 𝑉. Find the internal resistance of the cell`,
    options: [
      `1.2 Ω`,
      `1.3 Ω`,
      `1.1 Ω`,
      `1.4 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.1 Ω`
  },
  {
    question: `In copper voltameter, mass deposited in 30 s is 𝑚 gram. If the time current is as shown in figure, ECE of copper is`,
    options: [
      `𝑚`,
      `𝑚/2`,
      `0.6 𝑚`,
      `0.1 𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑚/2`
  },
  {
    question: `Two cells with the same emf E and different internal resistances 𝑟1and 𝑟2 are connected in series to an external resistance R. the value of R so that the potential difference across the first cell be zero is`,
    options: [
      `√𝑟1𝑟2`,
      `𝑟1 + 𝑟2`,
      `𝑟1 − 𝑟2`,
      `𝑟1 + 𝑟2 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑟1 − 𝑟2`
  },
  {
    question: `The resistivity of a wire depends on its`,
    options: [
      `Length`,
      `Area of cross-section`,
      `Shape`,
      `Material`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Material`
  },
  {
    question: `In the circuit shown, the current through the 5 Ω resistor is`,
    options: [
      `8 3 𝐴`,
      `9 13𝐴`,
      `4 13𝐴`,
      `1 3 𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 3 𝐴`
  },
  {
    question: `A 5.0 A current is setup in an external circuit by a 6.0 storage battery for 6.0 min. The chemical energy of the battery is reduced by`,
    options: [
      `1.08 × 104 J`,
      `1.08 × 103 J`,
      `1.8 × 104 J`,
      `1.8 × 103 J`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1.08 × 104 J`
  },
  {
    question: `A heater coil is cut into two equal parts and only one part is now used in the heater. The heat generated will now be`,
    options: [
      `Doubled`,
      `Four times`,
      `One-fourth`,
      `Halved`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Doubled`
  },
  {
    question: `The resistance of a galvanometer is 90 𝑜ℎ𝑚. If only 10 percent of the main current may flow through the galvanometer, in which way and of what value, a resistor is to be used`,
    options: [
      `10 𝑜ℎ𝑚 in series`,
      `10 𝑜ℎ𝑚 in parallel`,
      `810 𝑜ℎ𝑚 in series`,
      `810 𝑜ℎ𝑚 in parallel`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 𝑜ℎ𝑚 in parallel`
  },
  {
    question: `One junction of a certain thermo-couple is at a fixed temperature 𝑇𝑟 and the other junction is at temperature 𝑇. The thermo electric force for this is expressed by 𝐸 = 𝐾(𝑇 − 𝑇𝑟)[ 𝑇0 + 1 2 (𝑇2 + 𝑇𝑟2) ]. At temperature 𝑇 = 𝑇0/2 the thermoelectric power is`,
    options: [
      `1 2 𝐾 𝑇0`,
      `3 2 𝐾 𝑇0`,
      `1 2 𝐾 𝑇0 2`,
      `1 2 𝐾 (𝑇0 − 𝑇𝑟)2 P a g e | 62 1 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 2 𝐾 𝑇0`
  },
  {
    question: `An electric lamp is marked 60 W, 230 V. The cost of kilowatt hour of power is Rs 1.25. The cost of using this lamp 8 h a day for 30 days is`,
    options: [
      `Rs 10`,
      `Rs 16`,
      `Rs 18`,
      `Rs 20`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Rs 18`
  },
  {
    question: `A 5V battery with internal resistance 2 Ω and a 2V battery with internal resistance 1 Ω are connected to a 10 Ω resistor as shown in the figure The current in the 10 Ω resistor is`,
    options: [
      `0.27A, 𝑃2𝑡𝑜 𝑃1`,
      `0.03A, 𝑃1 𝑡𝑜 𝑃2`,
      `0.03A, 𝑃2 𝑡𝑝 𝑃1`,
      `0.27A, 𝑃1𝑡𝑜 𝑃2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.03A, 𝑃2 𝑡𝑝 𝑃1`
  },
  {
    question: `Calculate the value E, for given circuit, when value of 2A current is either flowing in clockwise or anticlockwise direction`,
    options: [
      `32 V, 8V`,
      `38V, 2V`,
      `32V, 2V`,
      `30V, 8V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 32 V, 8V`
  },
  {
    question: `The current in the arm 𝐶𝐷 of the circuit will be`,
    options: [
      `𝑖1 + 𝑖2`,
      `𝑖2 + 𝑖3`,
      `𝑖1 + 𝑖3`,
      `𝑖1 − 𝑖2 + 𝑖3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑖2 + 𝑖3`
  },
  {
    question: `Assume that each atom of copper contributes one electron. If the current flowing through a copper wire of 1 mm diameter is 1.1 A, the drift velocity of electrons will be (density of Cu=9 g cm−3, atomic wt. of Cu=63)`,
    options: [
      `0.3 mm s−1`,
      `0.5 mm s−1`,
      `0.1 mm s−1`,
      `0.2 mm s−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1 mm s−1`
  },
  {
    question: `The specific resistance of a wire is ρ, its volume is 3 m3 and its resistance is 3Ω, then its length will be`,
    options: [
      `√1 ρ⁄`,
      `3/√ρ`,
      `√3 /ρ`,
      `ρ/√3`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3/√ρ`
  },
  {
    question: `Two similar thermocouples, made of dissimilar metals 𝐴 and 𝐵 are connected as shown in figure through a key 𝐾 and a sensitive galvanometer 𝐺. One of the thermocouples is dipped in a hot bath maintained at temperature 𝑡2 and the other in a cold bath at temperature 𝑡1. When the key is pressed, a deflection is seen in the galvanometer because i n O n i O i O n i O n O i1 i2 i3 A C B D + - E 20 V 2 5 V 10 Ω P 6Ω 2 Ω P 1 2 V P a g e | 63`,
    options: [
      `An emf of the order of a few microvolt is generated which is proportional to (𝑡2 − 𝑡1)`,
      `An emf is generated the value of which will depend upon the temperature of the hot bath only`,
      `An emf of about one volt is generated which will be proportional to (𝑡2 − 𝑡1)`,
      `An emf of a few microvolt is generated which will be proportional to 𝑡2 only.`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) An emf of the order of a few microvolt is generated which is proportional to (𝑡2 − 𝑡1)`
  },
  {
    question: `100 cells each of e. m. f. 5 𝑉 and internal resistance 1 𝑜ℎ𝑚 are to be arranged so as to produce maximum current in a 25 𝑜ℎ𝑚 resistance. Each row is to contain equal number of cells. The number of rows should be`,
    options: [
      `2`,
      `4`,
      `5`,
      `10`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2`
  },
  {
    question: `A steady current of 1.5 A flows through a copper voltameter for 10 min. If the electrochemical equivalent of copper is 30 × 10−5 g C−1, the mass of copper deposited on the electrode will be`,
    options: [
      `0.40 g`,
      `0.50 g`,
      `0.67 g`,
      `0.27 g`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.27 g`
  },
  {
    question: `1kg piece of copper is drawn into a wire 1 mm thick, and another piece into a wire 2 mm thick. Compare the resistance of these wires`,
    options: [
      `2: 1`,
      `4: 1`,
      `8: 1`,
      `16: 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 16: 1`
  },
  {
    question: `A 2 𝑣𝑜𝑙𝑡 battery, a 15 Ω resistor and a potentiometer of 100 cm length, all are connected in series. If the resistance of potentiometer wire is 5Ω, then the potential gradient of the potentiometer wire is`,
    options: [
      `0.005 𝑉/𝑐𝑚`,
      `0.05 𝑉/𝑐𝑚`,
      `0.02 𝑉/𝑐𝑚`,
      `0.2 𝑉/𝑐𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.005 𝑉/𝑐𝑚`
  },
  {
    question: `In charging a battery of motor-car, the following effect of electric current is used`,
    options: [
      `Magnetic`,
      `Heating`,
      `Chemical`,
      `Induction`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Chemical`
  },
  {
    question: `In given figure, the potentiometer wire 𝐴𝐵 has a resistance of 5 Ω and length 10 𝑚. The balancing length 𝐴𝑀 for the emf of 0.4 𝑉 is`,
    options: [
      `0.4 𝑚`,
      `4 𝑚`,
      `0.8 𝑚`,
      `8 𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 𝑚`
  },
  {
    question: `When 1 A current flows for 1 min through a silver voltmeter, it deposits 0.067 g of silver on the cathode, then how much charge will flow to deposit 108 g of silver?`,
    options: [
      `10.6 × 104Cgeq−1`,
      `9.67 × 104Cgeq−1`,
      `8.7 × 104Cgeq−1`,
      `4.3 × 104Cgeq−1\``,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9.67 × 104Cgeq−1`
  },
  {
    question: `The voltage of clouds is 4 × 106 V with respect to ground. In a light ning strike lasting 100 ms, a charge of 4 C is delivered to the ground. The power of lightning strike is`,
    options: [
      `160 MW`,
      `80 MW`,
      `20 MW`,
      `500 Kw`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 160 MW`
  },
  {
    question: `A 6V cell with 0.5 Ω internal resistance, a10V cell with 1 Ω internal resistance and a 12 Ω external resistance are connected in parallel. The current (in ampere) through the 10V cell is`,
    options: [
      `0.60`,
      `2.27`,
      `2.87`,
      `5.14`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.87`
  },
  {
    question: `Figure shows three resistor configurations 𝑅1, 𝑅2 and 𝑅3 connected to 3 V batteries. If the power dissipated by the configuration 𝑅1, 𝑅2 and 𝑅3 IS 𝑃1, 𝑃2 and 𝑃3, respectively, then 0.4V M A 5V R=45 B P a g e | 64`,
    options: [
      `𝑃1 > 𝑃2 > 𝑃3`,
      `𝑃1 > 𝑃3 > 𝑃2`,
      `𝑃2 > 𝑃1 > 𝑃3`,
      `𝑃3 > 𝑃2 > 𝑃1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑃2 > 𝑃1 > 𝑃3`
  },
  {
    question: `A cell of internal resistance 𝑟 is connected to a load of resistance 𝑅. Energy is dissipated in the load, but some thermal energy is also wasted in the cell. The efficiency of such an arrangement is found from the expression energy dissipated in the load energy dissipatd in the compete circuit. Which of the following gives the efficiency in this case?`,
    options: [
      `𝑟 𝑅`,
      `𝑅 𝑟`,
      `𝑟 𝑅 + 𝑟`,
      `𝑅 𝑅 + 𝑟`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅 𝑅 + 𝑟`
  },
  {
    question: `The resistance of a wire is 5Ω at 50℃ and 6Ω at 100℃.The resistance of the wire at 0℃ will be`,
    options: [
      `2Ω`,
      `1Ω`,
      `4Ω`,
      `3Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4Ω`
  },
  {
    question: `To convert a moving a coil galvanometer (MCG) into a voltmeter`,
    options: [
      `A high resistance R is connected in parallel with MCG`,
      `A low resistance r is connected in parallel with MCG`,
      `A low resistance r is connected in series with MCG`,
      `A high resistance R is connected in series with MCG`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A high resistance R is connected in series with MCG`
  },
  {
    question: `A dry cell of emf 1.5 V and internal resistance 0.10Ω is connected across a resistor in series with a very low resistance ammeter. When the circuit is switched on, the ammeter reading settles to a steady rate of 2A. Find (i) chemical energy consumption of the cell (ii) energy dissipation inside the cell (iii) energy dissipation inside the resistor (iv) power output of source is`,
    options: [
      `(i) 3 W (ii) 0.4 W (iii) 2.6 W (iv) 2.6 W`,
      `(i) 0.4 W (ii) 3 W (iii) 2.6 W (iv) 2.6 W`,
      `(i) 2.6 W (ii) 0.4 W (iii) 9 W (iv) 1 W`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (i) 3 W (ii) 0.4 W (iii) 2.6 W (iv) 2.6 W`
  },
  {
    question: `A wire has a resistance of 12 𝑜ℎ𝑚. It is bent in the form of equilateral triangle. The effective resistance between any two corners of the triangle is`,
    options: [
      `9 𝑜ℎ𝑚`,
      `12 𝑜ℎ𝑚`,
      `6 𝑜ℎ𝑚`,
      `8/3 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8/3 𝑜ℎ𝑚`
  },
  {
    question: `One end each of a resistance r capacitor C and resistance 2r are connected together. The other ends are respectively connected to the positive terminals of batteries, P, 𝒬, R having respectively emf’s E,E and 2E. the negative terminals of the batteries are then connected together. In this circuit, with steady current the potential drop across the capacitor is`,
    options: [
      `𝐸 3`,
      `𝐸 2`,
      `2𝐸 3`,
      `E`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐸 3`
  },
  {
    question: `Two cells having the internal resistance 0.2 Ω and 0.4 Ω are connected in parallel. The voltage across the battery terminal is 1.5V. the emf of first cell is 1.2V. the emf of second cell is`,
    options: [
      `2.7 V`,
      `2.1 V`,
      `3 V`,
      `4.2V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2.7 V`
  },
  {
    question: `The equivalent resistance of 𝑛 resistors each of same resistance when connected in series is R. If the same resistances are connected in parallel, the equivalent resistance will be`,
    options: [
      `𝑅/𝑛2`,
      `𝑅/𝑛`,
      `𝑛2𝑅`,
      `𝑛𝑅 R r 1Ω 1Ω 1Ω 1Ω 1Ω 1Ω 1Ω 1Ω 1Ω 1Ω 3V 3V 3V R R R 3 P a g e | 65`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅/𝑛2`
  },
  {
    question: `An infinite sequence of resistances is shown in the figure. The resultant resistance between 𝐴 and 𝐵 will be, when 𝑅1 = 1 𝑜ℎ𝑚 and 𝑅2 = 2 𝑜ℎ𝑚`,
    options: [
      `Infinity`,
      `1 Ω`,
      `2 Ω`,
      `1.5 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 Ω`
  },
  {
    question: `A 200 W and a 100 W bulb, both meant for operation at 220 V are connected in series. When connected to a 220 V supply the power consumed by the combination is`,
    options: [
      `33.3 W`,
      `66.7 W`,
      `300 W`,
      `100 W`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 66.7 W`
  },
  {
    question: `Five resistors of given values are connected together as shown in the figure. The current in the arm 𝐵𝐷 will be`,
    options: [
      `Half the current in the arm 𝐴𝐵𝐶`,
      `Zero`,
      `Twice the current in the arm 𝐴𝐵𝐶`,
      `Four times the current in the arm 𝐴𝐵𝐶`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Zero`
  },
  {
    question: `What is the current (𝑖) in the circuit as shown in figure`,
    options: [
      `2 𝐴`,
      `1.2 𝐴`,
      `1 𝐴`,
      `0.5 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 𝐴`
  },
  {
    question: `A galvanometer of resistance 100Ω is converted to a voltmeter of range 10 𝑉 by connecting a resistance of 10𝑘Ω. The resistance required to convert the same galvanometer to an ammeter of range 1 𝐴 is`,
    options: [
      `0.4Ω`,
      `0.3Ω`,
      `1.2Ω`,
      `0.1Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.1Ω`
  },
  {
    question: `The resistance of a 10m long wire is 10Ω. Its length is increased by 25% by stretching the wire uniformly. Then the resistance of the wire will be`,
    options: [
      `12.5 Ω`,
      `14.5 Ω`,
      `15.6 Ω`,
      `16.6 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15.6 Ω`
  },
  {
    question: `Resistance of 100 𝑐𝑚 long potentiometer wire is 10Ω, it is connected to a battery (2 𝑣𝑜𝑙𝑡) and a resistance 𝑅 in series. A source of 10 𝑚𝑉 gives null point at 40 𝑐𝑚 length, then external resistance 𝑅 is`,
    options: [
      `490 Ω`,
      `790 Ω`,
      `590 Ω`,
      `990 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 790 Ω`
  },
  {
    question: `In order to quadruple the resistance of a uniform wire, a part of its length was uniformly stretched till the final length of the entire wire was 1.5 times the original length, the part of the wire was fraction equal to`,
    options: [
      `1/8`,
      `1/6`,
      `1/10`,
      `1/4`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1/8`
  },
  {
    question: `A galvanometer has a resistance 50Ω. A resistance of 5Ω is connected parallel to it. Fraction of the total current flowing through galvanometer is`,
    options: [
      `1 10`,
      `1 11`,
      `1 50`,
      `2 15`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 11`
  },
  {
    question: `The thermo emf of copper-constantan couple is 40𝜇V per degree. The smallest temperature difference that can be detected with this couple and a galvanometer of 100Ω resistance capable of measuring the maximum current of 1𝜇A is 0.5l l R1 = 2 R2 = 2 R4 = 2 R3 = 2 3V i R R R R 4R A C B D A B R1 R2 R1 R2 R1 R1 R1 R2 R2 R2 P a g e | 66`,
    options: [
      `10℃`,
      `7.5℃`,
      `5.0℃`,
      `2.5℃`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2.5℃`
  },
  {
    question: `A parallel combination of two resistors, of 1Ω each, is connected in series with a 1.5Ω resistor. The total combination is connected across a 10V battery. The current flowing in the circuit is`,
    options: [
      `5A`,
      `20A`,
      `0.2A`,
      `0.4A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5A`
  },
  {
    question: `Dimensions of a block are 1 𝑐𝑚× 1 𝑐𝑚× 100𝑐𝑚. If specific resistance of its material is 3 × 10−7𝑜ℎ𝑚− 𝑚, then the resistance between the opposite rectangular faces is`,
    options: [
      `3 × 10−9𝑜ℎ𝑚`,
      `3 × 10−7𝑜ℎ𝑚`,
      `3 × 10−5𝑜ℎ𝑚`,
      `3 × 10−3𝑜ℎ𝑚`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 × 10−7𝑜ℎ𝑚`
  },
  {
    question: `Find the equivalent resistance across 𝐴𝐵`,
    options: [
      `1 Ω`,
      `2 Ω`,
      `3 Ω`,
      `4 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 Ω`
  },
  {
    question: `In the circuit given E=0.6V, 𝑅1=100Ω, 𝑅2 = 𝑅3 = 50Ω, R4 = 75Ω. The equivalent resistance of the circuit, in ohm is`,
    options: [
      `11.875`,
      `26.31`,
      `118.75`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 118.75`
  },
  {
    question: `Three resistances 4 Ω each are connected in the form of an equilateral triangle. The effective resistance between two corners is`,
    options: [
      `8 Ω`,
      `12 Ω`,
      `3 8 Ω`,
      `8 3 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 3 Ω`
  },
  {
    question: `The material of wire of potentiometer is`,
    options: [
      `Copper`,
      `Steel`,
      `Manganin`,
      `Aluminium`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Manganin`
  },
  {
    question: `A Copper wire of length 1 m and radius 1 mm is joined in series with an iron wire of length 2 m and radius 3 mm and a current is passed through the wires. The ratio of the current density in the wires. The ratio of the current density in the copper and iron wires is`,
    options: [
      `2: 3`,
      `6: 1`,
      `9: 1`,
      `18: 1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 9: 1`
  },
  {
    question: `If the emf of a thermocouple, one junction of which is kept 0℃ is given by 𝑒 = 𝑎𝑡+ 1 2 𝑏𝑡2, then the neutral temperature will be`,
    options: [
      `𝑎 𝑏`,
      `− 𝑎 𝑏`,
      `𝑎 2𝑏`,
      `− 1 𝑎𝑏`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) − 𝑎 𝑏`
  },
  {
    question: `A given carbon resistor has the following colour code of the various strips: orange, red, yellow and gold. The value of resistance in ohm is`,
    options: [
      `32 × 104 ± 5%`,
      `32 × 104 ± 10%`,
      `23 × 104 ± 5%`,
      `23 × 104 ± 10%`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 32 × 104 ± 5%`
  },
  {
    question: `The same mass of copper is drawn into two wires 1 𝑚𝑚 and 2 𝑚𝑚 thick. Two wires are connected in series and current is passed through them. Heat produced in the wire is in the ratio`,
    options: [
      `2 :1`,
      `1 :16`,
      `4 :1`,
      `16 :1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 16 :1`
  },
  {
    question: `The resistances of a wire at temperatures 𝑡℃ and 0℃ are related by`,
    options: [
      `𝑅𝑡 = 𝑅0(1 + 𝛼𝑡)`,
      `𝑅𝑡 = 𝑅0(1 − 𝛼𝑡)`,
      `𝑅𝑡 = 𝑅0 2(1 + 𝛼𝑡)`,
      `𝑅𝑡 = 𝑅0 2(1 − 𝛼𝑡)`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅𝑡 = 𝑅0(1 + 𝛼𝑡)`
  },
  {
    question: `𝐵1, 𝐵2 and 𝐵3 are the three identical bulbs connected to a battery of steady emf with key 𝐾 closed. What happens to the brightness of the bulbs, 𝐵1 and 𝐵2 when the key is opened? R 4 R 2 R 1 R 3 E i A 2 2 2 2 2 B P a g e | 67`,
    options: [
      `Brightness of the bulb 𝐵1 increases and that of 𝐵2 decreases`,
      `Brightness of the bulbs 𝐵1 and 𝐵2 increases`,
      `Brightness of the bulb 𝐵1 decreases and 𝐵2 increases`,
      `Brightness of the bulbs 𝐵1 and 𝐵2 decreases`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Brightness of the bulb 𝐵1 decreases and 𝐵2 increases`
  },
  {
    question: `A new flashlight cell of e. m. f. 1.5 𝑣𝑜𝑙𝑡 gives a current of 15 𝑎𝑚𝑝, when connected directly to an ammeter of resistance 0.04 Ω. The internal resistance of cell is`,
    options: [
      `0.04 Ω`,
      `0.06 Ω`,
      `0.10 Ω`,
      `10 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.06 Ω`
  },
  {
    question: `In the circuit shown in figure, the current drawn from the battery is 4𝐴. If 10 Ω resistor is replaced by 20 Ω resistor, then current drawn from the circuit will be`,
    options: [
      `1 𝐴`,
      `2 𝐴`,
      `3 𝐴`,
      `0 𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0 𝐴`
  },
  {
    question: `Four resistances 40Ω, 60Ω, 90Ω and 110Ω make the arms of a quadrilateral 𝐴𝐵𝐶𝐷. Across 𝐴𝐶 is the battery circuit, the emf of the battery being 4V and internal resistance negligible. The potential difference across 𝐵𝐷 is`,
    options: [
      `1V`,
      `−1V`,
      `−0.2V`,
      `0.2V`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.2V`
  },
  {
    question: `An electric current passes through a circuit containing two wires of the same material connected in parallel. If the lengths of the wires are in the ratio of 4/3 and radius of the wires are in the ratio of 2/3, then the ratio of the current passing through the wires will be`,
    options: [
      `3`,
      `1/3`,
      `8/9`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1/3`
  },
  {
    question: `In the above question if potential difference is applied, the drift velocity at temperature 𝑇 is`,
    options: [
      `Inversely proportional to 𝑇`,
      `Proportional to √𝑇`,
      `Zero`,
      `Finite but independent of 𝑇`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Inversely proportional to 𝑇`
  },
  {
    question: `If all the resistors shown have the value 2 𝑜ℎ𝑚 each, the equivalent resistance over 𝐴𝐵 is`,
    options: [
      `2 𝑜ℎ𝑚`,
      `4 𝑜ℎ𝑚`,
      `1 2 3 𝑜ℎ𝑚`,
      `2 2 3 𝑜ℎ𝑚 A B 110 Ω 90 Ω 60 Ω 40 Ω C A B D 4 V 1 + – 3 10 4A 10 21 7 B 3 B 1 B 2 K P a g e | 68`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 2 3 𝑜ℎ𝑚 A B 110 Ω 90 Ω 60 Ω 40 Ω C A B D 4 V 1 + – 3 10 4A 10 21 7 B 3 B 1 B 2 K P a g e | 68`
  },
  {
    question: `A current through a wire depends on time 𝑡 as 𝑖 = 10 + 4𝑡. The charge crossing through the section of the wire in 10 s is`,
    options: [
      `50 C`,
      `300 C`,
      `400 C`,
      `4C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 300 C`
  },
  {
    question: `A copper and silver voltmeter are connected in parallel. If 2000 C of charge liberates the same mass of copper and silver, then charge flowing in copper voltmeter is [Z(Cu = 3.36 × 10−7 kg C−1, Z(Ag)= 1.008× 10−6kgC−1]`,
    options: [
      `1250 C`,
      `1500 C`,
      `1750 C`,
      `1000 C`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1500 C`
  },
  {
    question: `Three electric bulbs of 200 W, 200 W and 400 W are shown in figure. The resultant power of the combination is`,
    options: [
      `800 W`,
      `400 W`,
      `200 W`,
      `600 W`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 200 W`
  },
  {
    question: `What will be the equivalent resistance between the two points 𝐴 and 𝐷`,
    options: [
      `10 Ω`,
      `20 Ω`,
      `30 Ω`,
      `40 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30 Ω`
  },
  {
    question: `A potentiometer wire, 10 m long, has a resistance of 40Ω. It is connected in series with a resistance box and a 2V storage cell. If the potential gradient along the wire is (0.1 mVcm−1), the resistance unplugged in the box is`,
    options: [
      `260 Ω`,
      `760 Ω`,
      `960 Ω`,
      `1060 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 760 Ω`
  },
  {
    question: `The electrolyte used in Lechlanche cell is`,
    options: [
      `Copper sulphate solution`,
      `Ammonium chloride solution`,
      `Dilute sulphuric acid`,
      `Zinc sulphate`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ammonium chloride solution`
  },
  {
    question: `In a thermocouple, which of the following statements is not true`,
    options: [
      `Neutral temperature depends upon the nature of materials in the thermocouple`,
      `Temperature of inversion depends upon the temperature of cold junction`,
      `When the temperature of the hot junction is equal to the temperature of inversion, the thermo 𝑒mf becomes zero`,
      `When the temperature of cold junction increases, the temperature of inversion also increases`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) When the temperature of cold junction increases, the temperature of inversion also increases`
  },
  {
    question: `If current in an electric bulb changes by 1%, then the power will change by`,
    options: [
      `1%`,
      `2%`,
      `4%`,
      `1 2 %`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2%`
  },
  {
    question: `Neutral temperature of a thermocouple is defined as the temperature at which`,
    options: [
      `The thermo 𝑒.m.f. changes sign`,
      `The thermo 𝑒.m.f. is maximum`,
      `The thermo 𝑒.m.f. is minimum`,
      `The thermo 𝑒.m.f. is zero`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The thermo 𝑒.m.f. is maximum`
  },
  {
    question: `Electric power is transmitted over long distances through conducting wires at high voltage because`,
    options: [
      `High voltage travels faster`,
      `Power loss is large`,
      `Power loss is less`,
      `Generator produce electrical energy at a very high voltage 10 10 10 10 10 10 10 10 D B A C ( ) 200 W 200 W 400 W P a g e | 69`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Power loss is less`
  },
  {
    question: `The magnitude of I in ampere is`,
    options: [
      `0.1`,
      `0.3`,
      `0.6`,
      `None of the above`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.1`
  },
  {
    question: `Six equal resistances each of 4Ω are connected to form a figure. The resistance between two corners 𝐴 and 𝐵 is`,
    options: [
      `4 Ω`,
      `4/3 Ω`,
      `12 Ω`,
      `2 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4/3 Ω`
  },
  {
    question: `A battery of internal resistance 4 Ω is connected to the network of resistance as shown. In order to given the maximum power to the network, the value of 𝑅 (in Ω) should be`,
    options: [
      `4/9`,
      `8/9`,
      `2`,
      `18`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2`
  },
  {
    question: `An electrical cable having a resistance of 0.2 Ω delivers 10 kW at 200 𝑉 DC to a factory. What is the efficiency of transmission`,
    options: [
      `65%`,
      `75%`,
      `85%`,
      `95%`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 95%`
  },
  {
    question: `A heating coil can heat the water of a vessel from 20℃ to 60℃ in 30 𝑚𝑖𝑛𝑢𝑡𝑒𝑠. Two such heating coils are put in series and then used to heat the same amount of water through the same temperature range. The time taken now will be (neglecting thermal capacity of the coils)`,
    options: [
      `60 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `30 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `15 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `7.5 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 60 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`
  },
  {
    question: `What is the resistance of a carbon resistance which has bands of colours brown, black and brown`,
    options: [
      `100 Ω`,
      `1000 Ω`,
      `10 Ω`,
      `1 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 100 Ω`
  },
  {
    question: `If the ammeter in the given circuit reads 2 𝐴, the resistance 𝑅 is`,
    options: [
      `1 𝑜ℎ𝑚`,
      `2 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚`,
      `4 𝑜ℎ𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 𝑜ℎ𝑚`
  },
  {
    question: `Faraday’s 2nd law states that mass deposited on the electrode is directly proportional to`,
    options: [
      `Atomic mass`,
      `Atomic mass × Velocity`,
      `Atomic mass/Valency`,
      `Valency`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Atomic mass/Valency`
  },
  {
    question: `Power dissipated across the 8Ω resistor in the circuit shown here is 2 𝑤𝑎𝑡𝑡. The power dissipated in watt units across the 3Ω resistor is 4 Ω R R R R R 6 R 4 R 4 Ω 4 Ω 4 Ω 4 Ω 4 Ω 4 Ω C A B D O 5 Ω 15 Ω 60 Ω 1A 1A I 10Ω P a g e | 70`,
    options: [
      `0.5`,
      `3.0`,
      `2.0`,
      `1.0`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.0`
  },
  {
    question: `Which of the following are true, when the cells are connected in series?`,
    options: [
      `Current capacity decreases`,
      `Current capacity increases`,
      `The emf decreases`,
      `The emf increases`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) The emf increases`
  },
  {
    question: `Two wires have lengths, diameters and specific resistances all in the ratio of 1 : 2. The resistance of the first wire is 10Ω. Resistance of the second wire in ohm will be`,
    options: [
      `5`,
      `10`,
      `20`,
      `Infinite`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10`
  },
  {
    question: `The resistance is connected as shown in the figure below. Find the equivalent resistance between the points A and B.`,
    options: [
      `205Ω`,
      `10 Ω`,
      `3.5 Ω`,
      `5 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5 Ω`
  },
  {
    question: `The 𝑛 rows each containing m cells in series are joined in parallel. Maximum current is taken from this combination across as external resistance of 3 Ω resistance. If the total number of cells used are 24 and internal resistance of each cell is 0.5 Ω, then`,
    options: [
      `𝑚 = 8, 𝑛 = 3`,
      `𝑚 = 6, 𝑛 = 4`,
      `𝑚 = 12, 𝑛 = 2`,
      `𝑚 = 2, 𝑛 = 12`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑚 = 12, 𝑛 = 2`
  },
  {
    question: `𝐴 and 𝐵 are two square plates of same metal and same thickness but length of 𝐵 is twice that of 𝐴. Ratio of resistances of 𝐴 and 𝐵 is`,
    options: [
      `4 : 1`,
      `1 : 4`,
      `1 : 1`,
      `1 : 2`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1 : 1`
  },
  {
    question: `In the network of resistors shown in the adjoining figure, the equivalent resistance between 𝐴 and 𝐵 is`,
    options: [
      `54 𝑜ℎ𝑚`,
      `18 𝑜ℎ𝑚`,
      `36 𝑜ℎ𝑚`,
      `9 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9 𝑜ℎ𝑚`
  },
  {
    question: `Two bars of radius 𝑟 and 2𝑟 are kept in contact as shown. An electric current 𝑖 is passed through the bars. A 3 3 3 3 3 3 3 3 3 3 3 3 B 10Ω 5Ω A | D C B 3Ω 7Ω 10Ω t I t I t I t I P a g e | 71 Which one of the following is correct?`,
    options: [
      `Heat produced in bar 𝐵𝐶 is 4 times the heat produced in bar 𝐴𝐵`,
      `Electric field in both halves is equal`,
      `Current density across 𝐴𝐵 is doubled that of across 𝐵𝐶`,
      `Potential difference across 𝐴𝐵 is 4 times that of across 𝐵𝐶`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Heat produced in bar 𝐵𝐶 is 4 times the heat produced in bar 𝐴𝐵`
  },
  {
    question: `The alloys constantan and manganin are used to make standard resistance because they have`,
    options: [
      `Low resistivity`,
      `High resistivity`,
      `Low temperature coefficient of resistance`,
      `Both (b) and (c)`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Both (b) and (c)`
  },
  {
    question: `The internal resistances of two cells shown are 0.1 Ω and 0.3 Ω. If 𝑅 = 0.2Ω, the potential difference across the cell`,
    options: [
      `𝐵 will be zero`,
      `𝐴 will be zero`,
      `𝐴 and 𝐵 will be 2𝑉`,
      `𝐴 will be > 2𝑉 and 𝐵 will be < 2𝑉`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐵 will be zero`
  },
  {
    question: `In a Wheatstone’s bridge, three resistances 𝑃, 𝑄 and 𝑅 connected in the three arms and the fourth arm is formed by two resistances 𝑆1 and 𝑆2 connected in parallel. The condition for the bridge to be balanced will be`,
    options: [
      `𝑃 𝑄 = 2𝑅 𝑆1 + 𝑆2`,
      `𝑃 𝑄 = 𝑅(𝑆1 + 𝑆2) 𝑆1𝑆2`,
      `𝑃 𝑄 = 𝑅(𝑆1 + 𝑆2) 2𝑆1𝑆2`,
      `𝑃 𝑄 = 𝑅 𝑆1 + 𝑆2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑃 𝑄 = 𝑅(𝑆1 + 𝑆2) 𝑆1𝑆2`
  },
  {
    question: `In the circuit shown in figure, the heat produced in 5 𝑜ℎ𝑚 resistance is 10 𝑐𝑎𝑙𝑜𝑟𝑖𝑒𝑠 per 𝑠𝑒𝑐𝑜𝑛𝑑. The heat produced in 4 𝑜ℎ𝑚 resistance is`,
    options: [
      `1 𝑐𝑎𝑙/𝑠𝑒𝑐`,
      `2 𝑐𝑎𝑙/𝑠𝑒𝑐`,
      `3 𝑐𝑎𝑙/𝑠𝑒𝑐`,
      `4 𝑐𝑎𝑙/𝑠𝑒𝑐`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 𝑐𝑎𝑙/𝑠𝑒𝑐`
  },
  {
    question: `In a potentiometer experiment the balancing with a cell is at length 240 cm. on shunting the cell with a resistance of 2 Ω, the balancing length becomes 120cm. the internal resistance of cell is`,
    options: [
      `4 Ω`,
      `2 Ω`,
      `1 Ω`,
      `0.5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `A current 𝐼 is passing through a wire having two sections 𝑃 and 𝑄 of uniform diameters 𝑑 and 𝑑/2 respectively. If the mean drift velocity of electrons in sections 𝑃 and 𝑄 is denoted by 𝑣P and 𝑣Q respectively, then`,
    options: [
      `𝑣P = 𝑣Q`,
      `𝑣P = 1 2 𝑣Q`,
      `𝑣P = 1 4 𝑣Q`,
      `𝑣P = 2𝑣Q`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑣P = 1 4 𝑣Q`
  },
  {
    question: `The relaxation time in conductors`,
    options: [
      `Increases with the increase of temperature`,
      `Decreases with the increase of temperature`,
      `It does not depend on temperature`,
      `All of sudden changes at 400 𝐾`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Decreases with the increase of temperature`
  },
  {
    question: `Two resistances 𝑅 and 2𝑅 are connected in parallel in an electric circuit. The thermal energy developed in 𝑅 and 2𝑅 are in the ratio`,
    options: [
      `1 : 2`,
      `2 : 1`,
      `1 : 4`,
      `4 : 1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 : 1`
  },
  {
    question: `In the given figure. 𝐴, 𝐵 and 𝐶 are three identical bulbs. When the switch 𝑆 is closed A B 2V, 0.1 2V, 0.3 0.2 P a g e | 72`,
    options: [
      `The brightness of bulb 𝐴 does not change and that of 𝐵 decreases`,
      `The brightness of bulb 𝐴 increases and that of 𝐵 decreases`,
      `The brightness of 𝐴 increases bulb 𝐵 does not glow`,
      `The brightness of both bulbs 𝐴 not 𝐵 decrease`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The brightness of bulb 𝐴 increases and that of 𝐵 decreases`
  },
  {
    question: `Three resistances each of 4Ω are connected in the form of an equilateral triangle. The effective resistance between any two corners is`,
    options: [
      `(3/8) Ω`,
      `(8/3) Ω`,
      `8 Ω`,
      `12 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (8/3) Ω`
  },
  {
    question: `Three resistance 𝐴, 𝐵 and 𝐶 have values 3𝑅, 6𝑅 and 𝑅 respectively. When some potential difference is applied across the network, the thermal powers dissipated by 𝐴, 𝐵 and 𝐶 are in the ratio`,
    options: [
      `2 :3 :4`,
      `2 :4 :3`,
      `4 :2 :3`,
      `3 :2 :4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 :2 :3`
  },
  {
    question: `12 cells each having same emf are connected in series with some cells wrongly connected. The arrangement is connected in series with an ammeter and two cells which are in series. Current is 3 𝐴 when cells and battery aid each other and is 2 𝐴 when cells and battery oppose each other. The number of cells wrongly connected is`,
    options: [
      `4`,
      `1`,
      `3`,
      `2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1`
  },
  {
    question: `Three resistance 𝑃, 𝑄, 𝑅 each of 2Ω and an unknown resistance 𝑆 form the four arms of a wheatstone bridge circuit. When a resistance of 6Ω is connected in parallel to 𝑆 the bridge gets balanced. What is the value of 𝑆`,
    options: [
      `2 Ω`,
      `3 Ω`,
      `6 Ω`,
      `1 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 Ω`
  },
  {
    question: `A galvanometer of 25 Ω resistance can read a maximum current of 6𝑚𝐴. It can be used as a voltmeter to measure a maximum of 6 𝑉 by connecting a resistance to the galvanometer. Identify the correct choice in the given answers`,
    options: [
      `1025 Ω in series`,
      `1025 Ω in parallel`,
      `975 Ω in series`,
      `975 Ω in parallel`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 975 Ω in series`
  },
  {
    question: `The dimensions of 1 2 𝜀𝑜𝐸2 (𝜀𝑜:permittivity of free space; 𝐸: electric field) is`,
    options: [
      `[MLT]`,
      `[ML2T−2]`,
      `[ML−1T−2]`,
      `[ML2T−1]`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) [ML−1T−2]`
  },
  {
    question: `Following figure shows four situations in which positive and negative charges move horizontally through a region and gives the rate at which each charge moves. Rank the situations according to the effective current through the region greatest first`,
    options: [
      `𝑖 = 𝑖𝑖 = 𝑖𝑖𝑖 = 𝑖𝑣`,
      `𝑖 > 𝑖𝑖 > 𝑖𝑖𝑖 > 𝑖𝑣`,
      `𝑖 = 𝑖𝑖 = 𝑖𝑖𝑖 > 𝑖𝑣`,
      `𝑖 = 𝑖𝑖 = 𝑖𝑖𝑖 < 𝑖𝑣`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑖 = 𝑖𝑖 = 𝑖𝑖𝑖 > 𝑖𝑣`
  },
  {
    question: `An aluminium (resistivity𝜌 = 2.2 × 10−8Ω− m) wire of a diameter 1.4 mm is used to make a 4Ω esistor. The length of the wire is`,
    options: [
      `220 m`,
      `1000 m`,
      `280 m`,
      `1 m`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 280 m`
  },
  {
    question: `Voltmeters 𝑉1and 𝑉2 are connected in series across a DC line. 𝑉1reads 80V and has a resistance of 200ΩV−1and V2 has a total resistance of 32k Ω. The line voltage is`,
    options: [
      `240 V`,
      `220 V`,
      `160 V`,
      `120 V`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 240 V`
  },
  {
    question: `A galvanometer of resistance 20 Ω shows a deflection of 10 divisions when a current of 1 mA is passed through it. If a shunt of 4 Ωis connected and there are 50 divisions on the scale, the range of the galvanometer is`,
    options: [
      `1A`,
      `3A`,
      `10mA`,
      `30mA`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30mA`
  },
  {
    question: `For ensuring dissipation of same energy in all three resistors (𝑅1, 𝑅2, 𝑅3)connected as shown in figure, their values be related as`,
    options: [
      `𝑅1 = 𝑅2 = 𝑅3`,
      `𝑅2 = 𝑅3 and 𝑅1 = 4 𝑅2`,
      `𝑅2 = 𝑅3 and 𝑅1 = 𝑅2/4`,
      `𝑅1 = 𝑅2 + 𝑅3`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅2 = 𝑅3 and 𝑅1 = 𝑅2/4`
  },
  {
    question: `𝑥 g of Ag is deposited by passing 4 A of current of for 1 h. How many gram of Ag will be deposited by passing 6 A for 40 min?`,
    options: [
      `2𝑥 g`,
      `4𝑥 g`,
      `𝑥 g`,
      `5𝑥 g`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑥 g`
  },
  {
    question: `Resistance in the two gaps of a 𝑚𝑒𝑡𝑒𝑟 bridge are 10 𝑜ℎ𝑚 and 30 𝑜ℎ𝑚 respectively. If the resistances are interchanged the balance point shifts by`,
    options: [
      `33.3 𝑐𝑚`,
      `66.67 𝑐𝑚`,
      `25 𝑐𝑚`,
      `50 𝑐𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 50 𝑐𝑚`
  },
  {
    question: `In the circuit shown below 𝐸1 = 4.0 𝑉, 𝑅1 = 2 Ω, 𝐸2 = 6.0 𝑉, 𝑅2 = 4 Ω and 𝑅3 = 2 Ω. The current 𝐼1 is`,
    options: [
      `1.6 𝐴`,
      `1.8 𝐴`,
      `1.25 𝐴`,
      `1.0 𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.8 𝐴`
  },
  {
    question: `The amount of charge 𝑄 passed in time 𝑡 through a cross-section of a wire is 𝑄 = 5𝑡2 + 3𝑡 + 1. The value of current at time 𝑡 = 5s is`,
    options: [
      `9 A`,
      `49 A`,
      `53 A`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 53 A`
  },
  {
    question: `In water voltmeter, the electrolysis of …… takes place`,
    options: [
      `𝐻2𝑂`,
      `𝐻2𝑆𝑂4`,
      `𝐻2𝑂 and 𝐻2𝑆𝑂4 both`,
      `𝐻2 and 𝑂2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐻2𝑂`
  },
  {
    question: `Which statement is true? (i) Kirchoff’s law is equally applicable to both AC and DC. (ii) Semiconductors have a positive temperature coefficient of resistance. (iii) Meter bridge is greater sensitive when the resistance of all four arms of the bridge is of the same order. (iv) The emf of a cell depends upon the size and area of electrodes.`,
    options: [
      `(i) and (iv)`,
      `(ii) and (iv)`,
      `(iii) and (iv)`,
      `None of these`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (iii) and (iv)`
  },
  {
    question: `In the circuit given, the current relation to a balanced Wheatstone’s bridge is V R1 R3 R2 S P R Q E1 = 4 V R1 = 2 Ω I2 I1 E2 = 6 V R3 = 2 Ω R2 = 4 Ω P a g e | 74`,
    options: [
      `𝑃 𝑄 = 𝑅 𝑆`,
      `𝑃 𝑄 = 𝑆 𝑅`,
      `𝑃 𝑆 = 𝑄 𝑅`,
      `𝑃 𝑅 = 𝑆 𝑄`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑃 𝑅 = 𝑆 𝑄`
  },
  {
    question: `A thick wire is stretched, so that its length become two times. Assuming that there is no change in its density, then what is the ratio of change in resistance of wire to the initial resistance of wire?`,
    options: [
      `2 : 1`,
      `4 : 1`,
      `3 : 1`,
      `1 : 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3 : 1`
  },
  {
    question: `Two electric bulbs marked 40 W, 220 V and 60 W, 220 V when connected in series, across same voltage supply of 220 V, the effective power is 𝑃1 and when connected in parallel the effective power is 𝑃2. Then 𝑃1 𝑃2 is`,
    options: [
      `0.5`,
      `0.48`,
      `0.24`,
      `0.16`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.24`
  },
  {
    question: `Figure shows a network of eight resistors, each equal to 2 Ω, connected to a 3V battery of negligible internal resistance. The current 𝐼 in the circuit is`,
    options: [
      `0.25A`,
      `0.50A`,
      `0.75A`,
      `1.0A`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.0A`
  },
  {
    question: `If the length of filament of a heater is reduced by 10%, the power of the heater will`,
    options: [
      `Increase by about 9%`,
      `Increase by about 11%`,
      `Increase by about 19%`,
      `Decrease by about 10%`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Increase by about 11%`
  },
  {
    question: `In the circuit, the potential difference across 𝑃𝑄 will be nearest to`,
    options: [
      `9.6 𝑉`,
      `6.6 𝑉`,
      `4.8 V`,
      `3.2 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3.2 𝑉`
  },
  {
    question: `A current of 5 A is passing through a metallic wire of cross-sectional area 4 × 10−6m2. If the density of charge carries of the wire is 5 × 1026m−3, the drift velocity of the electrons will be`,
    options: [
      `1 × 102ms−1`,
      `1.56 × 10−2ms−1`,
      `1.56 × 10−3ms−1`,
      `1 × 10−2ms−1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.56 × 10−2ms−1`
  },
  {
    question: `Figure shows a network of three resistance. When some potential difference is applied across the network, the thermal powers dissipated by 𝐴,𝐵 and 𝐶 in the ratio`,
    options: [
      `2 : 3 : 4`,
      `2 : 4 : 3`,
      `4 : 2 : 3`,
      `3 : 2 : 4`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 : 2 : 3`
  },
  {
    question: `Two plates 𝑅 and 𝑆 are in the form of a square and have the same thickness. A side of 𝑆 is twice the side of 𝑅 Compare their resistances. The direction of current is shown by an arrow head figure.`,
    options: [
      `The resistance of 𝑅 is twice that of 𝑆`,
      `Both have the same resistance`,
      `The resistance of 𝑆 is four times that of 𝑅`,
      `The resistance of 𝑅 is half that of 𝑆`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The resistance of 𝑆 is four times that of 𝑅`
  },
  {
    question: `A resistor has a colour code of green, blue, brown and silver. What is its resistance?`,
    options: [
      `5600Ω± 10%`,
      `560Ω± 5%`,
      `560Ω± 10%`,
      `56Ω± 5%`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 560Ω± 10%`
  },
  {
    question: `The electric resistance of a certain wire of iron is 𝑅. If its length and radius are both doubled, then`,
    options: [
      `The resistance will be doubled and the specific resistance will be halved`,
      `The resistance will be halved and the specific resistance will remain unchanged R C A B 3R 6R 48 V 100  80  20  P 100  Q I 3 V D C B A E F P a g e | 75`,
      `The resistance will be halved and the specific resistance will be doubled`,
      `The resistance and the specific resistance, will both remain unchanged`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The resistance will be halved and the specific resistance will remain unchanged R C A B 3R 6R 48 V 100  80  20  P 100  Q I 3 V D C B A E F P a g e | 75`
  },
  {
    question: `Equivalent resistance between 𝐴 and 𝐵 will be`,
    options: [
      `2 𝑜ℎ𝑚`,
      `18 𝑜ℎ𝑚`,
      `6 𝑜ℎ𝑚`,
      `3.6 𝑜ℎ𝑚`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3.6 𝑜ℎ𝑚`
  },
  {
    question: `With the rise of temperature the resistivity of a semiconductor`,
    options: [
      `Remains unchanged`,
      `Increases`,
      `Decreases`,
      `First increases and then decreases`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Decreases`
  },
  {
    question: `Two wires of the same material and having same uniform area of cross -section are connected in series in an electrical circuit. The masses of the wires are 𝑚 and 2𝑚. When a current 𝐼flows in the circuit, the heats produced by them in a given time are in ratio`,
    options: [
      `2 : 1`,
      `1 : 2`,
      `4 : 1`,
      `1 : 4`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 : 2`
  },
  {
    question: `When a wire of uniform cross-section a, length 𝑙 and resistance 𝑅 is bent into a complete circle, resistance between any two of diametrically opposite points will be`,
    options: [
      `𝑅 4`,
      `𝑅 8`,
      `4𝑅`,
      `𝑅 2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅 4`
  },
  {
    question: `The resistance of a 5 𝑐𝑚 long wire is 10 Ω. It is uniformly stretched so that its length becomes 20 𝑐𝑚. The resistance of the wire is`,
    options: [
      `160 Ω`,
      `80 Ω`,
      `40 Ω`,
      `20 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 160 Ω`
  },
  {
    question: `The current 𝑖1and 𝑖2through the resistor 𝑅1(= 10Ω)and 𝑅2(= 30Ω)in the circuit diagram with 𝐸1 = 3𝑉, 𝐸2 = 3 𝑎𝑛𝑑 𝐸3 = 2𝑉are respectively.`,
    options: [
      `02.A, 0.1A`,
      `0.4A, 0.2A`,
      `0.1A, 0.2A`,
      `0.2A, 0.4A`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 02.A, 0.1A`
  },
  {
    question: `A battery has an emf of 15V and internal resistance of 1Ω. Is the terminal to terminal potential difference less than, equal to or greater than 15V if the current in the battery is (1) from negative to positive terminal, (2) from positive to negative terminal (3) zero current?`,
    options: [
      `Less, grater, equal`,
      `Less, less, equal`,
      `Greater, greater, equal`,
      `Greater, less, equal`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Less, grater, equal`
  },
  {
    question: `Three bulbs 𝐵1 , 𝐵2 and 𝐵3 are connected to the main as shown in figure. How will the brightness of bulb 𝐵1 be affected if 𝐵2 or 𝐵3 are disconnected from the circuit?`,
    options: [
      `Bulb 𝐵1 become brighter`,
      `Bulb 𝐵1 become dimmer`,
      `No change occurs in the brightness`,
      `Bulb 𝐵1 becomes brighter if bulb 𝐵2 is disconnected and dimmer if bulb 𝐵3 is E 1 E 2 E 3 R 1 i 1 R 2 3 3 3 3 3 3 3 3 A B P a g e | 76 disconnected.`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Bulb 𝐵1 become dimmer`
  },
  {
    question: `Two wires of same material have length 𝐿 and 2𝐿 and cross-sectional areas 4𝐴 and 𝐴 respectively. The ratio of their specific resistances would be`,
    options: [
      `1 : 2`,
      `8 : 1`,
      `1 : 8`,
      `1 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 : 1`
  },
  {
    question: `A steady current of 5 𝑎𝑚𝑝𝑠 is maintained for 45 𝑚𝑖𝑛𝑠. During this time it deposits 4.572 𝑔𝑚 of zinc at the cathode of a voltmeter. E.C.E. of zinc is`,
    options: [
      `3.387× 10−4𝑔𝑚/𝐶`,
      `3.387× 10−4𝐶/𝑔𝑚`,
      `3.384× 10−3𝑔𝑚/𝐶`,
      `3.394× 10−3𝐶/𝑔𝑚`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3.387× 10−4𝑔𝑚/𝐶`
  },
  {
    question: `The colour sequence in a carbon resistor is red, brown, orange and silver. The resistance of the resistor is`,
    options: [
      `21 × 103 ± 10%`,
      `23 × 101 ± 10%`,
      `21 × 103 ± 5%`,
      `12 × 103 ± 5%`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 21 × 103 ± 10%`
  },
  {
    question: `Consider a cylindrical element as shown in the figure. Current flowing through element is I and resistivity of material of the cylinder is 𝜌. Choose the correct option out the following`,
    options: [
      `Power loss is second half is four times the power loss in first half`,
      `Voltage drop in first is twice of voltage drop in second half`,
      `Current density in both halves are equal`,
      `Electric field in both halves is equal`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Power loss is second half is four times the power loss in first half`
  },
  {
    question: `In Wheatstone’s bridge 𝑃 = 9 𝑜ℎ𝑚, 𝑄 = 11 𝑜ℎ𝑚, 𝑅 = 4 𝑜ℎ𝑚 and 𝑆 = 6 𝑜ℎ𝑚. How much resistance must be put in parallel to the resistance 𝑆 to balance the bridge`,
    options: [
      `24 𝑜ℎ𝑚`,
      `44 9 𝑜ℎ𝑚`,
      `26.4 𝑜ℎ𝑚`,
      `18.7 𝑜ℎ𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 26.4 𝑜ℎ𝑚`
  },
  {
    question: `A galvanometer, having a resistance of 50 Ω, gives a full scale deflection for a current of 0.05A. The length in meter of a resistance wire of area of cross-section 2.97 × 10−2cm2 that can be used to convert the galvanometer into a ammeter which can read a maximum of 5A current is (Specific resistance of the wire = 5 × 10−7 Ωm)`,
    options: [
      `9`,
      `6`,
      `3`,
      `1.5`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3`
  },
  {
    question: `A uniform wire has resistance 24 Ω. It is bent in the form of a circle. The effective resistance between the two end points on any diameter of the circle is`,
    options: [
      `6 Ω`,
      `12 Ω`,
      `3 Ω`,
      `24 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6 Ω`
  },
  {
    question: `Above neutral temperature, thermo 𝑒.m.f. in a thermocouple`,
    options: [
      `Decreases with rise in temperature`,
      `Increases with rise in temperature`,
      `Remains constant`,
      `Changes sign`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Decreases with rise in temperature`
  },
  {
    question: `A galvanometer coil has a resistance of 15 Ω and gives full scale deflection for a current of 4mA. To convert it to an ammeter of range 0 to 6A`,
    options: [
      `10 m Ω resistance is to be connected in parallel to the galvanometer`,
      `10 m Ω resistance is to be connected in series with the galvanometer`,
      `0.1 Ω resistance is to be connected in parallel to the galvanometer`,
      `0.1 Ω resistance is to be connected in series with the galvanometer`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 m Ω resistance is to be connected in parallel to the galvanometer`
  },
  {
    question: `When 1 g hydrogen (ECE=1.044× 106−8 kg C−1) forms water, 34 kilo cal heat is liberated. The minimum voltage required to decompose water is`,
    options: [
      `0.75 V`,
      `1.5 V`,
      `3.0 V`,
      `4.5 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.5 V`
  },
  {
    question: `A current 2 𝐴 flows through a 2Ω resistor when connected across a battery. The same battery supplies a current 0.5 𝐴 when connected across a 9Ω resistor. The internal resistance of the battery is 2 6 3 2 6 3 2 6 3 P a g e | 77`,
    options: [
      `1Ω`,
      `0.5Ω`,
      `1/3Ω`,
      `1/4Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1/3Ω`
  },
  {
    question: `A cell in secondary circuit gives null deflection for 2.5𝑚 length of potentiometer having 10𝑚 length of wire. If the length of the potentiometer wire is increased by 1 𝑚 without changing the cell in the primary, the position of the null point now is`,
    options: [
      `3.5 𝑚`,
      `3 𝑚`,
      `2.75 𝑚`,
      `2.0 𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.75 𝑚`
  },
  {
    question: `Certain wire has resistance of 10Ω. If its is stretched by 1/10th of its length, then its resistance is nearly`,
    options: [
      `9 Ω`,
      `10 Ω`,
      `11 Ω`,
      `12 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 12 Ω`
  },
  {
    question: `A wire of resistance 10 Ω is bent to form a circle. 𝑃 and 𝑄 are points on the circumference of the circle dividing it into a quadrant and are connected to a battery of 3 𝑉 and internal resistance 1 Ω as shown in the figure. The currents in the two parts of the circle are`,
    options: [
      `6 23 𝐴 and 18 23 𝐴`,
      `5 26 𝐴 and 15 26 𝐴`,
      `4 25 𝐴 and 12 25 𝐴`,
      `3 25 𝐴 and 9 25 𝐴`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6 23 𝐴 and 18 23 𝐴`
  },
  {
    question: `In an experiment of meter bridge, a null point is obtained at the centre of the bridge wire. When a resistance of 10 𝑜ℎ𝑚 is connected in one gap, the value of resistance in other gap is`,
    options: [
      `10Ω`,
      `5Ω`,
      `1 5 Ω`,
      `500Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10Ω`
  },
  {
    question: `A conductor wire having 1029 free electrons/m3 carries a current of 20A. If the cross-section of the wire is 1mm2, then the drift velocity of electrons will be`,
    options: [
      `6.25 × 10−3ms−1`,
      `1.25 × 10−5ms−1`,
      `1.25 × 10−3ms−1`,
      `1.25 × 10−4ms−1`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.25 × 10−3ms−1`
  },
  {
    question: `Two resistances 𝑅 and 2𝑅 are connected in parallel in an electric circuit. The thermal energy developed in in 𝑅 and 2𝑅 is in the ratio`,
    options: [
      `1 : 2`,
      `1 : 4`,
      `4 : 1`,
      `2 : 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2 : 1`
  },
  {
    question: `Five equal resistances, each of resistance 𝑅,are connected as shown in figure below. A bettery of 𝑉 volt is connected between 𝐴 and 𝐵. The current flowing in 𝐹𝐶 will be`,
    options: [
      `3𝑉 𝑅`,
      `𝑉 𝑅`,
      `𝑉 2𝑅`,
      `2𝑉 𝑅`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑉 2𝑅`
  },
  {
    question: `Three moving coil galvanometers A, B and C are made of coils of three different material having torsional constant 1.8 × 10−8, 2.8 × 10−8 and 3.8 × 10−8 respectively. If the three galvanometers are identical in all other respect, then in which of the above cases sensitivity is maximum?`,
    options: [
      `A`,
      `C`,
      `B`,
      `Same in each case`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) A`
  },
  {
    question: `In the given circuit, the voltmeter records 5V. The resistance of the voltmeter in ohm is R C R F A E R R R B 3 V P Q 1 Ω P a g e | 78`,
    options: [
      `200`,
      `100`,
      `10`,
      `50`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 100`
  },
  {
    question: `The emf of the battery shown in figure, is`,
    options: [
      `12 V`,
      `13 V`,
      `16 V`,
      `18 V`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 13 V`
  },
  {
    question: `A charge of 2 × 10−1C move at 30 revolutions per second in a circle of diameter 80 cm. The current linked with the circuit is`,
    options: [
      `0.02 A`,
      `20 A`,
      `0.60 A`,
      `60 A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.60 A`
  },
  {
    question: `A capacitor of 10 μF has a potential difference of 40 V across it. If it is discharged in 0.2 s, the average current during discharge is`,
    options: [
      `2 mA`,
      `4 mA`,
      `1 mA`,
      `0.5 mA`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 mA`
  },
  {
    question: `An electric bulb is rated 220 V – 100 W. The power consumed by it when operated on 110 V will be`,
    options: [
      `75 W`,
      `40 W`,
      `25 W`,
      `50 W`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 25 W`
  },
  {
    question: `Two batteries 𝐴 and 𝐵 each of e.m.f. 2 𝑉 are connected in series to an external resistance 𝑅 = 1 𝑜ℎ𝑚. If the internal resistance of battery 𝐴 is 1.9 𝑜ℎ𝑚 and that of 𝐵 is 0.9 𝑜ℎ𝑚, what is the potential difference between the terminals of battery 𝐴`,
    options: [
      `2 𝑉`,
      `3.8 𝑉`,
      `Zero`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Zero`
  },
  {
    question: `The effective resistance across the points 𝐴 and 𝐼 is`,
    options: [
      `2 Ω`,
      `1 Ω`,
      `0.5 Ω`,
      `5 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 Ω`
  },
  {
    question: `When the length and area of cross-section both are doubled, then its resistance`,
    options: [
      `Will become half`,
      `Will be doubled`,
      `Will remain the same`,
      `Will become four times`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Will remain the same`
  },
  {
    question: `The resistance of a conductor increases with`,
    options: [
      `Increase in length`,
      `Increase in temperature`,
      `Decrease in cross-sectional area`,
      `All of these`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) All of these`
  },
  {
    question: `A copper wire of resistance 𝑅 is cut into ten parts of equal length. Two pieces each are joined in series and then five such combinations are joined in parallel. The new combination will have a resistance R B A 4 Ω 2 Ω 2 Ω 2 Ω 1 Ω 1 Ω E 1 A ( ) 10 V V 100 Ω 50 Ω P a g e | 79`,
    options: [
      `𝑅`,
      `𝑅 4`,
      `𝑅 5`,
      `𝑅 25`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑅 25`
  },
  {
    question: `Which of the following characteristics of electron determines the current in a conductor?`,
    options: [
      `Thermal velocity alone`,
      `Drift velocity alone`,
      `Both thermal velocity and drift velocity`,
      `None of the above`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Drift velocity alone`
  },
  {
    question: `If the free electron density be 𝑛 and relaxation time be 𝜏, the electrical conductivity of a conductor may be expressed as`,
    options: [
      `𝑛𝑒𝜏 𝑚𝑒`,
      `𝑛𝑒2𝜏 𝑚𝑒`,
      `𝑛𝑒2 𝜏𝑚𝑒`,
      `𝑚𝑒𝑒2𝜏 𝑛`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑛𝑒2𝜏 𝑚𝑒`
  },
  {
    question: `Two identical electric lamps marked 500 𝑊, 220 𝑉 are connected in series and then joined to a 110 𝑉 line. The power consumed by each lamp is`,
    options: [
      `125 4 𝑊`,
      `25 4 𝑊`,
      `225 4 𝑊`,
      `125 𝑊`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 125 4 𝑊`
  },
  {
    question: `The charge supplied by source varies with time 𝑡 as 𝑄 = 𝑎𝑡− 𝑏𝑡2. The total heat produced in resistor 2𝑅 is`,
    options: [
      `𝑎3𝑅 6𝑏`,
      `𝑎3𝑅 27𝑏`,
      `𝑎3𝑅 3𝑏`,
      `None of these`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑎3𝑅 27𝑏`
  },
  {
    question: `A 4𝜇 F conductor is charged to 400 V and then its plates are joined through a resistance of 1 kΩ. The heat produced in the resistance is`,
    options: [
      `0.18 J`,
      `0.21 J`,
      `0.25 J`,
      `0.32 J`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.32 J`
  },
  {
    question: `In the figure given the value of 𝑋 resistance will be, when the p.d. between 𝐵 and 𝐷 is zero`,
    options: [
      `4 𝑜ℎ𝑚`,
      `6 𝑜ℎ𝑚`,
      `8 𝑜ℎ𝑚`,
      `9 𝑜ℎ𝑚`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 8 𝑜ℎ𝑚`
  },
  {
    question: `A heater is operated with a power of 1000𝑊 in a 100𝑉 line. It is connected in combination with a resistance of 10Ω and a resistance 𝑅 to a 100𝑉 line as shown in figure. What should be the value of 𝑅 so, that the heater operates with a power of 62.5𝑊`,
    options: [
      `10Ω`,
      `62.5Ω`,
      `1 5 Ω`,
      `5Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5Ω`
  },
  {
    question: `The masses of three wires of copper are in the ratio 1: 3: 5 and lengths are in the ratio 5: 3: 1. Then the ratio of their electrical resistances are A V A V A V + - R R 2R Source B X C 4 4 6 15 15 4 D A 3 8 6 6 P a g e | 80`,
    options: [
      `1: 3: 5`,
      `5: 3: 1`,
      `1: 15: 25`,
      `125: 15: 1`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 125: 15: 1`
  },
  {
    question: `In the figure a part of electric circuit has been shown. The value of current 𝑖 is`,
    options: [
      `1.7 A`,
      `3.7 A`,
      `1.3 A`,
      `1A`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.7 A`
  },
  {
    question: `A wire of length 𝐿 and 3 identical cells of negligible internal resistances are connected in series. Due to the current, the temperature of the wire due to the current, the temperature of the wire is raised by ∆𝑇 is a time 𝑡. A number 𝑁 of similar cells is now connected in series with a wire of the same material and cross- section but of length 2𝐿. The temperature of the wire is raised by the same amount ∆𝑇 in the same time 𝑡. The value of 𝑁 is`,
    options: [
      `4`,
      `6`,
      `8`,
      `9`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6`
  },
  {
    question: `A milli voltmeter of 25 milli volt range is to be converted into an ammeter to 25 ampere range. The value (in ohm) of necessary shunt will be`,
    options: [
      `0.001`,
      `0.01`,
      `1`,
      `0.05`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.001`
  },
  {
    question: `Three bulbs of 40 𝑊, 60 𝑊, 100 𝑊 are arranged in series with 220 𝑣𝑜𝑙𝑡 supply. Which bulb has minimum resistance`,
    options: [
      `100 𝑊`,
      `40 𝑊`,
      `60 𝑊`,
      `Equal in all bulbs`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 100 𝑊`
  },
  {
    question: `A copper voltmeter is connected in series with a heater coil of resistance 0.1Ω. A steady current flows in the circuit for twenty minutes and mass of 0.99 𝑔 of copper is deposited at the cathode. If electrochemical equivalent of copper is 0.00033 𝑔𝑚/𝐶, then heat generated in the coil is`,
    options: [
      `750 𝐽`,
      `650 𝐽`,
      `350 𝐽`,
      `250 𝐽`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 750 𝐽`
  },
  {
    question: `In the circuit shown the equivalent resistance between A and B is`,
    options: [
      `27 Ω`,
      `18 Ω`,
      `9 Ω`,
      `3 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3 Ω`
  },
  {
    question: `The relation between Seeback coefficient (or thermo electric power) 𝑆 and Peltier coefficient 𝜋 is given by`,
    options: [
      `𝑆 = 𝜋𝑇`,
      `𝑆 = 𝜋 𝑇`,
      `𝑆 = 𝜋2 𝑇`,
      `𝑆 = 𝜋 𝑇2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑆 = 𝜋 𝑇`
  },
  {
    question: `A thermocouple develops 40 𝜇𝑉/𝑘𝑒𝑙𝑣𝑖𝑛. If hot and cold junctions are at 40℃ and 20℃ respectively, then then emf developed by a thermopile using such 150 thermocouples in series shall be`,
    options: [
      `150𝑚𝑉`,
      `80𝑚𝑉`,
      `144𝑚𝑉`,
      `120𝑚𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 120𝑚𝑉`
  },
  {
    question: `The thermo emf produced in a thermo-couple is 3 microvolt per degree centigrade. If the temperature of the cold junction is 20℃ and the thermo emf is 0.3 millivolt, the temperature of the hot junction is`,
    options: [
      `80℃`,
      `100℃`,
      `120℃`,
      `140℃`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 120℃`
  },
  {
    question: `In the circuit shown in the figure, the current flowing in 2 Ω resistance`,
    options: [
      `1.4 𝐴`,
      `1.2 𝐴`,
      `0.4 𝐴`,
      `1.0 𝐴`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1.0 𝐴`
  },
  {
    question: `The current in the given circuit is`,
    options: [
      `0.3A`,
      `0.4A`,
      `0.1A`,
      `0.2A`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1A`
  },
  {
    question: `Given 𝑅1 = 5.0 ± 0.2Ω, 𝑅2 = 10.0 ± 0.1Ω. What is total resistance in parallel with possible percentage error?`,
    options: [
      `15Ω± 2%`,
      `3.3 Ω± 7%`,
      `15 Ω± 7%`,
      `3.3Ω± 2%`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.3 Ω± 7%`
  },
  {
    question: `The equivalent resistance between the points 𝑃 and 𝑄 in the network given here is equal to (given 𝑟 = 3 2 Ω)`,
    options: [
      `1 2 Ω`,
      `1 Ω`,
      `3 2 Ω`,
      `2 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 Ω`
  },
  {
    question: `The resistance of a wire at 300 K is found to be 0.3Ω. If the temperature coefficient of resistance of wire is 1.5 × 10−3K−1 , the temperature at which the resistance becomes 0.6Ω is`,
    options: [
      `720 K`,
      `345 K`,
      `993 K`,
      `690 K`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 993 K`
  },
  {
    question: `Resistance of a resistor at temperature 𝑡° 𝐶 is 𝑅𝑡 = 𝑅0(1 + α𝑡 + β𝑡2). Here 𝑅𝑜is the resistance at 0°C. The temperature coefficient of resistance at temperature 𝑡°C is`,
    options: [
      `(1 + α𝑡 + β𝑡2) α + 2β𝑡`,
      `(α + 2β𝑡)`,
      `α + 2β𝑡 (1 + α𝑡 + β𝑡2)`,
      `(α + 2β𝑡) 2(1 + α𝑡 + β𝑡2)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) α + 2β𝑡 (1 + α𝑡 + β𝑡2)`
  },
  {
    question: `If a rod has resistance 4Ω and if rod is turned as half circle, then the resistance along diameter is`,
    options: [
      `1.56Ω`,
      `2.44Ω`,
      `4Ω`,
      `2Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4Ω`
  },
  {
    question: `In the given figure, battery 𝐸 is balanced on 55 𝑐𝑚 length of potentiometer wire but when a resistance of 10 Ω is connected in parallel with the battery then it balances on 50 𝑐𝑚 length of the potentiometer wire then internal resistance 𝑟 of the battery is A 2 V r E B 1 m r r r r r r r r P Q 2 V B A 20 Ω 1.4A 25 5 2 10 G  I 5 V P a g e | 82`,
    options: [
      `1 Ω`,
      `3 Ω`,
      `10 Ω`,
      `5 Ω`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 Ω`
  },
  {
    question: `Two wires of equal diameters, of resistivities 𝜌1 and 𝜌2 and lengths 𝑙1 and 𝑙2, respectively, are joined in series. The equivalent resistivity of the combination is`,
    options: [
      `𝜌1𝑙1 + 𝜌2𝑙2 𝑙1 + 𝑙2`,
      `𝜌1𝑙2 + 𝜌2𝑙1 𝑙1 − 𝑙2`,
      `𝜌1𝑙2 + 𝜌2𝑙1 𝑙1 + 𝑙2`,
      `𝜌1𝑙1 − 𝜌2𝑙2 𝑙1 − 𝑙2`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝜌1𝑙1 + 𝜌2𝑙2 𝑙1 + 𝑙2`
  },
  {
    question: `If six identical cells each having an e. m. f. of 6𝑉 are connected in parallel, the e.m.f. of the combination is`,
    options: [
      `1 𝑉`,
      `36 𝑉`,
      `1 6 𝑉`,
      `6 𝑉`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 6 𝑉`
  },
  {
    question: `In the circuit shown, the heat produced in the 5Ω resistor due to current flowing in it is 10 cal− s−1. The heat generated in Ω resistor is`,
    options: [
      `1 cal− s−1`,
      `2 cal− s−1`,
      `3 cal− s−1`,
      `4 cal− s−1`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 cal− s−1`
  },
  {
    question: `In the figure shown, the capacity of the condenser 𝐶 is 2 𝜇𝐹. The current in 2Ω resistor is`,
    options: [
      `9 𝐴`,
      `0.9 𝐴`,
      `1 9 𝐴`,
      `1 0.9 𝐴`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.9 𝐴`
  },
  {
    question: `To deposit one gm equivalent of an element at an electrode, the quantity of electricity needed is`,
    options: [
      `One 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `96000 𝑎𝑚𝑝𝑒𝑟𝑒𝑠`,
      `96500 𝑓𝑎𝑟𝑎𝑑𝑠`,
      `96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏𝑠`
  },
  {
    question: `In the following Wheatstone bridge 𝑃/𝑄 = 𝑅/𝑆. If key 𝐾 is closed, then the galvanometer will show deflection`,
    options: [
      `In left side`,
      `In right side`,
      `No deflection`,
      `In either side`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) In either side`
  },
  {
    question: `We have two wires 𝐴 and 𝐵 of same mass and same material. The diameter of the wire 𝐴 is half of that 𝐵. If the resistance of wire 𝐴 is 24 𝑜ℎ𝑚 then the resistance of wire 𝐵 will be`,
    options: [
      `12 𝑂ℎ𝑚`,
      `3.0 𝑂ℎ𝑚`,
      `1.5 𝑂ℎ𝑚`,
      `None of the above`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.5 𝑂ℎ𝑚`
  },
  {
    question: `The Petlier coefficient of a thermo-couple of metls 𝐴 and 𝐵 at junction temperature 𝑇 is given by`,
    options: [
      `𝑇2 𝑑𝐸 𝑑𝑇2`,
      `𝑇𝑑𝐸 𝑑𝑇`,
      `𝑇3 𝑑𝐸2 𝑑𝑇`,
      `𝑇4 𝑑2𝐸 𝑑𝑇2`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑇𝑑𝐸 𝑑𝑇`
  },
  {
    question: `A 30, 90 W lamps are to be operated on a 120 V DC line. For proper glow, a resistor of ……. Ω should be connected in series with the lamp.`,
    options: [
      `40`,
      `10`,
      `20`,
      `30`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30`
  },
  {
    question: `The lead wires should have`,
    options: [
      `Larger diameter and low resistance`,
      `Smaller diameter and high resistance`,
      `Smaller diameter and low resistance`,
      `Larger diameter and high resistance`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Larger diameter and low resistance`
  },
  {
    question: `A battery of emf 2V and internal resistance 0.1 Ω is being charged by a current of 5A. the potential difference between the terminals of the battery is`,
    options: [
      `2.5 Ω`,
      `1.5 Ω`,
      `0.5 Ω`,
      `1 Ω R S Q P K 6V 2.8Ω + – 2F 4Ω 3Ω 2Ω 5 Ω 6 Ω 4 Ω P a g e | 83`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2.5 Ω`
  },
  {
    question: `A potentiometer circuit shown in the figure is set up to measure e.m.f. of a cell 𝐸. As the point 𝑃 moves from 𝑋 to 𝑌 the galvanometer 𝐺 shows deflection always in one direction, but the deflection decreases continuously until 𝑌 is reached. In order to obtain balance point between 𝑋 and 𝑌 it is necessary to`,
    options: [
      `Decreases the resistance 𝑅`,
      `Increase the resistance 𝑅`,
      `Reverse the terminals of battery 𝑉`,
      `Reverse the terminals of cell 𝐸`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Decreases the resistance 𝑅`
  },
  {
    question: `The reading of the ideal voltmeter in the adjoining diagram will be`,
    options: [
      `4 𝑉`,
      `8 𝑉`,
      `12 𝑉`,
      `14 𝑉`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 𝑉`
  },
  {
    question: `A wire 20 cm long and 1 mm2in cross-section carries a current of 4A when connected to a 2V battery. The resistivity of the wire is`,
    options: [
      `2 × 10−7Ω m`,
      `5 × 10−7Ω m`,
      `4 × 10−6Ω m`,
      `1 × 10−6Ω m`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1 × 10−6Ω m`
  },
  {
    question: `The resistance of a galvanometer is 50 Ω and it shows full scale deflection for a current of 1mA. To convert it into a voltmeter to measure 1V and as well as 10 V (refer circuit digram) the resistance 𝑅1 and 𝑅2 respectively are`,
    options: [
      `950 Ω and 9150 Ω`,
      `900 Ω and 9950 Ω`,
      `900 Ω and 9000Ω`,
      `950 Ω and 9950 Ω`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 950 Ω and 9950 Ω`
  },
  {
    question: `The temperature of cold junction of thermocouple is 0°C. If the neutral temperature is 270°C, then the inversion temperature is`,
    options: [
      `540°C`,
      `520°C`,
      `640°C`,
      `58°C`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 540°C`
  },
  {
    question: `In the circuit shown, if the resistance 5 Ω develops a heat of 42 J per second, heat developed in 2 Ω must be about (in Js−1)`,
    options: [
      `25`,
      `20`,
      `30`,
      `35`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30`
  },
  {
    question: `The following four wires are made of the same material and are at the same temperature. Which one of them has highest electrical resistance?`,
    options: [
      `Length =50 cm, diameter=0.5 mm`,
      `Length =100 cm, diameter=1 mm`,
      `Length=200 cm , diameter=2 mm`,
      `Length=300cm, diameter=3 mm`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Length =50 cm, diameter=0.5 mm`
  },
  {
    question: `A meter bridge is set-up as shown in figure, to determine an unknown resistance X using a standard 10 Ω resistor. The galvanometer shows null point when tapping key is at 52cm mark. The end-corrections are 1cm and 2cm respectively for the ends A and B. the determined value of x is 6Ω 9Ω 2Ω 5ΩA G R 1 R 2 1 V 10 V V 10V 20Ω 10Ω 4V C N B A V E X Y P R G P a g e | 84`,
    options: [
      `10.2 Ω`,
      `10.6 Ω`,
      `10.8 Ω`,
      `11.1 Ω`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10.6 Ω`
  },
  {
    question: `The resistance between the terminal points 𝐴 and 𝐵 of the given infinitely long circuit will be`,
    options: [
      `(√3 − 1)`,
      `(1 − √3)`,
      `(1 + √3)`,
      `(2 + √3)`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) (1 + √3)`
  },
  {
    question: `A 60 𝑤𝑎𝑡𝑡 bulb carries a current of 0.5 𝑎𝑚𝑝. The total charge passing through it in 1 ℎ𝑜𝑢𝑟 is`,
    options: [
      `3600 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `3000 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `2400 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
      `1800 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1800 𝑐𝑜𝑢𝑙𝑜𝑚𝑏`
  },
  {
    question: `A bulb of 220 V and 300 W is connected across 110 V circuit, the percentage reduction in power is`,
    options: [
      `100%`,
      `25%`,
      `70%`,
      `75%`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 75%`
  },
  {
    question: `A potentiometer has uniform potential gradient. The specific resistance of the material of the potentiometer wire is 10−7 𝑜ℎ𝑚− 𝑚𝑒𝑡𝑒𝑟 and the current passing through it is 0.1 𝑎𝑚𝑝𝑒𝑟𝑒; cross-section of the wire is 10−6𝑚2. The potential gradient along the potentiometer wire is`,
    options: [
      `10−4 𝑉/𝑚`,
      `10−6 𝑉/𝑚`,
      `10−2 𝑉/𝑚`,
      `10−8 𝑉/𝑚 100`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 10−8 𝑉/𝑚 100`
  },
  {
    question: `A hot electric iron has a resistance of 80 Ω and is used on a 200 𝑉 source. The electrical energy spent, if it is used for two hours, will be`,
    options: [
      `8000 𝑊ℎ`,
      `2000 𝑊ℎ`,
      `1000 𝑊ℎ`,
      `800 𝑊ℎ 100`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2000 𝑊ℎ`
  },
  {
    question: `The thermocouple is based on the principle of`,
    options: [
      `Seebeck effect`,
      `Thomson effect`,
      `Peltier effect`,
      `Joule effect 100`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Peltier effect`
  },
  {
    question: `The measurement of voltmeter in the following circuit is`,
    options: [
      `2.4 𝑉`,
      `3.4 𝑉`,
      `4.0 𝑉`,
      `6.0 𝑉 100`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2.4 𝑉`
  },
  {
    question: `In the circuit given, the correct relation to a balanced Wheatstone bridge is`,
    options: [
      `P 𝑄 = 𝑅 𝑆`,
      `𝑃 𝑄 = 𝑆 𝑅`,
      `𝑃 𝑅 = 𝑆 𝑄`,
      `None of these 100`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) P 𝑄 = 𝑅 𝑆`
  },
  {
    question: `In the circuit as shown in figure the 6V 60 + – 40 V P a g e | 105 1Ω 1Ω 1Ω`,
    options: [
      `Resistance 𝑅 = 46 Ω`,
      `Current through 20 Ω resistance is 0.1 𝐴`,
      `Potential difference across the middle resistance is 2 𝑉`,
      `All option are correct 100`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Potential difference across the middle resistance is 2 𝑉`
  },
  {
    question: `Two electric bulbs, each designed to operate with a power of 500 W in 220 V line are connected in series in a 110 V line. The power generated by each bulb will be`,
    options: [
      `31.25 W`,
      `40 W`,
      `60 W`,
      `3.125 W 100`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 40 W`
  },
  {
    question: `A heater draws a current of 2𝐴 when connected to a 250 𝑉 source. The rate of energy dissipation is`,
    options: [
      `500 𝑊`,
      `1000 𝑊`,
      `250 𝑊`,
      `125 𝑊 100`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1000 𝑊`
  },
  {
    question: `A 100 𝑜ℎ𝑚 galvanometer gives full scale deflection at 10 𝑚𝐴. How much shunt is required to read 100 𝑚𝐴`,
    options: [
      `11.11 𝑜ℎ𝑚`,
      `9.9 𝑜ℎ𝑚`,
      `1.1 𝑜ℎ𝑚`,
      `4.4 𝑜ℎ𝑚 101`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9.9 𝑜ℎ𝑚`
  },
  {
    question: `When the key 𝐾 is pressed at time 𝑡 = 0, which of the following statements about the current 𝐼 in the resistor 𝐴𝐵 of the given circuit is true`,
    options: [
      `𝐼 = 2 𝑚𝐴 at all 𝑡`,
      `𝐼 oscillates between 1 𝑚𝐴 and 2𝑚𝐴`,
      `𝐼 = 1 𝑚𝐴 at all 𝑡`,
      `At 𝑡 = 0, 𝐼 = 2 𝑚𝐴 and with time it goes to 1 𝑚𝐴 101`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) At 𝑡 = 0, 𝐼 = 2 𝑚𝐴 and with time it goes to 1 𝑚𝐴 101`
  },
  {
    question: `The equivalent resistance between points A and B of an infinite network of resistances, each of 1 Ω, connected as shown is 1Ω 1Ω 1Ω - - - - - - - - - - B A B 1000Ω C 1F A K 2V 1000Ω P a g e | 106`,
    options: [
      `Infinite`,
      `2 Ω`,
      `1 + √5 2 Ω`,
      `zero 101`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `If 100 kWh of energy is consumed at 66 V in a copper voltmeter, then the mass of copper liberated will be (Given ,ECE of Cu = 0.33 × 10−6kg C−1)`,
    options: [
      `1.65 kg`,
      `1.8 kg`,
      `3.3 kg`,
      `3.6 kg 101`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 3.3 kg`
  },
  {
    question: `In the circuit shown in the figure, if the potential at point 𝐴 is taken to be zero, the potential at point 𝐵 is`,
    options: [
      `−2𝑉`,
      `+1𝑉`,
      `−1𝑉`,
      `+2𝑉 101`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) −2𝑉`
  },
  {
    question: `When a current is passed through water, acidified with a dilute sulphuric acid, the gases formed at the platinum electrodes are`,
    options: [
      `1 vol. hydrogen (cathode) and 2 vol. oxygen (anode)`,
      `2 vol. hydrogen (cathode) and 1 vol. oxygen (anode)`,
      `1 vol. hydrogen (cathode) and 1 vol. oxygen (anode)`,
      `1 vol. oxygen (cathode) and 2 vol. hydrogen (anode) 101`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 vol. hydrogen (cathode) and 2 vol. oxygen (anode)`
  },
  {
    question: `The temperature at which thermo emf is zero, is`,
    options: [
      `Temperature of inversion`,
      `Temperature of cold junction`,
      `Neutral temperature`,
      `None of the above 101`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Neutral temperature`
  },
  {
    question: `An emf of 0.9 V is generated when the temperature difference hot and cold junction of thermocouple is 75 K. Assuming that the thermo emf is directly proportional to the temperature difference, the extent to which the thermo emf will change when the cold junction is heated up by 15 K is`,
    options: [
      `10%`,
      `20%`,
      `40%`,
      `60% 101`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20%`
  },
  {
    question: `𝑛 identical cells, each of emf 𝐸 and internal resistance 𝑟, are connected in series a cell 𝐴 is joined with reverse polarity. The potential difference across each cell, except 𝐴 is`,
    options: [
      `2𝑛𝐸 𝑛− 2`,
      `(𝑛− 2)𝐸 𝑛`,
      `(𝑛− 1)𝐸 𝑛`,
      `2𝐸 𝑛 101`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) (𝑛− 2)𝐸 𝑛`
  },
  {
    question: `The ammeter 𝐴 reads 2 𝐴 and the voltmeter 𝑉 reads 20 𝑉. The value of resistance 𝑅 is (Assuming finite resistance’s of ammeter and voltmeter)`,
    options: [
      `Exactly 10 𝑜ℎ𝑚`,
      `Less than 10 𝑜ℎ𝑚`,
      `More than 10 𝑜ℎ𝑚`,
      `We cannot definitely say 102`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Less than 10 𝑜ℎ𝑚`
  },
  {
    question: `Two identical batteries each emf 𝐸 =2V and internal resistance 𝑟 = 1Ω are available to produce heat in an external resistance by passing a current through it. The maximum Joulean power that can be developed across 𝑅 using these batteries is`,
    options: [
      `1.28 W`,
      `2.0 W`,
      `8 9 W`,
      `3.2 W 102`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 3.2 W 102`
  },
  {
    question: `One junction of thermocouple is at 0℃ and the other is at 𝑇℃. The thermo emf (in volts) is given by 𝐸 = 20 × 10−6𝑇 − 0.02 × 10−6𝑇2 R A V P a g e | 107 The maximum value of 𝐸 is`,
    options: [
      `5 mV`,
      `1 m V`,
      `10 m V`,
      `Zero 102`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 m V`
  },
  {
    question: `If 𝑡1 and 𝑡2 are the times taken by two different coils for producing same heat with same supply, then the time taken by them to produce the same heat when connected in parallel will be`,
    options: [
      `𝑡1 + 𝑡2`,
      `𝑡1𝑡2 𝑡1 + 𝑡2`,
      `2𝑡1𝑡2 𝑡1 + 𝑡2`,
      `𝑡1𝑡2 102`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2𝑡1𝑡2 𝑡1 + 𝑡2`
  },
  {
    question: `For what value of 𝑅 in the circuit as shown in figure, current passing through 4Ω resistance will be zero.`,
    options: [
      `1 Ω`,
      `2 Ω`,
      `3 Ω`,
      `4 Ω 102`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 Ω`
  },
  {
    question: `In the adjoining circuit diagram each resistance is of 10 Ω. The current in the arm AD will be`,
    options: [
      `2𝑖 5`,
      `3𝑖 5`,
      `4𝑖 5`,
      `𝑖 5 102`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2𝑖 5`
  },
  {
    question: `An electric fan and a heater are marked as 100 𝑤𝑎𝑡𝑡, 220 𝑣𝑜𝑙𝑡 and 1000 𝑤𝑎𝑡𝑡, 220 volt respectively. The resistance of the heater is`,
    options: [
      `Zero`,
      `Greater than that of the fan`,
      `Less than that of the fan`,
      `Equal to that of the fan 102`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Less than that of the fan`
  },
  {
    question: `In the figure, current through the 3Ω resistor is 0.8 𝑎𝑚𝑝𝑒𝑟𝑒, then potential drop through 4 Ω resistor is`,
    options: [
      `9.6 𝑉`,
      `2.6 𝑉`,
      `4.8 𝑉`,
      `1.2 𝑉 102`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.6 𝑉`
  },
  {
    question: `In a potentiometer experiment two cells of e.m.f.’ s 𝐸1 and 𝐸2 are used in series and in conjunction and the balancing length is found to be 58 𝑐𝑚 of the wire. If the polarity of 𝐸2 is reversed, then the balancing length becomes 29 𝑐𝑚. The ratio 𝐸1 𝐸2 of the e.m.f. of the two cells is`,
    options: [
      `1 : 1`,
      `2 : 1`,
      `3 : 1`,
      `4 : 1 102`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 : 1`
  },
  {
    question: `An energy source will supply a constant current into, the load, if its internal resistance is`,
    options: [
      `Equal to the resistance of the load`,
      `Very large as compared to the load resistance`,
      `Zero`,
      `Non-zero but less than the resistance of the load 103 The electric bulbs have tungsten filaments of same length. If one of then gives 60 𝑤𝑎𝑡𝑡 and other 100 𝑤𝑎𝑡𝑡, 6  4  3  + – i A D C B E F i 4 Ω 2 Ω A B F E D R 6 V 9 V 3 V C P a g e | 108`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Very large as compared to the load resistance`
  },
  {
    question: `The value of current I in figure is`,
    options: [
      `4A`,
      `6A`,
      `3A`,
      `5A 103`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 5A 103`
  },
  {
    question: `A constant current 𝑖 is passed through a resistor. Taking the temperature coefficient of resistance into account, indicate which of the plots shown in figure best represents the rate of production of thermal energy in the resistor`,
    options: [
      `𝑎`,
      `𝑏`,
      `𝑐`,
      `𝑑 103`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑏`
  },
  {
    question: `A torch battery consists of two cells of 1.45 𝑣𝑜𝑙𝑡 and an internal resistance 0.15 Ω. If each cell sends current through the filament of the lamps having resistance 1.5 𝑜ℎ𝑚, the value of current will be`,
    options: [
      `16.11 𝑎𝑚𝑝`,
      `1.611 𝑎𝑚𝑝`,
      `0.1611 𝑎𝑚𝑝`,
      `2.6 𝑎𝑚𝑝 103`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.1611 𝑎𝑚𝑝`
  },
  {
    question: `Thermoelectric constant of a thermocouple are 𝛼 and 𝛽. Thermoelectric power at inversion temperature is`,
    options: [
      `𝛼`,
      `−𝛼`,
      `𝛼 𝛽`,
      `− 𝛼 𝛽 103`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝛼`
  },
  {
    question: `A galvanometer whose resistance is 120Ω gives full scale deflection with a current of 0.005 𝐴 so that it can read a maximum current of 10 𝐴. A shunt resistance is added in parallel with it. The resistance of the ammeter so formed is`,
    options: [
      `0.06 Ω`,
      `0.006 Ω`,
      `0.6 Ω`,
      `6 Ω 103`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.06 Ω`
  },
  {
    question: `An electron revolves 6 × 1015𝑡𝑖𝑚𝑒𝑠/𝑠𝑒𝑐 in circular loop. The current in the loop is`,
    options: [
      `0.96 𝑚𝐴`,
      `0.96 𝜇 𝐴`,
      `28.8 𝐴`,
      `None of these 103`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 28.8 𝐴`
  },
  {
    question: `A galvanometer of resistance 25 Ω measures 10−3A. shunt required to increase range upto 2A is`,
    options: [
      `12.5 Ω`,
      `0.125 Ω`,
      `0.125 Ω`,
      `1.25 Ω 103`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.125 Ω`
  },
  {
    question: `The maximum current that can be measured by a galvanometer of resistance 40Ω is 10mA. It is converted into a voltmeter that can read upto 50V. The resistance to be connected is series with the galvanometer (in ohm) is`,
    options: [
      `2010`,
      `4050`,
      `5040`,
      `4960 103`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4050`
  },
  {
    question: `A student has 10 resistors of resistance ′𝑟′. The minimum resistance made by him from given resistors is`,
    options: [
      `10 𝑟`,
      `𝑟 10`,
      `𝑟 100`,
      `𝑟 5 104`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑟 10`
  },
  {
    question: `A thermoelectric refrigerator works on`,
    options: [
      `Joule effect`,
      `Seeback effect`,
      `Peltier effect`,
      `Thermonic emission 104`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Thermonic emission 104`
  },
  {
    question: `A wire of length 100 𝑐𝑚 is connected to a cell of 𝑒𝑚𝑓 2 𝑉 and negligible internal resistance. The resistance of the wire is 3 Ω. The additional resistance required to produce a potential drop of 1 𝑚𝑖𝑙𝑙𝑖 𝑣𝑜𝑙𝑡 per 𝑐𝑚 is`,
    options: [
      `60 Ω`,
      `47 Ω`,
      `57 Ω`,
      `35 Ω 104`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 47 Ω`
  },
  {
    question: `An electric bulb is rated 60𝑊, 220𝑉. The resistance of its filament is`,
    options: [
      `708 Ω`,
      `870 Ω`,
      `807 Ω`,
      `780 Ω 104`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 807 Ω`
  },
  {
    question: `In a 𝐴𝑔 voltameter 2.68 𝑔 of silver is deposited in 10 𝑚𝑖𝑛. The heat developed in 20Ω resistor during the same period will be`,
    options: [
      `192 𝑘𝐽`,
      `192 𝐽`,
      `200 𝐽`,
      `132 𝑘𝐽 104`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 192 𝑘𝐽`
  },
  {
    question: `A railway compartment is lit up by thirteen lamps each taking 2.1 A at 15 V. The heat generated per second in each lamp will be`,
    options: [
      `4.35 cal`,
      `5.73 cal`,
      `7.5 cal`,
      `2.5 cal 104`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4.35 cal`
  },
  {
    question: `If 𝑅1 and 𝑅2 be the resistances of the filaments of 200 W and 100 W electric bulbs operation at 220 V, then (𝑅1 𝑅2 ) is`,
    options: [
      `1`,
      `2`,
      `0.5`,
      `4 104`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.5`
  },
  {
    question: `In voltaic air cell if 5g zinc is consumed, how many ampere hours shall we get?`,
    options: [
      `2.05`,
      `8.2`,
      `4.1`,
      `5 × 5.38 × 10−3 104`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8.2`
  },
  {
    question: `A house, served by 220 V supply line, is protected by a 9 A fuse. The maximum number of 60 W bulbs in parallel that can be turned on is`,
    options: [
      `11`,
      `22`,
      `33`,
      `44 104`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 22`
  },
  {
    question: `The temperature coefficient of resistance for a wire is 0.00125° C−1.At 300 K its resistance is 1 Ω.The temperature at which the resistance becomes 1.5 Ω is?`,
    options: [
      `450 K`,
      `727 K`,
      `454 K`,
      `900 K 105`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 727 K`
  },
  {
    question: `The ratio of the amounts of heat developed in the four arms of a balanced Wheatstone bridge, when the arms have resistance 𝑃 = 100 Ω; Q = 10 Ω; R = 300 Ω and S = 30 Ω respectively is`,
    options: [
      `3 : 30 : 1 : 10`,
      `30 : 3 : 10 :1`,
      `30 : 10 : 1 : 3`,
      `30 : 1 : 3 : 10 105`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 30 : 1 : 3 : 10 105`
  },
  {
    question: `If the resistivity of an alloy of ρ’ and that of constituent metals is ρ, then`,
    options: [
      `ρ′ > 𝜌`,
      `ρ′ < 𝜌`,
      `ρ′ = ρ`,
      `There is no simple relation between ρ and ρ’ 105`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) ρ′ < 𝜌`
  },
  {
    question: `The electrochemical equivalent of a material in an electrolyte depends on`,
    options: [
      `The nature of the material`,
      `The current though the electrolyte`,
      `The amount of charge passed through electrolyte`,
      `The amount of material present in electrolyte 105 A current passing through a copper voltmeter deposits 0.002 kg of copper on cathode plate in 100 min. If 20 P a g e | 110`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) The amount of charge passed through electrolyte`
  },
  {
    question: `there are 1025 copper atoms in one kg of copper, the electric charge delivered to cathode by Cu++ ions per second will be`,
    options: [
      `0.53 C`,
      `0.71 C`,
      `1.06 C`,
      `10.06 C 105`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.53 C`
  },
  {
    question: `Resistance of a wire at 20°C is 20Ω and at 500°C is 60Ω. At what temperature its resistance is 25Ω?`,
    options: [
      `160°C`,
      `250°C`,
      `100°C`,
      `80°C 105`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 160°C`
  },
  {
    question: `The equivalent resistance between points 𝑎 and 𝑏 of a network shown in the figure is given by`,
    options: [
      `3 4 𝑅`,
      `4 3 𝑅`,
      `5 4 𝑅`,
      `4 5 𝑅 105`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 5 4 𝑅`
  },
  {
    question: `If the potential difference across the internal resistance 𝑟1 is equal to the emf E of the battery, then`,
    options: [
      `𝑅 = 𝑟1 + 𝑟2`,
      `𝑅 = 𝑟1 𝑟2`,
      `𝑅 = 𝑟1 − 𝑟2`,
      `𝑅 = 𝑟2 𝑟1 105`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅 = 𝑟1 𝑟2`
  },
  {
    question: `In an electric heater 4 𝑎𝑚𝑝 current passes for 1 𝑚𝑖𝑛𝑢𝑡𝑒 at potential difference of 250 𝑣𝑜𝑙𝑡, the power of heater and energy consumed will be respectively`,
    options: [
      `1 𝑘𝑊, 60 𝑘𝐽`,
      `0.5 𝑘𝑊, 30 𝑘𝐽`,
      `10 𝑘𝑊, 600 𝑘𝐽`,
      `None of these 105`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.5 𝑘𝑊, 30 𝑘𝐽`
  },
  {
    question: `In a metre bridge experiment, resistances are connected as shown in figure. The balancing length 𝑙1 is 55 𝑐𝑚. Now an unknown resistance 𝑥 is connected in series with 𝑃 and the new balancing length is found to be 75 𝑐𝑚. The value of 𝑥 is`,
    options: [
      `54 12Ω`,
      `20 11Ω`,
      `48 11Ω`,
      `11 48Ω 106`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 11Ω`
  },
  {
    question: `Three equal resistances, each of 10 Ω are connected as shown in figure. The maximum power consumed by each resistance is 20 W. What is maximum power that can be consumed by the combination?`,
    options: [
      `5 W`,
      `15 W`,
      `30 W`,
      `60 W 106`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 60 W 106`
  },
  {
    question: `Two resistance wires on joining in parallel the resultant resistance is 6 5 𝑜ℎ𝑚𝑠. One of the wire breaks, the effective resistance is 2 𝑜ℎ𝑚𝑠. The resistance of the broken wire is 10 Ω 10 Ω 10 Ω - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - E r 1 r 2 E i R P a g e | 111`,
    options: [
      `3 5 𝑜ℎ𝑚`,
      `2 𝑜ℎ𝑚`,
      `6 5 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚 106`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 𝑜ℎ𝑚`
  },
  {
    question: `For the circuit shown in the figure the potential difference between A and B will be (in volt)`,
    options: [
      `2`,
      `1.5`,
      `1.0`,
      `Zero 106`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.0`
  },
  {
    question: `Shown in the figure adjacent is a meter-bridge set up with null deflection in the galvanometer. The value of the unknown resistor R is`,
    options: [
      `13.75 Ω`,
      `220 Ω`,
      `110 Ω`,
      `55 Ω 106`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 13.75 Ω`
  },
  {
    question: `The heat produced in 4 Ω resistance is 10 cal. The heat produced in 10 Ω resistance will be`,
    options: [
      `25 cal`,
      `14 cal`,
      `10 cal`,
      `20 cal 106`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25 cal`
  },
  {
    question: `To liberate two litres of hydrogen at 222.4 atmosphere from acidulated water the quantity of electricity that must pass through is`,
    options: [
      `44.8 C`,
      `96500 C`,
      `193000 C`,
      `386000 C 106`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 193000 C`
  },
  {
    question: `In the circuit shown, the reading of ammeter when switch 𝑆 is open and when switch 𝑆 is closed respectively are`,
    options: [
      `3 𝐴 and 4 𝐴`,
      `4 𝐴 and 5 𝐴`,
      `5 𝐴 and 6 𝐴`,
      `6 𝐴 and 7 𝐴 106`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 4 𝐴 and 5 𝐴`
  },
  {
    question: `In the process of electrolysis, the current is carried out inside the electrolyte by`,
    options: [
      `Electrons`,
      `Atoms`,
      `Positive and negative ions`,
      `All the above 106`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Atoms`
  },
  {
    question: `The resistance of an ammeter is 3 Ω and its scale is graduated for a current upto 100A. After an additional shunt has been connected to this ammeter it becomes possible to measure currents upto 750A by this meter. The value of shunt resistance is 6Ω 4Ω 10Ω| 55Ω G R 20 cm 3Ω 2 V 2 V 1Ω 1 Ω P a g e | 112`,
    options: [
      `20Ω`,
      `2 Ω`,
      `0.2 Ω`,
      `2K Ω 107`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `The resistance of a wire is 10Ω. Its length is increased by 10% by stretching. The new resistance will now be`,
    options: [
      `12Ω`,
      `1.2Ω`,
      `13Ω`,
      `11Ω 107`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 11Ω 107`
  },
  {
    question: `The length of a given cylindrical wire is increased by 100%. Due to the consequent decrease in diameter the change in the resistance of the wire will be`,
    options: [
      `200 %`,
      `100 %`,
      `50 %`,
      `300 % 107`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 100 %`
  },
  {
    question: `The power of heater is 750 W at 1000℃. What will be its power at 200℃ if 𝑎 = 4 × 10−4 per℃ ?`,
    options: [
      `400 W`,
      `990 W`,
      `250 W`,
      `1500 W 107`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 250 W`
  },
  {
    question: `Masses of the three wires of same material are in the ratio of 1: 2: 3 and their lengths in the ratio of 3: 2: 1. Electrical resistance of these wires will be in the ratio of`,
    options: [
      `1: 1: 1`,
      `1: 2: 3`,
      `9: 4: 1`,
      `27: 6: 1 107`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1: 1: 1`
  },
  {
    question: `A wire of diameter 0.02 𝑚𝑒𝑡𝑟𝑒 contains 1028 free electrons per cubic metre. For an electrical current of 100 𝐴, the drift velocity of the free electrons in the wire is nearly`,
    options: [
      `1 × 10−19𝑚/𝑠`,
      `5 × 10−10𝑚/𝑠`,
      `2 × 10−4𝑚/𝑠`,
      `8 × 103𝑚/𝑠 107`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 × 10−19𝑚/𝑠`
  },
  {
    question: `Two uniform wires 𝐴 and 𝐵 are of the same metal and have equal masses. The radius of wire 𝐴 is twice that of wire 𝐵. The total resistance of 𝐴 and 𝐵 when connected in parallel is`,
    options: [
      `4 Ω when the resistance of wire 𝐴 is 4.25 Ω`,
      `5 Ω when the resistance of wire 𝐴 is 4.25 Ω`,
      `4 Ω when the resistance of wire 𝐵 is 4.25 Ω`,
      `5 Ω when the resistance of wire 𝐵 is 4.25 Ω 107`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 Ω when the resistance of wire 𝐵 is 4.25 Ω`
  },
  {
    question: `A piece of fuse wire melts when a current of 15 𝑎𝑚𝑝𝑒𝑟𝑒 flows through it. With this current, if it dissipates 22.5 𝑊, the resistance of fuse wire will be`,
    options: [
      `Zero`,
      `10 Ω`,
      `1 Ω`,
      `0.10 Ω 107`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 Ω`
  },
  {
    question: `A current of 2.0 𝑎𝑚𝑝𝑒𝑟𝑒 passes through a cell of e.m.f. 1.5 𝑣𝑜𝑙𝑡 having internal resistance of 0.15 𝑜ℎ𝑚. The potential difference measured, in 𝑣𝑜𝑙𝑡, across both the ends of the cell will be`,
    options: [
      `1.35`,
      `1.50`,
      `1.00`,
      `1.20 107`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.50`
  },
  {
    question: `To draw maximum current from a combination of cells, how should the cells be grouped?`,
    options: [
      `Parallel`,
      `Series`,
      `Mixed grouped`,
      `Depends upon the relative values of internal and external resistances 108`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Series`
  },
  {
    question: `A 12 𝐻𝑃 motor has to be operated 8 ℎ/𝑑𝑎𝑦. How much will it cost at the rate of 50 𝑝𝑎𝑖𝑠𝑒/𝑘𝑊ℎ in 10 𝑑𝑎𝑦𝑠?`,
    options: [
      `Rs 347`,
      `Rs 358`,
      `Rs 375`,
      `Rs 397 108`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Rs 397 108`
  },
  {
    question: `In the following star circuit diagram (figure), the equivalent resistance between the points 𝐴 and 𝐻 will be`,
    options: [
      `1.944 𝑟`,
      `0.973 𝑟`,
      `0.486 𝑟`,
      `0.243 𝑟 C r B r A r D E r r J r I r H r r G r F i 72° P a g e | 113 108`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.973 𝑟`
  },
  {
    question: `A voltmeter has resistance of 2000 𝑜ℎ𝑚 and it can measure upto 2𝑉. If we want to increase its range to 10 𝑉, then the required resistance in series will be`,
    options: [
      `2000 Ω`,
      `4000 Ω`,
      `6000 Ω`,
      `8000 Ω 108`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6000 Ω`
  },
  {
    question: `The thermocouple among the following that can produce maximum thermo-emf for the same temperature difference between the junction is`,
    options: [
      `Fe-Cu`,
      `Ag-Au`,
      `Sb-Bi`,
      `Cu-Pb 108`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Fe-Cu`
  },
  {
    question: `In the circuit shown, the current though 8 𝑜ℎ𝑚 is same before and after connecting 𝐸. The value of 𝐸 is`,
    options: [
      `12 𝑉`,
      `6 𝑉`,
      `4 𝑉`,
      `2 𝑉 108`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 12 𝑉`
  },
  {
    question: `Heat produced in a wire of resistance 𝑅 due to current flowing at constant potential difference is proportional to`,
    options: [
      `1 𝑅2`,
      `1 𝑅`,
      `𝑅`,
      `𝑅2 108`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅`
  },
  {
    question: `In the circuit shown, the current through the 4 Ω resistor is 1 amp when the points 𝑃 and 𝑀 are connected to a d.c. voltage source. The potential difference between the points 𝑀 and 𝑁 is`,
    options: [
      `0.5 𝑉`,
      `3.2 𝑉`,
      `1.5 𝑉`,
      `1.0 𝑉 108`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.2 𝑉`
  },
  {
    question: `The thermo emf of a thermo-couple is found to depend on temperature 𝑇(in degree Celsius) as 𝐸 = 4𝑇 − 𝑇2 200, where 𝑇℃ is the temperature of the hot junction. The neutral and inversion temperature of the thermocouple are (in degree celsius)`,
    options: [
      `100, 200`,
      `200, 400`,
      `300, 600`,
      `400, 800 108`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 200, 400`
  },
  {
    question: `In the above question, the resistance between the square faces is`,
    options: [
      `3 × 10−9𝑜ℎ𝑚`,
      `3 × 10−7𝑜ℎ𝑚`,
      `3 × 10−5𝑜ℎ𝑚`,
      `3 × 10−3𝑜ℎ𝑚 109`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 × 10−7𝑜ℎ𝑚`
  },
  {
    question: `When a current is passed in a conductor, 3℃ rise in temperature is observed. If the strength of current is increased by two times, then rise in temperature will approximately be`,
    options: [
      `36℃`,
      `27℃`,
      `18℃`,
      `9℃ 109 To get a maximum current through a resistance of 2.5Ω, one can use 𝑚 rows of cells each row having 𝑛 + - R Q P S 6V G P a g e | 114`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 9℃ 109 To get a maximum current through a resistance of 2.5Ω, one can use 𝑚 rows of cells each row having 𝑛 + - R Q P S 6V G P a g e | 114`
  },
  {
    question: `cells. The internal resistance of each cell is 0.5Ω. What are the values of 𝑚 and 𝑛 if the total number of cells are 20?`,
    options: [
      `𝑚 = 2, 𝑛 = 10`,
      `𝑚 = 4, 𝑛 = 5`,
      `𝑚 = 5, 𝑛 = 4`,
      `𝑛 = 2, 𝑚 = 10 109`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑚 = 4, 𝑛 = 5`
  },
  {
    question: `If an ammeter is joined in parallel through a circuit, it can be damaged due to excess`,
    options: [
      `Resistance`,
      `Current`,
      `Voltage`,
      `None of these 109`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Voltage`
  },
  {
    question: `In the circuit shown, 𝐴 and 𝑉 are ideal ammeter and voltmeter respectively. Reading of the voltmeter will be`,
    options: [
      `2 𝑉`,
      `1 𝑉`,
      `0.5 𝑉`,
      `Zero 109`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 𝑉`
  },
  {
    question: `Two identical batteries each of emf 2 V and internal resistance 1 Ω are available to produce heat in an external resistance by passing current through it. The maximum Joulean power that can be developed across the resistance using these batteries it.`,
    options: [
      `2W`,
      `3.2 W`,
      `1.28 W`,
      `8/9 W 109`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2W`
  },
  {
    question: `When the temperature difference between hot and cold junctions of a thermo-couple is 100 K an emf of 1 V is generated. Assume the cold junction is heated by 20 K, the percentage change in thermo emf is`,
    options: [
      `20%`,
      `30%`,
      `40%`,
      `25% 109`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 40%`
  },
  {
    question: `There are 𝑛 similar conductors each of resistance 𝑅. The resultant resistance comes out to be 𝑥 when connected in parallel. If they are connected in series, the resistance comes out to be`,
    options: [
      `𝑥/𝑛2`,
      `𝑛2𝑥`,
      `𝑥/𝑛`,
      `𝑛𝑥 109`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑛2𝑥`
  },
  {
    question: `The total current supplied to the circuit by the battery as shown figure is`,
    options: [
      `1A`,
      `6A`,
      `4A`,
      `2A 109`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6A`
  },
  {
    question: `A galvanometer has a resistance of 25 𝑜ℎ𝑚 and a maximum of 0.01 𝐴 current can be passed through it. In order to change it into an ammeter of range 10 𝐴, the shunt resistance required is`,
    options: [
      `5/999 𝑜ℎ𝑚`,
      `10/999 𝑜ℎ𝑚`,
      `20/999 𝑜ℎ𝑚`,
      `25/999 𝑜ℎ𝑚 110`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10/999 𝑜ℎ𝑚`
  },
  {
    question: `The current 𝑖 and voltage 𝑉 graphs for a given metallic wire at two different temperatures 𝑇1and 𝑇2 are shown in the figure. It is concluded that`,
    options: [
      `𝑇1 > 𝑇2`,
      `𝑇1 < 𝑇2`,
      `𝑇1 = 𝑇2`,
      `𝑇1 = 2𝑇1 110`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 𝑇1 = 2𝑇1 110`
  },
  {
    question: `In a region 1019 α −particales and 1019 protons move to the left, while 1019 electrons move to the right per second. The current is`,
    options: [
      `3.2 A towards left`,
      `3.2 A towards right`,
      `6.4 A towards left`,
      `6.4 A towards right 110`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3.2 A towards right`
  },
  {
    question: `An electric heater rated 220 V and 550 W is connected to AC mains. The current drawn by it is`,
    options: [
      `0.8 A`,
      `2.5 A`,
      `0.4 A`,
      `1.25 A 2V 1 1 V A P a g e | 115 110`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.4 A`
  },
  {
    question: `A galvanometer has 30 divisions and a sensitivity 16 𝜇𝐴/div. It can be converted into a voltmeter to read 3 𝑉 by connecting`,
    options: [
      `Resistance nearly 6 𝑘 Ω in series`,
      `6𝑘 Ω in parallel`,
      `500 Ω in series`,
      `It cannot be converted 110`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Resistance nearly 6 𝑘 Ω in series`
  },
  {
    question: `Three resistors are connected to form the sides of a triangle 𝐴𝐵𝐶, the resistance of the sides 𝐴𝐵, 𝐵𝐶 and 𝐶𝐴 are 40 𝑜ℎ𝑚, 60 𝑜ℎ𝑚 and 100 𝑜ℎ𝑚 respectively. The effective resistance between the points 𝐴 and 𝐵 in 𝑜ℎ𝑚 will be`,
    options: [
      `32`,
      `64`,
      `50`,
      `200 110`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 32`
  },
  {
    question: `A potentiometer wire of length 1𝑚 and resistance 10 Ω is connected in series with a cell of 𝑒𝑚𝑓 2𝑉 with internal resistance 1 Ω and a resistance box including a resistance 𝑅. If potential difference between the ends of the wire is 1 𝑚𝑉, the value of 𝑅 is`,
    options: [
      `20000 Ω`,
      `19989 Ω`,
      `10000 Ω`,
      `9989 Ω 110`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 10000 Ω`
  },
  {
    question: `An external resistance 𝑅 is connected to a battery of 𝑒. m. f. 𝑉 and internal resistance 𝑟. The joule heat produced in resistor 𝑅 is maximum when 𝑅 is equal to`,
    options: [
      `𝑟`,
      `𝑟 2`,
      `2𝑟`,
      `Infinitely large 110`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑟 2`
  },
  {
    question: `Two bulbs of 500 W and 200 W are manufactured to operate on 220 V line. The ratio of heat produced in 500 W and 200 W, in two cases, when firstly they are connected in parallel and secondly in series will be`,
    options: [
      `5 2 : 2 5`,
      `5 2 : 5 2`,
      `2 5 : 5 2`,
      `2 5 : 2 5 110`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 5 2 : 5 2`
  },
  {
    question: `The current in a simple series circuit is 5.0.A. when an additional resistance of 2.0 Ω is inserted, the current drops to 4.0 A. the original resistance of the circuit in ohm was`,
    options: [
      `1.25`,
      `8`,
      `10`,
      `20 111`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8`
  },
  {
    question: `In a potentiometer experiment for measuring the emf of a cell, the null point is at 480 cm when we have a 400 Ω resistor in series with the cell and galvanometer. If the series resistances is reduced to half, the null point will be at`,
    options: [
      `120 cm`,
      `240 cm`,
      `480 cm`,
      `600 cm 111`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 600 cm 111`
  },
  {
    question: `An aluminium (Al) rod with area of cross-section 4 × 10−6m2 has a current of 5 A flowing through it. Find the drift velocity of electron in the rod. Density of Al= 2.7 × 103 kgm−3 and atomic wt.=27u. Assume that each Al atom provides one electron.`,
    options: [
      `8.6 × 10−4ms−1`,
      `1.3 × 10−4ms−1`,
      `2.8 × 10−2ms−1`,
      `3.8 × 10−3ms−1 111`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.3 × 10−4ms−1`
  },
  {
    question: `Seven resistance are connected as shown in the figure. The equivalent resistance between 𝐴 and 𝐵 is`,
    options: [
      `3 Ω`,
      `4 Ω`,
      `4.5 Ω`,
      `5 Ω 111`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4.5 Ω`
  },
  {
    question: `In a conductor if 3000 coulomb of charge enters and 3000 coulomb of charge exits in time 10 minutes, then the current is`,
    options: [
      `5 ampere`,
      `10 ampere`,
      `2.5 ampere`,
      `Zero 111`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 ampere`
  },
  {
    question: `There are 8 equal resistance 𝑅. Two are connected in parallel, such four groups are connected in series, the total resistance of the system will be`,
    options: [
      `𝑅/2`,
      `2 𝑅`,
      `4 𝑅`,
      `8 𝑅 111`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑅/2`
  },
  {
    question: `Fifty electric bulbs, all identical, are connected in series across the mains of a 220 V supply. After one bulb is fused, the remaining 49 bulbs connected in series across the same mains. The illumination will be`,
    options: [
      `More with 50 bulbs than with 48 bulbs`,
      `More with 49 bulbs than with 50 bulbs 5Ω 10Ω 8Ω 6Ω 6Ω 3Ω 10Ω A B P a g e | 116`,
      `Equal in both cases`,
      `In the ratio (50)2: (49)2 in the first and second case respectively 111`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Equal in both cases`
  },
  {
    question: `If 𝑉𝐴𝐵 = 4𝑉 in the given figure, then resistance 𝑋 will be`,
    options: [
      `5 Ω`,
      `10 Ω`,
      `15 Ω`,
      `20 Ω 111`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 Ω`
  },
  {
    question: `A current 𝑖 passes through a wire of length 𝑙, radius of cross-section 𝑟 and resistivity 𝜌. The rate of heat generation is`,
    options: [
      `𝑖2𝑙𝜌 𝜋𝑟2`,
      `𝑖2 ( 𝑙𝜌 𝜋𝑟2) 2`,
      `𝑖2𝑙 𝜌/𝑟`,
      `𝑖𝑙 𝜌/𝑟 111`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑖2 ( 𝑙𝜌 𝜋𝑟2) 2`
  },
  {
    question: `Two wires that are made up of two different materials whose specific resistance are in the ratio 2 : 3, length 3 : 4 and area 4 : 5. The ratio of their resistances is`,
    options: [
      `6 : 5`,
      `6 : 8`,
      `5 : 8`,
      `1 : 2 112`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 : 8`
  },
  {
    question: `Twelve wires of equal resistance 𝑅 are connected to form a cube. The effective resistance between two opposite diagonal ends will be`,
    options: [
      `(5/6)𝑅`,
      `(6/5)𝑅`,
      `3𝑅`,
      `12𝑅 112`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 12𝑅 112`
  },
  {
    question: `E.C.E. of 𝐶𝑢 and 𝐴𝑔 are 7 × 10−6 and 1.2 × 10−6. A certain current deposits 14 𝑔𝑚 of 𝐶𝑢. Amount of 𝐴𝑔 deposited is`,
    options: [
      `1.2 𝑔𝑚`,
      `1.6 𝑔𝑚`,
      `2.4 𝑔𝑚`,
      `1.8 𝑔𝑚 112`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.6 𝑔𝑚`
  },
  {
    question: `A current of 2A flows in an electric circuit as shown in figure. The potential difference(𝑉𝑅 − 𝑉𝑆), in volts( 𝑉𝑅 − 𝑉𝑆 are potentials at R and S respectively) is`,
    options: [
      `-4`,
      `+2`,
      `+4`,
      `-2 112`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) +4`
  },
  {
    question: `Two wires of the same dimensions but resistivities 𝜌1 and 𝜌2are connected in series. The equivalent resistivity of the combination is`,
    options: [
      `𝜌1 + 𝜌2 2`,
      `𝜌1 + 𝜌2`,
      `2(𝜌1 + 𝜌2)`,
      `√𝜌1𝜌2 112`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝜌1 + 𝜌2 2`
  },
  {
    question: `If resistance of voltmeter is 10000Ω and resistance of galvanometer is 2Ω, then find R when voltmeter reads 12V and galvanometer reads 0.1A.`,
    options: [
      `118Ω`,
      `120Ω`,
      `124Ω`,
      `114Ω 112`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 118Ω`
  },
  {
    question: `A 25 𝑊, 220 𝑉 bulb and a 100 𝑊, 220 𝑉 bulb are connected in parallel across a 440 𝑉 line`,
    options: [
      `Only 100 𝑤𝑎𝑡𝑡 bulb will fuse`,
      `Only 25 𝑤𝑎𝑡𝑡 bulb will fuse`,
      `Both bulbs will fuse`,
      `None of the bulbs will fuse R G V 7Ω 3Ω 7Ω 3Ω 2 A 2 A P Q S A 2V X B 5V 10 R P a g e | 117 112`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Both bulbs will fuse`
  },
  {
    question: `A battery is made by connecting 6 cells each having capacity 5 Ah at 1.5V. The battery will have capacity equal to`,
    options: [
      `20 Ah at 9 V`,
      `30 Ah at 1.5 V`,
      `5 Ah at 9 V`,
      `5 Ah at 1.5 V 112`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30 Ah at 1.5 V`
  },
  {
    question: `If a wire of resistance 20Ω is covered with ice and a voltage of 210 𝑉 is applied across the wire, then the rate of melting of ice is`,
    options: [
      `0.85𝑔/𝑠`,
      `1.92𝑔/𝑠`,
      `6.56𝑔/𝑠`,
      `All of these 112`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.92𝑔/𝑠`
  },
  {
    question: `A voltmeter of resistance 1000Ω gives full scale deflection when a current of 100 𝑚𝐴 flows through it. The shunt resistance required across it to enable it to be used as an ammeter reading 1 𝐴 at full scale deflection is`,
    options: [
      `10000Ω`,
      `9000Ω`,
      `222Ω`,
      `111Ω 113`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9000Ω`
  },
  {
    question: `As the temperature of hot junction increases, the thermo 𝑒.m.f`,
    options: [
      `Always increases`,
      `Always decreases`,
      `May increases or de decreases`,
      `Always remains constant 113`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Always remains constant 113`
  },
  {
    question: `A uniform wire of 16 Ω is made into the form of square. Two opposite corners of the square are connected by a wire of resistance 16Ω. The effective resistance between the other two opposite corners is`,
    options: [
      `32Ω`,
      `20Ω`,
      `8Ω`,
      `4Ω 113`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20Ω`
  },
  {
    question: `A 100 𝑊 bulb 𝐵1, and two 60-𝑊 bulbs 𝐵2 and 𝐵3, are connected to a 250 𝑉 source, as shown in the figure. Now 𝑊1, 𝑊2 and 𝑊3 are the output powers of the bulbs 𝐵1, 𝐵2 and 𝐵3, respectively. Then`,
    options: [
      `𝑊1 > 𝑊2 = 𝑊3`,
      `𝑊1 > 𝑊2 > 𝑊3`,
      `𝑊1 < 𝑊2 = 𝑊3`,
      `𝑊1 < 𝑊2 < 𝑊3 113`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑊1 < 𝑊2 = 𝑊3`
  },
  {
    question: `What is the equivalent resistance of the circuit`,
    options: [
      `6 Ω`,
      `7 Ω`,
      `8 Ω`,
      `9 Ω 113`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 6 Ω`
  },
  {
    question: `An immersion heater is rated 836 𝑤𝑎𝑡𝑡. It should heat 1 𝑙𝑖𝑡𝑟𝑒 of water from 10℃ to 40℃ in about`,
    options: [
      `200 𝑠𝑒𝑐`,
      `150 𝑠𝑒𝑐`,
      `836 𝑠𝑒𝑐`,
      `418 𝑠𝑒𝑐 113`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 200 𝑠𝑒𝑐`
  },
  {
    question: `A resistance of 2 Ω is connected across one gap of a meter-bridge(the length of the wire is 100cm) and an unknown resistance, greater than 2 Ω is connected across the other gap. When these resistances are interchanged, the unknown resistance is`,
    options: [
      `3 Ω`,
      `2 Ω`,
      `4 Ω`,
      `6 Ω 113`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 Ω`
  },
  {
    question: `A wire of resistance 12 ohms per meter is bent to form a complete circle of radius 10 𝑐𝑚. The resistance between its two diametrically opposite points 𝐴 and 𝐵 as shown in the figure, is`,
    options: [
      `0.6 𝜋 Ω`,
      `3 Ω`,
      `6 𝜋 Ω`,
      `6 Ω 113 Metals have + – 4V, 1  2 2 2 4 A V 250V B1 B2 B3 P a g e | 118`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 Ω`
  },
  {
    question: `A galvanometer acting as a voltmeter should have`,
    options: [
      `Low resistance in series with its coil`,
      `Low resistance in parallel with its coil`,
      `High resistance in series in series with its coil`,
      `High resistance in parallel with its coil 114`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Low resistance in parallel with its coil`
  },
  {
    question: `In the circuit given here, the points A, B and C are 70V, zero, 10 V respectively. Then`,
    options: [
      `The point D will be at a potential of 60V`,
      `The point D will be at a potential of 20V`,
      `Currents in the path AD, DB and DC are in the ratio of 1:2:3`,
      `Currents in the path AD, DB and DC are in the ratio of 3 : 2 : 1 114`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Currents in the path AD, DB and DC are in the ratio of 3 : 2 : 1 114`
  },
  {
    question: `A 500 𝑊 heating unit is designed to operate from a 115 𝑣𝑜𝑙𝑡 line. If the line voltage drops to 110 volt, the percentage drop in heat output will be`,
    options: [
      `10.20%`,
      `8.1%`,
      `8.6%`,
      `7.6% 114`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8.1%`
  },
  {
    question: `4 cells each of emf 2 𝑉 and internal resistance of 1Ω are connected in parallel to a load resistor of 2Ω. Then the current through the load resistor is`,
    options: [
      `2 𝐴`,
      `1.5 𝐴`,
      `1 𝐴`,
      `0.888 𝐴 114`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 𝐴`
  },
  {
    question: `A potential divider is used to give outputs of 4 𝑉 and 8 𝑉 from a 12 𝑉 source. Which combination of resistances, (𝑅1: 𝑅2: 𝑅3) gives the correct voltages?`,
    options: [
      `2 : 1 : 2`,
      `1 : 1 : 1`,
      `2 : 2 : 1`,
      `1 : 1 : 2 114`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 : 1 : 2`
  },
  {
    question: `Two identical heaters of 220V , 1000 W are placed in parallel with each other across 220V line, then the combined power is`,
    options: [
      `1000 W`,
      `2000 W`,
      `500 W`,
      `4000 W 114`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 500 W`
  },
  {
    question: `Length of a hollow tube is 5𝑚, it’s outer diameter is 10 𝑐𝑚 and thickness of it’s wall is 5 𝑚𝑚. If resistivity of the material of the tube is 1.7 × 10−8Ω× 𝑚 then resistance of tube will be`,
    options: [
      `5.6 × 10−5Ω`,
      `2 × 10−5Ω`,
      `4 × 10−5Ω`,
      `None of these 114 The mass of ions deposited during a given interval of time in the process of electrolysis depends on 30Ω 20Ω A C D 10Ω B P a g e | 119`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 × 10−5Ω`
  },
  {
    question: `A current of 0.01mA passes through the potentiometer wire of a resistivity of 109 Ω-cm and area of cross-section 10−2cm2. The potential gradient is`,
    options: [
      `109Vm−1`,
      `1011Vm−1`,
      `1010Vm−1`,
      `108Vm−1 115`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1011Vm−1`
  },
  {
    question: `n conducting wires of same dimensions but having resistivites 1,2,3…..n are connected in series. The equivalent resistivity of the combinations is`,
    options: [
      `𝑛(𝑛+ 1) 2`,
      `𝑛+ 1 2`,
      `𝑛+ 2 2𝑛`,
      `2𝑛 𝑛+ 1 115`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 2𝑛 𝑛+ 1 115`
  },
  {
    question: `Arrange the order of power dissipated in the given circuits, if the same current is passing through all the circuits. The resistance of each resistor is 𝑟.`,
    options: [
      `𝑃1 > 𝑃2 > 𝑃 3 > 𝑃4`,
      `𝑃2 > 𝑃3 > 𝑃 4 > 𝑃1`,
      `𝑃4 > 𝑃3 > 𝑃 2 > 𝑃1`,
      `𝑃1 = 𝑃2 = P 3 = 𝑃4 115`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑃2 > 𝑃3 > 𝑃 4 > 𝑃1`
  },
  {
    question: `Three electric bulbs of rating 60𝑊 each are joined in series and then connected to electric mains. The power consumed by these three bulbs will be`,
    options: [
      `180 𝑊`,
      `60 𝑊`,
      `20 𝑊`,
      `20 3 𝑊 115`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20 𝑊`
  },
  {
    question: `A 3 V battery with negligible internal resistance is connected in a circuit as shown in the figure. The current I, in the circuit will be`,
    options: [
      `1A`,
      `1.5A`,
      `2A`,
      `1 3 𝐴 115`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1A`
  },
  {
    question: `Two conductors of the same material have their diameters in the ratio 1 : 2 and their lengths in the ratio 2 : 1. If the temperature difference between their ends is the same, then the ratio of amounts of heat conducted per second through them will be`,
    options: [
      `4 ∶ 1`,
      `1 ∶ 4`,
      `8 ∶ 1`,
      `1 ∶ 8 115`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4 ∶ 1`
  },
  {
    question: `An electric kettle boils some water in 16 min. Due to some defect, it becomes necessary to remove 10% turns of heating coil of the kettle. Now, how much time will it take to boil the same of water?`,
    options: [
      `17.7 min`,
      `14.4 min`,
      `20.9 min`,
      `13.7 min 115`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 20.9 min`
  },
  {
    question: `A rod of a certain metal is 1.0 m long and 0.6 cm in diameter. Its resistance is 3.0 × 10−3Ω. Another disc made of the same metal is 2.0 cm in diameter and 1.0 mm thick. What is the resistance between the round faces of the disc?`,
    options: [
      `1.35 × 10−8Ω`,
      `2.70 × 10−7Ω`,
      `4.05 × 10−6Ω`,
      `8.10 × 10−5Ω P1 B B B B i i i i P2 P3 P4 3Ω 3Ω 3 V I 3Ω P a g e | 120 115`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.70 × 10−7Ω`
  },
  {
    question: `The equivalent resistance between the points A and B will be (each resistance is 15 Ω)`,
    options: [
      `30 Ω`,
      `8 Ω`,
      `10 Ω`,
      `40 Ω 115`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8 Ω`
  },
  {
    question: `An ammeter, suspected to give inaccurate reading, is connected in series with a 𝑠𝑖𝑙𝑣𝑒𝑟 voltameter. The ammeter indicates 0.54 𝐴. A steady current passed for one hour deposits 2.0124 𝑔 of 𝑠𝑖𝑙𝑣𝑒𝑟. If the E.C.E. of 𝑠𝑖𝑙𝑣𝑒𝑟 is 1.118× 10−3𝑔/𝐶−1, then the error in ammeter reading is`,
    options: [
      `+ 0.04 𝐴`,
      `+ 0.02 𝐴`,
      `−0.03 𝐴`,
      `−0.01 𝐴 116`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) + 0.02 𝐴`
  },
  {
    question: `Two bulbs of 100 W and 200 W working at 220 V are joined in series with 220 V supply. Total power consumed will be`,
    options: [
      `65 W`,
      `33 W`,
      `300 W`,
      `100 W 116`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 100 W 116`
  },
  {
    question: `A current of 1 𝑚𝐴 is flowing through a copper wire. How many electrons will pass a given point in one 𝑠𝑒𝑐𝑜𝑛𝑑 [𝑒 = 1.6 × 10−19𝐶𝑜𝑢𝑙𝑜𝑚𝑏]`,
    options: [
      `6.25 × 1019`,
      `6.25 × 1015`,
      `6.25 × 1031`,
      `6.25 × 108 116`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6.25 × 1015`
  },
  {
    question: `A wire of resistance 𝑅 is elongated 𝑛 − fold to make a new uniform wire. The resistance of new wire`,
    options: [
      `𝑛𝑅`,
      `𝑛2𝑅`,
      `2𝑛𝑅`,
      `2𝑛2𝑅 116`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2𝑛𝑅`
  },
  {
    question: `Three unequal resistors in parallel are equivalent to a resistance 1 Ω. If two of them are in the ratio 1:2 and if no resistance value is fractional, the largest of the three resistance in ohm is`,
    options: [
      `4`,
      `6`,
      `8`,
      `12 116`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 4`
  },
  {
    question: `An electric kettle has two heating coils. When one coil is used, water in the kettle boils in 5 minutes, while when second coil is used, same water boils in 10 minutes. If the two coils, connected in parallel are used simultaneously, the same water will boil in time`,
    options: [
      `3 𝑚𝑖𝑛20 𝑠𝑒𝑐`,
      `5 𝑚𝑖𝑛`,
      `7 𝑚𝑖𝑛30 𝑠𝑒𝑐`,
      `2 𝑚𝑖𝑛30 𝑠𝑒𝑐 116`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3 𝑚𝑖𝑛20 𝑠𝑒𝑐`
  },
  {
    question: `An electric kettle takes 4 𝐴 current at 220 𝑉. How much time will it take to boil 1 𝑘𝑔 of water from room temperature 20℃? The temperature of boiling water is 100℃`,
    options: [
      `0.63 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `6.3 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `12.6 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `12.8 𝑚𝑖𝑛𝑢𝑡𝑒𝑠 116`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 12.6 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`
  },
  {
    question: `The three resistances of equal value are arranged in the different combinations shown below. Arrange them in increasing order of power dissipation 15Ω 15Ω 15Ω 15Ω 15Ω A B C D 15Ω 15Ω 15Ω P a g e | 121`,
    options: [
      `III < II < IV <I`,
      `II < III < IV < I`,
      `I < IV < III < II`,
      `I < III < II < IV 116`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) II < III < IV < I`
  },
  {
    question: `When a metal conductor connected to the left gap of a meter bridge is heated, the balancing point`,
    options: [
      `Shifts towards right`,
      `Shifts towards left`,
      `Remains unchanged`,
      `Remains at zero 116`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Shifts towards left`
  },
  {
    question: `The electro chemical equivalent of metal is 3.3 × 10−7kgC−1. The mass of the metal liberated at the cathode when a 3 A current is passed for 2 s, will be`,
    options: [
      `19.8 × 10−7 kg`,
      `9.9 × 10−7 kg`,
      `6.6 × 10−7 kg`,
      `1.1 × 10−7 kg 117`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 9.9 × 10−7 kg`
  },
  {
    question: `One 𝑘𝑖𝑙𝑜𝑤𝑎𝑡𝑡 hour is equal to`,
    options: [
      `36 × 105 𝑗𝑜𝑢𝑙𝑒𝑠`,
      `36 × 103 𝑗𝑜𝑢𝑙𝑒𝑠`,
      `103 𝑗𝑜𝑢𝑙𝑒𝑠`,
      `105 𝑗𝑜𝑢𝑙𝑒𝑠 117`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 105 𝑗𝑜𝑢𝑙𝑒𝑠 117`
  },
  {
    question: `A battery of 6 volts is connected to the terminals of a three metre long wire of uniform thickness and resistance of the order of 100Ω. The difference of potential between two points separated by 50 𝑐𝑚 on the wire will be`,
    options: [
      `1 𝑉`,
      `1.5 𝑉`,
      `2 𝑉`,
      `3 𝑉 117`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.5 𝑉`
  },
  {
    question: `Two resistances of 400 Ω and 800 Ω are connected in series with 6 𝑣𝑜𝑙𝑡 battery of negligible internal resistance. A voltmeter of resistance 10,000 Ω is used to measure the potential difference across 400 Ω. The error in the measurement of potential difference in 𝑣𝑜𝑙𝑡 approximately is`,
    options: [
      `0.01`,
      `0.02`,
      `0.03`,
      `0.05 117`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.03`
  },
  {
    question: `If potential 𝑉 = 100± 0.5 𝑉𝑜𝑙𝑡 and current 𝐼 = 10 ± 0.2 𝑎𝑚𝑝 are given to us, then what will be the value of resistance`,
    options: [
      `10 ± 0.7 𝑜ℎ𝑚`,
      `5 ± 2 𝑜ℎ𝑚`,
      `0.1 ± 0.2 𝑜ℎ𝑚`,
      `None of these 117`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 ± 0.7 𝑜ℎ𝑚`
  },
  {
    question: `An electric bulb rated for 500 W at 100V is used in a circuit having a 200 V supply. The resistance 𝑅 that must be put in series with the bulb, so that the bulb drawn 500 W is`,
    options: [
      `18Ω`,
      `20Ω`,
      `40Ω`,
      `700Ω 117`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 18Ω`
  },
  {
    question: `In the diagram shown, the reading of voltmeter is 20 𝑉 and that of ammeter is 4 𝐴. The value of 𝑅 should be (Consider given ammeter and voltmeter are not ideal)`,
    options: [
      `Equal to 5 Ω`,
      `Greater than 5 Ω`,
      `Less than 5 Ω`,
      `Greater or less than 5 Ω depending on the material of 𝑅 R 20V 4A V A II I III IV P a g e | 122 117`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Less than 5 Ω`
  },
  {
    question: `A current of 2 𝐴 flows in a system of conductors as shown. The potential difference (𝑉𝐴 − 𝑉𝐵) will be`,
    options: [
      `+2𝑉`,
      `+1𝑉`,
      `−1𝑉`,
      `−2𝑉 117`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) +1𝑉`
  },
  {
    question: `A bulb has specification of one kilowatt and 250 𝑣𝑜𝑙𝑡𝑠, the resistance of bulb is`,
    options: [
      `125 Ω`,
      `62.5 Ω`,
      `0.25 Ω`,
      `625 Ω 117`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 62.5 Ω`
  },
  {
    question: `The direction of current in an iron-copper thermocouple is`,
    options: [
      `From copper to iron at the hot junction`,
      `From iron to copper at the hot junction`,
      `From copper to iron at cold junction`,
      `No current will flow 118`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) From iron to copper at the hot junction`
  },
  {
    question: `In the circuit shown, the point ′𝐵′ is earthed. The potential at the point ′𝐴′ is`,
    options: [
      `14 𝑉`,
      `24 𝑉`,
      `26 𝑉`,
      `50 𝑉 118`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 50 𝑉 118`
  },
  {
    question: `If in the circuit, power dissipation is 150 𝑊, then 𝑅 is`,
    options: [
      `2 Ω`,
      `6 Ω`,
      `5 Ω`,
      `4 Ω 118`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 Ω`
  },
  {
    question: `In the circuit shown below, the cell has an e.m.f. of 10 𝑉 and internal resistance of 1 𝑜ℎ𝑚. The other resistances are shown in the figure. The potential difference 𝑉𝐴 − 𝑉𝐵 is`,
    options: [
      `6 𝑉`,
      `4 𝑉`,
      `2 𝑉`,
      `−2 𝑉 118 A Daniel cell is balanced on 125𝑐𝑚 length of a potentiometer wire. Now the cell is short-circuited by a 4 2 2 4 E=10V r=1 1 A B C 5 7 A B 10 3 50V E C D 1 Ω 4 Ω 2 Ω 2 Ω 2 Ω - + A A 4 V 2A 3 2 3 2 B A D C P a g e | 123 3 Ω 3 Ω`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2 𝑉`
  },
  {
    question: `resistance 2 𝑜ℎ𝑚 and the balance is obtained at 100 𝑐𝑚. The internal resistance of the Daniel cell is`,
    options: [
      `0.5 𝑜ℎ𝑚`,
      `1.5 𝑜ℎ𝑚`,
      `1.25 𝑜ℎ𝑚`,
      `4/5 𝑜ℎ𝑚 118`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.5 𝑜ℎ𝑚`
  },
  {
    question: `Charge 𝑄 is divided into two parts which are then kept some distance apart. The force between them will be maximum if the two parts are having the charge`,
    options: [
      `𝑄/2 each`,
      `𝑄/4 and 3𝑄/4`,
      `𝑄/3 and 2𝑄/3`,
      `𝑒 and (𝑄 − 𝑒),where 𝑒 =electronic charge 118`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝑄/2 each`
  },
  {
    question: `When 1 g hydrogen (ECE = 1.044× 10−8 kg C−1) forms water, 34 kcal heat is liberated. The minimum voltage required to decompose water is`,
    options: [
      `0.75 V`,
      `3 V`,
      `1.5 V`,
      `4.5 V 118`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1.5 V`
  },
  {
    question: `Three wires of copper, iron and nickel are joined to form three junctions as shown in Fig. When the temperature of junction 1 is kept 50℃ with the other two junctions at 0℃, the sensitive galvanometer gives a deflection of 14 divisions. When the temperature of junction 3 is kept 50℃, with the other two junctions at 0℃, the galvanometer gives a deflection of 11 divisions. Then the deflection given by the galvanometer, when temperature of the junction 2 is kept at 50℃, with the other two junctions at 0℃, will be`,
    options: [
      `3 𝑑𝑖𝑣`,
      `11 𝑑𝑖𝑣`,
      `14 𝑑𝑖𝑣`,
      `25 𝑑𝑖𝑣 119`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 11 𝑑𝑖𝑣`
  },
  {
    question: `In Seebeck series 𝑆𝑏 appears before 𝐵𝑖. In a 𝑆𝑏− 𝐵𝑖 thermocouple current flows from 3 Ω 3 Ω 3 Ω 3 Ω D F C A B Cu Cu Fe Ni 2 1 3 G V X <E V X E V X <E E V X i P vd P E P vd E D P a g e | 124 2Ω`,
    options: [
      `𝑆𝑏 to 𝐵𝑖 at the hot junction`,
      `𝑆𝑏 to 𝐵𝑖 at the cold junction`,
      `𝐵𝑖 to 𝑆𝑏 at the cold junction`,
      `None of the above 119`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) None of the above 119`
  },
  {
    question: `What is the ratio of heat generated in 𝑅 and 2𝑅`,
    options: [
      `2 :1`,
      `1 :2`,
      `4 :1`,
      `1 :4 119`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 :2`
  },
  {
    question: `Which of the following statement is correct`,
    options: [
      `Electric field is zero on the surface of current carrying wire`,
      `Electric field is non-zero on the axis of hollow current carrying wire`,
      `Surface integral of magnetic field for any closed surface is equal to 𝜇0 times of total algebraic sum of current which are crossing through the closed surface`,
      `None 119`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Surface integral of magnetic field for any closed surface is equal to 𝜇0 times of total algebraic sum of current which are crossing through the closed surface`
  },
  {
    question: `In the arrangement of resistance shown below, the effective resistance between points 𝐴 and 𝐵 is`,
    options: [
      `20 Ω`,
      `30 Ω`,
      `90 Ω`,
      `110 Ω 119`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20 Ω`
  },
  {
    question: `If 10 A deposits 10.8 g of silver in 25 min, how much copper would deposit when 9 A current flows for 20 min.?`,
    options: [
      `3.81 g`,
      `6.35 g`,
      `10.1 g`,
      `12.7 g 119`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 3.81 g`
  },
  {
    question: `The relation between Faraday constant (𝐹), chemical equivalent (𝐸) and electrochemical equivalent (𝑍) is`,
    options: [
      `𝐹 = 𝐸𝑍`,
      `𝐹 = 𝑍 𝐸`,
      `𝐹 = 𝐸 𝑍`,
      `𝐹 = 𝐸 𝑍2 119`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝐹 = 𝐸 𝑍`
  },
  {
    question: `Two resistances are joined in parallel whose resistance is 3/5Ω. One of the resistance wire is broken and the effective resistance become 3Ω.The resistance in ohm of the wire that got broken was`,
    options: [
      `4/3`,
      `2`,
      `6/5`,
      `3/4 119`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2`
  },
  {
    question: `A moving coil galvanometer has a resistance of 10Ω and full scale deflection of 0.01A. It can be converted into voltmeter of 10V full scale by connecting into resistance of`,
    options: [
      `9.90Ω is series`,
      `10Ω in series`,
      `990Ω in series`,
      `0.10Ω in series 119`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10Ω in series`
  },
  {
    question: `If a high power heater is connected to electric mains, then the bulbs in the house become dim, because there is a`,
    options: [
      `Current drop`,
      `Potential drop`,
      `No current drop`,
      `No potential drop 120`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Potential drop`
  },
  {
    question: `A certain charge liberates 0.8 𝑔𝑚 of 𝑂2. The same charge will liberate how many 𝑔𝑚 of silver`,
    options: [
      `108 𝑔𝑚`,
      `10.8 𝑔𝑚`,
      `0.8 𝑔𝑚`,
      `108 0.8 𝑔𝑚 120`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 108 0.8 𝑔𝑚 120`
  },
  {
    question: `A student measures the terminal potential difference (𝑉) of a cell (of 𝑒𝑚𝑓 𝐸 and internal resistance 𝑟) as a function of the current (𝐼) flowing through it. The slope, and intercept, of the graph between 𝑉 and 𝐼, then, respectively, equal`,
    options: [
      `𝐸 and – 𝑟`,
      `−𝑟 and 𝐸`,
      `𝑟 and – 𝐸`,
      `−𝐸 and 𝑟 120 The charge on the capacitor of capacitance 𝐶 shown in the figure below will be 10 10 10 5 15 10 20 30 B A P Q P a g e | 125`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) −𝑟 and 𝐸`
  },
  {
    question: `A meter bridge is used to determine the resistance of an unknown wire by measuring the balance point length 𝑙. If the wire is replaced by another wire of same material but with double the length and half the thickness, the balancing point is expected to be`,
    options: [
      `1 8𝑙`,
      `1 4𝑙`,
      `8𝑙`,
      `16𝑙 120`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1 8𝑙`
  },
  {
    question: `The equivalent resistance between the terminals 𝐴 and 𝐵 in the following circuit is`,
    options: [
      `10 Ω`,
      `20 Ω`,
      `5 Ω`,
      `30 Ω 120`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10 Ω`
  },
  {
    question: `A block has dimensions 1 𝑐𝑚, 2 𝑐𝑚, 3 𝑐𝑚. Ratio of the maximum resistance to minimum resistance between any point of opposite faces of this block is`,
    options: [
      `9 : 1`,
      `1 : 9`,
      `18 : 1`,
      `1 : 6 120`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 18 : 1`
  },
  {
    question: `Two rods of same material and length have their electric resistances in ratio 1 : 2. When both rods are dipped in water, the correct statement will be`,
    options: [
      `𝐴 has more loss of weight`,
      `𝐵 has more loss of weight`,
      `Both have same loss of weight`,
      `Loss of weight will be in the ratio 1 : 2 120`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐵 has more loss of weight`
  },
  {
    question: `Three resistances each of 1 𝑜ℎ𝑚, are joined in parallel. Three such combinations are put in series, then the resultant resistance will be`,
    options: [
      `9 𝑜ℎ𝑚`,
      `3 𝑜ℎ𝑚`,
      `1 𝑜ℎ𝑚`,
      `1 3 𝑜ℎ𝑚 120`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 𝑜ℎ𝑚`
  },
  {
    question: `As the temperature of hot junction of a thermo-couple is increased (while cold junction is at constant temperature), the thermo 𝑒.m.f`,
    options: [
      `Increases uniformly at constant rate`,
      `Increases slowly in the beginning and more rapidly at higher temperatures`,
      `Increases more rapidly in the beginning but less rapidly at higher temperatures`,
      `Is minimum at neutral temperature 121`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Increases slowly in the beginning and more rapidly at higher temperatures`
  },
  {
    question: `A moving coil galvanometer is converted into an ammeter reading upto 0.03 𝐴 by connecting a shunt of resistance 4𝑟 across it and into an ammeter reading upto 0.06 𝐴 when a shunt of resistance 𝑟 is connected across it. What is the maximum current which can be sent through this galvanometer if no shunt is used`,
    options: [
      `0.01 𝐴`,
      `0.02 𝐴`,
      `0.03 𝐴`,
      `0.04 𝐴 121`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 0.04 𝐴 121`
  },
  {
    question: `In a Wheatstone’s bridge all the four arms have equal resistance 𝑅. If the resistance of the galvanometer arm is also 𝑅, the equivalent resistance of the combination as seen by the battery is 10Ω 10 Ω A C D B 5 Ω 5 Ω 10 Ω C I R 2 R 1 E 10 Ω 5 Ω 5 Ω P a g e | 126`,
    options: [
      `𝑅/2`,
      `𝑅`,
      `2 𝑅`,
      `𝑅/4 121`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅`
  },
  {
    question: `A torch bulb rated at 4.5 W, 1.5 V is connected as shown in figure. The emf of the cell needed to make the bulb glow at full intensity if`,
    options: [
      `4.5 V`,
      `1.5 V`,
      `2.67 V`,
      `13.5 V 121`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 2.67 V`
  },
  {
    question: `A 60 𝑤𝑎𝑡𝑡 bulb operates on 220𝑉 supply. The current flowing through the bulb is`,
    options: [
      `11/3 𝑎𝑚𝑝`,
      `3/11 𝑎𝑚𝑝`,
      `3 𝑎𝑚𝑝`,
      `6 𝑎𝑚𝑝 121`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 11/3 𝑎𝑚𝑝`
  },
  {
    question: `A battery of 𝑒𝑚𝑓 E produces currents 𝐼1 and 𝐼2 when connected to external resistances 𝑅1 and 𝑅2 respectively. The internal resistance of the battery is`,
    options: [
      `𝐼1𝑅2 − 𝐼2𝑅1 𝐼2 − 𝐼1`,
      `𝐼1𝑅2 + 𝐼2𝑅1 𝐼1 − 𝐼2`,
      `𝐼1𝑅1 + 𝐼2𝑅2 𝐼1 − 𝐼2`,
      `𝐼1𝑅1 − 𝐼2𝑅2 𝐼2 − 𝐼1 121`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐼1𝑅2 − 𝐼2𝑅1 𝐼2 − 𝐼1`
  },
  {
    question: `The potential difference between 𝐴 and 𝐵 in the following figure is`,
    options: [
      `24 𝑉`,
      `14 𝑉`,
      `32 𝑉`,
      `48 𝑉 121`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 32 𝑉`
  },
  {
    question: `The value of 𝑖1 in the circuit diagram will be`,
    options: [
      `1A`,
      `1 2 A`,
      `3 4 A`,
      `3 2 A 121`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 2 A`
  },
  {
    question: `In the circuit shown here, 𝐸1 = 𝐸2 = 𝐸3 = 2𝑉 and 𝑅1 = 𝑅2 = 4 𝑜ℎ𝑚. The current flowing between points 𝐴 and 𝐵 through battery 𝐸2 is`,
    options: [
      `Zero`,
      `2 𝑎𝑚𝑝 from 𝐴 to 𝐵`,
      `2 𝑎𝑚𝑝 from 𝐵 to 𝐴`,
      `None of the above 121`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 𝑎𝑚𝑝 from 𝐴 to 𝐵`
  },
  {
    question: `A battery of 𝑒𝑚𝑓 10 𝑉 and internal resistance 3Ω is connected to a resistor as shown in the figure. If the current in the circuit is 0.5 𝐴, then the resistance of the resistor will be`,
    options: [
      `19 Ω`,
      `17 Ω`,
      `10 Ω`,
      `12 Ω 122 The equivalent resistance between 𝐴 and 𝐵 in the given circuit is R R1 R2 B A E1 E3 E2 5 Ω 2 Ω 5 Ω 2 Ω 2 Ω 2 Ω 4 Ω 4 Ω i C A B D 8 V i 1 i E P a g e | 127`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 17 Ω`
  },
  {
    question: `The material of fuse wire should have`,
    options: [
      `A high specific resistance and high melting point`,
      `A low specific resistance and low melting point`,
      `A high specific resistance and low melting point`,
      `A low specific resistance and a high melting point 122`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) A low specific resistance and a high melting point 122`
  },
  {
    question: `Resistance of a voltameter is 2Ω, it is connected in series to a battery of 10 𝑉 through a resistance of 3Ω. In a certain time mass deposited on cathode is 1𝑔. Now the voltameter and the 3Ω resistance are connected in parallel with the battery. Increase in the deposited mass on cathode in the same time will be`,
    options: [
      `0`,
      `1.5 𝑔`,
      `2.5 𝑔`,
      `2 𝑔 122`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.5 𝑔`
  },
  {
    question: `The length of a wire of a potentiometer is 100cm, and the emf of its stand and cell is E volt. It is employed to measure the emf of a battery whose internal resistance is 0.5Ω. If the balance point is obtained at 𝑙 = 30cm from the positive end, the emf of the battery is`,
    options: [
      `30𝐸 100.5`,
      `30𝐸 100− 0.5`,
      `30(𝐸 − 0.5𝑖) 100 , Where 𝑖 is the current in the potentiometer wire.`,
      `30𝐸 100 122`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 30(𝐸 − 0.5𝑖) 100 , Where 𝑖 is the current in the potentiometer wire.`
  },
  {
    question: `Resistance of tungsten wire at 150℃ is 133Ω. Its resistance temperature coefficient is 0.0045/℃. The resistance of this wire at 500℃ will be`,
    options: [
      `180Ω`,
      `225Ω`,
      `258Ω`,
      `317Ω 122`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 180Ω`
  },
  {
    question: `A capacitor is connected to a cell of emf 𝐸 having some internal resistane 𝑟. The potential difference across the`,
    options: [
      `Cell is < 𝐸`,
      `Cell is 𝐸`,
      `Capacitor is > 𝐸`,
      `Capacitor is < 𝐸 122`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Cell is 𝐸`
  },
  {
    question: `A wire of resistance 5.5 ohm is drawn out uniformly so that its length is increased twice. Then its new resistance is`,
    options: [
      `44Ω`,
      `42Ω`,
      `40Ω`,
      `22Ω 122`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 42Ω`
  },
  {
    question: `Silver and copper voltameters are connected in parallel with a battery of emf 12 V. In 30 min 1 g of silver and 1.8 g of copper are liberated. The energy supplied by the battery is`,
    options: [
      `720 J`,
      `2.41 J`,
      `24.12 J`,
      `4.34 × 104 J 123`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2.41 J`
  },
  {
    question: `An ammeter gives full scale deflection when a current of 2A flows through it. The resistance of ammeter is 12 Ω. If the same ammeter is to be used for measuring a maximum current of 5A, then ammeter must be connected with a resistance of`,
    options: [
      `18 Ωin parallel`,
      `8 Ωin parallel`,
      `18 Ω in series`,
      `8 Ω in series 123`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 8 Ω in series 123`
  },
  {
    question: `A conductor with rectangular cross-section has dimensions (𝑎 × 2𝑎 × 4𝑎) as shown in figure. Resistance across 𝐴𝐵 is 𝑅1, across 𝐶𝐷 is 𝑅2 and across 𝐸𝐹 is 𝑅3.Then`,
    options: [
      `𝑅1 = 𝑅2 = 𝑅3`,
      `𝑅1 > 𝑅2 > 𝑅3`,
      `𝑅2 > 𝑅3 > 𝑅1`,
      `𝑅1 > 𝑅3 > 𝑅2 123`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑅1 > 𝑅2 > 𝑅3`
  },
  {
    question: `The current flowing in a coil of resistance 90 Ω is to be reduced by 90%. What value of resistance should be connected in parallel with it`,
    options: [
      `9 Ω`,
      `90 Ω`,
      `1000 Ω`,
      `10 Ω 123`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1000 Ω`
  },
  {
    question: `In the absence of applied potential, the electric current flowing through a metallic wire is zero because`,
    options: [
      `The electrons remain stationary`,
      `The electrons are drifted in random direction with a speed of the order of 10−2 cm s−1`,
      `The electrons move in random direction with a speed of the order close to that of velocity of light`,
      `Electrons and ions move in opposite direction 123`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The electrons remain stationary`
  },
  {
    question: `The resistors 𝑃, 𝑄 and 𝑅 in the circuit have equal resistance. The battery, of negligible internal resistance, supplies a total power of 12 W. What is the power dissipated by heating in resistor 𝑅?`,
    options: [
      `2 W`,
      `4 W`,
      `3 W`,
      `6 W 123`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 2 W`
  },
  {
    question: `The temperature coefficient of resistance of a wire is 0.00125 K−1. At 300K, its resistance is 1Ω. The resistance of the wire will be 2Ω at`,
    options: [
      `1154 K`,
      `1100 K`,
      `1400 K`,
      `1127 K 123 The resistance of a heater coil is 110 𝑜ℎ𝑚. A resistance 𝑅 is connected in parallel with it and the R Q P P a g e | 129`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1400 K`
  },
  {
    question: `combination is joined in series with a resistance of 11 𝑜ℎ𝑚 to a 220 𝑣𝑜𝑙𝑡 main line. The heater operates with a power of 110 𝑤𝑎𝑡𝑡. The value of 𝑅 in 𝑜ℎ𝑚 is`,
    options: [
      `12.22`,
      `24.42`,
      `Negative`,
      `That the given values are not correct 123`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 24.42`
  },
  {
    question: `The resistance of a wire at room temperature 36℃ is found to be 10Ω. Now to increase the resistance by 10%, the temperature of the wire must be [The temperature coefficient of resistance of the material of the wire is 0.002 per ℃]`,
    options: [
      `36℃`,
      `83℃`,
      `63℃`,
      `33℃ 123`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 83℃`
  },
  {
    question: `A current of 2 𝐴 passing through conductor produces 80 𝐽 of heat in 10 𝑠𝑒𝑐𝑜𝑛𝑑𝑠. The resistance of the conductor is`,
    options: [
      `0.5 Ω`,
      `2 Ω`,
      `4 Ω`,
      `20 Ω 124`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2 Ω`
  },
  {
    question: `A primary cell has an e. m. f. of 1.5 volt, when short-circuited it gives a current of 3 ampere. The internal resistance of the cell is`,
    options: [
      `4.5 𝑜ℎ𝑚`,
      `2 𝑜ℎ𝑚`,
      `0.5 𝑜ℎ𝑚`,
      `1/4.5 𝑜ℎ𝑚 124`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1/4.5 𝑜ℎ𝑚 124`
  },
  {
    question: `The heating coils rated at 220 𝑣𝑜𝑙𝑡 and producing 50 𝑐𝑎𝑙/𝑠𝑒𝑐 heat are available with the resistance 55 Ω, 110 Ω, 220 Ω and 440 Ω. The heater of maximum power will be of`,
    options: [
      `440 Ω`,
      `220 Ω`,
      `110 Ω`,
      `55 Ω 124`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 220 Ω`
  },
  {
    question: `Five equal resistors when connected in series dissipated 5 W power. If they are connected in parallel, the power dissipated will be`,
    options: [
      `25 W`,
      `50 W`,
      `100 W`,
      `125 W 124`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 25 W`
  },
  {
    question: `On passing 96500 𝑐𝑜𝑢𝑙𝑜𝑚𝑏 of charge through a solution 𝐶𝑢𝑆𝑂4 the amount of copper liberated is`,
    options: [
      `64 𝑔𝑚`,
      `32 𝑔𝑚`,
      `32 𝑘𝑔`,
      `64 𝑘𝑔 124`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 64 𝑔𝑚`
  },
  {
    question: `In a neon discharge tube 2.9 × 1018𝑁𝑒+ ions move to the right each 𝑠𝑒𝑐𝑜𝑛𝑑 while 1.2 × 1018 electrons move to the left per 𝑠𝑒𝑐𝑜𝑛𝑑. Electron charge is 1.6 × 10−19𝐶. The current in the discharge tube`,
    options: [
      `1 𝐴 towards right`,
      `0.66 𝐴 towards right`,
      `0.66 𝐴 towards left`,
      `Zero 124`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.66 𝐴 towards left`
  },
  {
    question: `For a metallic wire, the ratio 𝑉 𝑖 (𝑉 =applied potential difference and 𝑖=current flowing ) is`,
    options: [
      `Independent of temperature`,
      `Increases as the temperature rises`,
      `Decreases as the temperature rises`,
      `Increases or decreases as temperature rises depending upon the metal 124`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Increases as the temperature rises`
  },
  {
    question: `The resistance of the series combination of two resistance is S. When they are joined in parallel, the total resistance is P. If 𝑆 = 𝑛𝑃, then the minimum possible value of 𝑛 is`,
    options: [
      `4`,
      `3`,
      `2`,
      `1 124`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3`
  },
  {
    question: `In a wire of circular cross-section with radius 𝑟, free electrons travel with a drift velocity 𝑉 when a current 𝐼 flows through the wire. What is the current in another wire of half the radius and of the same material when the drift velocity is 2𝑉`,
    options: [
      `2𝐼`,
      `𝐼`,
      `𝐼/2`,
      `𝐼/4 125 Two electric bulbs, one of 200 𝑣𝑜𝑙𝑡 40 𝑤𝑎𝑡𝑡 and the other 200 𝑣𝑜𝑙𝑡 100 𝑤𝑎𝑡𝑡 are connected in a house d dE  d dE  d dE  d dE  P a g e | 130`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐼`
  },
  {
    question: `In which of the following substances does resistance decrease with increase in temperature?`,
    options: [
      `Copper`,
      `Carbon`,
      `Constantan`,
      `Silver 125`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Silver 125`
  },
  {
    question: `Thirteen resistances each of resistance RΩ are connected in the circuit as shown in the figure. The effective resistance between points A and B is`,
    options: [
      `4𝑅 3 Ω`,
      `2RΩ`,
      `RΩ`,
      `2 3 𝑅Ω 125`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 2RΩ`
  },
  {
    question: `The resistance of a 10 m long wire is 10 Ω. Its length is increased by 25% by stretching the wire uniformly. The resistance of wire will change to (approximately)`,
    options: [
      `12.5 Ω`,
      `14.5 Ω`,
      `15.6 Ω`,
      `16.6 Ω 125`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15.6 Ω`
  },
  {
    question: `The masses of the three wires of copper are in the ratio 5 : 3 : 1 and their lengths are in the ratio 1 : 3 : 5 the ratio of their electrical resistance is`,
    options: [
      `5 : 3 : 1`,
      `√125 ∶ 15 ∶ 1`,
      `1 : 15 : 125`,
      `1 : 3 : 5 125`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 5 : 3 : 1`
  },
  {
    question: `A milliammeter of range 0-30mA has internal resistance of 20 Ω. The resistance to be connected in series to convert it into a voltmeter of maximum reading 3V is`,
    options: [
      `49 Ω`,
      `80 Ω`,
      `40 Ω`,
      `30 Ω 125`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 49 Ω`
  },
  {
    question: `Given figure shows a rectangular block with dimensions 𝑥, 2𝑥 and 4𝑥. Electrical contacts can be made to the block between opposite pairs of faces (for example, between the faces labelled 𝐴 − 𝐴, 𝐵 − 𝐵 and 𝐶 − 𝐶). Between which two faces would the maximum electrical resistance be obtained (𝐴− 𝐴 : Top and bottom faces, 𝐵 − 𝐵 : Left and right faces, 𝐶 − 𝐶 : Front and rear faces)`,
    options: [
      `𝐴 − 𝐴`,
      `𝐵 − 𝐵`,
      `𝐶 − 𝐶`,
      `Same for all three pairs 125`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝐶 − 𝐶`
  },
  {
    question: `Resistance as shown in figure is negative at A R R R R R R R R R R R R R P a g e | 131`,
    options: [
      `𝐴`,
      `𝐵`,
      `𝐶`,
      `None of these 125`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐵`
  },
  {
    question: `In the circuit shown in the figure, the current through`,
    options: [
      `The 3Ω resistor is 0.50 𝐴`,
      `The 3Ω resistor is 0.25 𝐴`,
      `The 4Ω resistor is 0.50 𝐴`,
      `The 4Ω resistor is 0.25 𝐴 125`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The 3Ω resistor is 0.25 𝐴`
  },
  {
    question: `The potential gradient along the length of a uniform wire is 10 𝑣𝑜𝑙𝑡/𝑚𝑒𝑡𝑟𝑒. 𝐵 and 𝐶 are the two points at 30 𝑐𝑚 and 60 𝑐𝑚 point on a meter scale fitted along the wire. The potential difference between 𝐵 and 𝐶 will be`,
    options: [
      `3 𝑣𝑜𝑙𝑡`,
      `0.4 𝑣𝑜𝑙𝑡`,
      `7 𝑣𝑜𝑙𝑡`,
      `4 𝑣𝑜𝑙𝑡 126`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.4 𝑣𝑜𝑙𝑡`
  },
  {
    question: `Two wires of the same material but of different diameters carry the same current 𝑖. If ratio of their diameters is 1:2, then the corresponding ratio of their mean drift velocities will be`,
    options: [
      `4: 1`,
      `1: 1`,
      `1: 2`,
      `1: 4 126`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 1: 4 126`
  },
  {
    question: `How much work is required to carry a 6 𝜇𝐶 charge from the negative terminal to the positive terminal of a 9 𝑉 battery`,
    options: [
      `54 × 10−3𝐽`,
      `54 × 10−6𝐽`,
      `54 × 10−9𝐽`,
      `54 × 10−12𝐽 126`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 54 × 10−6𝐽`
  },
  {
    question: `An electric bulb rated 220 V, 100 W is connected in series with another bulb rated 220 V, 60 W. If the voltage across the combination is 220 V, the power consumed by the 100 W bulb will be about`,
    options: [
      `25 W`,
      `14 W`,
      `60 W`,
      `100 W 126`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 60 W`
  },
  {
    question: `When a current of 1 ampere is passed through a conductor whose ends are maintained at temperature difference of 1℃, the amount of heat evolved or absorbed is called`,
    options: [
      `Peltier coefficient`,
      `Thomson coefficient`,
      `Thermoelectric power`,
      `Thermo 𝑒.m.f. 126`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Peltier coefficient`
  },
  {
    question: `In the figure given below, the current passing through 6Ω resistor is`,
    options: [
      `0.40 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `0.48 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `0.72 𝑎𝑚𝑝𝑒𝑟𝑒`,
      `0.80 𝑎𝑚𝑝𝑒𝑟𝑒 126`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 0.40 𝑎𝑚𝑝𝑒𝑟𝑒`
  },
  {
    question: `For a given temperature difference which of the following pairs will generate maximum thermo-emf?`,
    options: [
      `Lead-nickel`,
      `Copper-iron`,
      `Gold-silver`,
      `Antimony-bismuth 126`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Gold-silver`
  },
  {
    question: `The resistance of ideal voltmeter is 1.2 A 6 4 9 V 8Ω 8Ω 2Ω 3Ω 2Ω 2Ω 2Ω 2Ω 4Ω B C A I V P a g e | 132`,
    options: [
      `Zero`,
      `Greater than zero but finite value`,
      `Infinite`,
      `5000 Ω 126`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Greater than zero but finite value`
  },
  {
    question: `A 100 𝑤𝑎𝑡𝑡 bulb working on 200 𝑣𝑜𝑙𝑡 and a 200 𝑤𝑎𝑡𝑡 bulb working on 100 𝑣𝑜𝑙𝑡 have`,
    options: [
      `Resistances in the ratio of 4 :1`,
      `Maximum current ratings in the ratio of 1 :4`,
      `Resistances in the ratio of 2 :1`,
      `Maximum current ratings in the ratio of 1 :2 126`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Maximum current ratings in the ratio of 1 :4`
  },
  {
    question: `The graph between resistivity and temperature, for a limited range of temperatures, is a straight line for a material like`,
    options: [
      `Copper`,
      `Nichrome`,
      `Silicon`,
      `Mercury 127`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Nichrome`
  },
  {
    question: `A metallic block has no potential difference applied across it, then the mean velocity of free electrons at absolute temperature 𝑇 is`,
    options: [
      `Proportional to 𝑇`,
      `Proportional to √𝑇`,
      `Zero`,
      `Finite but independent of 𝑇 127`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) Finite but independent of 𝑇 127`
  },
  {
    question: `An ammeter reads 0.90 A when connected in series with a silver voltmeter that deposits 2.60 g of silver in 40 min. By what percentage is the ammeter reading is correct? Atomic weight of silver = 108 and 1 F=96500 C?`,
    options: [
      `5%`,
      `7%`,
      `-5%`,
      `-7% 127`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 7%`
  },
  {
    question: `A thermo-𝑒mf 𝑉 appears across a conductor maintained at a temperature difference 𝑇. The thomson coefficient is then given by`,
    options: [
      `−𝑇2 𝑑2𝑉 𝑑𝑇2`,
      `𝑇2 𝑑𝑉 𝑑𝑇`,
      `−𝑇𝑑2𝑉 𝑑𝑇2`,
      `− 1 𝑇2 𝑑𝑉 𝑑𝑇 127`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) −𝑇𝑑2𝑉 𝑑𝑇2`
  },
  {
    question: `The amount of heat generated in 500Ω resistance, when the key is thrown over from contact 1 to 2, as shown in figure is`,
    options: [
      `10℃`,
      `7.5℃`,
      `5.0℃`,
      `2.5℃ 127`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 10℃`
  },
  {
    question: `A circuit consists of five identical conductors as shown in figure. The two similar conductors are added as indicated by the dotted lines. The ratio of resistances before and after addition will be`,
    options: [
      `7/5`,
      `3/5`,
      `5/3`,
      `6/5 127`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 7/5`
  },
  {
    question: `Two bulbs 𝑋 and 𝑌 having same voltage rating and of power 40 W and 60 W respectively are connected in series across a potential difference of 300 V, then`,
    options: [
      `𝑋 will glow brighter`,
      `Resistance of 𝑌 will be greater than 𝑋 500 Ω 330 Ω 2 E = 200 V 1 F 5 P a g e | 133`,
      `Heat produced in 𝑌 will be greater than 𝑋`,
      `Voltage drop in 𝑋 will be greater than 𝑌 127`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Heat produced in 𝑌 will be greater than 𝑋`
  },
  {
    question: `Two voltameters, one of copper and another of silver, are joined in paralleled. When a total charge 𝑞 flows through the voltameters, equal amount of metals are deposited. If the electrochemical equivalents of copper and silver are 𝑧1 and 𝑧2 respectively, the charge which flows through the silver voltameter is`,
    options: [
      `𝑞 1 + 𝑧1 𝑧2`,
      `𝑞 1 + 𝑧2 𝑧1`,
      `𝑞𝑧1 𝑧2`,
      `𝑞 𝑧2/𝑧1 127`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑞 1 + 𝑧2 𝑧1`
  },
  {
    question: `In the circuit shown 𝑃 ≠ 𝑅, the reading of the galvanometer is same with switch 𝑆 open or closed. Then`,
    options: [
      `𝐼𝑅 = 𝐼𝐺`,
      `𝐼𝑃 = 𝐼𝐺`,
      `𝐼𝑄 = 𝐼𝐺`,
      `𝐼𝑄 = 𝐼𝑅 127`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝐼𝑃 = 𝐼𝐺`
  },
  {
    question: `The density of copper is 9 × 103 kg/m3and its atomic mass is 63.5 u. Each copper atom provides one free electron. Estimate the number of free electrons per cubic metre in copper.`,
    options: [
      `1019`,
      `1023`,
      `1025`,
      `1029 128`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1023`
  },
  {
    question: `A galvanometer can be converted into a voltmeter by connecting`,
    options: [
      `Low residence in parallel`,
      `Low residence in series`,
      `High residence in parallel`,
      `High residence in series 128`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) High residence in series 128`
  },
  {
    question: `By mistake a voltmeter is connected in series and an ammeter is connected in parallel with a resistance in an electrical circuit. What will happen to the instrument?`,
    options: [
      `Voltmeter is damaged`,
      `Ammeter is damaged`,
      `Both are damaged`,
      `None is damaged 128`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Ammeter is damaged`
  },
  {
    question: `In a thermocouple, the neutral temperature is 270℃ and the temperature of inversion is 525℃. The temperature of cold junction would be`,
    options: [
      `30℃`,
      `255℃`,
      `15℃`,
      `25℃ 128`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 15℃`
  },
  {
    question: `Two electric lamps of 40 watt each are connected in parallel. The power consumed by the combination will be`,
    options: [
      `20 𝑤𝑎𝑡𝑡`,
      `60 𝑤𝑎𝑡𝑡`,
      `80 𝑤𝑎𝑡𝑡`,
      `100 𝑤𝑎𝑡𝑡 128`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 20 𝑤𝑎𝑡𝑡`
  },
  {
    question: `Consider the following two statements 𝐴 and 𝐵, and identify the correct choice out of given answers A. Thermo 𝑒.m.f. is minimum at neutral temperature of a thermocouple B. When two junctions made of two different metallic wires are maintained at different temperatures, an electric current is generated in the circuit`,
    options: [
      `𝐴 is false and 𝐵 is true`,
      `𝐴 is true and 𝐵 is false`,
      `Both 𝐴 and 𝐵 are false`,
      `Both 𝐴 and 𝐵 are true 128`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝐴 is false and 𝐵 is true`
  },
  {
    question: `Variation of current passing through a conductor as the voltage applied across its ends is varied as shown in the adjoining diagram. If the resistance (𝑅) is determined at the points 𝐴, 𝐵, 𝐶 and 𝐷, we will find that P a g e | 134`,
    options: [
      `𝑅𝐶 = 𝑅𝐷`,
      `𝑅𝐵 > 𝑅𝐴`,
      `𝑅𝐶 > 𝑅𝐵`,
      `None of these 128`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅𝐶 > 𝑅𝐵`
  },
  {
    question: `There resistances of 4 Ω each are connected as shown in figure. If the point D divides the resistance into two equal halves, the resistance between points A and D will be`,
    options: [
      `12 Ω`,
      `6 Ω`,
      `3 Ω`,
      `1 3 Ω 128`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 6 Ω`
  },
  {
    question: `A copper wire of cross-sectional area 2.0 mm2, resistivity =1.7× 10−8Ωm, carries a current of 1A. The electric field in the copper wire is`,
    options: [
      `8.5 × 10−5Vm−1`,
      `8.5 × 10−4Vm−1`,
      `8.5 × 10−3Vm−1`,
      `8.5 × 10−2Vm−1 128`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 8.5 × 10−4Vm−1`
  },
  {
    question: `The thermo-emf of a thermocouple varies with the temperature θ of the hot junction as 𝐸 = 𝑎θ + 𝑏θ2 in volts where the ratio 𝑎/𝑏 is 700℃. If the cold junction is kept at 0℃, then the neutral temperature is`,
    options: [
      `700℃.`,
      `350℃.`,
      `1400℃.`,
      `No neutral temperature is possible for this thermocouple 129`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 350℃.`
  },
  {
    question: `Two resistances are connected in two gaps of a meter bridge. The balance point is 20cm from the zero end. A resistance of 15Ω is connected is series with the smaller of the two. The null point shifts to 40cm. The value of the smaller resistance in ohm is`,
    options: [
      `3`,
      `6`,
      `9`,
      `12 129`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 12 129`
  },
  {
    question: `Two batteries, one of emf 18 𝑣𝑜𝑙𝑡 and internal resistance 2Ω and the other of emf 12 𝑣𝑜𝑙𝑡 and internal resistance 1Ω, are connected as shown. The voltmeter 𝑉 will record a reading of`,
    options: [
      `15 𝑣𝑜𝑙𝑡`,
      `30 𝑣𝑜𝑙𝑡`,
      `14 𝑣𝑜𝑙𝑡`,
      `18 𝑣𝑜𝑙𝑡 129`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 30 𝑣𝑜𝑙𝑡`
  },
  {
    question: `The drift velocity does not depend upon`,
    options: [
      `Cross-section of the wire`,
      `Length of the wire`,
      `Number of free electrons`,
      `Magnitude of the current 129`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Number of free electrons`
  },
  {
    question: `The 𝑒𝑚𝑓 of a thermocouple, one junction of which is kept at 0℃, is given by 𝑒 = 𝑎𝑡+ 𝑏𝑡2. The Peltier co- efficient will be`,
    options: [
      `(𝑡 + 273)(𝑎 + 2𝑏𝑡)`,
      `(𝑡 + 273)(𝑎 − 2𝑏𝑡)`,
      `(𝑡 − 273)(𝑎 − 2𝑏𝑡)`,
      `(𝑡 − 273)(𝑎 + 2𝑏𝑡) 129`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) (𝑡 + 273)(𝑎 + 2𝑏𝑡)`
  },
  {
    question: `For electroplating a spoon, it is placed in the voltmeter at`,
    options: [
      `The position of anode`,
      `The position of cathode V 2 18V 1 12V 4Ω 4Ω B C D 4Ω A P a g e | 135`,
      `Exactly in the middle of anode and the cathode`,
      `Anywhere in the electrolyte 129`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) The position of anode`
  },
  {
    question: `Two resistors of 6 Ω and 9Ω are connected in series to a 120 𝑣𝑜𝑙𝑡 source. The power consumed by the 6 Ω resistor is`,
    options: [
      `384 𝑊`,
      `576 𝑊`,
      `1500 𝑊`,
      `1200 𝑊 129`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 1500 𝑊`
  },
  {
    question: `The 𝑉 − 𝑖 graph for a conductor at temperatures 𝑇1 and 𝑇2 are as shown in the figure. (𝑇2 − 𝑇1) is proportional to`,
    options: [
      `cos2𝜃`,
      `sin𝜃`,
      `cot2𝜃`,
      `tan𝜃 129`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) sin𝜃`
  },
  {
    question: `For a thermocouple, the inversion temperature is 600℃ and the neutral temperature is 320℃. Find the temperature of the cold junction?`,
    options: [
      `40℃`,
      `20℃`,
      `80℃`,
      `60℃ 129`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20℃`
  },
  {
    question: `A 100 W bulb 𝐵1 and two 60 W bulbs 𝐵2 and 𝐵3 are connected to a 250 V source as shown in figure. Now 𝑊1, 𝑊2 and 𝑊3 are the output powers of the bulbs 𝐵1, 𝐵2 and 𝐵3respectively, then`,
    options: [
      `𝑊1 > 𝑊2 = 𝑊3`,
      `𝑊1 > 𝑊2 > 𝑊3`,
      `𝑊1 < 𝑊2 = 𝑊3`,
      `𝑊1 < 𝑊2 < 𝑊3 130`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 𝑊1 > 𝑊2 > 𝑊3`
  },
  {
    question: `The 𝑉 − 𝑖 graph for a conductor makes an angle 𝜃 with 𝑉-axis. Here 𝑉 denotes the voltage and 𝑖 denotes current. The resistance of conductor is given by`,
    options: [
      `sin𝜃`,
      `cos𝜃`,
      `tan𝜃`,
      `cot𝜃 130`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) cot𝜃 130`
  },
  {
    question: `If a wire is stretched to make it 0.1% longer, its resistance will`,
    options: [
      `Increase by 0.2%`,
      `Decrease by 0.2%`,
      `Decrease 0.05%`,
      `Increase by 0.05% 130`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Decrease by 0.2%`
  },
  {
    question: `Two filaments of same length are connected first in series and then in parallel. For the same amount of main current flowing the ratio of the heat produced is`,
    options: [
      `2 : 1`,
      `1 : 2`,
      `4 : 1`,
      `1 : 4 130`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 4 : 1`
  },
  {
    question: `Water boils in an electric kettle in 15 𝑚𝑖𝑛𝑢𝑡𝑒𝑠 after switching on. If the length of the heating wire is decreased to 2/3 of its initial value, then the same amount of water will boil with the same supply voltage in`,
    options: [
      `15 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `12 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `10 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`,
      `8 𝑚𝑖𝑛𝑢𝑡𝑒𝑠 130`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 15 𝑚𝑖𝑛𝑢𝑡𝑒𝑠`
  },
  {
    question: `Antimony and bismuth are usually used in a thermocouple, because`,
    options: [
      `Negative thermal 𝑒.m.f. is produced`,
      `Constant thermal 𝑒.m.f. is produced`,
      `Lower thermal 𝑒.m.f. is produced`,
      `Higher thermal 𝑒.m.f. is produced 130`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Negative thermal 𝑒.m.f. is produced`
  },
  {
    question: `Specific resistance of copper, constantan and silver are 1.78 × 10−8, 39.1 × 10−8 and 10−8 Ω-m respectively. Which of these is the best conductor of heat and electricity?`,
    options: [
      `Copper`,
      `Constantan`,
      `Silver`,
      `All of them 130`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) Silver`
  },
  {
    question: `Two bars of radius 𝑟 and 2𝑟 are kept in contact as shown. An electric current 𝐼 is passed through the bars. Which one of following is correct? V T2 i   T1 P a g e | 136`,
    options: [
      `Heat produced in bar 𝐵𝐶 is 4 times the heat produced in bar 𝐴𝐵`,
      `Electric field in both halves is equal`,
      `Current density across 𝐴𝐵 is double that of across 𝐵𝐶`,
      `Potential difference across 𝐴𝐵 is 4 times that of across 𝐵𝐶 130`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Electric field in both halves is equal`
  },
  {
    question: `In producing chlorine through electrolysis 100 𝑤𝑎𝑡𝑡 power at 125 𝑉 is being consumed. How much chlorine per minute is liberated? E.C.E. chlorine is 0.367× 10−6𝑘𝑔/𝑐𝑜𝑢𝑙𝑜𝑚𝑏`,
    options: [
      `24.3 𝑚𝑔`,
      `16.6 𝑚𝑔`,
      `17.6 𝑚𝑔`,
      `21.3 𝑚𝑔 130`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 16.6 𝑚𝑔`
  },
  {
    question: `The amount of heat produced in a resistor when a current is passed through it can be found using`,
    options: [
      `Faraday’s Law`,
      `Kirchhoff’s Law`,
      `Laplace’s Law`,
      `Joule’s Law 131`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Kirchhoff’s Law`
  },
  {
    question: `Three equal resistors connected in series across a source of e.m.f. together dissipate 10 watt. If the same resistors are connected in parallel across the same e.m.f., then the power dissipated will be`,
    options: [
      `10 𝑤𝑎𝑡𝑡`,
      `30 𝑤𝑎𝑡𝑡`,
      `10/3 𝑤𝑎𝑡𝑡`,
      `90 𝑤𝑎𝑡𝑡 131`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) 90 𝑤𝑎𝑡𝑡 131`
  },
  {
    question: `When a current passes through a wire whose different parts are maintained at different temperatures, evolution or absorption of heat all along the length of wire is known as`,
    options: [
      `Joule effect`,
      `Seebeck effect`,
      `Peltier effect`,
      `Thomson effect 131`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) Seebeck effect`
  },
  {
    question: `To get the maximum current from a parallel combination of 𝑛 identical cells each of internal resistance 𝑟 and external resistance 𝑅, when`,
    options: [
      `𝑅 ≫ 𝑟`,
      `𝑅 ≪ 𝑟`,
      `𝑅 = 𝑟`,
      `None of these 131`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑅 = 𝑟`
  },
  {
    question: `Which of the following is vector quantity`,
    options: [
      `Current density`,
      `Current`,
      `Wattless current`,
      `Power 131`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) Current density`
  },
  {
    question: `The resistance 𝑅𝑡 of a conductor varies with temperature 𝑡 as shown in the figure. If the variation is represented by 𝑅𝑡 = 𝑅0[1 + 𝛼𝑡+ 𝛽𝑡2], then`,
    options: [
      `𝛼 and 𝛽 are both negative`,
      `𝛼 and 𝛽 are both positive`,
      `𝛼 is positive and 𝛽 is negative`,
      `𝛼 is negative and 𝛽 are positive 131`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 𝛼 and 𝛽 are both negative`
  },
  {
    question: `In the circuit shown in the figure reading of voltmeter is 𝑉1 when only 𝑆1 is closed, reading of voltmeter is 𝑉2 when only 𝑆2 is closed and reading of voltmeter is 𝑉3 when both 𝑆1 and 𝑆2 are closed. Then`,
    options: [
      `𝑉3 > 𝑉2 > 𝑉1`,
      `𝑉2 > 𝑉1 > 𝑉3`,
      `𝑉3 > 𝑉1 > 𝑉2`,
      `𝑉1 > 𝑉2 > 𝑉3 131 Two batteries of e.m.f. 4 𝑉 and 8 𝑉 with internal resistances 1 Ω and 2 Ω are connected in a circuit with a R V E 6R 3R S1 S2 Rt t I/2 2r I r I /2 C B A P a g e | 137`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 𝑉3 > 𝑉1 > 𝑉2`
  },
  {
    question: `resistance of 9 Ω as shown in figure. The current and potential difference between the points 𝑃 and 𝑄 are`,
    options: [
      `1 3 𝐴 and 3𝑉`,
      `1 6 𝐴 and 4𝑉`,
      `1 9 𝐴 and 9𝑉`,
      `1 2 𝐴 and 12𝑉 131`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1 6 𝐴 and 4𝑉`
  },
  {
    question: `Assume that each atom of copper contributes one free electron. What is the average drift velocity of conduction electrons in a copper wire of cross-sectional area 10−7 m2, carrying a current of 1.5 A? (Given density of copper =9 × 10−3kgm−3; atomic mass of copper =63.5; Avogadro’s number= 6.023× 1023 per gram atom)`,
    options: [
      `1.1 × 10−2ms−1`,
      `1.1 × 10−3ms−1`,
      `2.2 × 10−2ms−1`,
      `2.2 × 10−3ms−1 131`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 1.1 × 10−3ms−1`
  },
  {
    question: `The internal resistance of a primary cell is 4 Ω . It generates a current of 0.2 A in an external resistance of 21 Ω. The rate at which chemical energy is consumed in providing the current is`,
    options: [
      `0.42 J s−1`,
      `0.84 J s−1`,
      `1 J s−1`,
      `5 J s−1 132`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 0.84 J s−1`
  },
  {
    question: `A cell of e. m. f. 𝐸 connected with an external resistance 𝑅, then p.d. across cell is 𝑉. The internal resistance of cell will be`,
    options: [
      `(𝐸 − 𝑉)𝑅 𝐸`,
      `(𝐸 − 𝑉)𝑅 𝑉`,
      `(𝑉 − 𝐸)𝑅 𝑉`,
      `(𝑉 − 𝐸)𝑅 𝐸 132`,
    ],
    correct_option_id: 3,
    solution: `Correct answer: (d) (𝑉 − 𝐸)𝑅 𝐸 132`
  },
  {
    question: `The current flowing in a copper voltmeter is 1.6 𝐴. The number of 𝐶𝑢++ ions deposited at the cathode per minute are`,
    options: [
      `1.5 × 1020`,
      `3 × 1020`,
      `6 × 1020`,
      `1 × 1019 132`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 3 × 1020`
  },
  {
    question: `There are three resistance coils of equal resistance. The maximum number of resistances you can obtain by connecting them in any manner you choose, being free to use any number of the coils in any way is`,
    options: [
      `3`,
      `4`,
      `6`,
      `5 132`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 6`
  },
  {
    question: `A galvanometer of resistance 22.8 Ω measures 1A. How much shunt should be used, so that it can be used to measure 20A?`,
    options: [
      `1Ω`,
      `2Ω`,
      `1.2Ω`,
      `2.2Ω 132`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 1Ω`
  },
  {
    question: `If two electric bulbs have 40 𝑊 and 60 𝑊 rating at 220 𝑉, then the ratio of their resistances will be`,
    options: [
      `9 :4`,
      `4 :3`,
      `3 :8`,
      `3 :2 132`,
    ],
    correct_option_id: 0,
    solution: `Correct answer: (a) 9 :4`
  },
  {
    question: `The negative Zn pole of Daniell cell, sending a constant current through a circuit, decreases in mass by 0.13 g in 30 min. If the electrochemical equivalent of Zn and Cu are 32.5 and 31.5 respectively, the increase in the mass of the positive Cu pole in this time is`,
    options: [
      `0.180 g`,
      `0.141 g`,
      `0.126 g`,
      `0.242 g 132`,
    ],
    correct_option_id: 2,
    solution: `Correct answer: (c) 0.126 g`
  },
  {
    question: `A lead-acid battery of a car has an emf of 12 V. If the internal resistance of the battery is 0.5 Ω, the maximum current that can be drawn from the battery will be`,
    options: [
      `30 A`,
      `20 A`,
      `6 A`,
      `24 A 132`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 20 A`
  },
  {
    question: `When an electrical appliance is switched on, it responds almost immediately, because`,
    options: [
      `The electrons in the connecting wires move with the speed of light`,
      `The electrical signal is carried by electromagnetic waves moving with the speed of light`,
      `The electrons move with speed which is close to but less than speed of light`,
      `The electron are stagnant 132`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) The electrical signal is carried by electromagnetic waves moving with the speed of light`
  },
  {
    question: `A wire has resistance of 24 Ω is bent in the following shape. The effective resistance between 𝐴 and 𝐵 is Q 2  1  8 V 4 V P 9  r1 r2 P a g e | 138`,
    options: [
      `24 Ω`,
      `10 Ω`,
      `16 3 Ω`,
      `None of these P a g e | 139 3.CURRENT ELECTRICITY :`,
    ],
    correct_option_id: 1,
    solution: `Correct answer: (b) 10 Ω`
  }
];
