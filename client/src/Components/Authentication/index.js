import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import ForgotPwd from './ForgotPwd';
import ChangePwd from './ChangePwd';

function Authentication() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Login />} />
                    <Route path='/forgotpwd' exact element={<ForgotPwd />} />
                    <Route path='/changepwd' exact element={<ChangePwd />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Authentication
