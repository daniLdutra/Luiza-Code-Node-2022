const fs = require('fs');

const processarAposEscrita = (err) => {
  console.log('Arquivo foi escrito', err);
};

fs.writeFile('saida.txt', 'Escrito com sucesso', processarAposEscrita);
