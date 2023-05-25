import express from "express";
import { createBill, fetchProfile, updateProfile } from "../Controllers/Cashier/cashier.js";
const router = express.Router();

router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);

router.post('/create/bill', createBill);

export default router;