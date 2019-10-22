class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :destroy, :update]
  skip_befor_action :authenticate!, only: [ :index, :create ]

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    render json: @review
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
end
