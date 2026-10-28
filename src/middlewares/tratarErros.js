function tratarErros(err, req, res, next) {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ erro: "Falta o Content-Type ou o JSON veio quebrado" });
  }
  return res.status(500).json({ erro: "Erro interno do servidor" });
}
module.exports = tratarErros;
