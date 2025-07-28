'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ordemServico', {
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
                },
              tipo_servico: {
                  type: DataTypes.ENUM('elétrica', 'hidráulica', 'outro'),
                  allowNull: false,
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
              },
              tecnico_id: {
                  type: DataTypes.INTEGER,
                  references: {
                      model: 'tecnico',
                      key: 'id'
                  }
              } 
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ordemServico');
  }
};
