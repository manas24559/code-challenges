// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(totalTime) {
  const hours = Math.floor(totalTime / 3600);
  totalTime = totalTime % 3600;
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const pad = (number) => number.toString().padStart("2", 0);
  return `${pad(hours)}:${minutes}:${seconds}`;
}

console.log(humanReadable(620));
