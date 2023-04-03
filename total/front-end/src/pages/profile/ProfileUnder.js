import React from "react";
import ContentBoard from "./ContentBoard";
import FeedList from "../Feed/FeedList";

function ProfileUnder(props) {
  return (
    <div id="feed-main">
      {props.boards.map((board) => (
        <FeedList key={board.boardNo} item={board} />
      ))}
    </div>
  );
}

export default ProfileUnder;
