function divisao(a,b){
    return a/b;
}

function multia(a,c){
    return a*c;
}

function multig(c,b){
    return c*b;
}
function jb(){
const tank = document.getElementById("fname");
const gasolina = document.getElementById("lname");
const alcool = document.getElementById("mname");

let resultado = divisao(gasolina, alcool);
console.log(resultado)
let resultadoa = multia(alcool,tank);
console.log(resultadoa)
let resultadob = multig(gasolina,tank);
console.log(resultadob)
if (parseFloat(resultado) < 0,7){
    resultado = multia(alcool,tank);
    alert("Compensa encher o tanque com álcool, e o valor para encher o tanque é de R$" + resultadoa);
}
else if (parseFloat(resultado) > 0,7){
    resultado = multig(gasolina,tank);
    alert("Compensa encher o tanque com gasolina, e o valor para encher o tanque é de R$" + resultadob);
}
}