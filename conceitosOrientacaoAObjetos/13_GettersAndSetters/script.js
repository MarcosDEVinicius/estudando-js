//get: serve para resgatar o valor de uma propriedade
//set : serve para alterar o valor de uma propriedade

class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("au auu");
  }

  get getCor(){
    return this.cor
  }

  set setCor(cor){
    this.cor = cor
  }
}

let pastor = new Cachorro('Pastor Alemao', 'Sem cor')

console.log(pastor)

pastor.setCor = 'Marrom'

console.log(pastor.getCor)


