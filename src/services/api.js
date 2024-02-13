import axios from "axios";

export const api = axios.create({
    // prod url:
    baseURL: "https://rocketmovies-api-8w6z.onrender.com",

    // dev url:
    //baseURL: "http://localhost:3333", 

    withCredentials: true,
})