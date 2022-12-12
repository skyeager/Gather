import { useState, useEffect } from 'react'
import { GetCategoryList } from '../services/CategoryServices'
import { useParams } from 'react-router-dom'

const CategoryList = ({ user }) => {
  const [categoryList, setCategoryList] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const handleCategoryList = async () => {
      const data = await GetCategoryList(id)
      setCategoryList(data)
      console.log(data)
    }
    handleCategoryList()
  }, [])

  return (
    <div className="grid col-4">
      {categoryList?.map((catEvent) => (
        <div className="category-card" key={catEvent.id}>
          <h1>{catEvent.name}</h1>
          <h4>{catEvent.description}</h4>
          <h2>{catEvent.date}</h2>
          <h4>People Attending: {catEvent.attending.length}</h4>
          <div>
            user ? (
            <button onClick={() => navigate(`/categorylist/${category.id}`)}>
              {' '}
              Update:{' '}
            </button>
            <button> Delete: </button>
            ):()
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
