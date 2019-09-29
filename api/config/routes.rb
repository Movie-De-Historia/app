Rails.application.routes.draw do
  # resource :sessions, only: [:create, :destroy]
  match '/login', to: 'sessions#create', via: 'post'
  match '/logout', to: 'sessions#destroy', via: 'delete'
  # resource :users, only: [:show, :create]
  match '/users/:id', to: 'users#show', via: 'get'
  match '/signup', to: 'users#create', via: 'post'
  match '/users/:id', to: 'users#destroy', via: 'delete'
end
