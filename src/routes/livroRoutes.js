const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

router.get("/", livroController.listar);
router.get("/:id", livroController.buscarPorId);
router.post("/", livroController.criar);
router.put("/:id", livroController.atualizar);
router.patch("/:id", livroController.atualizarParcial);
router.delete("/:id", livroController.deletar);

module.exports = router;