import Cashier from "../../Models/Cashier.js";

export const fetchProfile = async (req, res) => {

    try {
        const data = await Cashier.find({ _id: req.user.id });

        if (data.length > 0) {
            res.status(200).json(data[0]);
        } else {
            res.status(400).json({ message: "Cashier does not exist" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    const { cashier } = req.body;
    
    try {
        const data = await Cashier.findByIdAndUpdate(req.user.id, cashier);

        if (data != null) {
            res.status(200).json(cashier);
        } else {
            res.status(400).json({ message: "Cashier does not exist" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}