/* Podemos criar funções assíncronas com a palavra reservada async.

elas retornam uma Promise

Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada
*/

async function somar (a,b){
  return a + b
}

somar(2,5).then(value => console.log(value))