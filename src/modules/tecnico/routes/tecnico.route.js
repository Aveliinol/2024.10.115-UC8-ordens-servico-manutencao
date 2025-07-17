const express = require('express');
const TecnicoController = require('../controllers/tecnico.controller')
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router()

// rota de cadastro
router.post('/', TecnicoController.cadastrar)

// rota de perfil
router.get('/me', AutenticacaoMiddleware.autenticarToken, TecnicoController.perfil)

module.exports = router