const fs = require('fs');

const processarArquivo = (erro, dados) => {
  if (erro) {
    console.error('Falha ao processar arquivo', erro);
    return;
  }
  console.log('Arquivo carregado...', dados);
  //Transformando
  registro = JSON.parse(dados);
  console.log('Em registro: ', registro);
};

fs.readFile('arquivo.json', 'utf-8', processarArquivo);
