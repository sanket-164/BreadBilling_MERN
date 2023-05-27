import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/bread-billing-logo.png'

function BreadBilling({ theme }) {
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className={`card bg-${theme.color} text-${theme.text} col-md-4`}>
                <div className="p-4">
                    <img src={Logo} className={`card-img-top border border-1 border-dark`} alt="Bread-Billing-Logo" />
                </div>
                <div className="card-body">
                    <p className='fs-5'>
                        The Bread Billing System is a web-based application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
                        <br/>It is designed to streamline the billing process for a bakery or bread shop. If you like this web application don't forget to give a start.
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                        <a className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} mx-2`} rel='noreferrer' href="https://github.com/sanket-164/BreadBilling_MERN" target='_blank'>Get Source Code</a>
                        <Link to='/home' type='submit' className={`btn btn-${theme.color === 'light' ? 'dark' : 'light'} px-4 mx-2`}>Continue</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadBilling
