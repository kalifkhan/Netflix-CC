import React, { useState } from 'react'
import './loginScreen.css';
import { SignUPScreen } from './SignUPScreen';
export const LoginScreen = () => {
    const [signIn, setSign] = useState(false);
    return (
        <div className="loginScreen" >
            <div className='loginscreen_back'>
                <img className='login_logo' atl="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            </div>
            { !signIn && <button onClick={() => (setSign(true))}
                className='signin__button'>
                Sign In
            </button>}
            <div className='background__gridient'></div>
            {signIn ? (<SignUPScreen />) : (
                <div className='loginScreen__body'>
                    <h1> Unlimited films, Tv Programs and More </h1><h2>
                        watch anywhere, cancel at any time
                    </h2>
                    <h3>
                        Ready to watch? Enter your email or restart your membership
                    </h3>
                    <div className='loginScreen_input'>
                        <form>
                            <input name=""  placeholder='Email Address' />
                            <button onClick={() => setSign(true)}
                                className='getStarted' >
                                Get Started
                            </button>
                        </form>

                    </div>
                </div>

            )}
        </div>
    )
}
