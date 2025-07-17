const express = require('express');
const UsuarioController = require('../controllers/usuario.controller')
const router = express.Router()

// rota de cadastro
router.post('/', UsuarioController.cadastrar)

module.exports = router