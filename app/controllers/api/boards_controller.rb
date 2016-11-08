class Api::BoardsController < ApplicationController

  def show
    @board = Board.find(params[:id])
    render "api/boards/show"
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render "api/boards/show"
    else
      render(json: ["Invalid title"], status: 401)
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render "api/boards/show"
    else
      render(json: ["Invalid title"], status: 401)
    end
  end

  def destroy
    @board = Board.find(params[:id])

    if @board.destroy
      render "api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end


  private

  def board_params
    params.require(:board).permit(:owner_id, :title)
  end
end
