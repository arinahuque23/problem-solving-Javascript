function combinations(arr) {
  let res = 1;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] == 0) {
      res = res * arr[i];
    }
  }

  return res;
}

console.log(combinations([1, 2, 3, 4, 5]));
