class Mamifero{
  constructor(patas){
    this.patas = patas
  }
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Cachorro extends Mamifero{
  constructor(patas,raca){
    super(patas,patas)
    this.raca = raca
  }

  latir(){
    console.log("auau")
  }

}

let pug = new Cachorro(4,'Pug')

console.log(pug)

pug.latir()

console.log(new Cachorro instanceof Mamifero)//utililzar o instaceof para saber quem eh o pai do objeto. de algo instancia saiu aquele objeto
console.log(coiote instanceof Mamifero)


