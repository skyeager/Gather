const router = require('express').Router()
const controller = require('../controllers/EventController')
const middleware = require('../middleware')

router.get('/everyevent', controller.GetAllEvents)
router.get('/:event_id', controller.GetEvent)
router.get('/categorylist/:category_id', controller.CategoryListOfEvents)

router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateEvent
)

router.put(
  '/update/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateEvent
)

router.delete(
  '/delete/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteEvent
)

module.exports = router
