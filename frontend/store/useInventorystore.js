// this will be used to add and fetch inventory from backend.

import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios"; 
import toast from "react-hot-toast";

export const useInventoryStore = create((set, get) => ({
    //create functions and states based on backend structures and routes
    inventory: {}, // this will store the inventory

    isFetchingInventory: false,
    isAddingInventory: false,
    isUpdatingInventory: false,
    isDeletingInventory: false,

    getAllInventory: async (userId) => {
        try {
            
            set({ isFetchingInventory: true });
            const res = await axiosInstance.get(`inventory/${userId}/medicines`);
            set({ inventory: res.data });

        } catch (error) {
            console.log("Error in fetchAllInventory,useInventoryStore", error);
            set({ inventory: null });
        } finally {
            set({ isFetchingInventory: false });
        }
    },

    addNewInventory: async (userId, data) => { //data={form data}
        set({ isAddingInventory: true });
        try {
            const res = await axiosInstance.post(`inventory/${userId}/medicines`, data);
            console.log("Inventory added successfully");
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            set({ isAddingInventory: false });
            toast.success("Inventory added successfully!");

        }
    },

    getOneInventory: async (userId, medicineId) => {
        try {
            set({ isFetchingInventory: true });
            const res = await axiosInstance.get(`/${userId}/dashboard/${medicineId}`);
        } catch (error) {
            console.log("Error in fetchOneInventory,useInventoryStore", error);
            set({ inventory: null });
        } finally {
            set({ isFetchingInventory: false });
        }
    },

    updateInventory: async (userId, medicineId, data) => {
        set({ isUpdatingInventory: true });
        try {
            const res = await axiosInstance.put(`/${userId}/dashboard/${medicineId}`, data);
            console.log("Inventory updated successfully");
            toast.success("Inventory updated successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            set({ isUpdatingInventory: false });
        }
    },

    deleteInventory: async (userId, medicineId) => {
        set({ isDeletingInventory: true });
        try {
            const res = await axiosInstance.delete(`/${userId}/dashboard/${medicineId}`);
            console.log("Inventory deleted successfully");
            toast.success("Inventory deleted successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            set({ isDeletingInventory: false });
        }
    },
}));
