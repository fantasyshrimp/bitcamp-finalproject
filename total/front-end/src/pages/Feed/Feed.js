import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tagbar from "../../components/Tagbar";
import List from "./List";

function Feed() {
  return (
    <div id="feed-body">
      <Tagbar />
      <div id="feed-body-sub">
        <List />
      </div>
    </div>
  );
}

export default Feed;
