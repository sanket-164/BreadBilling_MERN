import Bill from "../../Models/Bill.js"

export const fetchTodayBills = async (req, res) => {
    try {
        const data = await Bill.find().sort({ purchasedAt: "desc" });
        const todayBills = data.filter(bill => new Date(bill.purchasedAt).toDateString() === new Date().toDateString());
        
        res.status(200).json(todayBills);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBill = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Bill.find({ _id: id });

        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Bill does not exist" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBills = async (req, res) => {
    try {
        const data = await Bill.find().sort({ purchasedAt: "desc" });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const fetchBillsOfCashier = async (req, res) => {
    const { cashierId } = req.params;

    try {
        const data = await Bill.find({ cashier_id: cashierId }).sort({ purchasedAt: "desc" });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const updateBill = async (req, res) => {
    const { id } = req.params;
    const { bill } = req.body;
    try {
        const data = await Bill.findByIdAndUpdate(id, bill);

        if (data != null) {
            res.status(200).json(bill);
        } else {
            res.status(400).json({ message: "Bill does not exist" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

export const deleteBill = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Bill.findByIdAndDelete(id);

        if (data != null) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "Bill does not exist" });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}