import React from 'react'
import { auth } from '../../firebase-config'

import './Login.css'

export const Login = ({ setToggle, changeEmail, changePassword, logIn, user }) => {
    return (
        <div className='login__body flex__center'>
            <div className='login__form-container'>

                <h4>Please fill in the details to log in!</h4>
                <form action="" className='custom-form'>
                    <div className='login__form-inpgrp'>
                        <label for="emailinp">Email:</label>
                        <input type="email" id='emailinp' placeholder='Enter your email...' onChange={(e) => changeEmail(e)} />
                    </div>
                    <div className='login__form-inpgrp'>
                        <label for="passinp">Password:</label>
                        <input type="password" id='passinp' placeholder='Enter your password...' onChange={(e) => changePassword(e)} />
                    </div>

                    <button type='button' className='custom-button' onClick={logIn}>Login</button>
                </form>


                <button className='custom-button' onClick={() => {setToggle(false)}}>Click to Register instead!</button>
                {user?.email}

            </div>
        </div>
    )
}
