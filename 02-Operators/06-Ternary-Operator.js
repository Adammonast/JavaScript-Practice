// ternary (condition) operator
// evaluates conditional statements are assigns value based on truthiness
// syntax ---> condition ? evaluate true value : false value
// example) if a customer has more than 100 points, they are a gold customer, otherwise they are a silver
let points = 110;
/*         condition ? truthy value : false value         */
let type = points > 100 ? "gold" : "silver";
console.log("Gold member: ", type);

let otherPoints = 90;
let otherType = otherPoints > 100 ? "gold member" : "silver member";
console.log("Silver member: ", otherType);
