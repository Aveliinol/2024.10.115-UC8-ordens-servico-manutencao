const express = require('express');
const ordemServicoController = require('../controllers/ordemservico.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');
const AutorizarMiddleware = require('../../../middleware/autorizacao.middleware');

const router = express.Router();

//Cadastrar serviço
router.post('/', AutenticacaoMiddleware.autenticarToken, ordemServicoController.criarServico)

//Editar serviço
router.put('/:id', AutenticacaoMiddleware.autenticarToken,AutorizarMiddleware.autorizar(['Cliente']), ordemServicoController.editarServico)

//Listar Todos os serviço
router.get('/', AutenticacaoMiddleware.autenticarToken, ordemServicoController.listarServicos)

//Listar serviço por id
router.get('/:id', AutenticacaoMiddleware.autenticarToken, ordemServicoController.listarServicoPorId)

//Deletar serviço
router.delete('/:id', AutenticacaoMiddleware.autenticarToken, AutorizarMiddleware.autorizar(['Cliente']), ordemServicoController.deletarServico)

//atualizar status 
router.put('/:id/status', AutenticacaoMiddleware.autenticarToken, AutorizarMiddleware.autorizar(['Tecnico']), ordemServicoController.atualizarStatus)

//Atribuir tecnico
router.put('/:id/atribuir', AutenticacaoMiddleware.autenticarToken, AutorizarMiddleware.autorizar(['Tecnico']), ordemServicoController.atribuirTecnico)

module.exports = router 