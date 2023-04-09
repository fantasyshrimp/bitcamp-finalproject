import { useEffect } from "react";

const NaverLogin = ({ setGetToken, setUserInfo }) => {
  const { naver } = window;
  const NAVER_CLIENT_ID = "2BhRFFWkWve7muRmTFd8"; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naverLogin"; // 작성했던 Callback URL 입력

  // 네이버 로그인 기능 및 버튼 구현
  const naverLogin = new naver.LoginWithNaverId({
    clientId: NAVER_CLIENT_ID,
    callbackUrl: NAVER_CALLBACK_URL,
    isPopup: false,
    loginButton: {
      color: "green",
      type: 1,
      height: 60,
    },
  });

  useEffect(() => {
    naverLogin.init();
  }, []);

  return (
    <>
      <div id="naverIdLogin" />
    </>
  );
};

export default NaverLogin;
