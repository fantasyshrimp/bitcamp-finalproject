import React from "react";
//import { createRoot } from "react-dom/client";
import Video from "./Main/Video";

/*
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>
);
*/

function Home() {
  return (
    <div>
      <Video />
    </div>
  );
}

export default Home;
