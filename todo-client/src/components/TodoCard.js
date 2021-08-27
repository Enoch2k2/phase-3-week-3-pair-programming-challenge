import React from 'react'
import { NavLink } from 'react-router-dom';

const TodoCard = ({ todo }) => {
  return (
    <li>
      <NavLink to={`/todos/${ todo.id }`}>{ todo.title }</NavLink>
    </li>
  )
}

export default TodoCard
