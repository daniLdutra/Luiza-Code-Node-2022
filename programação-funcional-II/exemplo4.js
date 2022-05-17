//Funções encadeadas.
//Promises

const validar = async (registro) => {
  console.log('Validar', registro);
  return registro;
};
const salvar = async (registro) => {
  console.log('Salvar registro', registro);
  return registro;
};

const processarRegistro = async (registro) => {
  return Promise.resolve(registro).then(validar).then(salvar);
};
processarRegistro({ id: 1 }).then(console.log);

//Validar { id: 1 }
//Salvar registro { id: 1 }
//{ id: 1 }
