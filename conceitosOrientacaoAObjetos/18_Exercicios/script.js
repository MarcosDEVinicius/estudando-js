class Endereco{
  constructor(rua, bairro,cidade,estado){
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estados = estado
  }

  set novaRua(novaRua){
    this.rua = novaRua
  }

  set novoBairro(novoBairro){
    this.bairro = novoBairro
  }

  set novaCidade(novaCidade){
    this.cidade = novaCidade
  }

  set novoEstado(novoEstado){
    this.estado = novoEstado
  }
}

let endereco = new Endereco("Rua Marinete da Cunha", "Jardim Oceania","JP", "PB")
console.log(endereco)

endereco.novaRua = "Rua Presidente Venceslau Braz"
console.log(endereco)

endereco.novoBairro = "Bessa"
console.log(endereco);

endereco.novaCidade = "Cabedelo"
console.log(endereco);

endereco.novoEstado = "Paraiba"
console.log(endereco)