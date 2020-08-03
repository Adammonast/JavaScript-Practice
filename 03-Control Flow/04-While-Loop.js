// Key difference between for loops and while loops: in for loops, the variable is part of the loop itself
// In while loops, you have to declare the variable externally
let i = 0;
/* syntax -->
    while (condition) {
        statement that we want to repeat
        increment i
    }
*/
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
