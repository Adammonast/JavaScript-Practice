// Loops repeat an action a number a of times
// Loops include: for, while, do...while, for...in, for...of
// for loop syntax --> for(initialExpression, condition, incrementExpression)
// i is short index, known as loop variable
// loop will run as long as condition is true
// increment operator to increment the index by 1
for (let i = 0; i < 5; i++) {
  // addition statement goes here
  console.log("Hello World", i);
}

// display odd numbers from 1-5
for (let i = 0; i < 5; i++) {
  // addition statement goes here
  if (i % 2 === 0) {
    return console.log(i);
  }
}
