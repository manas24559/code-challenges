function Test() {
  function Test1() {
    let name = "Hello";
  }

  Test1();
}
// Test();

let obj = {
  value: 10,
  printValue: function () {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  },
};

// obj.printValue();

let a = { name: "Alice" };
let b = a;
b.name = "Bobgg";
console.log(a.name);
