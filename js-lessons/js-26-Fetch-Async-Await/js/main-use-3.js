// Defining async function
// async function myCoolFunction() { ... }

// abstract into functions
// TODO: Check ChuckNorris API docs
// TODO: Redo the exercise

/* const jokeCategory = [
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

// maybe getting input data from a form
const getFormData = () => {
  const requestObj = {
    categories: ["dev"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?category=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
};

/* postJokeToPage = (joke) => {
  console.log(joke);
};
 */
// Procedural workflow function

const processJokeRequest = async () => {
  const requestData = getFormData();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

// processJokeRequest();

const requestData = getFormData();
const requestUrl = buildRequestUrl(requestData);
console.log(requestUrl);
const response = fetch(requestUrl);
console.log(response);
