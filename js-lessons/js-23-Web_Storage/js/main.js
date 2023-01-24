// Web Storage API

// Nat part of the DOM - refers to the Window API
// Available to JS via the global variable: Window

// We do not have to type window. It is implied:


const myArray = ["eat", "sleep", "code"];
const myWorkout = ["push up", "sit up", "burpee", "pull up"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
};

// using sessionStorage
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));

// using localStorage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
localStorage.setItem("myLocalStore2", JSON.stringify(myWorkout));

// Removing localStorage by refering to its key
localStorage.removeItem("myLocalStore");

// Clearing all localStorage
// localStorage.clear();

const key = localStorage.key(1);
const storeLength = localStorage.length;

const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
const myLocalData2 = JSON.parse(localStorage.getItem("myLocalStore2"));

console.log(myLocalData);
console.log(key);
console.log(storeLength);
