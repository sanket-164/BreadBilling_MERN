import Bread from '../../Models/Bread.js';
import Bill from '../../Models/Bill.js';

export const createBill = async (req, res) => {
    const { bill } = req.body;
    console.log(bill.breads);
    try {
        const data = await Bill.create({ ...bill, cashier_id: "6470689447f5caa5de9c8e3e" });

        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBreads = async (req, res) => {

    try {
        const data = await Bread.find();

        res.status(200).json(data);
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBills = async (req, res) => {

    try {
        const data = await Bill.find();

        res.status(200).json(data);
    } catch (error) {
       console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}