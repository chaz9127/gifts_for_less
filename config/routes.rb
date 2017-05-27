Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'application#home'

  namespace :api do
    namespace :web do
      resources :products, only: [:index]
      resources :tags, only: [:index]
    end
  end
end
