//Criação da promessa
// const myPromise = new Promise((resolve, reject) => {
//   const nome = 'Elza';
//   nome == 'Daniella'
//     ? resolve('Usuário Daniella encontrada')
//     : reject('A usuário Daniella não foi encontrada');
// });

// myPromise.then((data) => {
//   console.log(data);
// });

//Encadeamento de then
const myPromise2 = new Promise((resolve, reject) => {
  const nome = 'Daniella';
  nome == 'Daniella'
    ? resolve('Usuário Daniella encontrada')
    : reject('A usuário Daniella não foi encontrada');
});

myPromise2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });
