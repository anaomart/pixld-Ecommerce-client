import axios from "axios";
const URL = "http://localhost:8080/api/v1";

export const publicRequest = axios.create({
  baseURL: URL,
});

export const userRequest = axios.create({
  baseURL: URL,
  header: {
    token:
      "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTBjNjEyYjkwNmVlNmUyMjllMmE0NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzg4MjA4OTAsImV4cCI6MTY3OTA4MDA5MH0.t_CO6rKfjIeL74rHE1qsptbvU37fSziWRlJVLiJBTWM",
  },
});
