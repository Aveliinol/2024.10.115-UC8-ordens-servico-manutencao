const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

class UsuarioController{
    static async cadastrar(req, res){
        try {
            const {nome, email, senha} = req.body;
            if(!nome, !email, !senha){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            const senhaCriptografada = await bcrypt.hash(senha, 10);
            await Usuario.create({nome, email, senha: senhaCriptografada, endereco});
            res.status(200).json({msg: "Usuario criado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    }
}

module.exports = UsuarioController