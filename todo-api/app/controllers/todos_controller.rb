class TodosController < ApplicationController
  get "/todos" do
    Todo.all.to_json
  end

  get "/todos/:id" do
    find_todo
    if @todo
      @todo.to_json
    else
      { errors: ["Todo Not Found"] }.to_json
    end
  end

  post "/todos" do
    @todo = Todo.new(params)
    if @todo.save
      @todo.to_json
    else
      todo_error_messages
    end
  end

  patch "/todos/:id/toggle_completed" do
    find_todo
    if @todo.update(completed: !@todo.completed, completed_on: @todo.completed_on ? nil : Date.today)
      @todo.to_json
    else
      todo_error_messages
    end
  end

  patch "/todos/:id" do
    find_todo

    if @todo.update(params)
      @todo.to_json
    else
      todo_error_messages
    end
  end

  delete "/todos/:id" do
    find_todo

    if @todo
      @todo.destroy
      @todo.to_json
    else
      { errors: ["Todo Not Found"] }.to_json
    end
  end

  private

  def find_todo
    @todo = Todo.find_by_id(params["id"])
  end

  def todo_error_messages
    { errors: @todo.errors.full_messages }.to_json
  end

end