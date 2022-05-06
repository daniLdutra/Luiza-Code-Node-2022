const somarCom = (com) => (valor) => valor + com;
const subtrairDe = (de) => (valor) => valor - de;

const ehPar = (valor) => valor % 2 === 0;

const validar = (funcaoValidacao) => (entrada) => ({
  entao: (funcaoEntao) => ({
    senao: (funcaoSenao) =>
      funcaoValidacao(entrada) ? funcaoEntao(entrada) : funcaoSenao(entrada),
  }),
});

const teste02 = () => {
  const validarEhPar = validar(ehPar);
  const entrada = 11;
  const saida = validarEhPar(entrada).entao(somarCom(3)).senao(subtrairDe(3));
  console.log(saida);
};

teste02();
