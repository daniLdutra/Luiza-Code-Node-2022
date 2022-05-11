import fetch from 'node-fetch';

// setTimeout(() => console.log('hello'), 10);

// fetch('https://gorest.co.in/public/v2/users').then((response) =>
//   console.log(response)
// );
// console.log('what ssoup?');

async function getUser(userId) {
  let response = await fetch(`https://gorest.co.in/public/v2/${userId}`);
  let userData = await response.json();
  return userData;
}

let [user1, user2] = await Promise.all([getUser(3874), getUser(3872)]);

console.log(user1);
console.log(user2);
