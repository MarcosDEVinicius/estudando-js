/**Própriedades que servem como funções
 * Ou seja, as ações dos objetos
 * invocamos os métodos da mesma maneira que funções
 */

//exemplo

let cachorro = {
  latir: function(){
    console.log("au au")
  },
  ruivar: function(){
    console.log("auuuuuu")
  }

}
cachorro.latir();
cachorro.ruivar();