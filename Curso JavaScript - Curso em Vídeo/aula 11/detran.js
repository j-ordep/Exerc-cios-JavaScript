function calcular() {
    let txtv = window.document.getElementById('txtvel')
    let res = window.document.querySelector("div#res")
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong>Km/h</p>`
    if (vel > 80) {
        res.innerHTML += `<p>Você foi multado por excesso de velocidade.</p>`
    }
    console.log`Dirija sempre com o cinto de segurança!`
}