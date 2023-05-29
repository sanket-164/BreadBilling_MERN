import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { changePwd } from '../../API/authentication';

function ChangePwd() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, role } = location.state;
    const [user, setUser] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        console.log(user)
        e.preventDefault();
        if (user.password === user.confirmPassword) {
            const { data } = await changePwd(email, user.password, role);
            console.log(email, role, data);
            if (data.success === true) {
                navigate('/');
            } else {

            }
        } else {

        }
    }

    return (
        <div className='position-absolute top-50 start-50 translate-middle col-md-3'>
            <div className='border border-2'>
                <div className='m-4'>
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password" onChange={handleChange} placeholder={`${role}'s Password`} required />
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" onChange={handleChange} placeholder={`${role}'s Email`} required />
                        </div>
                        <div className='d-flex justify-content-center m-2'>
                            <button type='submit' className='btn btn-primary px-4'>Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePwd
