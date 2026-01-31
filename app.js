const btn = document.getElementById("scanBtn");

btn.addEventListener("click", async () => {
  btn.classList.add("active");

  const texto = document.getElementById("evento").value;

  const res = await fetch("/.netlify/functions/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: texto })
  });

  const json = await res.json();

  document.getElementById("estado").textContent =
    json.estado_energetico || "—";

  document.getElementById("frequencia").textContent =
    json.frequencia_operacional || "—";

  document.getElementById("sinais").textContent =
    json.sinais_confirmados || "—";

  document.getElementById("leitura").textContent =
    json.leitura_dominante || "—";

  document.getElementById("linhas").textContent =
    json.linhas_realidade || "—";

  btn.classList.remove("active");
});
