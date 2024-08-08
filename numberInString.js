const arr = ["rafa12", "adi", "12bannana", "bcd"];

const result = arr.filter((num) => {
  const findNum = /[0-9]/.test(num);
  return findNum;
});

console.log(result);
