import { useEffect } from "react";

const NaverLogin = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = "2BhRFFWkWve7muRmTFd8"; // 발급 받은 Client ID 입력
  const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naverLogin"; // 작성했던 Callback URL 입력
  const STATE = "test";

  // 네이버 로그인 기능 및 버튼 구현
  const naverLogin = new naver.LoginWithNaverId({
    clientId: NAVER_CLIENT_ID,
    callbackUrl: NAVER_CALLBACK_URL,
    state: STATE, // state 적용 안됨?
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
      {/* 로그인 버튼 요청 URI
      https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=2BhRFFWkWve7muRmTFd8&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2FnaverLogin&version=js-2.0.0&svctype=1
      응답
      http://localhost:3000/auth/naverLogin#access_token=AAAAOJVd5J9VsZr4FoBZhQhIYUrIyQYLlVT9WChio-JeFvQiSyQiSZBlkUqeEUp5xU5m75tBg-lhFmzVk0GeAWG65Is&state=74075dc6-cfeb-40f9-87c5-d144e34a3983&token_type=bearer&expires_in=3600 */}
      <div id="naverIdLogin" />
    </>
  );
};

export default NaverLogin;
