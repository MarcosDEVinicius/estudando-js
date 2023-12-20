//funcao sem retorno

function ImprimirMultiplicacao (a, b) {
  console.log(a * b)

}

ImprimirMultiplicacao(8, 8)

//funcao com retorno

function soma(a, b = 0){
  return a + b
}

console.log(soma(3, 5))
