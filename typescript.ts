
// equivalent to 
// const ColorRed = 0; const ColorGreen = 1, const ColorBlue = 2;
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;

// type conversion
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');

// lambda function or arrow function
// equivalent to (message) => {console.log(message)}
let doLog = (message) => console.log(message);