import React from 'react'
import { Link } from 'react-router-dom'
import Sanket from '../../Images/Sanket.png'

function Navbar({ theme }) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme.color === 'light' ? 'light' : 'dark'} bg-${theme.color}`}>
            <div className="container-fluid bg-opacity-50">
                <Link className="navbar-brand" to="/cashier">🍞BreadBilling</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/cashier/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cashier/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cashier/bills">Bills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cashier/settings">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cashier/settings">Logout</Link>
                        </li>
                    </ul>
                    <Link className="nav-link" to="/cashier/sanket" style={{ fontSize: '18px' }}>
                        <img className="rounded-2" src={Sanket} alt="sanket" height={30} width={30}></img>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar