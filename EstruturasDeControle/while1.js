//quantidade indertemianda numa situacao

function getInteirioAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)

}

let opcao = 0 

while (opcao != -1) {
  opcao =  getInteirioAleatorio(-1, 10)
  console.log('opção escolhida foi ' + opcao)

}
console.log('ate a proxima')