import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import './App.css'
import Feed from './pages/Feed'
import CategoryList from './pages/CategoryList'
import CreateEvent from './pages/CreateEvent'
import UpdateEvent from './pages/UpdateEvent'
import MyList from './pages/MyList'

const App = () => {
  const [user, setUser] = useState(null)
  const [categoryList, setCategoryList] = useState([])

  const initialState = {
    event_id: '',
    name: '',
    description: '',
    date: '',
    category_id: ''
  }

  const [formState, setFormState] = useState(initialState)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <div>
        <Nav user={user} handleLogOut={handleLogOut} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed user={user} />} />
            <Route
              path="/categorylist/:id"
              element={
                <CategoryList
                  user={user}
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  formState={formState}
                  setFormState={setFormState}
                  initialState={initialState}
                />
              }
            />
            <Route
              path="/create/event"
              element={
                <CreateEvent
                  user={user}
                  formState={formState}
                  setFormState={setFormState}
                  initialState={initialState}
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                />
              }
            />
            <Route
              path="/event/update/:id/:index"
              element={
                <UpdateEvent
                  user={user}
                  formState={formState}
                  setFormState={setFormState}
                  initialState={initialState}
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
