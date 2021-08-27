import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom';

const Todo = () => {
  const [ todo, setTodo ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  const loadTodo = async () => {
    const resp = await fetch('http://localhost:9393/todos/' + id);
    const data = await resp.json();

    setTodo(data);
    setLoading(false);
  }

  useEffect(() => {
    loadTodo();
  }, []);

  const toggle = async () => {
    const resp = await fetch('http://localhost:9393/todos/' + id + '/toggle_completed', { method: "PATCH" } )
    const data = await resp.json();
    setTodo(data);
  }

  const deleteTodo = async () => {
    await fetch('http://localhost:9393/todos/' + id, { method: "DELETE" } )
    
    history.push("/todos");
  }

  if(loading) { return <h1>Loading...</h1> };

  return (
    <div>
      <h1>{todo.title }</h1>
      <p>Status: { todo.completed ? "Complete" : "Not Complete" }</p>
      <p>Due Date: { todo.due_date }</p>
      { todo.completed_on ? <p>Completed: {todo.completed_on}</p> : null }
      <p><NavLink to={`/todos/${ id }/edit`}>Edit</NavLink></p>
      <button onClick={ toggle }>Toggle Complete</button>
      <button onClick={ deleteTodo }>Delete</button>
    </div>
  )
}

export default Todo
