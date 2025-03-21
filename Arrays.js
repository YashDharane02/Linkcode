// JavaScript Array Functions
// Arrays in JavaScript have built-in methods for transformation, filtering, and modification.

// 1. Slice Method - Extracts a portion of an array without modifying the original array.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits.slice(1));     // ["Banana", "Mango", "Orange", "Grapes"]
console.log(fruits.slice(1, 3));  // ["Banana", "Mango"]
console.log(fruits);              // Original array remains unchanged

// 2. Splice Method - Removes or replaces elements and modifies the original array.
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
console.log(colors.splice(1, 2));  // Removes "Blue" and "Green"
console.log(colors);  // ["Red", "Yellow", "Purple"]

// 3. Map Function - Transforms each array element using a callback function.
let numbers = [10, 20, 30, 40, 50];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [100, 400, 900, 1600, 2500]
console.log(numbers); // Original array remains unchanged

// 4. Filter Function - Filters elements based on a condition.
let ages = [12, 18, 25, 30, 15, 40, 22];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [18, 25, 30, 40, 22]

// 5. Reduce Function - Accumulates values in an array into a single value.
let prices = [100, 200, 300, 400];
const totalPrice = prices.reduce((acc, price) => acc + price, 0);
console.log(totalPrice); // 1000

// 6. Find Function - Finds the first element that satisfies the condition.
let scores = [45, 50, 60, 70, 85];
const firstHighScore = scores.find((score) => score > 60);
console.log(firstHighScore); // 70

// 7. Some Function - Checks if at least one element meets the condition.
let temperatures = [15, 22, 18, 35, 40];
const hasHighTemp = temperatures.some((temp) => temp > 30);
console.log(hasHighTemp); // true

// 8. Every Function - Checks if all elements meet the condition.
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

// 9. Sort Function - Sorts elements in ascending order.
let names = ["Yash", "Tanaji", "Dharane", "Amit", "Raj"];
console.log(names.sort()); // ["Amit", "Dharane", "Raj", "Tanaji", "Yash"]

// 10. Reverse Function - Reverses the order of array elements.
console.log(names.reverse()); // ["Yash", "Tanaji", "Raj", "Dharane", "Amit"]
