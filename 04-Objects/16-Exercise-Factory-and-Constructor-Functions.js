/* 

Create and initialize two address objects:
Objects should have:
    - street
    - city
    - zip code 
- The first is using a factory function
- The second is using constructor function

*/

// Factory function
function factoryAddress(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}
const address1 = factoryAddress("SW 10th Terrace", "Gainesville", 32601);
console.log("Factory: ", address1);

// Constructor function
function Address(street, city, zip) {
  (this.street = street), (this.city = city), (this.zip = zip);
}
const address2 = new Address("SW 10th Terrace", "Gainesville", 32601);
console.log("Constructor: ", address2);
