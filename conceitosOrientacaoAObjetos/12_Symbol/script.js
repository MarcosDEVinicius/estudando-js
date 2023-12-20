class Cachorro{
  constructor(raca, patas, cor){
    this.raca = raca
    this.cor = cor
  }

  latir(){
    console.log('au auu')
  }
}

Cachorro.prototype.raca = 'SRD'

let patas = Symbol()

Cachorro.prototype[patas] = 4

let labrador = new Cachorro('labrador' , 'amarelo')

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

//acessando symbol

console.log(Cachorro.prototype[patas])