const data = { message: 'olá mundo!' };

const validateObject = (obj) => {
  try {
    obj.toUpperCase();
  } catch (error) {
    return error;
  }
};

const validar = validateObject(data);
console.log(validar);
