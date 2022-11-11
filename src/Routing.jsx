import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About/About';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';

const Routing = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default Routing;