"use stritch";

// Lab 5.1. Giới thiệu về Object (5 phút)
const myCountry = {
  country: "VietNam",
  capital: "HaNoi",
  language: "Vie",
  population: 90,
  neighbours: ["TrungQuoc", "Laos", "Campuchia"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    if (this.neighbours.length === 0) {
      return (this.isIsland = true);
    } else {
      return (this.isIsland = false);
    }
  },
};

console.log(myCountry["language"]);

// Lab 5.2. Dấu chấm với dấu ngoặc (10 phút)
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
console.log(
  `${myCountry.country} has ${myCountry.population + 2} million ${
    myCountry.language
  }-speaking people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital}.`
);
console.log(
  `${myCountry.country} has ${myCountry["population"] - 2} million ${
    myCountry.language
  }-speaking people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital}.`
);
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Lab 5.4. Vòng lặp For (5 phút)
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// Lab 5.5. Lặp trong array, break và continue (15 phút)
let populations = [6, 90, 67, 1000];
let percentages2 = [];

for (let i = 0; i <= populations.length - 1; i++) {
  const percentageOfWorld1 = function () {
    return (populations[i] / 7900) * 100;
  };
  percentages2.push(percentageOfWorld1().toFixed(2) + "%");
}

console.log(percentages2);

// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 1; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}

//Lab 5.7. Vòng lặp While (10 phút)
let i = 0;
let percentages3 = [];
while (i < populations.length) {
  const percentageOfWorld1 = function () {
    return (populations[i] / 7900) * 100;
  };
  percentages3.push(percentageOfWorld1().toFixed(2) + "%");
  i++;
}

console.log(percentages3);
