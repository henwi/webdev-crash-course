// User Input

/* let myAnswer = confirm("OK === True\nCancel === false");
console.log(myAnswer); 
*/

let nama = prompt("Enter Your Name");


if (nama) {
    console.log(nama.length);
    console.log(nama.trim().length);
    console.log(nama.trim());
} else {
    console.log("You didn't enter your name.");
}
