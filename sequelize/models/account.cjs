'use strict'

const { Model, UUIDV4 } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class account extends Model {}

  account.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      status: {
        type: DataTypes.ENUM(['active', 'inactive']),
        allowNull: false,
        defaultValue: 'active',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'account',
    }
  )

  return account
}
