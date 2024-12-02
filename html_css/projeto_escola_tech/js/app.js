// let data = new Date(2006, 8, 6, 19, 15);
let dataHora = window.document.querySelector("#dateTime");

function pegarDataHora() {
    let data = new Date();
    return `${data.toLocaleDateString("pt-BR")} - ${data.toLocaleTimeString("pt-BR", {hour12: false})}`;
};
function mostrarDataHora(){
    dataHora.innerText = pegarDataHora();
};
setInterval(mostrarDataHora, 1000);

