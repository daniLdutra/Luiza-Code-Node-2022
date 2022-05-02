/*
começa e termina com uma barra '/'
ele possue um conjunto de intruções
ele possui flags : G => global, M => multiline, I => insisitive (não faz distinção de caracteres maiúsculo e minúsculo)
^ :começo da expressão
\d:espera dígitos []
{}:quantidade que espera
/ :usado na separação \/\
$: significa fim da expressão
+: permite inserir mais dígitos
*/

//Exemplo validação placa de carro:
const placa = 'fjq-5837';
console.log(placa.match(/^[A-Z]{3}\-\d{4}$/gim));

const nomeSobrenome = /^[a-zA-Z]+\s[a-zA-Z]+$/gim; // Nome completo com apenas 1 espaço (nome sobrenome)

const cnpj = /^\d{2}\.\d{3}\.\d{3}\/[0-1]{4}\-\d{2}$/gim; //CNPJ

// const regexCep = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/gim;
// const regexData = /^\d{2}\/\d{2}\/\d{4}$;
// const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$;

// const result = !'123.123.123-22'.match(regexCep);

// console.log(result);

const test = /^[w]{3}\.(netshoes|zattini)\.(com)\.(br)$/;
const site = !!'www.zattini.com.br'.match(test);
console.log(site);
