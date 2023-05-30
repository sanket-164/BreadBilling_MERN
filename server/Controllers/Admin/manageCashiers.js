import Cashier from "../../Models/Cashier.js";
import bcrypt from "bcryptjs";

export const fetchCashier = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Cashier.find({ _id: id });

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

export const fetchCashiers = async (req, res) => {

    try {
        let data = await Cashier.find().sort({ joinedAt: 'desc' });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const hireCashier = async (req, res) => {
    const { cashier } = req.body;

    const hashedPassword = await bcrypt.hash(cashier.password, 9);
    console.log(cashier);

    try {
        const data = Cashier.create({ ...cashier, password: hashedPassword });

        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}


export const updateCashier = async (req, res) => {
    const { id } = req.params;
    const { cashier } = req.body;

    try {
        const data = await Cashier.findByIdAndUpdate(id, {
            name: cashier.name,
            email: cashier.email,
            phone: cashier.phone,
            image: cashier.image,
            gender: cashier.gender,
            birthday: cashier.birthday
        });

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

export const deleteCashier = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Cashier.findByIdAndDelete(id);

        if (data != null) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Cashier does not exist" });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}