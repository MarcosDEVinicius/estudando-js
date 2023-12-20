let elemento = document.querySelector("#Título-principal");

console.log('largura: ' + elemento.offsetWidth)//considera as bordas
console.log('altura: ' + elemento.offsetHeight)

console.log('largura: '+ elemento.clienteWidth)//Não considera as bordas
console.log('altura: ' + elemento.clientHeight)