'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfis', {
      id_perfil: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      perfil_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_permission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('perfis');
  }
};