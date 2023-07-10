import React from 'react';
import './App.css';
import HomeScreen from  './HomeScreen/HomeScreen'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/HomeScreen" element={<HomeScreen />} />
      
      </Routes>
    </Router>
    
   
    </div>
  );
} 

export default App;
