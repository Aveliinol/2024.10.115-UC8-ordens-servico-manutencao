'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tecnico', {
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
    }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tecnico');
  }
};
