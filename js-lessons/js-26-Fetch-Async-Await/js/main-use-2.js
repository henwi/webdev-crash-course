// Defining async function
// async function myCoolFunction() { ... }

// 2nd parameter of Fetch is an object

// === GET JSON

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      // Accept: "text/plain",
      // use response.text()

      // Mostly we use json
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
};

// getDadJoke();

// === POST JSON

const jokeObject = {
  id: "hiVSCdUvXg",
  joke: "I heard there was a new store called Moderation. They have everything there",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

// postData(jokeObject);

// Getting data using URL
/* 
const jokeCategory = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];
 */
const requestJoke = async (cat) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${cat}`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value);
};

requestJoke("dev");
