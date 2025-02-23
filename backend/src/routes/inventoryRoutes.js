import express from "express";
// import authMiddleware from "../middleware/auth.js";
import * as inventoryController from "../controllers/inventory.js";

const router = express.Router();

// Add Medicine for logged-in user
router.post("/:user_id/dashboard/newmedicine", inventoryController.addNewMedicines);

// Fetch all Medicines of logged-in user
router.get("/:user_id/dashboard", inventoryController.showAllMedicines);

// Fetch individual Medicine by ID
router.get("/:user_id/dashboard/:medicine_id", inventoryController.showIndividualMedicine);

// Edit Medicine by ID
router.put("/:user_id/dashboard/:medicine_id", inventoryController.editMedicine);

// Delete Medicine by ID
router.delete("/:user_id/dashboard/:medicine_id", inventoryController.deleteMedicine);

// Increment Medicine Quantity
router.patch("/:user_id/dashboard/:medicine_id/increment", inventoryController.incrementMedicineQuantity);

// Decrement Medicine Quantity
router.patch("/:user_id/dashboard/:medicine_id/decrement", inventoryController.decrementMedicineQuantity);

export default router;
