// Objects in JavaScript are dynamic in nature
// Can add, or delete properties from an object
const circle = {
  radius: 1,
};

// Use dot notation to target the object and add new property
circle.color = "yellow";
circle.draw = function () {
  console.log("draw");
};
console.log("Added: ", circle);

// use delete keyword to delete properties or methods
delete circle.color;
delete circle.draw;
console.log("Deleted: ", circle);

// Can NOT reassign const variables
