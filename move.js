const move = (arr) => {
  var count = 0;
  arr.map((item) => {
    if (item === 0) {
      count++;
    }
  });
  arr = arr.filter((item) => item !== 0);
  for (let index = 0; index < count; index++) {
    arr.push(0);
  }
  return arr;
};

console.log(move([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
