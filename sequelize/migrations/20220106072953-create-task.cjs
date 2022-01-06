'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('task', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      accountId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM(['ready', 'in-progress', 'done']),
        allowNull: false,
        defaultValue: 'ready',
      },
      deadline: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('task')
  },
}
