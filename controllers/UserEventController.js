const { User, Event } = require('../models')

const GetUserEventList = async (req, res) => {
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
