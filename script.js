var date = new Date()
var hora = date.getHours()
var min = date.getMinutes()
var time = `${hora}:${min < 10 ? '0' + min : min}`
var horaP = document.getElementById('hora')
var mensagemP = document.getElementById('mensagem')
var manha = document.getElementById('manha')
var tarde = document.getElementById('tarde')
var noite = document.getElementById('noite')
var imagensDiv = document.getElementById('container')
var tituloH1 = document.getElementById('titulo')
var strong = document.createElement('strong')

if (hora <= 11){
    mensagemP.innerHTML = `<span>São <strong>${time}</strong> horas`
    horaP.innerHTML = `Bom dia!`
    tituloH1.style.color = 'black'
    mensagemP.style.color = 'black'
    horaP.style.color = 'black'
    imagensDiv.style.backgroundColor = '#f0cd8d'
    tituloH1.style.backgroundColor = '#f0cd8d'
    tarde.style.display = 'none'
    noite.style.display = 'none'
} else if (hora > 11 && hora <= 17){
    mensagemP.innerHTML = `<p>São <strong>${time}</strong> horas.</p>`
    horaP.innerHTML = `<p>Boa tarde!</p>`
    imagensDiv.style.backgroundColor = '#cf7d1e'
    tituloH1.style.backgroundColor = '#cf7d1e'
    manha.style.display = 'none'
    noite.style.display = 'none'
} else {
    mensagemP.innerHTML = `<p>São <strong>${time}</strong> horas.</p>`
    horaP.innerHTML = `<p>Boa noite!</p>`
    imagensDiv.style.backgroundColor = '#131e41'
    tituloH1.style.backgroundColor = '#131e41'
    tarde.style.display = 'none'
    manha.style.display = 'none'
}