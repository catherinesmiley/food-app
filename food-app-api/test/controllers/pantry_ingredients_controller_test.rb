require "test_helper"

class PantryIngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pantry_ingredient = pantry_ingredients(:one)
  end

  test "should get index" do
    get pantry_ingredients_url, as: :json
    assert_response :success
  end

  test "should create pantry_ingredient" do
    assert_difference('PantryIngredient.count') do
      post pantry_ingredients_url, params: { pantry_ingredient: { amount: @pantry_ingredient.amount, date_purchased: @pantry_ingredient.date_purchased, expiration_date: @pantry_ingredient.expiration_date, name: @pantry_ingredient.name } }, as: :json
    end

    assert_response 201
  end

  test "should show pantry_ingredient" do
    get pantry_ingredient_url(@pantry_ingredient), as: :json
    assert_response :success
  end

  test "should update pantry_ingredient" do
    patch pantry_ingredient_url(@pantry_ingredient), params: { pantry_ingredient: { amount: @pantry_ingredient.amount, date_purchased: @pantry_ingredient.date_purchased, expiration_date: @pantry_ingredient.expiration_date, name: @pantry_ingredient.name } }, as: :json
    assert_response 200
  end

  test "should destroy pantry_ingredient" do
    assert_difference('PantryIngredient.count', -1) do
      delete pantry_ingredient_url(@pantry_ingredient), as: :json
    end

    assert_response 204
  end
end
