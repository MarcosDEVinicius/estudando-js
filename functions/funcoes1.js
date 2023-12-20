const soma = function(a,b){
  return a + b
}

console.log(soma(3,5))
const soma1 = soma(3,7)

console.log('A soma da soma1 e:' + soma1)

function podeDirigir(idade, cnh){
  if(idade >= 18 && cnh == true){
    console.log('Pode dirigir')
  }else{
    console.log('Nao pode dirigir')
  }

}

console.log(podeDirigir(19,true));
console.log(podeDirigir(44,0));// 0 eh a mesma coisa que false
console.log(podeDirigir(19,1));//1 eh a mesma coisa que true