import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/feedbacks"

export function getFeedback() {
  return axios.get(API_URL).then((response) => response.data)
}
