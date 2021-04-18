class PantryItemsController < ApplicationController
  before_action :set_pantry_item, only: [:show, :update, :destroy]

  # GET /pantry_items
  def index
    @pantry_items = PantryItem.all

    render json: @pantry_items
  end

  # GET /pantry_items/1
  def show
    render json: @pantry_item
  end

  # POST /pantry_items
  def create
    @pantry_item = PantryItem.new(pantry_item_params)

    if @pantry_item.save
      render json: @pantry_item, status: :created, location: @pantry_item
    else
      render json: @pantry_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pantry_items/1
  def update
    if @pantry_item.update(pantry_item_params)
      render json: @pantry_item
    else
      render json: @pantry_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pantry_items/1
  def destroy
    @pantry_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pantry_item
      @pantry_item = PantryItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pantry_item_params
      params.require(:pantry_item).permit(:name, :purchase_date, :expiration_date, :amount)
    end
end
