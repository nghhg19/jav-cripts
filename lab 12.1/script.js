'use strict';

let checkDogs = (function (dogJulia, dogKate) {
  const newdogJulia = dogJulia.slice(1, -1);
  const allDogs = newdogJulia.concat(dogKate);
  // return newdogJulia, allDogs;
  allDogs.forEach(function (e, i) {
    e > 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${e} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });

  // Lab 12.2: Chuyển đổi tuổi thú cưng
  function calcAverageHumanAge(humanAge) {
    humanAge = allDogs
      .map(function (e) {
        if (e <= 2) {
          return 2 * e;
        } else if (e > 2) {
          return 16 + e * 4;
        }
      })
      .filter(function (e) {
        return e >= 18;
      });
    console.log(humanAge);

    let ageAverage =
      humanAge.reduce(function (s, e) {
        return s + e;
      }, 0) / humanAge.length;
    console.log(ageAverage);
  }
  calcAverageHumanAge();
})([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
