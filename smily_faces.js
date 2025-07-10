// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

function countSmileys3(item) {
  let count = 0;

  for (let i = 0; i < item.length; i++) {
    let face = item[i];
    if (face[0] == ":" || face[0] == ";") {
      if (face[1] == "-" || face[1] == "~") {
        if (face[2] == ")" || face[2] == "D") {
          count++;
        }
      } else if ((face[1] == ")" || face[1] == "D") && face.length == 2) {
        count++;
      }
    }
  }

  return count;
}

function countSmileys2(item) {
  let count = 0;
  const eyes = {
    ":": true,
    ";": true,
  };
  const noses = {
    "-": true,
    "~": true,
  };
  const mouths = {
    ")": true,
    D: true,
  };
  for (let i = 0; i < item.length; i++) {
    let face = item[i];
    if (face.length === 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    }
    if (face.length === 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
  }
  return count;
}

function countSmileys(item) {
  const eyes = {
    ":": true,
    ";": true,
  };
  const noses = {
    "-": true,
    "~": true,
  };
  const mouths = {
    ")": true,
    D: true,
  };

  return item.reduce((count, face) => {
    if (face.length === 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    }
    if (face.length === 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
    return count;
  }, 0);
}

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
