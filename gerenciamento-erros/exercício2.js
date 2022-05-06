const perfis = [{ nome: 'Daniella', profissao: 'Desenvolvedora' }];

try {
  perfis.toLowercase();
} catch (error) {
  if (error instanceof SyntaxError)
    console.log(`Ocorreu um erro de sintaxe: ${error.message}`);
  else if (error instanceof TypeError)
    console.log(`Ocorreu um erro de tipagem: ${error.message}`);
  else if (error instanceof ReferenceError)
    console.log(`Ocorreu um erro de referência: ${error.message}`);
  else {
    console.log(`Erro genérico: ${error.message}`);
  }
}
