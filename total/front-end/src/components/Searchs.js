import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function Searchs(props) {
  const [searchTerm, setSearchTerm] = useState("");
  // const Navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("검색어: ", searchTerm);
      axios
        .post(
          "http://localhost:8080/boards/keyword",
          {},
          {
            params: {
              keyword: searchTerm,
            },
          }
        )
        .then((response) => {
          if (response.data.status === "success") {
            if (window.location.pathname === "/Feed") {
              window.location.reload();
            } else {
              // Navigate("/Feed");
              window.location.href = "/Feed";
            }
          } else {
            console.log("에러");
          }
        })
        .catch((error) => {});
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form className="d-flex ms-3">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        style={{
          borderRadius: "0",
          backgroundColor: `var(--aim-base-tone)`,
          color: `var(--aim-text-default)`,
        }}
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="success"
        style={{
          borderRadius: "0",
        }}
      >
        Search
      </Button>
    </Form>
  );
}

export default Searchs;
