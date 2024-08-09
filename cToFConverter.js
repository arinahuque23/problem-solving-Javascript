function celsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const fahrenheitTemp = 20;
const celsiusTemp = celsius(fahrenheitTemp);
console.log(celsiusTemp);
