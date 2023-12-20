function imprimirIdade(idade){
  idade = 17
  console.log(`Você tem ${idade} anos`)

  if(idade >= 18){
    console.log('Maior de idade')
  }else{
    console.log('Menor de idade')
  }
}

imprimirIdade()