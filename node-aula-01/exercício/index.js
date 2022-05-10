const imc = require('./imc');

const dados = (weight, height) => {
  console.log(`O seu IMC é ${imc(weight, height).toFixed(2)}`);
};

dados(55, 1.55);
