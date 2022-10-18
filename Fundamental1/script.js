/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


const age = 15;
if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

let century;
const birthYear = 2021;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const hasDriverLicense = true;
const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision); //false
// console.log(hasDriverLicense || hasGoodVision); //true
// console.log(!hasDriverLicense); //false

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//Switch=====================================================
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend:D");
    break;
  default:
    console.log("Not a valid day!");
}
*/

//Conditional operator ======================================
const age = 23;
age >= 18;
// ? console.log("I like to drink wine😊")
// : console.log("I like to drink water💧");

const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);
