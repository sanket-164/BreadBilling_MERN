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
                navigate('/authentication/changepwd', { state: { email: user.email, role: user.role } })
            }
        }
    }

    return (
        <div className='position-absolute top-50 start-50 translate-middle col-md-3'>
            <div className='border border-2'>
                <div className='m-4'>
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" onChange={handleChange} placeholder={`${user.role}'s Email`} required />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div class="form-check mx-2">
                                <input class="form-check-input" type="radio" name="role" id="radio-cashier" value="Cashier" onClick={handleChange} required />
                                <label class="form-check-label" for="radio-cashier">
                                    I am a Cashier
                                </label>
                            </div>
                            <div class="form-check mx-2">
                                <input class="form-check-input" type="radio" name="role" id="radio-admin" value="Admin" onClick={handleChange} required />
                                <label class="form-check-label" for="radio-admin">
                                    I am an Admin
                                </label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center m-2'>
                            <button type='submit' className='btn btn-primary px-4'>Send OTP</button>
                        </div>
                    </form>
                    <div class="mb-3">
                        <label for="pin" class="form-label">Verification Pin</label>
                        <input type="number" class="form-control" id="pin" name="pin" onChange={checkPin} placeholder={`Verification Pin`} required disabled/>
                    </div>
                    <div className='d-flex justify-content-center m-2'>
                        <Link to="/authentication/login" className='btn btn-primary px-4'>login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPwd
