import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Whitening from './pages/whitening/Whitening';
import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Cavities from './pages/cavities/Cavities';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/whitening" element={<Whitening/>}/>
                <Route path="/appointments" element={<Appointments/>}/>
                <Route path="/cavities" element={<Cavities/>}/>
            </Routes>
        </>
    );
}

export default App;