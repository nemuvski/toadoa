'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      CREATE FUNCTION set_timestamp_updated_at() RETURNS TRIGGER AS $$
        BEGIN
          NEW."updatedAt" := now();
          return NEW;
        END;
      $$ LANGUAGE plpgsql;
    `)
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS set_timestamp_updated_at();
    `)
  },
}
