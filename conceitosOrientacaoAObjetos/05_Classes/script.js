let cachorro = {
  raca: 'SRD'
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemao'

console.log(pastorAlemao.raca);