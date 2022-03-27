import React from 'react'
import { auth } from '../../firebase-config'

import './Register.css'

export const Register = ({ toggle, setToggle, changeRegEmail, changeRegPassword, register, user, logOut }) => {
    return (
        <div className='register__body flex__center'>
            <div className='register__form-container'>
                <h4>Please fill in the details to Register!</h4>
                <form action="" className='custom-form'>
                    <div className='register__form-inpgrp'>
                        <label for="emailinp">Email:</label>
                        <input type="email" id='emailinp' placeholder='Enter your email...' onChange={(e) => changeRegEmail(e)} />
                    </div>
                    <div className='register__form-inpgrp'>
                        <label for="passinp">Password:</label>
                        <input type="password" id='passinp' placeholder='Enter your password...' onChange={(e) => changeRegPassword(e)} />
                    </div>

                    <button type='button' className='custom-button' onClick={register}>Register</button>
                </form>
                <button className='custom-button' onClick={() => {setToggle(true)}}>Click to Log In instead!</button>
                {user?.email}
            </div>
        </div>
    )
}
