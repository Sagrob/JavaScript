const Prompt = require('prompt-sync')
const prompt = Prompt()

let area = parseFloat(prompt('Informe a área em m^2: '))

let lata = 18 * 6
let galao = 3.6 * 6

//Lata
let quantidade_latas = parseInt((area/(lata+0.1))+1)
let valor = (quantidade_latas * 80.00).toFixed(2)
console.log(`A quantidade de tinta é: ${quantidade_latas} latas`)
console.log(`O valor é R$ ${valor}`)


//Galão
quantidade_latas = parseInt((area/(galao+0.1))+1)
valor = (quantidade_latas * 25.00).toFixed(2)
console.log(`A quantidade de tinta é: ${quantidade_latas} galões`)
console.log(`O valor é R$ ${valor}`)

//latas e galões
quantidade_latas = parseInt(area/lata)
quantidade_galoes = parseInt((area%lata)/galao)
valor = (quantidade_latas * 80.00 + quantidade_galoes * 25).toFixed(2)
console.log(`A quantidade de tinta é: ${quantidade_latas} latas`)
console.log(`A quantidade de tinta é: ${quantidade_galoes} galões`)
console.log(`O valor é: ${valor}`)