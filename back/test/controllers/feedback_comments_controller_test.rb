require "test_helper"

class FeedbackCommentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feedback_comment = feedback_comments(:one)
  end

  test "should get index" do
    get feedback_comments_url, as: :json
    assert_response :success
  end

  test "should create feedback_comment" do
    assert_difference("FeedbackComment.count") do
      post feedback_comments_url, params: { feedback_comment: { content: @feedback_comment.content, feedback_id: @feedback_comment.feedback_id, integer: @feedback_comment.integer, text: @feedback_comment.text } }, as: :json
    end

    assert_response :created
  end

  test "should show feedback_comment" do
    get feedback_comment_url(@feedback_comment), as: :json
    assert_response :success
  end

  test "should update feedback_comment" do
    patch feedback_comment_url(@feedback_comment), params: { feedback_comment: { content: @feedback_comment.content, feedback_id: @feedback_comment.feedback_id, integer: @feedback_comment.integer, text: @feedback_comment.text } }, as: :json
    assert_response :success
  end

  test "should destroy feedback_comment" do
    assert_difference("FeedbackComment.count", -1) do
      delete feedback_comment_url(@feedback_comment), as: :json
    end

    assert_response :no_content
  end
end
