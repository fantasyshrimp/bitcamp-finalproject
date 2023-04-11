import React from "react";
import ReactDOM from "react-dom";
import Video from "./Main/Video";

ReactDOM.render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <Video />
    </div>
  );
}

export default Home;
