export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const apiKey = process.env.CHATGPT_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key missing" }),
    };
  }

  try {
    const prompt = `
Leitura sistémica implícita de um evento.

Responder exclusivamente em JSON com os campos:
- estado_energetico
- frequencia_operacional
- sinais_confirmados
- leitura_dominante
- linhas_realidade

Sem sujeito.
Sem explicações.
Sem linguagem humana direta.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Análise sistémica implícita." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    const parsed = JSON.parse(content);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Analysis failure" }),
    };
  }
}
