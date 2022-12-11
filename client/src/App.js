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
// import CreateEvent from './pages/CreateEvent'
// import UpdateEvent from './pages/UpdateEvent'

const App = () => {
  const [user, setUser] = useState(null)

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
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/categorylist/:id" element={<CategoryList />} />
          {/* <Route
            path="/"
            element={
              <CreateEvent
                user={user}
                initialState={initialState}
                formState={formState}
                setFormState={setFormState}
              />
            }
          /> */}
          {/* <Route
            path=""
            element={
              <UpdateEvent
                user={user}
                formState={formState}
                setFormState={setFormState}
                initialState={initialState}
              />
            }
          /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
