//2 - Implemente uma função que executa uma busca binária sobre um array de um tipo complexo também criado por você (por exemplo: classe Livro, classe Produto). A busca deve receber um determinado valor de atributo e utilizar esse valor para realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título do livro para realizar a comparação.

const searchPlay = (list, targetValue) => {
  let startIndex = 0;
  let finalIndex = list.length - 1;
  let halfArrayIndex;

  while (startIndex <= finalIndex) {
    halfArrayIndex = startIndex + Math.floor(finalIndex - startIndex + 1 / 2);

    if (list[halfArrayIndex] === targetValue) {
      return `Index found: ${halfArrayIndex}`;
    } else if (list[halfArrayIndex] < targetValue) {
      startIndex = halfArrayIndex + 1;
    } else {
      finalIndex = halfArrayIndex - 1;
    }
  }
  return "Index doesn't exist";
};

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const result = searchPlay(primeNumbers, 31);
console.log(result);
