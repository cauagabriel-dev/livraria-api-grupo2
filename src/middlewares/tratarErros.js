function tratarErros(err, req, res, next) {

  console.log("ERRO:", err.code, err.message);

  if (err.code === "ECONNREFUSED") {
    res.status(503).json({ erro: "Banco de dados indisponivel" });
    return;
  }

  // Se o título ou preço for grande demais para as colunas do banco, dá erro 400
  if (
    err.code === "ER_DATA_TOO_LONG" ||
    err.code === "ER_WARN_DATA_OUT_OF_RANGE"
  ) {
    res.status(400).json({ erro: "Algum valor e grande demais para o banco" });
    return;
  }

  // Se o JSON veio quebrado
  if (err instanceof SyntaxError || err.type === "entity.parse.failed") {
    res.status(400).json({ erro: "O JSON enviado esta mal escrito" });
    return;
  }

  // Se não caiu em nenhum "if" acima, a culpa é do programador
  res.status(500).json({ erro: "Erro interno no servidor" });
}

module.exports = tratarErros;
