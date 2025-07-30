'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ordemServico', {
       id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true,
                  allowNull: false,
              },
              cliente_id: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  references: {
                      model: 'cliente',
                      key: 'id'
                  }
              },
              endereco: {
                  type: Sequelize.STRING,
                  allowNull: false,
                },
              tipo_servico: {
                  type: Sequelize.ENUM('elétrica', 'hidráulica', 'outro'),
                  allowNull: false,
              },
              data_solicitada: {
                  type: Sequelize.DATEONLY,
                  allowNull: false,
                  validate: {
                      isDate: true
                  }
              },
              status: {
                  type: Sequelize.ENUM('pendente', 'em andamento', 'finalizada'),
                  allowNull: false,
                  defaultValue: 'pendente',
              },
              tecnico_id: {
                  type: Sequelize.INTEGER,
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
