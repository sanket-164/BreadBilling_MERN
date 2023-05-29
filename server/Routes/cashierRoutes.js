import express from "express";
import { createBill, fetchBreads } from "../Controllers/Cashier/cashier.js";
import { fetchProfile, updateProfile } from "../Controllers/Cashier/manageProfile.js";

const router = express.Router();

router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);

router.get('/breads', fetchBreads);
router.post('/create/bill', createBill);

export default router;