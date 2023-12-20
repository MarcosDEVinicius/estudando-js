//repoe umantigo elemento no DOM, com um novo

let novoElemento = document.createElement("p")
let texto = document.createTextNode("Algum texto")

novoElemento.appendChild(texto)

let heading = document.querySelector("#Título-principal");
let paiHeading = heading.parentNode

paiHeading.replaceChild(novoElemento, heading)