function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML = `Idade calculada: ${idade}`
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criancah.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoh.png')
            } else {
                img.setAttribute('src', 'idosoh.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        }
        res.innerHTML = `<p>${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}