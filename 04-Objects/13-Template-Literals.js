// Object literals = {}
// Boolean literals = true, false
// String literals = "", ''

// Template literals are indicated by `` (back ticks)
// Template literals allow us to format our the string the way we want

const message = `This is my
first message`;

console.log(message);

// Can use placeholders to dynamically add values, use ${}
const name = "Adam";
const newMessage = `Hello ${name},

Thank you for joining my mailing list.

Regards,
Adam `;
console.log(newMessage);
