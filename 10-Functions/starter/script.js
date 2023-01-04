'use strict';

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas schmedmann',
//   passport: 12334345345,
// };
// const checkIn = function (flightNum, passenger) {
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 12334345345) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// console.log(checkIn(flight, jonas));
// console.log(flight);
// console.log(jonas);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey!');
// greeterHey('Jonas');
// greeterHey('Aya');

// greet('hello')('aya');

const jal = {
  airline: 'JAL',
  iataCode: 'JA',
  bookings: [],
  //book function
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// jal.book(234, 'Aya ishimura');
// jal.book(567, 'Miharu sasaki');

// const ana = {
//   airline: 'ANA',
//   iataCode: 'AN',
//   bookings: [],
// };

// const book = jal.book;
// book.call(jal, 234, 'Aya ishimura');
// console.log(jal);
// book.call(ana, 567, 'Miharu sasaki');

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);

// const addTax = rate => value => value + value * rate;

// const addVAT2 = addTax(0.23);
// console.log(addVAT2(100));

// With event listeners
// jal.planes = 300;
// jal.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', jal.buyPlane.bind(jal));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
// */
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const ans = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (typeof ans === 'number' && 0 <= ans && ans <= 3) {
//       this.answers[ans]++;
//       this.displayResults();
//     } else {
//       console.log(`answer ${ans} wouldn't make sense, right?`);
//     }
//   },
//   displayResults() {
//     console.log(`Poll results are ${this.answers}`);
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('This will never run again!');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again!');
// })();

// (() => console.log('This will ALSO never run again!'))();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers.`);
//   };
// };

// secureBooking();
// secureBooking();
// secureBooking();
// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
