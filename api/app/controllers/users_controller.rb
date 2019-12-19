class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # skip_before_action :authenticate!, only: [ :index, :create ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    json_request = JSON.parse(request.body.read)
    if !json_request.blank?
      @user = User.new(json_request)
      if @user.save
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: {message: 'EROOR'}, status: :bad_request
    end
  end

  # PATCH/PUT /users/1
  def update
    json_request = JSON.parse(request.body.read)
    if @user.update(json_request)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(id: params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :token)
    end
end
