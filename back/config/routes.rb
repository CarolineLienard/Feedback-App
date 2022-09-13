Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :feedbacks
      get 'feedbacks/category/:category', to: "feedbacks#filter",defaults: {format: "js"}

      resources :feedback_comments
      get 'feedback_comments/owned/:feedback_id', to: "feedback_comments#owned",defaults: {format: "js"}

    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
