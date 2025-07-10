function sumTwoSmallestNumbers1(numbers) {
  let smallest;
  let secondSmallest;
  if (numbers[0] < numbers[1]) {
    smallest = numbers[0];
    secondSmallest = numbers[1];
  } else {
    smallest = numbers[1];
    secondSmallest = numbers[0];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber < smallest) {
      smallest = currentNumber;
      secondSmallest = smallest;
    } else if (currentNumber < secondSmallest) {
      secondSmallest = currentNumber;
    }
  }

  return smallest + secondSmallest;
}

function sumTwoSmallestNumbers(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const secondSmallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(secondSmallestIndex, 1);
  const secondSmallest = Math.min.apply(null, numbersWithoutSmallest);
  return smallest + secondSmallest;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
