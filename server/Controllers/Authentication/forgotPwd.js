import Admin from "../../Models/Admin.js";
import Cashier from "../../Models/Cashier.js";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const email_user = process.env.EMAIL_USER;
const email_pass = process.env.EMAIL_PASS;

export const forgotPwd = async (req, res) => {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: email_user,
            pass: email_pass
        }
    });

    const pin = Math.floor((Math.random() * 1000000) + 1);

    const { email, role } = req.body;

    try {

        if (role === "Admin") {
            const admin = await Admin.findOne({ email: email });

            if (!admin) return res.json({ success: false, message: "Email Not Found" });

            const mailOptions = {
                from: email_user,
                to: admin.email,
                subject: 'Your Code',
                text: pin.toString()
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json({ success: false });
                } else if (info) {
                    res.json({ success: true, pin: pin, message: `OTP sent to ${admin.email}` });
                }
            });

        } else if (role === "Cashier") {
            const cashier = await Cashier.findOne({ email: email });

            if (!cashier) return res.json({ success: false, message: "Email Not Found" });

            const mailOptions = {
                from: email_user,
                to: cashier.email,
                subject: 'Your Code',
                text: pin.toString()
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json({ success: false });
                } else if (info) {
                    res.json({ success: true, pin: pin, message: `OTP sent to ${cashier.email}` });
                }
            });

        } else {
            res.json({ success: false, message: "Wrong Creadentials" });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
}