class Ingredient < ApplicationRecord
    belongs_to :meal, optional: true 
    validates: :name, presence: true 
end
