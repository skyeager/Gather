const { Category, Event } = require('../models')

const GetCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.category_id, {
      include: { model: Event, as: 'events' }
    })
    res.send(category)
  } catch (error) {
    throw error
  }
}

const GetAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: { model: Event, as: 'events' }
    })
    res.send(categories)
  } catch (error) {
    throw error
  }
}

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.send(category)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCategory,
  GetAllCategories,
  createCategory
}
