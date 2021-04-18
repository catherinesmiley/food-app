# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ingredients = Ingredient.create([{ name: 'Garlic Powder', amount: '1 Tbsp' }, { name: 'Soy Sauce', amount: '1/3 cup' }, { name: 'Chicken Drumsticks', amount: '1 lb' }])

pantry_items = PantryItem.create([{ name: 'Garlic Powder', purchase_date: '1/1/21', expiration_date: '2/22', amount: '9 oz' },
    { name: 'Cayenne Pepper', purchase_date: '1/1/21', expiration_date: 'n/a', amount: '7 oz' },
    { name: 'Rosemary', purchase_date: '1/1/21', expiration_date: '12/21', amount: '1 oz' },
    { name: 'Parsley', purchase_date: '1/1/20', expiration_date: '8/29/20', amount: '0.5 oz' }
])