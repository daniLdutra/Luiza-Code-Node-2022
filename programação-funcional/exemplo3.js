const somarCom = (com) => (valor) => valor + com;
const subtrairDe = (de) => (valor) => valor - de;

const ehPar = (valor) => valor % 2 === 0;

const teste01 = () => {
  const entrada = 10;
  let saida;
  if (ehPar(entrada)) {
    const somarCom3 = somarCom(3);
    saida = somarCom3(entrada);
  } else {
    const subtrairDe3 = subtrairDe(3);
    saida = subtrairDe3(entrada);
  }
  console.log('>', saida);
};

teste01();
