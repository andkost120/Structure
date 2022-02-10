import React from "react"
import { Link } from "gatsby"

const NavLink = ({ link }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/${link.uid}`}>
        {link.name}
      </Link>
    </li>
  )
}

export default NavLink
