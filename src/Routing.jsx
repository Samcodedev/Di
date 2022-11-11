import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About/About';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import Register from './Component/Register/Register';

const Routing = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Routing;