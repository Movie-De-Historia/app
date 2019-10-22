class MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update]
    
      def index
        @messages = Message.all
    
        render json: @messages
      end
    
      def show
          render json: @message
      end
    
      def create
        json_request = JSON.parse(request.body.read)
        if !json_request.blank?
          @message = Message.new(json_request)
          if @message.save
            render json: @message, status: :created, location: @message
          else
            render json: @message.errors, status: :unprocessable_entity
          end
        else
          render json: {message: 'EROOR'}, status: :bad_request
        end
      end

      def update
        json_request = JSON.parse(request.body.read)
        if @message.update(json_request)
          render json: @message
        else
          render json: @message.errors, status: :unprocessable_entity
        end
      end
      
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_message
          @message = Massage.find(params[:id])
        end
    
        # Only allow a trusted parameter "white list" through.
        def message_params
          params.require(:message).permit(:message)
        end
end
