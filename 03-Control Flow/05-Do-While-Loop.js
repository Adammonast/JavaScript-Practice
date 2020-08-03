// Do-while loop
// Similar to while loops, but slightly different
// Always executed at least once, even if the condition evaluates to false
// While condition is evaluated at the end, so statements are always executed once
// Declare loop variable externally
let i = 9;
/* syntax -->
    do {
        statement
        increment i
    } while (condition) 
*/
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
