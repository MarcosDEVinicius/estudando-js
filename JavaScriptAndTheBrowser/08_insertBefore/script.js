let novoElemento = document.createElement("p")
let texto = document.createTextNode("Alguma coisa")

novoElemento.appendChild(texto)


let elementoAlvo = document.querySelector("#Título-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento,elementoAlvo)


