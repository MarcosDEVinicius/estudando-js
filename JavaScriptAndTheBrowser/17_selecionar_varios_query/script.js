/* Para selecionar diversos elementos com query, podemos utilizar o método querySelectorAll

Em vez de um, podemos pegar todos os elementos semelhantes com o seletor do CSS*/

let itens = document.querySelectorAll(".itens-vermelhos");

console.log(itens[0].style.color)
itens[0].style.color = 'red'

let itens2 = document.querySelectorAll(".itens-azuis");

console.log(itens2)