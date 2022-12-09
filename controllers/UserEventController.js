const { User, Event } = require('../models')

const GetUserEvents = async (req, res) => {
  try {
    const userEvents = await res.send(userEvents)
  } catch (error) {
    throw error
  }
}

const GetAttendees = async (req, res) => {
  try {
    const attendees = await Event.findAll({
      include: [
        {
          model: User,
          as: 'attendee',
          attributes: ['id', 'username']
        }
      ]
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserEvents,
  GetAttendees
}
