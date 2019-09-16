class SessionsController < ApplicationController
  before_action :set_user, only: [:create]

  def create
    if @user.authenticate(session_params[:password])
      sign_in(@user)
      render json:{status: 'SUCCESS', message: ''}
    else
      flash.now[:danger] = t('.flash.invalid_password')
      render json:{status: 'ERROR', message: 'can not create account'}
    end
  end

  def destroy
    user = User.find(params[:email])
    render json:{status: 'SUCCESS', 'delete account'}
  end

  private

    def set_user
      @user = User.find_by!(email: session_params[:email])
    rescue
      flash.now[:danger] = t('.flash.invalid_mail')
      render action: 'new'
    end

    # 許可するパラメータ
    def session_params
      params.require(:session).permit(:email, :password)
    end
end
