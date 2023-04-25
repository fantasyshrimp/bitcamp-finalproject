import React from "react";
//import { createRoot } from "react-dom/client";
import Video from "./Main/Video";
import Parallax from "./Main/Parallax";
import Image from "./Main/Image";
import About from "./Main/About";
import ImageText from "./Main/ImageText";
import Scroll from "./Main/Scroll";

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
      <Parallax />
      <About />
      <Scroll />
      <Image />
    </div>
  );
}

export default Home;
