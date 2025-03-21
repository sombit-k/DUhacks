import Medicine from "../models/inventory.model.js";

export const showAllMedicines = async (req, res) => {
  const { user_id } = req.params;
  try {
    const medicines = await Medicine.find({ userUuid: user_id });
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: "Error fetching medicines", error: err });
  }
};

export const addNewMedicines = async (req, res) => {
  const { name, description, category, quantity, expiryDate, price } = req.body;
  const { user_id } = req.params; // Extract userUuid from URL
  try {
    const newMedicine = new Medicine({ name, description, category, quantity, expiryDate, price, userUuid: user_id });
    await newMedicine.save();
    res.status(201).json({ message: "Medicine added", data: newMedicine });
  } catch (err) {
    res.status(500).json({ message: "Error adding Medicine", error: err });
  }
};

export const showIndividualMedicine = async (req, res) => {
  const { user_id, medicine_id } = req.params;
  try {
    const medicine = await Medicine.findOne({ uuid: medicine_id, userUuid: user_id }); // Include userUuid in the query
    console.log(medicine);

    if (!medicine) {
      console.log("Medicine not found");
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(medicine);
  } catch (err) {
    console.log("Error fetching Medicine", err);
    res.status(500).json({ message: "Error fetching Medicine", error: err });
  }
};

export const editMedicine = async (req, res) => {
  const { user_id, medicine_id } = req.params;
  const { name, description, category, quantity, expiryDate, price } = req.body;
  try {
    const updatedMedicine = await Medicine.findOneAndUpdate(
      { uuid: medicine_id },
      { name, description, category, quantity, expiryDate, price },
      { new: true }
    );
    if (!updatedMedicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json({ message: "Medicine updated", data: updatedMedicine });
  } catch (err) {
    res.status(500).json({ message: "Error updating Medicine", error: err });
  }
};

export const deleteMedicine = async (req, res) => {
  const { user_id, medicine_id } = req.params;
  try {
    const deletedMedicine = await Medicine.findOneAndDelete({ uuid: medicine_id}); // Use uuid instead of _id
    if (!deletedMedicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json({ message: "Medicine deleted", data: deletedMedicine });
  } catch (err) {
    res.status(500).json({ message: "Error deleting Medicine", error: err });
  }
};

export const incrementMedicineQuantity = async (req, res) => {
  const { user_id, medicine_id } = req.params;

  try {
    const medicine = await Medicine.findOne({ uuid: medicine_id, userUuid: user_id }); // Use uuid instead of _id
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    medicine.quantity += 1;
    await medicine.save();
    res.json({ message: "Medicine quantity incremented", data: medicine });
  } catch (err) {
    res.status(500).json({ message: "Error incrementing Medicine quantity", error: err });
  }
};

export const decrementMedicineQuantity = async (req, res) => {
  const { user_id, medicine_id } = req.params;

  try {
    const medicine = await Medicine.findOne({ uuid: medicine_id, userUuid: user_id }); // Use uuid instead of _id
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    medicine.quantity -= 1;

    if (medicine.quantity < 0) {
      medicine.quantity = 0;
    }

    await medicine.save();
    res.json({ message: "Medicine quantity decremented", data: medicine });
  } catch (err) {
    res.status(500).json({ message: "Error decrementing Medicine quantity", error: err });
  }
};
