/* Com o método all, podemos resolver várias promessas de uma vez só
Ou seja, passamos elas por array e quando a última for resolvida , receberemos a resposta */

const p1 = new Promise(function(resolve,reject){
  setTimeout(() => {
    resolve(10)
    
  }, 5000);
})

const p2 = Promise.resolve(15)

const p3 = new Promise((resolve,reject) => {
  resolve(20)
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))