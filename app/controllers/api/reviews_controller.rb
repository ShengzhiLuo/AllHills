class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = selected_review
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy 
        @review = selected_review
        if @review
            @review.destroy
            render :show
        else
            render ['Review does not exist']
        end
    end

    def index
        @reviews = Review.where(trail_id: params[:trail_id])
        render :index
    end

    private
  def selected_review
    Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:description, :rating, :trail_date, :user_id, :trail_id)
  end
end
