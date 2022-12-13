import { useEffect } from 'react'
import { GetCategoryList } from '../services/CategoryServices'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import CreateEvent from './CreateEvent'

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
      console.log(data)
    }
    handleCategoryList()
  }, [])

  const deleteEvent = async (e) => {
    const res = await Client.delete(`/event/delete/${e.target.id}`)
    navigate(`/categorylist/${id}`)
  }

  return (
    <div className="grid col-4">
      {categoryList?.map((catEvent, index) => (
        <div className="category-card" key={catEvent.id}>
          <h1>{catEvent.name}</h1>
          <h4>{catEvent.description}</h4>
          <h2>{catEvent.date}</h2>
          {/* <h2>{catEvent.categoryId}</h2> */}

          {/* <h4>People Attending: {catEvent.attending.length}</h4> */}
          <div>
            <button onClick={() => navigate(`/event/update/${id}/${index}`)}>
              Update
            </button>
            <button onClick={deleteEvent}> Delete </button>
          </div>
        </div>
      ))}
      <CreateEvent
        setFormState={setFormState}
        formState={formState}
        initialState={initialState}
        user={user}
      />
    </div>
  )
}

export default CategoryList
