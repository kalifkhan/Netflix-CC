import React, { useRef } from 'react'
import './SignUPScreen.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import db from '../firebase.js';


export const SignUPScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message)
    })

  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message);
    })
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1> Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type="submit" onClick={signIn}><Link to='/' className='singup_link'> Sign In  </Link></button>
        <h4> <span className='signup__gray'>New To Netflix ? </span>
          <span className='signup__link' onClick={register}><Link to='/' className='singup_link'> Sign Up  </Link></span>
        </h4>
      </form>


    </div>
  )
}
