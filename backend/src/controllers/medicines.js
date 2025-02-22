import Medicine from "../models/medicines.models.js";

export const showAllMedicines = async (req, res) => {
    const { user_id } = req.params;
    try {
        const medicines = await Medicine.find({ userId: user_id });
        res.json(medicines);
    } catch (err) {
        res.status(500).json({ message: "Error fetching medicines", error: err });
    }
};

export const addNewMedicines = async (req, res) => {
    const { name, description, image, category, quantity, expiryDate, price } = req.body;
    const { user_id } = req.params; // Extract userId from URL

    try {
        const newMedicine = new Medicine({ name, description, image, category, quantity, expiryDate, price, userId: user_id });
        await newMedicine.save();
        res.status(201).json({ message: "Medicine added", data: newMedicine });
    } catch (err) {
        res.status(500).json({ message: "Error adding Medicine", error: err });
    }
};

export const showIndividualMedicine = async (req, res) => {
    const { user_id, medicine_id } = req.params;
    try {
        const medicine = await Medicine.findOne({ _id: medicine_id, userId: user_id });
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
    const { name, description, image, category, quantity, expiryDate, price } = req.body;
    try {
        const updatedMedicine = await Medicine.findOneAndUpdate(
            { _id: medicine_id, userId: user_id },
            { name, description, image, category, quantity, expiryDate, price },
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
        const deletedMedicine = await Medicine.findOneAndDelete({ _id: medicine_id, userId: user_id });
        if (!deletedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.json({ message: "Medicine deleted", data: deletedMedicine });
    } catch (err) {
        res.status(500).json({ message: "Error deleting Medicine", error: err });
    }
};
