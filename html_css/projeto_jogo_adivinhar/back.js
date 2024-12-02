var resultado = parseInt(Math.random() * 1001);
var numTentativas = 0
function verificar() {
    var numero = window.document.getElementById('num')
    var resposta = window.document.getElementById('resposta')
    var painelCerto = window.document.getElementById('painelCerto')
    var painelMais = window.document.getElementById('painelMais')
    var painelMenos = window.document.getElementById('painelMenos')
    var section = window.document.getElementById('section')
    var tentativas = window.document.getElementById('tentativa')

    painelMais.style.display = "none"
    painelCerto.style.display = "none"
    painelMenos.style.display = "none"
    if (numero.value.length > 0) {
        section.style.display = "block"
        resposta.innerText = "Verificando..."

        setTimeout(() => {
            numTentativas++
            numero = Number(numero.value)
            tentativas.innerHTML += `<br>na sua ${numTentativas}ª tentativa o número chutado foi ${numero}<br>`
            if (numero == resultado) {
                painelCerto.style.display = "block"
                resposta.style.color = "green"
                resposta.innerHTML = "Acertou!"
            }
            else if (numero > resultado) {
                painelMenos.style.display = "block"
                resposta.innerHTML = "Menos"
                painel.style.backgroundColor = "red"
            }
            else if (numero < resultado) {
                painelMais.style.display = "block"
                resposta.innerHTML = "Mais"
                painel.style.backgroundColor = "red"
            }
            
        }, 500);
    }
    numero.focus()
}