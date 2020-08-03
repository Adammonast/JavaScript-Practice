const courses = [
  { id: 1, name: "history" },
  { id: 2, name: "science" },
];

// ES6 Arrow function syntax makes for cleaner code
// Whenever passing a callback function as a function or argument to a method, use arrow syntax
// remove function keyword/
// to seperate parameters, place an => in between them
// with a single parameter you can remove parenthesis too
// with NO parameters, pass an empty parenthesis ()
// if your function has one statement, you do not need to add the return statement or accompanying {}
const course2 = courses.findIndex((course) => course.name === "history");
console.log(course2);
