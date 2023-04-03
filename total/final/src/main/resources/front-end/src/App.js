import "./styles/reset.css";
import "./styles/App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
<<<<<<< Updated upstream:total/final/src/main/resources/front-end/src/App.js
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Test1 from "./pages/Test1";
=======
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/profile/Profile";
import BackgroundSlider from "./pages/Main/BackgroundSlider";
>>>>>>> Stashed changes:total/front-end/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Feed" element={<Feed />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
<<<<<<< Updated upstream:total/final/src/main/resources/front-end/src/App.js
          <Route path="/Test1" element={<Test1 />}></Route>
=======
          <Route path="/BackgroundSlider" element={<BackgroundSlider />} />
>>>>>>> Stashed changes:total/front-end/src/App.js
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
