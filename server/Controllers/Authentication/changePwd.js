import Admin from "../../Models/Admin.js";
import Cashier from "../../Models/Cashier.js";
import bcrypt from 'bcryptjs';
import dotenv from "dotenv";
dotenv.config();

export const changePwd = async (req, res) => {
    const { email, role, password } = req.body;
    try {

        if (role === "Admin") {
            const admin = await Admin.findOne({ email: email });

            if (!admin) return res.json({ success: false, message: "Email Not Found" });

            const hashPassword = await bcrypt.hash(password, 9);

            await admin.findByIdAndUpdate(admin._id, { password: hashPassword })

            res.json({ success: true, message: "Password has been changed" });

        } else if (role === "Cashier") {
            const cashier = await Cashier.findOne({ email: email });

            if (!cashier) return res.json({ success: false, message: "Email Not Found" });

            const hashPassword = await bcrypt.hash(password, 9);

            await Cashier.findByIdAndUpdate(cashier._id, { password: hashPassword })

            res.json({ success: true, message: "Password has been changed" });
        } else {
            res.json({ success: false, message: "Wrong Creadentials" });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
}