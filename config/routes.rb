Rails.application.routes.draw do
  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :phone_numbers, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
