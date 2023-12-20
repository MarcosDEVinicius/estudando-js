/* O documento HTML seria a árvore completa

A raiz da árvore é o Document(só a uma raiz)

Cada elemento da árvore chamamos de node(nó)

Conteúdos como textyo são chamado de leaf nodes(as folhas)

Movendo-se através do DOM

Podemos acessar todos os elemtnso a partir de document.body

A partir dele vamos entrando nos childNodes

E depois acessando as propriedades que nos interessam

 */

console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1])

console.log(document.body.childNodes[1].childNodes[1].innerText)


