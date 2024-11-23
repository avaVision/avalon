import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import './App.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </Router>
    );
};

export default App;
