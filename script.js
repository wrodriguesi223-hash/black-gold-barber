// Sempre começa a página no topo ao carregar
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});
// Faz o formulário enviar o agendamento para o WhatsApp

const formulario = document.getElementById("agendamento");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    const mensagem =
        `Olá! Gostaria de agendar um horário.%0A%0A` +
        `Nome: ${nome}%0A` +
        `WhatsApp: ${telefone}%0A` +
        `Serviço: ${servico}%0A` +
        `Data: ${data}%0A` +
        `Horário: ${horario}`;

    const numero = "5524999999999";

    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
});
function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}
function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");

}


// Fecha o menu quando clicar em uma opção
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("ativo");

    });

});