'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('task', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      uid: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      status: {
        type: Sequelize.ENUM(['ready', 'in-progress', 'done']),
        allowNull: false,
        defaultValue: 'ready',
      },
      deadline: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
    })

    // updatedAtカラムに更新時にタイムスタンプを更新するトリガーを作成
    await queryInterface.sequelize.query(`
      CREATE TRIGGER trigger_timestamp_updated_at BEFORE UPDATE ON task FOR EACH ROW EXECUTE PROCEDURE set_timestamp_updated_at();
    `)
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      DROP TRIGGER IF EXISTS trigger_timestamp_updated_at ON task;
    `)

    await queryInterface.dropTable('task')
  },
}
