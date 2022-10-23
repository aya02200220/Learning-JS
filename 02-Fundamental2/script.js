"use script";

/*
function logger() {
  console.log("My name is Jonas");
}
// Calling / Running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1988, "Aya"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Aya"));
*/

/*
// Arrays-------------------------------------
const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2022, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
const friends = ["Michel", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop(); // Remove Last one
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove the first one
console.log(friends);
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Aya")); // -1

console.log(friends.includes("Steven")); // true
console.log(friends.includes("Aya")); //  false

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/*
// 43. Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
);
// Way1
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends."
  );
}
// Way2
const answer = jonas[interestedIn]
  ? jonas[interestedIn]
  : "Wrong request! Choose between firstName, lastName, age, job, and friends.";
console.log(answer);

// Adding new properties ---------------
jonas.location = "Portugal";
jonas["Twitter"] = "jonasschmedman";
console.log(jonas);

// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/*
// 44. Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  // return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense
        ? "has a driver's license."
        : "doesn't have a driver's license."
    }`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// 'Jonas is a 46 year old teacher, and he has a driver's license'
// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he ${
//     jonas.hasDriversLicense
//       ? "has a driver's license."
//       : "doesn't have a driver's license."
//   }`
// );
*/

/*
// Coding Challenge #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!"`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!"`
  );
}*/

/*
// 46. Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
}
*/
/*
// 47. Looping Arrays, Breaking and Continuing
const jonasArray = [
  "jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("---- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("---- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}*/
/*
//48. Looping Backwards and Loops in Loops
const jonas = [
  "jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
//
for (let i = jonas.length; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- starting exercise ${exercise} -----`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}*/
/*
// 49. The while Loop
for (let rep = 1; rep <= 10; rep++) {
  // console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Dice is about to end...");
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
