import Client from '../services/api'
import { useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from "react-router-dom"

const CreateEvent = () => {
  // let navigate=useNavigate()

  const initialState = {
    event_id: '',
    name: '',
    description: '',
    date: '',
    category_id: ''
  }

  const [formState, setFormState] = useState()

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
    let res = await Client.post(
      `${BASE_URL}/event/create${user.id}`,
      eventAdded
    )
    setFormState(initialState)
  }

  return (
    <div>
      <h1>Post an Event</h1>
      {/* add something to input event category into this h1 (i.e. post a music event!) */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Event: </label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          className="form-box"
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
          {/* will hopefully not need this drop down, will automatically go! */}
          <option value={1}>Movement</option>
          <option value={2}>Music</option>
          <option value={3}>Food</option>
        </select>
        <button type="submit">Create My Event</button>
      </form>
    </div>
  )
}

export default CreateEvent
