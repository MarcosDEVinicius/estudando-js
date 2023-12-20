function cachorro(raca,cor,patas) {
  this.raca = raca
  this.cor = cor
  this.patas = patas
  this.uivar = function(){
    console.log("auuuu")
  }
}

let husky = new cachorro('Husky','cinza', 4)

husky.uivar()


