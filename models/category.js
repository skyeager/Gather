'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Event, { foreignKey: 'categoryId' })
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      events: DataTypes.ARRAY,
      eventId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    }
  )
  return Category
}
