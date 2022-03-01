import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.tvmaze.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});


export default {
  getTvShows() {
    return apiClient.get("schedule");
  },
  getShowDetail(id) {
    return apiClient.get("shows/" + id);
  }
};
