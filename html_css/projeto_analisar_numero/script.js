var lista = []
var resultado = window.document.getElementById('res')
function alerta(){
    alerta('foi')
}
function adicionar(){
    resultado.innerHTML = ''
    var numero = window.document.getElementById('iNum')
    var caixa = window.document.getElementById('txtA')
    var add = window.document.createElement('option')
    if(numero.value.length == 0 || Number(numero.value) > 100 || Number(numero.value) == 0 || lista.indexOf(Number(numero.value)) != -1){
        alert('Valor inválido ou já digitado')
    }
    else{
        if(lista.indexOf(Number(numero.value)) == -1){
            lista.push(Number(numero.value))
        add.text = `Valor ${Number(numero.value)} adicionado`
        caixa.appendChild(add)
        }
    }
    numero.value=''
    numero.focus()
}
function finalizar(){
    if(lista.length > 0){
        maior = lista[0]
        menor = lista[0]
        var soma = 0
        for (var c1 in lista){
            soma += lista[c1]
            if(lista[c1] > maior){
                maior = lista[c1]
            }
            if(lista[c1] < menor){
                menor = lista[c1]
            }
        }
        resultado.innerHTML = "" 
        resultado.innerHTML += `Ao todo foram <strong>${lista.length}</strong> números digitados <br>`
        resultado.innerHTML += `O maior valor informado foi <strong>${maior}</strong><br>`
        resultado.innerHTML += `O menor valor informado foi <strong>${menor}</strong><br>`
        resultado.innerHTML += `a soma de todos os valores é <strong>${soma}</strong><br>`
        resultado.innerHTML += `a média de todos os valores é <strong>${soma/lista.length}</strong><br>`
    }
    else{
        alert ('Digite um valor primeiro')
    }
}