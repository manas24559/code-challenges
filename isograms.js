// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//  Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram1(str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    const value = str[i].toLowerCase();
    if (!count[value]) {
      count[value] = 1;
    } else {
      return false;
    }
  }
  return true;
}

function isIsogram(str) {
  const count = {};
  const strg = str.toLowerCase().split("");
  console.log(strg);
  // for (let i = 0; i < str.length; i++) {
  //   const value = str[i].toLowerCase();
  //   if (!count[value]) {
  //     count[value] = 1;
  //   } else {
  //     return false;
  //   }
  // }
  // return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("aba"));
