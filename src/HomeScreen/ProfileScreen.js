import React from 'react'
import Nav from './Nav'
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

import { selectUser } from '../features/userSlice';

export const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav> </Nav>
            <div className='profileScreen__body'>
                <h1> Profile Edit </h1>
                <div className='profileScreen__info'>
                    <img className="profile__logo"
                        alt=""
                        src="https://th.bing.com/th/id/OIP.f9091b_JKcNmy4HDTwIWiQHaIS?pid=ImgDet&rs=1"
                    />
                    <div className='profileScreen_details'>
                        <h2 className='name'> {user.email} </h2>
                        <div className='profile__plans'>
                            {/* <h3> Plans </h3> */}
                        </div>
                        <button className='signout__button' onClick={() => auth.signOut()}><Link to='/signup'>Sign Out  </Link>  </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
