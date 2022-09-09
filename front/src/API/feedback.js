import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/feedbacks"

// Get All feedbacks
export function getFeedback() {
  return axios.get(API_URL).then((response) => response.data)
}

// Get one post
export function getOneFeedback(id) {
  return axios.get(`${API_URL}/${id}`).then((response) => response.data)
}

// Post one feedback
export function addFeedback(data) {
  return axios.post(API_URL, data).then((response) => response.data)
}

// Update feedback
export function updateFeedback(id, data) {
  return axios.put(`${API_URL}/${id}`, data).then((response) => response.data)
}

// Delete feedback
export function deleteFeedback(id) {
  return axios.delete(`${API_URL}/${id}`).then((response) => response.data)
}

// Category filter
export function getFilterCategory(categoryFilter) {
  return axios.get(`${API_URL}/category/${categoryFilter}`).then((response) => response.data)
}
