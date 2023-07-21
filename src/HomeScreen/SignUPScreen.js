import React, { useRef } from 'react'
import './SignUPScreen.css';
import { auth } from '../firebase';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import db from '../firebase.js';


export const SignUPScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
=======

import db  from '../firebase.js';


export const SignUPScreen = () => {
  
  const emailRef = useRef(null);
  const passwordRef= useRef(null);
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
<<<<<<< HEAD
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
=======
    ).then( (authUser)=>{
      console.log(authUser);
    }).catch((error)=>{
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269
      alert(error.message)
    })

  }

  const signIn = (e) => {
<<<<<<< HEAD
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message);
=======

    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then( (authUser) =>
    {console.log(authUser)}
    ).catch((error)=>{
        alert(error.message);
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269
    })
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1> Sign In</h1>
<<<<<<< HEAD
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type="submit" onClick={signIn}><Link to='/' className='singup_link'> Sign In  </Link></button>
=======
        <input  ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='password' type='password' />
        <button type="submit" onClick={signIn}>Sign In </button>
>>>>>>> 14ee36544b742b3b23639d1c03f532561f3c7269
        <h4> <span className='signup__gray'>New To Netflix ? </span>
          <span className='signup__link' onClick={register}>Sign Up now </span>
        </h4>
      </form>


    </div>
  )
}
