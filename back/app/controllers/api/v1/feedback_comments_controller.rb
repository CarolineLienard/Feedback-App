class Api::V1::FeedbackCommentsController < ApplicationController
  before_action :set_feedback_comment, only: %i[ show update destroy ]

  # GET /feedback_comments
  def index
    @feedback_comments = FeedbackComment.all

    render json: @feedback_comments
  end

  # GET /feedback_comments/1
  def show
    render json: @feedback_comment
  end

  # GET /feedback_comment/owned/feedback_id
  def owned
    @feedback_comments = FeedbackComment.where(feedback_id: params[:feedback_id])

    render json: @feedback_comments
  end 

  # POST /feedback_comments
  def create
    @feedback_comment = FeedbackComment.new(feedback_comment_params)

    if @feedback_comment.save
      render json: @feedback_comment, status: :created, location: api_v1_feedback_url(@feedback_comment)
    else
      render json: @feedback_comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /feedback_comments/1
  def update
    if @feedback_comment.update(feedback_comment_params)
      render json: @feedback_comment
    else
      render json: @feedback_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /feedback_comments/1
  def destroy
    @feedback_comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback_comment
      @feedback_comment = FeedbackComment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feedback_comment_params
      params.require(:feedback_comment).permit(:content, :text, :feedback_id, :integer)
    end
end
