require 'byebug'

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

    if params[:perestroika]
      if @card.list_id != card_params[:list_id].to_i  #card moved to another list
        traveling_card = @card    #source card, to be destroyed from departure_list after restructure
        departure_list_id = @card.list_id
        arrival_list_id = card_params[:list_id].to_i
        arrival_gate = card_params[:order].to_i
        Card.perestroika_in_two_lists(traveling_card, departure_list_id, arrival_list_id, arrival_gate)
      else
        cards_array = @card.list.cards.to_a.sort_by { |list| list.order }
        Card.perestroika_in_one_list(cards_array, @card.order, card_params[:order].to_i)
      end
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
