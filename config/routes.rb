Rails.application.routes.draw do
  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :phone_numbers, only: [:create, :destroy]
    get 'twilio_lookup', to: 'phone_numbers#twilio_lookup'
  end

  root to: 'static_pages#root'
end
