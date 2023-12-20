/**O método exec nos retorna um objeto com algumas informações sobre a regex
 * Se nada for encontado, retorna null
 */

const digitos = /\d+/

console.log(digitos.exec("tem o numero 100 aqui"))
console.log(digitos.exec("tem o numero aqui"))