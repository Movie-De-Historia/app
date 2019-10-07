Rails.application.routes.draw do
  get  'genre/index',  to: 'genres#index'
  get  'genre/show/:id',  to: 'genres#show'
  resources :users
end

