'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', {
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
          endereco: {
            type: DataTypes.STRING,
            allowNull: false,
          }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};
