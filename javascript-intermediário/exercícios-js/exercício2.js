// 2 -  Dado o objeto, extraia cada propriedade com destructuring

const person = {
  firstName: 'John',
  lastName: 'Doe',
};

const { firstName } = person;
const { lastName } = person;

console.log(firstName, lastName);
