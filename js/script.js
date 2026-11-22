
// 1. Selecionar os elementos do HTML
const total = document.querySelector("#total");
const somar = document.querySelector("#somar");
const zerar = document.querySelector("#zerar");

// 2. Criar a variável do contador
let valor = 0;

// 3. Mostrar o valor inicial na tela
total.textContent = valor;

// 4. Ouvir o clique no botão Somar
somar.addEventListener("click", () => {
    valor = valor + 1;
    total.textContent = valor;
});

// 5. Ouvir o clique no botão Zerar
zerar.addEventListener("click", () => {
    valor = 0;
    total.textContent = valor;
});
