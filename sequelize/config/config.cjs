'use strict'

const envConfig = require('./load-sequelize-variables.cjs')

module.exports = {
  dialect: 'postgres',
  host: envConfig.SEQUELIZE_SUPABASE_DB_HOST,
  port: envConfig.SEQUELIZE_SUPABASE_DB_PORT,
  database: envConfig.SEQUELIZE_SUPABASE_DB_DATABASE,
  username: envConfig.SEQUELIZE_SUPABASE_DB_USERNAME,
  password: envConfig.SEQUELIZE_SUPABASE_DB_PASSWORD,
}
