// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Login from './pages/Login';
import { ConfigProvider } from 'antd';
import Footer from './components/Footer';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#495E57',

        // Alias Token
         colorBorder: '#F4CE14',
      },
    }}
    >
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </main>
          <Footer/>
          </div>
      </Router>
    </ConfigProvider>

  );
}

export default App;
