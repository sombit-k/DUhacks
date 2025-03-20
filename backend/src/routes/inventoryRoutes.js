import express from "express";
import {
  showAllMedicines,
  addNewMedicines,
  showIndividualMedicine,
  editMedicine,
  deleteMedicine,
  incrementMedicineQuantity,
  decrementMedicineQuantity,
} from "../controllers/inventory.js";
import isAuthenticated from "../middleware/authorised.js";

const router = express.Router();

router.get("/:user_id/medicines", isAuthenticated, showAllMedicines);
router.post("/:user_id/medicines", isAuthenticated, addNewMedicines);
router.get("/:user_id/medicines/:medicine_id", isAuthenticated, showIndividualMedicine);
router.put("/:user_id/medicines/:medicine_id", isAuthenticated, editMedicine);
router.delete("/:user_id/medicines/:medicine_id", isAuthenticated, deleteMedicine);
router.post("/:user_id/medicines/:medicine_id/increment", isAuthenticated, incrementMedicineQuantity);
router.post("/:user_id/medicines/:medicine_id/decrement", isAuthenticated, decrementMedicineQuantity);

export default router;
