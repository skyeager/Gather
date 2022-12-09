const { User, Event } = require('../models')

const GetUserEventList = async (req, res) => {
  try {
    const userAndList = await User.findByPk(req.params.user_id, {
      include: [
        {
          model: Event,
          as: 'attendee'
        }
      ]
    })
    res.send(userAndList)
  } catch (error) {
    throw error
  }
}

const GetAttendees = async (req, res) => {
  try {
    const eventAndAttendees = await Event.findByPk(req.params.event_id, {
      include: [
        {
          model: User,
          as: 'user_event_list'
        }
      ]
    })
    res.send(eventAndAttendees)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserEventList,
  GetAttendees
}
