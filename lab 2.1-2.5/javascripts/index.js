const country = "VietNam";
const population = 100;
let continent = "Châu Á";
const isIsland = true;
const language = "Vietnamese";
let populationPhanLan = 6;
let dansoTB = 33;
let populationMN = population - populationPhanLan;
let description = `${country} and its ${population} million people speak ${language}`;

console.log(`Quốc gia: ${country}.
Lục địa: ${continent}.
Dân số: ${population} (triệu người).
Quốc gia là đảo: ${isIsland}.
Số miền: 3.
Dâm số mỗi miền: ${(population / 3).toFixed(2)} (triệu người).
${population + 1}`);

/* Kiểm tra xem Việt Nam có nhiều dân hơn so với Phần Lan không? */
if (population > populationPhanLan) {
  console.log(`So với dân số Phần Lan: Lớn hơn`);
} else if (population < populationPhanLan) {
  console.log(`So với dân số Phần Lan: Ít hơn`);
}

/* Kiểm tra xem Việt Nam có ít dân hơn so với các mức dân số trung bình không? */
if (population < dansoTB) {
  console.log("So với dân số tb thế giới: Nhỏ hơn");
} else {
  console.log("So với dân số tb thế giới: Lớn hơn");
}

/* Nếu dân số của Việt Nam có hơn 33 triệu người */
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
