/* 

Create an array of objects for price ranges:
- there should be three price range options
- each option should have its own properties

*/

const priceRange = [
  { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

const restaurants = [
  {
    averagePerPerson: 5,
  },
];

console.log(priceRange);
