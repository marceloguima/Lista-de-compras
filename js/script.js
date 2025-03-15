//selecionando os elementos do DOM
const formulario = document.querySelector(".entrada-item");
let itemDigitado = document.querySelector(".campo-item");
let quantidade = document.querySelector(".campo-quantidade");
const botao = document.querySelector(".add");
const lista = document.getElementById("lista-ul");
const msgCampoVazio = document.querySelector(".mensagem-quantidade");

let item = [];

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
});

function adicionar() {
    let valorDigitado = itemDigitado.value.trim();
    let quantia = quantidade.value.trim();

   
       
        
 if (valorDigitado === "" || quantia === "") {
        valorDigitado.classList.add("vazio");
        quantidade.classList.add("vazio");
        msgCampoVazio.style.display = "block";
        setTimeout(function aviso() {
            quantidade.classList.remove("vazio");
            msgCampoVazio.style.display = "none";
        }, 2000);
        return;
    }
    let itemDaLista = document.createElement("li");
    // li dentro da ul
    lista.append(itemDaLista);

    let elementosDaLista = document.createElement("div");
    // adicionando a div criada uma classe
    elementosDaLista.classList.add("item");
    // colocando a div dentro da li
    itemDaLista.append(elementosDaLista);
    // criando o checkbox
    let check = document.createElement("input");
    check.type = "checkbox";
    // colocando o checkbox dentro de elementosDaLista
    elementosDaLista.append(check);

    let valorQuantidade = document.createElement("div");
    valorQuantidade.classList.add("nome-quantidade");
    elementosDaLista.append(valorQuantidade);

    let item = document.createElement("h4");
    valorQuantidade.append(item);
    let pUnidade = document.createElement("p");
    valorQuantidade.append(pUnidade);

    item.textContent = valorDigitado;
    pUnidade.textContent = quantia + " unidades";

    let campoPrecoApagar = document.createElement("div");
    campoPrecoApagar.classList.add("preco-dellete");

    elementosDaLista.append(campoPrecoApagar);
    let formPreco = document.createElement("form");

    formPreco.classList.add("form-preco");
    campoPrecoApagar.append(formPreco);

    let precoProduto = document.createElement("input");
    precoProduto.type = "number";
    precoProduto.classList.add("campo-preco");

    campoPrecoApagar.append(precoProduto);
    const apagarItem = document.createElement("button");
    apagarItem.classList.add("apagar");
    campoPrecoApagar.append(apagarItem);
    const iconeLixeira = document.createElement("i");
    iconeLixeira.classList.add("fa-solid");
    iconeLixeira.classList.add("fa-trash");
    apagarItem.append(iconeLixeira);

    limpaCampo();
}

function limpaCampo() {
    itemDigitado.value = "";
    quantidade.value = "";
}
