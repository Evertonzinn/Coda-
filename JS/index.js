var nome = "Everton Cristian Comel";
var cargo = "Desenvolvedor em treinamento";

var nomehtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}

function ColocarCargonoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function clickNoProjeto() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none"
}

function clickNoSobre() {
    console.log("Clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
ColocarCargonoHtml(cargo);