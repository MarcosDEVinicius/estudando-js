/* Podemos remover quando acharmos necessário

Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento
está escutando*/


let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

function msg(e){
  console.log(e)
}

btn1.addEventListener("click",msg)

btn2.addEventListener("click",function(event) {
  console.log(event)
})



