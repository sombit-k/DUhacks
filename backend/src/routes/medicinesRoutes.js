import express from "express";
import Medicine from "../models/medicines.models.js";
// import authMiddleware from "../middleware/auth.js";
import * as medicineController from "../controllers/medicines.js";

const router = express.Router();

// Add Medicine for logged-in user
router.post("/:user_id/dashboard/newmedicine", medicineController.addNewMedicines);

// Fetch all Medicines of logged-in user
router.get("/:user_id/dashboard", medicineController.showAllMedicines);

// Fetch individual Medicine by ID
router.get("/:user_id/dashboard/:medicine_id", medicineController.showIndividualMedicine);

// Edit Medicine by ID
router.put("/:user_id/dashboard/:medicine_id", medicineController.editMedicine);

// Delete Medicine by ID
router.delete("/:user_id/dashboard/:medicine_id", medicineController.deleteMedicine);

export default router;
