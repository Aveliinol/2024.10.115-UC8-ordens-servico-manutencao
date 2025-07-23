const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');

class UsuarioController{
    static async cadastrar(req, res){
        try {
            const {nome, email, senha, papel} = req.body;
            if(!nome, !email, !senha, !papel){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            const senhaCriptografada = await bcrypt.hash(senha, 10);
            await Usuario.create({nome, email, senha: senhaCriptografada, papel});
            res.status(200).json({msg: "Usuario criado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    }
    static async perfil(req, res){
        try {
            const { id } = req.usuario
            const usuario = await Usuario.findOne({
                where: {id},
                attributes: ['id','nome', 'email', 'papel']
            });
            if(!usuario){
                return res.status(401).json({msg: "Não existe Usuario no sistema!"})
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    }
}

module.exports = UsuarioController