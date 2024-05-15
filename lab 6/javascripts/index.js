const arr = [17, 15, 23, 19, 21];
let str = "";

for (let i = 0; i < arr.length; i++) {
  str += `... ${arr[i]}ºC in ${i + 1} day`;
}

console.log(str);
