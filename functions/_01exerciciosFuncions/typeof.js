function detect(dado){
  
  if(typeof dado ==='string'){
    console.log('este dado é uma string')
  }else if(typeof dado === 'number'){
    console.log('Este dado e um number')
  }else if(typeof dado === 'boolean'){
    console.log('Este dado e booleano')
  }else{
    console.log('undefined');
  }
}

detect(true)
detect(12)
detect('teste')
detect()


