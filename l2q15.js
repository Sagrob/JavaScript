const Prompt = require('prompt-sync')

const verificar_triangulo = ((a,b,c) =>{
    if(a + b > c && a + c > b && b + c > a){
        console.log('As medidas formam um triangulo')
        return true
    }
    else{
        console.log('Não forma triangulo')
    }
    return false
})

const classifica_triangulo = ((a,b,c) =>{
    if(a == b && b == c && a == c){
        console.log('Triangulo Equilátero')
    }
    else if(a != b && b != c && a != c){
        console.log('Triangulo Escaleno')
    }
    else{
        console.log('Triangulo Isósceles')
    }
})
const prompt = Prompt()

const a = parseInt(prompt('Informe o valor de A: '))
const b = parseInt(prompt('Informe o valor de B: '))
const c = parseInt(prompt('Informe o valor de C: '))

if(verificar_triangulo(a,b,c)){
    classifica_triangulo(a,b,c)
}