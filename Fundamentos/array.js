/**
 * Array(vetores)
 * uma lista
 * agrupamento de dados
 * unidirecional
 * forma de agrupar varios elementos
 * push adiciona um elemento no array
 * funcao pop retira o ultimo elemento do array
 * o delete, deleta um elemento especifico
 * exemplos
 */

const valores = [7.7, 87.5, 569.5, 345.13]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)














