"use stritch";

/*_____ Lab 4.7.1. Đội nào chiến thắng? (phần 2) _____*/
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(440, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (DolphinsAvg, KoalasAvg) {
  if (DolphinsAvg >= KoalasAvg * 2) {
    console.log(`Dolphins win (${DolphinsAvg} vs. ${KoalasAvg})`);
  } else if (KoalasAvg >= DolphinsAvg * 2) {
    console.log(`Koalas win (${KoalasAvg} vs. ${DolphinsAvg})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

/*_____ Lab 4.7.2. Xây dựng Tip calculator (phần 2) _____*/
let calcTip = (bill) => {
  return 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);
