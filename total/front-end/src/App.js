import "./styles/App.css";
import React from "react";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed/Feed";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/profile/Profile";
import PersonalSetting from "./pages/personalSetting/PersonalSetting";
import MemberList from "./pages/Admin/MemberList";
import { Verify } from "./components/auth";
import NaverLoginHandler from "./handler/NaverLoginHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(null);
  const [showExternalLogin, setShowExternalLogin] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Navbars
          isLoginModal={isLoginModal}
          setIsLoginModal={setIsLoginModal}
          showExternalLogin={showExternalLogin}
          setShowExternalLogin={setShowExternalLogin}
          loginShow={loginShow}
          setLoginShow={setLoginShow}
          signupShow={signupShow}
          setSignupShow={setSignupShow}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Feed"
            element={
              <Feed
                isLoginModal={isLoginModal}
                setIsLoginModal={setIsLoginModal}
                showExternalLogin={showExternalLogin}
                setShowExternalLogin={setShowExternalLogin}
                loginShow={loginShow}
                setLoginShow={setLoginShow}
                signupShow={signupShow}
                setSignupShow={setSignupShow}
              />
            }
          ></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/PersonalSetting" element={<PersonalSetting />}></Route>
          <Route path="/Faq" element={<Faq />} />
          <Route path="/admin" element={<MemberList />} />
          <Route path="/MemberList" element={<MemberList />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/auth/naverlogin" element={<NaverLoginHandler />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
