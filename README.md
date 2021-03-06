
# JavaScript Funcional e Reativo - PENSE como um Dev JS [2021]

<https://www.udemy.com/course/javascript-funcional/>

https://github.com/cod3rcursos/javascript-funcional

Aprenda a PENSAR como um programador JavaScript e DOMINE o paradigma FUNCIONAL e a programação REATIVA com RxJS!

## <a name="indice">Índice</a>

1. [Seção 1: Introdução](#parte1)
2. [Seção 2: Funções](#parte2)
3. [Seção 3: Projeto #01 - Palavras Mais Usadas](#parte3)
4. [Seção 4: Princípios da Programação Funcional](#parte4)
5. [Seção 5: Programação Reativa com RxJS](#parte5)
6. [Seção 6: Projeto #02 - Migrando Código para RxJS](#parte6)
7. [Seção 7: Lambda Calculus](#parte7)
8. [Seção 8: Conclusão](#parte8)

---

## <a name="parte1">1 - Seção 1: Introdução </a>

1. Introdução do Curso

2. Boas Práticas do Suporte

3. Paradigmas de Programação

4. Declarativo vs Imperativo

5. Paradigma Funcional

6. Código da Próxima Aula

7. Como o JavaScript Funciona?

8. Repositório do Projeto

- https://github.com/cod3rcursos/javascript-funcional

9. Usando o terminal

10. Terminais

- Windows -> https://blog.cod3r.com.br/terminal-no-windows/
- Linux/Mac -> https://blog.cod3r.com.br/terminal-no-macos-e-linux/

[Voltar ao Índice](#indice)

---

## <a name="parte2">2 - Seção 2: Funções </a>

11. Introdução do Módulo

12. Aviso importante aos usuários de Windows

13. Configuração do Ambiente

14. Alterando Nome Projeto

15. Básico sobre Função #01

```javascript
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

```

16. Básico sobre Função #02

```javascript
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
```

17. Desafio #01

```javascript
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

```

18. Básico sobre Função #03

19. Função Callback #01

20. Função Callback #02

21. Função Map #01

22. Função Map #02

23. Função Map #03

24. Função Map #04

25. Função Filter #01

26. Função Filter #02

27. Função Filter #03

28. Função Reduce #01

29. Função Reduce #02

30. Desafio Map, Reduce e Filter

31. Desafio Map, Reduce e Filter - Resposta

32. Função Reduce #03

33. Promise #01

34. Promise #02

35. Promise #03

36. Desafio Promise

37. Desafio Promise - Resposta

38. Promise #04

39. Promise #05

40. Async/Await #01

41. Async/Await #02

42. OO #01

43. OO #02

44. OO #03

45. Conclusão do Módulo


[Voltar ao Índice](#indice)

---

## <a name="parte3">3 - Seção 3: Projeto #01 - Palavras Mais Usadas</a>

[Voltar ao Índice](#indice)

---

## <a name="parte4">4 - Seção 4: Princípios da Programação Funcional</a>

[Voltar ao Índice](#indice)

---

## <a name="parte5">5 - Seção 5: Programação Reativa com RxJS </a>

[Voltar ao Índice](#indice)

---

## <a name="parte6">6 - Seção 6: Projeto #02 - Migrando Código para RxJS </a>

[Voltar ao Índice](#indice)

---

## <a name="parte7">7 - Seção 7: Lambda Calculus</a>

[Voltar ao Índice](#indice)

---

## <a name="parte8">8 - Seção 8: Conclusão</a>

[Voltar ao Índice](#indice)

---
