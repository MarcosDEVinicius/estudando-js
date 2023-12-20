//novo recurso do ES2015

// {...} tira uma variavel de um objeto

const pessoa = {
  nome: 'Ana',
  idade: 21,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)



