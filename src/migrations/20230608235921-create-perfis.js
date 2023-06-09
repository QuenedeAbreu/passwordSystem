'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfis', {
      id_perfil: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perfil_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_permission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perfis');
  }
};