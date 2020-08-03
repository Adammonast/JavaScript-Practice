/* 

Use a constructor function to create an object
Create a draft blog post object with these properties:
- title
- body
- author
- views (number)
- comments should have properties:
    - author
    - body
- isLive (true or false)
* However, certain properties won't increase or change value until posted. Keep that in mind!

*/

function Blog(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comments = []),
    (this.isLive = false);
}
const blogPost = new Blog(
  "Adam's Blog",
  "Welcome to my blog! Hope you enjoy!",
  "Adam"
);
console.log(blogPost);
