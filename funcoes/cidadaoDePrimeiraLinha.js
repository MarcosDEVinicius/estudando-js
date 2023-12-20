//Funcao em js e First-class object(citizens)
//HIgher-order function

//criar de forma literal
function fun1 () { }

//armazenar numa variavel
const fun2 = function() { }

//armazenar em um array

const array = [function(a, b) 
  {return a + b}, fun1, fun2]

console.log(array[0](2, 3))

//armazenar num atributo de objeto
const obj = {}
obj.falar = function(){
  return 'Opa '
}

console.log(obj.falar())


//passar uma funcao como parametro

function run (fun){
  fun()
}
run(function () { console.log('Excecutando...') } )

//uma funcao pode retornar/conter uma funcao

function soma (a,b){
  return function (c) {
    console.log(a+ b+ c)
  }
}

soma(2,3)(4)

const soma2 = soma(2,3)
soma2(4)
