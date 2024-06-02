function calcula(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    else {
        return ((n / (n-1)) + calcula(n-1));
    }
}

let resultado = calcula(5);
console.log(resultado);