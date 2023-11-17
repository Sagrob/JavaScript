function divisao(a,b){
    return a/b;
}

function multia(a,c){
    return a*c;
}
function jb(){
const tank = parseFloat(document.getElementById("fname").value);
const gasolina = parseFloat(document.getElementById("lname").value);
const alcool = parseFloat(document.getElementById("mname").value);

let resultado = divisao(gasolina, alcool);
let resultadoa = multia(alcool,tank);
let resultadob = multia(gasolina,tank);

if (resultado >= 0.7){
    resultado = resultadoa;
    alert("Compensa encher "+ tank +" litros com álcool e o valor para encher "+ tank + " litros é de R$" + resultadoa);
}else if(resultado < 0.7){
    resultado = resultadob;
    alert("Compensa encher "+ tank +" litros com Gasolina e o valor para encher "+ tank + " litros é de R$" + resultadob);
}
}
