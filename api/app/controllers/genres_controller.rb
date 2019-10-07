class GenresController < ApplicationController
	before_action :set_genre, only: [:show]
  def index
    @genres = Genre.all

    render json: @genres
  end

  def show
      render json: @genre
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_genre
      @genre = Genre.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def genre_params
      params.require(:genre).permit(:name)
    end
end
