let pessoa = { 
  maos: 2 ,
} 

  console.log(Object.getPrototypeOf(pessoa)) 
  console.log(Object.getPrototypeOf(pessoa) == Object.prototype)

  console.log(pessoa.hasOwnProperty('maos'))

  const pessoaNova = Object.create(pessoa)

  console.log(pessoaNova.maos)

  console.log(pessoaNova.hasOwnProperty('maos')) //'hasOwnProperty' ver se tem a propriedade
  
  console.log(Object.getPrototypeOf(pessoaNova) === pessoa) 
