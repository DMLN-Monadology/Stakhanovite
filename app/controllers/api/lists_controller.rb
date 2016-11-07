class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)

    if @list.save
      render "api/lists/show"
    else
      render(json: ["Invalid title"], stautus: 401)
    end
  end

  def update
    @list = list.find(params[:id])
    if @list.update(list_params)
      render "api/lists/show"
    else
      render(json: ["Invalid title"], status: 401)
    end
  end

  def destroy
    @list = List.find(params[:id])

    if @list.destroy
      render "api/lists/show"
    else
      render json: @board.errors.full_messages, status: 422
    end
  end


  private

  def list_params
    params.require(:list).permit(:board_id, :title)
  end


end
