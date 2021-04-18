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

chili = Meal.create(title: "Chili", description: "Slow cooker meal, not too spicy!", instructions: "1. Place ground beef and onion in skillet over medium heat and season with salt and pepper.
2. Stir to crumble.
3. Cook until browned.
4. Drain.
5. Transfer to slow cooker.
6. Add remaining ingredients.
7. Cover and cook on low 6-8 hours or high 4 hours.")
chili.ingredients.create([ {name: "Ground beef", amount: "1 lb" }, { name: "Onion", amount: "1"},
    { name: "Kidney beans", amount: "1 can" }, { name: "Chili powder", amount: "2 Tbsp" }, { name: "Cumin", amount: "2 Tbsp" },
    { name: "Diced tomatoes", amount: "1 can" }, { name: "Tomato paste", amount: "1 can" }, { name: "Minced garlic", amount: "1 Tbsp" }
])
