/*
const carro = {}
carro.nome = "Maybach"
carro.ano = 2019
carro.idade = function () {
  let date = new Date()
  return date.getFullYear() - carro.ano

}

console.log(`${carro.idade()} anos`)
*/
const carro = {
  nome: "Supra",
  ano: 1999,
  idade: function () {
    let date = new Date()
    return date.getFullYear() - carro.ano
  }

}

console.log(`${carro.idade()} anos`)

const result = (`${carro.idade()} anos`)
module.exports = result