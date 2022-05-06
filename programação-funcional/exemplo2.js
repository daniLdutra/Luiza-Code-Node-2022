function geradorInc(incremento) {
  function incrementador(valor) {
    return valor + incremento;
  }
  return incrementador;
}

const incPor2 = geradorInc(2);
const valor = incPor2(4);
console.log('incPor2(4) ==', valor);
