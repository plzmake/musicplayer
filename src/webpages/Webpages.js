import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Blog from './Blog/Blog';

export default function Webpages () {
    return (
        <Router>
            <Routes>
                <Route path="/Footer" element={<Footer/>} />
                <Route path="/Header" element={<Header/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Blog" element={<Blog/>} />
                
            </Routes>
        </Router>
    )
}

