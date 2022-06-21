Rails.application.routes.draw do
  resources :plans
  resources :links
  resources :courses
  resources :subscriptions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
