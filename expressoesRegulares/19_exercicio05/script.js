//^ ele é usado para indicar o inicio de uma linha ou sequencia de caracteres
const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validarNomeUsuario.test("vinicius_123"))
console.log(validarNomeUsuario.test("Vinicius_123"))
console.log(validarNomeUsuario.test("vinicius-123"))

console.log(validarNomeUsuario.test("as"))
console.log(validarNomeUsuario.test("11111111111111111111111111"))
console.log(validarNomeUsuario.test("vinicius-123"))



