//Criação da promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = 'Elza';
  nome == 'Daniella'
    ? resolve('Usuário Daniella encontrada')
    : reject('A usuário Daniella não foi encontrada');
});

myPromise.then((data) => {
  console.log(data);
});
