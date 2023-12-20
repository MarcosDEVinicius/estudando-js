console.log(Math.ceil(6.1))//arredonta para cima, ou seja, 7

const obj1 = {}
obj1.name = 'bola'

console.log(obj1.name)

function Obj(name) {
  this.name = name
  this.exec = function(){
    console.log('exec...')
  }

}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
