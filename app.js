let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    // Expressão regular para verificar se o nome contém apenas números
    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, insira um nome válido (somente letras).");
        return;
    }

    amigos.push(nome);
    inputNome.value = "";
    exibirLista();
}

function exibirLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `Amigo secreto: ${sorteado}`;
}