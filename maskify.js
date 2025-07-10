// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct. However,
// since someone could look over your shoulder, you don't want that shown on your screen.
//  Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  let masked = " ";
  for (let i = 0; i < cc.length; i++) {
    let current = cc[i];
    if (i < cc.length - 4) {
      masked += "#";
    } else {
      masked += current;
    }
  }
  return masked;
}

function maskify1(cc) {
  return cc
    .split("")
    .map((letter, index, array) => {
      if (index < array.length - 4) {
        return "#";
      } else {
        return letter;
      }
    })
    .join("");
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
