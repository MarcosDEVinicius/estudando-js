let dobro = function(a){ // forma normal
  return 2 * a
}

dobro = (a) =>{ //forma rmais reduzida usando arrow functions e podendo colocar quantos atributos quiser
  return 2 * a
}

dobro = a => 2 * a //aperas uma atribuicao 
console.log(dobro(Math.PI))