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
  getShowDetail(showId) {
    return apiClient.get("shows/" + showId);
  },
  getCasts(showId) {
    return apiClient.get(`shows/${showId}/cast`);
  }
};
