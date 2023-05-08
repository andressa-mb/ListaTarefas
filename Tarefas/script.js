function enviar(event) {
  
  var texto = document.getElementById("tarefas").value.trim();
  
  if (texto === '') {
    alert("Por favor, escreva uma tarefa");
    event.preventDefault();
    tarefas.focus();
  } else {
    event.preventDefault(); // evita a ação padrão do formulário
    var campoTarefas = document.querySelector("#resposta");
    var lista = document.createElement("li");
    campoTarefas.appendChild(lista);
    lista.textContent = texto;
    tarefas.focus();
    document.getElementById("tarefas").value = ""; // limpa o campo de id tarefas
  }

}

function foco() {
  tarefas.focus();
  document.getElementById("tarefas").addEventListener("keypress",
        function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("botao").click();
            }
        });
}