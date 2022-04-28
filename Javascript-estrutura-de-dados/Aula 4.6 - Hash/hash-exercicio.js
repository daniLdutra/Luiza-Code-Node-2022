const hashmap = new Array();

const hash = (word) => {
  let hashLength = word.length;

  while (hashmap[hashLength] !== undefined) {
    hashLength += 1;
  }
  return hashLength;
};

const users = [
  { username: 'dani', password: 1234 },
  { username: 'theo', password: 1584 },
  { username: 'mari', password: 1584 },
  { username: 'elza', password: 1978 },
  { username: 'geraldoNunes', password: 4859 },
];

users.map((user) => {
  const index_hash = hash(user.username);
  //console.log(index_hash);
  hashmap[index_hash] = user.username;
});
console.log(hashmap);
