import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreadBilling from '../BreadBilling';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Bread from './Bread';
import CreateBill from './CreateBill';
import Bills from './Bills';
import BillReceipt from '../BillReceipt';
import Settings from '../Settings';
import Sanket from '../Sanket';

function Cashier() {
    const [theme, setTheme] = useState({
        text: "light",
        color: "dark"
    });
    return (
        <div className='container'>
            <BrowserRouter>
                <Navbar theme={theme} />
                <Routes>
                    <Route path='/cashier' exact element={<BreadBilling theme={theme} />} />
                    <Route path='/cashier/home' exact element={<Home theme={theme} />} />
                    <Route path='/cashier/profile' exact element={<Profile theme={theme} />} />
                    <Route path='/cashier/bread' exact element={<Bread theme={theme} />} />
                    <Route path='/cashier/createbill' exact element={<CreateBill theme={theme} />} />
                    <Route path='/cashier/billreceipt' exact element={<BillReceipt theme={theme} />} />
                    <Route path='/cashier/bills' exact element={<Bills theme={theme} />} />
                    <Route path='/cashier/settings' exact element={<Settings theme={theme} setTheme={setTheme} />} />
                    <Route path='/cashier/sanket' exact element={<Sanket theme={theme} />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Cashier
