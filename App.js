const btn = document.getElementById("scanBtn");

btn.addEventListener("click", async () => {
  btn.classList.add("active");

  const res = await fetch("/.netlify/functions/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ timestamp: Date.now() })
  });

  const json = await res.json();

  // Simulação estrutural (até ligares GPT real)
  document.getElementById("estado").textContent = "Estável";
  document.getElementById("frequencia").textContent = "Alta coerência";
  document.getElementById("sinais").textContent = "Confirmados";
  document.getElementById("leitura").textContent = "Dominância ativa";
  document.getElementById("linhas").textContent = "Convergentes";

  btn.classList.remove("active");
});
