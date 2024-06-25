let amigo = {
    nome: 'José',
    sexo: 'M',
    idade: 25,
    peso: 85.4,
    engordar(p) {
        this.peso += p
    }
}

const Peso = new Number(amigo.peso)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

const idade = new Number(amigo.idade)

amigo.engordar(2)
amigo.idade = 26

const novoPeso = new Number(amigo.peso)
const novaIdade = new Number(amigo.idade)

console.log(`${amigo.nome} pesava ${Peso}, mas ele engordou e agora pesa ${amigo.peso}kg`)
console.log(`${amigo.nome} tinha ${idade} anos, mas ele fez aniversário e agora tem ${amigo.idade} anos`)