const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas; funcional e orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/*
Usar a função bind pode ser uma ótima maneira
de tornar o código mais legível e limpo em determinadas situações, 
especialmente quando você precisa controlar explicitamente o 
valor de this em funções.
Vou te dar um exemplo para ilustrar como o uso do bind pode ser benéfico:

Suponha que você esteja lidando com um evento de clique em um botão e deseja chamar
 um método de um o
bjeto como manipulador do evento. O uso do bind pode tornar o código mais claro, 
evitando problemas com o contexto de this.
 */

//sem o uso de bind
const objeto = {
  nome: "Exemplo",
  fazerAlgo: function () {
    console.log(`Olá, eu sou ${this.nome}.`);
  },
};

const botao = document.querySelector("button");
botao.addEventListener("click", function () {
  objeto.fazerAlgo(); // Isso causaria um erro porque o 'this' não se refere ao objeto.
});

//com o uso de bind

const objeto1 = {
  nome: "Exemplo",
  fazerAlgo: function () {
    console.log(`Olá, eu sou ${this.nome}.`);
  },
};

const botao1 = document.querySelector("button");
botao.addEventListener("click", objeto.fazerAlgo.bind(objeto));



