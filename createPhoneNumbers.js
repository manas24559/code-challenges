function createPhoneNumbers(numbers) {
  const j = (n, f, e) => n.slice(f, e).join("");
  const phoneNumbers = `(${j(numbers, 0, 3)}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
  return phoneNumbers;
}
console.log(createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
