import "./styles/reset.css";
import "./styles/App.css";
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Test1 from './pages/Test1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Feed" element={<Feed />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Test1" element={<Test1 />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;