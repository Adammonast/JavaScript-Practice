const movies = [
  { title: "a", year: 2020, rating: 4.5 },
  { title: "b", year: 2019, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2019, rating: 4.5 },
];

// All movies in 2019 with rating > 4
// Sort them by their rating
// Decsending order
// Pick their title

const titles = movies
  .filter((m) => m.year === 2019 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
