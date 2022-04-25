/**
 * Abstração - Exemplos
 * Exercicio 1 - Exemplos de abstração no dia a dia, se quiser implementar pode.*/

class Tv {
  constructor(brand, size, resolution, connections, price) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.price = price;
  }

  turnOn() {
    console.log(
      `TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}, R$ ${this.price}`
    );
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', ' Ethernet', ' WIFI'], 1850.0);
const tv2 = new Tv(
  'Samsung',
  32,
  '4K',
  ['HDMI', ' Ethernet LAN', ' WIFI'],
  1446.0
);
const tv3 = new Tv(
  'Philco',
  32,
  '4K',
  ['HDMI', ' Ethernet', ' WIFI DUAL BAND'],
  1503.06
);

tv1.turnOn();
tv2.turnOn();
tv3.turnOn();

// class FazerCafe {
//   constructor(quantidade_acucar, quantidade_po) {
//     this.quantidade_acucar = quantidade_acucar;
//     this.quantidade_po = quantidade_po;
//   }

//   ferverAgua() {
//     return "Agua está fervida";
//   }

//   adicionarAcucar() {
//     return 'Colocou ' + this.quantidade_acucar + 'colheres de açucar';
//   }

//   adicionarPo() {
//     return 'Colocou ' + this.quantidade_po + 'colheres de café';
//   }

//   coarCafe() {
//     return 'Coou o café';
//   }

//   servirCafe() {
//     return 'café pronto!';
//   }
// }

// let cafe = new FazerCafe(6, 3).servirCafe();
// console.log(cafe);
