// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

const withinRange = (value) => {
  if (value < 0) return 0;
  else if (value > 255) return 255;
  return value;
};

const toLad = (value) => (value === "0" ? "00" : value);

const convertToHex = (value) => value.toString(16).toUpperCase();

function rgbToHex(r, g, b) {
  return `${
    toLad(convertToHex(withinRange(r))) +
    toLad(convertToHex(withinRange(g))) +
    toLad(convertToHex(withinRange(b)))
  }`;
}

console.log(rgbToHex(255, 255, 255), "FFFFFF");
console.log(rgbToHex(255, 255, 300), "FFFFFF");
console.log(rgbToHex(0, 0, 0), "000000");
console.log(rgbToHex(148, 0, 211), "9400D3");

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
