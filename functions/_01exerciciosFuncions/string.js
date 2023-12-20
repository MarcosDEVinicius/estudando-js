function checarTamanhoTexto(texto){
  if(texto.length > 10){
    console.log('TEXTO ACIMA DE 10 CARACTERES')
  }else{
    console.log('Dentro do limite')
  }
  console.log(texto.length)
}
checarTamanhoTexto("Predio")
checarTamanhoTexto("vamos testar se funciona")
checarTamanhoTexto("Prediosert")
checarTamanhoTexto("10-")