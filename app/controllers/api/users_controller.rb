
class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.image_url == nil
      @user.image_url = "http://res.cloudinary.com/dmuuruew8/image/upload/v1480588395/latest_gkgm8c.png"
    end
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all

    render "api/users/index"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
