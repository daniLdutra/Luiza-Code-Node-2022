const fs = require('fs');

fs.appendFile('saida.txt', '\nNovo arquivo anexado', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
