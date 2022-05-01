//O spread operator (espalhamento) permite que você expanda um objeto/array iterável para uso.

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: '30',
//   country: 'Brazil',
//   city: 'São Paulo',
//   state: 'SP',
// };

// const newPerson = {
//   ...person,
//   lastName: 'Doe 2',
// };

// console.log('newPerson', newPerson);

//copia - espalhar

let pessoa = {
  nome: 'Eduardo',
  idade: 29,
  sexo: 'Masculino',
  contato: {
    email: 'eduardo.pereira@luizalabs.com',
    telefone: '(11) 5555-5555',
  },
  estado: 'São Paulo',
  profissao: 'Desenvolvedor',
  empresa: 'Magalu',
};

console.log(pessoa);
