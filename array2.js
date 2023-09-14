let nome = ['Alessandra', 'Laise', 'João']
let telefone = [998764421, 998769081, 998765671]
let alunos_agenda = [nome, telefone]


function pegar_telefone(nome){
        let aluno = alunos_agenda[0]
        let telefone = alunos_agenda[1]

        if(aluno.includes(nome)){
           let indice = alunos_agenda[0].indexOf(nome)
           console.log(telefone[indice])
        }
        else{
            console.log('Aluno não cadastrado')
        }
}
console.log(
    `Existem ${alunos_agenda[0].length} alunos na lista`
)
alunos_agenda[0].push('Moises')
alunos_agenda[1].push(987656678)
console.log(nome)
console.log(telefone)
console.log(alunos_agenda)
pegar_telefone('Moises')

/* push = adicionar
   pop = apagar
   includes = procurar existencia
   
   anotar no google drive dps */

console.log(
    `Existem ${alunos_agenda[0].length} alunos na lista`
)

function exibir_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]
    
    let tamanho = aluno.length

    for(posicao=0;posicao<tamanho;posicao++){
        console.log(
            `${aluno[posicao]} : ${telefone[posicao]}`
        )
    }  
}

function input(mensagem){
    const prompt = require("prompt-sync")();
    
    let entrada = prompt(`${mensagem}: `);
    return entrada
}

function cadastra_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]
    

    const novoaluno = input('Qual o nome do aluno')
    aluno.push(novoaluno)
    
    if(aluno.includes(novoaluno)){
        const novotelefone = input(`Qual o telefone do ${novoaluno}`)
        telefone.push(novotelefone)
    }
    else{
        console.log('Erro ao cadastrar')
    }
}
cadastra_agenda()
pegar_telefone('Moises')
exibir_agenda()