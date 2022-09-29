import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              end
            >
              Create Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            >
              Employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
