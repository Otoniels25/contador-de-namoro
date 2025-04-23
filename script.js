
function calcularDias() {
  const inicioNamoro = new Date("2025-04-06");
  const inicioOracao = new Date("2025-03-10");
  const hoje = new Date();

  const diasNamoro = Math.floor((hoje - inicioNamoro) / (1000 * 60 * 60 * 24));
  const diasOracao = Math.floor((hoje - inicioOracao) / (1000 * 60 * 60 * 24));

  document.getElementById("contador-namoro").innerText = `${diasNamoro} dias de namoro`;
  document.getElementById("contador-oracao").innerText = `${diasOracao} dias no propósito de oração`;
}

calcularDias();
setInterval(calcularDias, 1000 * 60 * 60); // Atualiza a cada hora
