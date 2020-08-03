/* 

Create an address object with three properties:
- street
- city
- zip code
Then create a function called showAddress that takes an address obj
- function display the properties with their values

*/

const address = {
  street: "1400 SW 10th Terrace",
  city: "Gainesville",
  zip: 32601,
};

function showAddress(obj) {
  for (let key in obj) console.log(key, obj[key]);
}

showAddress(address);
