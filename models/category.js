'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Event, {
        foreignKey: 'categoryId',
        as: 'events'
      })
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    }
  )
  return Category
}
