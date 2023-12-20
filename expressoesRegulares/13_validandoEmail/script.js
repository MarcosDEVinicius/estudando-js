const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("viniciuspessoa13@gmail.com"))
console.log(validarEmail.test("Viniciuspessoa13@gmail.com"))
console.log(validarEmail.test("viniciuspessoa13@outlook.com"))
console.log(validarEmail.test("@outlook.com"))