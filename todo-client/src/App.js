import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/todos" component={ TodoList } />
          <Route exact path="/todos/new" component={ TodoForm } />
          <Route exact path="/todos/:id/edit" component={ TodoForm } />
          <Route exact path="/todos/:id" component={ Todo } />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
