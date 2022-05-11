// Resolver várias promessas.
//Entrega a promessa qdo todas estão resolvidas
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok! Timeout');
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!');
});
const p3 = new Promise((resolve, reject) => {
  resolve('P3 ok!');
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

console.log('Depois do all!');

//Várias promessas com race

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P4 ok! Timeout');
  }, 2000);
});
const p5 = new Promise((resolve, reject) => {
  resolve('P5 ok!');
});
const p6 = new Promise((resolve, reject) => {
  resolve('P6 ok!');
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});
