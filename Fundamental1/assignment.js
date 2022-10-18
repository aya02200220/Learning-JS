//Value and Valuables
const country = "Japan";
const continent = "Asia";
let population = 129.53;
console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
const language = "Japanese";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

const halfPopulation = population / 2;
console.log(population + 1);
const populationOfFinland = 6;
console.log(
  "Population of Japan is more than Finland?:",
  population > populationOfFinland
);
const averagePopulation = 33;
console.log(
  "Average population of Japan is more than the average of a country population?:",
  population > averagePopulation
);
const description = `Portugal is in Europe, and its 11 million people speak portuguese`;

if (population > 30) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(`Portugal's population is 22 million below average`);
}
