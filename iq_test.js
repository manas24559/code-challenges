function iq_test(number) {
  const numbers = number.split(" ");
  const even = {
    count: 0,
    lastIndex: 0,
  };
  const odd = {
    count: 0,
    lastIndex: 0,
  };

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    } else {
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }
  if (even.count == 1) {
    return even.lastIndex;
  } else {
    return odd.lastIndex;
  }

  // let res = Number(numbers.join("")) % 2;
  // var final = 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   if (res === 1) {
  //     if (parseInt(numbers[i]) % 2 === 0) {
  //       final = i;
  //     }
  //   } else if (res === 0) {
  //     if (parseInt(numbers[i]) % 2 === 1) {
  //       final = i;
  //     }
  //   }
  // }
  // return final;
}

console.log(iq_test("2 2 1 4 6"));
console.log(iq_test("7 9 3 10 1"));
console.log(iq_test("2 1 1 1 1 1"));
