const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../config/configDB");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O nome é obrigatório.'
        },
        len: {
          args: [2, 100],
          msg: 'O nome deve ter entre 2 e 100 caracteres.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email inválido" },
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/,
          msg: "A senha deve ter no mínimo 6 caracteres e pode conter letras, números e caracteres especiais.",
        },
      }
    },
    papel: {
      type: DataTypes.ENUM("cliente", "tecnico"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["cliente", "tecnico"]],
          msg: "O papel deve ser 'cliente' ou 'tecnico'."
        }
      }
    }
  },
  {
    tableName: "usuario",
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
  }
);

module.exports = Usuario;
