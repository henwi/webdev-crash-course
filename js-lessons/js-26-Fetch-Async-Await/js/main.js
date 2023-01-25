// Fetch API requires discussion of...
// Callbacks, Promises, Thenables, and Async/Await

/* Callbacks are 
functions that are passed to other functions
as parameters, so they will call that functions after finishing
doing other stuffs
 */
/* 
function firstFunction(parameters, callback) {
  // do stuffs
  callback();
}
 */
/* AKA "callback hell", 
nesting several callbacks makes it hard to follow
each functions. It's usually found in legacy code 
where promises hasn't been introduced yet. 
Promises and await are created to get rid of this hell.
*/

/* 
firstFunction(param, function () {
  // do stuff
  secondFunction(param, function () {
    thirdFunction(param, function () {});
  });
});
 */

// === Promises
// 3 states: Pending, Fulfilled, Rejected.

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

/* === Chaining thenables

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });
 */

/* === Promise flow

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});
 */

// Fetch returns a promise
// const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
/* 
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
 */

// === Async / Await
// Defining async function
// async function myCoolFunction() { ... }
// async with arrow function

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  return jsonUserData;
};

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);
