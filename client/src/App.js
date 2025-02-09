import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Result from './pages/Results/Result';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<h1>Not Found</h1>} /> {/* Handles undefined routes */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
