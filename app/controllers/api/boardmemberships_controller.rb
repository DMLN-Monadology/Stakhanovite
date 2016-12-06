require 'byebug'

class Api::BoardmembershipsController < ApplicationController

  def create
    @membership = BoardMembership.new(board_membership_params)
    @membership.save
  end

  def destroy
    @membership = BoardMembership.find(params[:id])
    @membership.destroy

  end

  private

  def board_membership_params
    params.require(:boardmembership).permit(:member_id, :board_id)
  end

end
