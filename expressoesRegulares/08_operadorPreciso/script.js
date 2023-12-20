//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const cep = /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("asd"))
console.log(cep.test("88sa117-500"))
console.log(cep.test("88-500"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log("-------------")

console.log(tel.test("(83)98720-4326"))