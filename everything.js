function every(array, test) {
  let isEvery = true;
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      isEvery = false;
      return isEvery;
    }
  }
  return isEvery;
}

function everyUsingSome(array, test) {
  const solverArr = [];
  for (let i = 0; i < array.length; i++) {
    solverArr[i] = !test(array[i]);
  }
  return !solverArr.some((_val, i) => solverArr[i]);
}

console.log(everyUsingSome([1, 3, 5], n => n < 10));
// → true
console.log(everyUsingSome([2, 4, 16], n => n < 10));
// → false
console.log(everyUsingSome([], n => n < 10));
// → true
