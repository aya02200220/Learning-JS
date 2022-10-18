//Coding Challenge #3
// const dolphinsArr = [96, 108, 89];
// const koalasArr = [88, 91, 110];

// let dolphinsAverage = 0;
// for (i = 0; i < dolphinsArr.length; i++) {
//   dolphinsAverage = dolphinsAverage + dolphinsArr[i];
// }
// dolphinsAverage = dolphinsAverage / dolphinsArr.length;

// let koalasAverage = 0;
// for (i = 0; i < koalasArr.length; i++) {
//   koalasAverage = koalasAverage + koalasArr[i];
// }
// koalasAverage = koalasAverage / koalasArr.length;

// if (dolphinsAverage > koalasAverage) {
//   console.log("Winner is the dolphins team🏆!!");
// } else if (dolphinsAverage < koalasAverage) {
//   console.log("Winner is the koalas team!!");
// } else if (dolphinsAverage === koalasAverage) {
//   console.log("Draw game...");
// }

//Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
