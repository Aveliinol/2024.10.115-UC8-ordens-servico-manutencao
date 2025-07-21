const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Tecnico = sequelize.define(
    "Tecnico",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuario',
                key: 'id'
            }
        },
        area_atuacao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'O área de atuação é obrigatório.'
                },
            }
        },
    },
    {
        tableName: "tecnico",
        createdAt: "criado_em",
        updatedAt: "atualizado_em"
    }
);

module.exports = Tecnico;
