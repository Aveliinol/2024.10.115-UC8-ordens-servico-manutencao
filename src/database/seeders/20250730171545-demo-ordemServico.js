'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ordemServico', [
      {
        cliente_id: 1,
        endereco: 'Rua A, 123',
        tipo_servico: 'elétrica',
        data_solicitada: '2025-07-30',
        status: 'pendente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        cliente_id: 2,
        endereco: 'Av. B, 456',
        tipo_servico: 'outro',
        data_solicitada: '2025-07-31',
        status: 'em andamento',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        cliente_id: 3,
        endereco: 'Rua C, 789',
        tipo_servico: 'outro',
        data_solicitada: '2025-08-01',
        status: 'finalizada',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        cliente_id: 1,
        endereco: 'Av. D, 101',
        tipo_servico: 'elétrica',
        data_solicitada: '2025-08-02',
        status: 'pendente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ordemServico', null, {});
  }
};
