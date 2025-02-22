// this will be used to add and fetch inventory from backend.

import { create } from "zustand";
import { axiosInstance } from "../lib/axios"; 
import toast from "react-hot-toast";

export const useInventoryStore=create((set,get)=>({
    //create functions and states based on backend structures and routes
}))