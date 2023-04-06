import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedList from "./FeedList";

function List() {
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState(false);

  function isScrolledToBottom() {
    return (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    );
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/boards/auth`)
      .then((response) => setAuth(response.data))
      .catch((error) => console.log(error));
  }, []);

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
    const response = await axios.get("http://localhost:8080/boards", {
      params: {
        page: data.length / 10,
      },
    });
    setData((prevData) => [...prevData, ...response.data]);
  }

  return (
    <div id="feed-main">
      {data.map((item) => (
        <FeedList item={item} auth={auth} />
      ))}
    </div>
  );
}

export default List;
