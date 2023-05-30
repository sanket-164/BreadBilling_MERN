import express from "express";

import checkUser from '../Middlewares/checkUser.js';
import checkAdmin from '../Middlewares/checkAdmin.js';

import { fetchProfile, updateProfile } from "../Controllers/Admin/manageProfile.js";
import { hireCashier, updateCashier, fetchCashier, fetchCashiers, deleteCashier } from "../Controllers/Admin/manageCashiers.js";
import { addBread, deleteBread, updateBread, fetchBread, fetchBreads } from "../Controllers/Admin/manageBreads.js";
import { fetchBills, fetchTodayBills, fetchBill, deleteBill, updateBill, fetchBillsOfCashier } from "../Controllers/Admin/manageBills.js";

const router = express.Router();

router.use(checkUser, checkAdmin);


router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);

router.get('/cashier/:id', fetchCashier);
router.get('/cashiers', fetchCashiers);
router.post('/hire/cashier', hireCashier);
router.patch('/update/cashier/:id', updateCashier);
router.delete('/delete/cashier/:id', deleteCashier);


router.get('/today/bills', fetchTodayBills);
router.get('/bill/:id', fetchBill);
router.get('/cashier/bills/:cashierId', fetchBillsOfCashier);
router.get('/bills', fetchBills);
router.patch('/update/bill/:id', updateBill);
router.delete('/delete/bill/:id', deleteBill);


router.get('/bread/:id', fetchBread);
router.get('/breads', fetchBreads);
router.post('/add/bread', addBread);
router.patch('/update/bread/:id', updateBread);
router.delete('/delete/bread/:id', deleteBread);


export default router;