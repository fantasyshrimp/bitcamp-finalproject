import React, { useEffect, useState } from "react";
import "./Feed.css";
import axios from "axios";

function isScrolledToBottom() {
  return (
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
  );
}

function Tagbar() {
  return (
    <div id="tag-bar">
      <div id="tag">Animal</div>
      <div id="tag">Anime</div>
      <div id="tag">Fashion</div>
      <div id="tag">Food</div>
      <div id="tag">Landscapes</div>
      <div id="tag">Sci-Fi</div>
    </div>
  );
}

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (isScrolledToBottom()) {
        loadData();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  async function loadData() {
    const response = await axios.get("http://localhost:8080/api/boards", {
      params: {
        page: data.length / 10,
      },
    });
    setData((prevData) => [...prevData, ...response.data]);
  }

  return (
    <div id="feed-main">
      {data.map((item) => (
        <div
          id="feed-list"
          className="feed-list"
          key={item.fileName}
          style={{
            backgroundImage: `url(${item.fileName})`,
            backgroundSize: "cover",
          }}
        >
          <div id="feed-writer" className="feed-item">
            <p id="feed-small-font" key={item.writerName}>
              {item.writerName}
            </p>
          </div>
          <div id="feed-like" className="feed-item">
            <p id="feed-small-font" key={item.likeCnt}>
              {item.likeCnt}
            </p>
          </div>
          <div id="feed-content" className="feed-item">
            <p id="feed-small-font" key={item.originContent}>
              {item.originContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

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
