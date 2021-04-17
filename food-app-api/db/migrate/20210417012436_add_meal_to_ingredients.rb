class AddMealToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_reference :ingredients, :meal, null: false, foreign_key: true
  end
end
