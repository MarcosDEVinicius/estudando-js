/*  Generators funcionam semelhantes as Promises

Onde ações podem ser pausadas e continuadas depois

Caracterizados pelo function* e yield, veja

O yield pode salvar o erstado da variável*/

function* criardorId(){
  let id = 0

  while(true){
    yield id++
  }
}

let criateId = criardorId()

console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)
console.log(criateId.next().value)

console.log(criateId.next())