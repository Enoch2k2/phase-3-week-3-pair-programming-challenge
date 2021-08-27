import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const TodoForm = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    title: "",
    due_date: ""
  })

  const history = useHistory();
  const { id } = useParams();

  const loadTodo = async () => {
    const resp = await fetch('http://localhost:9393/todos/' + id);
    const data = await resp.json();

    setState({
      ...data
    })
    setLoading(false);
  }

  useEffect(() => {
    if(id) {
      loadTodo();
    } else {
      setLoading(false);
    }
  }, []);

  const handleChange = e => {
    if(e.target.type == "checkbox") {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
  
      today = yyyy + "-" + mm + '-' + dd
      
      setState({
        ...state,
        completed: e.target.checked,
        completed_on: e.target.checked ? today : null
      })
      return;
    }
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  
  const handleSubmit = async e => {
    e.preventDefault();
    const baseUrl = 'http://localhost:9393'
    const url = id ? baseUrl + "/todos/" + id : baseUrl + "/todos";
    
    const method = id ? "PATCH" : "POST";

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const body = JSON.stringify({
      ...state,
      completed: !!state.completed,
      completed_on: !!state.completed ? state.completed_on : null
    })
    
    const options = {
      method,
      headers,
      body
    }
    
    await fetch(url, options);
    
    if( id ) {
      history.push("/todos/" + id );
    } else {
      history.push("/todos");
    }
  }
  
  if(loading) { return <h1>Loading...</h1> };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={ state.title } onChange={ handleChange } required={true} autoFocus={true} />
        </div>
        <div>
          <label htmlFor="due_date">Due Date: </label>
          <input type="date" id="due_date" name="due_date" value={ state.due_date } onChange={ handleChange } required={true} />
        </div>

        { id ? (<div>
          <label htmlFor="completed">Completed?: </label>
          <input type="checkbox" id="completed" name="completed" value={ state.completed } onChange={ handleChange } checked={ state.completed ? true : false } />
        </div>) : null}

        <input type="submit" value={ id ? "Edit Todo" : "Create Todo"} />
      </form>
    </div>
  )
}

export default TodoForm
