function carregar() {

    var msg = document.querySelector('div#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora>=6 && hora<12){
        //Bom dia
        img.src = './img/manha.png'
        document.body.style.background = "#faeb98"

    } else if (hora>=12 && hora<18){
        //Boa tarde
        img.src = './img/tarde.png'
        document.body.style.background = "#e99c44"

    } else {
        //Boa noite
        img.src = "./img/noite.png"
        document.body.style.background = "#5c4366"
    }
}

