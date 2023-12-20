/*
\d- Qualquer digito de caractere
\w - Um catactere alfanumerico ("teste") ou seja letras e numeros
\s - Qualquer caractere de espaço em branco
\D - Catacteres que nao sao digitos
\W - Caracteres nao-alfanumericos
\S - Caracteres que nao seja espaco em branco
. - Qualquer caractere, menos nova linha
*/

const pontoRegex = /./

console.log("aqui comecou o coringa /./ abaixo");

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test("1233"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123sde"))

const dRegex = /\d/ //[0-9] mesma coisa

console.log("Aqui comecou o d abaixo");

console.log(dRegex.test("10"))
console.log(dRegex.test("0"))
console.log(dRegex.test("0sdf"))
console.log(dRegex.test("sdf"))
console.log(dRegex.test(" "))

const dRegex2 = /\D/ //[^0-9] O " ^" significa "NAO" aceita isso

console.log("aqui comecou o D abaixo")

console.log(dRegex2.test("10"));
console.log(dRegex2.test("0"));
console.log(dRegex2.test("0sdf"));
console.log(dRegex2.test("sdf"));
console.log(dRegex2.test(" "));

const sRegex = /\s/; //espacos vazios e tabs

console.log("aqui comeca o s abaixo")

console.log(sRegex.test("10"));
console.log(sRegex.test("0"));
console.log(sRegex.test("0sdf"));
console.log(sRegex.test("sdf"));
console.log(sRegex.test(" "));

const wRegex = /\w/; //so aceita de 0 a 9 e de A a Z

console.log("aqui comeca o w abaixo");

console.log(wRegex.test("10"));
console.log(wRegex.test("0"));
console.log(wRegex.test("0sdf"));
console.log(wRegex.test("sdf"));
console.log(wRegex.test(" "));

const wzaoRegex = /\W/; 

console.log("aqui comeca o W abaixo");

console.log(wzaoRegex.test("10"));
console.log(wzaoRegex.test("0"));
console.log(wzaoRegex.test("0sdf"));
console.log(wzaoRegex.test("sdf"));
console.log(wzaoRegex.test(" "));