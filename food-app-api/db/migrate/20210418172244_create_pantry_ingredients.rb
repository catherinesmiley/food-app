class CreatePantryIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :pantry_ingredients do |t|
      t.string :name
      t.string :date_purchased
      t.string :expiration_date
      t.string :amount

      t.timestamps
    end
  end
end
