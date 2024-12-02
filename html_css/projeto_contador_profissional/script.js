function contar(){
    var inicio = window.document.getElementById('inicN')
    var fim = window.document.getElementById('fimN')
    var passo = window.document.getElementById('passoN')
    var space = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0){
        alert("Favor verificar os dados")
        space.innerHTML = "Impossível contar"
    }
    else{
        space.innerHTML = "Contando: <br> " 
        inicio = Number(window.document.getElementById('inicN').value)
        let inicioT = inicio
        fim = Number(window.document.getElementById('fimN').value)
        if(passo.value.length == 0){
            passo = Number(window.document.getElementById('passoN').value)
            passo = 1
            alert(`Considerando o passo como ${passo}`)
        } 
        if(passo!=1){
            passo = Number(window.document.getElementById('passoN').value)
        }
        if(inicio < fim){
            while(inicio <= fim){
                if(inicio == inicioT){
                    space.innerHTML += inicioT
                }
                else{
                    space.innerHTML += `\u{1F449} ${inicio}`
                }
                inicio += passo
            } 
        }
        else{
            while(inicio >= fim){
                if(inicio == inicioT){
                    space.innerHTML += inicioT
                }
                else{
                    space.innerHTML += `\u{1F449} ${inicio}`
                }
                inicio -= passo
            } 
        }
    space.innerHTML += `\u{1F3C1}`   
    }
}   