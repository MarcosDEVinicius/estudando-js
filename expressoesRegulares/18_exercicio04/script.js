const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIp.test("127.8.8.1"))
console.log(validarIp.test("127.8.8.12364242"))
console.log(validarIp.test("127.8.8.1.5.6.9"))
console.log(validarIp.test("127.8.8.13"))

console.log(validarIp.test("192"));
console.log(validarIp.test("127.8.2328.13323"));
console.log(validarIp.test("127321.8131.8313.1331"));

