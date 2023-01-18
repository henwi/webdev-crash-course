// While Loops
let myNumber = 20;
/* 
while (myNumber < 30) {
    myNumber++;
    console.log(myNumber);
}
 */


/* 
do {
    console.log(myNumber);
} while (myNumber < 20); 
*/

// For ... do loops

/* for (let i=0; i <= 10; i++) {} */
/* 
let i=0;
for ( ; i <= 10; ) {
    console.log(i);
    i++;
}

 */

/* 
let name = "Daniel";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

 */

let name = "Dave";
let counter = 0;
let myLetter;

while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "v") break;
    counter++;
}
console.log(counter);