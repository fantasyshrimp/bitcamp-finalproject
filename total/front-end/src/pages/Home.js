import React from "react";
import { createRoot } from "react-dom";
import Video from "./Main/Video";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>
);

function Home() {
  return (
    <div>
      <Video />
    </div>
  );
}

export default Home;
