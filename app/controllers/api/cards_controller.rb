class Api::CardsController < ApplicationController

  def create
    @card = Card.new(card_params)

    if @card.save
      @board = @card.list.board
      render "api/boards/show"
    else
      render(json: ["invalid card"], status: 401)
    end
  end

  def update

  end

  def destroy
    
  end

  private

  def card_params
    params.require(:card).permit(:list_id, :title, :order, :description)
  end
end
