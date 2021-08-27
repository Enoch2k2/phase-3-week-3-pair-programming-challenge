import React, { useState, useEffect } from 'react'
import TodoCard from './TodoCard';

const TodoList = () => {
  const [loading, setLoading ] = useState(true);
  const [todos, setTodos] = useState([])

  const loadTodos = async () => {
    const resp = await fetch('http://localhost:9393/todos');
    const data = await resp.json();

    setTodos(data);
    setLoading(false);
  }

  
  useEffect(() => {
    loadTodos();
  }, [])
  
  if(loading){ return <h1>Loading...</h1> };

  const todoCards = todos.map((todo, index) => <TodoCard key={ index } todo={ todo } />)

  return (
    <div>
      <h1>Todos</h1>
      { todoCards }
    </div>
  )
}

export default TodoList
