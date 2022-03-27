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
                    <img src={logo} alt="Logo" />
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
