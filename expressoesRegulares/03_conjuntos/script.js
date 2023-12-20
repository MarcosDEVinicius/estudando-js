const reg1 = /[12345]/
//desse modelo acima nao é o ideal pois gera conflito usar dois numeros
console.log(reg1.test("temos o numero 6"))
console.log(reg1.test("temos o numero 3"))
console.log(reg1.test("temos o numero 23")) 
console.log(reg1.test("temos o numero 60"))

//melhor forma

const reg2 = /[0-9]/

console.log(reg2.test(""))