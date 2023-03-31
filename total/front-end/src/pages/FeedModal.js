import React from "react";
import "./FeedModal.css";

function FeedModal(props) {
  console.log(props);
  return (
    <>
      <div id="feed-modal-image" style={{ display: "table" }}>
        <div
          id="feed-modal-pic"
          style={{
            backgroundImage: `url(${props.data.fileName})`,
            backgroundSize: "contain",
          }}
        >
          <div
            id="modal-like-icon"
            style={{
              backgroundImage: `url(/heart.png)`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      <div id="feed-modal-content">
        <div id="feed-modal-profile">
          <div
            id="feed-modal-propic"
            style={{
              backgroundImage: `url(${props.data.writerPic})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div id="feed-modal-writer" key={props.data.writerName}>
            {props.data.writerName}
          </div>
          <div id="feed-modal-follow"></div>
          {/* <div id="feed-modal-setting">설정</div> */}
          {/* <div
            id="feed-modal-like"
            style={{
              backgroundImage: `url(/menu.png)`,
              backgroundSize: "cover",
            }}
          ></div> */}
        </div>
        <div id="feed-modal-originalcontent" key={props.data.originContent}>
          <p>{props.data.originContent}</p>
          <div id="feed-modal-day" key={props.data.writeDt}>
            {props.data.writeDt}
          </div>
          <div id="feed-modal-tag" key={props.data.tag}>
            {props.data.tag}
          </div>
        </div>
        <div id="feed-modal-commentinput">
          <input id="feed-modal-inputbox"></input>
        </div>
        <div id="feed-modal-comscroll">
          <div id="feed-modal-comment">
            <div id="feed-modal-commentpic"></div>
            <div id="feed-modal-com">
              <div id="feed-modal-commentwriter">
                <div id="feed-modal-comwriter">oro2eoe2</div>
                <div id="feed-modal-comdt">2020-20-20</div>
              </div>
              <div id="feed-modal-commentcontent">
                include it or remove the dependency array
              </div>
            </div>
            <div id="feed-modal-commentheart"></div>
          </div>
          <div id="feed-modal-comment">
            <div id="feed-modal-commentpic"></div>
            <div id="feed-modal-com">
              <div id="feed-modal-commentwriter">
                <div id="feed-modal-comwriter">oro2eoe2</div>
                <div id="feed-modal-comdt">2020-20-20</div>
              </div>
              <div id="feed-modal-commentcontent">
                include it or remove the dependency array remove the dependency
                array react-hooks/exhaustive-deps Line 54:6: React Hook
                useEffect has a missing dependency: 'loadData'. Either include
                it or remove the dependency
              </div>
            </div>
            <div id="feed-modal-commentheart"></div>
          </div>
          <div id="feed-modal-comment">
            <div id="feed-modal-commentpic"></div>
            <div id="feed-modal-com">
              <div id="feed-modal-commentwriter">
                <div id="feed-modal-comwriter">oro2eoe2</div>
                <div id="feed-modal-comdt">2020-20-20</div>
              </div>
              <div id="feed-modal-commentcontent">
                include it or remove the dependency array
              </div>
            </div>
            <div id="feed-modal-commentheart"></div>
          </div>
          <div id="feed-modal-comment">
            <div id="feed-modal-commentpic"></div>
            <div id="feed-modal-com">
              <div id="feed-modal-commentwriter">
                <div id="feed-modal-comwriter">oro2eoe2</div>
                <div id="feed-modal-comdt">2020-20-20</div>
              </div>
              <div id="feed-modal-commentcontent">
                include it or remove the dependency array remove the dependency
                array react-hooks/exhaustive-deps Line 54:6: React Hook
                useEffect has a missing dependency: 'loadData'. Either include
                it or remove the dependency
              </div>
            </div>
            <div id="feed-modal-commentheart"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedModal;
