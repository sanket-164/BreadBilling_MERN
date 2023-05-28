import express from "express";
import { createBill, fetchProfile, updateProfile, fetchBreads } from "../Controllers/Cashier/cashier.js";
const router = express.Router();

router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);

router.get('/breads', fetchBreads);
router.post('/create/bill', createBill);

export default router;