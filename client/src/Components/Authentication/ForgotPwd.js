import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgotpwd } from '../../API/authentication';

function ForgotPwd() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        role: "User",
    })
    let pin;

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await forgotpwd(user.email, user.role);
        if (data.success) {
            pin = data.pin.toString();
            document.getElementById('pin').disabled = false;
        }
    }

    const checkPin = (e) => {
        console.log(e.target.value, pin, pin.length);
        if (e.target.value.length === pin.length) {
            if (e.target.value === pin) {
                navigate('/changepwd', { state: { email: user.email, role: user.role } })
            }
        }
    }

    return (
        <div className='position-absolute top-50 start-50 translate-middle col-md-3'>
            <div className='border border-2'>
                <div className='m-4'>
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} placeholder={`${user.role}'s Email`} required />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="radio" name="role" id="radio-cashier" value="Cashier" onClick={handleChange} required />
                                <label className="form-check-label" htmlFor="radio-cashier">
                                    I am a Cashier
                                </label>
                            </div>
                            <div className="form-check mx-2">
                                <input className="form-check-input" type="radio" name="role" id="radio-admin" value="Admin" onClick={handleChange} required />
                                <label className="form-check-label" htmlFor="radio-admin">
                                    I am an Admin
                                </label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center m-2'>
                            <button type='submit' className='btn btn-primary px-4'>Send OTP</button>
                        </div>
                    </form>
                    <div className="mb-3">
                        <label htmlFor="pin" className="form-label">Enter OTP</label>
                        <input type="number" className="form-control" id="pin" name="pin" onChange={checkPin} placeholder={`OTP`} required disabled/>
                    </div>
                    <div className='d-flex justify-content-center m-2'>
                        <Link to="/">login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPwd
