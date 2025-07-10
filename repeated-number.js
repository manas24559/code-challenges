function repeatedNumber(numbers) {
  let numCount = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    numCount[num] = (numCount[num] || 0) + 1;
  }

  return numCount;
}

console.log(repeatedNumber([1, 6, 1, 3, 1, 8, 9, 6, 4, 4, 8, 8, 8, 7, 5, 6]));
