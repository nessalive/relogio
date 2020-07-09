function carregar(){
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('sol')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        img.src = 'img/sol.png'
        document.body.style.background = '#F2A35E'
    }
    else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#F2B680'
    }
    else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = "#BF84D9"
    }
}
