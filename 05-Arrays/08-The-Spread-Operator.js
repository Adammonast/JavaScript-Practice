const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// in ES6 you can use the spread operator to combine arrays
// when we spread an array all the elements are returned individiually
// [] declares a new array and the individual elements from the other arrays are being added to the new one
const combined = [...arr1, ...arr2];
console.log("Spread: ", combined);
// using a spread operator provides us with more flexibility to add more/new elements
// place new items before, in between, or at the end of spread-in arrays
const combined2 = [...arr1, "a", ...arr2, "b"];
console.log("New items: ", combined2);
// create copies of arrays with spreading as well!
const finalArr = [...combined2];
console.log("Copied: ", finalArr);
