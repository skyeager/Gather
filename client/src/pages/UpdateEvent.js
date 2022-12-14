import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateEvent = ({
  initialState,
  formState,
  setFormState,
  categoryList
}) => {
  let { id, index } = useParams()
  let eventId = formState.event_id

  let navigate = useNavigate()

  useEffect(() => {
    let selected = {
      event_id: categoryList[index].id,
      name: categoryList[index].name,
      description: categoryList[index].description,
      date: categoryList[index].date,
      category_id: categoryList[index].categoryId
    }
    setFormState(selected)
  }, [])

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const eventAdded = {
      ...formState
    }
    await Client.put(`/event/update/${eventId}`, eventAdded)
    setFormState(initialState)

    navigate(`/categorylist/${id}`)
  }

  return (
    <div>
      <h1 className="update-event-title">Update an Event</h1>
      <form onSubmit={handleSubmit} className="update-event-form">
        <label htmlFor="name">Event: </label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          className="form-box-description"
          onChange={handleChange}
          type="text"
          id="description"
          cols="30"
          rows="10"
          value={formState.description}
        ></textarea>
        <label htmlFor="date">Date: </label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="date"
          value={formState.date}
        />
        <select
          className="form-box"
          onChange={handleChange}
          value={formState.category_id}
          id="category_id"
        >
          <option>Event Category</option>
          <option value={1}>Movement</option>
          <option value={2}>Music</option>
          <option value={3}>Food</option>
        </select>
        <button type="submit">Submit Update</button>
      </form>
    </div>
  )
}

export default UpdateEvent
