class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)

    if @list.save
      @board = @list.board
      render "api/boards/show"
    else
      render(json: ["Invalid title"], status: 401)
    end
  end

  def update
    @list = List.find(params[:id])
    if params[:perestroika]
      lists_array = @list.board.lists.to_a.sort_by { |list| list.order }
      List.perestroika(lists_array, @list.order, list_params[:order].to_i) #list array, old order, and new order
    else
      @list.update(list_params)
    end

    @board = @list.board

    render 'api/boards/show'
  end


  def destroy
    @list = List.find(params[:id])

    if @list.destroy
      render  'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end


  private

  def list_params
    params.require(:list).permit(:board_id, :order, :title)
  end


end
