/* nas async functions, podemos determinar uma instrução await;
que vai esperar uma promise ser resolvida, para apresentar os resultados; */

function somaComDelay(a,b){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a+b)
      
    }, 1000);
  })
}

async function resSoma(a,b,c){

  let x = somaComDelay(a,b)
  let y = c

  return await x + y
}

resSoma(1,2,3).then(value => console.log(value))