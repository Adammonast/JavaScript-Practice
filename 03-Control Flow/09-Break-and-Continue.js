// In all loops, break and continue can change the way loops behave
let i = 0;
while (i <= 10) {
  // if you want to break out of the loop, use break key word
  // break will stop the loop according to a condition
  if (i == 5) break;
  console.log("Break Statement: ", i);
  i++;
}

// continue isn't used often, ugly way of writing code
let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    j++;
    // if this condition is met, the JS engine will jump back to the start of the loop for the next iteration
    continue;
  }
  console.log("Continue Statement: ", j);
  j++;
}
