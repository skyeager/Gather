import { useEffect } from 'react'
import { GetCategoryList } from '../services/CategoryServices'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import CreateEvent from './CreateEvent'
import { Link } from 'react-router-dom'
import MyList from './MyList'

const CategoryList = ({
  user,
  categoryList,
  setCategoryList,
  formState,
  setFormState,
  initialState
}) => {
  let navigate = useNavigate()

  let { id } = useParams()

  useEffect(() => {
    const handleCategoryList = async () => {
      const data = await GetCategoryList(id)
      setCategoryList(data)
    }
    handleCategoryList()
  }, [])

  const deleteEvent = async (eventId, index) => {
    console.log(eventId)
    await Client.delete(`/event/delete/${eventId}`)
    let newList = [...categoryList]
    newList.splice(index, 1)
    setCategoryList(newList)
  }

  return (
    <div className="category-list">
      <MyList />
      <Link to="/create/event">Create an Event</Link>
      {categoryList?.map((catEvent, index) => (
        <div className="category-card" key={catEvent.id}>
          <h1>{catEvent.name}</h1>
          <h4>{catEvent.description}</h4>
          <h2>{catEvent.date}</h2>
          {/* <h4>People Attending: {catEvent.attending.length}</h4> */}
          <button onClick={() => navigate(`/event/update/${id}/${index}`)}>
            Update
          </button>
          <button onClick={() => deleteEvent(catEvent.id, index)}>
            {' '}
            Delete{' '}
          </button>
          <button onClick={() => <MyList catEvent={catEvent} />}>
            Add to My List
          </button>
        </div>
      ))}
      {/* <CreateEvent
        setFormState={setFormState}
        formState={formState}
        initialState={initialState}
        user={user}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      /> */}
    </div>
  )
}

export default CategoryList
