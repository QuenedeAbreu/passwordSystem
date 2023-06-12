'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permission_perfils', {
      id_permission_perfil: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_permission: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'permissions'
          },
          key: 'id_permission'
        },
        allowNull: false
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
    await queryInterface.dropTable('permission_perfils');
  }
};