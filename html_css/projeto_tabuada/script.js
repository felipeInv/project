function tabuar(){
    var numero = window.document.getElementById('numT')
    var recebedor = 0
    var res = window.document.getElementById('txtS')
    if (numero.value.length ==0){
        alert("Escolha um número")
    }
    else{
        res.innerHTML = ''
        numero = Number(window.document.getElementById('numT').value)
        for(c = 1; c<=10; c++){
            let criadorG = window.document.createElement('option')
            criadorG.text = `${c} x ${numero} = ${numero*c}`
            criadorG.value =`${c}`
            res.appendChild(criadorG)
        }
    }
}