function moveZeros(arr) {
  let zeros = 0;
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value === 0) {
      zeros++;
    } else {
      array.push(value);
    }
  }
  for (let j = 0; j < zeros; j++) {
    array.push(0);
  }
  return array;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
