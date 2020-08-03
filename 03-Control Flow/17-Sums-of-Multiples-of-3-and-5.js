/* 

Create a function that take a limit parameter
- the function returns the sums of multiples of 3 and 5 up until the limit
- multiples of 3: 3, 6, 9, etc
- multiples of 5: 5, 10 etc
- ex: sum(10) ---> output: 33

*/

function sum(limit) {
  let total = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return console.log(total);
}

sum(10);

console.log(sum(10));
