function fibonacci(n) {
  let fibonacciSeries = [1, 1];
  for (let i = 2; i < n; i++) {
    let res = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(res);
  }
  return fibonacciSeries;
}

let n = fibonacci(8);
console.log(n);
