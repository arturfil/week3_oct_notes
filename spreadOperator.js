let nums = [4, 2, 7, 3];

let movies = [
  "Pulp Fictions",
  "Die Hard",
  "Light house",
  "Fatman",
  "Dumb Dumber",
  "Ace Ventura",
  "The Mask",
  "Bruce All Mighty"
];

// for(let i = 0; i < movies.length; i++) {
// console.log(movies[i]);
// }

// console.log("For loop\n")
// for(let movie in movies) {
//   console.log(movies[movie]);
// }

// console.log("For each\n")
// movies.forEach((movie) => {
//   console.log(movie)
// });

console.log(...movies);
movies = [...movies, "Start wars"];
console.log(movies);