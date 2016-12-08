
class Api::BoardmembershipsController < ApplicationController

  def create
    @membership = BoardMembership.new(board_membership_params)
    @membership.save
    @board = @membership.board
    render "api/boards/show"
  end

  def destroy
    @membership = BoardMembership.find(params[:id])
    @board = @membership.board
    @membership.destroy
    render "api/boards/show"
  end

  private

  def board_membership_params
    params.require(:boardmembership).permit(:member_id, :board_id)
  end

end
