const express = require('express');
const TecnicoController = require('../controllers/tecnico.controller')
const router = express.Router()

// rota de cadastro
router.post('/', TecnicoController.cadastrar)


module.exports = router