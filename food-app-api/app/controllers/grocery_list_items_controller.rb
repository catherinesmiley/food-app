class GroceryListItemsController < ApplicationController
  before_action :set_grocery_list_item, only: [:show, :update, :destroy]

  # GET /grocery_list_items
  def index
    @grocery_list_items = GroceryListItem.all

    render json: @grocery_list_items
  end

  # GET /grocery_list_items/1
  def show
    render json: @grocery_list_item
  end

  # POST /grocery_list_items
  def create
    @grocery_list_item = GroceryListItem.new(grocery_list_item_params)

    if @grocery_list_item.save
      render json: @grocery_list_item, status: :created, location: @grocery_list_item
    else
      render json: @grocery_list_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /grocery_list_items/1
  def update
    if @grocery_list_item.update(grocery_list_item_params)
      render json: @grocery_list_item
    else
      render json: @grocery_list_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /grocery_list_items/1
  def destroy
    @grocery_list_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grocery_list_item
      @grocery_list_item = GroceryListItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def grocery_list_item_params
      params.fetch(:grocery_list_item, {})
    end
end
