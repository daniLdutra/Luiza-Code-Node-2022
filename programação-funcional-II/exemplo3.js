//Funções prototipadas
//bind(): Nova função com this fornecido

function somar(valor) {
  return this.base + valor;
}
const somar2 = somar.bind({ base: 2 });
const resultado = somar2(3);

console.log(resultado); //5
