import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <section className="welcome-signin">
        {/* <button onClick={() => navigate('/signin')}>
          Click Here To Register
        </button> */}
      </section>
    </div>
  )
}

export default Home
