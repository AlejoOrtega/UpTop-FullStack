Rails.application.routes.draw do
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  delete '/delete-account', to: 'users#destroy'
  patch '/user', to: 'users#update'

  post '/join-plan', to: 'subscriptions#create'

  get '/my-courses', to: 'courses#show'
  get '/courses', to: 'courses#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/banned-users', to: 'users#users_banned'
  get '/not-banned-users', to: 'users#users_not_banned'
  patch '/users/ban', to: 'users#change_user_status_banned'
  get '/plans', to: 'plans#index'
  post '/courses', to: 'courses#create'
  patch '/courses', to: 'courses#update'
  delete '/courses/:id', to: 'courses#destroy'
  post '/links', to: 'links#create'
  patch '/links', to: 'links#update'
  delete '/links/:id', to: 'links#destroy'
  get '/courses/:id/links', to: 'courses#course_links' 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

