let frutas = ["Pera","Maça","Melancia","Morango","Laranja","Kiwi"]

frutas.pop()
console.log(frutas)

frutas.push("Abacate")
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.unshift("Abobora")
console.log(frutas)

frutas.splice(4,1)
console.log(frutas)

const novasFrutas = frutas.slice(2)
console.log("Novo array a partir do indice 2 " + novasFrutas)







