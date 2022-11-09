import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
// import NavBar from './Component/NavBar/NavBar';

const Routing = () => {
    return(
        <Router>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </Router>
    )
}

export default Routing;