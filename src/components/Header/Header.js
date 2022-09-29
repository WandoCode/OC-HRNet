import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/employees">view Current Employees</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
