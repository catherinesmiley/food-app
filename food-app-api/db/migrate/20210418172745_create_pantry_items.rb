class CreatePantryItems < ActiveRecord::Migration[6.1]
  def change
    create_table :pantry_items do |t|
      t.string :name
      t.string :purchase_date
      t.string :expiration_date
      t.string :amount

      t.timestamps
    end
  end
end
