// find() 與 filter() 很像，
// 但 find() 只會回傳一次值，且是第一次為 true 的值。
const users = [
  { name: "Alex" },
  { name: "Louis" },
  { name: "Jane" },
  { name: "Alex" }
];

console.log(users.find(user => user.name === "Alex"));
// { name: 'Alex' }

const movie = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Roas",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
];
movie.find(index => {
  if (index.hasWatched !== true) {
    console.log(`You have not seen ${index.title} - ${index.rating} stars`);
  } else {
    console.log(`You have watched ${index.title} - ${index.rating} stars`);
  }
});
