//usar o console.log() em lugares estrategios no codigo, a fim de ver o valor alterando
// eh usado mais quando tem uma situacao complexa 

let a = 1
let b = 2
let c = 3

if(c > a){
 a = b
 console.log(a)
 console.log(b)
 console.log(c)
}

for(let i = 5; i > 0; i--){
  b++
  a = a + c + 1
  c += 2
  console.log(a);
  console.log(b);
  console.log(c);
}


