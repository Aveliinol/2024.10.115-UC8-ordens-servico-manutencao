const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const AutentecacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizacaoMiddleware = require("../../../middleware/autorizacao.middleware")
const router = express.Router()

// rota de cadastro
router.post('/', UsuarioController.cadastrar)

// rota de perfil
router.get('/me/:id', AutentecacaoMiddleware.autenticarToken,
     AutorizacaoMiddleware.autorizar(['tecnico', 'cliente']),  
     UsuarioController.perfil)

module.exports = router