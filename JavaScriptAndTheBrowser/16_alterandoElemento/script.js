/* Podemos também muidar as propriedades de estilo dos elementos do Html
com JS

Acessando a propriedade style podemos fazer as mofificações

O estilo é manipulado direto na tag, ou seja, substitui o do CSS(na maioria das vezes)*/

let elemento = document.querySelector("#Título-principal")

setTimeout(function(){
  elemento.style.color = 'red'
  elemento.style.backgroundColor = 'yellow'
  elemento.style.width = '400px'
}, 1000)