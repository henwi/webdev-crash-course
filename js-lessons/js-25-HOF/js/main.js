// Higher Order Functions

// A  higher order function is a function that does at least one
// of the following:
//  - Takes one or more functions as an argument (parameter)
//  - Returns a function as the result

//forEach()

import { posts } from "./posts.js";

posts.forEach((post) => {
  console.log(post);
});
console.clear();

const filterPosts = posts.filter((post) => {
  return post.userId === 5;
});
console.log(filterPosts);

const mappedPosts = filterPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
