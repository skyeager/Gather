'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Event.belongsTo(models.Category, { foreignKey: 'categoryId' })
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.INTEGER,
      attending: DataTypes.ARRAY(DataTypes.STRING),
      categoryId: DataTypes.INTEGER
      // categoryId: {
      //   type: DataTypes.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'categories',
      //     key: 'id'
      //   }
      // }
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
