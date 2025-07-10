function oddInt(array) {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const count = array[i];
    if (!counts[count]) {
      counts[count] = 1;
    } else {
      counts[count]++;
    }
  }

  for (const number in counts) {
    const count = counts[number];
    if (count % 2 !== 0) {
      return +count;
    }
  }
}

console.log(oddInt([7]));
console.log(oddInt([0]));
console.log(oddInt([1, 1, 2]));
console.log(oddInt([0, 1, 0, 1, 0]));
console.log(oddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
