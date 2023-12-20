const validarMarcas = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validarMarcas.test("Marca: Nike"))
console.log(validarMarcas.test("Marca: Adidas"))
console.log(validarMarcas.test("Marca: Puma"))
console.log(validarMarcas.test("Marca: Asics"))
console.log(validarMarcas.test("Marca: Nikee"))
console.log(validarMarcas.test("Marca: asics"))
console.log(validarMarcas.test("Marca: adsgcs"))
console.log(validarMarcas.test("fd adsgcs"))
