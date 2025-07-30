'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        usuario_id: 1,
        endereco: 'Rua das Flores, 123',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        usuario_id: 3,
        endereco: 'Avenida Brasil, 456',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        usuario_id: 5,
        endereco: 'Praça Central, 789',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', {
      usuario_id: [1, 3, 5]
    }, {});
  }
};
