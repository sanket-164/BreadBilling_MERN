import Cashier from "../../Models/Cashier.js";

export const fetchProfile = async (req, res) => {

    try {
        const data = await Cashier.find();

        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Cashier does not exist" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { cashier } = req.body;
    try {
        const data = await Cashier.findByIdAndUpdate(id, cashier);

        if (data != null) {
            res.status(200).json(cashier);
        } else {
            res.status(400).json({ message: "Cashier does not exist" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}