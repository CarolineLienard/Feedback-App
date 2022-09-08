import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/feedbacks"

export function getFeedback() {
  return axios.get(API_URL).then((response) => response.data)
}

export function addFeedback(data) {
  return axios.post(API_URL, data).then((response) => response.data)
}

export function getFilterCategory(categoryFilter) {
  return axios.get(`${API_URL}/category/${categoryFilter}`).then((response) => response.data)
}
