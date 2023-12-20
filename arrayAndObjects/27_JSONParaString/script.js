//podemos converter o JSON para uma string de forma facil, ou tambem uma string para JSON

let pessoa = {
  "nome": "Vinicius",
  "idade":22,
  "profissao": "programador",
  "hobbies":["Video game", "leitura","correr"]
}

let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[2])