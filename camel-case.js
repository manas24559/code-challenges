// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//  The first word within the output should be capitalized only if the original word was capitalized
//   (known as Upper Camel Case, also often referred to as Pascal case).
//    The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase1(str) {
  const words = str.split(/-|_/g);
  let string = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    string += word[0].toUpperCase() + word.slice(1);
  }
  return string;
}

function toCamelCase(str) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index == 0 ? word : camelCase + capitalize(word);
  }, "");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
