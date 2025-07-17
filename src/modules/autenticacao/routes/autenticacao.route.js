const express = require('express');
const AutenticacaoController = require('../controllers/autenticacao.controller')

const router = express.Router()

router.post('/login', AutenticacaoController.login);

router.post('/refress-token', AutenticacaoController.refreshToken);

router.post('/logout', AutenticacaoController.logout)

module.exports = router