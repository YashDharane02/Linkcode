function displayMessage(name, callback) {
  console.log(`Welcome, ${name}!`);
  callback();
}

function showCompletionMessage() {
  console.log("Your registration is successful.");
}

// Passing a named function as a callback
displayMessage("Yash", showCompletionMessage);

// Passing an anonymous function as a callback
displayMessage("Tanaji", () => {
  console.log("Processing your request...");
});
