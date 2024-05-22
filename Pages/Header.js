import React from 'react';
import logo from '../assets/logo.jpg';
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div className="container">
                <img src={logo} alt="" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page">Home
                                <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/batches">Batches</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link text-bg-danger rounded-5 ms-5" to="/login">Admin Login</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
  )
}
export default Header;