function findMaxNumber(arr) {
  if (arr === 0) {
    return undefined;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let meuArray = [5,10,15,20]

let maiorNumero = findMaxNumber(meuArray)

console.log('meu maior numero e ' + maiorNumero)