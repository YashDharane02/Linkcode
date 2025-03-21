// Objects in JavaScript: Key-Value Pair Collection

// 1. Creating an Object
const student = {
  name: "Yash",
  age: 23,
  course: "Computer Science",
};

// 2. Accessing Object Properties
console.log(student.name);  // Output: Yash

// 3. Adding New Properties
student.grade = "A";
console.log(student);

// 4. Modifying Existing Properties
student.age = 24;
console.log(student.age); // Output: 24

// 5. Deleting Properties
delete student.course;
console.log(student);

// 6. Checking if a Property Exists
console.log("grade" in student);  // Output: true

// 7. Iterating Through Object Properties
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
