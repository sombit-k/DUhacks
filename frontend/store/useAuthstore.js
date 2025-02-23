import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: null, // this will store the authenticated user

  isSigningUp: false, //to show the loading state of signup

  isLoggingIn: false, //to show the loading state of login

  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check"); //check if user is logged in----route from backend
      console.log("RES.DATA",res.data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.log("Error in useAuthStore", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async data => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/user/register", data); // Ensure this URL is correct
      console.log("user info is:", res.data.user);
      set({ authUser: res.data.user });
      console.log("signup successful");

      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logOut: async () => {
    try {
      await axiosInstance.post("/user/logout"); // Ensure this URL is correct
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  },

  logIn: async data => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/user/login", data); // Ensure this URL is correct
      set({ authUser: res.data });
      toast.success("Login successful!");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async data => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/api/user/updateuser", data); // Ensure this URL is correct
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
