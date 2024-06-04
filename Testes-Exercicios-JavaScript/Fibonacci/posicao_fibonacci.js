function fibonacci(p) {
    if (p <= 1)
        return 1;
    else {
        return fibonacci(p - 1) + fibonacci(p - 2);
    }
}   


let valor= fibonacci(5)
console.log(valor)