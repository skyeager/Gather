const { User, Event } = require('../models')

const GetUserEventList = async (req, res) => {
  try {
    const userEventList = await User.findByPk(req.params.user_id, {
      include: [
        {
          model: Event,
          as: ''
        }
      ]
    })
    res.send(userEventList)
  } catch (error) {
    throw error
  }
}

const GetAttendees = async (req, res) => {
  try {
    const attendees = await Event.findByPk(req.params.event_id, {
      include: [
        {
          model: User,
          as: 'attendee',
          attributes: ['id', 'userName']
        }
      ]
    })
    res.send(attendees)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserEventList,
  GetAttendees
}
