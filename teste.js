const Prompt = require('prompt-sync')
const prompt = Prompt()

let numero1 = parseFloat(prompt("Insira o primeiro numero: "))
let numero2 = parseFloat(prompt("Insira o segundo numero: "))
let numero3 = parseFloat(prompt("Insira o terceiro numero: "))
let numero4 = parseFloat(prompt("Insira o quarto numero: "))
let nota_semestral1 = (numero1+numero2)/2
let nota_semestral2 = (numero3+numero4)/2
console.log(`No primeiro semestre foi: ${nota_semestral1}`)
console.log(`No segundo semestre foi: ${nota_semestral2}`)
console.log(`Sua nota final foi: ${(nota_semestral1+nota_semestral2)/2}`)