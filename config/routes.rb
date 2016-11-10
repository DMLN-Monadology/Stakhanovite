Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :destroy, :update]
    resources :cards, only: [:create, :destroy, :update]
  end

  root to: "static_pages#root"

end
