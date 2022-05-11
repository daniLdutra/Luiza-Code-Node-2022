//Retorno com catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = 'Dani';
  nome == 'Daniella'
    ? resolve('Usuário Daniella encontrada')
    : reject('A usuário Daniella não foi encontrada');
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Aconteceu um erro: ' + err);
  });
