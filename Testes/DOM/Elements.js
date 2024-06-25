// Inserir o elemento no Body

var novoParagrafo = document.createElement("p")
var texto = document.createTextNode('Texto do paragrafo')
novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

var body = document.querySelector('body')

console.log(body)

body.appendChild(novoParagrafo)



// Inserir em um

var container = document.querySelector('div#container')
console.log(container)

var el = document.createElement('span')
el.appendChild(document.createTextNode('Texto do span'))

console.log(el)

container.appendChild(el)