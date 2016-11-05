class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
              params[:user][:username],
              params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render(json: ["This username and/or password is not valid"], status: 401)
    end
  end

  def destroy
    if current_user
      sign_out
      # render "api/sessions/new"
    else
      render(json: ["Not Signed in"], status: 404)
    end
  end
end
