// Value Types - Primitives - numbers, string, boolean, symbol, undefined, null
// Reference Types - Objects, functions, arrays
// Arrays are also objects
// JS can be looked at as Primitives and Objects

// primitives
let x = { value: 10 };
let y = x;
// when we use an object, it is not stored in the variable. it is stored elsewhere in memory and that memory location is stored in the variable. When we copy x into y, the addressed is being copied from x also into y
x.value = 20;
// console.log(x, y);

// Primitives are copied by their value
// Objects (reference types) are copied by their reference

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
