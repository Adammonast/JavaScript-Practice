// Finding elements depends on if we are storing primitive or reference types in an array
// Reference Types:

const courses = [
  { id: 1, name: "history" },
  { id: 2, name: "science" },
];

// Find method - returns the value of the first element in the provided array that satisfies the provided testing function
// otherwise returns undefined
// function is passed as an argument
// this function is known as a callback function and its used to determine if a given element is in the array or not
const course = courses.find(function (course) {
  return course.name === "history";
});
console.log(course);

// findIndex() - works EXACTLY the same as above, except returns the index and not the object
const course2 = courses.findIndex(function (course) {
  return course.name === "history";
});
console.log(course2);
