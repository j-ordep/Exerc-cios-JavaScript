// POO classes, Herança, extends, super

class veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}


class carro extends veiculo{
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
}


class moto extends veiculo{
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
}

class aviao extends veiculo{
    constructor(marca, modelo, ano) {
        super(marca,modelo, ano)
    }
}


let carro1 = new carro('Fiat', 'Uno', 2010)

let moto1 = new moto('Honda', 'CG', 2015)

let aviao1 = new aviao('Boeing', '747', 2010)


console.log(carro1)
console.log(moto1)
console.log(aviao1)