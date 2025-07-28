'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('usuario', {
       id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          nome: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          senha: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          papel: {
            type: Sequelize.ENUM("cliente", "tecnico"),
            allowNull: false,
          }
    });

    await queryInterface.addIndex('usuario', ['email']);
    await queryInterface.addIndex('usuario', ['papel']);
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
