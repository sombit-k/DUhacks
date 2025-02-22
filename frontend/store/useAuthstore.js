import { create } from "zustand";
import { axiosInstance } from "../lib/axios"; // ensure this path is correct
import toast from "react-hot-toast";

export const useAuthStore=create((set,get)=>({
    authUser:null,// this will store the authenticated user

    isSigningUp:false,//to show the loading state of signup

    isLoggingIn:false,//to show the loading state of login

    isUpdatingProfile:false,
    isCheckingAuth: true,

    checkAuth:async()=>{
        try {
            const res =await  axiosInstance.get("/????/check")//check if user is logged in----route from backend
            set({authUser:res.data})

        } catch (error) {
            console.log("Error in useAuthStore",error)
            set({authUser:null})
        }
        finally{
            set({isCheckingAuth:false})
        }
    },

    signUp: async(data)=>{
        set({isSigningUp:true})
        try {
            const res=await axiosInstance.post("/?????/signup",data)//route from backend--signup route
            set({authUser:res.data})
            toast.success("Account created successfully!")
            get().connectSocket()

        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
        finally{
            set({isSigningUp:false})
        }
    },

    logOut: async()=>{
        try {
            await axiosInstance.post("/auth/logout")
            set({authUser:null})
            toast.success("Logged out successfully!")
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
    },

    logIn: async(data)=>{

        set({isLoggingIn:true})
        try {
            const res= await axiosInstance.post("/???/login",data)//set routes as backends
            set({authUser:res.data})
            toast.success("Login successfull!")
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data.message)
        }
        finally{
            set({isLoggingIn:false})
        }
    },

    updateProfile:async(data)=>{
        // set({isUpdatingProfile:true})
        // try {
        //     const res = await axiosInstance.put("/????/update-profile",data)
        // toast.success("Profile updated successfully")
        // } catch (error) {
        //     console.log(error.response)
        //     toast.error(error.response.data.message)
        // }
        // finally{
        //     set({isUpdatingProfile:false})
        // }
    },



}))