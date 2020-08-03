// Date is a built-in JS object
// Date is a constructor function

// Without any parameters, the Date() constructor will return the current date
const now = new Date();
// Can pass strings as arguments to create a new date
// Syntax ---> Date(value: string | number | Date): Date
const date1 = new Date("July 27, 2020 2:18");
// Can pass numbers as arguments to create a new date
// Syntax ---> Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// Month is 0 based --> 0 is January, 1 is Feb, etc
const date2 = new Date(2020, 4, 9, 0);

// convert dates to strings to render on the console
console.log("Date: ", now.toDateString());
console.log("Time: ", now.toTimeString());
console.log("ISO: ", now.toISOString());
