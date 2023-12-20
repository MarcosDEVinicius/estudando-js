function criarCachorro(raca, patas, cor){
  let cachorro = Object.create({})
  cachorro.patas = patas
  cachorro.cor = cor
  cachorro.raca = raca
  return cachorro
}

let doberman = criarCachorro('Doberman' , 4, 'preta')

console.log(doberman)