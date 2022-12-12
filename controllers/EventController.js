const { Event, User, Category } = require('../models')

const GetEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.event_id)
    res.send(event)
  } catch (error) {
    throw error
  }
}

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
    res.send(events)
  } catch (error) {
    throw error
  }
}

const CategoryListOfEvents = async (req, res) => {
  try {
    const categorizedEvents = await Category.findByPk(
      parseInt(req.params.category_id),
      {
        include: { model: Event, as: 'events' }
      }
    )
    res.send(categorizedEvents)
  } catch (error) {
    throw error
  }
}

const CreateEvent = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let eventBody = {
      user_id: userId,
      ...req.body
    }
    let event = await Event.create(eventBody)
    res.send(event)
  } catch (error) {
    throw error
  }
}

const UpdateEvent = async (req, res) => {
  try {
    const event = await Event.update(
      { ...req.body },
      { where: { id: req.params.event_id }, returning: true }
    )
    res.send(event)
  } catch (error) {
    throw error
  }
}

const DeleteEvent = async (req, res) => {
  try {
    await Event.destroy({ where: { id: req.params.event_id } })
    res.send({
      msg: 'Event deleted!',
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetEvent,
  GetAllEvents,
  CategoryListOfEvents,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}
