//Escreva um objeto e faça uma cópia dele;
//Usando exemplo do exercício anterior, altere qualquer chave desse objeto com outro valor.
//Escreva seu nome e separe-o usando a sintaxe do spread operator em um array.

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
  cidade: 'Rio de Janeiro',
};

let nome = 'Daniella';
let arraySpread = [...nome];

console.log(alterarPessoa, arraySpread);
