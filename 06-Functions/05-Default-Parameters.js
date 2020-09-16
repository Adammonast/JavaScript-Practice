function interest(principle, rate, years) {
  // Using the or operator, we can give a parameter a default value
  // If there is a parameter for rate, it uses the parameter. Otherwise, it defaults to 3.5
  rate = rate || 3.5;
  years = years || 5;

  return ((principle * rate) / 100) * years;
}

// If any values are excluded, the default parameters will be used
console.log(interest(10000));

// ES6 syntax allows us to pass in default values within the parameters
// No need for Or operator
function interest2(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}
console.log(interest2(10000));
