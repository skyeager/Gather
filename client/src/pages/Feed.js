import { useEffect, useState } from 'react'
import { GetCategories } from '../services/CategoryServices'
import { useNavigate } from 'react-router-dom'

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
    <div className="grid-col-4">
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
      {/* {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <img src={post.image} alt="post" />
          </div>
          <p>{post.body.substring(0, 80)}...</p> */}
    </div>
  ) : (
    <div className="protected">
      <h3>You must be signed in to do that! Try signing in. </h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Feed
