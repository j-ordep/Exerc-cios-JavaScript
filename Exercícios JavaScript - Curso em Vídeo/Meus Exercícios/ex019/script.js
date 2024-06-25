function calc() {
    let n1 = Number(prompt('Primeiro número:'))
    let n2 = Number(prompt('Segundo número:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer com esses valores? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) {
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3: 
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4: 
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`
            break
        default:
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2} mas eu não sei o que fazer com eles.</p>`
            break
    }
}   