function pigLAtin(str) {
  return str
    .split(" ")
    .map((el) => el.slice(1) + el[0] + "ay")
    .join(" ");
}

function pigLatin(str) {
  let word = "";
  let firstLetter = str[0];
  for (let i = 1; i < str.length; i++) {
    let currentLetter = str[i];
    if (!firstLetter) {
      firstLetter = currentLetter;
    } else {
      if (currentLetter != " ") {
        word += currentLetter;
      } else {
        word += firstLetter + "ay ";
        firstLetter = "";
      }
    }
  }
  word += firstLetter + "ay";

  return word;
}

console.log(pigLatin("Hello World"));
