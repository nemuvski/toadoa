'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // taskテーブルでRLSを有効化
      await queryInterface.sequelize.query(`ALTER TABLE task ENABLE ROW LEVEL SECURITY`, { transaction })

      // ポリシー: SELECT
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can view their own task." ON task
          FOR SELECT
          USING (
            uid = auth.uid()
          );
        `,
        { transaction }
      )
      // ポリシー: INSERT
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can insert their own task." ON task
          FOR INSERT
          WITH CHECK (
            uid = auth.uid()
          );
        `,
        { transaction }
      )
      // ポリシー: UPDATE
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can update their own task." ON task
          FOR UPDATE
          USING (
            uid = auth.uid()
          )
          WITH CHECK (
            uid = auth.uid()
          );
        `,
        { transaction }
      )
      // ポリシー: DELETE
      await queryInterface.sequelize.query(
        `
          CREATE POLICY "Users can delete their own task." ON task
          FOR DELETE
          USING (
            uid = auth.uid()
          );
        `,
        { transaction }
      )
    })
  },
  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can view their own task." ON task;`, {
        transaction,
      })
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can insert their own task." ON task;`, {
        transaction,
      })
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can update their own task." ON task;`, {
        transaction,
      })
      await queryInterface.sequelize.query(`DROP POLICY IF EXISTS "Users can delete their own task." ON task;`, {
        transaction,
      })

      await queryInterface.sequelize.query(`ALTER TABLE task DISABLE ROW LEVEL SECURITY`, { transaction })
    })
  },
}
