const Tecnico = require('../models/tecnico.model');

class TecnicoController{
    static async cadastrar(req, res){
        try {
            const {usuario_id, area_atuacao} = req.body;
            if(!usuario_id, !area_atuacao){
                return res.status(400).json({msg: "Todos os campos devem serem preenchidos!"});
            }
            await Tecnico.create({usuario_id, area_atuacao});
            res.status(200).json({msg: "Tecnico criado com sucesso"});
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!", erro: error.message})
        }
    }
    static async perfil(req, res){
        try {
            const { id } = req.usuario
            const tecnico = await Tecnico.findOne({
                where: {id},
                attributes: ['id','nome', 'email', 'area_atuacao']
            });
            if(!tecnico){
                return res.status(401).json({msg: "Não existe Tecnico no sistema!"})
            }
            res.status(200).json(tecnico);
        } catch (error) {
            res.status(500).json({msg: "Erro do servidor. Tente novamente mais tarde!"})
        }
    }
}

module.exports =  TecnicoController;