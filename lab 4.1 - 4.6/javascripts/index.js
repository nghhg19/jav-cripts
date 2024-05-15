"use stritch";

const describeCountry = function (country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );
};

describeCountry("Finland", 6, "Helsinki");
describeCountry("VietNam", 90, "Ha Noi");
describeCountry("France", 67.3, "Paris");

/*____ Lab 4.2. Khai báo hàm với biểu thức hàm (20 phút) ____*/
const percentageOfWorld1 = function (population) {
  percent = (population / 7900) * 100;
  console.log(percent.toFixed(2) + "%");
};

percentageOfWorld1(6);
percentageOfWorld1(90);
percentageOfWorld1(67.3);

/*____ Lab 4.3. Hàm mũi tên (5 phút) ____*/
let percentageOfWorld3 = (population) => {
  percent = (population / 7900) * 100;
  // console.log(percent.toFixed(2) + "%");
  return percent;
};

percentageOfWorld3(6);
percentageOfWorld3(90);
percentageOfWorld3(67.3);

/*_____ Lab 4.4. Hàm gọi hàm (15 phút) _____*/

let describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  ).toFixed(2)}% of the world`;
};

console.log(describePopulation("Finland", 6));
console.log(describePopulation("VietNam", 90));
console.log(describePopulation("France", 67.3));

/*_____ Lab 4.5. Giới thiệu về Array (15 phút) ______*/
let populations = [6, 90, 67, 1000];
console.log(populations);
let percentages = [
  percentageOfWorld3(6).toFixed(2) + "%",
  percentageOfWorld3(90).toFixed(2) + "%",
  percentageOfWorld3(67).toFixed(2) + "%",
  percentageOfWorld3(1000).toFixed(2) + "%",
];
console.log(percentages);

/*______ Lab 4.6. Các phép toán cơ bản với array (25 phút) _______*/
const neighbours = ["TrungQuoc", "Laos", "Campuchia"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

// neighbours.push("Germany");
if (neighbours.includes("Germany")) {
  console.log(neighbours);
} else {
  console.log("Probably not a central European country :D");
}

if (neighbours.includes("TrungQuoc")) {
  neighbours[neighbours.findIndex((str) => str === "TrungQuoc")] = "ThaiLand";
  console.log(neighbours);
}
