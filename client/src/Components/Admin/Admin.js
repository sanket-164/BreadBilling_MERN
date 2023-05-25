import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import Cashier from './Cashiers/Cashier';
import Cashiers from './Cashiers/Cashiers';
import Bills from './Bills/Bills';
import Bill from './Bills/Bill';
import Bread from './Breads/Bread';
import Breads from './Breads/Breads';
import Settings from './Settings';

function Admin() {
    const [theme, setTheme] = useState({
        text: "light",
        color: "dark"
    });
    return (
        <BrowserRouter>
            <Navbar theme={theme}/>
            <Routes>
                <Route path='/' exact element={<Home theme={theme}/>} />
                <Route path='/profile' exact element={<Profile theme={theme}/>} />
                <Route path='/cashiers' exact element={<Cashiers theme={theme}/>} />
                <Route path='/cashier' exact element={<Cashier theme={theme}/>} />
                <Route path='/bills' exact element={<Bills theme={theme}/>} />
                <Route path='/bill' exact element={<Bill theme={theme}/>} />
                <Route path='/breads' exact element={<Breads theme={theme}/>} />
                <Route path='/bread' exact element={<Bread theme={theme}/>} />
                <Route path='/settings' exact element={<Settings theme={theme} setTheme={setTheme}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Admin
