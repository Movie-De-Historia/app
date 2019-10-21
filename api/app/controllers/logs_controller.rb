class LogsController < ApplicationController
	before_action :set_log, only: [:show]

  def index
    @logs = Log.all

    render json: @logs
  end

  def show
      render json: @log
  end

  def create
    json_request = JSON.parse(request.body.read)
    if !json_request.blank?
      @log = Log.new(json_request)
      if @log.save
        render json: @log, status: :created, location: @log
      else
        render json: @log.errors, status: :unprocessable_entity
      end
    else
      render json: {message: 'EROOR'}, status: :bad_request
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_log
      @log = Log.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def log_params
      params.require(:log).permit(:name)
    end
end
