function somaMulti() {
  let soma = 0

  for (let int = 1; int < 1000; int++) {
    if (int % 5 === 0 || int % 7 === 0) {
      soma += 0
    }
  }

  return soma
}

const result = somaMulti()
console.log(`O resultado da soma dos múltiplos de 5 ou 7 abaixo de 1000 é ${result}`)