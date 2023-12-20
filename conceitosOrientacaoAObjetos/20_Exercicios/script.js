class ContaBancaria{
  constructor(saldoContaCorrente,saldoContaPoupanca,jurosPoupanca){
    this.saldoContaCorrente = saldoContaCorrente
    this.saldoContaPoupanca = saldoContaPoupanca
    this.jurosPoupanca = jurosPoupanca
  }

  deposito(valor){
    this.saldoContaCorrente += valor
  }

  saque(valor){
    this.saldoContaCorrente -= valor
  }

  transferenciaContaPoupanca(valor){
    this.saldoContaCorrente -= valor
    this.saldoContaPoupanca += valor
  }

  transferenciaContaCorrente(valor){
    this.saldoContaPoupanca -= valor
    this.saldoContaCorrente += valor
  }

  jurosDeAniversario(){
    let juros = (this.saldoContaPoupanca * this.jurosPoupanca) / 100
    this.saldoContaPoupanca += juros
  }

}

class ContaEspecial extends ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2);
  }
}

let contaDoBanco = new ContaBancaria(1000, 5000, 1)

console.log(contaDoBanco)

contaDoBanco.deposito(5000)
console.log(contaDoBanco)

contaDoBanco.saque(500)
console.log(contaDoBanco)

contaDoBanco.transferenciaContaPoupanca(3000)
console.log(contaDoBanco)

contaDoBanco.jurosDeAniversario()
console.log(contaDoBanco)

let contaDoBanco2 = new ContaEspecial(10000, 50000, 1)
console.log(contaDoBanco2)

contaDoBanco2.saque(500)
console.log(contaDoBanco2)

contaDoBanco2.deposito(1000)
console.log(contaDoBanco2)

contaDoBanco2.jurosDeAniversario()
console.log(contaDoBanco2)