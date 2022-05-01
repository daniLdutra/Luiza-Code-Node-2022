/*
 * 3 - Dado o objeto, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'Brazil',
  city: 'São Paulo',
  state: 'SP',
  postalCode: '01001001',
  neighbohur: 'Centro',
};

const { firstName, lastName, age, ...endereco } = person;
console.log(endereco);
