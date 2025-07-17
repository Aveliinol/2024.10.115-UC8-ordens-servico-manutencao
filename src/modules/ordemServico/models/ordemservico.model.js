const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../../../config/configDB");

const OrdemServico = sequelize.define(
    "OrdemServico",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cliente',
                key: 'id'
            }
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
        tipo_servico: {
            type: DataTypes.ENUM('elétrica', 'hidráulica', 'outro'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['elétrica', 'hidráulica', 'outro']],
                    msg: 'Deve seleciona um tipo de serviço'
                }
            }
            
        },
        data_solicitada: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        status: {
            type: DataTypes.ENUM('pendente', 'em andamento', 'finalizada'),
            allowNull: false,
            defaultValue: 'pendente',
            validate: {
                isIn: {
                    args: [['pendente', 'em andamento', 'finalizada']],
                    msg: 'Status deve ser pendente'
                }
            }
        },
        tecnico_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tecnico',
                key: 'id'
            }
        }
    },
    {
        tableName: "ordemServico",
        createdAt: "criado_em",
        updatedAt: "atualizado_em",
    }
);

module.exports = OrdemServico;