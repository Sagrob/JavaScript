const Prompt = require('prompt-sync')

const prompt = Prompt()

let numero1 = prompt('Informe um numero: ')
let numero2 = prompt('Informr outro numero: ')

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

console.log(numero1+numero2)