/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */
class Pessoa {
  #idade;

  constructor(idade) {
    this.#idade = idade;
  }

  #verificaIdade() {
    if (this.#idade > 18) {
      console.log('Maior de Idade');
    } else {
      console.log('Menor de Idade');
    }
  }

  get idade() {
    return this.#verificaIdade();
  }

  set atribuiIdade(idade) {
    this.#idade = idade;
  }
}

let pessoa = new Pessoa(20);
pessoa.idade;
pessoa.atribuiIdade = 15;
pessoa.idade;

//SEM Encapsular
// const idade = 34;

// function _verificaIdade() {
//   if (idade > 18) {
//     console.log("Maior de Idade");
//   } else {
//     console.log("Menor de Idade");
//   }
// }
// function AtribuiIdade(idade) {
//   idade = idade;
// }

// let default_pessoa = _verificaIdade();
// console.log(default_pessoa);
