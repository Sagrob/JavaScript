// const Prompt = require('prompt-sync')
// const prompt = Prompt()

// Calculo para latas e galões de tinta
let area = parseFloat(prompt('Informe a área em m^2: '))

let lata = 18 * 6
let galao = 3.6 * 6

//Lata
let quantidade_latas = parseInt((area/(lata+0.1))+1)
let valor = (quantidade_latas * 80.00).toFixed(2)
alert(`A quantidade de tinta em latas é: ${quantidade_latas} latas\nO valor é: ${valor}`)


//Galão
quantidade_latas = parseInt((area/(galao+0.1))+1)
valor = (quantidade_latas * 25.00).toFixed(2)
alert(`A quantidade de tinta em galões é: ${quantidade_latas} galões\nO valor é: ${valor}`)


//latas e galões
quantidade_latas = parseInt(area/lata)
quantidade_galoes = parseInt((area%lata)/galao)
valor = (quantidade_latas * 80.00 + quantidade_galoes * 25).toFixed(2)
alert(`A quantidade de tinta em latas é: ${quantidade_latas} latas\nA quantidade de tinta em galões é: ${quantidade_galoes} galões\nO valor é: ${valor}`)
