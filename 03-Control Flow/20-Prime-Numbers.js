/* 

Create a function that takes a limit parameter:
- function takes a max number that's the limit
- return all the prime values within that number
- prime numbers are numbers whose factors are only 1 and itself
- can not be divided evenly into another number
- ex output: showPrimes(20) ---> 2, 3, 5, 7, 11, 13, 17, 19

*/

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showPrimes(34);

function getPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

getPrimes(20);
