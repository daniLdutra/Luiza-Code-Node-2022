//Funções prototipadas
//bind(): Nova função com this fornecido

function somar(valor) {
  return this.base + valor;
}
const somar2 = somar.bind({ base: 2 });
const resultado = somar2(3);

console.log(resultado); //5

//No uso do bind precisa-se criar uma nova função:
function func() {
  console.log('x', this.x);
}

const funComX = func.bind({
  x: 1,
});
funComX();

//Com aplly não precisa de nova função, para executar basta passar o objeto para o apply:
function fun2() {
  console.log('y', this.y);
}
fun2.apply({ y: 3 });
