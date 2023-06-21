'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('perfis', 'status_permission', 'status_perfil')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('perfis', 'status_perfil', 'status_permission')
  }
};
