// somar(3)(4)(5)

function somar(a) {

    if (typeof a === 'string' || typeof a !== 'number') {
        console.log("A não é Número Inválido ou Não é Número")
    }
    return function (b) {
        if (typeof b === 'string' || typeof b !== 'number') {
            console.log("B não é Número Inválido ou Não é Número")
        }
        return function (c) {
            if (typeof c === 'string' || typeof c !== 'number') {
                console.log("C não é Número Inválido ou Não é Número")
            }
            return a + b + c;
        };
    }
}

const somarAB = somar(5)(5);
console.log(somarAB(10));// 20

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y);
        };
    };
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
console.log(r1) // 5
console.log(r2) // 50
