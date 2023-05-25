import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ theme }) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme.color === 'light'? 'light': 'dark'} bg-${theme.color}`}>
            <div className="container-fluid bg-opacity-50">
                <Link className="navbar-brand" to="#">Billing System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cashiers">Cashiers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bills">Bills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/breads">Breads</Link>
                        </li>
                    </ul>
                    <div className="nav-item navbar-nav">
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar