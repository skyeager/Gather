const router = require('express').Router()
const controller = require('../controllers/UserEventController')
// const middleware = require('../middleware')

router.get('/list/:user_id', controller.GetUserEventList)
router.get('/attendees/:event_id', controller.GetAttendees)

module.exports = router
