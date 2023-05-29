import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreadBilling from '../BreadBilling';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import Cashier from './Cashiers/Cashier';
import Cashiers from './Cashiers/Cashiers';
import Bills from './Bills/Bills';
import BillReceipt from '../BillReceipt';
import Bread from './Breads/Bread';
import Breads from './Breads/Breads';
import Settings from '../Settings';
import Sanket from '../Sanket';

function Admin() {
    const [theme, setTheme] = useState({
        text: "light",
        color: "dark"
    });
    return (
        <BrowserRouter>
            <Navbar theme={theme}/>
            <Routes>
                <Route path='/admin' exact element={<BreadBilling theme={theme}/>} />
                <Route path='/admin/home' exact element={<Home theme={theme}/>} />
                <Route path='/admin/profile' exact element={<Profile theme={theme}/>} />
                <Route path='/admin/cashiers' exact element={<Cashiers theme={theme}/>} />
                <Route path='/admin/cashier' exact element={<Cashier theme={theme}/>} />
                <Route path='/admin/bills' exact element={<Bills theme={theme}/>} />
                <Route path='/admin/billreceipt' exact element={<BillReceipt theme={theme}/>} />
                <Route path='/admin/breads' exact element={<Breads theme={theme}/>} />
                <Route path='/admin/bread' exact element={<Bread theme={theme}/>} />
                <Route path='/admin/settings' exact element={<Settings theme={theme} setTheme={setTheme}/>} />
                <Route path='/admin/sanket' exact element={<Sanket theme={theme} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Admin
