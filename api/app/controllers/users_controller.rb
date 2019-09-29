class UsersController < ApplicationController
  # skip_before_filter :verify_authenticity_token

  def show
    @user = User.find(params[:id])
    render json:{status: 'SUCCESS', user: @user}
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

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: { status: 'SUCCESS', message: 'deleted the post', data: @user }
  end
end
