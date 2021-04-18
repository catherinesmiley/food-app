require "test_helper"

class PantryItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pantry_item = pantry_items(:one)
  end

  test "should get index" do
    get pantry_items_url, as: :json
    assert_response :success
  end

  test "should create pantry_item" do
    assert_difference('PantryItem.count') do
      post pantry_items_url, params: { pantry_item: { amount: @pantry_item.amount, expiration_date: @pantry_item.expiration_date, name: @pantry_item.name, purchase_date: @pantry_item.purchase_date } }, as: :json
    end

    assert_response 201
  end

  test "should show pantry_item" do
    get pantry_item_url(@pantry_item), as: :json
    assert_response :success
  end

  test "should update pantry_item" do
    patch pantry_item_url(@pantry_item), params: { pantry_item: { amount: @pantry_item.amount, expiration_date: @pantry_item.expiration_date, name: @pantry_item.name, purchase_date: @pantry_item.purchase_date } }, as: :json
    assert_response 200
  end

  test "should destroy pantry_item" do
    assert_difference('PantryItem.count', -1) do
      delete pantry_item_url(@pantry_item), as: :json
    end

    assert_response 204
  end
end
