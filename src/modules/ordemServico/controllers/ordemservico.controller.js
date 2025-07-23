const ServicoModel = require("../models/ordemservico.model");

class OrdemServicoController {
    static async criarServico(req, res) {
        try {
            const { cliente_id, endereco, tipo_servico, data_solicitada, status, tecnico_id } = req.body;
            if (!cliente_id || !endereco || !tipo_servico || !data_solicitada ) {
                return res.status(400).json({ msg: "Todos os campos devem ser preenchidos" });
            }
            const servico = await ServicoModel.create({ cliente_id, endereco, tipo_servico, data_solicitada, status, tecnico_id });
            res.status(200).json(servico);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
    }

    static async editarServico(req, res) {
        try {
            const { id } = req.params;
            const servico = await ServicoModel.findByPk(id);
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" });
            }
            if (servico.status !== "pendente") {
                return res.status(400).json({ msg: "Apenas serviços pendentes podem ser atualizados" });
            }
            const { endereco, tipo_servico, data_solicitada } = req.body;
            const updateService = await servico.update({ endereco, tipo_servico, data_solicitada });
            res.status(200).json(updateService);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message });
        }
    }

    static async listarServicos(req, res) {
        try {
            const { id } = req.params;
            const { papel } = req.query; 
            let servicos;
            if (papel === "tecnico") {
                servicos = await ServicoModel.findAll();
            } else if (papel === "cliente") {
                servicos = await ServicoModel.findAll({ where: { cliente_id: id } });
            } 
            if (servicos.length === 0) {
                return res.status(200).json({ msg: "Não há serviços no sistema" });
            }
    
            res.status(200).json(servicos);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message });
        }
    }

    static async listarServicoPorId(req, res) {
        try {
            const servico = await ServicoModel.findByPk(req.params.id);
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" });
            }
            res.status(200).json(servico);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!" });
        }
    }

    static async deletarServico(req, res) {
        try {
            const { id } = req.params;
            const servico = await ServicoModel.findByPk(id);
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" });
            }
            if (servico.status !== "pendente") {
                return res.status(400).json({ msg: "Apenas serviços pendentes podem ser deletados" });
            }
            await servico.destroy();
            res.status(200).json({ msg: "Serviço deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message });
        }
    }

    static async atribuirTecnico(req, res) {
        try {
            const { id } = req.params;
            const { tecnico_id } = req.body;
            const servico = await ServicoModel.findByPk(id);
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" });
            }
            if (servico.status !== "pendente") {
                return res.status(400).json({ msg: "Apenas serviços pendentes podem ser atribuídos" });
            }
            const updatedServico = await servico.update({ tecnico_id });
            res.status(200).json(updatedServico);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message });
        }
    }

    static async atualizarStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const servico = await ServicoModel.findByPk(id);
            if (!servico) {
                return res.status(400).json({ msg: "Serviço não encontrado no sistema" });
            }
            const updatedServico = await servico.update({ status });
            res.status(200).json(updatedServico);
        } catch (error) {
            res.status(500).json({ msg: "Erro no sistema. Tente novamente mais tarde!", erro: error.message });
        }
    }
}
module.exports = OrdemServicoController;
