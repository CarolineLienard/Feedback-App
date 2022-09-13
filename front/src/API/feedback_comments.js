import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/feedback_comments"

// Get All comments
export function getFeedbackComment() {
  return axios.get(API_URL).then((response) => response.data)
}

// Get one comment
export function getOneFeedbackComment(id) {
  return axios.get(`${API_URL}/${id}`).then((response) => response.data)
}

// Get all comments from one feedback
export function getOwnedComment(feedback_id) {
  return axios.get(`${API_URL}/owned/${feedback_id}`).then((response) => response.data)
}

// Post one comment
export function addFeedbackComment(data) {
  return axios.post(API_URL, data).then((response) => response.data)
}