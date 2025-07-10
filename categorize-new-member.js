// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
//  They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
//  In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior1(data) {
  const categories = [];
  for (let i = 0; i < data.length; i++) {
    let value = data[i];
    let age = value[0];
    let handicaps = value[1];
    if (age >= 55 && handicaps > 7) {
      categories.push("Senior");
    } else {
      categories.push("Open");
    }
  }
  return categories;
}

function openOrSenior(data) {
  return data.map(([age, handicaps]) =>
    age >= 55 && handicaps > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
