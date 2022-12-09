'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Event, {
        through: models.UserEvent,
        as: 'attendees',
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      goingTo: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
