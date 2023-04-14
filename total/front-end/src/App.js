import "./styles/App.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed/Feed";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/profile/Profile";
import PersonalSetting from "./pages/personalSetting/PersonalSetting";
import MemberList from "./pages/Admin/MemberList";
import Stats from "./pages/Admin/Stats";
import { LoginModal, SignupModal, Verify } from "./components/auth";
import NaverLoginHandler from "./handler/NaverLoginHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerifyHandler from "./handler/EmailVerifyHandler";

const useVisitedCheck = (sendVisitorData) => {
  const checkAndSendVisitorData = () => {
    const currentDate = new Date().toLocaleDateString();
    const lastVisitedDate = localStorage.getItem("visited");

    if (!lastVisitedDate) {
      localStorage.setItem("visited", currentDate);
      sendVisitorData();
    } else if (lastVisitedDate !== currentDate) {
      localStorage.setItem("visited", currentDate);
      sendVisitorData();
    }
  };

  useEffect(() => {
    checkAndSendVisitorData();
  }, [sendVisitorData]);
};

function App() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(null);
  const [showExternalLogin, setShowExternalLogin] = useState(null);

  const sendVisitorData = useCallback(async () => {
    // console.log("sendVisitorData 불러옴");
    try {
      const now = new Date();
      const koreanTimeOffset =
        now.getTimezoneOffset() * 60000 + 9 * 60 * 60 * 1000;
      const koreanDate = new Date(now.getTime() + koreanTimeOffset);
      const year = koreanDate.getFullYear();
      const month = String(koreanDate.getMonth() + 1).padStart(2, "0");
      const day = String(koreanDate.getDate()).padStart(2, "0");
      const hours = String(koreanDate.getHours()).padStart(2, "0");
      const minutes = String(koreanDate.getMinutes()).padStart(2, "0");
      const seconds = String(koreanDate.getSeconds()).padStart(2, "0");
      const visitedDt = `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`;

      // console.log("방문자 접속일시:", visitedDt);

      const response = await fetch("/visitors", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          visitedDt: visitedDt,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
    } catch (error) {
      console.error("실패 사유:", error);
    }
  }, []);

  //방문자 체크 커스텀 훅 사용
  useVisitedCheck(sendVisitorData);

  return (
    <>
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
            <Route
              path="/"
              element={
                <Home
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
            <Route
              path="/PersonalSetting"
              element={<PersonalSetting />}
            ></Route>
            <Route path="/Faq" element={<Faq />} />
            <Route path="/admin" element={<MemberList />} />
            <Route path="/admin/stats" element={<Stats />} />
            <Route path="/MemberList" element={<MemberList />} />
            <Route path="/auth/verify" element={<EmailVerifyHandler />} />
            <Route path="/auth/naverlogin" element={<NaverLoginHandler />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

      <SignupModal
        signupShow={signupShow}
        setSignupShow={setSignupShow}
        setLoginShow={setLoginShow}
        showExternalLogin={signupShow}
        setShowExternalLogin={setShowExternalLogin}
        isLoginModal={isLoginModal}
        setIsLoginModal={setIsLoginModal}
      />

      <LoginModal
        loginShow={loginShow}
        setLoginShow={setLoginShow}
        setSignupShow={setSignupShow}
        showExternalLogin={loginShow}
        setShowExternalLogin={setShowExternalLogin}
        isLoginModal={isLoginModal}
        setIsLoginModal={setIsLoginModal}
      />
    </>
  );
}

export default App;
