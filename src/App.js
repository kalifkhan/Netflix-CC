import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from './HomeScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { ProfileScreen } from './HomeScreen/ProfileScreen';
import { SignUPScreen } from './HomeScreen/SignUPScreen';

function App() {


  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  useEffect(() => {


    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))


      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="App">

      <Router>
        {user ? (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/signup" element={<SignUPScreen />} />
          </Routes>
        ) : (
          <LoginScreen />
        )}
      </Router>

      {/* <Router>
        {!user ? (<LoginScreen />) : 
        <Routes>  
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/HomeScreen" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />}  /> 
        </Routes>}

      </Router> */}


    </div>
  );
}

export default App;
