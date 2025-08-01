'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaCriptografada = await bcrypt.hash('Admin@123', 15);
    await queryInterface.bulkInsert('usuario', [
      {
        nome: 'Monkey D. Luffy',
        email: 'luffy@onepiece.com',
        senha: senhaCriptografada,
        papel: 'cliente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Roronoa Zoro',
        email: 'zoro@onepiece.com',
        senha: senhaCriptografada,
        papel: 'tecnico',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Nami',
        email: 'nami@onepiece.com',
        senha: senhaCriptografada,
        papel: 'cliente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Sanji',
        email: 'sanji@onepiece.com',
        senha: senhaCriptografada,
        papel: 'tecnico',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        nome: 'Usopp',
        email: 'usopp@onepiece.com',
        senha: senhaCriptografada,
        papel: 'cliente',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
