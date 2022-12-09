const router = require('express').Router()
const controller = require('../controllers/UserEventController')
// const middleware = require('../middleware')

router.get('/list', controller.GetUserEventList)
router.get('/attendees', controller.GetAttendees)

module.exports = router
