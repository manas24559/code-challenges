function palindrome(number) {
  const IsPalindrome = (numb) => {
    return numb == ReverseNumber(numb).toString();
  };
  const ReverseNumber = (numb) => {
    return +numb.toString().split("").reverse().join("");
  };
  let countNumber = number;
  let count = 0;
  while (!IsPalindrome(countNumber)) {
    countNumber += ReverseNumber(countNumber);
    count += 1;
  }
  console.log("Count:", count, "Number:", countNumber);
}
console.time("palindrome");
console.log(palindrome(4773));
console.timeEnd("palindrome");
