const checkEven = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    const sum = num1 + num2;
    sum % 2 === 0
      ? resolve(`Operação concluída com sucesso e o número somado foi: ${sum}`)
      : reject(`Resultado não é par: ${sum}`);
  });
};

const runNumbers = async () => {
  try {
    let result = await checkEven(1, 4);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
runNumbers();
