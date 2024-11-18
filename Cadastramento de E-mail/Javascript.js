// Seleciona o formulário e a tabela
const form = document.getElementById("emailForm");
const table = document.getElementById("emailTable").querySelector("tbody");

// Adiciona o evento de submit ao formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const codigo = document.getElementById("codigo").value;
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // Verifica se todos os campos foram preenchidos
  if (codigo && nome && email) {
    // Cria uma nova linha na tabela
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${codigo}</td>
      <td>${nome}</td>
      <td>${email}</td>
    `;

    // Adiciona a nova linha à tabela
    table.appendChild(newRow);

    // Limpa os campos do formulário
    form.reset();
  } else {
    alert("Todos os campos são obrigatórios!"); // Exibe mensagem de erro
  }
});
