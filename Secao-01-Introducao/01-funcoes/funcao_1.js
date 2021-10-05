let a = 4
console.log(a);

// Function Declaration
function bomDia() {
  console.log('Bom dia!');
}
bomDia();

// Function Expression
const boaTarde = function () {
  console.log('Boa tarde!');
}
boaTarde();

function soma(a, b) {
  return a + b;
}
let resultado = soma(20, 2);
console.log(resultado);//22

resultado = soma(20, 2, 3, 4, 5, 6, 7);
console.log(resultado);//22

resultado = soma(20);
console.log(resultado);//NaN


function soma2(a = 0, b = 0) {
  return a + b;
}
resultado = soma2(20);
console.log(resultado);//20
resultado = soma2();
console.log(resultado);//0
