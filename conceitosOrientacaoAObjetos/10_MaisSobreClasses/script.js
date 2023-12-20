class Cachorro{
  constructor(raca, patas, cor){
    this.raca = raca
    this.cor = cor
  }

  latir(){ //nos construtores so pode adicionar metodos e nao propriedades
    console.log('au auu')
  }
}
Cachorro.prototype.patas = 4

let labrador = new Cachorro('labrador' , 'amarelo')

console.log(labrador)
labrador.latir()

