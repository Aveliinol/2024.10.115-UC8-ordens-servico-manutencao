const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Cliente = sequelize.define(
  "Cliente",
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
    papel: {
      type: DataTypes.STRING,
      defaultValue: 'cliente'
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O endereço é obrigatório.'
        },
        len: {
          args: [2, 100],
          msg: 'O endereco deve ter entre 2 e 100 caracteres.'
        }
      }
    },
  },
  {
    tableName: "cliente",
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
  }
);

module.exports = Cliente;
