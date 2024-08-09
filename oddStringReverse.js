// const reverseOdd = "rafa napra";
// let words = reverseOdd.split(" ");
// let output = words.map((word) => {
//   if (word.length % 2 == 1) {
//     return word.split("").reverse().join("");
//   } else {
//     return word;
//   }
// });

// console.log(output);

const reverseOdd = "rafa napra";
let words = reverseOdd.split(" ");

let output = words.map((word) => {
  let end = word.length - 1;

  if (word.length % 2 == 1) {
    let reversedWord = "";
    while (end >= 0) {
      reversedWord += word[end];
      end--;
    }
    return reversedWord;
  } else {
    return word;
  }
});

console.log(output.join(" "));
