Rails.application.routes.draw do
  post '/signin', to: 'sessions#sign_in'
  delete '/logout', to: 'sessions#destroy'

  get  'genre/index',  to: 'genres#index'
  get  'genre/show/:id',  to: 'genres#show'
  
  get  'log',  to: 'logs#index'
  get  'log/:id',  to: 'logs#show'
  post 'log',  to: 'logs#create'

  get 'message/:id', to: 'messages#show'
  post 'message', to: 'messages#create'
  put 'message', to: 'messages#update'

  # resources :users
  get '/me', to: 'users#show'
  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  put '/users', to: 'users#update'
  delete '/users', to: 'users#destroy'
  
end

