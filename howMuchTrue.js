let howMuchTrue = [true, false, true, true, true, false, true];
let num = "";
for (let i = 0; i < howMuchTrue.length; i++) {
  if (howMuchTrue[i] === true) {
    num++;
  }
}
console.log(num);
