import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-secondary  py-3">
            <div className="container">
                <Link className="navbar-brand fa-2x fw-bold text-white" to=""> START FRAMEWORK </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  py-3  " id="navbarSupportedContent">
                    <ul className="navbar-nav fw-bolder ms-auto mb-2">
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>

}
