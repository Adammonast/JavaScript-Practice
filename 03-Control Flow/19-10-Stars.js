/* 

Create a function that takes a row parameter:
- Depending on the number passed in, the function should print a * for each number passed
- the row the * is on should amount and print to the corresponding row
- ex ouput: showStars(3) --->
                *
                **
                ***

*/

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let stars = "";
    for (let starsNum = 0; starsNum < row; starsNum++) stars += "*";
    console.log(stars);
  }
}

showStars(10);
