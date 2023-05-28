import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BreadBilling from '../BreadBilling';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Bill from './Bill';
import Bills from './Bills';
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
                    <Route path='/cashier/bill' exact element={<Bill theme={theme} />} />
                    <Route path='/cashier/bills' exact element={<Bills theme={theme} />} />
                    <Route path='/cashier/settings' exact element={<Settings theme={theme} setTheme={setTheme} />} />
                    <Route path='/cashier/sanket' exact element={<Sanket theme={theme} />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Cashier
