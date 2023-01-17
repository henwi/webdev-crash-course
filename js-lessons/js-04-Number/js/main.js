// Numbers


// An integer is a whole number
const myNumber = 42;
const myFloat = 42.02;


console.log(myNumber);
console.log(typeof myNumber);

console.log(myFloat);
console.log(typeof myFloat);

const myString = "42.395hteo";

console.log(myNumber === myFloat);

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Molly"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));


console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myString));

console.log(typeof Number.parseFloat(myString));

// Chaining = using several methods chained together
console.log(Number.parseFloat("32.253nsth").toFixed(2).toString());

//The global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Dave"));