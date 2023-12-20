let onibus = {
  rodas: 8,
  limiteDePassageiros: 40,
  portas: 2,
  janelas: 20

}

delete onibus.rodas

console.log(onibus.rodas)

onibus.janela = 20

console.log(onibus)
console.log(onibus.janela)