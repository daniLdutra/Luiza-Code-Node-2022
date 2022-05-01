//O spread operator (espalhamento) permite que você expanda um objeto/array iterável para uso. Utilizado para mergear as informações, atualizar as informações.

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
  estado: 'SP',
  profissao: 'Desenvolvedor',
  empresa: 'Magalu',
};

let alterarPessoa = {
  ...pessoa,
  nome: 'Eduardo Pereira',
  contato: { ...pessoa.contato, telefone: '(13) 5555-5555' },
  cidade: 'São Paulo', //adicionada nova informação
};

let returnPessoa = { ...pessoa, ...alterarPessoa }; // o spread 'final' será a última informação, criado um novo objeto com objeto anterior + alterado.

//console.log(pessoa, alterarPessoa);
console.log(returnPessoa); // retornado um novo objeto.
