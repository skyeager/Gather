const router = require('express').Router()
const controller = require('../controllers/EventController')
// const middleware = require('../middleware')

router.get('/:event_id', controller.GetEvent)
// router.get('/everyevent', controller.GetAllEvents)
router.get('/categorylist/:category_id', controller.CategoryListOfEvents)
router.post('/create/:user_id', controller.CreateEvent)
router.put('/update/:event_id', controller.UpdateEvent)
router.delete('/delete/:event_id', controller.DeleteEvent)

module.exports = router
