// Functions creates reusable codes


// Methods = Built-in Functions!

console.log("Hendry".toLowerCase());


// Function declaration syntax:

function sum(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num2 === undefined){
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(2));

 function getUserNameFromEmail (email) {
    return email.slice(0,email.indexOf("@"));
 }


// Anonymous function
const getUserName = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@hello.com"));
console.log(getUserName("UserOne@hello.com"));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("hEnDRy"));