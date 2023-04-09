import React from "react";
import "./Feed.css";
import Sortbar from "../../components/Sortbar";
import List from "./List";

function Feed() {
  return (
    <div id="feed-body">
      <Sortbar />
      <div id="feed-body-sub">
        <List />
      </div>
    </div>
  );
}

export default Feed;
