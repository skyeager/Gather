import { useEffect, useState } from 'react'
import { GetCategories } from '../services/CategoryServices'
import { useNavigate, Link } from 'react-router-dom'
import MyList from './MyList'

const Feed = ({ user }) => {
  const [categories, setCategories] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategories()
      setCategories(data)
      console.log(data)
    }
    handleCategories()
  }, [])

  return user ? (
    <div className="feed">
      <div>
        {/* <MyList user={user} /> */}
        <div className="feedlist">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <h1>{category.name}</h1>
              <h4>{category.description}</h4>
              <button
                className="events-button"
                onClick={() => navigate(`/categorylist/${category.id}`)}
              >
                Events
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>You must be signed in to do that! Try signing in. </h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Feed
