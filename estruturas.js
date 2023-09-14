function lancar_dados(){
    let numero = 1+((Math.round(Math.random()*100)%6))
    return numero
}
let dados = lancar_dados()

//Estrutura de desvio condicional / controle
function verifica_vencerdo(dado){
if(dados === 6){
    console.log(`Você tirou: ${dados}, Parabéns você ganhou mais um dado!`)
}
else{
    console.log(`Você tirou: ${dados}, Não ganhou nenhum dado.`)
}
}

//Estruturas de repetição

let contador = 0
while(dados !== 6){
    dados = lancar_dados()
    contador++
}
verifica_vencerdo(dados)
console.log(contador)

//do-while
do{
    console.log(`Diferença`)
    dados = lancar_dados()
}while(dados !== 6)

verifica_vencerdo(dados)
console.log(contador)

//for
//  inicio
//        teste
//               incremento
//
for(x = 0;x <= 10;x++){
    console.log(x)
}