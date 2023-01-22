import { NavLink,} from '@remix-run/react'

export default function MainNav () {
  return <nav>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/notes">
          Anotações
        </NavLink>
      </li>
    </ul>
  </nav>
}