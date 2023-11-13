import axios from "axios";

export const api = axios.create({
    // prod url:
    baseURL: "https://rocketmovies-api-eh6g.onrender.com",

    // dev url:
    //baseURL: "http://localhost:3333", 

    withCredentials: true,
})