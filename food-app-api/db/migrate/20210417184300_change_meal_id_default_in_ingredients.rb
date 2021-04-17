class ChangeMealIdDefaultInIngredients < ActiveRecord::Migration[6.1]
  def change
    change_column :ingredients, :meal_id, :integer, :null => true 
  end
end
