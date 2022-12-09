const { Event, User, Category } = require('../models')

const GetEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.event_id)
    res.send(event)
  } catch (error) {
    throw error
  }
}

const CategoryListOfEvents = async (req, res) => {
  const categorizedEvents = await Category.findbyPk(req.params.category_id, {
    include: Event
  })
  res.send(categorizedEvents)
  try {
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
  CategoryListOfEvents,
  CreateEvent,
  UpdateEvent,
  DeleteEvent
}
