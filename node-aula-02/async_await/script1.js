//sintaxe
const primeiraFuncao = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Esperou...');
      resolve(); // resolve a promise para encerrar o fluxo dela.
    }, 1000);
  });
};

const segundaFuncao = async () => {
  console.log('Iniciou');
  await primeiraFuncao();
  console.log('Terminou');
};

segundaFuncao();
