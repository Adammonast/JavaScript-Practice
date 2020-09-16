// The "this" keyword references the object that is executing the current function
// If a function is part of an object, we call it a method. Using "this" would reference the object itself
// If the function is a regular function (global), "this" references the window object

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play();

// Since play() is a method on the video object, this references the video object itself
// Adding methods to the video object, "this" would still reference the video object itself
video.stop = function () {
  console.log(this);
};
video.stop();

// Regular function will reference the window object because its global scoped
function playVideo() {
  console.log(this);
}
playVideo();

// Constructor functions reference the new object that is being created
// Using the new operator creates a new object and sets "this" to reference the newly created object
function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("b");

// Callback functions reference the window object because they are global scoped functions, not methods on the video2 object. Using "this" and attaching methods will return undefined
// We can pass a secondary optional "this" argument into the forEach method and that would redirect "this" to reference the object the function is being called on
const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
video2.showTags();
