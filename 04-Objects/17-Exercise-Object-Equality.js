/* 

Use the address constructor function to create address objects:
From there, create two functions that take two address object parameters
Function 1:
- check if the two objects are equal
- to properly check if the objects are equal, check their properties
Function 2: 
- check if both address are pointing to the same object
- referencing the same object

*/

function Address(street, city, zip) {
  (this.street = street), (this.city = city), (this.zip = zip);
}

const myAddress = new Address("SW 10th Terrace", "Gainesville", 32601);
const yourAddress = new Address("NW 47th Terrace", "Gainesville", 32608);

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zip === address2.zip
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log("Are equal: ", areEqual(myAddress, yourAddress));
console.log("Are equal: ", areEqual(myAddress, myAddress));
console.log("Are same: ", areSame(myAddress, myAddress));
console.log("Are same: ", areSame(myAddress, yourAddress));
