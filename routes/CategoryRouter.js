const router = require('express').Router()
const controller = require('../controllers/CategoryController')

router.get('/:category_id', controller.GetCategory)
router.get('/', controller.GetAllCategories)
router.post('/create', controller.createCategory)

module.exports = router
