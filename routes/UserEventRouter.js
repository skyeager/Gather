const router = require('express').Router()
const controller = require('../controllers/UserEventController')

router.get('/list/:user_id', controller.GetUserEventList)
router.get('/attendees/:event_id', controller.GetAttendees)

module.exports = router
