class Carrinho{
  constructor(itens,quantidadeTotal,valorTotal){
    this.itens = itens
    this.quantidadeTotal = quantidadeTotal
    this.valorTotal = valorTotal
  }

}

let carrinho = new Carrinho([
  {
    id: 1,
    nome: "Camisa",
    quantidadeTotal: 1,
    preco: 20
  },

  {id: 2,
    nome: "Calça",
    quantidadeTotal: 2,
    preco: 50

  }
],3, 120)

console.log(carrinho)
