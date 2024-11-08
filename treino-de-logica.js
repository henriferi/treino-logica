

//Desafio 1

function pares(n) {
    let numerosPares = [];
    for (var i = 0; i <= n; i++){
        if(i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}

console.log(pares(12))


//Desafio 2


function somaIntervalo(a,b) {

    let soma = 0;

    if(a > b ) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++) {
        soma += i;
    }

    return soma;

}

console.log(somaIntervalo(3,7))



//Desafio 3

function fatorial(n) {
    let produto = 1;

    if(n === 0) {
        return 1;
    }
    for(let i = 1; i <= n; i++){
        produto *= i;
    }
    return produto;
}

console.log(fatorial(5));

