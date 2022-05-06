//Escreva um erro customizado sobre o assunto qualquer

const checkRegistration = (id, password) => {
  if (typeof id !== 'number' || typeof password !== 'number') {
    throw new Error('Values must be numeric');
  }
};

const verifyIsNumber = (id, password) => {
  try {
    checkRegistration(id, password);
    return `id ${id} + password ${password}`;
  } catch (error) {
    throw error.message;
  }
};

console.log(verifyIsNumber(01, 'abcdk'));
