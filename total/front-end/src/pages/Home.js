import React from "react";
//import { createRoot } from "react-dom/client";
import Video from "./Main/Video";
import Parallax from "./Main/Parallax";

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
    </div>
  );
}

export default Home;
