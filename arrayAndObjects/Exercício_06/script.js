let carros = ["Camaro","Tracker","Lamborguini","Etios","Hilux"]
let marcas = ["Toyota","Bmw","Ferrari"]

function verificarElementos (arr){

  if(arr.length >= 5){
    console.log("Muitos elementos")
  }else{
    console.log("Poucos elementos")
  }

}

verificarElementos(carros)
verificarElementos(marcas)
