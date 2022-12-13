import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className="Nav">
        <nav>
          <h1>Gather</h1>
          <Link to="/feed">Feed</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
          <h1>Welcome {user.email}</h1>
        </nav>
      </div>
    )
  }

  const publicOptions = (
    <div className="Nav">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </div>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          {/* <img
            className="logo"
            src="https://avatars.dicebear.com/api/gridy/app.svg"
            alt="welcome banner"
          /> */}
        </div>
      </Link>
      {user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
