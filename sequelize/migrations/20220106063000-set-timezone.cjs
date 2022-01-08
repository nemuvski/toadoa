'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER DATABASE postgres SET timezone TO 'Asia/Tokyo';`)

    await queryInterface.sequelize.query(`SELECT pg_reload_conf();`)
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`ALTER DATABASE postgres SET timezone TO 'UTC';`)

    await queryInterface.sequelize.query(`SELECT pg_reload_conf();`)
  },
}
