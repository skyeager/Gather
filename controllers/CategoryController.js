const { Category } = require('../models')

const GetCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.category_id)
    res.send(category)
  } catch (error) {
    throw error
  }
}

const GetAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.send(categories)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCategory,
  GetAllCategories
}
