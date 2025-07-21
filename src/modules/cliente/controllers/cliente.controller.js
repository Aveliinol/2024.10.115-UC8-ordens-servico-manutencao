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
}

module.exports = ClienteController