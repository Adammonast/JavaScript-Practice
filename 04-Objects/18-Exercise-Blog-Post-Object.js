/* 

Use object literal syntax
Create a blog post object with these properties:
- title
- body
- author
- views (number)
- comments should have properties:
    - author
    - body
- isLive (true or false)

*/

const blogPost = {
  title: "Adam's Blog",
  body: "Hello! Welcome to my blog post!",
  author: "Adam",
  views: 1000,
  comments: [
    {
      author: "Adam's Evil Clone",
      body: "If I wasn't a villain, I'd be more like you!",
    },
    {
      author: "Adam's Guardian Angel",
      body: "If I was any closer to you I'd be in Heaven",
    },
  ],
  isLive: true,
};

console.log(blogPost);
