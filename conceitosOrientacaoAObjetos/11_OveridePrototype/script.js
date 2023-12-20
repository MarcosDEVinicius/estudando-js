class Cachorro{
  constructor(raca, patas, cor){
    this.raca = raca
    this.cor = cor
  }

  latir(){
    console.log('au auu')
  }
}

Cachorro.prototype.patas = 4
Cachorro.prototype.raca = 'SRD'

let labrador = new Cachorro('labrador' , 'amarelo')

console.log(labrador)
labrador.latir()
console.log(Cachorro.prototype.raca)

