import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios"; // Corrected import path
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null, // this will store the authenticated user
  
  isSigningUp: false, // to show the loading state of signup
  isLoggingIn: false, // to show the loading state of login
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check", {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      console.log("RES.DATA", res.data);
      set({ authUser: res.data.user });
    } catch (error) {
      console.log("Error in useAuthStore", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
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
      await axiosInstance.post("/user/logout", {}, {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  },

  logIn: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/user/login", data, {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      set({ authUser: res.data.user });
      toast.success("Login successful!");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/user/updateuser", data, {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      console.log("Updated user details:", res.data.user); // Print updated user details
      set({ authUser: res.data.user });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error in updateProfile:", error);
      console.error("Error details:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to update profile.");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
