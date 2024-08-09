function invert(s) {
  let result = "";
  // for (let i = 0; i <= s.length - 1; i++)
  for (let i = s.length - 1; i >= 0; i--) {
    result +=
      s[i] == s[i].toLowerCase() ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return result;
}

console.log(invert("step on NO PETS abc"));
