import React from "react";
import BackgroundSlider from "./BackgroundSlider";
import Tagbar from "../../components/Tagbar";
import Scroll from "./Scroll";
import Card from "./Card";

function Main() {
  return (
    <div>
      <BackgroundSlider />
      <Tagbar />
      <Card />
      <Scroll />
    </div>
  );
}

export default Main;
