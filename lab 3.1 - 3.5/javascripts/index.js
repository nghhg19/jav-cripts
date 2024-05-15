/*____________ Lab 3.1. Chuyển đổi kiểu và ép kiểu (10 phút) ___________*/

// let numNeighbours = prompt(
//   "How many neighbor countries does your country have?"
// );
// console.log(typeof numNeighbours);

// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (Number(numNeighbours) > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/*_____________ Lab 3.3. Toán tử logic (25 phút) ___________*/

let country = prompt("Đất nước:");
let language = prompt("Ngôn ngữ:");
let population = Number(prompt("dân số (triệu người):"));
let Isisland = prompt("Là đảo:", "có");

if (language === "tiếng anh" && population < 30 && Isisland === "không") {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

/*____________ Lab 3.4. Câu lệnh switch (5 phút) ____________*/

switch (language) {
  case "Chinese" || "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

/*__________ Lab 3.5. Toán tử điều kiện (ba ngôi) (10 phút) ___________*/

let Portugal =
  language < 30
    ? console.log("Portugal's population is above average")
    : console.log("Portugal's population is below average");
console.log(Portugal);
