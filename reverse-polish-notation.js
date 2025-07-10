// 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

function calc(str) {
  const stack = [];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const input = str.split(" ");
  for (let i = 0; i < input.length; i++) {
    let value = input[i];
    if (operations[value]) {
      let rightoper = stack.pop();
      let leftoper = stack.pop();
      let result = operations[value](+leftoper, +rightoper);
      stack.push(result);
    } else {
      stack.push(+value);
    }
  }
  return stack.pop();
}

console.log(calc("5 1 2 + 4 * + 3 -"), 14);
