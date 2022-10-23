// Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'
/*
const language = "Japanese";

switch (language) {
  case "chinese":
  case "andarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
/*
// 1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}
console.log(describeCountry("Japan", "13 million", "Tokyo"));
*/

// LECTURE: Function Declarations vs. Expressions
// 1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
// 3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
// 4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100 + "%";
}
const japanesePopulation = percentageOfWorld1(12);
const chinesePopulation = percentageOfWorld1(1441);
const australiaPopulation = percentageOfWorld1(10);
console.log(japanesePopulation, chinesePopulation, australiaPopulation);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100 + "%";
};
const japanesePopulation2 = percentageOfWorld2(12);
const chinesePopulation2 = percentageOfWorld2(1441);
const australiaPopulation2 = percentageOfWorld2(10);
console.log(japanesePopulation2, chinesePopulation2, australiaPopulation2);
*/

/*
// LECTURE: Arrow Functions
// 1. Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
//    'percentageOfWorld3'
const percentageOfWorld3 = (population) => (population / 7900) * 100 + "%";

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);
*/

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier
// 3. Call'describePopulation'with data for 3 countries of your choice

/*
const percentageOfWorld3 = (population) => (population / 7900) * 100 + "%";

const describePopulation = function (country, population) {
  const percPopulation = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${percPopulation}% of the world.`;
};

countryDescription = describePopulation("China", 1441);
console.log(countryDescription);
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphin win🏆 ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win🏆 ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("No team wins...");
  }
}
// test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

// // test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �


const calcTip = function (bill) {
  return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(tip);
console.log(total);
*/
/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point,a new country called 'Utopia' is created in the neighbour hood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately,after some time,the new country is dissolved.So remove it from the end of the array
4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.*/
/*
const neighbours = ["France", "Italy", "Austria", "Germany"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("France")] = "Republic of France";
console.log(neighbours);*/

/*
LECTURE: Introduction to Objects
1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)*/
/*
const myCountry ={
  country:'Japan',
  capital:'Tokyo',
  language:'Japanese',
  population:'12.3 million',
  neighbours:['Korea','Australia','Philippines','Russia']
}*/
/*
// LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry'object.This
method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighboring countries, and false if there are. Use the ternary operator to set the property.
*/
/*
const myCountry = {
  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: "12.3",
  neighbours: [],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.'`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
/*
//LECTURE: Iteration: The for Loop
1. Thereareelectionsinyourcountry!Inasmalltown,thereareonly50voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}*/
/*
LECTURE: Looping Arrays, Breaking and Continuing
1. Let'sbringbackthe'populations'arrayfromapreviousassignment
2. Useaforlooptocomputeanarraycalled'percentages2'containingthe
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirmthat'percentages2'containsexactlythesamevaluesasthe
'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

const percentageOfWorld1 = (population) => (population / 7900) * 100;

const populations = [10, 1441, 332, 83];
const percentages = [];
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);*/
/*
LECTURE: Looping Backwards and Loops in Loops
1. Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Logonlytheneighbouringcountriestotheconsole,onebyone,nottheentire arrays. Log a string like 'Neighbour: Canada' for each country
3. Youwillneedaloopinsidealoopforthis.Thisisactuallyabittricky,sodon't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}*/

// Coding Challenge #4
const calcTip = function (bill) {
  return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(tips, total);

const calcAverage = function (totalArr) {
  let sum = 0;
  for (let i = 0; i < totalArr.length; i++) {
    sum += totalArr[i];
  }
  return sum / totalArr.length;
};
console.log(calcAverage(total));
