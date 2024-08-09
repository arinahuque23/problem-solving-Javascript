// const array = [1, 2, [3, 4], 5, [8, 9]];

// const totalLength = array.flat().length;

// console.log(totalLength);

const arr = [1, [2, [3, 4]]];

function nestedLength(array) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      length += nestedLength(array[i]);
    } else {
      length++;
    }
  }
  return length;
}

let totalLength = nestedLength(arr);
console.log(totalLength);
