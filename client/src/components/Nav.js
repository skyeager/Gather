import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h1 className="gather-title">Gather</h1>
        <ul className="nav-links">
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link onClick={handleLogOut} to="/">
              Sign Out
            </Link>
          </li>
          <li>
            <Link to="/create/event">Create an Event</Link>
          </li>
        </ul>
      </nav>
    )
  }

  const publicOptions = (
    <div className="Nav">
      <nav className="signin-links">
        <h1>Gather</h1>
        {/* <Link to="/" className="signin-nav-links">
          Home
        </Link> */}
        <Link to="/register" className="signin-nav-links">
          Register
        </Link>
        <Link to="/signin" className="signin-nav-links">
          Sign In
        </Link>
      </nav>
    </div>
  )

  return (
    <header>
      <Link to="/"></Link>
      {user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
