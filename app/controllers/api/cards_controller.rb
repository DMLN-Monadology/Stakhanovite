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
    @card = Card.find(params[:id])

    if params[:perestroikaInOneList]

    elsif params[:perestroikaInTwoLists]

    else
      @card.update(card_params)
    end

    @board = @card.list.board

    render 'api/boards/show'
  end

  def destroy
    @card = Card.find(params[:id])

    if @card.destroy
      render "api/boards/show"
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:list_id, :title, :order, :description)
  end
end
