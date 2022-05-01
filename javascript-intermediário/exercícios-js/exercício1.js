/**
 * 1-  escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

const dados = ({ cpf, dataNasc, cep }) => {
  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const validationCpf = cpf.match(regexCpf);

  const regexNasc = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const validationDataNasc = dataNasc.match(regexNasc);

  const regexCep = /^[0-9]{5}-[0-9]{3}$/;
  const validationCep = cep.match(regexCep);

  return { validationCpf, validationDataNasc, validationCep };
};

const res = dados({
  cpf: '381.055.048-00',
  dataNasc: '28/10/1985',
  cep: '05742-000',
});
console.log(res);
