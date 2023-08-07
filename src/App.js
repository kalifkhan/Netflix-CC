import React, { Children, useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from './HomeScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { ProfileScreen } from './HomeScreen/ProfileScreen';
import { SignUPScreen } from './HomeScreen/SignUPScreen';
import { ContentByWeather } from './contentBYweather/ContentByWeather';
import WeatherAPI from './contentBYweather/WeatherAPI';

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
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            {/* <Route path="/signup" element={<SignUPScreen />} /> */}
            <Route path="/contentBYweather" element={<ContentByWeather />} />
          </Routes>

        ) : (
          <LoginScreen />
        )}
      </Router>

<<<<<<< HEAD
=======
      {/* <Router>
        {!user ? (<LoginScreen />) : 
        <Routes>  
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/HomeScreen" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />}  /> 
        </Routes>}

      </Router> */}


>>>>>>> 322cf77f2294ba6ceabaef7949dc1d5c67e56c61
    </div>
  );
}

export default App;
