import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios"; // Corrected import path
import toast from "react-hot-toast";

export const useInventoryStore = create((set, get) => ({
  inventory: [],
  chartData: [],
  seriesData :{},
  oneInventory:{},

  isFetchingInventory: false,
  isAddingInventory: false,
  isUpdatingInventory: false,
  isDeletingInventory: false,

  getAllInventory: async (userId) => {
    try {
      set({ isFetchingInventory: true });
      const res = await axiosInstance.get(`/inventory/${userId}/medicines`); // Corrected URL
      set({ inventory: Array.isArray(res.data) ? res.data : [] }); // Ensure res.data is an array
      const chartData = res.data.map((item) => item.name);
      const seriesData = res.data.map((item) => item.quantity);
      set({ chartData, seriesData });
    } catch (error) {
      set({ inventory: [] }); // Set as an empty array on error
    } finally {
      set({ isFetchingInventory: false });
    }
  },

  addNewInventory: async (userId, data) => {
    set({ isAddingInventory: true });
    try {
      const res = await axiosInstance.post(`/inventory/${userId}/medicines`, data); // Corrected URL
      set((state) => ({ inventory: [...state.inventory, res.data.data] }));
      toast.success("Inventory added successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAddingInventory: false });
      await get().getAllInventory(userId); // Ensure updated values
    }
  },

  getOneInventory: async (userId, medicineId) => {
    try {
      set({ isFetchingInventory: true });
      const res = await axiosInstance.get(`/inventory/${userId}/medicines/${medicineId}`); 
      set({ oneInventory: res.data});
    } catch (error) {
      console.log("Error in fetchOneInventory,useInventoryStore", error);
      set({ oneInventory: oneInventory?oneInventory:{} });
    } finally {
      set({ isFetchingInventory: false });
    }
  },

  updateInventory: async (userId, medicineId, data) => {
    set({ isUpdatingInventory: true });
    try {
      const res = await axiosInstance.put(`/inventory/${userId}/medicines/${medicineId}`, data); // Corrected URL
      set((state) => ({
        inventory: state.inventory.map((item) =>
          item.uuid === medicineId ? res.data.data : item
        ),
      }));
      toast.success("Inventory updated successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isUpdatingInventory: false });
      await get().getAllInventory(userId); // Ensure updated values
    }
  },

  deleteInventory: async (userId, medicineId) => {
    set({ isDeletingInventory: true });
    try {
      await axiosInstance.delete(`/inventory/${userId}/medicines/${medicineId}`); // Corrected URL
      set((state) => ({
        inventory: state.inventory.filter((item) => item.uuid !== medicineId),
      }));
      set({oneInventory:{}});
      toast.success("Inventory deleted successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isDeletingInventory: false });
      await get().getAllInventory(userId); // Ensure updated values
    }
  },

  incrementMedicineQuantity: async (userId, medicineId) => {
    try {
      const res = await axiosInstance.post(`/inventory/${userId}/medicines/${medicineId}/increment`); // Corrected URL
      set((state) => ({
        inventory: state.inventory.map((item) =>
          item.uuid === medicineId ? res.data.data : item
        ),
      }));
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    } finally {
      await get().getAllInventory(userId); // Ensure updated values
    }
  },

  decrementMedicineQuantity: async (userId, medicineId) => {
    try {
      const res = await axiosInstance.post(`/inventory/${userId}/medicines/${medicineId}/decrement`); // Corrected URL
      set((state) => ({
        inventory: state.inventory.map((item) =>
          item.uuid === medicineId ? res.data.data : item
        ),
      }));
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    } finally {
      await get().getAllInventory(userId); // Ensure updated values
    }
  },

}));
