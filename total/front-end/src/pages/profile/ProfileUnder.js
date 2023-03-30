import React from "react";
import ContentBoard from "./ContentBoard";

function ProfileUnder(props) {
    return ( 
        <div id="feed-main">
        {props.boards.map((board) => (
            <ContentBoard key = {board.boardNo} 
                          board = {board} 
                          />))} 
        </div>    
    );
}

export default ProfileUnder;