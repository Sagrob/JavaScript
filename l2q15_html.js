// const Prompt = require('prompt-sync')

const verificar_triangulo = ((a,b,c) =>{
    if(a + b > c && a + c > b && b + c > a){
        alert('As medidas formam um triangulo')
        return true
    }
    else{
        alert('Não forma triangulo')
    }
    return false
})

const classifica_triangulo = ((a,b,c) =>{
    if(a == b && b == c && a == c){
        alert('Triangulo Equilátero')
    }
    else if(a != b && b != c && a != c){
        alert('Triangulo Escaleno')
    }
    else{
        alert('Triangulo Isósceles')
    }
})
// const prompt = Prompt()

const a = parseInt(prompt('Informe o valor de A: '))
const b = parseInt(prompt('Informe o valor de B: '))
const c = parseInt(prompt('Informe o valor de C: '))

if(verificar_triangulo(a,b,c)){
    classifica_triangulo(a,b,c)
}