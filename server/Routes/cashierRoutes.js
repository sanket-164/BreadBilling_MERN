import express from "express";

import checkUser from "../Middlewares/checkUser.js";
import checkCashier from "../Middlewares/checkCashier.js";

import { createBill, fetchBreads, fetchBills } from "../Controllers/Cashier/cashier.js";
import { fetchProfile, updateProfile } from "../Controllers/Cashier/manageProfile.js";

const router = express.Router();

router.use(checkUser, checkCashier);

router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);

router.get('/breads', fetchBreads);
router.get('/bills', fetchBills);
router.post('/create/bill', createBill);

export default router;