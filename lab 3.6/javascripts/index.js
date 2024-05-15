/*__________ Lab 3.6.1. Đội nào chiến thắng? (phần 1) ___________*/

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("no one win the trophy");
}

/*_______ Lab 3.6.2. Tip calculator (phần 1) ________*/

const bill = 500;
let tip = 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
