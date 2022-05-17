// Funções que são passadas para funções como arqgumentos:

const lista = [1, 2, 3, 4, 5, 6];

//Filtro
const impares = lista.filter((x) => x % 2 !== 0);
console.log(impares);

// Mapear
const duplicado = lista.map((x) => x * 2);
console.log(duplicado);

//Redução

const soma = lista.reduce((resultado, valor) => resultado + valor);
console.log(soma);
