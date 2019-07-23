let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(`Unflattened:`);
console.log(arrays);

arrays = arrays.reduce(
  (totalArr, currentArr) => totalArr.concat(currentArr),
  []
);

console.log(`\nFlattened:`);
console.log(arrays);
