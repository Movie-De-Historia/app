class SessionsController < ApplicationController
  skip_before_action :authenticate!, only: [ :sign_in ]

  def sign_in
    json_request = JSON.parse(request.body.read)
    # user = User.find_by(email: params[:session][:email])
    @user = User.find_by(email: json_request["email"])
    p json_request
    # if user && user.authenticate(params[:session][:password])
    if @user && @user.authenticate(json_request["password"])
      # session[:user_id] = @user.id
      render json: @user, status: :ok
    else
      render json: {message: "ログインできませんでした"}, status: :bad_request
    end
  end

  def destroy
    @current_user = nil
    render json: :ok
  end
end
