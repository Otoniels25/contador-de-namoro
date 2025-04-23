
function calcularDias() {
  const inicio = new Date("2025-04-06");
  const hoje = new Date();
  const diferenca = hoje - inicio;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  document.getElementById("contador").innerText = `${dias} dias`;
}

calcularDias();
setInterval(calcularDias, 1000 * 60 * 60); // Atualiza a cada hora
