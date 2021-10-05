function bomDia() {
    console.log("Bom dia!");
}
const boatarde = function () {
    console.log('Boa Tarde!!!');
}


// 1) Passar uma função com param para outro função

function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boatarde);
/*

Bom dia!
Boa Tarde!!!
*/

// 2) Retornar uma função a partir de uma outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp);
    };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));// 256

const pot34 = potencia(3)(4);
console.log(pot34);// 81