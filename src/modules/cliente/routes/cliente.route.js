const express = require('express');
const ClienteController = require('../controllers/cliente.controller')
const router = express.Router()

// rota de cadastro
router.post('/', ClienteController.cadastrar)

module.exports = router