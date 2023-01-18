// Arrays

const myArray = [];

// add elements to an array

myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;


// refer to an array

console.log(myArray);

console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

// add more data to an array

myArray.push("school");
console.log(myArray);

const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);


const newLength = myArray.unshift(42);
console.log(myArray);
console.log(newLength);

const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);

/* 
delete myArray[1];
console.log(myArray);
console.log(myArray[1]); 
*/
console.log(myArray);

myArray.splice(1,0,42);

console.log(myArray);
console.log(myArray[1]); 


const myShelf = ["A", "B", "C", "D", "E", "F"];


const newShelf = myShelf.slice(2,5);
console.log(newShelf);

newShelf.reverse();
console.log(newShelf);

[]
const newString = myShelf.join();
console.log(newString);

const newArray = newString.split(",");
console.log(newArray);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArrayC = myArrayB.concat(myArrayA);
console.log(newArrayC);


// using spread operator ...Array
const newArrayD = [...myArrayA, ...myArrayB];
console.log(newArrayD);

// Nested arrays
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept);
console.log(clothesDept);


console.log(equipDept[0][1]);
console.log(clothesDept[1][1]);

const sportStore = [equipDept, clothesDept];
console.log(sportStore);

console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);

