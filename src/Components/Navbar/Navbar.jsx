import React from 'react'
import logo from "../../Assets/Personalbrand.png";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({logOut}) => {

    let navigate = useNavigate();

    return (
        <section>
            <nav className='navbar__container'>

                <div className='navbar__left-group'>
                    <a href='https://www.linkedin.com/in/KaranNandwani0' target="_blank"><img src={logo} alt="Logo" /></a>
                </div>

                <div className='navbar__right-group'>
                    <a onClick={() => navigate('/')}>Home</a>
                    <a onClick={() => navigate('/Team')}>Team</a>
                    <a onClick={() => navigate('/Resources')}>Resources</a>
                    <a onClick={logOut}>Log Out</a>
                </div>

            </nav>
        </section>
    )
}
