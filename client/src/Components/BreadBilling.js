import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png'

function BreadBilling({ theme }) {
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className={`card bg-${theme.color} text-${theme.text} col-md-4`}>
                <div>
                    <img src={Logo} className={`card-img-top`} alt="Bread-Billing-Logo" />
                </div>
                <div className="card-body">
                    <p className='fs-5'>
                        The Bread Billing System is a web-based application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
                        <br /><br />
                        It is designed to streamline the billing process for a bakery or bread shop. If you like this web application don't forget to give a start.
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to='/home' type='submit' className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} px-4 py-2`}>Continue</Link>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <a className={`btn btn-${(theme.text === 'white' ? 'light' : 'dark')} ps-4`} rel='noreferrer' href="https://github.com/sanket-164/BreadBilling_MERN" target='_blank'>Get Source Code <i className="btn fs-4 fa fa-brands fa-github" style={{ color: (theme.text === 'white' ? 'black' : 'white') }}></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadBilling
