// JS has two types of conditional statements: If...else and switch...case

// Example
// If hour is between 6pm and 12pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!
// syntax --> if(conditional statement): code to run if condition is met
/* Using else or else if syntax:
    if(condition){
        code to execute
    }
    else if(another condition){
        more code to execute
    }
    else(yet another condition){
        more and more code to execute
    }
*/

let hour = 13;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Evening!");
} else console.log("Good Night!");
