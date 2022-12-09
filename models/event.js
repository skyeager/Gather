'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.Category, { foreignKey: 'category_id' })
      Event.belongsToMany(models.User, {
        as: 'user_event_list',
        through: models.UserEvent,
        foreignKey: 'eventId'
      })
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.STRING,
      attending: DataTypes.ARRAY(DataTypes.STRING),
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  )
  return Event
}
