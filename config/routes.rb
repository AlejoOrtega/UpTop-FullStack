Rails.application.routes.draw do
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/join-plan', to: 'subscriptions#create'

  post '/my-courses', to: 'courses#show'

  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

