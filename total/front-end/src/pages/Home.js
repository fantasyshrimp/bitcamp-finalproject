import React from "react";
//import { createRoot } from "react-dom/client";
import Video from "./Main/Video";
import About from "./Main/About";
import AboutImage from "./Main/AboutImage";
import Services from "./Main/Services";
import AnimateOnScrollImage from "./Main/AnimateOnScrollImage";
import "./Home.css";
import ImageStatic from "./Main/ImageStatic";
import AnimateGrid from "./Main/AnimateGrid";

/*
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>
);
*/

function Home(props) {
  return (
    <div>
      <Video
        loginShow={props.loginShow}
        setLoginShow={props.setLoginShow}
        signupShow={props.signupShow}
        setSignupShow={props.setSignupShow}
        isLoginModal={props.isLoginModal}
        setIsLoginModal={props.setIsLoginModal}
        showExternalLogin={props.showExternalLogin}
        setShowExternalLogin={props.setShowExternalLogin}
      />
      <About />
      <AboutImage />
      <div className="home-container">
        <p className="home-text">
          Artify는 독창적인 AI기술을 이용한 SNS서비스로, 한글로 작성된 문장을
          화려한 그림으로 변환해주는 놀라운 기능을 제공합니다. 이 서비스를 통해
          사용자들은 일상의 순간들을 예술 작품 또는 유쾌한 그림으로 탈바꿈하는
          새로운 경험을 만끽할 수 있습니다.
        </p>
      </div>
      <ImageStatic />
      <AnimateOnScrollImage />
      <div className="home-container">
        <p className="home-text">
          삶에서 가장 감명 깊은 순간이나 특별한 이벤트를 기록하고 싶다면,
          Artify를 통해 그림으로 표현해보세요. <br />
          이렇게 만들어진 그림을 SNS에 게시하여 친구들과 함께 공유하고 소통하여
          즐거운 추억을 만들 수 있습니다.
        </p>
      </div>
      <AnimateGrid />
      <div className="home-container">
        <p className="home-text">
          Artify의 AI 기술은 한글을 깊이 이해하고 분석하여 사용자가 입력한
          문장에 기반한 독특한 그림을 생성합니다. <br /> 이를 통해 Artify는
          사용자의 개성과 창의력을 끝없이 펼칠 수 있는 무대를 제공합니다.
        </p>
      </div>
      <Services />
      <div className="home-container-last justify-content-center">
        <p className="home-text-last">지금 바로 Artify 를 사용해 보세요.</p>
      </div>
    </div>
  );
}

export default Home;
