const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validarDataNasc.test("27/12/2001"))
console.log(validarDataNasc.test("07/12/2001"))
console.log(validarDataNasc.test("00/00/0000"))
console.log(validarDataNasc.test("10/5/2001"))
console.log(validarDataNasc.test("1/5/2001"))
console.log(validarDataNasc.test("10/5/23"))

