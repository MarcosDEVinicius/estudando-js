/* Podemos atrelar um evento quando a página carrega, pelo evento load

E antes do usuário fechar a página pelo evento beforeunload*/

/* window.addEventListener("load",function(){
  this.alert("Assine os nossos termos antes")
}) */

window.addEventListener("beforeunload",function(e){
  defaultPrevent(e)
})