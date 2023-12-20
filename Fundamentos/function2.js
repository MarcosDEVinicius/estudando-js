//armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){
  console.log(a + b)

}

imprimirSoma(3, 3)

//armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
  return a + b
}

console.log(soma(2,4))

// retorno implicito apenas com uma sentença de código

const subtracao = (a,b) => a - b
console.log(subtracao(2,3))


 