Rails.application.routes.draw do
  resources :pantry_items
  resources :meals
  resources :ingredients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
