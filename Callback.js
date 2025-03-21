function greet(name, callback) {
  console.log(`Hello,${name}!`);
  callback();
}

function farewell() {
  console.log("GoodBye!");
}

greet("Anup", farewell);

greet("Anup", () => {
  console.log("Arrow functions");
});
