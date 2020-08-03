const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// to combine both arrays, use concat method
const combined = arr1.concat(arr2);
console.log(combined);

// slice the array from its second index up to the fourth
const slice = combined.slice(2, 4);
console.log(slice);

// slice the array from its second index to the end
const newSlice = combined.slice(2);
console.log(newSlice);

// slice while excluding the starting index to make a copy
const newNewSlice = combined.slice();
console.log(newNewSlice);
