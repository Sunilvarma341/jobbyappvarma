import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    // <nav className="navbar-container">
    <ul className="navbar-container">
      <li>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo-nav"
          />
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/jobs" className="nav-link">
          Jobs
        </Link>
      </li>
      <li>
        <button type="button" className="logout" onClick={onClickLogout}>
          Logout
        </button>
      </li>
    </ul>
    // </nav>
  )
}

export default withRouter(Navbar)
