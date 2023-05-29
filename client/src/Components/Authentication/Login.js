import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../../API/authentication';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "User"
    });
    const modalOpener = document.getElementById('modalOpener');

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        console.log(user)
        e.preventDefault();
        const { data } = await login(user.email, user.password, user.role);
        if (data.success) {
            localStorage.setItem('breadBilling', JSON.stringify({
                "token": data.token,
                "role": user.role
            }));
            localStorage.setItem('breadBillingTheme', JSON.stringify({
                "text": "dark",
                "color": "light"
            }));
            modalOpener.click();
        }
    }

    return (
        <>
            <div className='position-absolute top-50 start-50 translate-middle col-md-3'>
                <div className='border border-2'>
                    <div className='m-4'>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" onChange={handleChange} placeholder={`${user.role}'s Email`} required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" onChange={handleChange} placeholder={`${user.role}'s Password`} required />
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
                                <button type='submit' className='btn btn-primary px-4'>Login</button>
                            </div>
                            <div className='d-flex justify-content-center m-2'>
                                <Link to="/authentication/forgotpwd" className='btn btn-primary px-4'>Forgot Password</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button id="modalOpener" type="button" class="btn bg-transaprent" data-bs-toggle="modal" data-bs-target="#welcomeModal"></button>

            <div class="modal fade" id="welcomeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="welcomeModalLabel">🍞BreadBilling</h3>
                        </div>
                        <div class="modal-body d-flex justify-content-center">
                            <a href="/" className='btn btn-primary btn-lg'>Welcome</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
