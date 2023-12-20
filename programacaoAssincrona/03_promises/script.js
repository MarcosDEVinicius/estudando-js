/* As promises são ações assíncronas que podem produzir um valor em algum momento no código

Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código

O objeto das promises é Promise, resolve é o método que resolve uma Promise,
 o then é o que faz ela poder ser executada em um pónto futuro 
 
 Para entender o método resolve e o método reject em Promise, é importante primeiro compreender o 
 conceito de uma Promise em si. 
 Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca. Ela tem três estados possíveis:

Pending (Pendente): O estado inicial de uma Promise. Neste estado, a operação assíncrona ainda não foi concluída.

Fulfilled (Cumprida): A operação assíncrona foi concluída com sucesso e um valor resultante está disponível.
Isso é chamado de "resolução" da Promise.

Rejected (Rejeitada): A operação assíncrona falhou, e um motivo (uma razão para a falha) está disponível.
 */

 let promessa = Promise.resolve(4 + 8)
 console.log('Algum código')

 promessa.then((value) => console.log(`A soma é ${value}`))

 let p = Promise.resolve(5)
  
 console.log("Outro código")

 console.log(p)

 p.then((value) => {return value + 5})
 .then((value) => {console.log(value)})//é possivel manipular usando o then