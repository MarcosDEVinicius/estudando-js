/* Podemos encontrar elementos de uma forma mais fácil do que se movendo pelo DOM.

Como no HTML temos tags, classes e ids, o javaScript nos possibilita utilizar estas 
características para encontrar o que desejamos.

Há alguns métodos para isto: getElementsByTagName, getElementById, getElementsByClassName, e também o querySelector.

*/

//Encontrando elementos: por tag

console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('p'))

//Encontrando elementos: por Id

console.log(document.getElementById("Título-principal"));

//Encontrando elementos: por classes

console.log(document.getElementsByClassName('itens-azuis'))
console.log(document.getElementsByClassName('itens-vermelhos'))

//Encontrando elementos: por querySelector

/* Um método que se assemelha a grande funcionalidade do jQuery
Nos permitindo encontrar elementos pelo seus seletores de CSS
Falicita muito a vida na programação 
# = pra dizer que é um ID
. = pra dizer que é uma classe*/

console.log(document.querySelector('#container-principal h1'))

console.log(document.querySelector('#segundo-container h1'))

console.log(document.querySelector('div div p'))

console.log(document.querySelector('footer h3'))

console.log(document.querySelector('ul .itens-azuis'))




