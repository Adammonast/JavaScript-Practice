/* Implement this function:

function isLandscape(width, height){
    // returns true if landscape ---> width > height
    // returns false if portrait ---> height > width
}  

*/

function isLandscape(width, height) {
  // no need for ternary because boolean values are returns based on conditions
  return width > height;
}

console.log(isLandscape(150, 170));
console.log(isLandscape(800, 600));
console.log(isLandscape(150, 150));
