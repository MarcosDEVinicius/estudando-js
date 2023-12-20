/* No mouse temos também eventos mousedown e mouseup

dblclick para ativar com dois cliques*/

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("mousedown", function(){
  console.log("Apertou o botão do mouse ")
})

btn1.addEventListener("mouseup", function(){
  console.log("soltou o botão do mouse ")
})

btn2.addEventListener("dblclick", function(){
  console.log("Clicou duas vezes ")
})

btn2.addEventListener("contextmenu", function(e){
  e.preventDefault() // o preventDefault faz com o que não apareça as coisas ja pre prgramada normalmente
  console.log("Clicou duas vezes ")
})
/* Podemos ativar eventos com a movimentação do mouse também

O nome dele é mousemove

Através desse evento podemos detectar a posição do ponteiro do mouse na tela */

window.addEventListener("mousemove", function(){
  console.log(e.x)
  console.log(e.y)
})

