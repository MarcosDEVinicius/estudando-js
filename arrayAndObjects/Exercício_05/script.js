let nomesPessoas = ["Vinicius", "Joao", "Tarsila","Edgar","Alessandro"]

for(let i = 0;i <= nomesPessoas.length; i++){
  if(nomesPessoas.includes("Vinicius")){ //forma mais certa de encontrar o nome no array eh utilizando o metodo includes
    console.log("Nome encontrado")
  }else{
    console.log("Nome nao encontrado")
  }
  
}
