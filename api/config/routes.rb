Rails.application.routes.draw do
  get  'genre/index',  to: 'genres#index'
  get  'genre/show/:id',  to: 'genres#show'
  get  'log',  to: 'logs#index'
  get  'log/:id',  to: 'logs#show'
  post 'log',  to: 'logs#create'
  resources :users
end

