'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // accountテーブルでRLSを有効化
      await queryInterface.sequelize.query(`ALTER TABLE account ENABLE ROW LEVEL SECURITY`, { transaction })

      // ポリシー: SELECT
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can view their own account." ON account
          FOR SELECT
          USING (
            id = auth.uid()
          )
        `,
        { transaction }
      )
      // ポリシー: INSERT
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can insert their own account." ON account
          FOR INSERT
          WITH CHECK (
            id = auth.uid()
          )
        `,
        { transaction }
      )
      // ポリシー: UPDATE
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can update their own account." ON account
          FOR UPDATE
          USING (
            id = auth.uid()
          )
          WITH CHECK (
            id = auth.uid()
          )
        `,
        { transaction }
      )
    })
  },
  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can view their own account." ON account`, {
        transaction,
      })
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can insert their own account." ON account`, {
        transaction,
      })
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can update their own account." ON account`, {
        transaction,
      })

      await queryInterface.sequelize.query(`ALTER TABLE account DISABLE ROW LEVEL SECURITY`, { transaction })
    })
  },
}
