class ReviewsController < ApplicationController
  before_action :set_review, only: [ :destroy, :update]
  skip_before_action :authenticate!, only: [:show, :index, :create ]

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    render json: @review
  end

  def create
    json_request = JSON.parse(request.body.read)
    user = current_user
    if !json_request.blank?
      json_request[:user_id] = user.id
      @review = Review.new(json_request)
      p "user"
      p user
      if @review.save
        render json: @review, status: :created
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    else
      render json: {message: 'EROOR'}, status: :bad_request
    end
  end

  def destroy
    @review.destroy
    render json: {message: :ok}, status: :ok
  end

  def update
    json_request = JSON.parse(request.body.read)
    if @review.update(json_request)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private

    def set_review
      @review = Review.find_by(id: params[:id])
    end

    def review_params
      params.require(:review).parmit(:user_id, :genre_id, :id, :movie_title, :comment, :spoiler)
    end

end