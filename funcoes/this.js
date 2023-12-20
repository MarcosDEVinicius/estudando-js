const pessoa = {
  nome: "João",
  cumprimentar: function () {
    console.log('ola, eu sou o ' + this.nome);
  },
};

pessoa.cumprimentar(); // Saída: Olá, eu sou João!

class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.marca); // Saída: Toyota

