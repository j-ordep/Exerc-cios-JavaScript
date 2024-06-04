function parimp(n) {
    if (n < 0) {
        return "ERRO"
    } else if (n % 2 == 0) {
        return "É Par"
    } else {
        return "É Ímpar"
    }
}

console.log(parimp(0))