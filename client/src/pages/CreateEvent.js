import Client from '../services/api'
import { useParams } from 'react-router-dom'

const CreateEvent = ({
  formState,
  setFormState,
  initialState,
  categoryList,
  setCategoryList
}) => {
  let { id } = useParams()

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
    await Client.post(`/event/create/${id}`, eventAdded)
    let newList = [...categoryList]
    newList.push(eventAdded)
    console.log(newList)
    setCategoryList(newList)
    setFormState(initialState)
  }

  return (
    <div className="create-event-form">
      <h1>Create an Event</h1>
      <form onSubmit={handleSubmit} className="create-event-form">
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
          rows="20"
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
          id="categoryId"
          value={formState.categoryId}
        >
          <option>Event Category</option>
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
