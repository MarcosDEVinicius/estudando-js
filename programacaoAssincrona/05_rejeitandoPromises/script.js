/* Além do resolve, há o método reject.
Que é quando determinada lógica não satisfaz nosso programa,
então podemos ir para outra com o reject, em vez do resolve
Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o THEN, por exemplo */


function verificarNumero(num) {
  return new Promise((resolve,reject) =>{
    if(num == 2){
      resolve(console.log(`O número é ${num}`))
    }else{
      reject(new Error("falhou"))
    }
  })
}

verificarNumero(2)
verificarNumero(3)