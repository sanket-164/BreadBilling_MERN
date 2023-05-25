import express from "express";
import { fetchProfile, updateProfile } from "../Controllers/Admin/forAdmin.js";
import { hireCashier, updateCashier, fetchCashier, fetchCashiers, deleteCashier } from "../Controllers/Admin/forCashiers.js";
import { addBread, deleteBread, updateBread, fetchBread, fetchBreads } from "../Controllers/Admin/forBreads.js";
import { fetchBills, fetchBill, deleteBill, updateBill } from "../Controllers/Admin/forBills.js";

const router = express.Router();

router.get('/profile', fetchProfile);
router.patch('/update', updateProfile);


router.get('/cashier/:id', fetchCashier);
router.get('/cashiers', fetchCashiers);
router.post('/hire/cashier', hireCashier);
router.patch('/update/cashier/:id', updateCashier);
router.delete('/delete/cashier/:id', deleteCashier);


router.get('/bill/:id', fetchBill);
router.get('/bills', fetchBills);
router.patch('/update/bill/:id', updateBill);
router.delete('/delete/bill/:id', deleteBill);


router.get('/bread/:id', fetchBread);
router.get('/breads', fetchBreads);
router.post('/add/bread', addBread);
router.patch('/update/bread/:id', updateBread);
router.delete('/delete/bread/:id', deleteBread);


export default router;