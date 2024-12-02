function verificar(){
    var nome = prompt("Qual o nome do aluno/a?")
    var nota1 = prompt(`Qual foi a primeira nota de ${nome}?`)
    var nota2 = prompt(`Qual foi a segunda nota de ${nome}?`)
    nota1 = parseInt(nota1)
    nota2 = parseInt(nota2)
    var titulo = window.document.createElement('h1')
    titulo.innerText = `Analisando a situação de ${nome}`
    var resultado = window.document.getElementById("res")
    resultado.innerHTML=""
    resultado.appendChild(titulo)
    var media = (nota1+nota2)/2
    resultado.innerHTML += `Com as notas ${nota1} e ${nota2}, a média ficou em<strong> ${media}</strong><br>`
    if(media >= 6){
        resultado.innerHTML += `Com média acima de 6,0, o aluno está <mark id="apro">APROVADO</mark>`
    }
    else if(media >= 3){
        resultado.innerHTML += `Com média entre 3,0 e 6,0, o aluno está em <mark id="rec">RECUPERAÇÃO</mark>`

    }
    else{
        resultado.innerHTML += `Com média abaixo de 3,0, o aluno está <mark id="repro">REPROVADO</mark>`
    }
    
}