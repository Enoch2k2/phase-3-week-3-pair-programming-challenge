# Phase 3 Pair Programming Challenge

### Overview
We are building a simple Todo app. Where we are able to create todos, list out todos, get todo information, edit todos, and delete todos.

We should also be able to toggle todos completed or not completed. (BONUS)

### Deliverables
* Create a Front End React App called simple-todo-client
* Create a Back End Sinatra app using corneal-new to create an app called simple-todo-api
* The backend API should have a controller called TodosController which will create all of our endpoints for full CRUD.
* The models will include only Todo
* Todo should have a title which will be a string
* Todo should have a completed attribute which should be a boolean
* Todo should have a date attribute which it should be completed by, like a due date (bonus)
* Todo should have a date attribute which it had been completed (bonus)
* The front end should consist of:
  * A Todo list page which only lists the titles of the todo which are links to the show page of a todo (/todos/:id)
  * A todo show page which details the todo including the title, completed status, to be completed on date (bonus), completed on date (bonus) ( due_date, completed_date)
  * A todo new page which we will be able to create a new Todo, should redirect back to the Todo List page
  * A todo edit page which we will be able to edit.
  * The ability to delete a todo (best placed in either the list page or the show page of the Todo)
  * A button that will toggle the todo from completed to incomplete and vice versa. I will say that you will need a custom route in the backend to make this more simple. Can be an easy GET route. (BONUS)
  * React Router DOM in order to create routes and links to these pages
  * Navbar
  * BONUS: Create a fallback 404 page component

### Note
This will seem like ALOT. This is a lot. However, you can use the lecture we did yesterday as reference. Completely fine. Even if it’s almost a complete copy from yesterday’s lecture. The only ask that I ask of you. Write it out. Don’t copy and paste. When you write it out, talk about it with your partner. Debunk why it works. Break it down. The goal is to learn with your partner. Not just get a completed app.

### Finished?
When you are finished. Raise your hand and show me your work! Each student is asked to explain one feature’s flow. Once the group is finished, you can go ahead and leave the session and have a great day! 😊