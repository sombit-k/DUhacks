import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:import.meta.env.MODE === "development" ?"http://localhost:3000/api":"/api",//add the route of backend here
    withCredentials: true
})

// import axios from "axios";

// export const axiosInstance=axios.create({
//     baseURL:import.meta.env.MODE === "development" ?"http://localhost:8080/api":"/api",
//     withCredentials: true
// })