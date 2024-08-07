const reverseOdd = "rafa napra";
let words = reverseOdd.split(" ");
let output = words.map((word) => {
  if (word.length % 2 == 1) {
    return word.split("").reverse().join("");
  } else {
    return word;
  }
});

console.log(output);
