import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Threads from './components/Threads/Threads';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/threads" element={<Threads />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
