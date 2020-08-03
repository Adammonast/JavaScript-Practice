/* 
Create a function that takes an object and displays the all the properties that are string values
- example output:
    title a
    director b
*/

const movie = {
  title: "a",
  releaseYear: 2020,
  rating: 4.5,
  director: "b",
};

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

showProperties(movie);
