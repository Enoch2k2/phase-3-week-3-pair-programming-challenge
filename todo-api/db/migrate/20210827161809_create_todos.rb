class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :completed
      t.date :due_date
      t.date :completed_on

      t.timestamps null: false
    end
  end
end
