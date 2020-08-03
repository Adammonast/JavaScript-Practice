/* 

Implement function, takes one parameter
- Speed limit = 70
- If driving at or under the speed limit: return Ok!
- For every 5 over the speed limit: give the driver a point
- Point output should look like: Point: 1
- If the driver has 12 points of more points: output should be --> License: suspended
- Hint: use Math.floor()

*/

function checkSpeed(speed) {
  const speed_limit = 70;
  const fiveOverLimit = 5;

  if (speed <= speed_limit) {
    return console.log("OK!");
  }

  const points = Math.floor((speed - speed_limit) / fiveOverLimit);
  if (points >= 12) {
    return console.log("License Suspended");
  } else console.log("Points: ", points);
}

checkSpeed(2);
checkSpeed(69);
checkSpeed(71);
checkSpeed(75);
checkSpeed(95);
checkSpeed(130);
checkSpeed(180);
