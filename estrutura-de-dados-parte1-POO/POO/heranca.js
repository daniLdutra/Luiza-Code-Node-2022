/**
 * Herança Simples - Exemplos
 *
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

class Pessoa {
  constructor(nome, sobrenome, nomeSocial) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeSocial = nomeSocial; // Implementado nome social
  }

  verificaMaioridade(idade) {
    if (idade < 18) {
      console.log('esta pessoa é menor de idade');
    } else {
      console.log('esta pessoa pode beber');
    }
  }
}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, nomeSocial, cpf, cargo) {
    super(nome, sobrenome, nomeSocial, cpf, cargo); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
    this.cargo = cargo;
  }

  tirarCpf(nomeSocial, cpf) {
    return `Nome social é ${nomeSocial} e CPF ${cpf}`; //acessando nome social
  }
  //funcionalidade especifica para PF
  funcCargo(cargo) {
    return `Seu cargo é ${cargo}`;
  }
}

let pessoa = new Pfisica(
  'Maria',
  'Ribeiro',
  'Paulo', //Nome Social
  '11154545471',
  'Programador Júnior'
);
//console.log(pessoa.verificaMaioridade(20));
console.log(pessoa);

class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj, nomeSocial, fundação) {
    super(nome, sobrenome, nomeSocial);
    this.cnpj = cnpj;
    this.fundação = fundação;
  }
  //funcionalidade especifica para PJ
  fundacao(fundação) {
    return `Data de fundação: ${fundação}`;
  }
}

let empresa = new PJuridica(
  'Magalu',
  'LTDA',
  '121321321/0001-10',
  'Paulo', // Extendido para pessoa juridica
  '1957'
);
console.log(empresa);

// class PJuridica2 extends Pessoa {
//   constructor(nome, sobrenome) {
//     super(nome, sobrenome);
//   }

//   setCnpj(cnpj) {
//     this.cnpj = cnpj;
//   }

//   getCnpj() {
//     return this.cnpj;
//   }
// }

// empresa = new PJuridica2('Magalu', 'LTDA');
// empresa.setCnpj('121213212/0001-10');
//console.log(empresa.getCnpj());
