let item = [];
const formulario = document.querySelector(".entrada-item");
const itemDigitado = document.querySelector(".campo-item");
const quantidade = document.querySelector(".campo-quantidade");
const botao = document.querySelector(".add");
const lista = document.getElementById("lista-ul");
const msgCampoVazio = document.querySelector(".mensagem-quantidade");
const mensagemDigiteItem = document.querySelector(".mensagem-digite-item");
const totalElement = document.getElementById("total");

// ---------------------------------------------------

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
});

function mostraNaTela() {
    let valorDigitado = itemDigitado.value.trim();
    let quantia = quantidade.value.trim();
    quantia = parseInt(quantia); 
    if (valorDigitado === "") {
        itemDigitado.classList.add("vazio");
        mensagemDigiteItem.style.display = "block";

        setTimeout(function () {
            itemDigitado.classList.remove("vazio");
            mensagemDigiteItem.style.display = "none";
        }, 2000);
    }

    if (quantia === "") {
        quantidade.classList.add("vazio");
        msgCampoVazio.style.display = "block";
        setTimeout(function () {
            quantidade.classList.remove("vazio");
            msgCampoVazio.style.display = "none";
        }, 2000);
        return;
    }

    let itemDaLista = document.createElement("li");
    lista.append(itemDaLista);

    let elementosDaLista = document.createElement("div");
    elementosDaLista.classList.add("item");
    itemDaLista.append(elementosDaLista);
    let check = document.createElement("input");
    check.type = "checkbox";
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
    precoProduto.placeholder = "R$:0.00";
    precoProduto.addEventListener("change", calcularTotal);
    campoPrecoApagar.append(precoProduto);
    precoProduto.dataset.quantidade = quantia;
    

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

function calcularTotal() {
    let total = 0;
    const precos = document.querySelectorAll(".campo-preco");
 
    precos.forEach((preco) => {
        const valor = parseFloat(preco.value);
        const quantidade = parseFloat(preco.dataset.quantidade);

        if (!isNaN(valor) && !isNaN(quantidade)) {
            total += valor * quantidade ; 
           
        }
    });

    totalElement.textContent = "R$ " + total.toFixed(2); 
}
