import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-eh6g.onrender.com"
})