const express = require('express');
const ClienteController = require('../controllers/cliente.controller')
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware')
const router = express.Router()

// rota de cadastro
router.post('/', ClienteController.cadastrar)

// rota de perfil
router.get('/me', AutenticacaoMiddleware.autenticarToken, ClienteController.perfil)

module.exports = router