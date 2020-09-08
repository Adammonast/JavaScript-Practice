const numbers = arrayFromRange(-20, 20);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

console.log(numbers);
