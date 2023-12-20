/* Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown

Podemos realizar acçoes nesses eventos também

Keyup é quando soltamos a tecla

Keydown é quando apertamos*/

window.addEventListener("keydown", function(e){
  
  if(e.key == 'q') {
    console.log("Apertou a tecla q ")
  }
  
})

window.addEventListener("keyup",function(e){ //Melhor opção quando estamos falando de evento de tecla
  
  if(e.key == "Enter"){
    console.log("Soltou o enter ")
  }
})

