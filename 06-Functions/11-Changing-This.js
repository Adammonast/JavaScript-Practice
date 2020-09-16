const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Declaring a variable that references the value of "this" we can change "this" within global scoped callback functions
    const self = this;
    this.tags.forEach(function (tag) {
      // Using self will reference the "this" through the video object
      console.log(self.title, tag);
    });
  },
};
video.showTags();

function playVideo(a, b) {
  console.log(this);
}

// Using built-in function methods, we can change what "this" references by using apply(), bind(), and call()
// The value of what's passed in as an argument is what "this" will reference
// Difference between call() and apply() is what we pass as arguments
// apply() takes multiple parameters passed in as an array
playVideo.call({ name: "Adam" }, 1, 2);
playVideo.apply({ name: "Adam" }, [1, 2]);
// bind() returns a new function and sets "this" to ALWAYS reference the object being passed in
// We can store the results of bind() in a constant
// No need to function call the constant, add the invokation parenthesis at the end of the constant
const fn = playVideo.bind({ name: "Adam" })();

// bind() can also be used within functions to set "this" to reference a new object instead of the window object
// Pass in a new object to be referenced by "this" within the bind() method at the end of the callback function
const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
video2.showTags();

// Arrow function syntax
// Arrow functions inherit the "this" reference from the containing function
const video3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};
video3.showTags();
