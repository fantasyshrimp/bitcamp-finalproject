import "./styles/App.css";
import React from "react";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed/Feed";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/profile/Profile";
import PersonalSetting from "./pages/personalSetting/PersonalSetting";
import MemberList from "./pages/MemberManagement/MemberList";
import { Verify } from "./components/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Feed" element={<Feed />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/PersonalSetting" element={<PersonalSetting />}></Route>
          <Route path="/Faq" element={<Faq />} />
          <Route path="/admin" element={<MemberList />} />
          <Route path="/MemberList" element={<MemberList />} />
          <Route path="/auth/verify" element={<Verify />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
