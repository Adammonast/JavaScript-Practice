// Switch..case are conditional statements in JS
// Operates similar to if...else statements
// instead of passing in condition, pass in a variable
// One or more case statements within curly braces
// Each case statement is used to compare the value of the variable with something

let role = "guest";
// Define switch statement, pass in role
switch (role) {
  // first case statement followed by :
  case "guest":
    // code to execute
    console.log("Guest User");
    // use break to exit out of case block or else all cases will be displayed
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  // Default case if nothing matches
  default:
    console.log("Unknown Role");
}
