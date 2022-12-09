'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Event, { foreignKey: 'category_id' })
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      events: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    }
  )
  return Category
}
