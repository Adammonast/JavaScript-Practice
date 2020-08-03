/*

Implement function:
- Takes numeric parameter: limit
- Display a list of numbers the length of the limit
- Next to each number, have whether its even or odd
- Example: shownumbers(3) ---> returns:
    0 "Even"
    1 "Odd"
    2 "Even"
    3 "Odd"
*/

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(message, i);
  }
}

showNumbers(10);
showNumbers(12);
