import axios from "axios";
import create from "zustand";

export const useInventoryStore = create((set) => ({
  inventory: [],
  getAllInventory: async (userId) => {
    try {
      const response = await axios.get(`/api/inventory/${userId}/medicines`);
      set({ inventory: response.data });
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  },
  addNewInventory: async (userId, product) => {
    try {
      const response = await axios.post(`/api/inventory/${userId}/medicines`, product); // Corrected URL
      set((state) => ({ inventory: [...state.inventory, response.data.data] }));
    } catch (error) {
      console.error("Error adding new inventory:", error);
      throw error;
    }
  },
  // ...other actions
}));
