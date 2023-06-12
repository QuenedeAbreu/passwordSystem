'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfil_users', {
      id_perfil_user: {
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_user: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id_user'
        }
      },
      id_perfil: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'perfis'
          },
          key: 'id_perfil'
        }
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
    await queryInterface.dropTable('perfil_users');
  }
};