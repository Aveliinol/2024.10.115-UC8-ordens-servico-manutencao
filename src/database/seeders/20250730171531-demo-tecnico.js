'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tecnico', [
      {
        usuario_id: 2,
        area_atuacao: 'Elétrica',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        usuario_id: 4,
        area_atuacao: 'Outro',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tecnico', {
      id: [1, 2]
    }, {});
  }
};
