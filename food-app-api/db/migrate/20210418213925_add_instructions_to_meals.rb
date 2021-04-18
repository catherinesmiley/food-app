class AddInstructionsToMeals < ActiveRecord::Migration[6.1]
  def change
    add_column :meals, :instructions, :string
  end
end
