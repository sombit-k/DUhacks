import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"http://localhost:3000/api",//add the route of backend here
    withCredentials: true
})