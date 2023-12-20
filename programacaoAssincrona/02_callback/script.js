/* Uma das vertentes a programação assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks
callback é uma função que faz uma ação após algum acontecimento no código
podemos realizar um callback com a função setTimeout,exemplo */

console.log("Ainda não chamou callback")
setTimeout(function(){
  console.log("Chamou o callback")
},1000)

console.log("ainda não chamou o callback")