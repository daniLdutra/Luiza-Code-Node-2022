function processar(valores, funcaoAcao) {
  const array = [];
  for (let i = 0; i < valores.length; i += 1) {
    const resultado = funcaoAcao(valores[i]);
    array.push(resultado);
  }
  return array;
}
const somarCom2 = (x) => x + 2;
const array1 = [1, 2, 3];
const array2 = processar(array1, somarCom2);
console.log(array2);

// Usando map
const somarComDois = (x) => x + 2;
const array = [1, 2, 3];
const arrayResult = array.map(somarComDois);
console.log(arrayResult);
