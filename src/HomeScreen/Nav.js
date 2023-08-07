import React, { useEffect, useState } from 'react'
import './Nav.css'

import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 10) {
      handleShow(false);
    } else {
      handleShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);


  return (
    <div className={`nav ${show && 'nav__black'} `} >
      <div className='nav__contents'>
        <img
          onClick={() => history('/')}
          className="nav__logo" alt=""
          src="https://th.bing.com/th/id/R.4d30a09d38e6dfe3feaa31920a680108?rik=GnWkgmKvj5nwNg&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2016_09%2f76248820160921034356.jpg&ehk=grD%2fdqb%2b43FMvO3KHmAdPwgUvOikuZkwrJQwMPdCHUM%3d&risl=&pid=ImgRaw&r=0" />
        <img
          onClick={() => history("/profile")}
          className="nav__avatar"
          alt="" src="https://th.bing.com/th/id/OIP.f9091b_JKcNmy4HDTwIWiQHaIS?pid=ImgDet&rs=1" />

        
      </div>

    </div>
  )
}

export default Nav

