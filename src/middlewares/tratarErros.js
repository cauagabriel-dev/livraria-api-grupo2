function tratarErros(err, req, res, next) {
  // Mostra no terminal o código e a mensagem real do erro para você conseguir ler
  console.log("ERRO:", err.code, err.message, err.type);

  // 1. O banco de dados está fora do ar ou na porta errada (ECONNREFUSED)
  if (err.code === "ECONNREFUSED") {
    res.status(503).json({ erro: "Banco de dados indisponivel" });
    return;
  }

  // 2. O título ou o preço ultrapassaram o limite da coluna no banco de dados
  if (err.code === "ER_DATA_TOO_LONG" || err.code === "ER_WARN_DATA_OUT_OF_RANGE") {
    res.status(400).json({ erro: "Algum valor e grande demais para o banco" });
    return;
  }

  // 3. O JSON enviado no Body veio quebrado ou mal escrito (Substitui o SyntaxError antigo)
  if (err.type === "entity.parse.failed" || err instanceof SyntaxError) {
    res.status(400).json({ erro: "O JSON enviado esta mal escrito" });
    return;
  }

  // 4. Se não for nenhum dos erros acima, cai no erro genérico do programador
  res.status(500).json({ erro: "Erro interno no servidor" });
}

module.exports = tratarErros;
