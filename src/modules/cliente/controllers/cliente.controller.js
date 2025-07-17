const Cliente = require('../models/cliente.model');

class ClienteController{
    static async cadastrar(req, res){
        try {
            const {usuario_id, endereco} = req.body;
            if(!usuario_id, !endereco){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            await Cliente.create({usuario_id, endereco});
            res.status(200).json({msg: "Cliente criado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    }
    static async perfil(req, res){
        try {
            const { id } = req.cliente
            const cliente = await Cliente.findOne({
                where: {id},
                attributes: ['nome', 'email', 'id']
            });
            if(!cliente){
                return res.status(401).json({msg: "Não existe Cliente no sistema!"})
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!"})
        }
    }
}

module.exports = ClienteController