import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todos">Todos</NavLink></li>
        <li><NavLink to="/todos/new">Create Todos</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
