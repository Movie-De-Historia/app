class SessionsController < ApplicationController
  before_action :set_user, only: [:create]

  def create
    # メールアドレスでユーザーを検索
    user = User.find_by(email: params[:session][:email])
    # パスワードの一致を検証
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      render json:{status: 'SUCCESS', message: 'login'}
    else
      render json:{status: 'ERROR'}
    end
  end

  def destroy
    user = User.find(params[:email])
    session[:user_id] = nil
    render json:{status: 'SUCCESS', message: 'delete account'}
  end

  private

    def set_user
      @user = User.find_by!(email: session_params[:email])
    rescue
      flash.now[:danger] = t('.flash.invalid_mail')
      render json:{status: "none"}
    end

    # 許可するパラメータ
    def session_params
      json_request = JSON.parse(request.body.read)
      params.require(:session).permit(json_request[:email], json_request[:password])
    end
end
