function scramble(str1, str2) {
  const letterCounts = {};
  for (let index = 0; index < str1.length; index++) {
    const currentLetter = str1[index];
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
  }
  for (let index = 0; index < str2.length; index++) {
    const currentLetter = str2[index];
    if (letterCounts[currentLetter] > 0) {
      letterCounts[currentLetter]--;
    } else {
      return false;
    }
  }
  return true;
}

function scramble1(str1, str2) {
  const letterCounts = str1.split("").reduce((letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});

  return str2.split("").every((currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      letterCounts[currentLetter]--;
      return true;
    } else {
      return false;
    }
  });
}

function scramble2(str1, str2) {
  const letterCounts = Array.prototype.reduce.call(
    str1,
    (letterCounts, currentLetter) => {
      letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
      letterCounts[currentLetter]++;
      return letterCounts;
    },
    {}
  );

  return Array.prototype.every.call(str2, (currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      letterCounts[currentLetter]--;
      return true;
    } else {
      return false;
    }
  });
}

console.log(scramble1("rkqodlw", "world")); //true
console.log(scramble2("cedewaraaossoqqyt", "codewars")); //true
console.log(scramble("katas", "steak")); //false
