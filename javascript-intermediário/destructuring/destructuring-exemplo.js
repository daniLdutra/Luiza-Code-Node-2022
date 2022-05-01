// Destructuring ou desestruturamento consiste na possibilidade de você extrair dados de um objeto ou array e armazena-los em uma variável

//Exemplo 1:

let pessoa = {
  nome: 'Eduardo',
  contato: {
    email: 'eduardo.pereira@luizalabs.com',
    telefone: '(11) 5555-5555',
  },
  endereco: {
    rua: 'xxxx',
    cidade: 'São Paulo',
    estado: 'SP',
  },
};

let { nome, contato, endereco } = pessoa;
let { email } = contato;
let { cidade } = endereco;
console.log(nome, email, cidade);

//Exemplo 2 com array:

let frutas = ['maçã', 'pera', 'uva', 'abacaxi'];
//let [f1, f2] = frutas;
let [, , , f4] = frutas;
console.log(f4);
