const json = await res.json();

document.getElementById("estado").textContent =
  json.estado_energetico;

document.getElementById("frequencia").textContent =
  json.frequencia_operacional;

document.getElementById("sinais").textContent =
  json.sinais_confirmados;

document.getElementById("leitura").textContent =
  json.leitura_dominante;

document.getElementById("linhas").textContent =
  json.linhas_realidade;
