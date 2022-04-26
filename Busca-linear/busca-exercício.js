// function search(produtos, id) {
//   for (const produto of produtos) {
//     if (produto.id == id) {
//       return `Seu celular ${produto.descricao} custa ${produto.preco}`;
//     }
//   }
//   return 'Que pena não encontrado';
// }

// const produtos = [
//   { id: 1, descricao: 'Iphone 11', preco: 3704.05 },
//   { id: 2, descricao: 'Samsung Galaxy', preco: 1499.0 },
//   { id: 3, descricao: 'Motorola Moto G20', preco: 1259.99 },
//   { id: 4, descricao: 'Xaomi Redmi', preco: 999.0 },
// ];
// console.log(search(produtos, 2));

// class Search {
//   constructor(produtos, id) {
//     this.produtos = produtos;
//     this.id = id;
//   }

//   buscaPorId(id) {
//     return this.produtos.find((produto) => produto.id === id);
//   }
// }

// class Produto {
//   constructor(id, descricao, preco) {
//     this.id = id;
//     this.descricao = descricao;
//     this.preco = preco;
//   }
// }

// let produtos = [];

// const prod1 = new Produto(1, 'iPhone 11', 3704.05);
// const prod2 = new Produto(2, 'Galaxy', 1499.0);
// const prod3 = new Produto(3, 'Xiaomi', 999.0);

// produtos = [prod1, prod2, prod3];
// const search = new Search(produtos, 2);
// console.log(search.buscaPorId(2));

// function search(produtos, id) {
//   return produtos.find((produto) => produto.id === id);
// }

// class Produto {
//   constructor(id, descricao, preco) {
//     this.id = id;
//     this.descricao = descricao;
//     this.preco = preco;
//   }
// }

// let produtos = [];
// const prod1 = new Produto(1, 'iPhone 11', 3704.05);
// const prod2 = new Produto(2, 'Motorola Moto G20', 1259.99);
// const prod3 = new Produto(3, 'Galaxy', 1499.0);
// const prod4 = new Produto(4, 'Xiaomi', 999.0);

// produtos = [prod1, prod2, prod3, prod4];
// console.log(search(produtos, 1));

function search(produtos, id) {
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    if (produto.id == id) {
      //return `Seu celular ${produto.descricao} custa ${produto.preco}`
      //console.log(produto);
      return `Detalhes do seu celular ${JSON.stringify(
        produto
      )} e posição do produto ${i}`;
    }
  }
  return 'Que pena não encontrado';
}

class Produto {
  constructor(id, descricao, preco) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
  }
}

let produtos = [];
const prod1 = new Produto(1, 'iPhone 11', 3704.05);
const prod2 = new Produto(2, 'Motorola Moto G20', 1259.99);
const prod3 = new Produto(3, 'Galaxy', 1499.0);
const prod4 = new Produto(4, 'Xiaomi', 999.0);

produtos = [prod1, prod2, prod3, prod4];
console.log(search(produtos, 3));
