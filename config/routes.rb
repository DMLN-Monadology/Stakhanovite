Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :destroy, :update]
    resources :cards, only: [:create, :destroy, :update]
    resources :boardmemberships, only: [:create, :destroy]
  end

  root to: "static_pages#root"

end
