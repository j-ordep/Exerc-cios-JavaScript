function carregar() {
    let msg = document.getElementById('msg') 
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#bfddf3'
    } else if (hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ffae00'
    } else {
        msg.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#2b2b2b'
    }
}