class UsersController < ApplicationController
  # skip_before_filter :verify_authenticity_token
  def new
    @user = User.new
  end

  def show
    @users = User.all
    render json:{status: 'SUCCESS', users: @users}
  end

  def create
    json_request = JSON.parse(request.body.read)
    if !json_request.blank?
      @user = User.new(json_request)
      if @user.save
        render json:{status: 'SUCCESS', message: 'User created.'}
      else
        render json:{status: 'ERROR', message: 'can not create account'}
      end
    else
      render json:{status: 'EROOR', message: 'parameter is lack'}
    end
  end

  private

  def user_params
    json_request = JSON.parse(request.body.read)
    if !json_request.blank?
      personal = json_request
    else
      personal = {'status' => 500}
    end
    render :json => personal
    # params.require(:users).permit(:name, :mail, :password, :password_confirmation)
  end
end
