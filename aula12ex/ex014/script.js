function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha-pq.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde-pq.png'
        document.body.style.background = '#B9846F'
    } else {
        //BOA NOITE
        img.src = 'noite-pq.png'
        document.body.style.background = '#5c5c63'
    }
}


