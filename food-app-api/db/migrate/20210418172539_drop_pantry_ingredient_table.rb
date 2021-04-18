class DropPantryIngredientTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :pantry_ingredients
  end
end
