// const Prompt = require ('prompt-sync')

//Calcula o IR
function calcula_ir(salario){
    if(salario > 2500){
        return salario * 0.2
    }
    else if(salario > 1500){
        return salario * 0.1
    }
    else if(salario > 900){
        return salario * 0.05
    }
    else{
        return 0
    }
}

//Informa a faixa do IR
function faixa_ir(salario){
    if(salario > 2500){
        return '20%'
    }
    else if(salario > 1500){
        return '10%'
    }
    else if(salario > 900){
        return '5%'
    }
    else{
        return 'ISENTO'
    }
}

//Calculo INSS
function calcula_inss(salario){
    return salario * 0.1
}

//Calculo FGTS
function calcula_fgts(salario){
    return salario * 0.11
}

//Calculo SINDICATO
function calcula_sindicato(salario){
    return salario * 0.03
}
function relatorio(hora, valor){
    const salario = valor * hora
    alert(`Salário Bruto: (${hora}* ${valor}): R$ ${hora*valor}\n(-) IR (${faixa_ir(valor*hora)}): R$ ${calcula_ir(salario)}\n(-) INSS (10%): R$ ${calcula_inss(salario)}\nFGTS (11%): R$ ${calcula_fgts(salario)}\nTotal de descontos: R$ ${calcula_ir(salario)+calcula_inss(salario)}\nSalário Líquido: R$ ${salario-(calcula_ir(salario)+calcula_inss(salario))}`)
}
function entrada_dados(){
    // const prompt = Prompt()

    horas_mes = parseFloat(prompt('Informe a quantidade de horas trabalhadas: '))
    valor_hora = parseFloat(prompt('Informe o valor da hora de trabalho: '))
    relatorio(horas_mes, valor_hora)
}

entrada_dados()